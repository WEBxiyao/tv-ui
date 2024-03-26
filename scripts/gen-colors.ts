import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { gold, green, purple, red } from '@ant-design/colors'

let colors = ''
purple.forEach((color, index) => {
  colors += `--tov-color-primary-${index + 1}: ${color};\n`
})
colors += `\n`

green.forEach((color, index) => {
  colors += `--tov-color-success-${index + 1}: ${color};\n`
})
colors += `\n`

gold.forEach((color, index) => {
  colors += `--tov-color-warning-${index + 1}: ${color};\n`
})
colors += `\n`
red.forEach((color, index) => {
  colors += `--tov-color-error-${index + 1}: ${color};\n`
})
const baseUrl = fileURLToPath(new URL('../', import.meta.url))
const cssFile = path.resolve(baseUrl, 'packages/tv-ui/src/styles/theme/colors.less')
fs.writeFileSync(cssFile, `:root{\n${colors}\n}`)
