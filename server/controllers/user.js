import UserModel from '../models/users.js';


// Get All Users = Same as db.users.find()
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        // 500 HTTP status code for server error
        res.status(500).json({ message: error.message });
    }
}

// Read a user by ID = Same as db.users.findOne({_id: ObjectId("id")})
export const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            // 404 HTTP status code for file not found
            return res.status(404).json({ message: 'User not found'});
        }
        res.status(200).json(user);
    } catch (error) {
        // 500 HTTP status code for server error
        res.status(500).json({ message: error.message });
    }
}

// Create a new user = Same as db.users.insertOne()
export const createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        const savedUser = await newUser.save();
        // 201 HTTP status code for created
        res.status(201).json(savedUser);
    } catch (error) {
        // 500 HTTP status code for server error
        res.status(500).json({ message: error.message });
    }
}

// Update a user by ID = Same as db.users.updateOne({_id: ObjectId("id")}, {$set: {...}})
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id,req.body, {
            new: true
        });

        if (!updatedUser) {
            // 404 HTTP status code
            return res.status(404).json({ message: 'User not found'});
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        // 500 HTTP status code for server error
        res.status(500).json({ message: error.message });
    }
}

// Delete a user by ID = same as db.users.deleteOne({_id: ObjectId("id")})
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            // 404 HTTP status code
            return res.status(404).json({ message: 'User not found'});
        } 
        res.status(200).json({ message: 'User deleted successfully' });
    }  catch (error) {
        // 500 HTTP status code for server error
        res.status(500).json({ message: error.message });
    } 
}