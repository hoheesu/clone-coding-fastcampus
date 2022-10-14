// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
/* ==================== ( modal close ) ==================== */
var closeButton = document.querySelector('aside.modal button.close-btn');
var modalBanner = document.querySelector('aside.modal');

closeButton.onclick = function () {
  modalBanner.style.display = 'none';
};
/* ==================== ( depth hover ) ==================== */


var depth = document.querySelector('header .hd-bot ul.depth1>li:nth-child(1)');
var bgOpa = document.querySelector('.category-hover-back');
depth.addEventListener("mouseover", function () {
  bgOpa.style.display = 'block';
});
depth.addEventListener("mouseout", function () {
  bgOpa.style.display = 'none';
});
/* ==================== ( mv-banner pause/play 버튼 클릭 EVENT ) ==================== */

var el = document.querySelector('.swiper .btn-box .swiper-pause'); //.swiper-pause를 를 변수el에 선언

var pauseClick = 0; // 버튼 클릭숫자 초기화

var bannerEl = document.querySelector('.swiper .btn-box .swiper-pause i'); // i태그 안 클래스명을 변경해 주기 위해서 i를 찾아서 변수 bannerEl 에 선언

el.onclick = function () {
  // 버튼이 클릭되었을때 ,
  pauseClick += 1; // 클릭이 될때마다 pauseClick값에 1을 더한다.

  console.log(bannerEl.classList);

  if (pauseClick % 2) {
    // 버튼이 홀수번 만큼 눌리면
    bannerEl.classList.remove('fa-pasue'); // i태그 안에 있는 fa-pause클래스를 삭제하고

    bannerEl.classList.add('fa-play'); // fa-play를 추가한다.

    swiper.autoplay.stop(); // swiper autoplay 를 멈춘다.
  } else {
    // 버튼이 짝수번째 눌렸다면
    bannerEl.classList.remove('fa-play'); // i태그 안에 있는 fa-play클래스를 삭제하고

    bannerEl.classList.add('fa-pause'); // fa-pause클래스를 추가한다.

    swiper.autoplay.start(); // swiper autoplay를 실행한다.
  }
};
/* ==================== ( header search-box click시 검색창 block ) ==================== */


var searchBox = document.querySelector('header .hd-top-left .search-box input');
var inputFocus = document.querySelector('header .hd-top-left .search-box .input-focus');
searchBox.addEventListener("focus", function () {
  inputFocus.style.display = 'block';
});
searchBox.addEventListener("blur", function () {
  inputFocus.style.display = 'none';
});
/* ==================== ( search-box focus li hover ) ==================== */

var historyHover = document.querySelectorAll('header .search-box .input-focus ul.history li a');
var historyHoverBg = document.querySelectorAll('header .search-box .input-focus ul.history li');

var _loop = function _loop(i) {
  historyHover[i].addEventListener("mouseover", function () {
    historyHoverBg[i].style.backgroundColor = '#f8f8f8';
  });
  historyHover[i].addEventListener("mouseout", function () {
    historyHoverBg[i].style.backgroundColor = '#fff';
  });
};

for (var i = 0; i < historyHover.length; i++) {
  _loop(i);
} // prod. 노준영 

/* ==================== ( mv-banner Swiper ) ==================== */


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  // loopAdditionalSlides: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
/* ==================== ( section.event ) ==================== */

var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
/* ==================== ( section.cate1 ) ==================== */

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 16,
  slidesPerGroup: 4,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1"
  }
});
/* ==================== ( section.cate2 ) ==================== */

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 16,
  slidesPerGroup: 4,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2"
  }
});
/* ==================== ( section.cate3 ) ==================== */

var swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 4,
  spaceBetween: 16,
  slidesPerGroup: 4,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3"
  }
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55834" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map