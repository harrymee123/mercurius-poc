"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const index_1 = require("./product/index");
const mercurius_codegen_1 = require("mercurius-codegen");
exports.typeDefs = (0, mercurius_codegen_1.gql) `
  type Query
  ${index_1.ProductTypes}
`;
exports.resolvers = {
    Query: Object.assign({}, index_1.ProductQuery),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ3JhcGhxbC9zY2hlbWEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTREO0FBRTVELHlEQUF1QztBQUUxQixRQUFBLFFBQVEsR0FBRyxJQUFBLHVCQUFHLEVBQUE7O0lBRXZCLG9CQUFZO0NBQ2YsQ0FBQTtBQUVZLFFBQUEsU0FBUyxHQUFHO0lBQ3ZCLEtBQUssb0JBQ0Esb0JBQVksQ0FDaEI7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFF1ZXJ5LCBQcm9kdWN0VHlwZXMgfSBmcm9tICcuL3Byb2R1Y3QvaW5kZXgnXG5cbmltcG9ydCB7IGdxbCB9IGZyb20gJ21lcmN1cml1cy1jb2RlZ2VuJ1xuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gIHR5cGUgUXVlcnlcbiAgJHtQcm9kdWN0VHlwZXN9XG5gXG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgLi4uUHJvZHVjdFF1ZXJ5LFxuICB9LFxufVxuIl19