// eslint-disable-next-line no-undef
module.exports = {
    async headers() {
        return [
            {
                source: '/(.*)?', // Matches all pages
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    }
                ]
            }
        ]
    }
}