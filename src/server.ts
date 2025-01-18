import { app } from "./app";

const startServer = (port: number) => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

const start = () => {
  const port = parseInt(process.env.PORT! ?? "8081");
  startServer(port);
};

start();
