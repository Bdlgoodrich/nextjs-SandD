import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      // Configure your credentials provider here
      // For example, you can use a username and password or email and password
      async authorize(credentials) {
        // Implement your user authentication logic here
        // Return user object if authentication is successful
        // Return null if authentication fails
        const user = { id: 1, name: "Admin", email: "admin@example.com", role: "admin" };
        if (credentials.username === "admin" && credentials.password === "password") {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session(session, user) {
      // Add user role to the session object
      session.user.role = user.role;
      return session;
    },
  },
});