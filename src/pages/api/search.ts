import { NextApiRequest, NextApiResponse } from "next";
import { alphavantageApi } from "../../services/api";
import { AlphaVantageGetSearchData } from "../../services/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed.' })

    const { keywords } = req.query
    if (!keywords) return res.status(400).json({ error: 'Bad Request.' })

    const { data } = await alphavantageApi
      .get<AlphaVantageGetSearchData>(
        `query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${process.env.ALPHAVANTAGE_SECRET_KEY}`
      )

    const formatData = data.bestMatches.map(match =>
      ({ name: match["2. name"], symbol: match["1. symbol"] })
    )

    return res.status(201).json(formatData)
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error.' })
  }
}