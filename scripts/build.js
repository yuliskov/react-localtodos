const path = require('path')
const fs = require('mz/fs')
const constants = require('../app/constants')
const config = require('../webpack.config.prod')

const html = fs.readFileSync(path.join(__dirname, '../', 'html/index.html'), 'utf8')
const page = html
  .replace(/{{Title}}/, constants.SITE_TITLE)
  .replace(/{{State}}/, '')
  .replace(/{{App}}/, '<main id="root"></main>')
  .replace(/<script src="\/bundle.js"><\/script>/, '<script src="bundle.js"><\/script>');
fs.writeFileSync(path.join(config.output.path, 'index.html'), page)
