const Odoo = require('odoo-xmlrpc');
const odoo = new Odoo({
    // url: <insert server URL>,
    url: 'https://metricinternet-pricepoint-test-2592878.dev.odoo.com',
    //port: <insert server Port (by default 80)>,
    db: 'metricinternet-pricepoint-test-2592878',
    username: 'kolade@abi-ng.com',
    password: 'Password@123'
});

module.exports = odoo