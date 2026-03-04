import Startup from '../models/Startup.js'


export const getAllData = async (req, res) => {
  const { industry, country, continent, is_seeking_funding, has_mvp } = req.query

  const query = {}

  if (industry) {
    query.industry = { $regex: `^${industry}$`, $options: 'i' }
  }

  if (country) {
    query.country = { $regex: `^${country}$`, $options: 'i' }
  }

  if (continent) {
    query.continent = { $regex: `^${continent}$`, $options: 'i' }
  }

  if (is_seeking_funding) {
    query.is_seeking_funding = JSON.parse(is_seeking_funding.toLowerCase())
  }

  if (has_mvp) {
    query.has_mvp = JSON.parse(has_mvp.toLowerCase())
  }

  const startups = await Startup.find(query)

  res.json(startups)
}