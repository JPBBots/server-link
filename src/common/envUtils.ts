import DotEnv from 'dotenv'
import path from 'path'
import fs from 'fs'

if (!process.env.TOKEN) {
  const env = DotEnv.parse(
    fs.readFileSync(path.resolve(__dirname, '../../.env'))
  )
  Object.keys(env).forEach((key) => {
    process.env[key] = env[key]
  })
}

export const env = {
  token: process.env.TOKEN!,
  url: process.env.SERVER_LINK_URL!,
}
