const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${Math.round(os.uptime() / 1200)} hours.`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);