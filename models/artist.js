const Joi = require("joi");

Artist = {};

Artist.validateArtist = (artist) => {
  const schema = Joi.object({
    artistId: Joi.number().integer().required(),

    artistName: Joi.string().min(1).max(255).required(),

    albumId: Joi.number().integer(),
  });
  return schema.validate(artist);
  // -> { value: { artistId: 1, artistName: "Kanye West", album } }
  // -> { value: {}, error: '"artistId" is required' }
};

module.exports = Artist;
