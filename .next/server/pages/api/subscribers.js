"use strict";
(() => {
var exports = {};
exports.id = "pages/api/subscribers";
exports.ids = ["pages/api/subscribers"];
exports.modules = {

/***/ "./pages/api/subscribers.js":
/*!**********************************!*\
  !*** ./pages/api/subscribers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(_, res) {
  const API_KEY = process.env.BUTTONDOWN_API_KEY;
  const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    headers: {
      Authorization: `Token ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });
  const {
    count
  } = await response.json();
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  return res.status(200).json({
    count
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/subscribers.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3N1YnNjcmliZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsZUFBZUEsT0FBZixDQUF1QkMsQ0FBdkIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQzVDLFFBQU1DLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGtCQUE1QjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsNkNBQUQsRUFBZ0Q7QUFDMUVDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxhQUFhLEVBQUcsU0FBUVAsT0FBUSxFQUR6QjtBQUVQLHNCQUFnQjtBQUZULEtBRGlFO0FBSzFFUSxJQUFBQSxNQUFNLEVBQUU7QUFMa0UsR0FBaEQsQ0FBNUI7QUFRQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBWSxNQUFNTCxRQUFRLENBQUNNLElBQVQsRUFBeEI7QUFFQVgsRUFBQUEsR0FBRyxDQUFDWSxTQUFKLENBQ0UsZUFERixFQUVFLG1EQUZGO0FBS0EsU0FBT1osR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBRUQsSUFBQUE7QUFBRixHQUFyQixDQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc3Vic2NyaWJlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihfLCByZXMpIHtcclxuICBjb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuQlVUVE9ORE9XTl9BUElfS0VZO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmJ1dHRvbmRvd24uZW1haWwvdjEvc3Vic2NyaWJlcnMnLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBUb2tlbiAke0FQSV9LRVl9YCxcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBjb3VudCB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICByZXMuc2V0SGVhZGVyKFxyXG4gICAgJ0NhY2hlLUNvbnRyb2wnLFxyXG4gICAgJ3B1YmxpYywgcy1tYXhhZ2U9MTIwMCwgc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZT02MDAnXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY291bnQgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJfIiwicmVzIiwiQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJCVVRUT05ET1dOX0FQSV9LRVkiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJtZXRob2QiLCJjb3VudCIsImpzb24iLCJzZXRIZWFkZXIiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9