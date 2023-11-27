/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('drugs_table', table => {
        table.integer('id', 10); 
        table.integer('product_id'); 
        table.foreign('product_id').references('products_table.id');
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
    return knex.schema.dropTableIfExists('drugs_table')
};
