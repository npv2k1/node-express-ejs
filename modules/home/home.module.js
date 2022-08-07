/**
 * @param app {import('express').Express} - The express app object
 * @param path {string} - The path to the module.
 */
module.exports = function homeModule(app, path) {
  app.use(path, require("./home.controller"));
};
