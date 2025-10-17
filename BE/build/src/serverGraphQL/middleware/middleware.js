"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const checkPermission = (resolve, root, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    //   // Log di controllo
    //   // console.log("MID 1: ", resolve);
    //   // console.log("MID 2: ", root);
    //   // console.log("MID 3: ", args);
    //   // console.log("MID 4: ", context);
    //   // console.log("MID 5: ", info);
    //   // console.log("MID 6: ", info.fieldName);
    //   // console.log("MID 7: ", context.body.tag);
    //   // Controllo della chiamata attraverso i permessi:
    //   const tagResolver: string = context.body.operationName;
    //   const type: string = info.operation.operation;
    //   // Dati chiamata
    //   // console.log("resolver/route: ", tagResolver); // ex. getDati
    //   // console.log("context.body ", type); // ex. query/mutation
    //   // Bypassare login | resolver checkToken è momentaneo
    //   if (tagResolver !== "login" && tagResolver !== "checkToken") {
    //     // Token da FE
    //     const token: string = context.headers.authorization;
    //     // Dati Utente da FE
    //     let userData: any = context.headers.userdata;
    //     // console.log(token, userData);
    //     if (token && userData) {
    //       userData = JSON.parse(context.headers.userdata);
    //       // Decrypt Token
    //       const decodedToken: any = await jwt.verify(token, secret.secret);
    //       // Control if token-id and userData-id matchs
    //       const compareIds = +decodedToken.id === +userData.id ? true : false;
    //       if (compareIds) {
    //         // Take user from token
    //         const user = await db.avr_main.utenti.findUnique({
    //           where: {
    //             id: +decodedToken.id,
    //           },
    //         });
    //         if (user) {
    //           // console.log("User AAAAAAA: ", user);
    //           // Take group of user
    //           let group = await db.avr_main.gruppo.findUnique({
    //             where: {
    //               id: +user.idGruppo,
    //             },
    //           });
    //           // Control User
    //           let userFamilyResolvers = [
    //             "getUsers",
    //             "getUser",
    //             "upsertUser",
    //             "deleteUser",
    //             "getGruppi",
    //             "getGroups",
    //             "getGroup",
    //             "upsertGroup",
    //             "deleteGroup",
    //           ];
    //           let checkIfUserResolver = userFamilyResolvers.includes(tagResolver);
    //           // Control group of user
    //           if (group.description === "admin") {
    //             const result = await resolve(root, args, context, info);
    //             return result;
    //           } else if (group.description === "writer") {
    //             if (checkIfUserResolver) {
    //               console.log(
    //                 "MIDDLEWARE 4 - Gestione utenti non permessa da questo gruppo"
    //               );
    //               throw new Error(
    //                 "Utente non autorizzato ad effettuare questa operazione"
    //               );
    //             } else {
    //               const result = await resolve(root, args, context, info);
    //               return result;
    //             }
    //           } else if (group.description === null) {
    //             console.log(
    //               "MIDDLEWARE 4 - Gestione utenti non permessa da questo gruppo"
    //             );
    //             throw new Error(
    //               "Utente non autorizzato ad effettuare questa operazione"
    //             );
    //           } else {
    //             if (checkIfUserResolver) {
    //               console.log(
    //                 "MIDDLEWARE 5 - operazione di gestione utenti non permessa"
    //               );
    //               throw new Error(
    //                 "Utente non autorizzato ad effettuare questa operazione"
    //               );
    //             } else {
    //               // Controll if the resolver is readonly
    //               if (type === "query") {
    //                 const result = await resolve(root, args, context, info);
    //                 return result;
    //               } else if (type === "mutation") {
    //                 console.log(
    //                   "MIDDLEWARE 6 - operazione di scrittura non permessa"
    //                 );
    //                 throw new Error(
    //                   "Utente non autorizzato ad effettuare questa operazione"
    //                 );
    //               }
    //             }
    //           }
    //         } else {
    //           console.log("MIDDLEWARE 3 - Utente non esiste");
    //           throw new Error(
    //             "Utente non autorizzato ad effettuare questa operazione"
    //           );
    //         }
    //       } else {
    //         console.log("MIDDLEWARE 2 - Tentativo manomissione userData");
    //         throw new Error(
    //           "Utente non autorizzato ad effettuare questa operazione"
    //         );
    //       }
    //     } else {
    //       console.log("MIDDLEWARE 1 - Errore in invio token e/o userData");
    //       throw new Error(
    //         "MIDDLEWARE - Utente non autorizzato ad effettuare questa operazione"
    //       );
    //     }
    //   } else if (tagResolver === "login") {
    //     const result = await resolve(root, args, context, info);
    //     // console.log("MIDDLEWARE - Permesso di saltare il controllo del token");
    //     return result;
    //   } else if (tagResolver === "checkToken") {
    //     const result = await resolve(root, args, context, info);
    //     // console.log("MIDDLEWARE - Permesso di saltare il controllo del token");
    //     return result;
    //   } else {
    //     console.log("MIDDLEWARE 0 - ERRORE: ");
    //     throw new Error("error");
    //   }
    // } catch (error) {
    //   console.log("MIDDLEWARE 0 - ERRORE: ", error);
    //   throw new Error(error);
    // }
});
const middleware = {
    // checkToken: checkToken,
    checkPermission: checkPermission,
};
exports.middleware = middleware;
//# sourceMappingURL=middleware.js.map