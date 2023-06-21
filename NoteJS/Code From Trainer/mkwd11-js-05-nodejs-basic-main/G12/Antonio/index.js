import http, { request } from "http";
import { tasks } from "../Class02-Modules-FIlesystem/tasks/tasks.json";

console.log(tasks);

const server = http.createServer((request, Response) => {
  const method = request.method;
  const url = request.url;

  if (url === "/") {
    const user = {
      firstName: "John",
      lastName: "Doe",
    };
    Response.setHeader("Content-Type", "application/json");
    Response.write(JSON.stringify(user));
    return Response.end();
  }

  return Response.end();
});

server.listen(4000, () => {
  console.log(`server is running on port 4000`);
});

// question: kako rabotat prefluvajne na fajlovi so ../../
