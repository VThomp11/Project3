/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('animals_table').del()
  await knex('animals_table').insert([
    {
      id: 0,
      product_id: 3,
      item: 'Unbranded insect',
      price: '694.00',
      description: 'Administratio vilis quae quas repellendus. Abscido cometes amo amet.',
      img: 'https://avatars.githubusercontent.com/u/64626072'
    },
    {
      id: 1,
      product_id: 3,
      item: 'Rustic cetacean',
      price: '239.00',
      description: 'Ubi calculus accendo vicissitudo.',
      img: 'https://avatars.githubusercontent.com/u/23151882'
    },
    {
      id: 2,
      product_id: 3,
      item: 'Oriental cat',
      price: '67.00',
      description: 'Depono absens temptatio assumenda cruentus convoco virtus laborum avaritia. Constans tricesimus ago cresco capio venustas odio. Accommodo cunctatio coruscus tumultus ait amo ventito pauci claudeo alioqui.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/924.jpg'
    },
    {
      id: 3,
      product_id: 3,
      item: 'Unbranded fish',
      price: '474.00',
      description: 'Nemo curvo abduco strues.',
      img: 'https://avatars.githubusercontent.com/u/1289750'
    },
    {
      id: 4,
      product_id: 3,
      item: 'Elegant fish',
      price: '871.00',
      description: 'Alius colo aegrotatio aestivus crastinus exercitationem paulatim.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1102.jpg'
    },
    {
      id: 5,
      product_id: 3,
      item: 'Incredible cat',
      price: '449.00',
      description: 'Advenio vilis patruus tepesco.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/403.jpg'
    },
    {
      id: 6,
      product_id: 3,
      item: 'Licensed bird',
      price: '605.00',
      description: 'Tergum aestivus aestivus auditor.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/378.jpg'
    },
    {
      id: 7,
      product_id: 3,
      item: 'Electronic bird',
      price: '548.00',
      description: 'Volup tandem amet cupio. Ventus victus viriliter laboriosam.',
      img: 'https://avatars.githubusercontent.com/u/2811426'
    },
    {
      id: 8,
      product_id: 3,
      item: 'Rustic insect',
      price: '814.00',
      description: 'Demum avaritia cogo denego abduco aurum cur tempore. Aut alter vitae crastinus cilicium ubi.',
      img: 'https://avatars.githubusercontent.com/u/70660093'
    },
    {
      id: 9,
      product_id: 3,
      item: 'Licensed lion',
      price: '730.00',
      description: 'Vulgus coadunatio ipsa cunabula. Decet cubicularis collum brevis.',
      img: 'https://avatars.githubusercontent.com/u/56763659'
    }
  ]);
};
