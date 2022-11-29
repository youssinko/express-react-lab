require('dotenv').config()
const express = require("express")
const app = express()
const PORT = 3000
const fruitController = require("./controllers/fruitController")

const reactViews = require('express-react-views')
const mongoose = require('mongoose')
const Vegetables = require('./models/vegetables')
const methodOverRide = require('method-override')

// ================= Connection to Database ===========

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
mongoose.connection.once('open', () => {
  console.log('connected to mongo')
})

// ======================= setup Engine ==================

app.set("view engine", "jsx")
//app.set is setting default views of js to avoid writing in line 16 res.render('Show.jsx)....i wanna set view engine to jsx
app.engine("jsx", reactViews.createEngine())
//app.engine is creating the engine from react 

//============ Middleware =========

app.use((req, res, next) => {
  console.log("I'm running for all routes")
  console.log("1.middleware")
  next()
})
//next function is need to run the rest of the code
app.use(express.urlencoded({ extended: false }))
app.use(methodOverRide('_method'))
app.use(express.static('public'))


//=========== everything in fruitcontroller ill be under /fruits ============
//===================ROUTER ===============
app.use("/fruits", fruitController)
//============================ VEGETABLES ==============

app.get("/vegetables", (req, res) => {
  // res.render("VegIndex", { vegetables })
  Vegetables.find({}, (error, allVegetables) => {
    if (!error) {
      res.status(200).render("VegIndex", {
        vegetables: allVegetables
      })
    } else {
      res.status(400).send(error)
    }
  })
})


app.get('/vegetables/new', (req, res) => {
  res.render('VegNew')
})

app.post('/vegetables', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  // vegetables.push(req.body)
  // res.redirect('/vegetables')
  Vegetables.create(req.body, (error, createdVegetables) => {
    if (!error) {
      // redirects after creating fruit, to the Index page
      res.status(200).redirect("/vegetables")
    } else {
      res.status(400).send(error)
    }
  })

})

  // app.get("/vegetables/:indexOfVegetables", (req, res) => {
  // res.render("VegShow", vegetables[req.params.indexOfVegetables])

  app.get("/vegetables/:id", (req, res) => {
  Vegetables.findById(req.params.id, (error, foundVegetable) => {
    if (!error) {
      res.status(200).render('VegShow', { vegetables : foundVegetable })
       
    }
    else {
      res.status(400).send(error)
    }

  })
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
}) 