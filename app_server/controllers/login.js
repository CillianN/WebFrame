/* GET 'home' page */
const homelist = function(req, res){
    res.render('shows-list', { title: 'Home' });
    };
//get loing page
    const login = function(req, res){
        res.render('login-form', { title: 'Login' });
        };
    module.exports = {
    homelist,
    login
    };