import mongoose from 'mongoose'

const url = process.env.DATABASE_URL as string

async function database(){
    try {
        mongoose.set('strictPopulate', false)
        await mongoose.connect(url)
    } catch (error) {
        throw new Error("Database connection Error: " + error)
    }
}

export default database


