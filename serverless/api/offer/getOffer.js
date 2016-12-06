module.exports = function (request, reply) {
  console.log('getOffer:request object', request);
  return reply('reply from getOffer');
};
