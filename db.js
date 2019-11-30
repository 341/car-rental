var faker = require('faker');

module.exports = () => {
  const data = { cars: []};

  for (let i = 0; i < 6; i++) {
    let date = new Date(faker.date.between('2015-01-01', '2018-12-31'));

    data.cars.push(
        {
          id: i,
          name: faker.commerce.productName(),
          image: faker.image.image(),
          year: date.getFullYear(),
          speeds: faker.random.number({min:4, max:8}),
          price: faker.commerce.price()
        })
  }
  return data
}