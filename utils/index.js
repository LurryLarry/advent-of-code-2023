import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

export const getInput = (callingModule, fileName) => {
  const __filename = fileURLToPath(callingModule)
  const currentFilePath = path.dirname(__filename)
  const filePath = path.join(currentFilePath, fileName)
  return fs.readFileSync(filePath, 'utf8')
}

export const mapFileToArray = (callingModule, fileName) => {
  const fileContent = getInput(callingModule, fileName)
  const lines = fileContent.split('\n').map((line) => line.trim())
  return lines
}
