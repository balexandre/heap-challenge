/* eslint-disable no-console */

const log = (message, ...args) => {
    if (args && args.length > 0) {
        console.log(message, args);
    } else {
        console.log(message);
    }
};

exports.log = log;
