var express = require('express');
var router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others'); 
const ctrlLogin = require('../controllers/login');
const ctrlRegister = require('../controllers/register');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/shows', ctrlLocations.locationInfo);
router.get('/shows/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

/*Login & Register Pages*/
router.get('/login',ctrlLogin.login)
router.post('/login', function (req, res, next) {
	

	User.findOne({email:req.body.email},function(err,data){
		if(data){
			
			if(data.password==req.body.password){
			

				req.session.userId = data.unique_id;
				
				res.send({"Success":"Success!"});
				
			}else{
				res.send({"Success":"Incorrect password!"});
			}
		}else{
			res.send({"Success":"This Email Is not regestered!"});
		}
	});
});
router.get('/register',ctrlRegister.register)

module.exports = router;