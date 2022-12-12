import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
    chatroomId:{
        type:String
    },
    senderId:{
        type:String
    },
    text:{
        type:String
    },
    read:{
        type:Boolean
    }
},
{timestamps:true}
);

export default mongoose.model("Message",MessageSchema)