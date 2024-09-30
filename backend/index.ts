import { Sequelize } from "sequelize-typescript";
import Content from "./models/Content.model";
import { ContentStatus } from "./enums/ContentStatus.enum";
import User from "./models/User.model";
import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

const sequelize = new Sequelize("HFC", "root", "HFC2023", {
  host: "35.239.125.245",
  dialect: "mysql",
});

sequelize.addModels([User, Content]);

// Create table if not exists
sequelize.sync();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(bodyParser.json());

// Get users route
app.get("/users", async (req: Request, res) => {
  const users = await User.findAll();
  res.json(users);
});

// View content for user
app.get(
  "/content/:userId",
  async (
    req: Request<{
      userId: number;
    }>,
    res: Response<
      {
        id: number;
        url: string;
        status: string;
        userId: number;
      }[]
    >
  ) => {
    const userId = req.params["userId"];

    // Get content for user
    const content = await Content.findAll({
      where: {
        userId
      }
    });

    res.json(content);
  }
);

// Update content status
// If the status is not valid, return 400 status code
// If the content does not exist, return 404 status code
// If the content is already approved, you can't change the status, return 400 status code
app.post("/content/:postId/status",
  async (
    req: Request<{
      postId: number;
      status: ContentStatus;
    }>,
    res: Response<{
      status: ContentStatus;
    }>
  ) => {
    const postId = req.params["postId"];
    const status = req.body["status"];

    if (!Object.values(ContentStatus).includes(status)) {
      res.sendStatus(400);
    }

    const [ rowsUpdated ] = await Content.update({ status }, { where: { id: postId }});

    if (rowsUpdated === 0) res.sendStatus(404);

    res.json(status);
  }
)


// Search endpoint
// Search by user title, user tags and content title

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
