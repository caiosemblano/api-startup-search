import fs from "fs/promises"
import path from "path"

export const createStartup = async (req, res) => {
    try {
        let newStartup = req.body

        const __filename = new URL(import.meta.url).pathname
        const __dirname = path.dirname(__filename)
        const filePath = path.join(__dirname, '..', 'data', 'data.json')

        const data = await fs.readFile(filePath, 'utf-8')
        const startups = JSON.parse(data)
        const startupId = startups.length + 1

        newStartup.id = startupId
        validateStartup(newStartup)
        startups.push(newStartup)

        await fs.writeFile(filePath, JSON.stringify(startups))
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