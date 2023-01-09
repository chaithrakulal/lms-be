import express from "express";
import User from "../Component/User/UserModel";
const app = express();

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
