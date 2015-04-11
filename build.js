
var _ = require('lodash');
var fs = require('fs-extra');
var path = require('path');
var autobass = require('autobass');

var helpers = require('./data/helpers');
var modules = require('./data/modules');


// Data
var data = require('basscss/package.json');

data.src = path.join(__dirname, './templates');

data.layout = fs.readFileSync(path.join(__dirname, './templates/layouts/base.html'), 'utf8');
data.title = _.capitalize(data.name);
data.baseurl = '//basscss.com';
data.stylesheet = 'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.3.5/bassdock.min.css';

data.asset_path = 'http://d2v52k3cl9vedd.cloudfront.net/basscss/';

data.routes = require('./data/routes');
data.showcase = require('./data/showcase');
data.stats = require('./data/stats');
data.colorCombinations = require('./data/color-combinations');

data.modules = modules;
data.optional_modules = data.basscss.optional_modules;

data.partials = {};
data.partials.head = fs.readFileSync('./templates/partials/head.html', 'utf8');
data.partials.footer = fs.readFileSync('./templates/partials/footer.html', 'utf8');
data.partials['side-nav'] = fs.readFileSync('./templates/partials/side-nav.html', 'utf8');
data.partials['page-header'] = fs.readFileSync('./templates/partials/page-header.html', 'utf8');
data.partials['showcase-widget'] = fs.readFileSync('./templates/partials/showcase-widget.html', 'utf8');
data.partials.pagination = fs.readFileSync('./templates/partials/pagination.html', 'utf8');
data.partials['color-combo-card'] = fs.readFileSync('./templates/partials/color-combo-card.html', 'utf8');
data.partials['module-section'] = fs.readFileSync('./templates/partials/module-section.html', 'utf8');
data.partials['module-header'] = fs.readFileSync('./templates/partials/module-header.html', 'utf8');
data.partials['module-footer'] = fs.readFileSync('./templates/partials/module-footer.html', 'utf8');
data.partials['share-buttons'] = fs.readFileSync('./templates/partials/share-buttons.html', 'utf8');


Object.keys(helpers).forEach(function(key) {
  data[key] = helpers[key];
});

var pages = autobass(data);

function writePage(page) {
  var pagePath = path.join(__dirname, page.path);
  var filename = page.filename || 'index.html';
  fs.ensureDirSync(pagePath);
  fs.writeFileSync(pagePath + '/' + filename, page.body);
  console.log((pagePath + ' written'));
  if (page.routes) {
    page.routes.forEach(writePage);
  }
}

pages.forEach(writePage);



