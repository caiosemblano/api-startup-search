import { error } from "console"
import fs from "fs/promises"
import path from "path"

export const createStartup = async (req, res) => {
    try {
        validateStartup(req.body)
        let newStartup = await Startup.create(req.body)
        res.status(201).json(newStartup)

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

function validateStartup(startup) {
    const { name, industry, country, continent, is_seeking_funding, has_mvp } = startup

    if (!name || !industry || !country || !continent || !is_seeking_funding || !has_mvp) {
        throw new Error('Missing required fields')
    }
}