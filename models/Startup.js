import mongoose from "mongoose"

const founderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true }
})

const startupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    industry: { type: String, required: true },
    founded: { type: Number, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    business_address: {
        street: { type: String },
        city: { type: String },
        state: { type: String }
    },
    founders: [founderSchema],
    employees: { type: Number },
    website: { type: String },
    mission_statement: { type: String },
    description: { type: String },
    is_seeking_funding: { type: Boolean, default: false },
    has_mvp: { type: Boolean, default: false }
},
    {
        timestamps: true
    })

const Startup = mongoose.model("Startup", startupSchema)

export default Startup