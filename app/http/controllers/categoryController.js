const Menu = require('../../models/menu')
function categoryController() {
    return {
        async index(req, res) {
            // console.log(req.params.type)
            const plants = await Menu.find({'category':req.params.type})
            return res.render('category',  { plants: plants , type:req.params.type })
        }
    }
}

module.exports = categoryController