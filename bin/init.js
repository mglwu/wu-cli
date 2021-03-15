#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')

const tplObj = require(`${__dirname}/../template.json`)

program
  .usage('<template-name> [project-name]')

program.parse(process.argv)

// 当没有输入参数的时候给个提示
if (program.args.length < 1) return program.help()

let templateName = program.args[0]
let projectName = program.args[1]

if (!tplObj[templateName]) {
  console.log(chalk.red('\n Template does not exit! \n'))
  return
}

if (!projectName) {
  console.log(chalk.red('\n Project should not be empty! \n'))
  return
}

url = tplObj[templateName]

console.log(chalk.white('\n Start generating... \n'))

// 出现加载图标
const spinner = ora('Donwloading... \n')
spinner.start()

download(
  url,
  projectName,
  err => {
    if (err) {
      spinner.fail()
      console.log(chalk.red(`Generation failed. ${err}`))
      return
    }
    // 结束加载图标
    spinner.succeed()
    console.log(chalk.green('\n Generation completed!'))
    console.log('\n To get started')
    console.log(`\n    cd ${projectName} \n`)
  }
)