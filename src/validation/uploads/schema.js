const Joi = require('joi');

const ImageHeadersSchema = Joi.object({
  'Content-Type': Joi.string().valid('image/apng', 'image/avif', 'image/gif', 'image/jpeg', 'image/png', 'image/webp').required(),
}).unknown();

module.exports = { ImageHeadersSchema };
