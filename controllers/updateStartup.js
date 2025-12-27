import Startup from "../models/Startup.js"

export const updateStartup = async (req, res) => {
    try {
        await Startup.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(req.body)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}