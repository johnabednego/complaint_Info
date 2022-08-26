const router = require('express').Router()
const complain = require('../models/Complaints')
const hasura = require("../hasura.json");
const { json } = require('body-parser');
router.post('/', async (req, res) => {
    let id="";
        for(let i=0; i<10; i++){
            Math.random();
            let randId = Math.floor(Math.random() * 10);
            randId.toString;
            id = id+randId
    
        }
    try {
        const{complaint, source, _id} =  req.body;
        const newComplain = new complain({complaint:complaint, source:source})
                newComplain._id=id;
             await newComplain.save();
        res.status(201).json(newComplain);
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
}
)

router.get('/', async (req, res)=>{
    
    let t = hasura.length;
    for(let i=0; i<t; i++){
        let id="";
        for(let i=0; i<10; i++){
            Math.random();
            let randId = Math.floor(Math.random() * 10);
            randId.toString;
            id = id+randId
    
        }
      
        hasura[i].id=id;
    }
    let data = (await complain.find());
    hasura.push(data)

   
    try {
        res.status(200).json(hasura)
        
    } catch (error) {
        res.status(409).json({message: error.message})
    }
})

module.exports = router;

