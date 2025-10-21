const express = require('express');
const router = express.Router();
router.get('/', (req,res)=> res.json({message:'TGRH API OK'}));
router.use('/contents', require('./contents'));
router.use('/uploads', require('./uploads'));
module.exports = router;
