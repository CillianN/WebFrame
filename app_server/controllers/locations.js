/* GET 'home' page */
const homelist = function(req, res){
    res.render('shows-list', {
      title: 'Síamsa Tíre',
      pageHeader: {
        title: 'Síamsa Tíre',
        strapline: 'Events and Shows'
      },
      sidebar: "Siamsa Tíre is home to Ireland's National Folk Theatre and is located in Tralee Town Park, Tralee, County Kerry, Ireland. If you have been to this show, please leave a review so more people can know what you thought!.",
      shows: [{
          name: 'Thats Variety Entertainment Show',
          address: 'Town Park, Tralee, Co. Kerry, V92 XW44',
          rating: 4,
          genre: ['Comedy', 'Dance', 'Music'],
          time: '2 Hours'
      }, {
          name: 'MÁM',
          address: 'Town Park, Tralee, Co. Kerry, V92 XW44',
          rating: 5,
          genre: ['Music', 'Dance'],
          time: '1 Hour'
      }, {
          name: 'Cultúr',
          address: 'Town Park, Tralee, Co. Kerry, V92 XW44',
          rating: 3,
          genre: ['Acting', 'Music'],
          time: '2 Hours'
      }]
    });
  };
    /* GET 'Shows info' page */
    const locationInfo = function(req, res){
    res.render('shows-info', { title: 'Shows info' });
    };
    const addReview = function(req, res){
        res.render('shows-review-form', { title: 'Add review' });
        };
    module.exports = {
    homelist,
    locationInfo,
    addReview
    };