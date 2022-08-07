
const Menu = require('../../models/menu')
function specificPlantController() {
    return {
        async index(req, res) {
            const plants = await Menu.find({'name':req.params.name})
            return res.render('search' , {plants:plants})
        }
    }
}

module.exports = specificPlantController



