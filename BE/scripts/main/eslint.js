// Descrizione: script che attiva controllo eslint typescript
const {spawn} = require('child_process');

const command = `eslint . --ext .ts`;

const process = spawn(command, {shell: true, stdio: 'inherit'});

process.on('exit', code => {
  if (code === 0) {
    console.log('✅ Controllo eslint ts effettuato con successo!');
  } else {
    console.error(
      `⭕ Errore durante il controllo eslint. Codice di uscita: ${code}`,
    );
  }
});
