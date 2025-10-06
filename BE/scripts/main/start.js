// Descrizione: script che avvia il BE
const {spawn} = require('child_process');

const command = `nodemon ./src/app.ts`;

const process = spawn(command, {shell: true, stdio: 'inherit'});

process.on('exit', code => {
  if (code === 0) {
    console.log('✅ Avvio effettuato con successo!');
  } else {
    console.error(`⭕ Errore durante lo start. Codice di uscita: ${code}`);
  }
});
