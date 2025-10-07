// Descrizione: script che effettua migrazione schema prisma del db main
const {spawn} = require('child_process');

// ottieni il nome della migrazione dal primo argomento della riga di comando
const migrationName = process.argv[2];

if (!migrationName) {
  console.error('Errore: Devi specificare un nome per la migrazione!');
  process.exit(1);
}

const schemaPath = 'prisma/schema.prisma'; // schema
const command = `npx prisma migrate dev --name ${migrationName} --schema ${schemaPath}`;

const processMigration = spawn(command, {shell: true, stdio: 'inherit'});

processMigration.on('exit', code => {
  if (code === 0) {
    console.log('✅ Migrazione db completata con successo!');
  } else {
    console.error(
      `⭕ Errore durante la migrazione del db. Codice di uscita: ${code}`,
    );
  }
});
