const User = require('../models/user')

module.exports = {
    getAllUsers
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}