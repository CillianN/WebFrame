const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');
//const ctrlOthers = require('../controllers/others'); 
const ctrlLogin = require('../controllers/login');
//const ctrlRegister = require('../controllers/register');

//locations 
router
 .route('/locations')
 .get(ctrlLocations.locationsListByDistance)
 .post(ctrlLocations.locationsCreate)

router
 .route('/locations/:locationid')
 .get(ctrlLocations.locationsReadOne)
 .put(ctrlLocations.locationsUpdateOne)
 .delete(ctrlLocations.locationsDeleteOne)


//reviews
router
  .route('/locations/:locationid/reviews')
  .post(ctrlReviews.reviewsCreate);
router
  .route('/locations/:locationid/reviews/:reviewid')
  .get(ctrlReviews.reviewsReadOne)
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne);

//login
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
module.exports = router;