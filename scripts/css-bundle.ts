import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import fg from 'fast-glob'
import fs from 'fs-extra'
import less from 'less'

const tovDir = fileURLToPath(new URL('../packages/tov-ui-webxiyao', import.meta.url))
const lessFiles = fg.sync([
  'src/**/style/index.less',
  '!src/styles',
], {
  cwd: tovDir,
})
async function comFile() {
  for (const file of lessFiles) {
    const filePath = resolve(tovDir, file)
    const lessCode = fs.readFileSync(filePath, 'utf-8')
    const cssCode = await less.render(lessCode, {
      paths: [dirname(filePath)],
    })
    const esDir = resolve(tovDir, `./es${file.slice(3, file.length - 4)}css`)
    const libDir = resolve(tovDir, `./lib${file.slice(3, file.length - 4)}css`)
    fs.outputFileSync(esDir, cssCode.css)
    fs.outputFileSync(libDir, cssCode.css)
  }
}
comFile()
