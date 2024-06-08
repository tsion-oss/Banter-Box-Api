import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
    try{
        const token = jwt.sign({userId}, process.env.JWT_SECRET, {
            expiresIn: '15d'
        })
        
        res.cookie('jwt', token, {
                maxAge: 15 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV !== "development"
            })
            return token
    } catch (error) {
        throw new Error('Error generating token');
    }
}

export default generateTokenAndSetCookie