const express = require('express');
const app = express();
  const port = 5050;

  app.set('view engine', 'ejs')
  

  

 const  data =["code","sleep", "programer"]

  app.get('/', ( req , res )=>{
  //  res.send( data.name  +  data.age  + " ya bhi ha")
  res.render('home' , {"data": data})
  })

  app.get('/home', ( req , res )=>{
    //  res.send( data.name  +  data.age  + " ya bhi ha")
    var data2={
      "id": req.params.id
    }
    res.render('home' , {"data1": data , "id": data2})
    })

    app.get('/about', ( req , res )=>{
      //  res.send( data.name  +  data.age  + " ya bhi ha")
      var data2={
        "id": req.params.id
      }
      res.render('about' , {"data1": data , "id": data2})
      })
app.use(express.static('public'))
//require('./routes')(app)
  app.listen(port , ()=>{
      console.log("running server", port)
  })

  
