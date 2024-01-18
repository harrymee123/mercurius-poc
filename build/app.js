"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const index_1 = require("./schema/index");
const fastify_1 = require("fastify");
const mercurius_1 = require("mercurius");
exports.app = (0, fastify_1.default)({
    logger: process.env.NODE_ENV !== 'test',
});
exports.app.register(mercurius_1.default, {
    schema: index_1.typeDefs,
    resolvers: index_1.resolvers,
    path: '/'
});
exports.default = exports.app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dyYXBocWwvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBDQUFvRDtBQUVwRCxxQ0FBNkI7QUFDN0IseUNBQWlDO0FBRXBCLFFBQUEsR0FBRyxHQUFHLElBQUEsaUJBQU8sRUFBQztJQUN6QixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssTUFBTTtDQUN4QyxDQUFDLENBQUE7QUFFRixXQUFHLENBQUMsUUFBUSxDQUFDLG1CQUFTLEVBQUU7SUFDdEIsTUFBTSxFQUFFLGdCQUFRO0lBQ2hCLFNBQVMsRUFBVCxpQkFBUztJQUNULElBQUksRUFBRSxHQUFHO0NBQ1YsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsV0FBRyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzb2x2ZXJzLCB0eXBlRGVmcyB9IGZyb20gJy4vc2NoZW1hL2luZGV4J1xuXG5pbXBvcnQgRmFzdGlmeSBmcm9tICdmYXN0aWZ5J1xuaW1wb3J0IG1lcmN1cml1cyBmcm9tICdtZXJjdXJpdXMnXG5cbmV4cG9ydCBjb25zdCBhcHAgPSBGYXN0aWZ5KHtcbiAgbG9nZ2VyOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnLFxufSlcblxuYXBwLnJlZ2lzdGVyKG1lcmN1cml1cywge1xuICBzY2hlbWE6IHR5cGVEZWZzLFxuICByZXNvbHZlcnMsXG4gIHBhdGg6ICcvJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgYXBwXG4iXX0=