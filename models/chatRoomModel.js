import mongoose from 'mongoose'

const chatRoomSchema = new mongoose.Schema(
 {
  chatRoomName: {type: String, required: true, index: true},
  participants: [
    {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  ],
  messages: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Message", default: []},
  ]
 },
 {timestamps: true}
) 

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema)
export default ChatRoom;