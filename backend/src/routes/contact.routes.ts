import { Router } from "express";
import { createContact } from "../controllers/contact.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(createContact));

export default router;
