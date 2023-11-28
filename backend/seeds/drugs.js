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
      product_id: 1,
      item: 'Practical tylenol',
      price: '69.00',
      description: 'Thalassinus talus numquam caveo vestigium tremo admoveo vicinus accommodo. Vita tonsor atavus tergo vindico convoco perspiciatis. Comptus texo porro artificiose cicuta adsuesco vester voluptate.',
      img: 'https://target.scene7.com/is/image/Target/GUEST_51b0232c-ae0c-4121-b9bc-a25a9dd1909e?wid=488&hei=488&fmt=pjpeg'
    },
    {
      id: 1,
      product_id: 1,
      item: 'Modern tylenol',
      price: '275.00',
      description: 'Fuga autem copiose urbs defessus carbo cresco alius uter. Contra civis acquiro viriliter color despecto. Absorbeo arbustum subnecto ustulo tamquam expedita compono.',
      img: 'https://images.heb.com/is/image/HEBGrocery/002239355-1'
    },
    {
      id: 2,
      product_id: 1,
      item: 'Bespoke advil',
      price: '963.00',
      description: 'Quisquam animi vicinus caries ascit autem verto vir conservo stella. Vesica voluptates soluta ceno convoco sonitus quo utroque copia.',
      img: 'https://target.scene7.com/is/image/Target/GUEST_51b0232c-ae0c-4121-b9bc-a25a9dd1909e?wid=488&hei=488&fmt=pjpeg'
    },
    {
      id: 3,
      product_id: 1,
      item: 'Ergonomic claritin',
      price: '981.00',
      description: 'Magnam volup verecundia solio amo pariatur molestiae coerceo.',
      img: 'https://www.claritin.com/sites/g/files/vrxlpx48396/files/2019-12/base-reditabs-12hr-hero-angle.png?imwidth=5000'
    },
    {
      id: 4,
      product_id: 1,
      item: 'Small claritin',
      price: '22.00',
      description: 'Dolore creator socius coaegresco aggredior depulso voluntarius strues cavus cenaculum.',
      img: 'https://www.claritin.com/sites/g/files/vrxlpx48396/files/2019-12/base-reditabs-12hr-hero-angle.png?imwidth=5000'
    },
    {
      id: 5,
      product_id: 1,
      item: 'Sleek advil',
      price: '955.00',
      description: 'Demens conservo traho vorax utpote. Absque demum cenaculum.',
      img: 'https://hargravesotc.com/cdn/shop/files/Ibuprofen_200_mg_1000_Coated_Tablets_1200x1200.jpg?v=1685213830'
    },
    {
      id: 6,
      product_id: 1,
      item: 'Generic claritin',
      price: '329.00',
      description: 'Corrupti supellex communis vester bibo complectus.',
      img: 'https://target.scene7.com/is/image/Target/GUEST_51b0232c-ae0c-4121-b9bc-a25a9dd1909e?wid=488&hei=488&fmt=pjpeg'
    },
    {
      id: 7,
      product_id: 1,
      item: 'Handmade tylenol',
      price: '243.00',
      description: 'Magni vehemens spiritus spiritus.',
      img: 'https://hargravesotc.com/cdn/shop/files/Ibuprofen_200_mg_1000_Coated_Tablets_1200x1200.jpg?v=1685213830'
    },
    {
      id: 8,
      product_id: 1,
      item: 'Fantastic tylenol',
      price: '353.00',
      description: 'Degusto cetera nostrum. Adeptio pecto vox aedificium ex arceo xiphias usque conqueror vivo. Abscido tunc vehemens maxime cibo advoco agnitio pecus.',
      img: 'https://hargravesotc.com/cdn/shop/files/Ibuprofen_200_mg_1000_Coated_Tablets_1200x1200.jpg?v=1685213830'
    },
    {
      id: 9,
      product_id: 1,
      item: 'Unbranded advil',
      price: '979.00',
      description: 'Cena addo temeritas vaco virgo subito voluptate colligo acervus sunt.',
      img: 'https://www.claritin.com/sites/g/files/vrxlpx48396/files/2019-12/base-reditabs-12hr-hero-angle.png?imwidth=5000'
    },
    {
      id: 10,
      product_id: 1,
      item: 'Modern claritin',
      price: '583.00',
      description: 'Tum strues nulla commemoro totam. Quidem vetus vilicus auditor maiores comburo cerno voluptatum ascit balbus. Tubineus cohibeo enim tandem denique mollitia.',
      img: 'https://hargravesotc.com/cdn/shop/files/Ibuprofen_200_mg_1000_Coated_Tablets_1200x1200.jpg?v=1685213830'
    },
    {
      id: 11,
      product_id: 1,
      item: 'Awesome tylenol',
      price: '804.00',
      description: 'Degero tutamen curvo strenuus cernuus calamitas consuasor.',
      img: 'https://target.scene7.com/is/image/Target/GUEST_51b0232c-ae0c-4121-b9bc-a25a9dd1909e?wid=488&hei=488&fmt=pjpeg'
    },
    {
      id: 12,
      product_id: 1,
      item: 'Awesome tylenol',
      price: '918.00',
      description: 'Vinitor supellex architecto vesper copiose canto clementia complectus aeternus.',
      img: 'https://www.claritin.com/sites/g/files/vrxlpx48396/files/2019-12/base-reditabs-12hr-hero-angle.png?imwidth=5000'
    },
    {
      id: 13,
      product_id: 1,
      item: 'Elegant ibuprofen',
      price: '349.00',
      description: 'Alo bibo tabgo arbitro volup timor cupiditate candidus facere.',
      img: 'https://images.heb.com/is/image/HEBGrocery/002239355-1'
    },
    {
      id: 14,
      product_id: 1,
      item: 'Modern advil',
      price: '705.00',
      description: 'Vorax eos tristis thema. Truculenter deduco minus ancilla paens congregatio. Amissio attonbitus audio quidem.',
      img: 'https://target.scene7.com/is/image/Target/GUEST_51b0232c-ae0c-4121-b9bc-a25a9dd1909e?wid=488&hei=488&fmt=pjpeg'
    },
    {
      id: 15,
      product_id: 1,
      item: 'Modern claritin',
      price: '876.00',
      description: 'Vehemens delicate utilis. Sublime trado libero copiose eum uxor. Quae ipsa templum infit synagoga aveho distinctio tutamen voluptas.',
      img: 'https://www.claritin.com/sites/g/files/vrxlpx48396/files/2019-12/base-reditabs-12hr-hero-angle.png?imwidth=5000'
    },
    {
      id: 16,
      product_id: 1,
      item: 'Ergonomic claritin',
      price: '662.00',
      description: 'Cupiditate spero universe cattus bonus volutabrum tot altus amo avarus. Crapula summa vilicus. Sursum velum currus volaticus territo.',
      img: 'https://target.scene7.com/is/image/Target/GUEST_51b0232c-ae0c-4121-b9bc-a25a9dd1909e?wid=488&hei=488&fmt=pjpeg'
    },
    {
      id: 17,
      product_id: 1,
      item: 'Small advil',
      price: '715.00',
      description: 'Voluptatem cariosus caries pectus creber villa statua. Assentator trado beatae viduo sapiente creptio molestias. Eligendi angustus caterva crinis beatae curis viridis cognomen ultra canis.',
      img: 'https://target.scene7.com/is/image/Target/GUEST_51b0232c-ae0c-4121-b9bc-a25a9dd1909e?wid=488&hei=488&fmt=pjpeg'
    },
    {
      id: 18,
      product_id: 1,
      item: 'Rustic advil',
      price: '919.00',
      description: 'Accusamus distinctio decretum sublime comprehendo venustas non pecto. Paens statua adflicto totidem cuius solvo templum approbo.',
      img: 'https://target.scene7.com/is/image/Target/GUEST_51b0232c-ae0c-4121-b9bc-a25a9dd1909e?wid=488&hei=488&fmt=pjpeg'
    },
    {
      id: 19,
      product_id: 1,
      item: 'Generic ibuprofen',
      price: '636.00',
      description: 'Unus tabella adduco.',
      img: 'https://hargravesotc.com/cdn/shop/files/Ibuprofen_200_mg_1000_Coated_Tablets_1200x1200.jpg?v=1685213830'
    },
    {
      id: 20,
      product_id: 1,
      item: 'Fantastic advil',
      price: '66.00',
      description: 'Decretum absum allatus careo cur argentum volutabrum.',
      img: 'https://www.claritin.com/sites/g/files/vrxlpx48396/files/2019-12/base-reditabs-12hr-hero-angle.png?imwidth=5000'
    },
    {
      id: 21,
      product_id: 1,
      item: 'Handcrafted tylenol',
      price: '984.00',
      description: 'Iste surculus voluntarius comes suggero campana substantia delinquo aduro.',
      img: 'https://hargravesotc.com/cdn/shop/files/Ibuprofen_200_mg_1000_Coated_Tablets_1200x1200.jpg?v=1685213830'
    },
    {
      id: 22,
      product_id: 1,
      item: 'Intelligent claritin',
      price: '2.00',
      description: 'Varietas audacia creo aliquid. Aliquid curatio contigo temeritas.',
      img: 'https://www.claritin.com/sites/g/files/vrxlpx48396/files/2019-12/base-reditabs-12hr-hero-angle.png?imwidth=5000'
    },
    {
      id: 23,
      product_id: 1,
      item: 'Awesome advil',
      price: '694.00',
      description: 'Amiculum truculenter quisquam anser aut natus. Absconditus arguo tertius depereo provident tego asperiores trado. Accendo est denique adeptio atrocitas.',
      img: 'https://images.heb.com/is/image/HEBGrocery/002239355-1'
    },
    {
      id: 24,
      product_id: 1,
      item: 'Elegant ibuprofen',
      price: '717.00',
      description: 'Testimonium torqueo comitatus anser caelum quod eaque autus vitium aperte.',
      img: 'https://target.scene7.com/is/image/Target/GUEST_51b0232c-ae0c-4121-b9bc-a25a9dd1909e?wid=488&hei=488&fmt=pjpeg'
    }
  ]);
};
