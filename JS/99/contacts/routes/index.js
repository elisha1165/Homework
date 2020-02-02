var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contacts', function (req, res, next) {
  res.render('layout', {
    title: 'Contacts',
    contacts: [
      { firstName: 'Shloime', lastName: 'Lubowsky', email: 'slubowsky.course@gmail.com' },
      { firstName: 'Zev', lastName: 'Feldberger', email: 'zfeld75@hotmail.com' },
      { firstName: 'Daniel', lastName: 'Soloff', email: 'daniel@nj.pcsjobs.org' }
    ],
    partials: { content: 'index' }
  });
});

router.get('/api/contacts', function (req, res, next) {
  
  
  res.render('layout', {
    title: 'ContactsJSON',
    partials: { content: 'contactsJSON' }
  });
});

module.exports = router;