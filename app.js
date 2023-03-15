const express = require("express")
const fileUpload = require("express-fileupload")
const upload = require("express-fileupload")
const path = require("path")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(fileUpload())


app.post('/upload',(req,res,next)=>{
  
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.')}
})
let sampleFile = req.files.sampleFile
let uploadPath = __dirname + '/public/upload' + sampleFile.name

sampleFile.mv(uploadPath , (req,res,next)=>{
  if(err){
    return res.status(400).send(err)
  }
  return res.status(200).json({message:"file uploaded"})
})










app.listen("500")
