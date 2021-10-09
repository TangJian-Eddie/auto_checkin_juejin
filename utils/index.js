const dayjs = require('dayjs');
const chalk = require('chalk');

// 打印
const log = (message, isError = false) => {
    if (isError) {
        console.log(chalk.red(dayjs().format('YYYY-MM-DD HH:mm:ss'), message));
    } else {
        console.log(chalk.blue(dayjs().format('YYYY-MM-DD HH:mm:ss'), message));
    }
}

module.exports = {
    log,
}
