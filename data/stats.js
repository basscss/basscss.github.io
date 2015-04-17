
var fs = require('fs');
var path = require('path');
var filesize = require('filesize');
var cssstats = require('cssstats');

var cssSource = fs.readFileSync(path.join(__dirname, '../node_modules/basscss/css/basscss.min.css'), 'utf8');
var stats = cssstats(cssSource);
stats.sizeKB = filesize(stats.size);
stats.gzipSizeKB = filesize(stats.gzipSize);

module.exports = stats;

