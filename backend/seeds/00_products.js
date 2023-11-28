/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products_table').del()
  await knex('products_table').insert([
    {id: 0, item: 'animals'},
    {id: 1, item: 'drugs'},
    {id: 2, item: 'weapons'},
    {id: 3, item: 'organs'}
  ]);
};
