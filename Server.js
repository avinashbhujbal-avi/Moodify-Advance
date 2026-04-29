import http from "http"
import app from "./src/app.js"
import dotenv from "dotenv"
import connectDB from "./src/Config/database.js"

dotenv.config();
connectDB()
const PORT = process.env.PORT || 3000

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server run on port ${PORT}`);
});
