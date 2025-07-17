import * as charactersRepositories from "../Repositories/charactersRepositories.js"


export const gettingAllCharacters = async (req,res) => {
    try {
         const characters = await charactersRepositories.gettingAllCharacters()
    res.status(200).send(characters)
    } catch (error) {
        res.status(500).send(`Error at trying to fetch the characters. The error was: ${error}`)
    }
}