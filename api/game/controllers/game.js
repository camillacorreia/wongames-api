'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: async (ctx) => {
    const options = {
      sort: "popularity",
      page: "1",
      ...ctx.query,
    };

    console.log("Starting to populate...")
    await strapi.services.game.populate(options);

    ctx.send("Finished populating!")
  }
};
