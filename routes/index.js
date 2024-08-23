var express = require('express');
var router = express.Router();
const CarModel = require('../models/CarModel');
var CharacterModel = require('../models/CharacterModel');
router.get('/', (req, res) => {
 
  res.render('index', { title: "Car store" })
 
})
const carouselImages = [
  { src: '/images/carousel1.jpg', alt: 'Carousel Image 1' },
  { src: '/images/carousel2.jpg', alt: 'Carousel Image 2' },
  { src: '/images/carousel3.jpg', alt: 'Carousel Image 3' }
];
// Route chính cho trang index
router.get('/', (req, res) => {
  // Render template index.hbs với dữ liệu động
  res.render('index', { 
     title: "Product", 
     logoutButtonText: "Logout",
     addToCartButtonText: "Add to Cart",
     carouselImages: carouselImages,
     products: products,
     layout: 'layout'  
  });
});
router.get('/Car', async (req, res) => {
  try {
      // Truy vấn sản phẩm từ cơ sở dữ liệu
      let cars = await CarModel.find({}).sort({ _id: -1 });
      res.render('car', { // Đảm bảo rằng `views/page.handlebars` tồn tại
          name: "Product Car",
          cars: cars,
          layout: 'layout' // Sử dụng layout `layout_page.handlebars`
      });
  } catch (error) {
      console.error('Error fetching cars:', error);
      res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
