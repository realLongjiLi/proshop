import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Longji Li',
        email: 'longji@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Stephen King',
        email: 'stephen@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users