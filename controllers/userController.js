import User from "../models/userModel.js";

export const getUsersForSideBar = async (req, res) => {
    try{
        const loggedInUserId = req.user._id
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } })

        res.status(200).json(filteredUsers)

    }catch (error) {
        console.error("Error in getUsersForSideBar: ", error.message)
        res.status(500).json({ error: "Internal server error" })
    }
}
