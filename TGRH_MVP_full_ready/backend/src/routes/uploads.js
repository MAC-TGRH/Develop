const express = require('express');
const router = express.Router();
const multer = require('multer');
const streamifier = require('streamifier');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const upload = multer();

router.post('/image', upload.single('image'), async (req,res)=>{
  try{
    const streamUpload = (req) => new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream({ folder: 'tgrh' }, (error, result) => {
        if (result) resolve(result); else reject(error);
      });
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });

    const result = await streamUpload(req);
    res.json({ url: result.secure_url });
  } catch(e){ console.error(e); res.status(500).json({ error:'Upload failed' }) }
});

module.exports = router;
