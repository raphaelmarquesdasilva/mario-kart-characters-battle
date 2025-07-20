import {PrismaClient} from "@prisma/client"


const prisma = new PrismaClient()

export const gettingOneCharacter = async (id) => {
    const character = await prisma.characters.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    return character
}

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

export const gettingOneBlock = async (id) => {
    const block = await prisma.blocks.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    return block
}

export const gettingAllBlocks = async () => {
    const blocks = prisma.blocks.findMany()

    return blocks
} 