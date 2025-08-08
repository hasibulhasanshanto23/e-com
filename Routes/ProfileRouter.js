const { isAuthenticated } = require("../Middlewares/Auth");

const router = require("express").Router();

router.get("/",isAuthenticated,(req,res)=>{
  res.status(200)
      .json({
        message:'Profile Fetched!'
      })
})

module.exports = router;
