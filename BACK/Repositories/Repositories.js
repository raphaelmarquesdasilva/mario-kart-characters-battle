import {PrismaClient} from "@prisma/client"


const prisma = new PrismaClient()

export const gettingAllCharacters = async () => {
    const characters = prisma.characters.findMany()

    return characters
}

export const creatingOneCharacter = async (body) => {
    const character = await prisma.characters.create({
        data: body
    })

    return character
}

export const gettingAllBlocks = async () => {
    const blocks = prisma.blocks.findMany()

    return blocks
} 