/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('organs_table', table => {
        table.integer('id', 5); 
        table.integer('product_id', 5); 
        table.string('item', 250)
        //foreign reference id 
        table.string('price', 250)
        table.string('description', 1000)
        table.string('img', 250);
})};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('organs_table')
};