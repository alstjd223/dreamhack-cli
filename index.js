const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Wargame</title>
    </head>
    <body>
      <div class="challenge">
        <h1 class="challenge-info">||cat\u00A0flag</h1>
        <a href="https://sfo2.digitaloceanspaces.com/fake/path/wargame.zip" target="_blank" class="challenge-download">
          Download
        </a>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Fake Wargame site running at http://localhost:${PORT}`);
});
