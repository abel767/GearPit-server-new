const express = require("express");
const userRoute = express.Router();
const {signup,verifyOTP,resendOTP,refreshTokenController,login,getProductData,getSingleProductData,getUserData} = require("../controller/userController")
const authMiddleware = require("../middleware/auth");

userRoute.post("/signup",signup);
userRoute.post("/verifyOTP",verifyOTP)
userRoute.post("/resendOTP",resendOTP)
userRoute.post('/refresh-token', refreshTokenController);
userRoute.post("/login",login);
userRoute.get("/getproductdata",getProductData);
userRoute.get("/product-view/:id",getSingleProductData);
userRoute.get("/getuserdata/:id",getUserData);




module.exports = userRoute