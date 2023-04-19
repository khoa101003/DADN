
const logger = require('./autoPump')

const observers = [];
module.exports = Object.freeze({
  notify: (data) => observers.forEach((observer) =>{
    // console.log(data)
    observer(data)
  }),
  subscribe: (func) => observers.push(func),
  unsubscribe: (func) => {
    [...observers].forEach((observer, index) => {
      if (observer === func) {
        observers.splice(index, 1);
      }
    });
  },
});

// observers.forEach((observer) => observer(data))
