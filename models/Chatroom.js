import mongoose from "mongoose";

const ChatroomSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Chatroom", ChatroomSchema);
