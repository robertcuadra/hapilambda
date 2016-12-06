module.exports = function (request, reply) {
  console.log('postUser:request object', request);
  return reply('reply from postUser');
};
