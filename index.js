//get packages
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// Basic Configuration
app.use(cors());//use cors
app.use('/public', express.static(process.cwd() + '/public'));//expose public folder
app.get('/', function (req, res) {//index page
  res.sendFile(process.cwd() + '/views/index.html');
});

//handle file uploads
app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
   console.log(req.file, req.body)
  res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
});



//console log on run
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
