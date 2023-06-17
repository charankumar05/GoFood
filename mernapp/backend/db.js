const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://charan:charan123@cluster0.jxdf6x8.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoDB=async()=>{
  
  await mongoose.connect(mongoURI,{useNewUrlParser:true}).then(async()=>{
    
    try{
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data=await fetched_data.find({}).toArray();
       
      //  //console.log(data);
       global.food_items=data;
      console.log(global.food_items);
      console.log("connected");
        
    } catch(err){
        console.log(err);
    }

    try{
      const fetched_data = mongoose.connection.db.collection("foodCategory");
      const catData=await fetched_data.find({}).toArray();
     
    //  //console.log(data);
     global.foodCategory=catData;
    console.log(global.foodCategory);
    console.log("connected");
      
  } catch(err){
      console.log(err);
  }


  }
  )
    .catch((err)=>{console.log("yoo"+err);});

}


 module.exports = mongoDB;