import { app } from "./app.js";

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
