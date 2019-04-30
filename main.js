const Product = require('./models/product')
const scrapeProduct = require('./scrapecity')
require('./db/mongoose')
const promises = []
run() 

async function run() {
  const data  = await scrapeProduct()
  data.forEach((item) => {
    const {url, name, tags, size, color} = item
      const product = new Product({url: url, name: name, tags: tags, size: size, color: color})
      promises.push(product.save())
  })
  await Promise.all(promises)
}
