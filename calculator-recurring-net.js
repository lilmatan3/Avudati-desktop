// calculator-recurring-net.js
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const grossAnnual = parseFloat(document.getElementById('annualGross').value) || 0;
  const taxRate     = parseFloat(document.getElementById('taxRate').value)     / 100 || 0;
  const niRate      = parseFloat(document.getElementById('niRate').value)      / 100 || 0;
  const healthRate  = parseFloat(document.getElementById('healthRate').value)  / 100 || 0;
  const freq        = parseInt  (document.getElementById('frequency').value)   || 1;

  const output = document.getElementById('result');
  if (grossAnnual <= 0 ||
      taxRate < 0 || taxRate > 1 ||
      niRate < 0  || niRate > 1  ||
      healthRate < 0 || healthRate > 1 ||
      freq <= 0) {
    output.textContent = 'אנא ודא/י שהכנסת ערכים תקינים בכל השדות.';
    return;
  }

  // חישוב נטו שנתי
  const totalRate = taxRate + niRate + healthRate;
  const netAnnual = grossAnnual * (1 - totalRate);

  // חישוב נטו לתקופה
  const netPerPeriod = netAnnual / freq;

  output.textContent =
    `נטו לתשלום בכל תקופה: ₪${netPerPeriod.toFixed(2)} ` +
    `(מתוך ברוטו שנתי ₪${grossAnnual.toFixed(2)})`;
});
