/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Remove todos as categories
  return knex('categories').del()
    .then(function () {
      // Depois insere as categories:
      return knex('categories').insert([
        {
          name: 'Alimentos'
        },
        {
          name: 'Brinquedos'
        },
        {
          name: 'Animais'
        }
      ]);
    });
};