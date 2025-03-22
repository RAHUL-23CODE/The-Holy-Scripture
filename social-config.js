const socialConfig = {
    facebook: {
        appId: 'YOUR_FACEBOOK_APP_ID',
        pageUrl: 'https://facebook.com/thebible',
        pageName: 'The Bible'
    },
    twitter: {
        handle: '@thebible',
        pageUrl: 'https://twitter.com/thebible'
    },
    instagram: {
        handle: '@thebible',
        pageUrl: 'https://instagram.com/thebible'
    },
    youtube: {
        channelUrl: 'https://youtube.com/thebible',
        channelName: 'The Bible'
    }
};

if (typeof module !== 'undefined') {
    module.exports = socialConfig;
}
