const express = require('express');
const router = express.Router();


//Routes
router.get('/',(req,res)=>{
    res.send('we are on login page');
});

router.post('/',(req,res)=>{
    console.log(res.body);
});

module.exports = router;