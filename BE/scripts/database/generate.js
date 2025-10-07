// Descrizione: script che genera client prisma del db main
const {spawn} = require('child_process');

const schemaPath = 'prisma/schema.prisma'; // schema
const command = `npx prisma generate --schema ${schemaPath}`;

const processMigration = spawn(command, {shell: true, stdio: 'inherit'});

processMigration.on('exit', code => {
  if (code === 0) {
    console.log('✅ Client rigenerato con successo!');
  } else {
    console.error(
      `⭕ Errore durante la generazione del client. Codice di uscita: ${code}`,
    );
  }
});
