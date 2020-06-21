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
};

class Logger {
    constructor() {
        this.levels = ['error', 'info', 'success', 'warn'];
        this.loggerColor = LOG_COLOR;
        this.logPrefix = LOG_PREFIX;
        this.spinner = null;
        this.initLog(this.levels);
    }
    initLog(levels) {
        levels.forEach((level) => {
            this[level] = (desc, prefixType) => { this.log(desc, prefixType ? level : false, level);};
        });
    }
    log(desc, prefixType, level) {
        if (prefixType) {
            desc = `${chalk[this.loggerColor[prefixType] || 'info'](LOG_PREFIX[prefixType])} ${desc}`;
        }
        if (!level) {
            console.log(desc); // eslint-disable-line no-console
        }
        else if (level === 'error') {
            console.error(chalk[this.loggerColor[level]](desc)); // eslint-disable-line no-console
        }
        else {
            console.log(chalk[this.loggerColor[level]](desc)); // eslint-disable-line no-console
        }
    }
    bold(desc, level = 'info') {
        if (level === 'error') {
            console.error(chalk[this.loggerColor[level]].bold(desc)); // eslint-disable-line no-console
        }
        else {
            console.log(chalk[this.loggerColor[level]].bold(desc)); // eslint-disable-line no-console
        }
    }
    setColor(color) {
        if (!color) this.error('invalid input');
        this.loggerColor = Object.assign(LOG_COLOR, color);
    }
    spin(task, text) {
        // wrap the task inside promise.
        const promiseTask = task();
        ora.promise(promiseTask, text);
        return promiseTask;
    }
    startSpin(text, color) {
        this.spinner = ora({ text, color}).start();
        return this.spinner;
    }
    stopSpin() {
        this.spinner.stop();
    }
}

module.exports = Logger;
