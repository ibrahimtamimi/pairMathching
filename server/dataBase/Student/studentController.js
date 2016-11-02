var studentModel = require('./studentModel.js');

studentModel.sync({force: true}).then(function () {
  // Table created
  return studentModel.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

