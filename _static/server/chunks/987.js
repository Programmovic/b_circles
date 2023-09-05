"use strict";
exports.id = 987;
exports.ids = [987];
exports.modules = {

/***/ 4037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Pagination = ({ section , currentPage , totalPages  })=>{
    const indexPageLink = currentPage === 2;
    const hasPrevPage = currentPage > 1;
    const hasNextPage = totalPages > currentPage;
    let pageList = [];
    for(let i = 1; i <= totalPages; i++){
        pageList.push(i);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: totalPages > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: "mb-4 mt-10 flex justify-center space-x-[10px]",
            "aria-label": "Pagination",
            children: [
                hasPrevPage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: indexPageLink ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${currentPage - 1}`,
                    className: "inline-flex w-[42px] justify-center rounded-md bg-theme-light px-2 py-2 text-dark hover:bg-primary hover:text-white",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Previous"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "mt-1 h-5 w-5",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                clipRule: "evenodd"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "inline-flex w-[42px] justify-center rounded-md bg-theme-light px-2 py-2 text-dark",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Previous"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "mt-1 h-5 w-5",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                clipRule: "evenodd"
                            })
                        })
                    ]
                }),
                pageList.map((pagination, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                        children: pagination === currentPage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            "aria-current": "page",
                            className: `rounded-md bg-primary px-4 py-2 text-white`,
                            children: pagination
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            legacyBehavior: true,
                            href: i === 0 ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${pagination}`,
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                "aria-current": "page",
                                className: `rounded-md  bg-theme-light px-4 py-2 text-dark hover:bg-primary hover:text-white`,
                                children: pagination
                            })
                        })
                    }, `page-${i}`)),
                hasNextPage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `${section ? "/" + section : ""}/page/${currentPage + 1}`,
                    className: "inline-flex w-[42px] justify-center rounded-md bg-theme-light px-2 py-2 text-dark hover:bg-primary hover:text-white",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Next"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "mt-1 h-5 w-5",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                clipRule: "evenodd"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "inline-flex w-[42px] justify-center rounded-md bg-theme-light px-2 py-2 text-dark",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: "Next"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "mt-1 h-5 w-5",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                clipRule: "evenodd"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 2324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1360);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Posts = ({ posts  })=>{
    const { blog_folder , summary_length  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .settings */ .Xd;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "section row pb-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-12 pb-12 lg:pb-24",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-12 md:col-6",
                            children: posts[0].frontmatter.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "h-auto w-full rounded-lg",
                                src: posts[0].frontmatter.image,
                                alt: posts[0].frontmatter.title,
                                width: 540,
                                height: 227,
                                priority: true
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-12 md:col-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "h3 mb-2 mt-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: `/${blog_folder}/${posts[0].slug}`,
                                        className: "block hover:text-primary",
                                        children: posts[0].frontmatter.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-text",
                                    children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(posts[0].content?.slice(0, Number(summary_length)), "div")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    className: "btn btn-primary mt-4",
                                    href: `/${blog_folder}/${posts[0].slug}`,
                                    rel: "",
                                    children: "Read More"
                                })
                            ]
                        })
                    ]
                })
            }),
            posts.slice(1).map((post, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-12 mb-8 sm:col-6 lg:col-4",
                    children: [
                        post.frontmatter.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: "rounded-lg",
                            src: post.frontmatter.image,
                            alt: post.frontmatter.title,
                            width: i === 0 ? "925" : "445",
                            height: i === 0 ? "475" : "230"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "h3 mb-2 mt-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: `/${blog_folder}/${post.slug}`,
                                className: "block hover:text-primary",
                                children: post.frontmatter.title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-text",
                            children: post.frontmatter.desc
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "btn btn-primary mt-4",
                            href: `/${blog_folder}/${post.slug}`,
                            rel: "",
                            children: "Read More"
                        })
                    ]
                }, `key-${i}`))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5987:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4037);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6626);
/* harmony import */ var _layouts_Baseof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(697);
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4879);
/* harmony import */ var _lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(960);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1360);
/* harmony import */ var _partials_Posts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2324);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Baseof__WEBPACK_IMPORTED_MODULE_3__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_4__, _lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_5__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__, _partials_Posts__WEBPACK_IMPORTED_MODULE_7__]);
([_layouts_Baseof__WEBPACK_IMPORTED_MODULE_3__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_4__, _lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_5__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__, _partials_Posts__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const { blog_folder  } = _config_config_json__WEBPACK_IMPORTED_MODULE_2__/* .settings */ .Xd;
// blog pagination
const BlogPagination = ({ postIndex , posts , currentPage , pagination  })=>{
    const indexOfLastPost = currentPage * pagination;
    const indexOfFirstPost = indexOfLastPost - pagination;
    const totalPages = Math.ceil(posts.length / pagination);
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const { frontmatter , content  } = postIndex;
    const { title  } = frontmatter;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Baseof__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: title,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "section",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__/* .markdownify */ .gI)(title, "h1", "h1 text-center font-normal text-[56px]"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_Posts__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        posts: currentPosts
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        section: blog_folder,
                        totalPages: totalPages,
                        currentPage: currentPage
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPagination);
// get blog pagination slug
const getStaticPaths = ()=>{
    const getAllSlug = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_4__/* .getSinglePage */ .il)(`content/${blog_folder}`);
    const allSlug = getAllSlug.map((item)=>item.slug);
    const { pagination  } = _config_config_json__WEBPACK_IMPORTED_MODULE_2__/* .settings */ .Xd;
    const totalPages = Math.ceil(allSlug.length / pagination);
    let paths = [];
    for(let i = 1; i < totalPages; i++){
        paths.push({
            params: {
                slug: (i + 1).toString()
            }
        });
    }
    return {
        paths,
        fallback: false
    };
};
// get blog pagination content
const getStaticProps = async ({ params  })=>{
    const currentPage = parseInt(params && params.slug || 1);
    const { pagination  } = _config_config_json__WEBPACK_IMPORTED_MODULE_2__/* .settings */ .Xd;
    const posts = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_4__/* .getSinglePage */ .il)(`content/${blog_folder}`).sort((post1, post2)=>new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date));
    const postIndex = await (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_4__/* .getListPage */ .di)(`content/${blog_folder}/_index.md`);
    const mdxContent = await (0,_lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_5__/* .parseMDX */ .x)(postIndex.content);
    return {
        props: {
            pagination: pagination,
            posts: posts,
            currentPage: currentPage,
            postIndex: postIndex,
            mdxContent: mdxContent
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;