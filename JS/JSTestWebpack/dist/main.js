/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/test.css":
/*!**************************!*\
  !*** ./src/css/test.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .blogName {\\n|     padding: 50px;\\n|     border: 1px black solid;\");\n\n//# sourceURL=webpack:///./src/css/test.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_test_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/test.css */ \"./src/css/test.css\");\n/* harmony import */ var _css_test_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_test_css__WEBPACK_IMPORTED_MODULE_0__);\n//'use strict';\r\n\r\n\r\n\r\nconst allBlogs = document.getElementById('allBlogs');\r\nconst showBlogs = document.getElementById('showBlogs');\r\nconst viewPosts = document.getElementById('viewPosts');\r\n\r\nfetch('https://jsonplaceholder.typicode.com/users')\r\n    .then(response => response.json())\r\n    .then(data => {\r\n        //console.log(data);\r\n        data.forEach(blog => {\r\n            createBlog(blog.name, blog.website, blog.company, blog.id);\r\n        });\r\n    });\r\n\r\nconst createBlog = function (name, website, companyInfo, id) {\r\n\r\n    const blogName = document.createElement(\"div\");\r\n    blogName.innerHTML = `Blog Author: ${name}`;\r\n    blogName.className = \"blogName\";\r\n    blogName.setAttribute('id', `${name}'s blog`);\r\n    document.getElementById('allBlogs').appendChild(blogName);\r\n\r\n    const web = document.createElement(\"div\");\r\n    web.className = 'web';\r\n    web.innerHTML = `Website: ${website}`;\r\n\r\n    document.getElementById(`${name}'s blog`).appendChild(web);\r\n\r\n    const company = document.createElement(\"div\");\r\n    company.className = 'company';\r\n    company.innerHTML = `Company: ${companyInfo.name} <br> ${companyInfo.catchPhrase} <br> ${companyInfo.bs}`;\r\n\r\n    document.getElementById(`${name}'s blog`).appendChild(company);\r\n\r\n    blogName.addEventListener('click', () => {\r\n        showPosts(id);\r\n    });\r\n    blogName.addEventListener('mouseenter', () => blogName.style.backgroundColor = 'lightgrey');\r\n    blogName.addEventListener('mouseleave', () => blogName.style.backgroundColor = 'white');\r\n};\r\n\r\nshowBlogs.addEventListener('click', () => {\r\n    clearPosts();\r\n    allBlogs.style.display = 'block';\r\n    showBlogs.style.display = 'none';\r\n    viewPosts.style.display = 'none';\r\n});\r\n\r\nconst clearPosts = function () {\r\n    document.getElementById('post1').innerHTML = '';\r\n    document.getElementById('post2').innerHTML = '';\r\n    document.getElementById('post3').innerHTML = '';\r\n};\r\n\r\nconst showComments = function (postID, thisSpot) {\r\n    if (document.getElementById(`commentButton${thisSpot}`).innerHTML === 'Show Comments') {\r\n        fetch(`https://jsonplaceholder.typicode.com\t/comments?postId=${postID}`)\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                data.forEach(comment => {\r\n                    const allComments = document.createElement('div');\r\n                    allComments.id = `allComments${thisSpot}`;\r\n                    allComments.style.display = 'block';\r\n                    document.getElementById(`post${thisSpot}`).appendChild(allComments);\r\n                    const commentName = document.createElement('p');\r\n                    commentName.innerHTML = `Commenters Name: ${comment.name}`;\r\n                    document.getElementById(`allComments${thisSpot}`).appendChild(commentName);\r\n                    const commentEmail = document.createElement('p');\r\n                    commentEmail.innerHTML = `Commenters Email: ${comment.email}`;\r\n                    document.getElementById(`allComments${thisSpot}`).appendChild(commentEmail);\r\n                    const commetnBody = document.createElement('p');\r\n                    commetnBody.innerHTML = `Comment: ${comment.body}`;\r\n                    document.getElementById(`allComments${thisSpot}`).appendChild(commetnBody);\r\n                });\r\n            });\r\n    }\r\n    if (document.getElementById(`commentButton${thisSpot}`).innerHTML === 'Hide Comments') {\r\n        if (document.getElementById(`allComments${thisSpot}`)) {\r\n            const allComments = document.getElementById(`allComments${thisSpot}`);\r\n            allComments.style.display = 'none';\r\n        }\r\n    }\r\n};\r\n\r\nconst showPosts = function (id) {\r\n    clearPosts();\r\n    let postNum = 0;\r\n    //\r\n    let posts = [];\r\n    allBlogs.style.display = 'none';\r\n    showBlogs.style.display = 'block';\r\n    viewPosts.style.display = 'block';\r\n    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            for (let i = 0; i < posts.length; i++) {\r\n                posts[i].id = i;\r\n            }\r\n            data.forEach(post => {\r\n                posts.push(post);\r\n            });\r\n\r\n            pick3(posts, postNum);\r\n\r\n            document.getElementById('next').addEventListener('click', () => {\r\n                if (postNum < posts.length - 2) {\r\n                    postNum += 3;\r\n                    pick3(posts, postNum);\r\n                }\r\n            });\r\n\r\n            document.getElementById('prev').addEventListener('click', () => {\r\n                if (postNum > 0) {\r\n                    postNum -= 3;\r\n                    pick3(posts, postNum);\r\n                }\r\n            });\r\n        });\r\n};\r\n\r\nconst pick3 = function (posts, postNum) {\r\n    clearPosts();\r\n    let postSpot = 1;\r\n    for (let i = 0; i < 3; i++) {\r\n        if (postNum >= posts.length - 1) {\r\n            postNum = 0;\r\n        } else {\r\n\r\n\r\n            const postTitle = document.createElement(\"p\");\r\n            postTitle.innerHTML = `${posts[postNum].title}`;\r\n            const postBody = document.createElement(\"p\");\r\n            postBody.innerHTML = `${posts[postNum].body}`;\r\n\r\n            document.getElementById(`post${postSpot}`).appendChild(postTitle);\r\n            document.getElementById(`post${postSpot}`).appendChild(postBody);\r\n\r\n            const postID = posts[postNum].id;\r\n            const commentButton = document.createElement(\"BUTTON\");\r\n            commentButton.id = `commentButton${postSpot}`;\r\n            commentButton.innerHTML = 'Show Comments';\r\n            const thisSpot = postSpot;\r\n            commentButton.addEventListener('click', () => {\r\n                showComments(postID, thisSpot);\r\n                if (commentButton.innerHTML === 'Show Comments') {\r\n                    commentButton.innerHTML = 'Hide Comments';\r\n                } else {\r\n                    commentButton.innerHTML = 'Show Comments';\r\n                }\r\n            });\r\n            document.getElementById(`post${postSpot}`).appendChild(commentButton);\r\n\r\n            postNum++;\r\n            postSpot++;\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });