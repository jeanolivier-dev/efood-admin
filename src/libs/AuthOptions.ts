import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismadb from "@/libs/prismadb";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Informations d'identification manquantes");
        }

        const user = await prismadb.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Informations d'identification non valides");
        }

        const verifyPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!verifyPassword) {
          throw new Error("Mot de passe non valide");
        }

        /*const currentHashedPassword = await bcrypt.hash(
          credentials.password,
          12
        );

        if (currentHashedPassword !== user.hashedPassword) {
          throw new Error("Informations d'identification non valides");
        }
      */
        return user;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  debug: process.env.NODE_ENV !== "production",
};
