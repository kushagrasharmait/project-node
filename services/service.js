const db = require("../models");
const util = require("../utils/utils");
const Model = db.model;
module.exports ={

gettById:async(req,res,next)=>{
  try{  
    const id = req.params.id;

let   data = await  Model.findById(id)
res.send(data);
  }catch(error){
  next(error);
}
},

getAll:async(req,res,next)=>{
  try{  
 var data = await  Model.find({})
   
      res.send(data);
    }catch(error){
      next(error);
    }  
},
create:async(req,res,next)=>{
   
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }

   try{  
      const model = new Model({
        empNumber: req.body.empNumber,
        designation: req.body.designation,
        department: req.body.department
      });
    
    await  model
        .save(model)
        res.status(200).send({ message: "record created" });
    }
    catch(error){
        next(error);
    }

},
delete:async(req,res,next)=>{
  try{  
  const id = req.params.id;

let  data  = await   Model.findByIdAndRemove(id, { useFindAndModify: false })
res.send(data);
}catch(error){
  next(error);
}
},
update:async(req,res,next)=>{
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
      try{  
      const id = req.params.id;
    
      let data = await Model.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      res.send(data);
    }catch(error){
      next(error);
    }
},
authenticate:async(req,res,next)=>{
  try{  
    var user ={"UserName":"admin","password":"admin"}
    console.log(req.body);

  let authenticated =   user.password == req.body.password;
  
  
   if(authenticated){
  token =  await util.createAccessToken(req.body)
   res.send( {"status":"success", "token":token})}
   else{
     res.status(401)
    res.send({"status":"failure"})}
  }catch(error){
    next(error);
  }
},



}