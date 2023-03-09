const express = require("express")
const fileUpload = require("express-fileupload")
const upload = require("express-fileupload")
const path = require("path")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(fileUpload())


app.post('express-fileuploaded',(req,res,next)=>{
  const file = req.files.file
  const filename = file.name
  const size = file.data.length
})




  










app.listen("500")
