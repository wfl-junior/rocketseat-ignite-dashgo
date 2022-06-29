import { faker } from "@faker-js/faker";
import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response,
} from "miragejs";
import { User } from "../../@types/api";

export function makeServer() {
  return createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        name() {
          const { name } = faker;
          return `${name.firstName()} ${name.lastName()}`;
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
        users.sort((a, b) => {
          if (a.createdAt.getTime() === b.createdAt.getTime()) {
            return 0;
          }

          if (a.createdAt.getTime() < b.createdAt.getTime()) {
            return 1;
          }

          return -1;
        });

        const total = users.length;
        const offset = (Number(page) - 1) * Number(per_page);

        return new Response(
          200,
          { "x-total-count": total.toString() },
          { users: users.slice(offset, offset + per_page) },
        );
      });

      this.get("/users/:id");

      this.post("/users", (schema, request) => {
        const { user } = JSON.parse(request.requestBody);
        return schema.create("user", {
          ...user,
          createdAt: new Date(),
        });
      });

      this.namespace = "";
      this.passthrough();
    },
  });
}
