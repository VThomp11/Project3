/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products_table').del()
  await knex('products_table').insert([
    {id: 1, item: 'weapons'},
    {id: 2, item: 'drugs'},
    {id: 3, item: 'animals'},
    {id: 4, item: 'organs'}
  ]);
};
