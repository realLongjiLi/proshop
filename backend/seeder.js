import mongoose from 'mongoose'
import dotenv from 'dotenv'

import users from './data/users.js'
import products from './data/products.js'

import User from './models/userModel.js'
import Order from './models/orderModel.js'
import Product from './models/productModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        const createdUsers = await User.insertMany(users)
        
        // pull the user who is the admin
        const adminUser = createdUsers[0]._id

        // add info 
        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        console.log('Data Destroyed')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] == '-d') {
    destroyData()
} else importData()