(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./config/config.json
var config = __webpack_require__(6626);
;// CONCATENATED MODULE: ./config/theme.json
const theme_namespaceObject = JSON.parse('{"R":{"k":{"T":"Lato:wght@300;400;700"}}}');
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-gtm-module"
const external_react_gtm_module_namespaceObject = require("react-gtm-module");
var external_react_gtm_module_default = /*#__PURE__*/__webpack_require__.n(external_react_gtm_module_namespaceObject);
// EXTERNAL MODULE: ./styles/style.scss
var style = __webpack_require__(1733);
// EXTERNAL MODULE: ./styles/animated_background.scss
var animated_background = __webpack_require__(3294);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./pages/_app.js









const App = ({ Component , pageProps  })=>{
    // default theme setup
    // import google font css
    const pf = theme_namespaceObject.R.k.T;
    const sf = theme_namespaceObject.R.k.secondary;
    const [fontcss, setFontcss] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        fetch(`https://fonts.googleapis.com/css2?family=${pf}${sf ? "&family=" + sf : ""}&display=swap`).then((res)=>res.text().then((css)=>setFontcss(css)));
    }, [
        pf,
        sf
    ]);
    // google tag manager (gtm)
    const tagManagerArgs = {
        gtmId: config/* params.tag_manager_id */.f.tag_manager_id
    };
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
             true && config/* params.tag_manager_id */.f.tag_manager_id && external_react_gtm_module_default().initialize(tagManagerArgs);
        }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "true"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("style", {
                        dangerouslySetInnerHTML: {
                            __html: `${fontcss}`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=5"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_themes_.ThemeProvider, {
                attribute: "class",
                defaultTheme: "system",
                enableSystem: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 3294:
/***/ (() => {



/***/ }),

/***/ 1733:
/***/ (() => {



/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6626:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"lz":{"title":"B-Circles","base_url":"/","favicon":"/images/favicon.png","logo":"/images/BC icon-02.png","logo_width":"200","logo_height":"48","logo_text":"B-Circles"},"Xd":{"pagination":4,"summary_length":200,"blog_folder":"blogs"},"Hl":{"enable":true,"label":"Get Started","link":"/contact"},"f":{"contact_form_action":"","tag_manager_id":"","footer_content":"Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.","copyright":"All Rights Reserved"},"Pu":{"meta_author":"B Circles","meta_image":"","meta_description":"A SAAS template for nextjs"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2091));
module.exports = __webpack_exports__;

})();