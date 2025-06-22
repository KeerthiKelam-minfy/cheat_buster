// mapping the URL with the controller function

import express from "express";
import searchUser from "../controllers/user.controller.js";
import connectDB from "../config/db.js";


const router =  express.Router();

// mapping API route(endpoint) => api/search?email=... to searchUser function
router.get('/search', searchUser)

export default router;