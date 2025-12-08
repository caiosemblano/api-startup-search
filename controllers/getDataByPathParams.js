import fs from 'fs'

export const getDataByPathParams = (req, res) => {
  const { field, term } = req.params
  const allowedFields = ['country', 'continent', 'industry']

  const startups = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'))

  if (!allowedFields.includes(field)) {
    return res.status(400).json({ message: "Search field not allowed. Please use only country, continent, industry" })
  }

  const filteredData = startups.filter(
    startup => startup[field].toLowerCase() === term.toLowerCase()
  )

  res.json(filteredData)
}