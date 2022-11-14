import express from "express";
import User from "../Component/User/UserModel";
const app = express();

// app.post("/login", async (req, res) => {});
// app.get("/login", async (req, response) => {
//   const { username, email, password } = req.body;
//   const user = await User.find({ username, password });
//   console.log(user);
//   try {
//     response.send(user);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.username).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
export default router;
