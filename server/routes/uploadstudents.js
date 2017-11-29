var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var multer  = require('multer');
var hostname = "localhost:9000";

// File upload for bulk add students
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'media/Uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname+ '-' + Date.now()+'.jpg')
    }
});
var upload = multer({ storage: storage });

router.post('/', upload.single('file'), function(req, res) {
});

module.exports = router;
