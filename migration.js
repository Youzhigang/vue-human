// #! /usr/local/bin/node
const path = require('path')
const fs = require('fs')
// const {exec} = require('child_process')
console.log(__dirname)

const expSrcCmpDir = path.resolve(__dirname, 'examples/src/components')
const components = fs.readdirSync(expSrcCmpDir)
const targetDir = path.resolve(__dirname, 'vuepress/.vuepress')
const targetPageDir = path.resolve(__dirname, 'vuepress/pages')
const targetCmpsDir = path.join(targetDir, 'components')

console.log(expSrcCmpDir)
// console.log(components)
console.log(targetCmpsDir)
// fs.copyFileSync
const config = require(path.join(targetDir, 'config.js'))
// console.log(config.themeConfig.sidebar)
config.themeConfig.sidebar = [
  '/',
  '/components',
  ['/pages/_button', 'button'],
  '/pages/_actionsheet'
]
const Prefix = 'Mn'
function copyFile (components, fromDir, toDir, targetPageDir, dryRun = true) {
  for (let index = 0; index < components.length; index++) {
    const componentName = components[index]
    const componentDir = path.join(fromDir, componentName)
    // console.log(componentDir)
    const existFiles = fs.readdirSync(componentDir)
    const normalizeName = Prefix + componentName.substring(0, 1).toUpperCase() + componentName.substring(1)
    // console.log(existFiles)
    if (existFiles.length > 1 || existFiles[0] !== 'index.vue') {
      console.log(`jump file`, componentDir, existFiles)
      continue
    } else {
      const cmpFilePath = path.join(componentDir, existFiles[0])
      // console.log(cmpFilePath)
      const destPath = path.join(toDir, `${normalizeName}.vue`)

      if (!dryRun) {
        fs.copyFileSync(cmpFilePath, destPath)
        // exec(`echo <${normalizeName}/\\>  > ${targetPageDir}/${normalizeName}.md`, (err, out) => {
        //   console.log(err, out)
        // })
        fs.writeFileSync(`${targetPageDir}/${normalizeName}.md`, `<${normalizeName}/>`)
      }
      console.log(`\r\ncopy file \r\nfrom: ${cmpFilePath}; \r\nto ${destPath} \r\n`)
      config.themeConfig.sidebar.push([`/pages/${normalizeName}`, componentName])
    }
  }
}

copyFile(components, expSrcCmpDir, targetCmpsDir, targetPageDir, true)

function updateConfig (dryRun = true) {
  const configFilePath = path.join(targetDir, 'config.js')
  if (!dryRun) {
    fs.writeFileSync(configFilePath, 'module.exports = ' + JSON.stringify(config))
  }
}

updateConfig()

const pressPagesDir = path.resolve(__dirname, 'vuepress/pages')

function appendCodeToPage (from, to, dryRun = true) {
  const components = fs.readdirSync(from)
  for (let index = 0; index < components.length; index++) {
    const componentName = components[index]
    if (componentName.includes(Prefix)) {
      const pressPagePath = path.join(pressPagesDir, `${componentName.replace('vue', '')}md`)
      console.log(pressPagePath)
      const componentPath = path.join(from, componentName)
      if (fs.existsSync(pressPagePath)) {
        const codeBuffer = fs.readFileSync(componentPath)
        if (!dryRun) {
          fs.appendFileSync(pressPagePath, '\r\n' + '```javascript\r\n' + codeBuffer + '\r\n' + '```')
        }
        console.log(`copy code \r\n from: ${componentPath} \r\nto: ${pressPagePath}`)
      }
    }
  }
}

appendCodeToPage(targetCmpsDir, pressPagesDir, false)
