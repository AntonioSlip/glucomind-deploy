from fastapi import APIRouter, HTTPException
import pandas as pd

from .predict_schema import PredictIn
from .model_loader import model, model_columns

router = APIRouter(tags=["Predição"])

@router.post("/predict")
def predict(payload: PredictIn):
    # Entrada → DataFrame
    df = pd.DataFrame([payload.dict()])

    # Reordenar colunas
    try:
        df = df[model_columns]
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Erro nas colunas: {e}")

    # Predição
    try:
        proba = model.predict_proba(df)[0][1]
        pred = int(model.predict(df)[0])
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao prever: {e}")

    return {
        "predicted_label": pred,
        "probability": proba,
        "probability_percent": round(proba * 100, 2)
    }
