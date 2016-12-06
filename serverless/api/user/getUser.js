module.exports = function (request, reply) {
  console.log('getUser:request object', request);
  return reply('reply from getUser');
};
