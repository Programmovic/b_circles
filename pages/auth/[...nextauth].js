import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { MongoClient } from 'mongodb'

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        try {
          // Connect to your MongoDB database
          const client = new MongoClient(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
          await client.connect()

          // Find the user based on the provided username and password
          const db = client.db()
          const user = await db.collection('users').findOne({
            username: credentials.username,
            password: credentials.password, // Note: Hash your passwords in production
          })

          client.close()

          // If the user is found, return the user object; otherwise, return null
          if (user) {
            return Promise.resolve(user)
          } else {
            return Promise.resolve(null)
          }
        } catch (error) {
          console.error("Error authenticating user:", error)
          return Promise.resolve(null)
        }
      }
    })
  ],
  database: {
    type: 'mongodb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  session: {
    // Customize your session settings if needed
  },
})
