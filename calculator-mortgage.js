```js
// calculator-mortgage.js
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const P = parseFloat(document.getElementById('principal').value)    || 0;
  const annualRate = parseFloat(document.getElementById('annualRate').value) || 0;
  const years      = parseFloat(document.getElementById('termYears').value)  || 0;
  const type       = document.getElementById('calcType').value;

  if (P <= 0 || annualRate < 0 || years <= 0) {
    return document.getElementById('result').textContent =
      'אנא הכנס/י ערכים חיוביים לכל השדות.';
  }

  const rMonthly = (annualRate / 100) / 12;
  const n = Math.ceil(years * 12);

  // חישוב שפיצר
  const factor = Math.pow(1 + rMonthly, n);
  const paymentShapitzer = P * (rMonthly * factor) / (factor - 1);

  // חישוב גרייס (תשלום ריבית בלבד)
  const paymentGrace = P * rMonthly;

  let output = '';
  if (type === 'shapitzer' || type === 'both') {
    output += `שפיצר - תשלום חודשי קבוע: ₪${paymentShapitzer.toFixed(2)}`;
  }
  if (type === 'both') {
    output += '\n';
  }
  if (type === 'grace' || type === 'both') {
    output += `גרייס - ריבית חודשית בלבד: ₪${paymentGrace.toFixed(2)}`;
  }

  document.getElementById('result').textContent = output;
});
```