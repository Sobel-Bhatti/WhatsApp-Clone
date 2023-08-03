import conversation from "../model/Conversation";

export const newConversation = async (request, response) => {
  try {
    const senderId = request.body.senderId;
    const recieverId = request.body.recieverId;
    const exist = await conversation.findOne({
      members: { $all: [recieverId, senderId] },
    });
    if (exist) {
      return response.status(200).json("conversation already exists");
    }

    const newConversation = new conversation({
      members: [senderId,recieverId]
    })

    await newConversation.save();

    return response.status(200).json('conversation was saved successfully');
  } catch (error) {
   return response.status(500).json(error.message);
  }
};
