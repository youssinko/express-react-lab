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

app.get("/fruits", (req, res) => {
//   res.send(fruits)
res.render("Index",{fruits})
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