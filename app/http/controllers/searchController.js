const Menu = require('../../models/menu')
function searchController() {
    return {
        async index(req, res) {
            console.log(req.body)
            // console.log(req.body.search)
            // let plant =await Menu.find({'name':req.body.search})
            let plants =await Menu.find({"name":{$regex:req.body.search , $options:"$i"}})

            // console.log(plants)
            // return res.render('search' , {plant:plant[0]})
            return res.render('search' , {plants: plants})
        }
    }
}

module.exports = searchController