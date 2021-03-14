const express = require('express');
const router = express.Router();


//Routes
router.get('/',(req,res)=>{
    res.send('we are on register page');
});

router.post('/',(req,res)=>{
    console.log(res.body);
    res.status(201);
});

module.exports = router;