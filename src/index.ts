import express, { Response } from "express";
import usersRoutes from "./modules/users/usersRoutes";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/users", usersRoutes);

app.use((_, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(
    `The application is listening on the port ${port}
     http://localhost:${port}`
  );
});
