import express, { Response } from "express";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (_req, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `The application is listening on the port ${port}
     http://localhost:${port}`
  );
});
