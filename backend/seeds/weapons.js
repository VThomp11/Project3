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
      product_id: 3,
      item: 'Rustic butter knife',
      price: '452.00',
      description: 'Reiciendis aggredior eum. Corroboro ipsum admitto iure claustrum apostolus tonsor tersus. Neque beneficium audacia cohors vero curo aeternus.',
      img: 'https://i.ebayimg.com/images/g/jmoAAOxyQj9RN7sO/s-l640.jpg'
    },
    {
      id: 1,
      product_id: 3,
      item: 'Gorgeous paintball gun',
      price: '922.00',
      description: 'Subito sto desipio.',
      img: 'https://i5.walmartimages.com/seo/Revoltinator-Nerf-Zombie-Strike-Toy-Motorized-Blaster-18-Nerf-Darts_b9170627-3dc9-4923-bbdb-13615d81822b.9fc8c91b1b405676f7b5bd3af4148c94.jpeg'
    },
    {
      id: 2,
      product_id: 3,
      item: 'Oriental water gun',
      price: '645.00',
      description: 'Cognomen quam ulciscor appositus supra. Voluptate baiulus uterque cohaero comprehendo congregatio hic delicate deinde.',
      img: 'https://i.ebayimg.com/images/g/jmoAAOxyQj9RN7sO/s-l640.jpg'
    },
    {
      id: 3,
      product_id: 3,
      item: 'Awesome nerf gun',
      price: '8.00',
      description: 'Adicio volup culpa abstergo utilis ulterius quibusdam quis. Cerno magnam amo vociferor. Voluptate defero credo aegrus aliquid voluptatem certe comis cunae amor.',
      img: 'https://m.media-amazon.com/images/I/71deGzg7YfL.jpg'
    },
    {
      id: 4,
      product_id: 3,
      item: 'Electronic nerf gun',
      price: '293.00',
      description: 'Consectetur carbo arbitro tabgo vigor.',
      img: 'https://i.ebayimg.com/images/g/jmoAAOxyQj9RN7sO/s-l640.jpg'
    },
    {
      id: 5,
      product_id: 3,
      item: 'Sleek nerf gun',
      price: '743.00',
      description: 'Caecus deduco adhuc texo defendo vel templum. Teneo aliquam quia thorax explicabo caterva suggero.',
      img: 'https://i5.walmartimages.com/seo/Revoltinator-Nerf-Zombie-Strike-Toy-Motorized-Blaster-18-Nerf-Darts_b9170627-3dc9-4923-bbdb-13615d81822b.9fc8c91b1b405676f7b5bd3af4148c94.jpeg'
    },
    {
      id: 6,
      product_id: 3,
      item: 'Oriental butter knife',
      price: '610.00',
      description: 'Corrigo agnosco spero. Truculenter carpo coaegresco verus uter venia suus decor.',
      img: 'https://hasbropulse.com/cdn/shop/products/F7979USE0_detail_3_22_Online_2000SQ.jpg?v=1673619478&width=1200'
    },
    {
      id: 7,
      product_id: 3,
      item: 'Incredible nerf gun',
      price: '998.00',
      description: 'Adsidue comparo constans beneficium cruentus temporibus auctus. Fugiat nisi enim congregatio careo suffoco. Tondeo aperio demergo adsidue.',
      img: 'https://hasbropulse.com/cdn/shop/products/F7979USE0_detail_3_22_Online_2000SQ.jpg?v=1673619478&width=1200'
    },
    {
      id: 8,
      product_id: 3,
      item: 'Small paintball gun',
      price: '408.00',
      description: 'Curso suggero cicuta aperte conspergo verto cuppedia bibo cresco. Atavus supra aequus spiritus synagoga.',
      img: 'https://hasbropulse.com/cdn/shop/products/F7979USE0_detail_3_22_Online_2000SQ.jpg?v=1673619478&width=1200'
    },
    {
      id: 9,
      product_id: 3,
      item: 'Small butter knife',
      price: '707.00',
      description: 'Adulescens aranea votum. Censura vado debeo cubicularis sufficio cursus tergeo cogo acies. Adaugeo suscipio crux cunctatio candidus vitae venia.',
      img: 'https://www.webstaurantstore.com/images/products/large/455387/1783040.jpg'
    },
    {
      id: 10,
      product_id: 3,
      item: 'Sleek water gun',
      price: '648.00',
      description: 'Tergeo vero decet decor praesentium tamdiu soleo tabella. Ustulo temporibus trepide calcar barba cerno autus suspendo adversus. Capto via coadunatio odio advoco ipsam appello decretum aliquam.',
      img: 'https://i.ebayimg.com/images/g/jmoAAOxyQj9RN7sO/s-l640.jpg'
    },
    {
      id: 11,
      product_id: 3,
      item: 'Modern water gun',
      price: '481.00',
      description: 'Defaeco studio apud vergo. Quisquam uberrime defleo.',
      img: 'https://i.ebayimg.com/images/g/jmoAAOxyQj9RN7sO/s-l640.jpg'
    },
    {
      id: 12,
      product_id: 3,
      item: 'Intelligent water gun',
      price: '885.00',
      description: 'Suscipio aduro defungo. Admoneo tristis atqui defaeco. Cornu credo basium quas correptius.',
      img: 'https://m.media-amazon.com/images/I/71deGzg7YfL.jpg'
    },
    {
      id: 13,
      product_id: 3,
      item: 'Refined water gun',
      price: '824.00',
      description: 'Ustulo vallum atavus. Voluptate spectaculum ad auxilium admoneo thema color.',
      img: 'https://m.media-amazon.com/images/I/71deGzg7YfL.jpg'
    },
    {
      id: 14,
      product_id: 3,
      item: 'Ergonomic paintball gun',
      price: '896.00',
      description: 'Uberrime derideo taedium desidero abstergo cena peccatus vivo. Triumphus cicuta virga voro uxor cohaero laboriosam. Desparatus defaeco decimus.',
      img: 'https://m.media-amazon.com/images/I/71deGzg7YfL.jpg'
    },
    {
      id: 15,
      product_id: 3,
      item: 'Sleek nerf gun',
      price: '223.00',
      description: 'Defessus voco dicta. Carus defessus natus vomito vos utroque arto via thesis tabula.',
      img: 'https://i.ebayimg.com/images/g/jmoAAOxyQj9RN7sO/s-l640.jpg'
    },
    {
      id: 16,
      product_id: 3,
      item: 'Refined nerf gun',
      price: '542.00',
      description: 'Degero ulterius acidus demens adhaero acervus tergum tamdiu bibo inventore. Cubitum solvo venia creo sui ulterius aequus dedecor vulnus curso.',
      img: 'https://i.ebayimg.com/images/g/jmoAAOxyQj9RN7sO/s-l640.jpg'
    },
    {
      id: 17,
      product_id: 3,
      item: 'Electronic water gun',
      price: '913.00',
      description: 'Virgo accusamus iure tabesco capto adulescens alias. Caveo adstringo tametsi caecus sustineo currus quia rerum adstringo. Dapifer universe tribuo incidunt callide.',
      img: 'https://www.webstaurantstore.com/images/products/large/455387/1783040.jpg'
    },
    {
      id: 18,
      product_id: 3,
      item: 'Luxurious paintball gun',
      price: '878.00',
      description: 'Comedo decerno talio apparatus terebro degero depraedor aequitas. Carcer ceno adamo molestiae thema chirographum debeo abbas argumentum canis. Caecus adicio quos deficio cognomen verumtamen crastinus tactus canis.',
      img: 'https://i.ebayimg.com/images/g/jmoAAOxyQj9RN7sO/s-l640.jpg'
    },
    {
      id: 19,
      product_id: 3,
      item: 'Awesome water gun',
      price: '477.00',
      description: 'Somnus nulla deleo. Confugo convoco deinde absque tonsor. Tricesimus votum adimpleo accusantium quis aggredior aliquid textor.',
      img: 'https://i.ebayimg.com/images/g/jmoAAOxyQj9RN7sO/s-l640.jpg'
    },
    {
      id: 20,
      product_id: 3,
      item: 'Incredible water gun',
      price: '662.00',
      description: 'Vita caelestis maiores corrupti viscus antiquus.',
      img: 'https://hasbropulse.com/cdn/shop/products/F7979USE0_detail_3_22_Online_2000SQ.jpg?v=1673619478&width=1200'
    },
    {
      id: 21,
      product_id: 3,
      item: 'Bespoke butter knife',
      price: '105.00',
      description: 'Compello currus suffoco arbitro acquiro crustulum. Decerno amaritudo appositus creber corporis. Vulgaris vulgivagus accedo appello.',
      img: 'https://i5.walmartimages.com/seo/Revoltinator-Nerf-Zombie-Strike-Toy-Motorized-Blaster-18-Nerf-Darts_b9170627-3dc9-4923-bbdb-13615d81822b.9fc8c91b1b405676f7b5bd3af4148c94.jpeg'
    },
    {
      id: 22,
      product_id: 3,
      item: 'Electronic butter knife',
      price: '777.00',
      description: 'Aspernatur suspendo valens magni veritas comitatus. Ventus vapulus collum crebro.',
      img: 'https://i.ebayimg.com/images/g/jmoAAOxyQj9RN7sO/s-l640.jpg'
    },
    {
      id: 23,
      product_id: 3,
      item: 'Gorgeous paintball gun',
      price: '554.00',
      description: 'Vociferor delibero deprecator calamitas. Tempus dens amplexus vapulus voluptas admiratio vacuus conculco strues. Timidus velociter ager vomica curiositas eveniet truculenter.',
      img: 'https://i.ebayimg.com/images/g/jmoAAOxyQj9RN7sO/s-l640.jpg'
    },
    {
      id: 24,
      product_id: 3,
      item: 'Intelligent butter knife',
      price: '230.00',
      description: 'Custodia claro atrox vallum.',
      img: 'https://hasbropulse.com/cdn/shop/products/F7979USE0_detail_3_22_Online_2000SQ.jpg?v=1673619478&width=1200'
    }
  ]);
};
