const express = require('express');
const UrlController = require('../controllers/urlController');

const router = express.Router();
const urlController = new UrlController();

router.post('/shorten', urlController.createShortUrl);
router.get('/original/:shortUrl', urlController.getOriginalUrl);

module.exports = router;