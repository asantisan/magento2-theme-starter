/**
 * Starter Theme - RequireJS
 *
 */
var config = {
    paths: {
        'lazyload': 'js/lazyload',
        'slick': 'js/slick',
        'aos': 'js/aos',
        'parallax': 'js/parallax'
    },
    shim: {
        'lazyload': {
            deps: ['jquery']
        },
        'slick': {
            deps: ['jquery']
        },
        'aos': {
            deps: ['jquery']
        },
        'parallax': {
            deps: ['jquery']
        }
    }
};
