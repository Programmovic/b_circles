"use strict";
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1360);
/* harmony import */ var _partials_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9183);
/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4764);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__, _partials_Footer__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__, _partials_Footer__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Base = ({ title , meta_title , description , image , noindex , canonical , children  })=>{
    const { meta_image , meta_author , meta_description  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .metadata */ .Pu;
    const { base_url  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .site */ .lz;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .site.title */ .lz.title)
                    }),
                    canonical && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: canonical,
                        itemProp: "url"
                    }),
                    noindex && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "noindex,nofollow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: meta_author
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .site.title */ .lz.title)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: `${base_url}/${router.asPath.replace("/", "")}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .site.title */ .lz.title)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: `${base_url}${image ? image : meta_image}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: `${base_url}${image ? image : meta_image}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__);


const Social = ({ source , className  })=>{
    const { facebook , twitter , instagram , youtube , linkedin , github , gitlab , discord , slack , medium , codepen , bitbucket , dribbble , behance , pinterest , soundcloud , tumblr , reddit , vk , whatsapp , snapchat , vimeo , tiktok , foursquare , rss , email , phone , address , skype , website  } = source;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: className,
        children: [
            facebook && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "facebook",
                    href: facebook,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoFacebook, {})
                })
            }),
            twitter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "twitter",
                    href: twitter,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoTwitter, {})
                })
            }),
            instagram && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "instagram",
                    href: instagram,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoInstagram, {})
                })
            }),
            youtube && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "youtube",
                    href: youtube,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoYoutube, {})
                })
            }),
            linkedin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "linkedin",
                    href: linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoLinkedin, {})
                })
            }),
            github && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "github",
                    href: github,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoGithub, {})
                })
            }),
            gitlab && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "gitlab",
                    href: gitlab,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoGitlab, {})
                })
            }),
            discord && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "discord",
                    href: discord,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoDiscord, {})
                })
            }),
            slack && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "slack",
                    href: slack,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoSlack, {})
                })
            }),
            medium && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "medium",
                    href: medium,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoMedium, {})
                })
            }),
            codepen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "codepen",
                    href: codepen,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoCodepen, {})
                })
            }),
            bitbucket && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "bitbucket",
                    href: bitbucket,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoBitbucket, {})
                })
            }),
            dribbble && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "dribbble",
                    href: dribbble,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoDribbble, {})
                })
            }),
            behance && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "behance",
                    href: behance,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoBehance, {})
                })
            }),
            pinterest && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "pinterest",
                    href: pinterest,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoPinterest, {})
                })
            }),
            soundcloud && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "soundcloud",
                    href: soundcloud,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoSoundcloud, {})
                })
            }),
            tumblr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "tumblr",
                    href: tumblr,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoTumblr, {})
                })
            }),
            reddit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "reddit",
                    href: reddit,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoReddit, {})
                })
            }),
            vk && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "vk",
                    href: vk,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoVk, {})
                })
            }),
            whatsapp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "whatsapp",
                    href: whatsapp,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoWhatsapp, {})
                })
            }),
            snapchat && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "snapchat",
                    href: snapchat,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoSnapchat, {})
                })
            }),
            vimeo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "vimeo",
                    href: vimeo,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoVimeo, {})
                })
            }),
            tiktok && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "tiktok",
                    href: tiktok,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoTiktok, {})
                })
            }),
            foursquare && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "foursquare",
                    href: foursquare,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoFoursquare, {})
                })
            }),
            skype && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "skype",
                    href: skype,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoSkype, {})
                })
            }),
            website && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "website",
                    href: website,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoGlobeOutline, {})
                })
            }),
            rss && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "rss feed",
                    href: rss,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoRss, {})
                })
            }),
            email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "email",
                    href: `mailto:${email}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoMail, {})
                })
            }),
            phone && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "telephone",
                    href: `tel:${phone}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoCall, {})
                })
            }),
            address && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "location",
                    href: address,
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLocation, {})
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Social);


/***/ }),

/***/ 9183:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8342);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6626);
/* harmony import */ var _config_menu_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9012);
/* harmony import */ var _config_social_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1639);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1360);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Footer = ()=>{
    const { copyright , footer_content  } = _config_config_json__WEBPACK_IMPORTED_MODULE_2__/* .params */ .f;
    const { footer  } = _config_menu_json__WEBPACK_IMPORTED_MODULE_3__;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "section bg-theme-light pb-0 dark:text-white dark:bg-[#141111d9]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        footer.map((col)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-12 sm:col-6 lg:col-3 dark:text-white",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "dark:text-white h4",
                                        children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__/* .markdownify */ .gI)(col.name)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "mt-6",
                                        children: col?.menu.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "mb-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    href: item.url,
                                                    rel: "",
                                                    children: item.text
                                                })
                                            }, item.text))
                                    })
                                ]
                            }, col.name);
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "md-12 sm:col-6 lg:col-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    href: "/",
                                    "aria-label": "Bigspring",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        src: _config_config_json__WEBPACK_IMPORTED_MODULE_2__/* .site.logo */ .lz.logo,
                                        width: _config_config_json__WEBPACK_IMPORTED_MODULE_2__/* .site.logo_width */ .lz.logo_width,
                                        height: _config_config_json__WEBPACK_IMPORTED_MODULE_2__/* .site.logo_height */ .lz.logo_height,
                                        alt: ""
                                    })
                                }),
                                (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__/* .markdownify */ .gI)(footer_content, "p", "mt-3 mb-6"),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Social__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    source: _config_social_json__WEBPACK_IMPORTED_MODULE_4__,
                                    className: "social-icons mb-8"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-6",
                    children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__/* .markdownify */ .gI)(copyright, "p", "text-sm text-center")
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ partials_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./config/config.json
var config = __webpack_require__(6626);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./layouts/components/Logo.js




const Logo = ({ src  })=>{
    // destructuring items from config object
    const { base_url , logo , logo_width , logo_height , logo_text , title  } = config/* site */.lz;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: base_url,
        className: "navbar-brand flex py-1",
        style: {
            height: logo_height.replace("px", "") + "px",
            width: logo_width.replace("px", "") + "px"
        },
        children: src || logo ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                class: "self-center text-2xl font-semibold dark:text-white",
                children: logo_text
            })
        }) : logo_text ? logo_text : title
    });
};
/* harmony default export */ const components_Logo = (Logo);

// EXTERNAL MODULE: ./config/menu.json
var menu = __webpack_require__(9012);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./layouts/components/ThemeSwitcher.js




const ThemeSwitcher = ()=>{
    const { theme , setTheme  } = (0,external_next_themes_.useTheme)();
    const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    };
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            onClick: toggleTheme,
            className: "btn btn-primary z-0 p-[5px]",
            children: theme === "light" ? /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaMoon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaSun, {})
        })
    });
};
/* harmony default export */ const components_ThemeSwitcher = (ThemeSwitcher);

;// CONCATENATED MODULE: ./layouts/partials/Header.js








const Header = ()=>{
    const router = (0,router_.useRouter)();
    const { main  } = menu;
    const [navOpen, setNavOpen] = (0,external_react_.useState)(false);
    const { logo  } = config/* site */.lz;
    const { enable , label , link  } = config/* nav_button */.Hl;
    const [isSticky, setIsSticky] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = ()=>{
        if (window.pageYOffset > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `dark:bg-[#141111d9] backdrop-blur-lg header fixed w-full z-50 ${isSticky ? "shadow-md" : null}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "navbar container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "order-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {
                        src: logo
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    id: "show-button",
                    className: "order-2 flex cursor-pointer items-center md:hidden md:order-1",
                    onClick: ()=>setNavOpen(!navOpen),
                    children: navOpen ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "h-6 fill-current",
                        viewBox: "0 0 20 20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Menu Open"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                points: "11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2",
                                transform: "rotate(45 10 10)"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        className: "h-6 fill-current",
                        viewBox: "0 0 20 20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                children: "Menu Close"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "nav-menu",
                    className: `order-3 md:order-1 ${navOpen ? "max-h-[1000px]" : "max-h-0"}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navbar-nav block w-full md:flex md:w-auto lg:space-x-2",
                        children: [
                            main.map((menu, i)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                    children: menu.hasChildren ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "nav-item nav-dropdown group relative",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "nav-link inline-flex items-center",
                                                children: [
                                                    menu.name,
                                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        className: "h-4 w-4 fill-current",
                                                        viewBox: "0 0 20 20",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100",
                                                children: menu.children.map((child, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "nav-dropdown-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: child.url,
                                                            className: "nav-dropdown-link block",
                                                            children: child.name
                                                        })
                                                    }, `children-${i}`))
                                            })
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: menu.url,
                                            onClick: ()=>setNavOpen(false),
                                            className: `dark:text-white nav-link font-third block ${router.asPath === menu.url ? "nav-link-active" : ""}`,
                                            children: menu.name
                                        })
                                    })
                                }, `menu-${i}`)),
                            enable && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "btn btn-primary z-0 py-[14px]",
                                    href: link,
                                    rel: "",
                                    children: label
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item flex items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitcher, {})
                            })
                        ]
                    })
                }),
                enable && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "d-flex order-1 ml-auto hidden min-w-[200px] items-center justify-end md:ml-0 md:flex md:order-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        className: "btn btn-primary b_circles_btns z-0 py-[14px] font-third",
                        href: link,
                        rel: "",
                        children: label
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const partials_Header = (Header);


/***/ }),

/***/ 4879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bk": () => (/* binding */ getRegularPage),
/* harmony export */   "di": () => (/* binding */ getListPage),
/* harmony export */   "il": () => (/* binding */ getSinglePage)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_mdxParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_mdxParser__WEBPACK_IMPORTED_MODULE_3__]);
_utils_mdxParser__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// get index page data, ex: _index.md
const getListPage = async (filePath)=>{
    const pageData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(filePath), "utf-8");
    const pageDataParsed = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(pageData);
    const notFoundPage = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join("content/404.md"), "utf-8");
    const notFoundDataParsed = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(notFoundPage);
    let frontmatter, content;
    if (pageDataParsed) {
        content = pageDataParsed.content;
        frontmatter = pageDataParsed.data;
    } else {
        content = notFoundDataParsed.content;
        frontmatter = notFoundDataParsed.data;
    }
    const mdxContent = await (0,_utils_mdxParser__WEBPACK_IMPORTED_MODULE_3__/* .parseMDX */ .x)(content);
    return {
        frontmatter,
        content,
        mdxContent
    };
};
// get all single pages, ex: blog/post.md
const getSinglePage = (folder)=>{
    const filesPath = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(folder));
    const sanitizeFiles = filesPath.filter((file)=>file.includes(".md"));
    const filterSingleFiles = sanitizeFiles.filter((file)=>file.match(/^(?!_)/));
    const singlePages = filterSingleFiles.map((filename)=>{
        const slug = filename.replace(".md", "");
        const pageData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(folder, filename), "utf-8");
        const pageDataParsed = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(pageData);
        const frontmatterString = JSON.stringify(pageDataParsed.data);
        const frontmatter = JSON.parse(frontmatterString);
        const content = pageDataParsed.content;
        const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;
        return {
            frontmatter: frontmatter,
            slug: url,
            content: content
        };
    });
    const publishedPages = singlePages.filter((page)=>!page.frontmatter.draft && page.frontmatter.layout !== "404" && page);
    const filterByDate = publishedPages.filter((page)=>new Date(page.frontmatter.date || new Date()) <= new Date());
    return filterByDate;
};
// get regular page data, ex: about.md
const getRegularPage = async (slug)=>{
    const publishedPages = getSinglePage("content");
    const pageData = publishedPages.filter((data)=>data.slug === slug);
    const notFoundPage = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join("content/404.md"), "utf-8");
    const notFoundDataParsed = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(notFoundPage);
    let frontmatter, content;
    if (pageData[0]) {
        content = pageData[0].content;
        frontmatter = pageData[0].frontmatter;
    } else {
        content = notFoundDataParsed.content;
        frontmatter = notFoundDataParsed.data;
    }
    const mdxContent = await (0,_utils_mdxParser__WEBPACK_IMPORTED_MODULE_3__/* .parseMDX */ .x)(content);
    return {
        frontmatter,
        content,
        mdxContent
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ parseMDX)
/* harmony export */ });
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4818);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7752);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6809);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__, rehype_slug__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__]);
([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__, rehype_slug__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// mdx content parser
const parseMDX = async (content)=>{
    const options = {
        mdxOptions: {
            rehypePlugins: [
                rehype_slug__WEBPACK_IMPORTED_MODULE_1__["default"]
            ],
            remarkPlugins: [
                remark_gfm__WEBPACK_IMPORTED_MODULE_2__["default"]
            ]
        }
    };
    return await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__.serialize)(content, options);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ab": () => (/* binding */ plainify),
/* harmony export */   "gI": () => (/* binding */ markdownify)
/* harmony export */ });
/* unused harmony exports slugify, humanize */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1578);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([github_slugger__WEBPACK_IMPORTED_MODULE_1__, marked__WEBPACK_IMPORTED_MODULE_2__]);
([github_slugger__WEBPACK_IMPORTED_MODULE_1__, marked__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// slugify
const slugify = (content)=>{
    if (!content) return null;
    return slug(content);
};
// markdownify
const markdownify = (content, tag, className)=>{
    if (!content) return null;
    const Tag = tag;
    return tag ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
        className: className,
        dangerouslySetInnerHTML: {
            __html: tag === "div" ? marked__WEBPACK_IMPORTED_MODULE_2__.marked.parse(content) : marked__WEBPACK_IMPORTED_MODULE_2__.marked.parseInline(content)
        }
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: className,
        dangerouslySetInnerHTML: {
            __html: marked__WEBPACK_IMPORTED_MODULE_2__.marked.parseInline(content)
        }
    });
};
// humanize
const humanize = (content)=>{
    if (!content) return null;
    return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(m) {
        return m.toUpperCase();
    });
};
// plainify
const plainify = (content)=>{
    if (!content) return null;
    const mdParsed = marked__WEBPACK_IMPORTED_MODULE_2__.marked.parseInline(String(content));
    const filterBrackets = mdParsed.replace(/<\/?[^>]+(>|$)/gm, "");
    const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    const stripHTML = htmlEntityDecoder(filterSpaces);
    return stripHTML;
};
// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities)=>{
    let entityList = {
        "&nbsp;": " ",
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&#39;": "'"
    };
    let htmlWithoutEntities = htmlWithEntities.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, (entity)=>{
        return entityList[entity];
    });
    return htmlWithoutEntities;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6626:
/***/ ((module) => {

module.exports = JSON.parse('{"lz":{"title":"B-Circles","base_url":"/","favicon":"/images/favicon.png","logo":"/images/BC icon-02.png","logo_width":"200","logo_height":"48","logo_text":"B-Circles"},"Xd":{"pagination":4,"summary_length":200,"blog_folder":"blogs"},"Hl":{"enable":true,"label":"Get Started","link":"/contact"},"f":{"contact_form_action":"","tag_manager_id":"","footer_content":"Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.","copyright":"All Rights Reserved"},"Pu":{"meta_author":"B Circles","meta_image":"","meta_description":"A SAAS template for nextjs"}}');

/***/ }),

/***/ 9012:
/***/ ((module) => {

module.exports = JSON.parse('{"main":[{"name":"Home","url":"/"},{"name":"Blog","url":"/blogs"},{"name":"Pricing","url":"/pricing"},{"name":"Contact","url":"/contact"},{"name":"FAQ","url":"/faq"}],"footer":[{"name":"Company","menu":[{"text":"Pricing","url":"/pricing"},{"text":"Quick Start","url":"#"}]},{"name":"Product","menu":[{"text":"Features","url":"#"},{"text":"Platform","url":"#"},{"text":"Pricing","url":"/pricing"}]},{"name":"Support","menu":[{"text":"FAQ","url":"/faq"},{"text":"Privacy Policy","url":"#"},{"text":"Terms & Conditions","url":"#"}]}]}');

/***/ }),

/***/ 1639:
/***/ ((module) => {

module.exports = JSON.parse('{"facebook":"https://facebook.com/","twitter":"https://twitter.com/","instagram":"","youtube":"","linkedin":"https://linkedin.com/","github":"","gitlab":"","discord":"","slack":"","medium":"","codepen":"","bitbucket":"","dribbble":"","behance":"","pinterest":"","soundcloud":"","tumblr":"","reddit":"","vk":"","whatsapp":"","snapchat":"","vimeo":"","tiktok":"","foursquare":"","rss":"","email":"","phone":"","address":"","skype":"https://skype.com/","website":""}');

/***/ })

};
;