/* GET 'home' page */
const homelist = function(req, res){
    res.render('shows-list', { title: 'Home' });
    };
    /* GET 'Shows info' page */
    const login = function(req, res){
        res.render('login-form', { title: 'Login' });
        };
    module.exports = {
    homelist,
    login
    };