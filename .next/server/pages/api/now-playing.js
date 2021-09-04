"use strict";
(() => {
var exports = {};
exports.id = "pages/api/now-playing";
exports.ids = ["pages/api/now-playing"];
exports.modules = {

/***/ "./lib/spotify.js":
/*!************************!*\
  !*** ./lib/spotify.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNowPlaying": () => (/* binding */ getNowPlaying),
/* harmony export */   "getTopTracks": () => (/* binding */ getTopTracks)
/* harmony export */ });
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring__WEBPACK_IMPORTED_MODULE_0___default().stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  });
  return response.json();
};

const getNowPlaying = async () => {
  const {
    access_token
  } = await getAccessToken();
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};
const getTopTracks = async () => {
  const {
    access_token
  } = await getAccessToken();
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};

/***/ }),

/***/ "./pages/api/now-playing.js":
/*!**********************************!*\
  !*** ./pages/api/now-playing.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/spotify */ "./lib/spotify.js");

async function handler(_, res) {
  const response = await (0,_lib_spotify__WEBPACK_IMPORTED_MODULE_0__.getNowPlaying)();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({
      isPlaying: false
    });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({
      isPlaying: false
    });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map(_artist => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title
  });
}

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/now-playing.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFsQixDQUF1QkMsT0FBRCxJQUFhQSxPQUFPLENBQUNKLElBQTNDLEVBQWlESyxJQUFqRCxDQUFzRCxJQUF0RCxDQUFmO0FBQ0EsUUFBTUMsS0FBSyxHQUFHVixJQUFJLENBQUNDLElBQUwsQ0FBVVMsS0FBVixDQUFnQk4sSUFBOUI7QUFDQSxRQUFNTyxhQUFhLEdBQUdYLElBQUksQ0FBQ0MsSUFBTCxDQUFVUyxLQUFWLENBQWdCRSxNQUFoQixDQUF1QixDQUF2QixFQUEwQkMsR0FBaEQ7QUFDQSxRQUFNQyxPQUFPLEdBQUdkLElBQUksQ0FBQ0MsSUFBTCxDQUFVYyxhQUFWLENBQXdCQyxPQUF4QztBQUVBbkIsRUFBQUEsR0FBRyxDQUFDb0IsU0FBSixDQUNFLGVBREYsRUFFRSxnREFGRjtBQUtBLFNBQU9wQixHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCUCxJQUFoQixDQUFxQjtBQUMxQm1CLElBQUFBLEtBRDBCO0FBRTFCQyxJQUFBQSxhQUYwQjtBQUcxQk4sSUFBQUEsTUFIMEI7QUFJMUJOLElBQUFBLFNBSjBCO0FBSzFCZSxJQUFBQSxPQUwwQjtBQU0xQlgsSUFBQUE7QUFOMEIsR0FBckIsQ0FBUDtBQVFEOzs7Ozs7Ozs7O0FDbkNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL3Nwb3RpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL25vdy1wbGF5aW5nLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5c3RyaW5nXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gJ3F1ZXJ5c3RyaW5nJztcclxuXHJcbmNvbnN0IGNsaWVudF9pZCA9IHByb2Nlc3MuZW52LlNQT1RJRllfQ0xJRU5UX0lEO1xyXG5jb25zdCBjbGllbnRfc2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfU0VDUkVUO1xyXG5jb25zdCByZWZyZXNoX3Rva2VuID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9SRUZSRVNIX1RPS0VOO1xyXG5cclxuY29uc3QgYmFzaWMgPSBCdWZmZXIuZnJvbShgJHtjbGllbnRfaWR9OiR7Y2xpZW50X3NlY3JldH1gKS50b1N0cmluZygnYmFzZTY0Jyk7XHJcbmNvbnN0IE5PV19QTEFZSU5HX0VORFBPSU5UID0gYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXllci9jdXJyZW50bHktcGxheWluZ2A7XHJcbmNvbnN0IFRPUF9UUkFDS1NfRU5EUE9JTlQgPSBgaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdG9wL3RyYWNrc2A7XHJcbmNvbnN0IFRPS0VOX0VORFBPSU5UID0gYGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuYDtcclxuXHJcbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVE9LRU5fRU5EUE9JTlQsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtiYXNpY31gLFxyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgIH0sXHJcbiAgICBib2R5OiBxdWVyeXN0cmluZy5zdHJpbmdpZnkoe1xyXG4gICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXHJcbiAgICAgIHJlZnJlc2hfdG9rZW5cclxuICAgIH0pXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Tm93UGxheWluZyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKE5PV19QTEFZSU5HX0VORFBPSU5ULCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YFxyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRvcFRyYWNrcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKFRPUF9UUkFDS1NfRU5EUE9JTlQsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gXHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdldE5vd1BsYXlpbmcgfSBmcm9tICdAL2xpYi9zcG90aWZ5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXywgcmVzKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXROb3dQbGF5aW5nKCk7XHJcblxyXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCB8fCByZXNwb25zZS5zdGF0dXMgPiA0MDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlzUGxheWluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzb25nID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIFxyXG4gIGlmIChzb25nLml0ZW0gPT09IG51bGwpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlzUGxheWluZzogZmFsc2UgfSlcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgaXNQbGF5aW5nID0gc29uZy5pc19wbGF5aW5nO1xyXG4gIGNvbnN0IHRpdGxlID0gc29uZy5pdGVtLm5hbWU7XHJcbiAgY29uc3QgYXJ0aXN0ID0gc29uZy5pdGVtLmFydGlzdHMubWFwKChfYXJ0aXN0KSA9PiBfYXJ0aXN0Lm5hbWUpLmpvaW4oJywgJyk7XHJcbiAgY29uc3QgYWxidW0gPSBzb25nLml0ZW0uYWxidW0ubmFtZTtcclxuICBjb25zdCBhbGJ1bUltYWdlVXJsID0gc29uZy5pdGVtLmFsYnVtLmltYWdlc1swXS51cmw7XHJcbiAgY29uc3Qgc29uZ1VybCA9IHNvbmcuaXRlbS5leHRlcm5hbF91cmxzLnNwb3RpZnk7XHJcblxyXG4gIHJlcy5zZXRIZWFkZXIoXHJcbiAgICAnQ2FjaGUtQ29udHJvbCcsXHJcbiAgICAncHVibGljLCBzLW1heGFnZT02MCwgc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZT0zMCdcclxuICApO1xyXG5cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgYWxidW0sXHJcbiAgICBhbGJ1bUltYWdlVXJsLFxyXG4gICAgYXJ0aXN0LFxyXG4gICAgaXNQbGF5aW5nLFxyXG4gICAgc29uZ1VybCxcclxuICAgIHRpdGxlXHJcbiAgfSk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7Il0sIm5hbWVzIjpbInF1ZXJ5c3RyaW5nIiwiY2xpZW50X2lkIiwicHJvY2VzcyIsImVudiIsIlNQT1RJRllfQ0xJRU5UX0lEIiwiY2xpZW50X3NlY3JldCIsIlNQT1RJRllfQ0xJRU5UX1NFQ1JFVCIsInJlZnJlc2hfdG9rZW4iLCJTUE9USUZZX1JFRlJFU0hfVE9LRU4iLCJiYXNpYyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIk5PV19QTEFZSU5HX0VORFBPSU5UIiwiVE9QX1RSQUNLU19FTkRQT0lOVCIsIlRPS0VOX0VORFBPSU5UIiwiZ2V0QWNjZXNzVG9rZW4iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5Iiwic3RyaW5naWZ5IiwiZ3JhbnRfdHlwZSIsImpzb24iLCJnZXROb3dQbGF5aW5nIiwiYWNjZXNzX3Rva2VuIiwiZ2V0VG9wVHJhY2tzIiwiaGFuZGxlciIsIl8iLCJyZXMiLCJzdGF0dXMiLCJpc1BsYXlpbmciLCJzb25nIiwiaXRlbSIsImlzX3BsYXlpbmciLCJ0aXRsZSIsIm5hbWUiLCJhcnRpc3QiLCJhcnRpc3RzIiwibWFwIiwiX2FydGlzdCIsImpvaW4iLCJhbGJ1bSIsImFsYnVtSW1hZ2VVcmwiLCJpbWFnZXMiLCJ1cmwiLCJzb25nVXJsIiwiZXh0ZXJuYWxfdXJscyIsInNwb3RpZnkiLCJzZXRIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9