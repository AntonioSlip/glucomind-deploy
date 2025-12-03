document
  .getElementById("diabetesForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const payload = {
      gender: document.getElementById("gender").value || "Female",
      age: parseFloat(document.getElementById("age").value) || 0,
      hypertension:
        parseInt(document.getElementById("hypertension").value) || 0,
      heart_disease:
        parseInt(document.getElementById("heart_disease").value) || 0,
      smoking_history:
        document.getElementById("smoking_history").value || "No Info",
      bmi: parseFloat(document.getElementById("bmi").value) || 0,
      HbA1c_level: parseFloat(document.getElementById("hba1c").value) || 0,
      blood_glucose_level:
        parseFloat(document.getElementById("glucose").value) || 0,
    };

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const txt = await response.text();
        throw new Error("Erro na requisição: " + txt);
      }

      const data = await response.json();

      const riscoPercent = data.probability_percent;
      const resultCard = document.getElementById("resultCard");
      const barFill = document.getElementById("riskBarFill");
      const title = document.getElementById("resultTitle");
      const desc = document.getElementById("resultDesc");

      document.getElementById("resultContainer").style.display = "block";
      resultCard.className = "result-card";

      barFill.style.width = "0%";
      setTimeout(() => (barFill.style.width = riscoPercent + "%"), 100);

      if (riscoPercent >= 50) {
        resultCard.classList.add("result-high");
        title.innerText =
          "YOUR PROFILE IS SIMILAR TO PEOPLE WITH A HIGHER LIKELIHOOD OF DIABETES";
        desc.innerText = `The AI estimated a ${riscoPercent}% probability based on the data provided.
This information is only indicative and does not replace professional evaluation.
If possible, consider consulting a healthcare professional.`;
        barFill.style.backgroundColor = "var(--risk-high)";
      } else {
        resultCard.classList.add("result-low");
        title.innerText =
          "YOUR PROFILE IS SIMILAR TO PEOPLE WITH A LOWER LIKELIHOOD OF DIABETES";
        desc.innerText = `Estimated probability: ${riscoPercent}%.
This result is not a diagnosis. Continue monitoring your health regularly.`;
        barFill.style.backgroundColor = "var(--risk-low)";
      }

      document
        .getElementById("resultContainer")
        .scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      alert("Erro ao comunicar com o backend: " + err.message);
      console.error(err);
    }
  });
