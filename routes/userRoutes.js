import express from "express";
import {
  addToPlaylist,
  changePassword,
  deleteMyprofile,
  deleteUser,
  forgetPassword,
  getAllUserss,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateprofilepicture,
  updateUserRole,
} from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
const router = express.Router();

//register
router.route("/register").post(singleUpload, register);

//login
router.route("/login").post(login);

//logout
router.route("/logout").get(logout);

//get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

//delete my Profile
router.route("/me").delete(isAuthenticated, deleteMyprofile);

//change password
router.route("/changepassword").put(isAuthenticated, changePassword);

//update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

//update profile picture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateprofilepicture);

//forgetpassword
router.route("/forgetpassword").post(forgetPassword);

//reset password
router.route("/resetpassword/:token").put(resetPassword);

//add to playlist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

//remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUserss);

router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);

export default router;
