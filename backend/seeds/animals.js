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
      product_id: 0,
      item: 'Recycled horse',
      price: '887.00',
      description: 'Spectaculum sum conitor sumo sub cado. Conculco calcar vitiosus acer. Articulus dolores quam copiose tricesimus abscido cedo.',
      img: 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/ibmig/cms/image/wlwt/26226384-26226384.jpg?crop=1xw:0.80645161290322576xh;center,top&resize=900:*'
    },
    {
      id: 1,
      product_id: 0,
      item: 'Bespoke snake',
      price: '924.00',
      description: 'Delectatio tempora bestia cenaculum.',
      img: 'https://www.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg'
    },
    {
      id: 2,
      product_id: 0,
      item: 'Electronic insect',
      price: '916.00',
      description: 'Doloremque suppellex turbo celer aufero volubilis degusto architecto. Laborum stultus doloremque vomer accedo tergeo convoco curis demitto.',
      img: 'https://www.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg'
    },
    {
      id: 3,
      product_id: 0,
      item: 'Small dog',
      price: '41.00',
      description: 'Triduana addo alter cupiditate. Demum appono agnosco amitto combibo curo argentum colo. Concido traho aequitas.',
      img: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 4,
      product_id: 0,
      item: 'Intelligent dog',
      price: '953.00',
      description: 'Damnatio civitas accedo voluptatum adsum magni unus. Conculco tui ustulo sequi vitium ex. Cruciamentum desparatus ratione deficio adamo tibi.',
      img: 'https://www.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg'
    },
    {
      id: 5,
      product_id: 0,
      item: 'Awesome cat',
      price: '279.00',
      description: 'Aliquid acerbitas cognatus. Teneo repudiandae adfectus trucido baiulus ad. Sunt colo tribuo sollers.',
      img: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 6,
      product_id: 0,
      item: 'Refined bear',
      price: '370.00',
      description: 'Demo sulum arbor.',
      img: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
    },
    {
      id: 7,
      product_id: 0,
      item: 'Rustic cat',
      price: '937.00',
      description: 'Nihil celebrer suasoria attonbitus repudiandae supplanto aspernatur.',
      img: 'https://www.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg'
    },
    {
      id: 8,
      product_id: 0,
      item: 'Electronic snake',
      price: '946.00',
      description: 'Thesis argentum corroboro sursum comedo decet volup conturbo. Utpote alias termes aufero abeo cruciamentum pectus vulariter velum aperte. Decens assumenda coerceo cunae creo verbum ante cetera.',
      img: 'https://www.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg'
    },
    {
      id: 9,
      product_id: 0,
      item: 'Awesome bear',
      price: '46.00',
      description: 'Mollitia conventus aestus spoliatio ager demo vito cohibeo.',
      img: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
    },
    {
      id: 10,
      product_id: 0,
      item: 'Generic lion',
      price: '873.00',
      description: 'Synagoga expedita dedecor defendo charisma vinum. Vetus celebrer vorago cuppedia. Vomer turpis barba tunc repellat caste spero abstergo.',
      img: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 11,
      product_id: 0,
      item: 'Handmade bear',
      price: '437.00',
      description: 'Tempus absconditus balbus alias copia spes valde uberrime volo. Incidunt calamitas reprehenderit certe.',
      img: 'https://www.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg'
    },
    {
      id: 12,
      product_id: 0,
      item: 'Intelligent bear',
      price: '8.00',
      description: 'Culpa crinis subvenio.',
      img: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
    },
    {
      id: 13,
      product_id: 0,
      item: 'Small cetacean',
      price: '31.00',
      description: 'Odit catena adstringo trans una cetera contigo nihil.',
      img: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 14,
      product_id: 0,
      item: 'Handmade lion',
      price: '474.00',
      description: 'Conventus aqua sequi tunc. Timidus defaeco speciosus utrimque aspernatur cribro utroque corrumpo.',
      img: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 15,
      product_id: 0,
      item: 'Unbranded cetacean',
      price: '91.00',
      description: 'Defaeco demum capillus. Suscipio bellum versus.',
      img: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 16,
      product_id: 0,
      item: 'Gorgeous crocodilia',
      price: '869.00',
      description: 'Sto cubitum vita decimus. Sapiente adamo patrocinor tres trucido avarus sunt absconditus.',
      img: 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/ibmig/cms/image/wlwt/26226384-26226384.jpg?crop=1xw:0.80645161290322576xh;center,top&resize=900:*'
    },
    {
      id: 17,
      product_id: 0,
      item: 'Awesome dog',
      price: '388.00',
      description: 'Tempus maiores voluptas sunt defendo audio.',
      img: 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/ibmig/cms/image/wlwt/26226384-26226384.jpg?crop=1xw:0.80645161290322576xh;center,top&resize=900:*'
    },
    {
      id: 18,
      product_id: 0,
      item: 'Sleek cat',
      price: '435.00',
      description: 'Cornu conservo tam validus qui arbustum verus.',
      img: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
    },
    {
      id: 19,
      product_id: 0,
      item: 'Gorgeous dog',
      price: '837.00',
      description: 'Basium ventito bardus. Cupiditate decens ancilla basium cresco voco.',
      img: 'https://www.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg'
    },
    {
      id: 20,
      product_id: 0,
      item: 'Gorgeous cat',
      price: '51.00',
      description: 'Defessus sequi minus aureus degero animadverto.',
      img: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 21,
      product_id: 0,
      item: 'Electronic bear',
      price: '440.00',
      description: 'Valde vinum ceno cur spiritus vomer cervus impedit. Terreo deserunt aqua cunae abutor timidus.',
      img: 'https://www.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-2.jpg'
    },
    {
      id: 22,
      product_id: 0,
      item: 'Small dog',
      price: '610.00',
      description: 'Suspendo conqueror libero. Aspernatur comburo sub voluptas triumphus ater.',
      img: 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/ibmig/cms/image/wlwt/26226384-26226384.jpg?crop=1xw:0.80645161290322576xh;center,top&resize=900:*'
    },
    {
      id: 23,
      product_id: 0,
      item: 'Luxurious snake',
      price: '174.00',
      description: 'Coadunatio adversus deporto coruscus vilis culpa vitae. Tamisium ver earum ipsa tamisium quae.',
      img: 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/ibmig/cms/image/wlwt/26226384-26226384.jpg?crop=1xw:0.80645161290322576xh;center,top&resize=900:*'
    },
    {
      id: 24,
      product_id: 0,
      item: 'Unbranded bird',
      price: '817.00',
      description: 'Vito suffoco rem laborum caecus tamquam consequatur.',
      img: 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/ibmig/cms/image/wlwt/26226384-26226384.jpg?crop=1xw:0.80645161290322576xh;center,top&resize=900:*'
    }
  ]);
};
