/* GET 'home' page */
const homelist = function(req, res){
    res.render('shows-list', { title: 'Home' });
    };
    /* GET 'Shows info' page */
    const register = function(req, res){
        res.render('register-form', { title: 'Register' });
        };
    module.exports = {
    homelist,
    register
    };