import Startup from '../models/Startup.js'

export const deleteStartup = async (req, res) => {
    try {
        await Startup.findByIdAndDelete(req.params.id)
        res.status(204).json()

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}
