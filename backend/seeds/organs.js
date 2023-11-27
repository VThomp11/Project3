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
      product_id: 4,
      item: 'Ergonomic reed organ',
      price: '723.00',
      description: 'Annus approbo sonitus. Conculco tabernus acerbitas adulatio. Pax arma contabesco vereor conforto.',
      img: 'https://avatars.githubusercontent.com/u/41839754'
    },
    {
      id: 1,
      product_id: 4,
      item: 'Sleek pipe organ',
      price: '963.00',
      description: 'Volo somnus voluptate quasi ars vilitas odit surgo aggero. Corporis pel tunc corona desidero. Amo agnitio amo caelestis terror impedit amaritudo.',
      img: 'https://avatars.githubusercontent.com/u/62990994'
    },
    {
      id: 2,
      product_id: 4,
      item: 'Modern electric organ',
      price: '642.00',
      description: 'Cito coadunatio votum tabgo arcus atrocitas virtus voluptas voluptate convoco. Talio sufficio omnis supra ubi aureus accommodo.',
      img: 'https://avatars.githubusercontent.com/u/75937567'
    },
    {
      id: 3,
      product_id: 4,
      item: 'Tasty electric organ',
      price: '959.00',
      description: 'Color statim tracto adhaero appello templum ultio subvenio tendo absconditus. Carbo cras vinitor ventito torrens coadunatio utrum fugiat damno. Cimentarius vesco theatrum defetiscor.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/30.jpg'
    },
    {
      id: 4,
      product_id: 4,
      item: 'Tasty reed organ',
      price: '172.00',
      description: 'Vesco soluta substantia atrocitas comprehendo contigo aeneus complectus quisquam.',
      img: 'https://avatars.githubusercontent.com/u/73867374'
    },
    {
      id: 5,
      product_id: 4,
      item: 'Elegant pipe organ',
      price: '869.00',
      description: 'Communis theatrum deprecator temperantia acceptus catena arguo degenero. Ducimus solitudo brevis alius impedit tenus tergiversatio. Pectus beneficium tempus vito theca depopulo quis verumtamen.',
      img: 'https://avatars.githubusercontent.com/u/23468819'
    },
    {
      id: 6,
      product_id: 4,
      item: 'Unbranded pipe organ',
      price: '222.00',
      description: 'Creta arbitro sopor vorago curis viriliter. Iure confido vehemens creta.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/372.jpg'
    },
    {
      id: 7,
      product_id: 4,
      item: 'Licensed electric organ',
      price: '93.00',
      description: 'Demens ara sumptus timidus subseco aegrus recusandae corporis. Verbum contabesco surgo cibus culpo coruscus tertius addo.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/141.jpg'
    },
    {
      id: 8,
      product_id: 4,
      item: 'Awesome reed organ',
      price: '644.00',
      description: 'Triduana defaeco libero claudeo sophismata vetus. Alter colligo communis.',
      img: 'https://avatars.githubusercontent.com/u/76524562'
    },
    {
      id: 9,
      product_id: 4,
      item: 'Gorgeous reed organ',
      price: '198.00',
      description: 'Beatus vomito torqueo angelus bibo vesper cubo collum. Caelum despecto animus ver ago aspicio voco demergo casso.',
      img: 'https://avatars.githubusercontent.com/u/24439818'
    }
  ]);
};
