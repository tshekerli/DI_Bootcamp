const { db } = require('../config/config.js');


let people = [
  {
    id: 1,
    name: "John",
    lastname: "Doe",
    photo:
      "https://media.istockphoto.com/id/1310571099/photo/syrian-male-portrait.jpg?s=612x612&w=0&k=20&c=r2MbcEEb01S6zSmdp_TnaVAU124yR_9cDAnKw1WtWWc=",
    currentLocation: "Warville",
    contactInfo: "123-456-7890",
  },
  {
    id: 1,
    name: "John",
    lastname: "Doe",
    photo:
      "https://media.istockphoto.com/id/1310571099/photo/syrian-male-portrait.jpg?s=612x612&w=0&k=20&c=r2MbcEEb01S6zSmdp_TnaVAU124yR_9cDAnKw1WtWWc=",
    currentLocation: "Warville",
    contactInfo: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane",
    lastname: "Doe",
    photo:
      "https://act.refugeecouncil.org.uk/sites/refco/files/styles/full/public/Man%20-%20Eye%20Contact%20%20%28desaturated%29.png?itok=L4UcBckn",
    currentLocation: "Conflictstown",
    contactInfo: "234-567-8901",
  },
  {
    id: 3,
    name: "Jim",
    lastname: "Brown",
    photo:
      "https://media.gettyimages.com/id/1244056900/photo/male-asylum-seekers-as-seen-in-abandoned-old-train-carriages-near-thessaloniki-city-on-their.jpg?s=612x612&w=gi&k=20&c=Ece8bpEK2BHw294lVp0cqdPp73V0yktbnyo8btAv8tQ=",
    currentLocation: "Battlesburg",
    contactInfo: "345-678-9012",
  },
  {
    id: 4,
    name: "Jill",
    lastname: "Smith",
    photo:
      "https://static01.nyt.com/images/2016/12/11/sunday-review/11Cohen-slide-CD4Q/11Cohen-slide-CD4Q-articleLarge-v6.jpg?quality=75&auto=webp&disable=upscale",
    currentLocation: "Strifecity",
    contactInfo: "456-789-0123",
  },
  {
    id: 5,
    name: "Jack",
    lastname: "Johnson",
    photo:
      "https://img.freepik.com/premium-photo/photo-young-black-man-social-media-post-international-day-migration-world-refugee-day-concept_742418-14467.jpg",
    currentLocation: "Tumulttown",
    contactInfo: "567-890-1234",
  },
];

const cities = [
  {
    name: "Warville",
    policeStations: [
      { id: 1, address: "123 Warville St", contactNumber: "123-456-7890" },
      { id: 2, address: "456 Warville Ave", contactNumber: "234-567-8901" },
      { id: 3, address: "789 Warville Blvd", contactNumber: "345-678-9012" },
      { id: 4, address: "012 Warville Rd", contactNumber: "456-789-0123" },
      { id: 5, address: "345 Warville Ln", contactNumber: "567-890-1234" },
    ],
    hospitals: [
      { id: 1, address: "678 Warville St", contactNumber: "678-901-2345" },
      { id: 2, address: "901 Warville Ave", contactNumber: "789-012-3456" },
      { id: 3, address: "234 Warville Blvd", contactNumber: "890-123-4567" },
      { id: 4, address: "567 Warville Rd", contactNumber: "901-234-5678" },
      { id: 5, address: "890 Warville Ln", contactNumber: "012-345-6789" },
    ],
  },
  {
    name: "Conflictstown",
    policeStations: [
      {
        id: 1,
        address: "123 Conflicts Town St",
        contactNumber: "123-456-7890",
      },
      {
        id: 2,
        address: "456 Conflicts Town Ave",
        contactNumber: "234-567-8901",
      },
      {
        id: 3,
        address: "789 Conflicts Town Blvd",
        contactNumber: "345-678-9012",
      },
      {
        id: 4,
        address: "012 Conflicts Town Rd",
        contactNumber: "456-789-0123",
      },
      {
        id: 5,
        address: "345 Conflicts Town Ln",
        contactNumber: "567-890-1234",
      },
    ],
    hospitals: [
      {
        id: 1,
        address: "678 Conflicts Town St",
        contactNumber: "678-901-2345",
      },
      {
        id: 2,
        address: "901 Conflicts Town Ave",
        contactNumber: "789-012-3456",
      },
      {
        id: 3,
        address: "234 Conflicts Town Blvd",
        contactNumber: "890-123-4567",
      },
      {
        id: 4,
        address: "567 Conflicts Town Rd",
        contactNumber: "901-234-5678",
      },
      {
        id: 5,
        address: "890 Conflicts Town Ln",
        contactNumber: "012-345-6789",
      },
    ],
  },
  {
    name: "Battlesburg",
    policeStations: [
      { id: 1, address: "123 Battlesburg St", contactNumber: "123-456-7890" },
      { id: 2, address: "456 Battlesburg Ave", contactNumber: "234-567-8901" },
      { id: 3, address: "789 Battlesburg Blvd", contactNumber: "345-678-9012" },
      { id: 4, address: "012 Battlesburg Rd", contactNumber: "456-789-0123" },
      { id: 5, address: "345 Battlesburg Ln", contactNumber: "567-890-1234" },
    ],
    hospitals: [
      { id: 1, address: "678 Battlesburg St", contactNumber: "678-901-2345" },
      { id: 2, address: "901 Battlesburg Ave", contactNumber: "789-012-3456" },
      { id: 3, address: "234 Battlesburg Blvd", contactNumber: "890-123-4567" },
      { id: 4, address: "567 Battlesburg Rd", contactNumber: "901-234-5678" },
      { id: 5, address: "890 Battlesburg Ln", contactNumber: "012-345-6789" },
    ],
  },
  {
    name: "Strifecity",
    policeStations: [
      { id: 1, address: "123 Strife City St", contactNumber: "123-456-7890" },
      { id: 2, address: "456 Strife City Ave", contactNumber: "234-567-8901" },
      { id: 3, address: "789 Strife City Blvd", contactNumber: "345-678-9012" },
      { id: 4, address: "012 Strife City Rd", contactNumber: "456-789-0123" },
      { id: 5, address: "345 Strife City Ln", contactNumber: "567-890-1234" },
    ],
    hospitals: [
      { id: 1, address: "678 Strife City St", contactNumber: "678-901-2345" },
      { id: 2, address: "901 Strife City Ave", contactNumber: "789-012-3456" },
      { id: 3, address: "234 Strife City Blvd", contactNumber: "890-123-4567" },
      { id: 4, address: "567 Strife City Rd", contactNumber: "901-234-5678" },
      { id: 5, address: "890 Strife City Ln", contactNumber: "012-345-6789" },
    ],
  },
  {
    name: "Tumulttown",
    policeStations: [
      { id: 1, address: "123 Clashville St", contactNumber: "123-456-7890" },
      { id: 2, address: "456 Clashville Ave", contactNumber: "234-567-8901" },
      { id: 3, address: "789 Clashville Blvd", contactNumber: "345-678-9012" },
      { id: 4, address: "012 Clashville Rd", contactNumber: "456-789-0123" },
      { id: 5, address: "345 Clashville Ln", contactNumber: "567-890-1234" },
    ],
    hospitals: [
      { id: 1, address: "678 Clashville St", contactNumber: "678-901-2345" },
      { id: 2, address: "901 Clashville Ave", contactNumber: "789-012-3456" },
      { id: 3, address: "234 Clashville Blvd", contactNumber: "890-123-4567" },
      { id: 4, address: "567 Clashville Rd", contactNumber: "901-234-5678" },
      { id: 5, address: "890 Clashville Ln", contactNumber: "012-345-6789" },
    ],
  },
];


// db.schema.createTable('people', (table) => {
//   table.increments('id').primary();
//   table.string('name');
//   table.string('lastname');
//   table.string('photo');
//   table.string('currentLocation');
//   table.string('contactInfo');
// }).then(() => {
//   console.log('Table created');
// }).catch((err) => {
//     console.log(err);
//     });


// for (let i = 0; i < people.length; i++) {
//   db('people').insert(people[i])
//     .then(() => {
//       console.log('Data inserted');
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

//get all people make the function async




const getAllPeople = () => {
    return db('people').select('*');
}

// getAllPeople().then((people) => {
//     console.log(people);
//     });


// async function createTables() {
//     if (!await db.schema.hasTable('cities')) {
//       await db.schema.createTable('cities', table => {
//         table.increments('id').primary();
//         table.string('name').notNullable();
//       });
//     }
  
//     if (!await db.schema.hasTable('police_stations')) {
//       await db.schema.createTable('police_stations', table => {
//         table.increments('id').primary();
//         table.integer('city_id').references('id').inTable('cities').onDelete('CASCADE');
//         table.string('address').notNullable();
//         table.string('contact_number').notNullable();
//       });
//     }
  
//     if (!await db.schema.hasTable('hospitals')) {
//       await db.schema.createTable('hospitals', table => {
//         table.increments('id').primary();
//         table.integer('city_id').references('id').inTable('cities').onDelete('CASCADE');
//         table.string('address').notNullable();
//         table.string('contact_number').notNullable();
//       });
//     }
//   }
  
//   createTables();


// async function createTables() {
//     if (!await db.schema.hasTable('cities')) {
//       await db.schema.createTable('cities', table => {
//         table.string('name').primary();
//       });
//     }
  
//     if (!await db.schema.hasTable('police_stations')) {
//       await db.schema.createTable('police_stations', table => {
//         table.increments('id').primary();
//         table.string('city_id').references('name').inTable('cities').onDelete('CASCADE');
//         table.string('address').notNullable();
//         table.string('contact_number').notNullable();
//       });
//     }
  
//     if (!await db.schema.hasTable('hospitals')) {
//       await db.schema.createTable('hospitals', table => {
//         table.increments('id').primary();
//         table.string('city_id').references('name').inTable('cities').onDelete('CASCADE');
//         table.string('address').notNullable();
//         table.string('contact_number').notNullable();
//       });
//     }

//     console.log('Tables created');
//   }
  
//   createTables();



//   async function insertData() {
//     for (const city of cities) {
//       await db('cities').insert({name: city.name});
  
//       for (const station of city.policeStations) {
//         await db('police_stations').insert({
//           city_id: city.name,
//           address: station.address,
//           contact_number: station.contactNumber
//         });
//       }
  
//       for (const hospital of city.hospitals) {
//         await db('hospitals').insert({
//           city_id: city.name,
//           address: hospital.address,
//           contact_number: hospital.contactNumber
//         });
//       }
//     }
//   }
  
//   insertData();


// async function getCities() {
//     const cities = await db('cities');
  
//     for (let city of cities) {
//       city.policeStations = await db('policeStations').where('cityId', city.id);
//       city.hospitals = await db('hospitals').where('cityId', city.id);
//     }
  
//     return cities;
//   }
  
//   getCities().then(cities => console.log(cities));

// async function createTablesAndInsertData() {
//     // Create cities table
//     await db.schema.createTable('cities', function(table) {
//       table.increments('id');
//       table.string('name');
//     });
  
//     // Create police_stations table
//     await db.schema.createTable('police_stations', function(table) {
//       table.increments('id');
//       table.integer('city_id').references('id').inTable('cities');
//       table.string('address');
//       table.string('contact_number');
//     });
  
//     // Create hospitals table
//     await db.schema.createTable('hospitals', function(table) {
//       table.increments('id');
//       table.integer('city_id').references('id').inTable('cities');
//       table.string('address');
//       table.string('contact_number');
//     });
  
//     // Insert data
//     for (const city of cities) {
//       const [cityObj] = await db('cities').insert({name: city.name}).returning('*');
  
//       for (const station of city.policeStations) {
//         await db('police_stations').insert({
//           city_id: cityObj.id,
//           address: station.address,
//           contact_number: station.contactNumber
//         });
//       }
  
//       for (const hospital of city.hospitals) {
//         await db('hospitals').insert({
//           city_id: cityObj.id,
//           address: hospital.address,
//           contact_number: hospital.contactNumber
//         });
//       }
//     }
//     console.log('Tables created and data inserted');
//   }
  
//   createTablesAndInsertData();


async function getData() {
    const cities = await db('cities');
  
    for (const city of cities) {
      const policeStations = await db('police_stations').where('city_id', city.id);
      const hospitals = await db('hospitals').where('city_id', city.id);
  
      city.policeStations = policeStations;
      city.hospitals = hospitals;
    }
  
    return cities;
  }
  
  

  module.exports = { getAllPeople, getData };

  
