# 🧠 GLUCOMIND-IA  
Modelo de Predição de Risco de Diabetes com FastAPI

O **GLUCOMIND-IA** é composto por um backend em **FastAPI** e um frontend simples em **HTML, CSS e JavaScript**, que consome a API para exibir o resultado de risco de diabetes.  
A IA foi treinada no **Google Colab**, utilizando Scikit-Learn, e exportada em formato `.pkl` para ser carregada pelo backend.

---

## 📌 Sobre o Projeto

Este projeto permite que o usuário insira seus dados no frontend e receba como resposta a probabilidade estimada de risco de diabetes.  
A API processa os dados usando um modelo pré-treinado e retorna a previsão.

---

## 🎨 Frontend

O frontend foi desenvolvido utilizando:

- **HTML**
- **CSS**
- **JavaScript (puro)**

Ele consome o endpoint do backend (`/predict`) para enviar os dados do formulário e exibir o resultado.  
Não utiliza frameworks como React, Angular ou Vue — é tudo feito com JavaScript nativo (Fetch API).

---

## 🚀 Backend — Tecnologias Utilizadas

### Linguagens e Bibliotecas
- **FastAPI** `0.115.0`
- **Uvicorn**
- **Pandas**
- **Joblib**
- **Scikit-Learn** `1.6.1`
- **Pydantic**
- **NumPy** `1.26.4`

### Modelo de IA
- Treinado no **Google Colab**
- Exportado como **PKL** via `joblib.dump()`

---

## 📦 Requirements do Backend

- fastapi==0.115.0
- uvicorn
- pandas
- joblib
- scikit-learn==1.6.1
- pydantic
- numpy==1.26.4


---

## 🛠️ Como Executar o Projeto

```bash

 1️⃣ Clone o repositório
git clone https://github.com/beatrizcardosol/GLUCOMIND-IA.git
cd GLUCOMIND-IA

2️⃣Crie um ambiente virtual

Linux/ macOs
python3 -m venv .venv
source .venv/bin/activate

Windows
python -m venv .venv
.venv\Scripts\activate

3️⃣ Instale as dependências
pip install -r requirements.txt

4️⃣ Execute o backend (FastAPI)

O backend está localizado dentro de app_backend.
A porta utilizada é 8000.

uvicorn app_backend.main:app --reload --port 8000


API disponível em:

http://localhost:8000


Documentação automática:

http://localhost:8000/docs

🎯 Frontend — Como usar

O frontend pode ser aberto diretamente no navegador:

app_frontend/index.html


Ele se comunica com o backend enviando requisições via:

fetch("http://localhost:8000/predict", { ... })


Certifique-se de que o backend está rodando antes de abrir o HTML.

📂 Estrutura do Repositório
GLUCOMIND-IA/
│
├── app_backend/        → Código da API (FastAPI)
│   ├── main.py
│   ├── modelo.pkl
│   └── ...
│
├── app_frontend/       → HTML, CSS e JavaScript
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── requirements.txt
└── README.md
