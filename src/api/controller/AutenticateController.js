import Users from "../models/Users.model.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';


export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Users({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
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
                id: user.id,
                username: user.username,
                email: user.email
            }, 
            token 
        });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
}