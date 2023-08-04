import Conversation from "../model/Conversation.js";




export const newConversation=async(request,response)=>{
    try{
const senderId=request.body.senderId;
const recieverId=request.body.recieverId;

const exist =await Conversation.findOne({members:{$all: [recieverId,senderId] }});

if (exist){
    return response.status(200).json("conversation already exist");
}

const newConversation= new Conversation({
    members:[senderId,recieverId]
})
 await newConversation.save();
return response.status(200).json("Conversation saved Successfully");


    }catch(error){
return response.status(500).json(error.message); 
    }
}