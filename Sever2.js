const express = require('express')
const app = express()
var path = require('path')
var anh= path.join(__dirname,'./public')
app .use('/hinhanh', express.static(anh))
app.get('/home', function(req,res){

  var filehtml = path.join(__dirname,'sever2.html')
  res.sendFile(filehtml)
})
app.listen(process.env.PORT, function(){

})
