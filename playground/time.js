var moment = require('moment');

var date = moment();
date.add(112, 'years').subtract(9, 'months');
console.log(date.format('hh:mm a'));

// 10:35 am