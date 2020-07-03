const { spawn, execFile, exec } = require('child_process')

let routeFunctions = {
    getIP: (callback) => {
      exec('./server/models/netList', (err, stdout, stderr) => {
        console.log(stderr,stdout)
        var erro = stdout.replace(new RegExp('ESSID:', 'g'), '"ESSID":')
        console.log(erro)
        var stou = JSON.parse(erro)
        callback(stou)
      });
    }
}

module.exports = routeFunctions