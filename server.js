const express = require("express")
const app = express()
const PORT = 3000
const fruits = require('./models/fruits')
const vegetables = require('./models/vegetables')
const reactViews = require('express-react-views')
app.set("view engine" , "jsx")
//app.set is setting default views of js to avoid writing in line 16 res.render('Show.jsx)....i wanna set view engine to jsx
app.engine("jsx" ,reactViews.createEngine())
//app.engine is creating the engine from react 

app.use((req, res, next)=>{
console.log("I'm running for all routes")
console.log("1.middleware")
next()
})
//next function is need to run the rest of the code
app.use(express.urlencoded({extended:false}))
app.get("/fruits", (req, res) => {
//   res.send(fruits)
res.render("Index",{fruits})
})
app.get('/fruits/new',(req,res)=>{
  res.render('New')
})
app.post('/fruits' ,(req, res)=>{
  console.log(req.body)
  if (req.body.readyToEat === 'on'){
    req.body.readyToEat = true
  }else{
    req.body.readyToEat = false
  }
  fruits.push(req.body)
  //adding data inserted in the form to the array
  console.log(fruits)
  //redirecting back to the home page
  res.redirect("/fruits")
})
app.get('/vegetables/new',(req,res)=>{
  res.render('VegNew')
})
app.post('/vegetables',(req,res)=>{
  if (req.body.readyToEat === 'on'){
    req.body.readyToEat = true
  }else{
    req.body.readyToEat = false
  }
  vegetables.push(req.body)
  res.redirect('/vegetables')
})
app.get("/fruits/:indexOfFruit", (req, res) => {
//   res.send(fruits[req.params.indexOfFruit])
res.render("Show", fruits[req.params.indexOfFruit])
//second parameter  (fruit) is setting our props , props is to access our data
})

app.get("/vegetables",(req , res)=>{
    res.render("VegIndex",{vegetables})
})
app.get("/vegetables/:indexOfVegetables" , (req,res)=> {
    res.render("VegShow" , vegetables[req.params.indexOfVegetables])
}) 

app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
}) 