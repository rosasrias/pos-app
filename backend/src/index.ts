import { createServer } from "./app/server";

const PORT = process.env.PORT || 3001;
const app = createServer();

app.listen(PORT, () => {
  console.log(`⛩️ POS Backend running ont http://localhost:${PORT}`);
})
