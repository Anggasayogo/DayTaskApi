import Users from "../models/Users.model.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';


export const register = async (req, res) => {
    try {
        const { username, email, password, role_id, divisi_id, phone, avatar } = req.body;
        const userExist = await Users.findOne({
            where: {
                email: email
            }
        });
        if (userExist) {
            return res.status(400).json({ error: 'Account Alredy Exist' });
        }else{
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new Users({ 
                username, 
                email, 
                password: hashedPassword,
                role_id, 
                divisi_id, 
                phone, 
                avatar
            });
            await user.save();
            res.status(201).json({ message: 'User registered successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ 
            where: {
                email: email
            }
         });
        if (!user) {
            return res.status(401).json({ error: "User doesn't exist" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const token = jwt.sign({ userId: user.id }, 'RRQ', {
            expiresIn: '1h',
        });

        res.status(200).json({ 
            user: {
                user_id: user.id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                avatar: user.avatar
            }, 
            token 
        });
    } catch (error) {
        res.status(500).json({ 
            error: 'Login failed' 
        });
    }
}

export const getUsersList = async (req, res) => {
    try {
        const user = await Users.findAll({
            attributes: [
                ['id','user_id'],
                ['username','username'],
                ['email','email'],
                ['phone','phone'],
                ['avatar','avatar'],
            ]
        });
        res.send(user)
    } catch (error) {
         res.status(500).json({ 
            error: 'Failed get user list' 
        });
    }
}