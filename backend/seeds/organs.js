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
      product_id: 3,
      item: 'Practical reed organ',
      price: '748.00',
      description: 'Coaegresco quisquam itaque verecundia strenuus.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692469534996-R5QCDY9CVOLE0HTSXVKD/image002.jpg?format=1000w'
    },
    {
      id: 1,
      product_id: 3,
      item: 'Refined reed organ',
      price: '755.00',
      description: 'Animadverto tot acceptus.',
      img: 'https://cdn.britannica.com/68/145568-050-289C8CB6/Reed-organ.jpg'
    },
    {
      id: 2,
      product_id: 3,
      item: 'Sleek electric organ',
      price: '402.00',
      description: 'Territo coniuratio cado.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692468722836-THNVDOOMYIPDAPIS9C61/20230716_092013.jpg?format=1500w'
    },
    {
      id: 3,
      product_id: 3,
      item: 'Oriental reed organ',
      price: '24.00',
      description: 'Occaecati thymum vinculum. Chirographum velum vinculum aperiam trucido trucido utique desparatus desparatus. Unde cerno confero deludo sub teres versus.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692468722836-THNVDOOMYIPDAPIS9C61/20230716_092013.jpg?format=1500w'
    },
    {
      id: 4,
      product_id: 3,
      item: 'Gorgeous electric organ',
      price: '606.00',
      description: 'Summopere acerbitas trado abutor benigne creta turbo. Armarium subito volaticus terra desolo pauper deludo demergo repudiandae depereo.',
      img: 'https://cdn.britannica.com/68/145568-050-289C8CB6/Reed-organ.jpg'
    },
    {
      id: 5,
      product_id: 3,
      item: 'Handcrafted water organ',
      price: '86.00',
      description: 'Amiculum ventito tollo porro chirographum conitor in tempus carcer.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692468722836-THNVDOOMYIPDAPIS9C61/20230716_092013.jpg?format=1500w'
    },
    {
      id: 6,
      product_id: 3,
      item: 'Small electric organ',
      price: '980.00',
      description: 'Apud vomer vero via complectus maxime custodia comptus utor.',
      img: 'https://cdn.britannica.com/68/145568-050-289C8CB6/Reed-organ.jpg'
    },
    {
      id: 7,
      product_id: 3,
      item: 'Rustic electric organ',
      price: '690.00',
      description: 'Aedificium cohors aperte tunc bellum velit universe ago pauper ago.',
      img: 'https://thetablet.org/wp-content/uploads/2021/02/FEAT_IHM_Organ_2.jpg'
    },
    {
      id: 8,
      product_id: 3,
      item: 'Practical reed organ',
      price: '147.00',
      description: 'Cras aranea corrumpo tenax textus spes.',
      img: 'https://thetablet.org/wp-content/uploads/2021/02/FEAT_IHM_Organ_2.jpg'
    },
    {
      id: 9,
      product_id: 3,
      item: 'Luxurious electric organ',
      price: '82.00',
      description: 'Corroboro abbas pariatur. Totidem templum cerno decipio thymbra.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692468722836-THNVDOOMYIPDAPIS9C61/20230716_092013.jpg?format=1500w'
    },
    {
      id: 10,
      product_id: 3,
      item: 'Oriental reed organ',
      price: '386.00',
      description: 'Peccatus sufficio vesco utique compono asporto antepono. Sint acsi amoveo arto admitto spes ago verus exercitationem. Cicuta appositus cinis creptio unus circumvenio validus inventore.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692469534996-R5QCDY9CVOLE0HTSXVKD/image002.jpg?format=1000w'
    },
    {
      id: 11,
      product_id: 3,
      item: 'Intelligent water organ',
      price: '22.00',
      description: 'Adeptio crur texo dens conor spectaculum thesaurus ultra vinitor eos. Arguo amet truculenter conduco occaecati iure auctus. Placeat confugo quidem.',
      img: 'https://thetablet.org/wp-content/uploads/2021/02/FEAT_IHM_Organ_2.jpg'
    },
    {
      id: 12,
      product_id: 3,
      item: 'Modern electric organ',
      price: '603.00',
      description: 'Sint vinitor virgo acsi. Illo nisi tabella considero aeneus validus tribuo culpo vado.',
      img: 'https://thetablet.org/wp-content/uploads/2021/02/FEAT_IHM_Organ_2.jpg'
    },
    {
      id: 13,
      product_id: 3,
      item: 'Handmade electric organ',
      price: '63.00',
      description: 'Conscendo earum combibo. Atrocitas reiciendis repudiandae. Avaritia commemoro modi.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692468722836-THNVDOOMYIPDAPIS9C61/20230716_092013.jpg?format=1500w'
    },
    {
      id: 14,
      product_id: 3,
      item: 'Sleek pipe organ',
      price: '738.00',
      description: 'Sui solium curiositas.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692468722836-THNVDOOMYIPDAPIS9C61/20230716_092013.jpg?format=1500w'
    },
    {
      id: 15,
      product_id: 3,
      item: 'Rustic electric organ',
      price: '200.00',
      description: 'Defero victoria demonstro odit conitor stips conor cito cubo. Acquiro creta tertius ambitus artificiose aqua expedita fugit termes arceo.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692469534996-R5QCDY9CVOLE0HTSXVKD/image002.jpg?format=1000w'
    },
    {
      id: 16,
      product_id: 3,
      item: 'Small reed organ',
      price: '792.00',
      description: 'Patria odit amitto verbera sulum ter derideo. Conforto defleo compono vobis crux veritas carpo vulticulus decipio.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692469534996-R5QCDY9CVOLE0HTSXVKD/image002.jpg?format=1000w'
    },
    {
      id: 17,
      product_id: 3,
      item: 'Handcrafted pipe organ',
      price: '366.00',
      description: 'Suggero vigilo subseco autus sumo cedo condico delego.',
      img: 'https://cdn.britannica.com/68/145568-050-289C8CB6/Reed-organ.jpg'
    },
    {
      id: 18,
      product_id: 3,
      item: 'Elegant reed organ',
      price: '260.00',
      description: 'Timidus deinde curis. Tabernus conventus coruscus tribuo vetus.',
      img: 'https://thetablet.org/wp-content/uploads/2021/02/FEAT_IHM_Organ_2.jpg'
    },
    {
      id: 19,
      product_id: 3,
      item: 'Gorgeous reed organ',
      price: '424.00',
      description: 'Consequatur admoneo desparatus charisma valde aqua alienus. Cum voluptates audax usque.',
      img: 'https://thetablet.org/wp-content/uploads/2021/02/FEAT_IHM_Organ_2.jpg'
    },
    {
      id: 20,
      product_id: 3,
      item: 'Licensed water organ',
      price: '72.00',
      description: 'Temperantia cilicium corroboro creptio tollo. Cinis usitas verus astrum administratio curtus cursus trans. Nobis thesaurus chirographum defluo tollo templum cotidie aedificium cernuus torrens.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692468722836-THNVDOOMYIPDAPIS9C61/20230716_092013.jpg?format=1500w'
    },
    {
      id: 21,
      product_id: 3,
      item: 'Luxurious water organ',
      price: '452.00',
      description: 'Callide id cohors caritas. Certe ceno carmen color confugo illum.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692469534996-R5QCDY9CVOLE0HTSXVKD/image002.jpg?format=1000w'
    },
    {
      id: 22,
      product_id: 3,
      item: 'Modern reed organ',
      price: '263.00',
      description: 'Sum appello vito claro deporto. Bellicus deprimo rerum conscendo verus comminor volva crastinus nisi. Curto circumvenio votum avaritia tempore aliqua qui validus.',
      img: 'https://images.squarespace-cdn.com/content/v1/59af83217131a5b42453b1db/1692469534996-R5QCDY9CVOLE0HTSXVKD/image002.jpg?format=1000w'
    },
    {
      id: 23,
      product_id: 3,
      item: 'Oriental water organ',
      price: '925.00',
      description: 'Sustineo ambulo stella illum subnecto super occaecati solus.',
      img: 'https://cdn.britannica.com/68/145568-050-289C8CB6/Reed-organ.jpg'
    },
    {
      id: 24,
      product_id: 3,
      item: 'Handcrafted pipe organ',
      price: '234.00',
      description: 'Defendo cibo adipiscor caelum occaecati adficio. Cognatus sumptus coepi. Tenus ventus curatio centum derideo advenio.',
      img: 'https://cdn.britannica.com/68/145568-050-289C8CB6/Reed-organ.jpg'
    }
  ]);
};
