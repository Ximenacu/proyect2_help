const { Users, Search, Offer, Review } = require('../../model');
const router = require('express').Router();
// const xim = require('../../js/geocodeApi.js')
const xim = require('../../public/js/geocodeApi')


// /api/profile/
router.get('/', async (req, res) => {
    try {
      console.log("-----------GET REQ a user/profile /")
      console.log(xim)
      res.render('profile', {xim}); //------------------------------ res.render('profile', {homes, user});
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
