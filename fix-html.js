const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "build");
const files = fs.readdirSync(buildDir).filter(f => f.endsWith(".html"));

files.forEach(file => {
  const fullPath = path.join(buildDir, file);
  let content = fs.readFileSync(fullPath, "utf8");

  // דלג אם אין תגית <html>
  if (!content.includes("<html")) return;

  // שמור גיבוי
  fs.writeFileSync(fullPath + ".bak", content);

  // תקן את החלק העליון של הדף
  content = content.replace(/<!DOCTYPE html>[\s\S]*?<head>([\s\S]*?)<\/head>/, match => {
    const newHead = `
<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>עבודתי</title>
  <link rel="stylesheet" href="styles.css">
</head>`.trim();
    return newHead;
  });

  fs.writeFileSync(fullPath, content, "utf8");
  console.log(`✔ תיקון בוצע: ${file}`);
});

console.log("✨ כל הקבצים עודכנו בהצלחה.");
