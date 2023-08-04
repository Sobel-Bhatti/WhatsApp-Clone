import mongoose from "mongoose";

const CoversationSchema =    new mongoose.Schema({
    members:{
type:Array
    },
  message:{
    type:String
  }},
  {
timestamps:true
  }
  );

  const conversation=mongoose.model('Conversation', CoversationSchema);

   export default conversation;