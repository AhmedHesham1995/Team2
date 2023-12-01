const usersModel=require('../models/users')
const postsModel=require('../models/posts')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const getAllUsers=async(req,res)=>{
    try{
        let users=await usersModel.find()
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json({message:"something went wrong"})

    }
}
    
const addUser=async(req,res)=>{
    var user=req.body
    try{
        const newuser=await usersModel.create(user)
        res.json({message:"added successfully",data:newuser})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }

}

const getOneUser=async(req,res)=>{
    let userId=req.params.id
    try{
        let wanted=await usersModel.findOne({_id:userId})
        console.log(wanted);
        res.status(200).json({message:"s",data:wanted})
    }
    catch(err){
        res.json({message: err.message})
    }
}

const updateUser = async (req, res) => {
    const { name, profilePicture, profileCover, location, bio, birthDate } = req.body;
    const userId = req.params.id;

    try {
        const updatedUser = await usersModel.findOneAndUpdate(
            { _id: userId },
            { name, profilePicture, profileCover, location, bio, birthDate },
            { new: true }
        );

        if (updatedUser.nModified === 0) {
            return res.status(404).json({ msg: 'User not found or no changes applied' });
        }

        res.json({ msg: 'Profile edited successfully', data: { name, profilePicture, profileCover, location, bio, birthDate } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};




const deleteUser=async(req,res)=>{
    let userId=req.params.id
    try{
        await usersModel.deleteOne({_id:userId})
        res.status(200).json({message: "deleted success"})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}



const posts4specificUser=async(req,res)=>{
    let user=req.params.id
    console.log(user);
    try{
        let wanted=await postsModel.find({userId:user})
        if(wanted.length) {
            res.status(200).json(wanted)
            console.log(wanted);
        }
        else res.status(404).json({message: "This user hadn't posted never"})
    }
    catch(err){
        res.status(500).json({message: message.err})
    }
}




// const follow = async (req, res) => {
//     try {
//         const { userId } = req.params;

//         const user = await usersModel.findById(userId);
//         if (user.followers.includes(req.id)) {
//             return res.status(400).json({ message: 'You are already following this user' });
//         }

//         await usersModel.findByIdAndUpdate(
//             userId,
//             { $push: { followers: req.id } },
//             { new: true }
//         );

//         const result = await usersModel.findByIdAndUpdate(
//             req.id,
//             { $push: { following: userId } },
//             { new: true }
//         );

//         res.json(result);
//     } catch (error) {
//         return res.status(422).json({ error: error.message });
//     }
// };


// const unfollow = async (req, res) => {
//     try {
//         const { unfollowId } = req.params;

//         await usersModel.findByIdAndUpdate(
//             unfollowId,
//             { $pull: { followers: req.id } },
//             { new: true }
//         );

//         const result = await usersModel.findByIdAndUpdate(
//             req.id,
//             { $pull: { following: unfollowId } },
//             { new: true }
//         )

//         res.json(result);
//     } catch (error) {
//         return res.status(422).json({ error: error.message });
//     }
// };


const follow = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await usersModel.findById(userId);
        if (user.followers.includes(req.id)) {
            return res.status(400).json({ message: 'You are already following this user' });
        }

        await usersModel.findByIdAndUpdate(
            userId,
            { $push: { followers: req.id } },
            { new: true }
        );

        const result = await usersModel.findByIdAndUpdate(
            req.id,
            { $push: { followings: userId } },
            { new: true }
        );

        res.json(result);
    } catch (error) {
        return res.status(422).json({ error: error.message });
    }
};

const unfollow = async (req, res) => {
    try {
        const { unfollowId } = req.params;

        await usersModel.findByIdAndUpdate(
            unfollowId,
            { $pull: { followers: req.id } },
            { new: true }
        );

        const result = await usersModel.findByIdAndUpdate(
            req.id,
            { $pull: { followings: unfollowId } },
            { new: true }
        );

        res.json(result);
    } catch (error) {
        return res.status(422).json({ error: error.message });
    }
};



const getFollowers = async (req, res) => {
    try {
        // const userId = req.params.id;
        const userId = req.id;
        const user = await usersModel.findById(userId).populate('followers', 'name  profilePicture username');
        res.status(200).json({ followers: user.followers });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getFollowing = async (req, res) => {
    try {
        // const userId = req.params.id;
        const userId = req.id;
        const user = await usersModel.findById(userId).populate('followings', 'name profilePicture username');
        res.status(200).json({ followings: user.followings });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getFollowState = async (req, res) => {
    try {
        const { userId } = req.params;
        const loggedInUserId = req.id;

        const isFollowing = await usersModel.findById(loggedInUserId)
            .select('following')
            .then(user => user.followings.includes(userId));

        res.json({ followings: isFollowing });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
  





//authentication
async function login(req,res){
    const {email,password,role}=req.body
    if(!email || !password){
        return res.status(400).json({message:"you must provide email and password"})
    }

    const user=await usersModel.findOne({email:email})
    if(!user){
        return res.status(404).json({message:"invalid email or password"})
    }

    const isValid=await bcrypt.compare(password,user.password)
    if(!isValid){
        return res.status(401).json({message:"invalid password"})
    }


    //generate token
    const token=jwt.sign({id:user._id,name:user.username},process.env.SECRET)
    res.status(200).json({token:token, id:user._id})
}

module.exports={getAllUsers,addUser,getOneUser,updateUser,deleteUser,login,posts4specificUser,unfollow,getFollowers,getFollowing,getFollowState,follow}