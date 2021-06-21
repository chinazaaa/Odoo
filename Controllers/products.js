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
//get all products by id  in the db
const getProducts = (id) => {
    let result;
    odoo.connect(function(err) {
        if (err) {
            throw err;
        }

        // debug
        console.log('Connected to Odoo server. `getProducts`');
        //let result;
        var inParams = [];
        //inParams.push(['84504']); 
        // inParams.push(
        //     // [['id', '=', id]]
        // );
        inParams.push([['id', '=', id]]); 
        //inParams.push([id]);

        var params = [];
        params.push(inParams);

        odoo.execute_kw('product.product', 'search_read', params, function(err, value) {
            if (err) {
                throw err;
            }
            // console.log('Result: ', value);
             result = value;
              console.log('Result: ', value);
        });
        
    });
    return result
}


//update product
const updateProduct = (id, body) => {
    odoo.connect(function(err) {
        if (err) {
            throw err;
        }

        // debug
        console.log('Connected to Odoo server. `updateProduct`');
        const inParams = [];
        inParams.push([id]); //id
        // const {
        //     name,
        //     type,
        //     categ_id,
        //     uom_id,
        //     uom_po_id
        // } = body
        // const inParams = [];
        inParams.push(
            body
        );

    //     var inParams = [];
    // inParams.push([3626]); //id to update
    //inParams.push({'name': 'NewFF Partner'})
    const params = [];
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
const deleteProduct = (id) => {
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


// get product by category id
const categoryProduct = (id) => {
    odoo.connect(function(err) {
        if (err) {
            throw err;
        }

        // debug
        console.log('Connected to Odoo server. `categoryProducts`');
        var inParams = [];
        inParams.push([['categ_id', '=', id]]); //id
        var params = [];
   inParams.push(['name']); //fields
        params.push(inParams);
        
        // params.push(inParams);

        odoo.execute_kw('product.product', 'search_read', params, function(err, value) {
            if (err) {
                throw err;
            }
            console.log('Result: ', value);
            return value
        });
    });
}

module.exports.createProduct = createProduct
module.exports.getProducts = getProducts
module.exports.updateProduct = updateProduct
module.exports.deleteProduct = deleteProduct
module.exports.categoryProduct = categoryProduct