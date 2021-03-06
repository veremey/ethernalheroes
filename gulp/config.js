module.exports = {
  src : {
    root    : '../static/',
    pug    : '../static/pug',
    sass    : '../static/css/sass/',
    js      : '../static/js/',
    img     : '../static/img/',
    helpers : '../gulp/helpers/'
  },
  dest:{
    root    : '../',
    css     : '../static/css/',
    html    : '../static/',
    js      : '../static/js/',
    img     : '../static/MINIFYpic/'
  }
};


var config = {
  errorHandler: require('./util/handle-errors')

};