"use strict";
(() => {
var exports = {};
exports.id = "pages/api/views/[slug]";
exports.ids = ["pages/api/views/[slug]"];
exports.modules = {

/***/ "./lib/planetscale.js":
/*!****************************!*\
  !*** ./lib/planetscale.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var planetscale_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! planetscale-node */ "planetscale-node");
/* harmony import */ var planetscale_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(planetscale_node__WEBPACK_IMPORTED_MODULE_0__);

const db = new planetscale_node__WEBPACK_IMPORTED_MODULE_0__.PSDB('main');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);

/***/ }),

/***/ "./pages/api/views/[slug].js":
/*!***********************************!*\
  !*** ./pages/api/views/[slug].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_planetscale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/planetscale */ "./lib/planetscale.js");

async function handler(req, res) {
  try {
    const [rows] = await _lib_planetscale__WEBPACK_IMPORTED_MODULE_0__.default.query(`
      SELECT * FROM views
      WHERE slug = ?;
    `, [req.query.slug]);

    if (req.method === 'POST') {
      if (rows.length == 0) {
        await _lib_planetscale__WEBPACK_IMPORTED_MODULE_0__.default.query(`
          INSERT INTO views (slug)
          VALUES (?);
        `, [req.query.slug]);
        return res.status(200).json({
          total: 1
        });
      } else {
        await _lib_planetscale__WEBPACK_IMPORTED_MODULE_0__.default.query(`
          UPDATE views
          SET count = count + 1
          WHERE slug = ?;
        `, [req.query.slug]);
        return res.status(200).json({
          total: rows[0].count + 1
        });
      }
    }

    if (req.method === 'GET') {
      return res.status(200).json({
        total: rows[0].count
      });
    }
  } catch (e) {
    return res.status(500).json({
      message: e.message
    });
  }
}

/***/ }),

/***/ "planetscale-node":
/*!***********************************!*\
  !*** external "planetscale-node" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("planetscale-node");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/views/[slug].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3ZpZXdzL1tzbHVnXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxFQUFFLEdBQUcsSUFBSUQsa0RBQUosQ0FBUyxNQUFULENBQVg7QUFFQSxpRUFBZUMsRUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsTUFBSTtBQUNGLFVBQU0sQ0FBQ0MsSUFBRCxJQUFTLE1BQU1KLDJEQUFBLENBQ2xCO0FBQ1A7QUFDQTtBQUNBLEtBSnlCLEVBS25CLENBQUNFLEdBQUcsQ0FBQ0csS0FBSixDQUFVQyxJQUFYLENBTG1CLENBQXJCOztBQVFBLFFBQUlKLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQUlILElBQUksQ0FBQ0ksTUFBTCxJQUFlLENBQW5CLEVBQXNCO0FBQ3BCLGNBQU1SLDJEQUFBLENBQ0g7QUFDWDtBQUNBO0FBQ0EsU0FKYyxFQUtKLENBQUNFLEdBQUcsQ0FBQ0csS0FBSixDQUFVQyxJQUFYLENBTEksQ0FBTjtBQVFBLGVBQU9ILEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxVQUFBQSxLQUFLLEVBQUU7QUFEbUIsU0FBckIsQ0FBUDtBQUdELE9BWkQsTUFZTztBQUNMLGNBQU1YLDJEQUFBLENBQ0g7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUxjLEVBTUosQ0FBQ0UsR0FBRyxDQUFDRyxLQUFKLENBQVVDLElBQVgsQ0FOSSxDQUFOO0FBU0EsZUFBT0gsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJDLFVBQUFBLEtBQUssRUFBRVAsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRUSxLQUFSLEdBQWdCO0FBREcsU0FBckIsQ0FBUDtBQUdEO0FBQ0Y7O0FBRUQsUUFBSVYsR0FBRyxDQUFDSyxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsYUFBT0osR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsUUFBQUEsS0FBSyxFQUFFUCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFRO0FBQWpCLE9BQXJCLENBQVA7QUFDRDtBQUNGLEdBekNELENBeUNFLE9BQU9DLENBQVAsRUFBVTtBQUNWLFdBQU9WLEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVJLE1BQUFBLE9BQU8sRUFBRUQsQ0FBQyxDQUFDQztBQUFiLEtBQXJCLENBQVA7QUFDRDtBQUNGOzs7Ozs7Ozs7O0FDL0NEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL3BsYW5ldHNjYWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS92aWV3cy9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGxhbmV0c2NhbGUtbm9kZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBTREIgfSBmcm9tICdwbGFuZXRzY2FsZS1ub2RlJztcclxuXHJcbmNvbnN0IGRiID0gbmV3IFBTREIoJ21haW4nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiO1xyXG4iLCJpbXBvcnQgZGIgZnJvbSAnQC9saWIvcGxhbmV0c2NhbGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBbcm93c10gPSBhd2FpdCBkYi5xdWVyeShcclxuICAgICAgYFxyXG4gICAgICBTRUxFQ1QgKiBGUk9NIHZpZXdzXHJcbiAgICAgIFdIRVJFIHNsdWcgPSA/O1xyXG4gICAgYCxcclxuICAgICAgW3JlcS5xdWVyeS5zbHVnXVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgIGlmIChyb3dzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgYXdhaXQgZGIucXVlcnkoXHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgICBJTlNFUlQgSU5UTyB2aWV3cyAoc2x1ZylcclxuICAgICAgICAgIFZBTFVFUyAoPyk7XHJcbiAgICAgICAgYCxcclxuICAgICAgICAgIFtyZXEucXVlcnkuc2x1Z11cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgdG90YWw6IDFcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBkYi5xdWVyeShcclxuICAgICAgICAgIGBcclxuICAgICAgICAgIFVQREFURSB2aWV3c1xyXG4gICAgICAgICAgU0VUIGNvdW50ID0gY291bnQgKyAxXHJcbiAgICAgICAgICBXSEVSRSBzbHVnID0gPztcclxuICAgICAgICBgLFxyXG4gICAgICAgICAgW3JlcS5xdWVyeS5zbHVnXVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICB0b3RhbDogcm93c1swXS5jb3VudCArIDFcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyB0b3RhbDogcm93c1swXS5jb3VudCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBsYW5ldHNjYWxlLW5vZGVcIik7Il0sIm5hbWVzIjpbIlBTREIiLCJkYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyb3dzIiwicXVlcnkiLCJzbHVnIiwibWV0aG9kIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsInRvdGFsIiwiY291bnQiLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=