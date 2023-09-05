"use strict";
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 8569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ shortcodes_all)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/react-lite-youtube-embed/dist/index.jsx
var dist = __webpack_require__(495);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./node_modules/react-lite-youtube-embed/dist/LiteYouTubeEmbed.css
var LiteYouTubeEmbed = __webpack_require__(9093);
;// CONCATENATED MODULE: ./layouts/components/YoutubePlayer.js



const YoutubePlayer = ({ id , title , ...others })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((dist_default()), {
        id: id,
        title: title,
        ...others
    });
};
/* harmony default export */ const components_YoutubePlayer = (YoutubePlayer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./layouts/shortcodes/Button.jsx


const Button = ({ href , type , rel , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        target: "_blank",
        rel: `noopener noreferrer ${rel ? rel === "follow" ? "" : rel : "nofollow"}`,
        className: `btn mb-4 me-4 ${type === "outline" ? "btn-outline-primary" : "btn-primary"}`,
        children: children
    });
};
/* harmony default export */ const shortcodes_Button = (Button);

;// CONCATENATED MODULE: ./layouts/shortcodes/all.js


const shortcodes = {
    Button: shortcodes_Button,
    YoutubePlayer: components_YoutubePlayer
};
/* harmony default export */ const shortcodes_all = (shortcodes);


/***/ })

};
;