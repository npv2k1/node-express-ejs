const Menu = require("../../models/menu");
function homeController() {
  return {
    async index(req, res) {
      // const plants = await Menu.find().limit(8)
      // // console.log(plants)
      // return res.render('home', { plants: plants })
      const { search } = req.query;
      if (!search) {
        const dt = await res.send(await productService.getAll());
        return res.render("home", { plants: dt });
      }
      console.log("search", search);
      const product = await productService.find(search);
      return res.render("home", { plants: product });
    },
  };
}

module.exports = homeController;
