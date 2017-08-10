#!/usr/bin/env node
require('./config')
let chalk = require('chalk')
let shell = require('shelljs')
let co = require('co')
let prompt = require('co-prompt')
let program = require('commander')
let name

program
  .arguments('<project>')
  .action(project => {
    co(function *() {
      console.log(`project name: ${project}`)
      console.log('setting everything up...')
      console.log(chalk.bold.cyan(`creating a new directory for the project...`))
      shell.mkdir(`~/development/${project}`)
      console.log(chalk.bold.cyan(`cding into directory...`))
      shell.cd(`~/development/${project}`)
      console.log(chalk.bold.cyan(`cloning starter project from jon's github...`))
      shell.exec('git clone https://github.com/jkol36/node-starter-project')
      console.log(chalk.bold.cyan('installing dependencies...'))
      shell.cd('./node-starter-project')
      shell.exec('cp -a . ../')
      shell.cd('../')
      shell.exec('rm -rf ./node-starter-project')
      shell.exec('npm install')
      console.log(chalk.bold.cyan('dependencies installed ready for npm start!!'))
      console.log(chalk.bold.cyan(`project directory: ~/development/${project}`))
      process.exit()
    })
  })
  .parse(process.argv)





