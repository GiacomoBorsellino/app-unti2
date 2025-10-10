import { gql } from "@apollo/client";
import { client } from "../../apolloClient"; // importa qui il tuo ApolloClient istanziato

// Definisci la query
const GET_DOCUMENTS = gql`
  query GetDocuments {
    getDocuments {
      id
      name
      pathImg
      pathFile
    }
  }
`;

// Funzione che chiama il backend
export async function getDocuments() {
  try {
    const { data }: any = await client.query({
      query: GET_DOCUMENTS,
      fetchPolicy: "no-cache", // evita dati vecchi in cache se serve
    });
    return data.getDocuments;
  } catch (err) {
    console.error("❌ Errore getDocuments:", err);
    throw err;
  }
}
