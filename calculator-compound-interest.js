// calculator-compound-interest.js
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const P = parseFloat(document.getElementById('principal').value) || 0;
  const r = (parseFloat(document.getElementById('rate').value) || 0) / 100;
  const n = parseInt  (document.getElementById('times').value)   || 1;
  const t = parseFloat(document.getElementById('years').value)   || 0;

  if (P <= 0 || r < 0 || n < 1 || t <= 0) {
    document.getElementById('result').textContent =
      'אנא הזן/י ערכים תקינים בכל השדות.';
    return;
  }

  // A = P * (1 + r/n)^(n*t)
  const amount = P * Math.pow(1 + r / n, n * t);
  const interest = amount - P;

  document.getElementById('result').textContent =
    `ערך עתידי: ₪${amount.toFixed(2)} (ריבית צבירה: ₪${interest.toFixed(2)})`;
});
