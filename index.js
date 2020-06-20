'use strict';
const chalk = require('chalk');
const ora = require('ora');

const LOG_COLOR = {
    error: 'red',
    info: 'cyan',
    warn: 'yellow',
    success: 'green'
};

const LOG_PREFIX = {
    info: 'ℹ',
	success: '✔',
	warn: '⚠',
	error: '✖'
}


class Logger {
    constructor(){
        this.levels = ['error', 'info', 'success', 'warn'];
        this.loggerColor = LOG_COLOR;
        this.logPrefix = LOG_PREFIX;
        this.spinner = null;
        this.initLog(this.levels);
    }

    initLog(levels) {
        levels.forEach((level) => {
            this[level] = (desc, prefixType) => { this.log(desc, prefixType, level)};
        });
    }

    log(desc, prefixType, level) {
        if(prefixType) {
            desc = `${chalk[this.loggerColor[prefixType] || 'info'](LOG_PREFIX[prefixType])} ${desc}`;
        }
        if(!level){
            console.log(desc);
        }
        else if(level === "error") {
            console.error(chalk[this.loggerColor[level]](desc));
        }else{
            console.log(chalk[this.loggerColor[level]](desc));
        }
    }

    bold(desc, level = "info"){
        if(level === "error") {
            console.error(chalk[this.loggerColor[level]]['bold'](desc));
        }else{
            console.log(chalk[this.loggerColor[level]]['bold'](desc));
        }
    }

    setColor(color) {
        if(!color) this.error("invalid input");
        this.loggerColor = Object.assign(LOG_COLOR, color);
    }

    // eslint-disable-next-line space-before-blocks
    spin(task, text){
        // wrap the task inside promise.
        const promiseTask = task();
        ora.promise(promiseTask, text);
        return promiseTask;
    }
    startSpin(text, color) {
        this.spinner = ora({ text, color}).start();
        return this.spinner;
    }
    stopSpin(){
        this.spinner.stop();
    } 
}


let logger = new Logger();
logger.success("ERROR this is an error", 'info');
logger.warn("this is a warning");
logger.info("this is a warning");
chalk.reset('Checking code formatting...')
logger.bold('stringggg');