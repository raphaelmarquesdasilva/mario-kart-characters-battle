import express from "express"
import * as Controllers from "../Controllers/Controllers.js"

const router = express.Router()

// Characters
router.get("/characters/getting-all", Controllers.gettingAllCharacters)
router.post("/characters/create", Controllers.creatingOneCharacter)

//Blocks
router.get("/blocks/getting-all", Controllers.gettingAllBlocks)


export default router