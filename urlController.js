class UrlController {
    constructor(urlModel) {
        this.urlModel = urlModel;
    }

    async createShortUrl(req, res) {
        const { originalUrl } = req.body;
        const shortUrl = await this.urlModel.createShortUrl(originalUrl);
        res.status(201).json({ shortUrl });
    }

    async getOriginalUrl(req, res) {
        const { shortUrl } = req.params;
        const originalUrl = await this.urlModel.getOriginalUrl(shortUrl);
        if (originalUrl) {
            res.status(200).json({ originalUrl });
        } else {
            res.status(404).json({ message: 'URL not found' });
        }
    }
}

module.exports = UrlController;