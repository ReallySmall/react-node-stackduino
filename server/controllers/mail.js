var sendgrid = require('sendgrid').mail;
var keystone = require('keystone');
var mongoose = require('mongoose');
var Wrapper = keystone.list('Wrapper').model;

exports.send = function(req, res) {

  var from_email = new sendgrid.Email(req.body.email || 'reallysmallmacro@gmail.com');
  var to_email = new sendgrid.Email('reallysmallmacro@gmail.com');
  var subject = 'New message from Stackduino site: ' + req.body.page;
  var content = new sendgrid.Content("text/plain", req.body.message);
  var mail = new sendgrid.Mail(from_email, subject, to_email, content);
  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function(err, response) {
    if(!err) {
      res.json(response);
    } else {
      res.json(err);
    }
  });

}
