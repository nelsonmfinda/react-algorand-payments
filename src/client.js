import { dotenv } from "dotenv"
import { client } from "algosdk"

dotenv.config()

const token = process.env.TOKEN
const server = process.env.SERVER
const port = process.env.PORT

export const client = new algosdk.Algod(token, server, port)
