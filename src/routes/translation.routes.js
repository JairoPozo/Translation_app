const express = require('express');
const router = express.Router();

router.get('/',async(require,response)=>{
    res.json({status:'connected!'});
});

module.exports = router;