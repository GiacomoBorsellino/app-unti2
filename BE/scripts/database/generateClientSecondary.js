// Descrizione: script che genera client prisma del db di secondary
const {spawn} = require('child_process');

const schemaPath = 'prisma/schema_secondary/schema_secondary.prisma'; // schema
const command = `npx prisma generate --schema ${schemaPath}`;

const processMigration = spawn(command, {shell: true, stdio: 'inherit'});

processMigration.on('exit', code => {
  if (code === 0) {
    console.log('✅ Client secondary rigenerato con successo!');
  } else {
    console.error(
      `⭕ Errore durante la generazione del client di secondary. Codice di uscita: ${code}`,
    );
  }
});
