import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email:'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'customer1',
        email:'customer@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'customer2',
        email:'customer2@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users