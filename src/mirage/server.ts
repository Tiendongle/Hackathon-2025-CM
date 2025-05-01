import { createServer, Model, Factory, Response } from "miragejs";

import { users, posts } from "~/data";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      user: Model,
      post: Model,
    },

    seeds(server) {
      // @ts-ignore
      users.forEach((user) => server.create("user", user));
      // @ts-ignore
      posts.forEach((post) => server.create("post", post));
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        // @ts-ignore
        return schema.users.all();
      });

      this.get("/users/:id", (schema, request) => {
        // @ts-ignore
        let id = request.params.id;
        // @ts-ignore
        let user = schema.users.find(id);
        if (!user) {
          return new Response(404, {}, { error: "User not found" });
        }

        return user;
      });

      this.get("/requests/learn", (schema) => {
        // @ts-ignore
        return schema.posts.all();
      });

      this.get("/requests/learn/:postId", (schema, request) => {
        // @ts-ignore
        let id = request.params.postId;
        // @ts-ignore
        let post = schema.posts.find(id);
        if (!post) {
          return new Response(404, {}, { error: "User not found" });
        }

        return post;
      });

      // Add more routes as needed

      this.passthrough();
    },
  });
}
