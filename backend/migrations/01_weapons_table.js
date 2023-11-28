const e = require("express");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('weapons_table', table => {
        table.integer('id', 5); 
        table.integer('product_id', 5); 
        table.foreign('product_id').references('products_table.id');
        table.string('item', 250)
        //foreign reference id 
        table.string('price', 250)
        table.string('description', 1000)
        table.string('img', 250); 
        // table.specificType('location', 'INT[]') 
        // table.specificType('1stCoord'); 
        
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('weapons_table')
};
