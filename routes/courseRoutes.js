import express from "express";
import {
  addLecture,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLecture,
} from "../controllers/courseController.js";
import {
  authorizeAdmin,
  isAuthenticated,
  authorizeSubscribers,
} from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

//get all courses
router.route("/courses").get(getAllCourses);

//creating courses
router
  .route("/createcourse")
  .post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

//add lecture
router
  .route("/course/:id")
  .get(isAuthenticated, authorizeSubscribers, getCourseLecture)
  .post(isAuthenticated, authorizeAdmin, singleUpload, addLecture)
  .delete(deleteCourse);

//delete cousre
router.route("/lecture").delete(isAuthenticated, authorizeAdmin, deleteLecture);

// get course details

export default router;
