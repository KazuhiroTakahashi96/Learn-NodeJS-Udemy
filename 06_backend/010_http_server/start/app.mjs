import * as http from "http";
import { runInNewContext } from "vm";

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/hello") res.end("hello");
  else if (req.url === "/bye") res.end("bye");
});

server.listen(8080);
