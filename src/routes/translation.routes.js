const express = require('express');
const router = express.Router();
const translation = require('../translation')
router.get('/',async(require,response)=>{
    res.json({status:'connected!'});
});

router.post('/',async(require,response)=>{
    translation(require,response);
});

module.exports = router;