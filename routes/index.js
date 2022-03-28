const express = require('express');
const router = express.Router();


    const service = require("../services/service.js");
  
   
  
    // Create a new Tutorial
    router.post("/api/", service.create);
  
    // Retrieve all service
    router.get("/api/", service.getAll);
  
    // Retrieve all published service
    //router.get("/published", service.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/api/:id", service.gettById);
  
    // Update a Tutorial with id
    router.put("/api/:id", service.update);
  
    // Delete a Tutorial with id
    router.delete("/api/:id", service.delete);
    router.post('/login',service.authenticate);
  
    module.exports = router
  
