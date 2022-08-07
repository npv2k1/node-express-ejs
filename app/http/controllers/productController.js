const Menu = require('../../models/menu')
function  productController() {
    return {
        async index(req, res) {
            const plants = await Menu.find()
            return res.render('product', { plants: plants })
        }
    }
}

module.exports = productController