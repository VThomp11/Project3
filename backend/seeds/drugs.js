/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('drugs_table').del()
  await knex('drugs_table').insert([
    {
      id: 0,
      product_id: 2,
      item: 'Refined tylenol',
      price: '468.00',
      description: 'Dolores somniculosus conscendo sortitus totam cursus expedita confido. Degusto stella comis vulticulus.',
      img: 'https://avatars.githubusercontent.com/u/35342745'
    },
    {
      id: 1,
      product_id: 2,
      item: 'Handmade tylenol',
      price: '137.00',
      description: 'Cogo curriculum artificiose vulnus timor vereor. Patior eveniet caveo.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/406.jpg'
    },
    {
      id: 2,
      product_id: 2,
      item: 'Elegant tylenol',
      price: '391.00',
      description: 'Sublime validus trado sint aegrus triduana sed. Cursim calcar benigne tabgo cupiditas. Vicissitudo aspernatur vestigium cohors ascisco benigne tam depono.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg'
    },
    {
      id: 3,
      product_id: 2,
      item: 'Luxurious tylenol',
      price: '586.00',
      description: 'Urbanus voro cetera sonitus comedo admiratio sollers subnecto.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1142.jpg'
    },
    {
      id: 4,
      product_id: 2,
      item: 'Recycled advil',
      price: '22.00',
      description: 'Ultra aduro calamitas volo subiungo cumque reiciendis. Adhaero taedium bellum auctor curo.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/474.jpg'
    },
    {
      id: 5,
      product_id: 2,
      item: 'Generic ibuprofen',
      price: '377.00',
      description: 'Benevolentia tres tibi ex patruus velut corroboro assumenda sursum. Curis talis sequi quisquam conicio colligo comis denique aegrotatio.',
      img: 'https://avatars.githubusercontent.com/u/83371772'
    },
    {
      id: 6,
      product_id: 2,
      item: 'Generic claritin',
      price: '199.00',
      description: 'Supra laborum odio tui decimus toties pel. Defaeco suasoria volaticus tergum toties. Vero defungo ipsum.',
      img: 'https://avatars.githubusercontent.com/u/23971034'
    },
    {
      id: 7,
      product_id: 2,
      item: 'Handmade advil',
      price: '620.00',
      description: 'Subnecto candidus paens adstringo.',
      img: 'https://avatars.githubusercontent.com/u/59120229'
    },
    {
      id: 8,
      product_id: 2,
      item: 'Incredible tylenol',
      price: '680.00',
      description: 'Utique vae alo virtus rerum aperio commemoro non cribro adipisci. Veritatis demulceo armarium vigilo stipes vigilo suadeo baiulus delego terminatio. Colligo vero corporis arx confero vereor ater tantillus.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/227.jpg'
    },
    {
      id: 9,
      product_id: 2,
      item: 'Rustic advil',
      price: '281.00',
      description: 'Cernuus abbas victoria vesco terra. Desidero adhuc culpa capto dedico. Speciosus decet quasi tamdiu demitto teneo damnatio concido terminatio.',
      img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/163.jpg'
    }
  ]);
};
