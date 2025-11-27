import mongoose from 'mongoose'

let cached = global._mongoose

if (!cached) {
  cached = global._mongoose = { conn: null, promise: null }
}

export const connectDB = async () => {
  if (cached.conn) {
    return cached.conn
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('Missing MONGODB_URI environment variable')
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGODB_URI, {
        bufferCommands: false,
      })
      .then((mongooseInstance) => mongooseInstance)
  }

  cached.conn = await cached.promise
  return cached.conn
}

