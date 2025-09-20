import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.findOne({ email });

  if (user) {
    return res
      .status(401)
      .json({ message: "You have already been registered " });
  } else {
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const payLoad = {
        userId: newUser._id,
        role:newUser.role
    }

    jwt.sign(payLoad, process.env.JWT_SECRET, {expiresIn: '2h'}, (err, token)=>{
        if(err) throw err;




        res.status(201).json({
          message: "You have been registered successfully",
          user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role
          },
          token
        });

        
    })



  }
};
