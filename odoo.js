var Odoo = require('odoo-xmlrpc');
var odoo = new Odoo({
    // url: <insert server URL>,
    url: 'https://metricinternet-pricepoint-test-2592878.dev.odoo.com',
    //port: <insert server Port (by default 80)>,
    db: 'metricinternet-pricepoint-test-2592878',
	username: 'kolade@abi-ng.com',
	password: 'Password@123'
});

// odoo.connect(function (err) {
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');    
// });



//Listing record fields
// odoo.connect(function (err) {
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');
//     var inParams = [];
//     inParams.push([]);
//     inParams.push([]);
//     inParams.push([]);
//     inParams.push(['string', 'help', 'type']);  //attributes
//     var params = [];
//     params.push(inParams);
//     odoo.execute_kw('res.partner', 'fields_get', params, function (err, value) {
//         const fs = require('fs')


//         fs.writeFileSync("data2.json", JSON.stringify(value, null, 4));
//         if (err) { return console.log(err); }
//         console.log('Result: ', value);
//     });

// }
// );


// read purchase order
// odoo.connect(function (err) {
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');
//     var inParams = [];
//     //inParams.push('read');
//     inParams.push({}); //raise_exception
//     var params = [];
//     params.push(inParams);
//     odoo.execute_kw('purchase.order', 'search',params,function (err, value) {
//         if (err) { return console.log(err); }
//         console.log('Result: ', value);
//     });
// });



// search/read for products& categories
//  odoo.connect(function (err) {
//         if (err) { return console.log(err); }
//         console.log('Connected to Odoo server.');
//         var inParams = [];
//         //inParams.push([['is_company', '=', true],['customer', '=', true]],{'fields': ['name', 'id'], 'limit': 50});
//         //inParams.push(0);  //offset
//         //inParams.push('read');
//         inParams.push([['categ_id', '=', 10280]]); //id
//         var params = [];
//         inParams.push(['name']); //fields
//         params.push(inParams);
//         odoo.execute_kw('product.product', 'search_read',params,function (err, value) {
//             if (err) { return console.log(err); }
//             console.log('Result: ', value);
//         });
//     });

//search for products

// odoo.connect(function (err) {
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');
//     var inParams = [];
//     //inParams.push([['is_company', '=', true],['customer', '=', true]],{'fields': ['name', 'id'], 'limit': 50});
//     //inParams.push(0);  //offset
//     //inParams.push('read');
//     inParams.push([['id', '=', 79773]]); //id correct
//     inParams.push([]);//get all products
//     var params = [];
//     //inParams.push(['name']); //fields
//     params.push(inParams);
//     odoo.execute_kw('product.product', 'search_read',params,function (err, value) {
//         if (err) { return console.log(err); }
//         console.log('Result: ', value);
//     });
// });

//sale order
// odoo.connect(function (err) {
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');
//     var inParams = [];
//     //inParams.push([['is_company', '=', true],['customer', '=', true]],{'fields': ['name', 'id'], 'limit': 50});
//     //inParams.push(0);  //offset
//     //inParams.push('read');
//     //inParams.push([['id', '=', 92586]]); //id correct
//     inParams.push([]);//get all products
//     var params = [];
//     //inParams.push(['name']); //fields
//     params.push(inParams);
//     odoo.execute_kw('sale.order', 'search',params,function (err, value) {
//         if (err) { return console.log(err); }
//         console.log('Result: ', value);
//     });
// });



    // create 
//  odoo.connect(function (err) {
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');
//     var inParams = [];
//     //inParams.push([['is_company', '=', true],['customer', '=', true]],{'fields': ['name', 'id'], 'limit': 50});
//     //inParams.push(0);  //offset
//     //inParams.push('read');
//     inParams.push({'name': 'naza', 'type':'product', 'categ_id': 10280,'uom_id': 1,'uom_po_id': 128}); 
//     var params = [];
//     //inParams.push(['name']); //fields
//     params.push(inParams);
//     odoo.execute_kw('product.product', 'create',params,function (err, value) {
//         if (err) { return console.log(err); }
//         console.log('Result: ', value);
//     });
// });


//customer_rank =1 


//search and read customers

// odoo.connect(function (err) {
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');
//     var inParams = [];
//     inParams.push([['customer', '=', true]]); 
//     var inParams = [];
//     inParams.push([['id', '=', 2547]])
//     var params = [];
//     inParams.push(['name']); //fields
//     params.push(inParams);
//     odoo.execute_kw('res.partner', 'search_read',params,function (err, value) {
//         if (err) { return console.log(err); }
//         console.log('Result: ', value);
//     });
// });



//search/read for products& categories
//  odoo.connect(function (err) {
//         if (err) { return console.log(err); }
//         console.log('Connected to Odoo server.');
//         var inParams = [];
//         inParams.push([['categ_id', '=', 10280]]); //id
//         var params = [];
//         //inParams.push(['name']); //fields
//         params.push(inParams);
//         odoo.execute_kw('product.product', 'search_read',params,function (err, value) {
//             if (err) { return console.log(err); }
//             console.log('Result: ', value);
//         });
//     });




//view transactions per customer
// odoo.connect(function (err) {
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');
//     var inParams = [];
//     inParams.push([['partner_id', '=', 2547]]); //where customer is 2547
//     //var inParams = [];
//     //inParams.push([['id', '=', 2547]]) //id of customer
    
//     var params = [];
//     inParams.push(['name']); //fields
//     params.push(inParams);
//     odoo.execute_kw('pos.order', 'search_read',params,function (err, value) {
//         if (err) { return console.log(err); }
//         console.log('Result: ', value);
//     });
// });


//view all transactions

// odoo.connect(function (err) {
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');
//     var inParams = [];
//     inParams.push([]); //where customer is 2547
//     //var inParams = [];
//     //inParams.push([['id', '=', 2547]]) //id of customer
    
//     var params = [];
//     //inParams.push(['name']); //fields
//     params.push(inParams);
//     odoo.execute_kw('pos.order', 'search_read',params,function (err, value) {
//         if (err) { return console.log(err); }
//         console.log('Result: ', value);
//     });
// });


// create a sale order


//subscriptions

