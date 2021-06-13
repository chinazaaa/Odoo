const odoo = require("../config/db")
//create products
const createProduct = ({name, type, categ_id, uom_id, uom_po_id})=> {
    odoo.connect((err) => {
        if (err) {
            throw err
        }

        // debug
        console.log('Connected to Odoo server. `createProduct`');

        const inParams = [];
        inParams.push({
            name,
            type,
            categ_id,
            uom_id,
            uom_po_id
        });

        const params = [];
        params.push(inParams);

        odoo.execute_kw('product.product', 'create', params, (err, value) => {
            if (err) {
                throw err;
            }

            // debug
            console.log('Result: ', value);
            return value;
        });
    });
};
//get all products in the db
const getProducts = ({id}) => {
    odoo.connect(function(err) {
        if (err) {
            throw err;
        }

        // debug
        console.log('Connected to Odoo server. `getProducts`');

        var inParams = [];
        //inParams.push(['84504']); 
        inParams.push(
           [id]
        );


        var params = [];
        params.push(inParams);

        odoo.execute_kw('product.product', 'search_read', params, function(err, value) {
            if (err) {
                throw err;
            }
            console.log('Result: ', value);
        });
    });
}

//update product
const updateProduct = ({id}) => {
    odoo.connect(function(err) {
        if (err) {
            throw err;
        }

        // debug
        console.log('Connected to Odoo server. `updateProduct`');

        var inParams = [];
        //inParams.push(['84504']); 
        inParams.push(
           [id] //id to update
        );
        //inParams.push({'name': 'NewFF Partner'}) fields to update

        var params = [];
        params.push(inParams);

        odoo.execute_kw('product.product', 'write', params, function(err, value) {
            if (err) {
                throw err;
            }
            console.log('Result: ', value);
        });
    });
}

// delete product
const deleteProduct = ({id}) => {
    odoo.connect(function(err) {
        if (err) {
            throw err;
        }

        // debug
        console.log('Connected to Odoo server. `deleteProducts`');

        var inParams = [];
        //inParams.push(['84504']); 
        inParams.push(
           [id] // id to delete
        );
        //inParams.push({'name': 'NewFF Partner'}) fields to delete


        var params = [];
        params.push(inParams);

        odoo.execute_kw('product.product', 'unlink', params, function(err, value) {
            if (err) {
                throw err;
            }
            console.log('Result: ', value);
        });
    });
}


module.exports.createProduct = createProduct
module.exports.getProducts = getProducts
module.exports.updateProduct = updateProduct
module.exports.deleteProduct = deleteProduct