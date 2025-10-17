"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverGraphQL_1 = require("./serverGraphQL/serverGraphQL");
// import { startRestServer } from "./serverRest/serverRest";
const startBE = () => {
    (0, serverGraphQL_1.startGraphQLServer)();
    // startRestServer();
};
startBE();
//# sourceMappingURL=app.js.map