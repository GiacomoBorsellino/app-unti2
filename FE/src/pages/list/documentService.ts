import { gql } from "@apollo/client";
import { client } from "../../apolloClient"; // importa qui il tuo ApolloClient istanziato
import documents from "@/data/projects/documents";

// const token = "adjhfvekhg4i";

// const headers = {
//   "Content-Type": "application/json",
//   "Access-Control-Allow-Headers": "Content-Type",
// };

// Definisci la query
const GET_DOCUMENTS = gql`
  query GetDocuments {
    getDocuments {
      id
      name
      description
      pathFile
      pathImg
      categories
    }
  }
`;

const DOWNLOAD_FILE = gql`
  query DownloadDocument($input: Int) {
    downloadDocument(input: $input) {
      format
      size
      data
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

export async function downloadDocument(id: number) {
  try {
    const { data }: any = await client.query({
      query: DOWNLOAD_FILE,
      variables: {
        input: id,
      },
      // context: {
      //   headers: headers,
      // },
      fetchPolicy: "no-cache", // evita dati vecchi in cache se serve
    });
    return data.downloadDocument;
  } catch (err) {
    console.error("Errore downloadDocument:", err);
    throw err;
  }
}
