const { execSync } = require('child_process')
const colors = require('ansi-colors')

module.exports = function(cmd) {
    try {
        const output = execSync(cmd)
        process.stdout.write(output)
    } catch(error) {
        console.error(`${colors.bold.red('error:')} command not found`)
    }
}