import * as Repositories from "../Repositories/Repositories.js"


export const gettingAllCharacters = async (req,res) => {
    try {
         const characters = await Repositories.gettingAllCharacters()
    res.status(200).send(characters)
    } catch (error) {
        res.status(500).send(`Error at trying to fetch the characters. The error was: ${error}`)
    }
}

export const gettingAllBlocks = async (req,res) => {
    try {
        const blocks = await Repositories.gettingAllBlocks()
        res.status(200).send(blocks)
    } catch (error) {
        res.status(500).send(`Error at trying to fetch the blocks. The errr was: ${error}`)
    }
}

