// Descrizione: script che crea la build
const {spawn} = require('child_process');

const command = `tsc --build`;

const process = spawn(command, {shell: true, stdio: 'inherit'});

process.on('exit', code => {
  if (code === 0) {
    console.log('✅ Build effettuata con successo!');
  } else {
    console.error(
      `⭕ Errore durante la generazione della build. Codice di uscita: ${code}`,
    );
  }
});
