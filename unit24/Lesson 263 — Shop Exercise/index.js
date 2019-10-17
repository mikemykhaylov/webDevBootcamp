const faker = require('faker');

for (let i = 0; i < 10; i += 1) {
  console.log(faker.fake('{{commerce.productName}} - {{commerce.price}} $'));
}
