var faker = require('faker');

module.exports = () => {
  const data = { cars: [], model:[], year:[] };


  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    let date = new Date(faker.date.past());

    data.cars.push(
        {
          id: i,
          name: faker.commerce.productName(),
          image: faker.image.image(),
          year: date.getFullYear() + '-' + (date.getMonth() + 1)  + '-' + date.getDate(),
          speeds: faker.random.number(),
          price: faker.commerce.price()
        })
  }
  return data
}