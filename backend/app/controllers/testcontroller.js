const axios = require('axios')
//APIs
class Controller {
  //API GET all locates
  async get(req, res, next) {
    try {
        const items = await axios
        .get('https://dog.ceo/api/breeds/list/all')
        .catch(error => console.log(error))
        
        let result = items.data.message
        res.json(result)

    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

module.exports = new Controller();
