from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .predict import router as PredictRouter

app = FastAPI(title="GlucoMind IA - API de Previsão")

# Habilita CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rotas
app.include_router(PredictRouter)

@app.get("/")
def root():
    return {"service": "GlucoMind IA", "endpoint": "/predict"}
