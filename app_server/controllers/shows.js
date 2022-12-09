/* GET 'home' page */
const homelist = function(req, res){
    res.render('shows-list', { title: 'Home' });
    };
    /* GET 'Shows info' page */
    const locationInfo = function(req, res){
    res.render('shows-info', { title: 'Shows info' });
    };
    /* GET 'Add review' page */
    const addReview = function(req, res){
    res.render('index', { title: 'Add review' });
    };
    module.exports = {
    homelist,
    locationInfo,
    addReview
    };