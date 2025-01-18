import { Router } from "express";

export const router = Router();

/**
 * @openapi
 * /api/users:
 *   get:
 *     tag:
 *     - users
 *     description: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/users", (req, res) => {
  res.json([{ name: "John Doe", age: 30 }]);
});
