const router = require("express").Router();
const db = require("../models");

router.get("/",(req,res)=>{
    res.json({categories: ["Food","Gear","Services"]});
});

// req.params.category = category
router.get("/:category",(req,res)=>{
    db.Get.find({category:req.params.category}).then((foundGets)=>{
        res.json({questions: foundGets})
    })
});

router.get("/:category",(req,res)=>{
    db.Give.find({category:req.params.category}).then((foundGives)=>{
        res.json({questions: foundGives})
    })
});


module.exports = router;