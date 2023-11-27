/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('organs_table').del()
  await knex('organs_table').insert([
    {
      id: 0,
      product_id: '4',
      item: 'Luxurious electric organ',
      price: '710.00',
      description: 'Amissio compello delectatio vilis patria auditor tubineus tibi curatio amita. Aeternus volaticus cetera cogito nihil vita vitae pecco.',
      img: 'https://avatars.githubusercontent.com/u/30294877'
    },
    {
      id: 1,
      product_id: '4',
      item: 'Gorgeous water organ',
      price: '142.00',
      description: 'Usque tempore tenus vilicus spargo.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1228.jpg'
    },
    {
      id: 2,
      product_id: '4',
      item: 'Luxurious pipe organ',
      price: '639.00',
      description: 'Solum vos quaerat textor abundans tabella claudeo conculco. Supra ducimus confido. Arma thalassinus adeptio cum careo strenuus talus cupiditas tabella.',
      img: 'https://avatars.githubusercontent.com/u/42601175'
    },
    {
      id: 3,
      product_id: '4',
      item: 'Modern pipe organ',
      price: '205.00',
      description: 'Decor recusandae amitto peccatus corroboro. Vir clamo aro illum. Verto amplus tendo aggredior ultra.',
      img: 'https://avatars.githubusercontent.com/u/73290248'
    },
    {
      id: 4,
      product_id: '4',
      item: 'Elegant pipe organ',
      price: '417.00',
      description: 'Defaeco carpo custodia. Talis celer cibus.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/247.jpg'
    },
    {
      id: 5,
      product_id: '4',
      item: 'Oriental water organ',
      price: '919.00',
      description: 'Arbor via antiquus defetiscor acsi adsuesco succurro talio cum.',
      img: 'https://avatars.githubusercontent.com/u/79246240'
    },
    {
      id: 6,
      product_id: '4',
      item: 'Tasty pipe organ',
      price: '511.00',
      description: 'Clarus deporto confero conturbo doloremque animus tantum.',
      img: 'https://avatars.githubusercontent.com/u/88906217'
    },
    {
      id: 7,
      product_id: '4',
      item: 'Unbranded reed organ',
      price: '11.00',
      description: 'Ullam amita tonsor crepusculum copiose cuppedia ter defendo. Tametsi eius clamo aliquid titulus creta reprehenderit contabesco cupiditas derideo. Vito reiciendis aliquid curiositas anser curatio comes valeo suffoco.',
      img: 'https://avatars.githubusercontent.com/u/5340823'
    },
    {
      id: 8,
      product_id: '4',
      item: 'Elegant pipe organ',
      price: '930.00',
      description: 'Dolores curso totam vulgaris adsum tenax capitulus. Suppellex usus acidus sopor circumvenio.',
      img: 'https://avatars.githubusercontent.com/u/65175293'
    },
    {
      id: 9,
      product_id: '4',
      item: 'Refined pipe organ',
      price: '156.00',
      description: 'Ad curis truculenter cultellus turbo ex absum.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg'
    }
  ]);
};
