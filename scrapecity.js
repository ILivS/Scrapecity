const puppeteer = require('puppeteer')
const cheerio = require('cheerio')

const scrapeProduct = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://store.nike.com/vn/en_gb/pw/mens-shoes/7puZoi3')
   for (let i = 0; i < 1000; i++)
        await page.keyboard.press('ArrowDown')
    const content = await page.content()
    const $ = cheerio.load(content)
    const prdName = []
    const imgSrc = []
    const res= []
    $('p.product-display-name').map((i, el) => {
        prdName.push(el.children[0].data)
    })
    $('img').map(function (i, el) {
        const link = el.attribs.src
        if (link && link.startsWith('https://images')) {
            imgSrc.push(link)
        }
    })
    const uniqueImgSrc = [...new Set(imgSrc)]
    for (let i=0;i<uniqueImgSrc.length;i++)
        res.push({
            url : uniqueImgSrc[i],
            name : prdName[i],
            size: ['S', 'M', 'L', 'XL'],
            tags: ['undefined'],
            color: ['Black', 'White', 'OrangeRed', 'Pink']
        })
    await browser.close()
    return res
} 

module.exports = scrapeProduct
