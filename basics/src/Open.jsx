import React, { useState } from 'react';

export const DiseaseDietPlan = () => {
  const [disease, setDisease] = useState('');
  const [dietPlan, setDietPlan] = useState('');

  const dietPlans = {
    Chronic: {
      Diabetes: 'Low sugar, high fiber, avoid processed foods.',
      Hypertension: 'Low sodium, rich in potassium, calcium, and magnesium.',
      Arthritis: 'Anti-inflammatory diet, avoid processed foods, omega-3 fatty acids.',
      Asthma: 'Avoid allergens, processed foods, and consume anti-inflammatory foods like turmeric.',
      HeartDisease: 'Low cholesterol, low saturated fat, and rich in fiber and omega-3.',
    },
    Infectious: {
      Influenza: 'Hydration, vitamin C-rich foods, and broth-based soups.',
      Tuberculosis: 'Protein-rich diet, plenty of calories, and vitamin D supplementation.',
      Malaria: 'High-protein diet, hydration, and fresh fruits rich in vitamin C.',
    },
    Deficiency: {
      Anemia: 'Iron-rich foods like spinach, red meat, lentils, and vitamin C for absorption.',
      Rickets: 'Calcium, vitamin D-rich foods, and phosphorus.',
      Scurvy: 'Citrus fruits, strawberries, tomatoes, and broccoli rich in vitamin C.',
    },
    Others: {
      Obesity: 'Calorie deficit diet with balanced nutrients.',
      Gout: 'Low-purine diet, avoid red meats, alcohol, and processed foods.',
      CeliacDisease: 'Strict gluten-free diet, rich in whole foods and gluten-free grains.',
    },
  };

  const diseaseSections = {
    Chronic: ['Diabetes', 'Hypertension', 'Arthritis', 'Asthma', 'HeartDisease'],
    Infectious: ['Influenza', 'Tuberculosis', 'Malaria'],
    Deficiency: ['Anemia', 'Rickets', 'Scurvy'],
    Others: ['Obesity', 'Gout', 'CeliacDisease'],
  };

  const handleDiseaseSelection = (e) => {
    const selectedDisease = e.target.value;
    setDisease(selectedDisease);

    const plan = Object.keys(dietPlans).reduce((acc, section) => {
      return dietPlans[section][selectedDisease] || acc;
    }, 'No diet plan available for the specified disease.');

    setDietPlan(plan);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Common Diseases</h1>

      

      <div style={{ marginTop: '30px' }}>
        <select
          onChange={handleDiseaseSelection}
          style={{ padding: '10px', width: '300px', fontSize: '16px' }}
          value={disease}
        >
          <option value="" disabled>
            Select a disease
          </option>
          {Object.keys(diseaseSections).map((section) => (
            <optgroup key={section} label={section}>
              {diseaseSections[section].map((diseaseName, index) => (
                <option key={index} value={diseaseName}>
                  {diseaseName}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {dietPlan && (
        <div style={{ marginTop: '30px', fontSize: '18px', color: 'blue' }}>
          <h3>Diet Plan for {disease}:</h3>
          <p>{dietPlan}</p>
        </div>
      )}
    </div>
  );
};

