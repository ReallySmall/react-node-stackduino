exports.publicKey = function(req, res) {

  res.send(process.env.SSL_CERT_PUBLIC_KEY)

}
