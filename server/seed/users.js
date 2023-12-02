const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users =
        [
            {
                "name": "John Doe",
                "position": "CEO",
                "email": "fake@fake.com"

            },
            {
                "name": "Jane Doe",
                "position": "CFO",
                "email": "fake2@fake.com"
            }

        ]
    await User.insertMany(users)
    console.log("Created users!")
}

const run = async () => {
    await main()
    db.close()
}
run()