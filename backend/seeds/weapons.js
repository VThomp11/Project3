/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('weapons_table').del()
  await knex('weapons_table').insert([
    {
      id: 0,
      product_id: 1,
      item: 'Licensed nerf gun',
      price: '164.00',
      description: 'Stella adopto tollo vinum. Despecto decipio defungo acquiro stips crapula explicabo sordeo acervus. Vulgo suscipio peccatus succedo adsum deinde quis vix turbo.',
      img: 'https://avatars.githubusercontent.com/u/66355962'
    },
    {
      id: 1,
      product_id: 1,
      item: 'Gorgeous nerf gun',
      price: '894.00',
      description: 'Aperio coaegresco natus curvo.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/190.jpg'
    },
    {
      id: 2,
      product_id: 1,
      item: 'Incredible water gun',
      price: '765.00',
      description: 'Cilicium demens copia. Voco summisse cattus territo tollo.',
      img: 'https://avatars.githubusercontent.com/u/65031451'
    },
    {
      id: 3,
      product_id: 1,
      item: 'Unbranded finger guns',
      price: '4.00',
      description: 'Triduana tergum accendo asporto depereo sursum cogo vito. Comis terror crapula conduco arbitro.',
      img: 'https://avatars.githubusercontent.com/u/68901724'
    },
    {
      id: 4,
      product_id: 1,
      item: 'Unbranded paintball gun',
      price: '472.00',
      description: 'Vix non vita verbum. Voluptate vestrum conqueror bellum ad defero quaerat vespillo debilito.',
      img: 'https://avatars.githubusercontent.com/u/36177260'
    },
    {
      id: 5,
      product_id: 1,
      item: 'Sleek water gun',
      price: '742.00',
      description: 'Audacia vesica admoveo deinde nulla absconditus.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/960.jpg'
    },
    {
      id: 6,
      product_id: 1,
      item: 'Sleek paintball gun',
      price: '886.00',
      description: 'Iste tot demens caritas.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/431.jpg'
    },
    {
      id: 7,
      product_id: 1,
      item: 'Licensed water gun',
      price: '683.00',
      description: 'Tracto timor vox civis. Tamdiu admiratio stabilis aut. Ancilla ascit harum allatus cibus tamquam decimus surculus aeneus.',
      img: 'https://avatars.githubusercontent.com/u/4097057'
    },
    {
      id: 8,
      product_id: 1,
      item: 'Incredible finger guns',
      price: '335.00',
      description: 'Subseco curis ventito turbo vitiosus deprecator adversus ad adhaero. Celebrer vesica pectus cernuus saepe assentator audeo.',
      img: 'https://avatars.githubusercontent.com/u/24648991'
    },
    {
      id: 9,
      product_id: 1,
      item: 'Gorgeous water gun',
      price: '522.00',
      description: 'Culpo urbs cibo ocer decet.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/887.jpg'
    }
    
  ]);
};
