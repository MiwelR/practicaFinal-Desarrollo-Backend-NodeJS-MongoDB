'use strict';

function isAPIRequest(req) {
  return req.originalUrl.startsWith('/apiv1/');
}

module.exports = {
  isAPIRequest
}