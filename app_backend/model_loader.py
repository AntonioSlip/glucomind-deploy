import joblib
import json
import os

# Diretório atual (app/core)
BASE = os.path.dirname(__file__)
ML_DIR = os.path.join(BASE, "ml")

# Carregar modelo
try:
    model = joblib.load(os.path.join(ML_DIR, "modelo_diabetes.pkl"))
except Exception as e:
    raise RuntimeError(f"Erro ao carregar modelo: {e}")

# Carregar colunas originais
try:
    with open(os.path.join(ML_DIR, "model_columns.json"), "r") as f:
        model_columns = json.load(f)
except Exception as e:
    raise RuntimeError(f"Erro ao carregar colunas: {e}")
