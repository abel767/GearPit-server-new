const express = require("express")
const adminRoute = express.Router()
const {adminLogin,getUserData,editUser,isBlock,} = require("../controller/adminController")
const {getProductData,addProduct,softDeleteProduct,editProduct} = require("../controller/productBased/productController")
const {cloudinaryImgUpload} = require("../controller/cloudinary/cloudinaryController")
const {userCount} = require("../controller/adminDashboard")
const {categoryData,addCategoryData,categoryStatus,categoryEdit,categoryDataForAddProduct} = require('../controller/productBased/categoryController')
const authMiddleware = require("../middleware/auth")

adminRoute.post('/login',adminLogin);
adminRoute.get('/data',getUserData);
adminRoute.put('/edit/:id',editUser);
adminRoute.put('/block/:id',isBlock);
adminRoute.get('/productdata',getProductData);
adminRoute.post('/addproduct',addProduct);
adminRoute.put('/editproduct/:id',editProduct);
adminRoute.get('/generate-upload-url',cloudinaryImgUpload);
adminRoute.put('/softdeleteproduct/:id',softDeleteProduct);
adminRoute.get('/user-count',userCount);
adminRoute.get('/categorydata',categoryData);
adminRoute.post('/addcategorydata',addCategoryData);
adminRoute.put('/categorystatus/:id',categoryStatus);
adminRoute.put('/editcategory/:id',categoryEdit);
adminRoute.get('/categorydata-addproduct',categoryDataForAddProduct);


module.exports = adminRoute;