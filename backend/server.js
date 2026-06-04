import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import User from "./src/models/User.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  const existingUser = await User.findOne({
    email: "test@apnacollege.com",
  });

  if (!existingUser) {
    await User.create({
      email: "test@apnacollege.com",
      password: "Password@123",
    });

    console.log("Test user created");
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
