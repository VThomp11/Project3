/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products_table', table => {
        table.increments('id').primary().unique(); // Add unique constraint to the 'id' column
        table.string('item', 250)
        //foreign reference id 
        
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products_table')
};
