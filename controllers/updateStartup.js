import fs from "fs/promises"
import path from "path"

export const updateStartup = async (req, res) => {
    try {
        const { id } = req.params
        const startup = req.body

        const __filename = new URL(import.meta.url).pathname
        const __dirname = path.dirname(__filename)
        const filePath = path.join(__dirname, '..', 'data', 'data.json')

        const data = await fs.readFile(filePath, 'utf-8')
        const startups = JSON.parse(data)

        const startupIndex = startups.findIndex(startup => startup.id === parseInt(id))

        if (startupIndex === -1) {
            return res.status(404).json({ message: 'Startup not found'})
        }

        validateStartup(startup)
        startups[startupIndex] = startup

        await fs.writeFile(filePath, JSON.stringify(startups))
        res.status(200).json(startup)
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