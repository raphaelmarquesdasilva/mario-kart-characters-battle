import {PrismaClient} from "@prisma/client"


const prisma = new PrismaClient()

export const gettingAllCharacters = async () => {
    const characters = prisma.characters.findMany()

    return characters
}