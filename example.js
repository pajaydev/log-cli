'use strict';

const Logger = require('./index');
const logger = new Logger();
logger.log('this is normal message');
logger.success('this is success message');
logger.warn('this is warning message');
logger.info('this is info message');
logger.error('this is error message');
logger.bold('log the message in BOLD');
logger.log('this is normal message with prefix', 'success');
logger.error('this is error with prefix', true);
logger.setColor({info: 'grey'});
logger.info('Change color to grey');
const promiseFunc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
}
logger.spin(promiseFunc, 'loading task');
const spinner = logger.startSpin('text');
setTimeout(() => {
    spinner.stop();
},1000);