import { Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getTodos, addTodo, removeTodo } from '../controllers/controller.js';

const router = Router();
router.use(bodyParser.json());
router.use(cors());

router.get("/todos", getTodos);
router.post("/todos", addTodo);
router.put("/todos/:id", removeTodo);

export default router;