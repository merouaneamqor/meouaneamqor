const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxt/content:urls",
            "description": "Generated from your markdown files.",
            "tips": [
                "You can provide a `sitemap` key in your markdown frontmatter to configure specific URLs. Make sure you include a `loc`."
            ]
        },
        "fetch": "/__sitemap__/nuxt-content-urls.json",
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/about",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/about"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/about"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/about"
                    }
                ]
            },
            {
                "loc": "/fr/about",
                "_sitemap": "fr",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/about"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/about"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/about"
                    }
                ]
            },
            {
                "loc": "/blog",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/blog"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/blog"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/blog"
                    }
                ]
            },
            {
                "loc": "/fr/blog",
                "_sitemap": "fr",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/blog"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/blog"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/blog"
                    }
                ]
            },
            {
                "loc": "/contact",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/contact"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/contact"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contact"
                    }
                ]
            },
            {
                "loc": "/fr/contact",
                "_sitemap": "fr",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/contact"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/contact"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/contact"
                    }
                ]
            },
            {
                "loc": "/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/fr",
                "_sitemap": "fr",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/portfolio",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/portfolio"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/portfolio"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/portfolio"
                    }
                ]
            },
            {
                "loc": "/fr/portfolio",
                "_sitemap": "fr",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/portfolio"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/portfolio"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/portfolio"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
