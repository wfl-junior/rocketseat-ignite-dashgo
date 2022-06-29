import { faker } from "@faker-js/faker";
import { createServer, Factory, Model, Response } from "miragejs";
import { User } from "../../@types/api";

export function makeServer() {
  return createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        name(index) {
          return `User ${index + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },
    seeds(server) {
      server.createList("user", 200);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", (schema, request) => {
        const { page = 1, per_page = 10 } = request.queryParams || {};

        const users = schema.all("user").models;
        const total = users.length;
        const offset = (Number(page) - 1) * Number(per_page);

        return new Response(
          200,
          { "x-total-count": total.toString() },
          { users: users.slice(offset, offset + per_page) },
        );
      });

      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });
}
