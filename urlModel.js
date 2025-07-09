class UrlModel {
    constructor() {
        this.urls = new Map();
    }

    saveUrl(originalUrl, shortUrl) {
        this.urls.set(shortUrl, originalUrl);
    }

    getOriginalUrl(shortUrl) {
        return this.urls.get(shortUrl);
    }
}

module.exports = UrlModel;