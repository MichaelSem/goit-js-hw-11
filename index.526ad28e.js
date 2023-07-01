let t;
function e(t) {
  return t && t.__esModule ? t.default : t;
}
("use strict");
var o,
  i,
  n,
  a,
  r,
  s =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  l = {};
function c(t) {
  return (c =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
function f(t, e) {
  var o =
    ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
  if (!o) {
    if (
      Array.isArray(t) ||
      (o = d(t)) ||
      (e && t && "number" == typeof t.length)
    ) {
      o && (t = o);
      var i = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
        },
        e: function (t) {
          throw t;
        },
        f: n,
      };
    }
    throw TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var a,
    r = !0,
    s = !1;
  return {
    s: function () {
      o = o.call(t);
    },
    n: function () {
      var t = o.next();
      return (r = t.done), t;
    },
    e: function (t) {
      (s = !0), (a = t);
    },
    f: function () {
      try {
        r || null == o.return || o.return();
      } finally {
        if (s) throw a;
      }
    },
  };
}
function d(t, e) {
  if (t) {
    if ("string" == typeof t) return p(t, e);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (
      ("Object" === o && t.constructor && (o = t.constructor.name),
      "Map" === o || "Set" === o)
    )
      return Array.from(t);
    if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return p(t, e);
  }
}
function p(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var o = 0, i = Array(e); o < e; o++) i[o] = t[o];
  return i;
}
function m(t, e) {
  for (var o = 0; o < e.length; o++) {
    var i = e[o];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(t, i.key, i);
  }
}
function u(t, e, o) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = o),
    t
  );
}
Object.defineProperty(l, "__esModule", { value: !0 }), (l.default = void 0);
var h = (function () {
  var t, e;
  function o(t, e) {
    var i = this;
    if (
      (!(function (t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      })(this, o),
      u(this, "defaultOptions", {
        sourceAttr: "href",
        overlay: !0,
        overlayOpacity: 0.7,
        spinner: !0,
        nav: !0,
        navText: ["&lsaquo;", "&rsaquo;"],
        captions: !0,
        captionDelay: 0,
        captionSelector: "img",
        captionType: "attr",
        captionsData: "title",
        captionPosition: "bottom",
        captionClass: "",
        close: !0,
        closeText: "&times;",
        swipeClose: !0,
        showCounter: !0,
        fileExt: "png|jpg|jpeg|gif|webp",
        animationSlide: !0,
        animationSpeed: 250,
        preloading: !0,
        enableKeyboard: !0,
        loop: !0,
        rel: !1,
        docClose: !0,
        swipeTolerance: 50,
        className: "simple-lightbox",
        widthRatio: 0.8,
        heightRatio: 0.9,
        scaleImageToRatio: !1,
        disableRightClick: !1,
        disableScroll: !0,
        alertError: !0,
        alertErrorMessage: "Image not found, next image will be loaded",
        additionalHtml: !1,
        history: !0,
        throttleInterval: 0,
        doubleTapZoom: 2,
        maxZoom: 10,
        htmlClass: "has-lightbox",
        rtl: !1,
        fixedClass: "sl-fixed",
        fadeSpeed: 300,
        uniqueImages: !0,
        focus: !0,
        scrollZoom: !0,
        scrollZoomFactor: 0.5,
        download: !1,
      }),
      u(this, "transitionPrefix", void 0),
      u(this, "isPassiveEventsSupported", void 0),
      u(this, "transitionCapable", !1),
      u(this, "isTouchDevice", "ontouchstart" in window),
      u(
        this,
        "isAppleDevice",
        /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
      ),
      u(this, "initialLocationHash", void 0),
      u(this, "pushStateSupport", "pushState" in history),
      u(this, "isOpen", !1),
      u(this, "isAnimating", !1),
      u(this, "isClosing", !1),
      u(this, "isFadeIn", !1),
      u(this, "urlChangedOnce", !1),
      u(this, "hashReseted", !1),
      u(this, "historyHasChanges", !1),
      u(this, "historyUpdateTimeout", null),
      u(this, "currentImage", void 0),
      u(this, "eventNamespace", "simplelightbox"),
      u(this, "domNodes", {}),
      u(this, "loadedImages", []),
      u(this, "initialImageIndex", 0),
      u(this, "currentImageIndex", 0),
      u(this, "initialSelector", null),
      u(this, "globalScrollbarWidth", 0),
      u(this, "controlCoordinates", {
        swipeDiff: 0,
        swipeYDiff: 0,
        swipeStart: 0,
        swipeEnd: 0,
        swipeYStart: 0,
        swipeYEnd: 0,
        mousedown: !1,
        imageLeft: 0,
        zoomed: !1,
        containerHeight: 0,
        containerWidth: 0,
        containerOffsetX: 0,
        containerOffsetY: 0,
        imgHeight: 0,
        imgWidth: 0,
        capture: !1,
        initialOffsetX: 0,
        initialOffsetY: 0,
        initialPointerOffsetX: 0,
        initialPointerOffsetY: 0,
        initialPointerOffsetX2: 0,
        initialPointerOffsetY2: 0,
        initialScale: 1,
        initialPinchDistance: 0,
        pointerOffsetX: 0,
        pointerOffsetY: 0,
        pointerOffsetX2: 0,
        pointerOffsetY2: 0,
        targetOffsetX: 0,
        targetOffsetY: 0,
        targetScale: 0,
        pinchOffsetX: 0,
        pinchOffsetY: 0,
        limitOffsetX: 0,
        limitOffsetY: 0,
        scaleDifference: 0,
        targetPinchDistance: 0,
        touchCount: 0,
        doubleTapped: !1,
        touchmoveCount: 0,
      }),
      (this.options = Object.assign(this.defaultOptions, e)),
      (this.isPassiveEventsSupported = this.checkPassiveEventsSupport()),
      "string" == typeof t
        ? ((this.initialSelector = t),
          (this.elements = Array.from(document.querySelectorAll(t))))
        : (this.elements =
            void 0 !== t.length && t.length > 0 ? Array.from(t) : [t]),
      (this.relatedElements = []),
      (this.transitionPrefix = this.calculateTransitionPrefix()),
      (this.transitionCapable = !1 !== this.transitionPrefix),
      (this.initialLocationHash = this.hash),
      this.options.rel && (this.elements = this.getRelated(this.options.rel)),
      this.options.uniqueImages)
    ) {
      var n = [];
      this.elements = Array.from(this.elements).filter(function (t) {
        var e = t.getAttribute(i.options.sourceAttr);
        return -1 === n.indexOf(e) && (n.push(e), !0);
      });
    }
    this.createDomNodes(),
      this.options.close &&
        this.domNodes.wrapper.appendChild(this.domNodes.closeButton),
      this.options.nav &&
        this.domNodes.wrapper.appendChild(this.domNodes.navigation),
      this.options.spinner &&
        this.domNodes.wrapper.appendChild(this.domNodes.spinner),
      this.addEventListener(
        this.elements,
        "click." + this.eventNamespace,
        function (t) {
          if (i.isValidLink(t.currentTarget)) {
            if ((t.preventDefault(), i.isAnimating)) return !1;
            (i.initialImageIndex = i.elements.indexOf(t.currentTarget)),
              i.openImage(t.currentTarget);
          }
        }
      ),
      this.options.docClose &&
        this.addEventListener(
          this.domNodes.wrapper,
          ["click." + this.eventNamespace, "touchstart." + this.eventNamespace],
          function (t) {
            i.isOpen && t.target === t.currentTarget && i.close();
          }
        ),
      this.options.disableRightClick &&
        this.addEventListener(
          document.body,
          "contextmenu." + this.eventNamespace,
          function (t) {
            t.target.parentElement.classList.contains("sl-image") &&
              t.preventDefault();
          }
        ),
      this.options.enableKeyboard &&
        this.addEventListener(
          document.body,
          "keyup." + this.eventNamespace,
          this.throttle(function (t) {
            if (
              ((i.controlCoordinates.swipeDiff = 0),
              i.isAnimating && "Escape" === t.key)
            ) {
              i.currentImage.setAttribute("src", ""),
                (i.isAnimating = !1),
                i.close();
              return;
            }
            i.isOpen &&
              (t.preventDefault(),
              "Escape" === t.key && i.close(),
              !i.isAnimating &&
                ["ArrowLeft", "ArrowRight"].indexOf(t.key) > -1 &&
                i.loadImage("ArrowRight" === t.key ? 1 : -1));
          }, this.options.throttleInterval)
        ),
      this.addEvents();
  }
  return (
    (t = [
      {
        key: "checkPassiveEventsSupport",
        value: function () {
          var t = !1;
          try {
            var e = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
            window.addEventListener("testPassive", null, e),
              window.removeEventListener("testPassive", null, e);
          } catch (t) {}
          return t;
        },
      },
      {
        key: "getCaptionElement",
        value: function (t) {
          if (this.options.captionSelector.startsWith("+")) {
            var e = this.options.captionSelector.replace(/^\+/, "").trimStart(),
              o = t.nextElementSibling;
            return !!o.matches(e) && o;
          }
          if (!this.options.captionSelector.startsWith(">"))
            return t.querySelector(this.options.captionSelector);
          var i = this.options.captionSelector.replace(/^>/, "").trimStart();
          return t.querySelector(i);
        },
      },
      {
        key: "generateQuerySelector",
        value: function (t) {
          var e = t.tagName,
            o = t.id,
            i = t.className,
            n = t.parentNode;
          if ("HTML" === e) return "HTML";
          var a = e;
          if (((a += "" !== o ? "#".concat(o) : ""), i))
            for (var r = i.trim().split(/\s/), s = 0; s < r.length; s++)
              a += ".".concat(r[s]);
          for (
            var l = 1, c = t;
            c.previousElementSibling;
            c = c.previousElementSibling
          )
            l += 1;
          return (
            (a += ":nth-child(".concat(l, ")")),
            "".concat(this.generateQuerySelector(n), " > ").concat(a)
          );
        },
      },
      {
        key: "createDomNodes",
        value: function () {
          if (
            ((this.domNodes.overlay = document.createElement("div")),
            this.domNodes.overlay.classList.add("sl-overlay"),
            (this.domNodes.overlay.dataset.opacityTarget =
              this.options.overlayOpacity),
            (this.domNodes.closeButton = document.createElement("button")),
            this.domNodes.closeButton.classList.add("sl-close"),
            (this.domNodes.closeButton.innerHTML = this.options.closeText),
            (this.domNodes.spinner = document.createElement("div")),
            this.domNodes.spinner.classList.add("sl-spinner"),
            (this.domNodes.spinner.innerHTML = "<div></div>"),
            (this.domNodes.navigation = document.createElement("div")),
            this.domNodes.navigation.classList.add("sl-navigation"),
            (this.domNodes.navigation.innerHTML = '<button class="sl-prev">'
              .concat(
                this.options.navText[0],
                '</button><button class="sl-next">'
              )
              .concat(this.options.navText[1], "</button>")),
            (this.domNodes.counter = document.createElement("div")),
            this.domNodes.counter.classList.add("sl-counter"),
            (this.domNodes.counter.innerHTML =
              '<span class="sl-current"></span>/<span class="sl-total"></span>'),
            (this.domNodes.download = document.createElement("div")),
            this.domNodes.download.classList.add("sl-download"),
            (this.domNodes.downloadLink = document.createElement("a")),
            this.domNodes.downloadLink.setAttribute("download", ""),
            (this.domNodes.downloadLink.textContent = this.options.download),
            this.domNodes.download.appendChild(this.domNodes.downloadLink),
            (this.domNodes.caption = document.createElement("div")),
            this.domNodes.caption.classList.add(
              "sl-caption",
              "pos-" + this.options.captionPosition
            ),
            this.options.captionClass)
          ) {
            var t,
              e = this.options.captionClass.split(/[\s,]+/);
            (t = this.domNodes.caption.classList).add.apply(
              t,
              (function (t) {
                if (Array.isArray(t)) return p(t);
              })(e) ||
                (function (t) {
                  if (
                    ("undefined" != typeof Symbol &&
                      null != t[Symbol.iterator]) ||
                    null != t["@@iterator"]
                  )
                    return Array.from(t);
                })(e) ||
                d(e) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
            );
          }
          (this.domNodes.image = document.createElement("div")),
            this.domNodes.image.classList.add("sl-image"),
            (this.domNodes.wrapper = document.createElement("div")),
            this.domNodes.wrapper.classList.add("sl-wrapper"),
            this.domNodes.wrapper.setAttribute("tabindex", -1),
            this.domNodes.wrapper.setAttribute("role", "dialog"),
            this.domNodes.wrapper.setAttribute("aria-hidden", !1),
            this.options.className &&
              this.domNodes.wrapper.classList.add(this.options.className),
            this.options.rtl &&
              this.domNodes.wrapper.classList.add("sl-dir-rtl");
        },
      },
      {
        key: "throttle",
        value: function (t, e) {
          var o;
          return function () {
            o ||
              (t.apply(this, arguments),
              (o = !0),
              setTimeout(function () {
                return (o = !1);
              }, e));
          };
        },
      },
      {
        key: "isValidLink",
        value: function (t) {
          return (
            !this.options.fileExt ||
            (t.getAttribute(this.options.sourceAttr) &&
              RegExp("(" + this.options.fileExt + ")($|\\?.*$)", "i").test(
                t.getAttribute(this.options.sourceAttr)
              ))
          );
        },
      },
      {
        key: "calculateTransitionPrefix",
        value: function () {
          var t = (document.body || document.documentElement).style;
          return "transition" in t
            ? ""
            : "WebkitTransition" in t
            ? "-webkit-"
            : "MozTransition" in t
            ? "-moz-"
            : "OTransition" in t && "-o";
        },
      },
      {
        key: "getScrollbarWidth",
        value: function () {
          var t = 0,
            e = document.createElement("div");
          return (
            e.classList.add("sl-scrollbar-measure"),
            document.body.appendChild(e),
            (t = e.offsetWidth - e.clientWidth),
            document.body.removeChild(e),
            t
          );
        },
      },
      {
        key: "toggleScrollbar",
        value: function (t) {
          var e = 0,
            o = [].slice.call(
              document.querySelectorAll("." + this.options.fixedClass)
            );
          if ("hide" === t) {
            var i = window.innerWidth;
            if (!i) {
              var n = document.documentElement.getBoundingClientRect();
              i = n.right - Math.abs(n.left);
            }
            if (document.body.clientWidth < i || this.isAppleDevice) {
              var a = parseInt(
                window.getComputedStyle(document.body).paddingRight || 0,
                10
              );
              (e = this.getScrollbarWidth()),
                (document.body.dataset.originalPaddingRight = a),
                (e > 0 || (0 == e && this.isAppleDevice)) &&
                  (document.body.classList.add("hidden-scroll"),
                  (document.body.style.paddingRight = a + e + "px"),
                  o.forEach(function (t) {
                    var o = t.style.paddingRight,
                      i = window.getComputedStyle(t)["padding-right"];
                    (t.dataset.originalPaddingRight = o),
                      (t.style.paddingRight = "".concat(
                        parseFloat(i) + e,
                        "px"
                      ));
                  }));
            }
          } else
            document.body.classList.remove("hidden-scroll"),
              (document.body.style.paddingRight =
                document.body.dataset.originalPaddingRight + "px"),
              o.forEach(function (t) {
                var e = t.dataset.originalPaddingRight;
                void 0 !== e && (t.style.paddingRight = e);
              });
          return e;
        },
      },
      {
        key: "close",
        value: function () {
          var t = this;
          if (!this.isOpen || this.isAnimating || this.isClosing) return !1;
          this.isClosing = !0;
          var e = this.relatedElements[this.currentImageIndex];
          for (var o in (e.dispatchEvent(new Event("close.simplelightbox")),
          this.options.history &&
            ((this.historyHasChanges = !1),
            this.hashReseted || this.resetHash()),
          this.removeEventListener(document, "focusin." + this.eventNamespace),
          this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed),
          this.fadeOut(
            document.querySelectorAll(
              ".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"
            ),
            this.options.fadeSpeed,
            function () {
              t.options.disableScroll && t.toggleScrollbar("show"),
                t.options.htmlClass &&
                  "" !== t.options.htmlClass &&
                  document
                    .querySelector("html")
                    .classList.remove(t.options.htmlClass),
                document.body.removeChild(t.domNodes.wrapper),
                t.options.overlay &&
                  document.body.removeChild(t.domNodes.overlay),
                (t.domNodes.additionalHtml = null),
                (t.domNodes.download = null),
                e.dispatchEvent(new Event("closed.simplelightbox")),
                (t.isClosing = !1);
            }
          ),
          (this.currentImage = null),
          (this.isOpen = !1),
          (this.isAnimating = !1),
          this.controlCoordinates))
            this.controlCoordinates[o] = 0;
          (this.controlCoordinates.mousedown = !1),
            (this.controlCoordinates.zoomed = !1),
            (this.controlCoordinates.capture = !1),
            (this.controlCoordinates.initialScale = this.minMax(
              1,
              1,
              this.options.maxZoom
            )),
            (this.controlCoordinates.doubleTapped = !1);
        },
      },
      {
        key: "hash",
        get: function () {
          return window.location.hash.substring(1);
        },
      },
      {
        key: "preload",
        value: function () {
          var t = this,
            e = this.currentImageIndex,
            o = this.relatedElements.length,
            i = new Image(),
            n = new Image();
          i.addEventListener("load", function (o) {
            var i = o.target.getAttribute("src");
            -1 === t.loadedImages.indexOf(i) && t.loadedImages.push(i),
              t.relatedElements[e].dispatchEvent(
                new Event("nextImageLoaded." + t.eventNamespace)
              );
          }),
            i.setAttribute(
              "src",
              this.relatedElements[
                e + 1 < 0 ? o - 1 : e + 1 >= o - 1 ? 0 : e + 1
              ].getAttribute(this.options.sourceAttr)
            ),
            n.addEventListener("load", function (o) {
              var i = o.target.getAttribute("src");
              -1 === t.loadedImages.indexOf(i) && t.loadedImages.push(i),
                t.relatedElements[e].dispatchEvent(
                  new Event("prevImageLoaded." + t.eventNamespace)
                );
            }),
            n.setAttribute(
              "src",
              this.relatedElements[
                e - 1 < 0 ? o - 1 : e - 1 >= o - 1 ? 0 : e - 1
              ].getAttribute(this.options.sourceAttr)
            );
        },
      },
      {
        key: "loadImage",
        value: function (t) {
          var e = this,
            o = t;
          this.options.rtl && (t = -t),
            this.relatedElements[this.currentImageIndex].dispatchEvent(
              new Event("change." + this.eventNamespace)
            ),
            this.relatedElements[this.currentImageIndex].dispatchEvent(
              new Event((1 === t ? "next" : "prev") + "." + this.eventNamespace)
            );
          var i = this.currentImageIndex + t;
          if (
            this.isAnimating ||
            ((i < 0 || i >= this.relatedElements.length) &&
              !1 === this.options.loop)
          )
            return !1;
          (this.currentImageIndex =
            i < 0
              ? this.relatedElements.length - 1
              : i > this.relatedElements.length - 1
              ? 0
              : i),
            (this.domNodes.counter.querySelector(".sl-current").innerHTML =
              this.currentImageIndex + 1),
            this.options.animationSlide &&
              this.slide(
                this.options.animationSpeed / 1e3,
                -100 * o - this.controlCoordinates.swipeDiff + "px"
              ),
            this.fadeOut(
              this.domNodes.image,
              this.options.fadeSpeed,
              function () {
                (e.isAnimating = !0),
                  e.isClosing
                    ? (e.isAnimating = !1)
                    : setTimeout(function () {
                        var t = e.relatedElements[e.currentImageIndex];
                        e.currentImage &&
                          (e.currentImage.setAttribute(
                            "src",
                            t.getAttribute(e.options.sourceAttr)
                          ),
                          -1 ===
                            e.loadedImages.indexOf(
                              t.getAttribute(e.options.sourceAttr)
                            ) && e.show(e.domNodes.spinner),
                          e.domNodes.image.contains(e.domNodes.caption) &&
                            e.domNodes.image.removeChild(e.domNodes.caption),
                          e.adjustImage(o),
                          e.options.preloading && e.preload());
                      }, 100);
              }
            );
        },
      },
      {
        key: "adjustImage",
        value: function (t) {
          var e = this;
          if (!this.currentImage) return !1;
          var o = new Image(),
            i = window.innerWidth * this.options.widthRatio,
            n = window.innerHeight * this.options.heightRatio;
          o.setAttribute("src", this.currentImage.getAttribute("src")),
            (this.currentImage.dataset.scale = 1),
            (this.currentImage.dataset.translateX = 0),
            (this.currentImage.dataset.translateY = 0),
            this.zoomPanElement(0, 0, 1),
            o.addEventListener("error", function (o) {
              e.relatedElements[e.currentImageIndex].dispatchEvent(
                new Event("error." + e.eventNamespace)
              ),
                (e.isAnimating = !1),
                (e.isOpen = !0),
                (e.domNodes.spinner.style.display = "none");
              var i = 1 === t || -1 === t;
              if (e.initialImageIndex === e.currentImageIndex && i)
                return e.close();
              e.options.alertError && alert(e.options.alertErrorMessage),
                e.loadImage(i ? t : 1);
            }),
            o.addEventListener("load", function (o) {
              void 0 !== t &&
                (e.relatedElements[e.currentImageIndex].dispatchEvent(
                  new Event("changed." + e.eventNamespace)
                ),
                e.relatedElements[e.currentImageIndex].dispatchEvent(
                  new Event(
                    (1 === t ? "nextDone" : "prevDone") + "." + e.eventNamespace
                  )
                )),
                e.options.history && e.updateURL(),
                -1 ===
                  e.loadedImages.indexOf(e.currentImage.getAttribute("src")) &&
                  e.loadedImages.push(e.currentImage.getAttribute("src"));
              var a,
                r,
                s = o.target.width,
                l = o.target.height;
              if (e.options.scaleImageToRatio || s > i || l > n) {
                var c = s / l > i / n ? s / i : l / n;
                (s /= c), (l /= c);
              }
              (e.domNodes.image.style.top =
                (window.innerHeight - l) / 2 + "px"),
                (e.domNodes.image.style.left =
                  (window.innerWidth - s - e.globalScrollbarWidth) / 2 + "px"),
                (e.domNodes.image.style.width = s + "px"),
                (e.domNodes.image.style.height = l + "px"),
                (e.domNodes.spinner.style.display = "none"),
                e.options.focus && e.forceFocus(),
                e.fadeIn(e.currentImage, e.options.fadeSpeed, function () {
                  e.options.focus && e.domNodes.wrapper.focus();
                }),
                (e.isOpen = !0),
                "string" == typeof e.options.captionSelector
                  ? (a =
                      "self" === e.options.captionSelector
                        ? e.relatedElements[e.currentImageIndex]
                        : e.getCaptionElement(
                            e.relatedElements[e.currentImageIndex]
                          ))
                  : "function" == typeof e.options.captionSelector &&
                    (a = e.options.captionSelector(
                      e.relatedElements[e.currentImageIndex]
                    )),
                e.options.captions &&
                  a &&
                  (r =
                    "data" === e.options.captionType
                      ? a.dataset[e.options.captionsData]
                      : "text" === e.options.captionType
                      ? a.innerHTML
                      : a.getAttribute(e.options.captionsData)),
                e.options.loop
                  ? 1 === e.relatedElements.length
                    ? e.hide(
                        e.domNodes.navigation.querySelectorAll(
                          ".sl-prev, .sl-next"
                        )
                      )
                    : e.show(
                        e.domNodes.navigation.querySelectorAll(
                          ".sl-prev, .sl-next"
                        )
                      )
                  : (0 === e.currentImageIndex &&
                      e.hide(e.domNodes.navigation.querySelector(".sl-prev")),
                    e.currentImageIndex >= e.relatedElements.length - 1 &&
                      e.hide(e.domNodes.navigation.querySelector(".sl-next")),
                    e.currentImageIndex > 0 &&
                      e.show(e.domNodes.navigation.querySelector(".sl-prev")),
                    e.currentImageIndex < e.relatedElements.length - 1 &&
                      e.show(e.domNodes.navigation.querySelector(".sl-next"))),
                1 === t || -1 === t
                  ? (e.options.animationSlide &&
                      (e.slide(0, 100 * t + "px"),
                      setTimeout(function () {
                        e.slide(e.options.animationSpeed / 1e3, "0px");
                      }, 50)),
                    e.fadeIn(
                      e.domNodes.image,
                      e.options.fadeSpeed,
                      function () {
                        (e.isAnimating = !1), e.setCaption(r, s);
                      }
                    ))
                  : ((e.isAnimating = !1), e.setCaption(r, s)),
                e.options.additionalHtml &&
                  !e.domNodes.additionalHtml &&
                  ((e.domNodes.additionalHtml = document.createElement("div")),
                  e.domNodes.additionalHtml.classList.add("sl-additional-html"),
                  (e.domNodes.additionalHtml.innerHTML =
                    e.options.additionalHtml),
                  e.domNodes.image.appendChild(e.domNodes.additionalHtml)),
                e.options.download &&
                  e.domNodes.downloadLink.setAttribute(
                    "href",
                    e.currentImage.getAttribute("src")
                  );
            });
        },
      },
      {
        key: "zoomPanElement",
        value: function (t, e, o) {
          this.currentImage.style[this.transitionPrefix + "transform"] =
            "translate(" + t + "," + e + ") scale(" + o + ")";
        },
      },
      {
        key: "minMax",
        value: function (t, e, o) {
          return t < e ? e : t > o ? o : t;
        },
      },
      {
        key: "setZoomData",
        value: function (t, e, o) {
          (this.currentImage.dataset.scale = t),
            (this.currentImage.dataset.translateX = e),
            (this.currentImage.dataset.translateY = o);
        },
      },
      {
        key: "hashchangeHandler",
        value: function () {
          this.isOpen &&
            this.hash === this.initialLocationHash &&
            ((this.hashReseted = !0), this.close());
        },
      },
      {
        key: "addEvents",
        value: function () {
          var t = this;
          if (
            (this.addEventListener(
              window,
              "resize." + this.eventNamespace,
              function (e) {
                t.isOpen && t.adjustImage();
              }
            ),
            this.addEventListener(
              this.domNodes.closeButton,
              [
                "click." + this.eventNamespace,
                "touchstart." + this.eventNamespace,
              ],
              this.close.bind(this)
            ),
            this.options.history &&
              setTimeout(function () {
                t.addEventListener(
                  window,
                  "hashchange." + t.eventNamespace,
                  function (e) {
                    t.isOpen && t.hashchangeHandler();
                  }
                );
              }, 40),
            this.addEventListener(
              this.domNodes.navigation.getElementsByTagName("button"),
              "click." + this.eventNamespace,
              function (e) {
                if (!e.currentTarget.tagName.match(/button/i)) return !0;
                e.preventDefault(),
                  (t.controlCoordinates.swipeDiff = 0),
                  t.loadImage(
                    e.currentTarget.classList.contains("sl-next") ? 1 : -1
                  );
              }
            ),
            this.options.scrollZoom)
          ) {
            var e = 1;
            this.addEventListener(
              this.domNodes.image,
              ["mousewheel", "DOMMouseScroll"],
              function (o) {
                if (
                  t.controlCoordinates.mousedown ||
                  t.isAnimating ||
                  t.isClosing ||
                  !t.isOpen
                )
                  return !0;
                0 == t.controlCoordinates.containerHeight &&
                  ((t.controlCoordinates.containerHeight = t.getDimensions(
                    t.domNodes.image
                  ).height),
                  (t.controlCoordinates.containerWidth = t.getDimensions(
                    t.domNodes.image
                  ).width),
                  (t.controlCoordinates.imgHeight = t.getDimensions(
                    t.currentImage
                  ).height),
                  (t.controlCoordinates.imgWidth = t.getDimensions(
                    t.currentImage
                  ).width),
                  (t.controlCoordinates.containerOffsetX =
                    t.domNodes.image.offsetLeft),
                  (t.controlCoordinates.containerOffsetY =
                    t.domNodes.image.offsetTop),
                  (t.controlCoordinates.initialOffsetX = parseFloat(
                    t.currentImage.dataset.translateX
                  )),
                  (t.controlCoordinates.initialOffsetY = parseFloat(
                    t.currentImage.dataset.translateY
                  )));
                var i = o.delta || o.wheelDelta;
                void 0 === i && (i = o.detail),
                  (i = Math.max(-1, Math.min(1, i))),
                  (e += i * t.options.scrollZoomFactor * e),
                  (e = Math.max(1, Math.min(t.options.maxZoom, e))),
                  (t.controlCoordinates.targetScale = e);
                var n =
                  document.documentElement.scrollTop || document.body.scrollTop;
                (t.controlCoordinates.pinchOffsetX = o.pageX),
                  (t.controlCoordinates.pinchOffsetY = o.pageY - n || 0),
                  (t.controlCoordinates.limitOffsetX =
                    (t.controlCoordinates.imgWidth *
                      t.controlCoordinates.targetScale -
                      t.controlCoordinates.containerWidth) /
                    2),
                  (t.controlCoordinates.limitOffsetY =
                    (t.controlCoordinates.imgHeight *
                      t.controlCoordinates.targetScale -
                      t.controlCoordinates.containerHeight) /
                    2),
                  (t.controlCoordinates.scaleDifference =
                    t.controlCoordinates.targetScale -
                    t.controlCoordinates.initialScale),
                  (t.controlCoordinates.targetOffsetX =
                    t.controlCoordinates.imgWidth *
                      t.controlCoordinates.targetScale <=
                    t.controlCoordinates.containerWidth
                      ? 0
                      : t.minMax(
                          t.controlCoordinates.initialOffsetX -
                            ((t.controlCoordinates.pinchOffsetX -
                              t.controlCoordinates.containerOffsetX -
                              t.controlCoordinates.containerWidth / 2 -
                              t.controlCoordinates.initialOffsetX) /
                              (t.controlCoordinates.targetScale -
                                t.controlCoordinates.scaleDifference)) *
                              t.controlCoordinates.scaleDifference,
                          -1 * t.controlCoordinates.limitOffsetX,
                          t.controlCoordinates.limitOffsetX
                        )),
                  (t.controlCoordinates.targetOffsetY =
                    t.controlCoordinates.imgHeight *
                      t.controlCoordinates.targetScale <=
                    t.controlCoordinates.containerHeight
                      ? 0
                      : t.minMax(
                          t.controlCoordinates.initialOffsetY -
                            ((t.controlCoordinates.pinchOffsetY -
                              t.controlCoordinates.containerOffsetY -
                              t.controlCoordinates.containerHeight / 2 -
                              t.controlCoordinates.initialOffsetY) /
                              (t.controlCoordinates.targetScale -
                                t.controlCoordinates.scaleDifference)) *
                              t.controlCoordinates.scaleDifference,
                          -1 * t.controlCoordinates.limitOffsetY,
                          t.controlCoordinates.limitOffsetY
                        )),
                  t.zoomPanElement(
                    t.controlCoordinates.targetOffsetX + "px",
                    t.controlCoordinates.targetOffsetY + "px",
                    t.controlCoordinates.targetScale
                  ),
                  t.controlCoordinates.targetScale > 1
                    ? ((t.controlCoordinates.zoomed = !0),
                      (!t.domNodes.caption.style.opacity ||
                        t.domNodes.caption.style.opacity > 0) &&
                        "none" !== t.domNodes.caption.style.display &&
                        t.fadeOut(t.domNodes.caption, t.options.fadeSpeed))
                    : (1 === t.controlCoordinates.initialScale &&
                        ((t.controlCoordinates.zoomed = !1),
                        "none" === t.domNodes.caption.style.display &&
                          t.fadeIn(t.domNodes.caption, t.options.fadeSpeed)),
                      (t.controlCoordinates.initialPinchDistance = null),
                      (t.controlCoordinates.capture = !1)),
                  (t.controlCoordinates.initialPinchDistance =
                    t.controlCoordinates.targetPinchDistance),
                  (t.controlCoordinates.initialScale =
                    t.controlCoordinates.targetScale),
                  (t.controlCoordinates.initialOffsetX =
                    t.controlCoordinates.targetOffsetX),
                  (t.controlCoordinates.initialOffsetY =
                    t.controlCoordinates.targetOffsetY),
                  t.setZoomData(
                    t.controlCoordinates.targetScale,
                    t.controlCoordinates.targetOffsetX,
                    t.controlCoordinates.targetOffsetY
                  ),
                  t.zoomPanElement(
                    t.controlCoordinates.targetOffsetX + "px",
                    t.controlCoordinates.targetOffsetY + "px",
                    t.controlCoordinates.targetScale
                  );
              }
            );
          }
          this.addEventListener(
            this.domNodes.image,
            [
              "touchstart." + this.eventNamespace,
              "mousedown." + this.eventNamespace,
            ],
            function (e) {
              if ("A" === e.target.tagName && "touchstart" === e.type)
                return !0;
              if ("mousedown" === e.type)
                e.preventDefault(),
                  (t.controlCoordinates.initialPointerOffsetX = e.clientX),
                  (t.controlCoordinates.initialPointerOffsetY = e.clientY),
                  (t.controlCoordinates.containerHeight = t.getDimensions(
                    t.domNodes.image
                  ).height),
                  (t.controlCoordinates.containerWidth = t.getDimensions(
                    t.domNodes.image
                  ).width),
                  (t.controlCoordinates.imgHeight = t.getDimensions(
                    t.currentImage
                  ).height),
                  (t.controlCoordinates.imgWidth = t.getDimensions(
                    t.currentImage
                  ).width),
                  (t.controlCoordinates.containerOffsetX =
                    t.domNodes.image.offsetLeft),
                  (t.controlCoordinates.containerOffsetY =
                    t.domNodes.image.offsetTop),
                  (t.controlCoordinates.initialOffsetX = parseFloat(
                    t.currentImage.dataset.translateX
                  )),
                  (t.controlCoordinates.initialOffsetY = parseFloat(
                    t.currentImage.dataset.translateY
                  )),
                  (t.controlCoordinates.capture = !0);
              else {
                if (
                  ((t.controlCoordinates.touchCount = e.touches.length),
                  (t.controlCoordinates.initialPointerOffsetX =
                    e.touches[0].clientX),
                  (t.controlCoordinates.initialPointerOffsetY =
                    e.touches[0].clientY),
                  (t.controlCoordinates.containerHeight = t.getDimensions(
                    t.domNodes.image
                  ).height),
                  (t.controlCoordinates.containerWidth = t.getDimensions(
                    t.domNodes.image
                  ).width),
                  (t.controlCoordinates.imgHeight = t.getDimensions(
                    t.currentImage
                  ).height),
                  (t.controlCoordinates.imgWidth = t.getDimensions(
                    t.currentImage
                  ).width),
                  (t.controlCoordinates.containerOffsetX =
                    t.domNodes.image.offsetLeft),
                  (t.controlCoordinates.containerOffsetY =
                    t.domNodes.image.offsetTop),
                  1 === t.controlCoordinates.touchCount)
                ) {
                  if (t.controlCoordinates.doubleTapped)
                    return (
                      t.currentImage.classList.add("sl-transition"),
                      t.controlCoordinates.zoomed
                        ? ((t.controlCoordinates.initialScale = 1),
                          t.setZoomData(
                            t.controlCoordinates.initialScale,
                            0,
                            0
                          ),
                          t.zoomPanElement(
                            "0px",
                            "0px",
                            t.controlCoordinates.initialScale
                          ),
                          (t.controlCoordinates.zoomed = !1))
                        : ((t.controlCoordinates.initialScale =
                            t.options.doubleTapZoom),
                          t.setZoomData(
                            t.controlCoordinates.initialScale,
                            0,
                            0
                          ),
                          t.zoomPanElement(
                            "0px",
                            "0px",
                            t.controlCoordinates.initialScale
                          ),
                          (!t.domNodes.caption.style.opacity ||
                            t.domNodes.caption.style.opacity > 0) &&
                            "none" !== t.domNodes.caption.style.display &&
                            t.fadeOut(t.domNodes.caption, t.options.fadeSpeed),
                          (t.controlCoordinates.zoomed = !0)),
                      setTimeout(function () {
                        t.currentImage &&
                          t.currentImage.classList.remove("sl-transition");
                      }, 200),
                      !1
                    );
                  (t.controlCoordinates.doubleTapped = !0),
                    setTimeout(function () {
                      t.controlCoordinates.doubleTapped = !1;
                    }, 300),
                    (t.controlCoordinates.initialOffsetX = parseFloat(
                      t.currentImage.dataset.translateX
                    )),
                    (t.controlCoordinates.initialOffsetY = parseFloat(
                      t.currentImage.dataset.translateY
                    ));
                } else
                  2 === t.controlCoordinates.touchCount &&
                    ((t.controlCoordinates.initialPointerOffsetX2 =
                      e.touches[1].clientX),
                    (t.controlCoordinates.initialPointerOffsetY2 =
                      e.touches[1].clientY),
                    (t.controlCoordinates.initialOffsetX = parseFloat(
                      t.currentImage.dataset.translateX
                    )),
                    (t.controlCoordinates.initialOffsetY = parseFloat(
                      t.currentImage.dataset.translateY
                    )),
                    (t.controlCoordinates.pinchOffsetX =
                      (t.controlCoordinates.initialPointerOffsetX +
                        t.controlCoordinates.initialPointerOffsetX2) /
                      2),
                    (t.controlCoordinates.pinchOffsetY =
                      (t.controlCoordinates.initialPointerOffsetY +
                        t.controlCoordinates.initialPointerOffsetY2) /
                      2),
                    (t.controlCoordinates.initialPinchDistance = Math.sqrt(
                      (t.controlCoordinates.initialPointerOffsetX -
                        t.controlCoordinates.initialPointerOffsetX2) *
                        (t.controlCoordinates.initialPointerOffsetX -
                          t.controlCoordinates.initialPointerOffsetX2) +
                        (t.controlCoordinates.initialPointerOffsetY -
                          t.controlCoordinates.initialPointerOffsetY2) *
                          (t.controlCoordinates.initialPointerOffsetY -
                            t.controlCoordinates.initialPointerOffsetY2)
                    )));
                t.controlCoordinates.capture = !0;
              }
              return (
                !!t.controlCoordinates.mousedown ||
                (t.transitionCapable &&
                  (t.controlCoordinates.imageLeft = parseInt(
                    t.domNodes.image.style.left,
                    10
                  )),
                (t.controlCoordinates.mousedown = !0),
                (t.controlCoordinates.swipeDiff = 0),
                (t.controlCoordinates.swipeYDiff = 0),
                (t.controlCoordinates.swipeStart =
                  e.pageX || e.touches[0].pageX),
                (t.controlCoordinates.swipeYStart =
                  e.pageY || e.touches[0].pageY),
                !1)
              );
            }
          ),
            this.addEventListener(
              this.domNodes.image,
              [
                "touchmove." + this.eventNamespace,
                "mousemove." + this.eventNamespace,
                "MSPointerMove",
              ],
              function (e) {
                if (!t.controlCoordinates.mousedown) return !0;
                if ("touchmove" === e.type) {
                  if (!1 === t.controlCoordinates.capture) return !1;
                  (t.controlCoordinates.pointerOffsetX = e.touches[0].clientX),
                    (t.controlCoordinates.pointerOffsetY =
                      e.touches[0].clientY),
                    (t.controlCoordinates.touchCount = e.touches.length),
                    t.controlCoordinates.touchmoveCount++,
                    t.controlCoordinates.touchCount > 1
                      ? ((t.controlCoordinates.pointerOffsetX2 =
                          e.touches[1].clientX),
                        (t.controlCoordinates.pointerOffsetY2 =
                          e.touches[1].clientY),
                        (t.controlCoordinates.targetPinchDistance = Math.sqrt(
                          (t.controlCoordinates.pointerOffsetX -
                            t.controlCoordinates.pointerOffsetX2) *
                            (t.controlCoordinates.pointerOffsetX -
                              t.controlCoordinates.pointerOffsetX2) +
                            (t.controlCoordinates.pointerOffsetY -
                              t.controlCoordinates.pointerOffsetY2) *
                              (t.controlCoordinates.pointerOffsetY -
                                t.controlCoordinates.pointerOffsetY2)
                        )),
                        null === t.controlCoordinates.initialPinchDistance &&
                          (t.controlCoordinates.initialPinchDistance =
                            t.controlCoordinates.targetPinchDistance),
                        Math.abs(
                          t.controlCoordinates.initialPinchDistance -
                            t.controlCoordinates.targetPinchDistance
                        ) >= 1 &&
                          ((t.controlCoordinates.targetScale = t.minMax(
                            (t.controlCoordinates.targetPinchDistance /
                              t.controlCoordinates.initialPinchDistance) *
                              t.controlCoordinates.initialScale,
                            1,
                            t.options.maxZoom
                          )),
                          (t.controlCoordinates.limitOffsetX =
                            (t.controlCoordinates.imgWidth *
                              t.controlCoordinates.targetScale -
                              t.controlCoordinates.containerWidth) /
                            2),
                          (t.controlCoordinates.limitOffsetY =
                            (t.controlCoordinates.imgHeight *
                              t.controlCoordinates.targetScale -
                              t.controlCoordinates.containerHeight) /
                            2),
                          (t.controlCoordinates.scaleDifference =
                            t.controlCoordinates.targetScale -
                            t.controlCoordinates.initialScale),
                          (t.controlCoordinates.targetOffsetX =
                            t.controlCoordinates.imgWidth *
                              t.controlCoordinates.targetScale <=
                            t.controlCoordinates.containerWidth
                              ? 0
                              : t.minMax(
                                  t.controlCoordinates.initialOffsetX -
                                    ((t.controlCoordinates.pinchOffsetX -
                                      t.controlCoordinates.containerOffsetX -
                                      t.controlCoordinates.containerWidth / 2 -
                                      t.controlCoordinates.initialOffsetX) /
                                      (t.controlCoordinates.targetScale -
                                        t.controlCoordinates.scaleDifference)) *
                                      t.controlCoordinates.scaleDifference,
                                  -1 * t.controlCoordinates.limitOffsetX,
                                  t.controlCoordinates.limitOffsetX
                                )),
                          (t.controlCoordinates.targetOffsetY =
                            t.controlCoordinates.imgHeight *
                              t.controlCoordinates.targetScale <=
                            t.controlCoordinates.containerHeight
                              ? 0
                              : t.minMax(
                                  t.controlCoordinates.initialOffsetY -
                                    ((t.controlCoordinates.pinchOffsetY -
                                      t.controlCoordinates.containerOffsetY -
                                      t.controlCoordinates.containerHeight / 2 -
                                      t.controlCoordinates.initialOffsetY) /
                                      (t.controlCoordinates.targetScale -
                                        t.controlCoordinates.scaleDifference)) *
                                      t.controlCoordinates.scaleDifference,
                                  -1 * t.controlCoordinates.limitOffsetY,
                                  t.controlCoordinates.limitOffsetY
                                )),
                          t.zoomPanElement(
                            t.controlCoordinates.targetOffsetX + "px",
                            t.controlCoordinates.targetOffsetY + "px",
                            t.controlCoordinates.targetScale
                          ),
                          t.controlCoordinates.targetScale > 1 &&
                            ((t.controlCoordinates.zoomed = !0),
                            (!t.domNodes.caption.style.opacity ||
                              t.domNodes.caption.style.opacity > 0) &&
                              "none" !== t.domNodes.caption.style.display &&
                              t.fadeOut(
                                t.domNodes.caption,
                                t.options.fadeSpeed
                              )),
                          (t.controlCoordinates.initialPinchDistance =
                            t.controlCoordinates.targetPinchDistance),
                          (t.controlCoordinates.initialScale =
                            t.controlCoordinates.targetScale),
                          (t.controlCoordinates.initialOffsetX =
                            t.controlCoordinates.targetOffsetX),
                          (t.controlCoordinates.initialOffsetY =
                            t.controlCoordinates.targetOffsetY)))
                      : ((t.controlCoordinates.targetScale =
                          t.controlCoordinates.initialScale),
                        (t.controlCoordinates.limitOffsetX =
                          (t.controlCoordinates.imgWidth *
                            t.controlCoordinates.targetScale -
                            t.controlCoordinates.containerWidth) /
                          2),
                        (t.controlCoordinates.limitOffsetY =
                          (t.controlCoordinates.imgHeight *
                            t.controlCoordinates.targetScale -
                            t.controlCoordinates.containerHeight) /
                          2),
                        (t.controlCoordinates.targetOffsetX =
                          t.controlCoordinates.imgWidth *
                            t.controlCoordinates.targetScale <=
                          t.controlCoordinates.containerWidth
                            ? 0
                            : t.minMax(
                                t.controlCoordinates.pointerOffsetX -
                                  (t.controlCoordinates.initialPointerOffsetX -
                                    t.controlCoordinates.initialOffsetX),
                                -1 * t.controlCoordinates.limitOffsetX,
                                t.controlCoordinates.limitOffsetX
                              )),
                        (t.controlCoordinates.targetOffsetY =
                          t.controlCoordinates.imgHeight *
                            t.controlCoordinates.targetScale <=
                          t.controlCoordinates.containerHeight
                            ? 0
                            : t.minMax(
                                t.controlCoordinates.pointerOffsetY -
                                  (t.controlCoordinates.initialPointerOffsetY -
                                    t.controlCoordinates.initialOffsetY),
                                -1 * t.controlCoordinates.limitOffsetY,
                                t.controlCoordinates.limitOffsetY
                              )),
                        Math.abs(t.controlCoordinates.targetOffsetX) ===
                          Math.abs(t.controlCoordinates.limitOffsetX) &&
                          ((t.controlCoordinates.initialOffsetX =
                            t.controlCoordinates.targetOffsetX),
                          (t.controlCoordinates.initialPointerOffsetX =
                            t.controlCoordinates.pointerOffsetX)),
                        Math.abs(t.controlCoordinates.targetOffsetY) ===
                          Math.abs(t.controlCoordinates.limitOffsetY) &&
                          ((t.controlCoordinates.initialOffsetY =
                            t.controlCoordinates.targetOffsetY),
                          (t.controlCoordinates.initialPointerOffsetY =
                            t.controlCoordinates.pointerOffsetY)),
                        t.setZoomData(
                          t.controlCoordinates.initialScale,
                          t.controlCoordinates.targetOffsetX,
                          t.controlCoordinates.targetOffsetY
                        ),
                        t.zoomPanElement(
                          t.controlCoordinates.targetOffsetX + "px",
                          t.controlCoordinates.targetOffsetY + "px",
                          t.controlCoordinates.targetScale
                        ));
                }
                if ("mousemove" === e.type && t.controlCoordinates.mousedown) {
                  if ("touchmove" == e.type) return !0;
                  if ((e.preventDefault(), !1 === t.controlCoordinates.capture))
                    return !1;
                  (t.controlCoordinates.pointerOffsetX = e.clientX),
                    (t.controlCoordinates.pointerOffsetY = e.clientY),
                    (t.controlCoordinates.targetScale =
                      t.controlCoordinates.initialScale),
                    (t.controlCoordinates.limitOffsetX =
                      (t.controlCoordinates.imgWidth *
                        t.controlCoordinates.targetScale -
                        t.controlCoordinates.containerWidth) /
                      2),
                    (t.controlCoordinates.limitOffsetY =
                      (t.controlCoordinates.imgHeight *
                        t.controlCoordinates.targetScale -
                        t.controlCoordinates.containerHeight) /
                      2),
                    (t.controlCoordinates.targetOffsetX =
                      t.controlCoordinates.imgWidth *
                        t.controlCoordinates.targetScale <=
                      t.controlCoordinates.containerWidth
                        ? 0
                        : t.minMax(
                            t.controlCoordinates.pointerOffsetX -
                              (t.controlCoordinates.initialPointerOffsetX -
                                t.controlCoordinates.initialOffsetX),
                            -1 * t.controlCoordinates.limitOffsetX,
                            t.controlCoordinates.limitOffsetX
                          )),
                    (t.controlCoordinates.targetOffsetY =
                      t.controlCoordinates.imgHeight *
                        t.controlCoordinates.targetScale <=
                      t.controlCoordinates.containerHeight
                        ? 0
                        : t.minMax(
                            t.controlCoordinates.pointerOffsetY -
                              (t.controlCoordinates.initialPointerOffsetY -
                                t.controlCoordinates.initialOffsetY),
                            -1 * t.controlCoordinates.limitOffsetY,
                            t.controlCoordinates.limitOffsetY
                          )),
                    Math.abs(t.controlCoordinates.targetOffsetX) ===
                      Math.abs(t.controlCoordinates.limitOffsetX) &&
                      ((t.controlCoordinates.initialOffsetX =
                        t.controlCoordinates.targetOffsetX),
                      (t.controlCoordinates.initialPointerOffsetX =
                        t.controlCoordinates.pointerOffsetX)),
                    Math.abs(t.controlCoordinates.targetOffsetY) ===
                      Math.abs(t.controlCoordinates.limitOffsetY) &&
                      ((t.controlCoordinates.initialOffsetY =
                        t.controlCoordinates.targetOffsetY),
                      (t.controlCoordinates.initialPointerOffsetY =
                        t.controlCoordinates.pointerOffsetY)),
                    t.setZoomData(
                      t.controlCoordinates.initialScale,
                      t.controlCoordinates.targetOffsetX,
                      t.controlCoordinates.targetOffsetY
                    ),
                    t.zoomPanElement(
                      t.controlCoordinates.targetOffsetX + "px",
                      t.controlCoordinates.targetOffsetY + "px",
                      t.controlCoordinates.targetScale
                    );
                }
                !t.controlCoordinates.zoomed &&
                  ((t.controlCoordinates.swipeEnd =
                    e.pageX || e.touches[0].pageX),
                  (t.controlCoordinates.swipeYEnd =
                    e.pageY || e.touches[0].pageY),
                  (t.controlCoordinates.swipeDiff =
                    t.controlCoordinates.swipeStart -
                    t.controlCoordinates.swipeEnd),
                  (t.controlCoordinates.swipeYDiff =
                    t.controlCoordinates.swipeYStart -
                    t.controlCoordinates.swipeYEnd),
                  t.options.animationSlide &&
                    t.slide(0, -t.controlCoordinates.swipeDiff + "px"));
              }
            ),
            this.addEventListener(
              this.domNodes.image,
              [
                "touchend." + this.eventNamespace,
                "mouseup." + this.eventNamespace,
                "touchcancel." + this.eventNamespace,
                "mouseleave." + this.eventNamespace,
                "pointerup",
                "pointercancel",
                "MSPointerUp",
                "MSPointerCancel",
              ],
              function (e) {
                if (
                  (t.isTouchDevice &&
                    "touchend" === e.type &&
                    ((t.controlCoordinates.touchCount = e.touches.length),
                    0 === t.controlCoordinates.touchCount
                      ? (t.currentImage &&
                          t.setZoomData(
                            t.controlCoordinates.initialScale,
                            t.controlCoordinates.targetOffsetX,
                            t.controlCoordinates.targetOffsetY
                          ),
                        1 === t.controlCoordinates.initialScale &&
                          ((t.controlCoordinates.zoomed = !1),
                          "none" === t.domNodes.caption.style.display &&
                            t.fadeIn(t.domNodes.caption, t.options.fadeSpeed)),
                        (t.controlCoordinates.initialPinchDistance = null),
                        (t.controlCoordinates.capture = !1))
                      : 1 === t.controlCoordinates.touchCount
                      ? ((t.controlCoordinates.initialPointerOffsetX =
                          e.touches[0].clientX),
                        (t.controlCoordinates.initialPointerOffsetY =
                          e.touches[0].clientY))
                      : t.controlCoordinates.touchCount > 1 &&
                        (t.controlCoordinates.initialPinchDistance = null)),
                  t.controlCoordinates.mousedown)
                ) {
                  t.controlCoordinates.mousedown = !1;
                  var o = !0;
                  !t.options.loop &&
                    (0 === t.currentImageIndex &&
                      t.controlCoordinates.swipeDiff < 0 &&
                      (o = !1),
                    t.currentImageIndex >= t.relatedElements.length - 1 &&
                      t.controlCoordinates.swipeDiff > 0 &&
                      (o = !1)),
                    Math.abs(t.controlCoordinates.swipeDiff) >
                      t.options.swipeTolerance && o
                      ? t.loadImage(t.controlCoordinates.swipeDiff > 0 ? 1 : -1)
                      : t.options.animationSlide &&
                        t.slide(t.options.animationSpeed / 1e3, "0px"),
                    t.options.swipeClose &&
                      Math.abs(t.controlCoordinates.swipeYDiff) > 50 &&
                      Math.abs(t.controlCoordinates.swipeDiff) <
                        t.options.swipeTolerance &&
                      t.close();
                }
              }
            ),
            this.addEventListener(
              this.domNodes.image,
              ["dblclick"],
              function (e) {
                if (!t.isTouchDevice)
                  return (
                    (t.controlCoordinates.initialPointerOffsetX = e.clientX),
                    (t.controlCoordinates.initialPointerOffsetY = e.clientY),
                    (t.controlCoordinates.containerHeight = t.getDimensions(
                      t.domNodes.image
                    ).height),
                    (t.controlCoordinates.containerWidth = t.getDimensions(
                      t.domNodes.image
                    ).width),
                    (t.controlCoordinates.imgHeight = t.getDimensions(
                      t.currentImage
                    ).height),
                    (t.controlCoordinates.imgWidth = t.getDimensions(
                      t.currentImage
                    ).width),
                    (t.controlCoordinates.containerOffsetX =
                      t.domNodes.image.offsetLeft),
                    (t.controlCoordinates.containerOffsetY =
                      t.domNodes.image.offsetTop),
                    t.currentImage.classList.add("sl-transition"),
                    t.controlCoordinates.zoomed
                      ? ((t.controlCoordinates.initialScale = 1),
                        t.setZoomData(t.controlCoordinates.initialScale, 0, 0),
                        t.zoomPanElement(
                          "0px",
                          "0px",
                          t.controlCoordinates.initialScale
                        ),
                        (t.controlCoordinates.zoomed = !1),
                        "none" === t.domNodes.caption.style.display &&
                          t.fadeIn(t.domNodes.caption, t.options.fadeSpeed))
                      : ((t.controlCoordinates.initialScale =
                          t.options.doubleTapZoom),
                        t.setZoomData(t.controlCoordinates.initialScale, 0, 0),
                        t.zoomPanElement(
                          "0px",
                          "0px",
                          t.controlCoordinates.initialScale
                        ),
                        (!t.domNodes.caption.style.opacity ||
                          t.domNodes.caption.style.opacity > 0) &&
                          "none" !== t.domNodes.caption.style.display &&
                          t.fadeOut(t.domNodes.caption, t.options.fadeSpeed),
                        (t.controlCoordinates.zoomed = !0)),
                    setTimeout(function () {
                      t.currentImage &&
                        (t.currentImage.classList.remove("sl-transition"),
                        (t.currentImage.style[
                          t.transitionPrefix + "transform-origin"
                        ] = null));
                    }, 200),
                    (t.controlCoordinates.capture = !0),
                    !1
                  );
              }
            );
        },
      },
      {
        key: "getDimensions",
        value: function (t) {
          var e = window.getComputedStyle(t),
            o = t.offsetHeight,
            i = t.offsetWidth,
            n = parseFloat(e.borderTopWidth);
          return {
            height:
              o -
              parseFloat(e.borderBottomWidth) -
              n -
              parseFloat(e.paddingTop) -
              parseFloat(e.paddingBottom),
            width:
              i -
              parseFloat(e.borderLeftWidth) -
              parseFloat(e.borderRightWidth) -
              parseFloat(e.paddingLeft) -
              parseFloat(e.paddingRight),
          };
        },
      },
      {
        key: "updateHash",
        value: function () {
          var t = "pid=" + (this.currentImageIndex + 1),
            e = window.location.href.split("#")[0] + "#" + t;
          (this.hashReseted = !1),
            this.pushStateSupport
              ? window.history[
                  this.historyHasChanges ? "replaceState" : "pushState"
                ]("", document.title, e)
              : this.historyHasChanges
              ? window.location.replace(e)
              : (window.location.hash = t),
            this.historyHasChanges || (this.urlChangedOnce = !0),
            (this.historyHasChanges = !0);
        },
      },
      {
        key: "resetHash",
        value: function () {
          (this.hashReseted = !0),
            this.urlChangedOnce
              ? history.back()
              : this.pushStateSupport
              ? history.pushState(
                  "",
                  document.title,
                  window.location.pathname + window.location.search
                )
              : (window.location.hash = ""),
            clearTimeout(this.historyUpdateTimeout);
        },
      },
      {
        key: "updateURL",
        value: function () {
          clearTimeout(this.historyUpdateTimeout),
            this.historyHasChanges
              ? (this.historyUpdateTimeout = setTimeout(
                  this.updateHash.bind(this),
                  800
                ))
              : this.updateHash();
        },
      },
      {
        key: "setCaption",
        value: function (t, e) {
          var o = this;
          this.options.captions &&
            t &&
            "" !== t &&
            void 0 !== t &&
            (this.hide(this.domNodes.caption),
            (this.domNodes.caption.style.width = e + "px"),
            (this.domNodes.caption.innerHTML = t),
            this.domNodes.image.appendChild(this.domNodes.caption),
            setTimeout(function () {
              o.fadeIn(o.domNodes.caption, o.options.fadeSpeed);
            }, this.options.captionDelay));
        },
      },
      {
        key: "slide",
        value: function (t, e) {
          if (!this.transitionCapable)
            return (this.domNodes.image.style.left = e);
          (this.domNodes.image.style[this.transitionPrefix + "transform"] =
            "translateX(" + e + ")"),
            (this.domNodes.image.style[this.transitionPrefix + "transition"] =
              this.transitionPrefix + "transform " + t + "s linear");
        },
      },
      {
        key: "getRelated",
        value: function (t) {
          return t && !1 !== t && "nofollow" !== t
            ? Array.from(this.elements).filter(function (e) {
                return e.getAttribute("rel") === t;
              })
            : this.elements;
        },
      },
      {
        key: "openImage",
        value: function (t) {
          var e = this;
          t.dispatchEvent(new Event("show." + this.eventNamespace)),
            (this.globalScrollbarWidth = this.getScrollbarWidth()),
            this.options.disableScroll &&
              (this.toggleScrollbar("hide"), (this.globalScrollbarWidth = 0)),
            this.options.htmlClass &&
              "" !== this.options.htmlClass &&
              document
                .querySelector("html")
                .classList.add(this.options.htmlClass),
            document.body.appendChild(this.domNodes.wrapper),
            this.domNodes.wrapper.appendChild(this.domNodes.image),
            this.options.overlay &&
              document.body.appendChild(this.domNodes.overlay),
            (this.relatedElements = this.getRelated(t.rel)),
            this.options.showCounter &&
              (1 == this.relatedElements.length &&
              this.domNodes.wrapper.contains(this.domNodes.counter)
                ? this.domNodes.wrapper.removeChild(this.domNodes.counter)
                : this.relatedElements.length > 1 &&
                  !this.domNodes.wrapper.contains(this.domNodes.counter) &&
                  this.domNodes.wrapper.appendChild(this.domNodes.counter)),
            this.options.download &&
              this.domNodes.download &&
              this.domNodes.wrapper.appendChild(this.domNodes.download),
            (this.isAnimating = !0),
            (this.currentImageIndex = this.relatedElements.indexOf(t));
          var o = t.getAttribute(this.options.sourceAttr);
          (this.currentImage = document.createElement("img")),
            (this.currentImage.style.display = "none"),
            this.currentImage.setAttribute("src", o),
            (this.currentImage.dataset.scale = 1),
            (this.currentImage.dataset.translateX = 0),
            (this.currentImage.dataset.translateY = 0),
            -1 === this.loadedImages.indexOf(o) && this.loadedImages.push(o),
            (this.domNodes.image.innerHTML = ""),
            this.domNodes.image.setAttribute("style", ""),
            this.domNodes.image.appendChild(this.currentImage),
            this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed),
            this.fadeIn(
              [
                this.domNodes.counter,
                this.domNodes.navigation,
                this.domNodes.closeButton,
                this.domNodes.download,
              ],
              this.options.fadeSpeed
            ),
            this.show(this.domNodes.spinner),
            (this.domNodes.counter.querySelector(".sl-current").innerHTML =
              this.currentImageIndex + 1),
            (this.domNodes.counter.querySelector(".sl-total").innerHTML =
              this.relatedElements.length),
            this.adjustImage(),
            this.options.preloading && this.preload(),
            setTimeout(function () {
              t.dispatchEvent(new Event("shown." + e.eventNamespace));
            }, this.options.animationSpeed);
        },
      },
      {
        key: "forceFocus",
        value: function () {
          var t = this;
          this.removeEventListener(document, "focusin." + this.eventNamespace),
            this.addEventListener(
              document,
              "focusin." + this.eventNamespace,
              function (e) {
                document === e.target ||
                  t.domNodes.wrapper === e.target ||
                  t.domNodes.wrapper.contains(e.target) ||
                  t.domNodes.wrapper.focus();
              }
            );
        },
      },
      {
        key: "addEventListener",
        value: function (t, e, o, i) {
          (t = this.wrap(t)), (e = this.wrap(e));
          var n,
            a = f(t);
          try {
            for (a.s(); !(n = a.n()).done; ) {
              var r = n.value;
              r.namespaces || (r.namespaces = {});
              var s,
                l = f(e);
              try {
                for (l.s(); !(s = l.n()).done; ) {
                  var d = s.value,
                    p = i || !1;
                  [
                    "touchstart",
                    "touchmove",
                    "mousewheel",
                    "DOMMouseScroll",
                  ].indexOf(d.split(".")[0]) >= 0 &&
                    this.isPassiveEventsSupported &&
                    ("object" === c(p)
                      ? (p.passive = !0)
                      : (p = { passive: !0 })),
                    (r.namespaces[d] = o),
                    r.addEventListener(d.split(".")[0], o, p);
                }
              } catch (t) {
                l.e(t);
              } finally {
                l.f();
              }
            }
          } catch (t) {
            a.e(t);
          } finally {
            a.f();
          }
        },
      },
      {
        key: "removeEventListener",
        value: function (t, e) {
          (t = this.wrap(t)), (e = this.wrap(e));
          var o,
            i = f(t);
          try {
            for (i.s(); !(o = i.n()).done; ) {
              var n,
                a = o.value,
                r = f(e);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var s = n.value;
                  a.namespaces &&
                    a.namespaces[s] &&
                    (a.removeEventListener(s.split(".")[0], a.namespaces[s]),
                    delete a.namespaces[s]);
                }
              } catch (t) {
                r.e(t);
              } finally {
                r.f();
              }
            }
          } catch (t) {
            i.e(t);
          } finally {
            i.f();
          }
        },
      },
      {
        key: "fadeOut",
        value: function (t, e, o) {
          var i,
            n = this,
            a = f((t = this.wrap(t)));
          try {
            for (a.s(); !(i = a.n()).done; ) {
              var r = i.value;
              r.style.opacity =
                parseFloat(r) ||
                window.getComputedStyle(r).getPropertyValue("opacity");
            }
          } catch (t) {
            a.e(t);
          } finally {
            a.f();
          }
          this.isFadeIn = !1;
          var s = 16.66666 / (e || this.options.fadeSpeed);
          !(function e() {
            var i = parseFloat(t[0].style.opacity);
            if ((i -= s) < 0) {
              var a,
                r = f(t);
              try {
                for (r.s(); !(a = r.n()).done; ) {
                  var l = a.value;
                  (l.style.display = "none"), (l.style.opacity = 1);
                }
              } catch (t) {
                r.e(t);
              } finally {
                r.f();
              }
              o && o.call(n, t);
            } else {
              var c,
                d = f(t);
              try {
                for (d.s(); !(c = d.n()).done; ) c.value.style.opacity = i;
              } catch (t) {
                d.e(t);
              } finally {
                d.f();
              }
              requestAnimationFrame(e);
            }
          })();
        },
      },
      {
        key: "fadeIn",
        value: function (t, e, o, i) {
          var n,
            a = this,
            r = f((t = this.wrap(t)));
          try {
            for (r.s(); !(n = r.n()).done; ) {
              var s = n.value;
              s && ((s.style.opacity = 0), (s.style.display = i || "block"));
            }
          } catch (t) {
            r.e(t);
          } finally {
            r.f();
          }
          this.isFadeIn = !0;
          var l = parseFloat(t[0].dataset.opacityTarget || 1),
            c = (16.66666 * l) / (e || this.options.fadeSpeed);
          !(function e() {
            var i = parseFloat(t[0].style.opacity);
            if ((i += c) > l) {
              var n,
                r = f(t);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var s = n.value;
                  s && (s.style.opacity = l);
                }
              } catch (t) {
                r.e(t);
              } finally {
                r.f();
              }
              o && o.call(a, t);
            } else {
              var d,
                p = f(t);
              try {
                for (p.s(); !(d = p.n()).done; ) {
                  var m = d.value;
                  m && (m.style.opacity = i);
                }
              } catch (t) {
                p.e(t);
              } finally {
                p.f();
              }
              if (!a.isFadeIn) return;
              requestAnimationFrame(e);
            }
          })();
        },
      },
      {
        key: "hide",
        value: function (t) {
          var e,
            o = f((t = this.wrap(t)));
          try {
            for (o.s(); !(e = o.n()).done; ) {
              var i = e.value;
              "none" != i.style.display &&
                (i.dataset.initialDisplay = i.style.display),
                (i.style.display = "none");
            }
          } catch (t) {
            o.e(t);
          } finally {
            o.f();
          }
        },
      },
      {
        key: "show",
        value: function (t, e) {
          var o,
            i = f((t = this.wrap(t)));
          try {
            for (i.s(); !(o = i.n()).done; ) {
              var n = o.value;
              n.style.display = n.dataset.initialDisplay || e || "block";
            }
          } catch (t) {
            i.e(t);
          } finally {
            i.f();
          }
        },
      },
      {
        key: "wrap",
        value: function (t) {
          return "function" == typeof t[Symbol.iterator] && "string" != typeof t
            ? t
            : [t];
        },
      },
      {
        key: "on",
        value: function (t, e) {
          t = this.wrap(t);
          var o,
            i = f(this.elements);
          try {
            for (i.s(); !(o = i.n()).done; ) {
              var n = o.value;
              n.fullyNamespacedEvents || (n.fullyNamespacedEvents = {});
              var a,
                r = f(t);
              try {
                for (r.s(); !(a = r.n()).done; ) {
                  var s = a.value;
                  (n.fullyNamespacedEvents[s] = e), n.addEventListener(s, e);
                }
              } catch (t) {
                r.e(t);
              } finally {
                r.f();
              }
            }
          } catch (t) {
            i.e(t);
          } finally {
            i.f();
          }
          return this;
        },
      },
      {
        key: "off",
        value: function (t) {
          t = this.wrap(t);
          var e,
            o = f(this.elements);
          try {
            for (o.s(); !(e = o.n()).done; ) {
              var i,
                n = e.value,
                a = f(t);
              try {
                for (a.s(); !(i = a.n()).done; ) {
                  var r = i.value;
                  void 0 !== n.fullyNamespacedEvents &&
                    r in n.fullyNamespacedEvents &&
                    n.removeEventListener(r, n.fullyNamespacedEvents[r]);
                }
              } catch (t) {
                a.e(t);
              } finally {
                a.f();
              }
            }
          } catch (t) {
            o.e(t);
          } finally {
            o.f();
          }
          return this;
        },
      },
      {
        key: "open",
        value: function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          (t = t || this.elements[0]),
            "undefined" != typeof jQuery &&
              t instanceof jQuery &&
              (t = t.get(0)),
            e > 0 && (t = this.elements[e]),
            (this.initialImageIndex = this.elements.indexOf(t)),
            this.initialImageIndex > -1 && this.openImage(t);
        },
      },
      {
        key: "openPosition",
        value: function (t) {
          var e = this.elements[t];
          this.open(e, t);
        },
      },
      {
        key: "next",
        value: function () {
          this.loadImage(1);
        },
      },
      {
        key: "prev",
        value: function () {
          this.loadImage(-1);
        },
      },
      {
        key: "getLighboxData",
        value: function () {
          return {
            currentImageIndex: this.currentImageIndex,
            currentImage: this.currentImage,
            globalScrollbarWidth: this.globalScrollbarWidth,
          };
        },
      },
      {
        key: "destroy",
        value: function () {
          this.off([
            "close." + this.eventNamespace,
            "closed." + this.eventNamespace,
            "nextImageLoaded." + this.eventNamespace,
            "prevImageLoaded." + this.eventNamespace,
            "change." + this.eventNamespace,
            "nextDone." + this.eventNamespace,
            "prevDone." + this.eventNamespace,
            "error." + this.eventNamespace,
            "changed." + this.eventNamespace,
            "next." + this.eventNamespace,
            "prev." + this.eventNamespace,
            "show." + this.eventNamespace,
            "shown." + this.eventNamespace,
          ]),
            this.removeEventListener(
              this.elements,
              "click." + this.eventNamespace
            ),
            this.removeEventListener(
              document,
              "focusin." + this.eventNamespace
            ),
            this.removeEventListener(
              document.body,
              "contextmenu." + this.eventNamespace
            ),
            this.removeEventListener(
              document.body,
              "keyup." + this.eventNamespace
            ),
            this.removeEventListener(
              this.domNodes.navigation.getElementsByTagName("button"),
              "click." + this.eventNamespace
            ),
            this.removeEventListener(
              this.domNodes.closeButton,
              "click." + this.eventNamespace
            ),
            this.removeEventListener(window, "resize." + this.eventNamespace),
            this.removeEventListener(
              window,
              "hashchange." + this.eventNamespace
            ),
            this.close(),
            this.isOpen &&
              (document.body.removeChild(this.domNodes.wrapper),
              document.body.removeChild(this.domNodes.overlay)),
            (this.elements = null);
        },
      },
      {
        key: "refresh",
        value: function () {
          if (!this.initialSelector)
            throw "refreshing only works when you initialize using a selector!";
          var t = this.options,
            e = this.initialSelector;
          return this.destroy(), this.constructor(e, t), this;
        },
      },
    ]),
    m(o.prototype, t),
    e && m(o, e),
    Object.defineProperty(o, "prototype", { writable: !1 }),
    o
  );
})();
(l.default = h), (s.SimpleLightbox = h);
var g = {};
function y(t) {
  e(g).Notify.failure(`${t}`);
}
("use strict");
function x(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
("use strict");
!(function (t, e) {
  "function" == typeof define && define.amd
    ? define([], function () {
        return e(t);
      })
    : "object" == typeof g
    ? (g = e(t))
    : (t.Notiflix = e(t));
})(
  void 0 === s ? ("undefined" == typeof window ? g : window) : s,
  function (t) {
    "use strict";
    if (void 0 === t && void 0 === t.document) return !1;
    var e,
      o,
      i,
      n,
      a,
      r =
        "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",
      s =
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      l = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info",
      },
      c = {
        wrapID: "NotiflixNotifyWrap",
        overlayID: "NotiflixNotifyOverlay",
        width: "280px",
        position: "right-top",
        distance: "10px",
        opacity: 1,
        borderRadius: "5px",
        rtl: !1,
        timeout: 3e3,
        messageMaxLength: 110,
        backOverlay: !1,
        backOverlayColor: "rgba(0,0,0,0.5)",
        plainText: !0,
        showOnlyTheLastOne: !1,
        clickToClose: !1,
        pauseOnHover: !0,
        ID: "NotiflixNotify",
        className: "notiflix-notify",
        zindex: 4001,
        fontFamily: "Quicksand",
        fontSize: "13px",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        cssAnimationStyle: "fade",
        closeButton: !1,
        useIcon: !0,
        useFontAwesome: !1,
        fontAwesomeIconStyle: "basic",
        fontAwesomeIconSize: "34px",
        success: {
          background: "#32c682",
          textColor: "#fff",
          childClassName: "notiflix-notify-success",
          notiflixIconColor: "rgba(0,0,0,0.2)",
          fontAwesomeClassName: "fas fa-check-circle",
          fontAwesomeIconColor: "rgba(0,0,0,0.2)",
          backOverlayColor: "rgba(50,198,130,0.2)",
        },
        failure: {
          background: "#ff5549",
          textColor: "#fff",
          childClassName: "notiflix-notify-failure",
          notiflixIconColor: "rgba(0,0,0,0.2)",
          fontAwesomeClassName: "fas fa-times-circle",
          fontAwesomeIconColor: "rgba(0,0,0,0.2)",
          backOverlayColor: "rgba(255,85,73,0.2)",
        },
        warning: {
          background: "#eebf31",
          textColor: "#fff",
          childClassName: "notiflix-notify-warning",
          notiflixIconColor: "rgba(0,0,0,0.2)",
          fontAwesomeClassName: "fas fa-exclamation-circle",
          fontAwesomeIconColor: "rgba(0,0,0,0.2)",
          backOverlayColor: "rgba(238,191,49,0.2)",
        },
        info: {
          background: "#26c0d3",
          textColor: "#fff",
          childClassName: "notiflix-notify-info",
          notiflixIconColor: "rgba(0,0,0,0.2)",
          fontAwesomeClassName: "fas fa-info-circle",
          fontAwesomeIconColor: "rgba(0,0,0,0.2)",
          backOverlayColor: "rgba(38,192,211,0.2)",
        },
      },
      f = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info",
      },
      d = {
        ID: "NotiflixReportWrap",
        className: "notiflix-report",
        width: "320px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        rtl: !1,
        zindex: 4002,
        backOverlay: !0,
        backOverlayColor: "rgba(0,0,0,0.5)",
        backOverlayClickToClose: !1,
        fontFamily: "Quicksand",
        svgSize: "110px",
        plainText: !0,
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageFontSize: "13px",
        messageMaxLength: 400,
        buttonFontSize: "14px",
        buttonMaxLength: 34,
        cssAnimation: !0,
        cssAnimationDuration: 360,
        cssAnimationStyle: "fade",
        success: {
          svgColor: "#32c682",
          titleColor: "#1e1e1e",
          messageColor: "#242424",
          buttonBackground: "#32c682",
          buttonColor: "#fff",
          backOverlayColor: "rgba(50,198,130,0.2)",
        },
        failure: {
          svgColor: "#ff5549",
          titleColor: "#1e1e1e",
          messageColor: "#242424",
          buttonBackground: "#ff5549",
          buttonColor: "#fff",
          backOverlayColor: "rgba(255,85,73,0.2)",
        },
        warning: {
          svgColor: "#eebf31",
          titleColor: "#1e1e1e",
          messageColor: "#242424",
          buttonBackground: "#eebf31",
          buttonColor: "#fff",
          backOverlayColor: "rgba(238,191,49,0.2)",
        },
        info: {
          svgColor: "#26c0d3",
          titleColor: "#1e1e1e",
          messageColor: "#242424",
          buttonBackground: "#26c0d3",
          buttonColor: "#fff",
          backOverlayColor: "rgba(38,192,211,0.2)",
        },
      },
      p = { Show: "Show", Ask: "Ask", Prompt: "Prompt" },
      m = {
        ID: "NotiflixConfirmWrap",
        className: "notiflix-confirm",
        width: "300px",
        zindex: 4003,
        position: "center",
        distance: "10px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        backOverlay: !0,
        backOverlayColor: "rgba(0,0,0,0.5)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 300,
        cssAnimationStyle: "fade",
        plainText: !0,
        titleColor: "#32c682",
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageColor: "#1e1e1e",
        messageFontSize: "14px",
        messageMaxLength: 110,
        buttonsFontSize: "15px",
        buttonsMaxLength: 34,
        okButtonColor: "#f8f8f8",
        okButtonBackground: "#32c682",
        cancelButtonColor: "#f8f8f8",
        cancelButtonBackground: "#a9a9a9",
      },
      u = {
        Standard: "Standard",
        Hourglass: "Hourglass",
        Circle: "Circle",
        Arrows: "Arrows",
        Dots: "Dots",
        Pulse: "Pulse",
        Custom: "Custom",
        Notiflix: "Notiflix",
      },
      h = {
        ID: "NotiflixLoadingWrap",
        className: "notiflix-loading",
        zindex: 4e3,
        backgroundColor: "rgba(0,0,0,0.8)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        clickToClose: !1,
        customSvgUrl: null,
        customSvgCode: null,
        svgSize: "80px",
        svgColor: "#32c682",
        messageID: "NotiflixLoadingMessage",
        messageFontSize: "15px",
        messageMaxLength: 34,
        messageColor: "#dcdcdc",
      },
      g = {
        Standard: "Standard",
        Hourglass: "Hourglass",
        Circle: "Circle",
        Arrows: "Arrows",
        Dots: "Dots",
        Pulse: "Pulse",
      },
      y = {
        ID: "NotiflixBlockWrap",
        querySelectorLimit: 200,
        className: "notiflix-block",
        position: "absolute",
        zindex: 1e3,
        backgroundColor: "rgba(255,255,255,0.9)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 300,
        svgSize: "45px",
        svgColor: "#383838",
        messageFontSize: "14px",
        messageMaxLength: 34,
        messageColor: "#383838",
      },
      x = function (t) {
        return console.error(
          "%c Notiflix Error ",
          "padding:2px;border-radius:20px;color:#fff;background:#ff5549",
          "\n" + t + r
        );
      },
      b = function (t) {
        return console.log(
          "%c Notiflix Info ",
          "padding:2px;border-radius:20px;color:#fff;background:#26c0d3",
          "\n" + t + r
        );
      },
      w = function (e) {
        return (
          e || (e = "head"),
          null !== t.document[e] ||
            (x(
              '\nNotiflix needs to be appended to the "<' +
                e +
                '>" element, but you called it before the "<' +
                e +
                '>" element has been created.'
            ),
            !1)
        );
      },
      v = function (e, o) {
        if (!w("head")) return !1;
        if (null !== e() && !t.document.getElementById(o)) {
          var i = t.document.createElement("style");
          (i.id = o), (i.innerHTML = e()), t.document.head.appendChild(i);
        }
      },
      k = function () {
        var t = {},
          e = !1,
          o = 0;
        for (
          "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
          ((e = arguments[0]), o++);
          o < arguments.length;
          o++
        )
          !(function (o) {
            for (var i in o)
              Object.prototype.hasOwnProperty.call(o, i) &&
                (t[i] =
                  e &&
                  "[object Object]" === Object.prototype.toString.call(o[i])
                    ? k(t[i], o[i])
                    : o[i]);
          })(arguments[o]);
        return t;
      },
      C = function (e) {
        var o = t.document.createElement("div");
        return (o.innerHTML = e), o.textContent || o.innerText || "";
      },
      N = function (t, e) {
        return (
          t || (t = "60px"),
          e || (e = "#32c682"),
          '<svg xmlns="http://www.w3.org/2000/svg" stroke="' +
            e +
            '" width="' +
            t +
            '" height="' +
            t +
            '" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'
        );
      },
      S = function (t, e) {
        return (
          t || (t = "60px"),
          e || (e = "#32c682"),
          '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="' +
            e +
            '" width="' +
            t +
            '" height="' +
            t +
            '" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'
        );
      },
      E = function (t, e) {
        return (
          t || (t = "60px"),
          e || (e = "#32c682"),
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
            t +
            '" height="' +
            t +
            '" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:' +
            t +
            ";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:" +
            t +
            ';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="' +
            e +
            '" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'
        );
      },
      O = function (t, e) {
        return (
          t || (t = "60px"),
          e || (e = "#32c682"),
          '<svg xmlns="http://www.w3.org/2000/svg" fill="' +
            e +
            '" width="' +
            t +
            '" height="' +
            t +
            '" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'
        );
      },
      I = function (t, e) {
        return (
          t || (t = "60px"),
          e || (e = "#32c682"),
          '<svg xmlns="http://www.w3.org/2000/svg" fill="' +
            e +
            '" width="' +
            t +
            '" height="' +
            t +
            '" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'
        );
      },
      A = function (t, e) {
        return (
          t || (t = "60px"),
          e || (e = "#32c682"),
          '<svg xmlns="http://www.w3.org/2000/svg" stroke="' +
            e +
            '" width="' +
            t +
            '" height="' +
            t +
            '" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'
        );
      },
      L = function () {
        return '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
      },
      R = 0,
      T = function (o, i, n, a) {
        if (!w("body")) return !1;
        e || H.Notify.init({});
        var r = k(!0, e, {});
        if (
          ("object" == typeof n && !Array.isArray(n)) ||
          ("object" == typeof a && !Array.isArray(a))
        ) {
          var f = {};
          "object" == typeof n ? (f = n) : "object" == typeof a && (f = a),
            (e = k(!0, e, f));
        }
        var d = e[o.toLocaleLowerCase("en")];
        R++,
          "string" != typeof i && (i = "Notiflix " + o),
          e.plainText && (i = C(i)),
          !e.plainText &&
            i.length > e.messageMaxLength &&
            ((e = k(!0, e, { closeButton: !0, messageMaxLength: 150 })),
            (i =
              'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.')),
          i.length > e.messageMaxLength &&
            (i = i.substring(0, e.messageMaxLength) + "..."),
          "shadow" === e.fontAwesomeIconStyle &&
            (d.fontAwesomeIconColor = d.background),
          e.cssAnimation || (e.cssAnimationDuration = 0);
        var p =
          t.document.getElementById(c.wrapID) ||
          t.document.createElement("div");
        if (
          ((p.id = c.wrapID),
          (p.style.width = e.width),
          (p.style.zIndex = e.zindex),
          (p.style.opacity = e.opacity),
          "center-center" === e.position
            ? ((p.style.left = e.distance),
              (p.style.top = e.distance),
              (p.style.right = e.distance),
              (p.style.bottom = e.distance),
              (p.style.margin = "auto"),
              p.classList.add("nx-flex-center-center"),
              (p.style.maxHeight =
                "calc((100vh - " + e.distance + ") - " + e.distance + ")"),
              (p.style.display = "flex"),
              (p.style.flexWrap = "wrap"),
              (p.style.flexDirection = "column"),
              (p.style.justifyContent = "center"),
              (p.style.alignItems = "center"),
              (p.style.pointerEvents = "none"))
            : "center-top" === e.position
            ? ((p.style.left = e.distance),
              (p.style.right = e.distance),
              (p.style.top = e.distance),
              (p.style.bottom = "auto"),
              (p.style.margin = "auto"))
            : "center-bottom" === e.position
            ? ((p.style.left = e.distance),
              (p.style.right = e.distance),
              (p.style.bottom = e.distance),
              (p.style.top = "auto"),
              (p.style.margin = "auto"))
            : "right-bottom" === e.position
            ? ((p.style.right = e.distance),
              (p.style.bottom = e.distance),
              (p.style.top = "auto"),
              (p.style.left = "auto"))
            : "left-top" === e.position
            ? ((p.style.left = e.distance),
              (p.style.top = e.distance),
              (p.style.right = "auto"),
              (p.style.bottom = "auto"))
            : "left-bottom" === e.position
            ? ((p.style.left = e.distance),
              (p.style.bottom = e.distance),
              (p.style.top = "auto"),
              (p.style.right = "auto"))
            : ((p.style.right = e.distance),
              (p.style.top = e.distance),
              (p.style.left = "auto"),
              (p.style.bottom = "auto")),
          e.backOverlay)
        ) {
          var m =
            t.document.getElementById(c.overlayID) ||
            t.document.createElement("div");
          (m.id = c.overlayID),
            (m.style.width = "100%"),
            (m.style.height = "100%"),
            (m.style.position = "fixed"),
            (m.style.zIndex = e.zindex - 1),
            (m.style.left = 0),
            (m.style.top = 0),
            (m.style.right = 0),
            (m.style.bottom = 0),
            (m.style.background = d.backOverlayColor || e.backOverlayColor),
            (m.className = e.cssAnimation ? "nx-with-animation" : ""),
            (m.style.animationDuration = e.cssAnimation
              ? e.cssAnimationDuration + "ms"
              : ""),
            t.document.getElementById(c.overlayID) ||
              t.document.body.appendChild(m);
        }
        t.document.getElementById(c.wrapID) || t.document.body.appendChild(p);
        var u = t.document.createElement("div");
        (u.id = e.ID + "-" + R),
          (u.className =
            e.className +
            " " +
            d.childClassName +
            " " +
            (e.cssAnimation ? "nx-with-animation" : "") +
            " " +
            (e.useIcon ? "nx-with-icon" : "") +
            " nx-" +
            e.cssAnimationStyle +
            " " +
            (e.closeButton && "function" != typeof n
              ? "nx-with-close-button"
              : "") +
            " " +
            ("function" == typeof n ? "nx-with-callback" : "") +
            " " +
            (e.clickToClose ? "nx-notify-click-to-close" : "")),
          (u.style.fontSize = e.fontSize),
          (u.style.color = d.textColor),
          (u.style.background = d.background),
          (u.style.borderRadius = e.borderRadius),
          (u.style.pointerEvents = "all"),
          e.rtl && (u.setAttribute("dir", "rtl"), u.classList.add("nx-rtl-on")),
          (u.style.fontFamily = '"' + e.fontFamily + '", ' + s),
          e.cssAnimation &&
            (u.style.animationDuration = e.cssAnimationDuration + "ms");
        var h = "";
        if (
          (e.closeButton &&
            "function" != typeof n &&
            (h =
              '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' +
              d.notiflixIconColor +
              '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),
          e.useIcon)
        ) {
          if (e.useFontAwesome)
            u.innerHTML =
              '<i style="color:' +
              d.fontAwesomeIconColor +
              "; font-size:" +
              e.fontAwesomeIconSize +
              ';" class="nx-message-icon nx-message-icon-fa ' +
              d.fontAwesomeClassName +
              " " +
              ("shadow" === e.fontAwesomeIconStyle
                ? "nx-message-icon-fa-shadow"
                : "nx-message-icon-fa-basic") +
              '"></i><span class="nx-message nx-with-icon">' +
              i +
              "</span>" +
              (e.closeButton ? h : "");
          else {
            var g = "";
            o === l.Success
              ? (g =
                  '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' +
                  d.notiflixIconColor +
                  '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>')
              : o === l.Failure
              ? (g =
                  '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' +
                  d.notiflixIconColor +
                  '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>')
              : o === l.Warning
              ? (g =
                  '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' +
                  d.notiflixIconColor +
                  '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>')
              : o === l.Info &&
                (g =
                  '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' +
                  d.notiflixIconColor +
                  '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),
              (u.innerHTML =
                g +
                '<span class="nx-message nx-with-icon">' +
                i +
                "</span>" +
                (e.closeButton ? h : ""));
          }
        } else
          u.innerHTML =
            '<span class="nx-message">' +
            i +
            "</span>" +
            (e.closeButton ? h : "");
        if ("left-bottom" === e.position || "right-bottom" === e.position) {
          var y = t.document.getElementById(c.wrapID);
          y.insertBefore(u, y.firstChild);
        } else t.document.getElementById(c.wrapID).appendChild(u);
        var x = t.document.getElementById(u.id);
        if (x) {
          var b,
            v,
            N = function () {
              x.classList.add("nx-remove");
              var e = t.document.getElementById(c.overlayID);
              e && 0 >= p.childElementCount && e.classList.add("nx-remove"),
                clearTimeout(b);
            },
            S = function () {
              if (
                (x && null !== x.parentNode && x.parentNode.removeChild(x),
                0 >= p.childElementCount && null !== p.parentNode)
              ) {
                p.parentNode.removeChild(p);
                var e = t.document.getElementById(c.overlayID);
                e && null !== e.parentNode && e.parentNode.removeChild(e);
              }
              clearTimeout(v);
            };
          if (
            (e.closeButton &&
              "function" != typeof n &&
              t.document
                .getElementById(u.id)
                .querySelector("span.nx-close-button")
                .addEventListener("click", function () {
                  N();
                  var t = setTimeout(function () {
                    S(), clearTimeout(t);
                  }, e.cssAnimationDuration);
                }),
            ("function" == typeof n || e.clickToClose) &&
              x.addEventListener("click", function () {
                "function" == typeof n && n(), N();
                var t = setTimeout(function () {
                  S(), clearTimeout(t);
                }, e.cssAnimationDuration);
              }),
            !e.closeButton && "function" != typeof n)
          ) {
            var E = function () {
              (b = setTimeout(function () {
                N();
              }, e.timeout)),
                (v = setTimeout(function () {
                  S();
                }, e.timeout + e.cssAnimationDuration));
            };
            E(),
              e.pauseOnHover &&
                (x.addEventListener("mouseenter", function () {
                  x.classList.add("nx-paused"),
                    clearTimeout(b),
                    clearTimeout(v);
                }),
                x.addEventListener("mouseleave", function () {
                  x.classList.remove("nx-paused"), E();
                }));
          }
        }
        if (e.showOnlyTheLastOne && 0 < R)
          for (
            var O,
              I = t.document.querySelectorAll(
                "[id^=" + e.ID + "-]:not([id=" + e.ID + "-" + R + "])"
              ),
              A = 0;
            A < I.length;
            A++
          )
            null !== (O = I[A]).parentNode && O.parentNode.removeChild(O);
        e = k(!0, e, r);
      },
      z = function () {
        return '[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
      },
      B = function (e, i, n, a, r, l) {
        if (!w("body")) return !1;
        o || H.Report.init({});
        var c,
          p,
          m,
          u,
          h,
          g,
          y,
          x,
          b = {};
        if (
          ("object" == typeof r && !Array.isArray(r)) ||
          ("object" == typeof l && !Array.isArray(l))
        ) {
          var v = {};
          "object" == typeof r ? (v = r) : "object" == typeof l && (v = l),
            (b = k(!0, o, {})),
            (o = k(!0, o, v));
        }
        var N = o[e.toLocaleLowerCase("en")];
        "string" != typeof i && (i = "Notiflix " + e),
          "string" != typeof n &&
            (e === f.Success
              ? (n =
                  '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein')
              : e === f.Failure
              ? (n =
                  '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford')
              : e === f.Warning
              ? (n =
                  '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk')
              : e === f.Info &&
                (n =
                  '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),
          "string" != typeof a && (a = "Okay"),
          o.plainText && ((i = C(i)), (n = C(n)), (a = C(a))),
          o.plainText ||
            (i.length > o.titleMaxLength &&
              ((i = "Possible HTML Tags Error"),
              (n =
                'The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.'),
              (a = "Okay")),
            n.length > o.messageMaxLength &&
              ((i = "Possible HTML Tags Error"),
              (n =
                'The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.'),
              (a = "Okay")),
            a.length > o.buttonMaxLength &&
              ((i = "Possible HTML Tags Error"),
              (n =
                'The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.'),
              (a = "Okay"))),
          i.length > o.titleMaxLength &&
            (i = i.substring(0, o.titleMaxLength) + "..."),
          n.length > o.messageMaxLength &&
            (n = n.substring(0, o.messageMaxLength) + "..."),
          a.length > o.buttonMaxLength &&
            (a = a.substring(0, o.buttonMaxLength) + "..."),
          o.cssAnimation || (o.cssAnimationDuration = 0);
        var S = t.document.createElement("div");
        (S.id = d.ID),
          (S.className = o.className),
          (S.style.zIndex = o.zindex),
          (S.style.borderRadius = o.borderRadius),
          (S.style.fontFamily = '"' + o.fontFamily + '", ' + s),
          o.rtl && (S.setAttribute("dir", "rtl"), S.classList.add("nx-rtl-on")),
          (S.style.display = "flex"),
          (S.style.flexWrap = "wrap"),
          (S.style.flexDirection = "column"),
          (S.style.alignItems = "center"),
          (S.style.justifyContent = "center");
        var E = "",
          O = !0 === o.backOverlayClickToClose;
        o.backOverlay &&
          (E =
            '<div class="' +
            o.className +
            "-overlay" +
            (o.cssAnimation ? " nx-with-animation" : "") +
            (O ? " nx-report-click-to-close" : "") +
            '" style="background:' +
            (N.backOverlayColor || o.backOverlayColor) +
            ";animation-duration:" +
            o.cssAnimationDuration +
            'ms;"></div>');
        var I = "";
        if (
          (e === f.Success
            ? ((c = o.svgSize),
              (p = N.svgColor),
              c || (c = "110px"),
              p || (p = "#32c682"),
              (I =
                '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="' +
                c +
                '" height="' +
                c +
                '" fill="' +
                p +
                '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'))
            : e === f.Failure
            ? ((m = o.svgSize),
              (u = N.svgColor),
              m || (m = "110px"),
              u || (u = "#ff5549"),
              (I =
                '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="' +
                m +
                '" height="' +
                m +
                '" fill="' +
                u +
                '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'))
            : e === f.Warning
            ? ((h = o.svgSize),
              (g = N.svgColor),
              h || (h = "110px"),
              g || (g = "#eebf31"),
              (I =
                '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="' +
                h +
                '" height="' +
                h +
                '" fill="' +
                g +
                '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'))
            : e === f.Info &&
              ((y = o.svgSize),
              (x = N.svgColor),
              y || (y = "110px"),
              x || (x = "#26c0d3"),
              (I =
                '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="' +
                y +
                '" height="' +
                y +
                '" fill="' +
                x +
                '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>')),
          (S.innerHTML =
            E +
            '<div class="' +
            o.className +
            "-content" +
            (o.cssAnimation ? " nx-with-animation " : "") +
            " nx-" +
            o.cssAnimationStyle +
            '" style="width:' +
            o.width +
            "; background:" +
            o.backgroundColor +
            "; animation-duration:" +
            o.cssAnimationDuration +
            'ms;"><div style="width:' +
            o.svgSize +
            "; height:" +
            o.svgSize +
            ';" class="' +
            o.className +
            '-icon">' +
            I +
            '</div><h5 class="' +
            o.className +
            '-title" style="font-weight:500; font-size:' +
            o.titleFontSize +
            "; color:" +
            N.titleColor +
            ';">' +
            i +
            '</h5><p class="' +
            o.className +
            '-message" style="font-size:' +
            o.messageFontSize +
            "; color:" +
            N.messageColor +
            ';">' +
            n +
            '</p><a id="NXReportButton" class="' +
            o.className +
            '-button" style="font-weight:500; font-size:' +
            o.buttonFontSize +
            "; background:" +
            N.buttonBackground +
            "; color:" +
            N.buttonColor +
            ';">' +
            a +
            "</a></div>"),
          !t.document.getElementById(S.id))
        ) {
          t.document.body.appendChild(S);
          var A = function () {
            var e = t.document.getElementById(S.id);
            e.classList.add("nx-remove");
            var i = setTimeout(function () {
              null !== e.parentNode && e.parentNode.removeChild(e),
                clearTimeout(i);
            }, o.cssAnimationDuration);
          };
          t.document
            .getElementById("NXReportButton")
            .addEventListener("click", function () {
              "function" == typeof r && r(), A();
            }),
            E &&
              O &&
              t.document
                .querySelector(".nx-report-click-to-close")
                .addEventListener("click", function () {
                  A();
                });
        }
        o = k(!0, o, b);
      },
      D = function () {
        return '[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
      },
      M = function (e, o, n, a, r, l, c, f, d) {
        if (!w("body")) return !1;
        i || H.Confirm.init({});
        var u = k(!0, i, {});
        "object" != typeof d || Array.isArray(d) || (i = k(!0, i, d)),
          "string" != typeof o && (o = "Notiflix Confirm"),
          "string" != typeof n && (n = "Do you agree with me?"),
          "string" != typeof r && (r = "Yes"),
          "string" != typeof l && (l = "No"),
          "function" != typeof c && (c = void 0),
          "function" != typeof f && (f = void 0),
          i.plainText && ((o = C(o)), (n = C(n)), (r = C(r)), (l = C(l))),
          i.plainText ||
            (o.length > i.titleMaxLength &&
              ((o = "Possible HTML Tags Error"),
              (n =
                'The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.'),
              (r = "Okay"),
              (l = "...")),
            n.length > i.messageMaxLength &&
              ((o = "Possible HTML Tags Error"),
              (n =
                'The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.'),
              (r = "Okay"),
              (l = "...")),
            (r.length || l.length) > i.buttonsMaxLength &&
              ((o = "Possible HTML Tags Error"),
              (n =
                'The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.'),
              (r = "Okay"),
              (l = "..."))),
          o.length > i.titleMaxLength &&
            (o = o.substring(0, i.titleMaxLength) + "..."),
          n.length > i.messageMaxLength &&
            (n = n.substring(0, i.messageMaxLength) + "..."),
          r.length > i.buttonsMaxLength &&
            (r = r.substring(0, i.buttonsMaxLength) + "..."),
          l.length > i.buttonsMaxLength &&
            (l = l.substring(0, i.buttonsMaxLength) + "..."),
          i.cssAnimation || (i.cssAnimationDuration = 0);
        var h = t.document.createElement("div");
        (h.id = m.ID),
          (h.className =
            i.className +
            (i.cssAnimation
              ? " nx-with-animation nx-" + i.cssAnimationStyle
              : "")),
          (h.style.zIndex = i.zindex),
          (h.style.padding = i.distance),
          i.rtl && (h.setAttribute("dir", "rtl"), h.classList.add("nx-rtl-on"));
        var g = "string" == typeof i.position ? i.position.trim() : "center";
        h.classList.add("nx-position-" + g),
          (h.style.fontFamily = '"' + i.fontFamily + '", ' + s);
        var y = "";
        i.backOverlay &&
          (y =
            '<div class="' +
            i.className +
            "-overlay" +
            (i.cssAnimation ? " nx-with-animation" : "") +
            '" style="background:' +
            i.backOverlayColor +
            ";animation-duration:" +
            i.cssAnimationDuration +
            'ms;"></div>');
        var x = "";
        "function" == typeof c &&
          (x =
            '<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:' +
            i.cancelButtonColor +
            ";background:" +
            i.cancelButtonBackground +
            ";font-size:" +
            i.buttonsFontSize +
            ';">' +
            l +
            "</a>");
        var b = "",
          v = null,
          N = void 0;
        if (e === p.Ask || e === p.Prompt) {
          v = a || "";
          var S =
            e === p.Ask
              ? Math.ceil(1.5 * v.length)
              : 200 < v.length
              ? Math.ceil(1.5 * v.length)
              : 250;
          b =
            '<div><input id="NXConfirmValidationInput" type="text" ' +
            (e === p.Prompt ? 'value="' + v + '"' : "") +
            ' maxlength="' +
            S +
            '" style="font-size:' +
            i.messageFontSize +
            ";border-radius: " +
            i.borderRadius +
            ';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>';
        }
        if (
          ((h.innerHTML =
            y +
            '<div class="' +
            i.className +
            '-content" style="width:' +
            i.width +
            "; background:" +
            i.backgroundColor +
            "; animation-duration:" +
            i.cssAnimationDuration +
            "ms; border-radius: " +
            i.borderRadius +
            ';"><div class="' +
            i.className +
            '-head"><h5 style="color:' +
            i.titleColor +
            ";font-size:" +
            i.titleFontSize +
            ';">' +
            o +
            '</h5><div style="color:' +
            i.messageColor +
            ";font-size:" +
            i.messageFontSize +
            ';">' +
            n +
            b +
            '</div></div><div class="' +
            i.className +
            '-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok' +
            ("function" == typeof c ? "" : " nx-full") +
            '" style="color:' +
            i.okButtonColor +
            ";background:" +
            i.okButtonBackground +
            ";font-size:" +
            i.buttonsFontSize +
            ';">' +
            r +
            "</a>" +
            x +
            "</div></div>"),
          !t.document.getElementById(h.id))
        ) {
          t.document.body.appendChild(h);
          var E = t.document.getElementById(h.id),
            O = t.document.getElementById("NXConfirmButtonOk"),
            I = t.document.getElementById("NXConfirmValidationInput");
          I &&
            (I.focus(),
            I.setSelectionRange(0, (I.value || "").length),
            I.addEventListener("keyup", function (t) {
              var o = t.target.value;
              e === p.Ask && o !== v
                ? (t.preventDefault(),
                  I.classList.add("nx-validation-failure"),
                  I.classList.remove("nx-validation-success"))
                : (e === p.Ask &&
                    (I.classList.remove("nx-validation-failure"),
                    I.classList.add("nx-validation-success")),
                  ("enter" === (t.key || "").toLocaleLowerCase("en") ||
                    13 === t.keyCode) &&
                    O.dispatchEvent(new Event("click")));
            })),
            O.addEventListener("click", function (t) {
              if (e === p.Ask && v && I) {
                if ((I.value || "").toString() !== v)
                  return (
                    I.focus(),
                    I.classList.add("nx-validation-failure"),
                    t.stopPropagation(),
                    t.preventDefault(),
                    (t.returnValue = !1),
                    (t.cancelBubble = !0),
                    !1
                  );
                I.classList.remove("nx-validation-failure");
              }
              "function" == typeof c &&
                (e === p.Prompt && I && (N = I.value || ""), c(N)),
                E.classList.add("nx-remove");
              var o = setTimeout(function () {
                null !== E.parentNode &&
                  (E.parentNode.removeChild(E), clearTimeout(o));
              }, i.cssAnimationDuration);
            }),
            "function" == typeof c &&
              t.document
                .getElementById("NXConfirmButtonCancel")
                .addEventListener("click", function () {
                  "function" == typeof f &&
                    (e === p.Prompt && I && (N = I.value || ""), f(N)),
                    E.classList.add("nx-remove");
                  var t = setTimeout(function () {
                    null !== E.parentNode &&
                      (E.parentNode.removeChild(E), clearTimeout(t));
                  }, i.cssAnimationDuration);
                });
        }
        i = k(!0, i, u);
      },
      P = function () {
        return '[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}';
      },
      W = function (e, o, i, a, r) {
        if (!w("body")) return !1;
        n || H.Loading.init({});
        var l = k(!0, n, {});
        if (
          ("object" == typeof o && !Array.isArray(o)) ||
          ("object" == typeof i && !Array.isArray(i))
        ) {
          var c = {};
          "object" == typeof o ? (c = o) : "object" == typeof i && (c = i),
            (n = k(!0, n, c));
        }
        var f = "";
        if (("string" == typeof o && 0 < o.length && (f = o), a)) {
          f =
            f.length > n.messageMaxLength
              ? C(f).toString().substring(0, n.messageMaxLength) + "..."
              : C(f).toString();
          var d,
            p,
            m = "";
          0 < f.length &&
            (m =
              '<p id="' +
              n.messageID +
              '" class="nx-loading-message" style="color:' +
              n.messageColor +
              ";font-size:" +
              n.messageFontSize +
              ';">' +
              f +
              "</p>"),
            n.cssAnimation || (n.cssAnimationDuration = 0);
          var g = "";
          if (e === u.Standard) g = N(n.svgSize, n.svgColor);
          else if (e === u.Hourglass) g = S(n.svgSize, n.svgColor);
          else if (e === u.Circle) g = E(n.svgSize, n.svgColor);
          else if (e === u.Arrows) g = O(n.svgSize, n.svgColor);
          else if (e === u.Dots) g = I(n.svgSize, n.svgColor);
          else if (e === u.Pulse) g = A(n.svgSize, n.svgColor);
          else if (
            e === u.Custom &&
            null !== n.customSvgCode &&
            null === n.customSvgUrl
          )
            g = n.customSvgCode || "";
          else if (
            e === u.Custom &&
            null !== n.customSvgUrl &&
            null === n.customSvgCode
          )
            g =
              '<img class="nx-custom-loading-icon" width="' +
              n.svgSize +
              '" height="' +
              n.svgSize +
              '" src="' +
              n.customSvgUrl +
              '" alt="Notiflix">';
          else {
            if (
              e === u.Custom &&
              (null === n.customSvgUrl || null === n.customSvgCode)
            )
              return (
                x(
                  'You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'
                ),
                !1
              );
            (d = n.svgSize) || (d = "60px"),
              (g =
                '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="' +
                d +
                '" height="' +
                d +
                '" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:#f8f8f8;stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="' +
                (p = "#32c682") +
                '" stroke="' +
                p +
                '" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>');
          }
          var y = parseInt((n.svgSize || "").replace(/[^0-9]/g, "")),
            b = t.innerWidth,
            v = y >= b ? b - 40 + "px" : y + "px",
            L =
              '<div style="width:' +
              v +
              "; height:" +
              v +
              ';" class="' +
              n.className +
              "-icon" +
              (0 < f.length ? " nx-with-message" : "") +
              '">' +
              g +
              "</div>",
            R = t.document.createElement("div");
          (R.id = h.ID),
            (R.className =
              n.className +
              (n.cssAnimation ? " nx-with-animation" : "") +
              (n.clickToClose ? " nx-loading-click-to-close" : "")),
            (R.style.zIndex = n.zindex),
            (R.style.background = n.backgroundColor),
            (R.style.animationDuration = n.cssAnimationDuration + "ms"),
            (R.style.fontFamily = '"' + n.fontFamily + '", ' + s),
            (R.style.display = "flex"),
            (R.style.flexWrap = "wrap"),
            (R.style.flexDirection = "column"),
            (R.style.alignItems = "center"),
            (R.style.justifyContent = "center"),
            n.rtl &&
              (R.setAttribute("dir", "rtl"), R.classList.add("nx-rtl-on")),
            (R.innerHTML = L + m),
            !t.document.getElementById(R.id) &&
              (t.document.body.appendChild(R), n.clickToClose) &&
              t.document
                .getElementById(R.id)
                .addEventListener("click", function () {
                  R.classList.add("nx-remove");
                  var t = setTimeout(function () {
                    null !== R.parentNode &&
                      (R.parentNode.removeChild(R), clearTimeout(t));
                  }, n.cssAnimationDuration);
                });
        } else if (t.document.getElementById(h.ID))
          var T = t.document.getElementById(h.ID),
            z = setTimeout(function () {
              T.classList.add("nx-remove");
              var t = setTimeout(function () {
                null !== T.parentNode &&
                  (T.parentNode.removeChild(T), clearTimeout(t));
              }, n.cssAnimationDuration);
              clearTimeout(z);
            }, r);
        n = k(!0, n, l);
      },
      X = function (e) {
        "string" != typeof e && (e = "");
        var o = t.document.getElementById(h.ID);
        if (o) {
          if (0 < e.length) {
            e =
              e.length > n.messageMaxLength
                ? C(e).substring(0, n.messageMaxLength) + "..."
                : C(e);
            var i = o.getElementsByTagName("p")[0];
            if (i) i.innerHTML = e;
            else {
              var a = t.document.createElement("p");
              (a.id = n.messageID),
                (a.className = "nx-loading-message nx-loading-message-new"),
                (a.style.color = n.messageColor),
                (a.style.fontSize = n.messageFontSize),
                (a.innerHTML = e),
                o.appendChild(a);
            }
          } else x("Where is the new message?");
        }
      },
      F = function () {
        return '[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}';
      },
      j = 0,
      U = function (e, o, i, n, r, l) {
        if (Array.isArray(i)) {
          if (1 > i.length)
            return (
              x(
                "Array of HTMLElements should contains at least one HTMLElement."
              ),
              !1
            );
          L = i;
        } else if (Object.prototype.isPrototypeOf.call(NodeList.prototype, i)) {
          if (1 > i.length)
            return (
              x(
                "NodeListOf<HTMLElement> should contains at least one HTMLElement."
              ),
              !1
            );
          L = Array.prototype.slice.call(i);
        } else {
          if (
            "string" != typeof i ||
            1 > (i || "").length ||
            (1 === (i || "").length &&
              ("#" === (i || "")[0] || "." === (i || "")[0]))
          )
            return (
              x(
                "The selector parameter must be a string and matches a specified CSS selector(s)."
              ),
              !1
            );
          var c = t.document.querySelectorAll(i);
          if (1 > c.length)
            return (
              x(
                'You called the "Notiflix.Block..." function with "' +
                  i +
                  '" selector, but there is no such element(s) in the document.'
              ),
              !1
            );
          L = c;
        }
        a || H.Block.init({});
        var f = k(!0, a, {});
        if (
          ("object" == typeof n && !Array.isArray(n)) ||
          ("object" == typeof r && !Array.isArray(r))
        ) {
          var d = {};
          "object" == typeof n ? (d = n) : "object" == typeof r && (d = r),
            (a = k(!0, a, d));
        }
        var p = "";
        "string" == typeof n && 0 < n.length && (p = n),
          a.cssAnimation || (a.cssAnimationDuration = 0);
        var m = y.className;
        "string" == typeof a.className && (m = a.className.trim());
        var u =
            "number" == typeof a.querySelectorLimit
              ? a.querySelectorLimit
              : 200,
          h = (L || []).length >= u ? u : L.length,
          v = "nx-block-temporary-position";
        if (e) {
          for (
            var L,
              R,
              T = [
                "area",
                "base",
                "br",
                "col",
                "command",
                "embed",
                "hr",
                "img",
                "input",
                "keygen",
                "link",
                "meta",
                "param",
                "source",
                "track",
                "wbr",
                "html",
                "head",
                "title",
                "script",
                "style",
                "iframe",
              ],
              z = 0;
            z < h;
            z++
          )
            if ((R = L[z])) {
              if (-1 < T.indexOf(R.tagName.toLocaleLowerCase("en"))) break;
              var B = R.querySelectorAll("[id^=" + y.ID + "]");
              if (1 > B.length) {
                var D = "";
                o &&
                  (D =
                    o === g.Hourglass
                      ? S(a.svgSize, a.svgColor)
                      : o === g.Circle
                      ? E(a.svgSize, a.svgColor)
                      : o === g.Arrows
                      ? O(a.svgSize, a.svgColor)
                      : o === g.Dots
                      ? I(a.svgSize, a.svgColor)
                      : o === g.Pulse
                      ? A(a.svgSize, a.svgColor)
                      : N(a.svgSize, a.svgColor));
                var M =
                    '<span class="' +
                    m +
                    '-icon" style="width:' +
                    a.svgSize +
                    ";height:" +
                    a.svgSize +
                    ';">' +
                    D +
                    "</span>",
                  P = "";
                0 < p.length &&
                  ((p =
                    p.length > a.messageMaxLength
                      ? C(p).substring(0, a.messageMaxLength) + "..."
                      : C(p)),
                  (P =
                    '<span style="font-size:' +
                    a.messageFontSize +
                    ";color:" +
                    a.messageColor +
                    ';" class="' +
                    m +
                    '-message">' +
                    p +
                    "</span>")),
                  j++;
                var W = t.document.createElement("div");
                (W.id = y.ID + "-" + j),
                  (W.className =
                    m + (a.cssAnimation ? " nx-with-animation" : "")),
                  (W.style.position = a.position),
                  (W.style.zIndex = a.zindex),
                  (W.style.background = a.backgroundColor),
                  (W.style.animationDuration = a.cssAnimationDuration + "ms"),
                  (W.style.fontFamily = '"' + a.fontFamily + '", ' + s),
                  (W.style.display = "flex"),
                  (W.style.flexWrap = "wrap"),
                  (W.style.flexDirection = "column"),
                  (W.style.alignItems = "center"),
                  (W.style.justifyContent = "center"),
                  a.rtl &&
                    (W.setAttribute("dir", "rtl"),
                    W.classList.add("nx-rtl-on")),
                  (W.innerHTML = M + P);
                var X = t.getComputedStyle(R).getPropertyValue("position"),
                  F =
                    "string" == typeof X
                      ? X.toLocaleLowerCase("en")
                      : "relative",
                  U = Math.round(1.25 * parseInt(a.svgSize)) + 40,
                  Y = R.offsetHeight || 0,
                  _ = "";
                U > Y && (_ = "min-height:" + U + "px;");
                var q = "";
                q = R.getAttribute("id")
                  ? "#" + R.getAttribute("id")
                  : R.classList[0]
                  ? "." + R.classList[0]
                  : (R.tagName || "").toLocaleLowerCase("en");
                var $ = "",
                  V =
                    -1 >=
                    ["absolute", "relative", "fixed", "sticky"].indexOf(F);
                if (V || 0 < _.length) {
                  if (!w("head")) return !1;
                  V && ($ = "position:relative!important;");
                  var J =
                      '<style id="Style-' +
                      y.ID +
                      "-" +
                      j +
                      '">' +
                      q +
                      "." +
                      v +
                      "{" +
                      $ +
                      _ +
                      "}</style>",
                    Z = t.document.createRange();
                  Z.selectNode(t.document.head);
                  var K = Z.createContextualFragment(J);
                  t.document.head.appendChild(K), R.classList.add(v);
                }
                R.appendChild(W);
              }
            }
        } else
          var Q = function (e) {
              var o = setTimeout(function () {
                null !== e.parentNode && e.parentNode.removeChild(e);
                var i = e.getAttribute("id"),
                  n = t.document.getElementById("Style-" + i);
                n && null !== n.parentNode && n.parentNode.removeChild(n),
                  clearTimeout(o);
              }, a.cssAnimationDuration);
            },
            G = function (t) {
              if (t && 0 < t.length)
                for (var e, o = 0; o < t.length; o++)
                  (e = t[o]) && (e.classList.add("nx-remove"), Q(e));
              else
                "string" == typeof i
                  ? b(
                      '"Notiflix.Block.remove();" function called with "' +
                        i +
                        '" selector, but this selector does not have a "Block" element to remove.'
                    )
                  : b(
                      '"Notiflix.Block.remove();" function called with "' +
                        i +
                        '", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.'
                    );
            },
            tt = function (t) {
              var e = setTimeout(function () {
                t.classList.remove(v), clearTimeout(e);
              }, a.cssAnimationDuration + 300);
            },
            te = setTimeout(function () {
              for (var t, e = 0; e < h; e++)
                (t = L[e]) &&
                  (tt(t), G((B = t.querySelectorAll("[id^=" + y.ID + "]"))));
              clearTimeout(te);
            }, l);
        a = k(!0, a, f);
      },
      H = {
        Notify: {
          init: function (t) {
            (e = k(!0, c, t)), v(L, "NotiflixNotifyInternalCSS");
          },
          merge: function (t) {
            return e
              ? void (e = k(!0, e, t))
              : (x(
                  "You have to initialize the Notify module before call Merge function."
                ),
                !1);
          },
          success: function (t, e, o) {
            T(l.Success, t, e, o);
          },
          failure: function (t, e, o) {
            T(l.Failure, t, e, o);
          },
          warning: function (t, e, o) {
            T(l.Warning, t, e, o);
          },
          info: function (t, e, o) {
            T(l.Info, t, e, o);
          },
        },
        Report: {
          init: function (t) {
            (o = k(!0, d, t)), v(z, "NotiflixReportInternalCSS");
          },
          merge: function (t) {
            return o
              ? void (o = k(!0, o, t))
              : (x(
                  "You have to initialize the Report module before call Merge function."
                ),
                !1);
          },
          success: function (t, e, o, i, n) {
            B(f.Success, t, e, o, i, n);
          },
          failure: function (t, e, o, i, n) {
            B(f.Failure, t, e, o, i, n);
          },
          warning: function (t, e, o, i, n) {
            B(f.Warning, t, e, o, i, n);
          },
          info: function (t, e, o, i, n) {
            B(f.Info, t, e, o, i, n);
          },
        },
        Confirm: {
          init: function (t) {
            (i = k(!0, m, t)), v(D, "NotiflixConfirmInternalCSS");
          },
          merge: function (t) {
            return i
              ? void (i = k(!0, i, t))
              : (x(
                  "You have to initialize the Confirm module before call Merge function."
                ),
                !1);
          },
          show: function (t, e, o, i, n, a, r) {
            M(p.Show, t, e, null, o, i, n, a, r);
          },
          ask: function (t, e, o, i, n, a, r, s) {
            M(p.Ask, t, e, o, i, n, a, r, s);
          },
          prompt: function (t, e, o, i, n, a, r, s) {
            M(p.Prompt, t, e, o, i, n, a, r, s);
          },
        },
        Loading: {
          init: function (t) {
            (n = k(!0, h, t)), v(P, "NotiflixLoadingInternalCSS");
          },
          merge: function (t) {
            return n
              ? void (n = k(!0, n, t))
              : (x(
                  "You have to initialize the Loading module before call Merge function."
                ),
                !1);
          },
          standard: function (t, e) {
            W(u.Standard, t, e, !0, 0);
          },
          hourglass: function (t, e) {
            W(u.Hourglass, t, e, !0, 0);
          },
          circle: function (t, e) {
            W(u.Circle, t, e, !0, 0);
          },
          arrows: function (t, e) {
            W(u.Arrows, t, e, !0, 0);
          },
          dots: function (t, e) {
            W(u.Dots, t, e, !0, 0);
          },
          pulse: function (t, e) {
            W(u.Pulse, t, e, !0, 0);
          },
          custom: function (t, e) {
            W(u.Custom, t, e, !0, 0);
          },
          notiflix: function (t, e) {
            W(u.Notiflix, t, e, !0, 0);
          },
          remove: function (t) {
            "number" != typeof t && (t = 0), W(null, null, null, !1, t);
          },
          change: function (t) {
            X(t);
          },
        },
        Block: {
          init: function (t) {
            (a = k(!0, y, t)), v(F, "NotiflixBlockInternalCSS");
          },
          merge: function (t) {
            return a
              ? void (a = k(!0, a, t))
              : (x(
                  'You have to initialize the "Notiflix.Block" module before call Merge function.'
                ),
                !1);
          },
          standard: function (t, e, o) {
            U(!0, g.Standard, t, e, o);
          },
          hourglass: function (t, e, o) {
            U(!0, g.Hourglass, t, e, o);
          },
          circle: function (t, e, o) {
            U(!0, g.Circle, t, e, o);
          },
          arrows: function (t, e, o) {
            U(!0, g.Arrows, t, e, o);
          },
          dots: function (t, e, o) {
            U(!0, g.Dots, t, e, o);
          },
          pulse: function (t, e, o) {
            U(!0, g.Pulse, t, e, o);
          },
          remove: function (t, e) {
            "number" != typeof e && (e = 0), U(!1, null, t, null, null, e);
          },
        },
      };
    return "object" == typeof t.Notiflix
      ? k(!0, t.Notiflix, {
          Notify: H.Notify,
          Report: H.Report,
          Confirm: H.Confirm,
          Loading: H.Loading,
          Block: H.Block,
        })
      : {
          Notify: H.Notify,
          Report: H.Report,
          Confirm: H.Confirm,
          Loading: H.Loading,
          Block: H.Block,
        };
  }
),
  e(g).Notify.init({
    width: "280px",
    position: "right-top",
    distance: "10px",
    opacity: 1,
    borderRadius: "5px",
    rtl: !1,
    timeout: 3e3,
    messageMaxLength: 110,
    backOverlay: !1,
    backOverlayColor: "rgba(0,0,0,0.5)",
    plainText: !0,
    showOnlyTheLastOne: !1,
    clickToClose: !1,
    pauseOnHover: !0,
    ID: "NotiflixNotify",
    className: "notiflix-notify",
    zindex: 4001,
    fontFamily: "Quicksand",
    fontSize: "13px",
    cssAnimation: !0,
    cssAnimationDuration: 400,
    cssAnimationStyle: "fade",
    closeButton: !1,
    useIcon: !0,
    useFontAwesome: !1,
    fontAwesomeIconStyle: "basic",
    fontAwesomeIconSize: "34px",
    failure: {
      background: "#ff5549",
      textColor: "#fff",
      childClassName: "notiflix-notify-failure",
      notiflixIconColor: "rgba(0,0,0,0.2)",
      fontAwesomeClassName: "fas fa-times-circle",
      fontAwesomeIconColor: "rgba(0,0,0,0.2)",
      backOverlayColor: "rgba(255,85,73,0.2)",
    },
  });
const { toString: b } = Object.prototype,
  { getPrototypeOf: w } = Object,
  v =
    ((o = Object.create(null)),
    (t) => {
      let e = b.call(t);
      return o[e] || (o[e] = e.slice(8, -1).toLowerCase());
    }),
  k = (t) => ((t = t.toLowerCase()), (e) => v(e) === t),
  C = (t) => (e) => typeof e === t,
  { isArray: N } = Array,
  S = C("undefined"),
  E = k("ArrayBuffer"),
  O = C("string"),
  I = C("function"),
  A = C("number"),
  L = (t) => null !== t && "object" == typeof t,
  R = (t) => {
    if ("object" !== v(t)) return !1;
    let e = w(t);
    return (
      (null === e ||
        e === Object.prototype ||
        null === Object.getPrototypeOf(e)) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  T = k("Date"),
  z = k("File"),
  B = k("Blob"),
  D = k("FileList"),
  M = k("URLSearchParams");
function P(t, e, { allOwnKeys: o = !1 } = {}) {
  let i, n;
  if (null != t) {
    if (("object" != typeof t && (t = [t]), N(t)))
      for (i = 0, n = t.length; i < n; i++) e.call(null, t[i], i, t);
    else {
      let n;
      let a = o ? Object.getOwnPropertyNames(t) : Object.keys(t),
        r = a.length;
      for (i = 0; i < r; i++) (n = a[i]), e.call(null, t[n], n, t);
    }
  }
}
function W(t, e) {
  let o;
  e = e.toLowerCase();
  let i = Object.keys(t),
    n = i.length;
  for (; n-- > 0; ) if (e === (o = i[n]).toLowerCase()) return o;
  return null;
}
("use strict");
const X =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : s,
  F = (t) => !S(t) && t !== X,
  j =
    ((i = "undefined" != typeof Uint8Array && w(Uint8Array)),
    (t) => i && t instanceof i),
  U = k("HTMLFormElement"),
  H = (
    ({ hasOwnProperty: t }) =>
    (e, o) =>
      t.call(e, o)
  )(Object.prototype),
  Y = k("RegExp"),
  _ = (t, e) => {
    let o = Object.getOwnPropertyDescriptors(t),
      i = {};
    P(o, (o, n) => {
      !1 !== e(o, n, t) && (i[n] = o);
    }),
      Object.defineProperties(t, i);
  },
  q = "abcdefghijklmnopqrstuvwxyz",
  $ = "0123456789",
  V = { DIGIT: $, ALPHA: q, ALPHA_DIGIT: q + q.toUpperCase() + $ },
  J = k("AsyncFunction");
var Z = {
  isArray: N,
  isArrayBuffer: E,
  isBuffer: function (t) {
    return (
      null !== t &&
      !S(t) &&
      null !== t.constructor &&
      !S(t.constructor) &&
      I(t.constructor.isBuffer) &&
      t.constructor.isBuffer(t)
    );
  },
  isFormData: (t) => {
    let e;
    return (
      t &&
      (("function" == typeof FormData && t instanceof FormData) ||
        (I(t.append) &&
          ("formdata" === (e = v(t)) ||
            ("object" === e &&
              I(t.toString) &&
              "[object FormData]" === t.toString()))))
    );
  },
  isArrayBufferView: function (t) {
    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
      ? ArrayBuffer.isView(t)
      : t && t.buffer && E(t.buffer);
  },
  isString: O,
  isNumber: A,
  isBoolean: (t) => !0 === t || !1 === t,
  isObject: L,
  isPlainObject: R,
  isUndefined: S,
  isDate: T,
  isFile: z,
  isBlob: B,
  isRegExp: Y,
  isFunction: I,
  isStream: (t) => L(t) && I(t.pipe),
  isURLSearchParams: M,
  isTypedArray: j,
  isFileList: D,
  forEach: P,
  merge: function t() {
    let { caseless: e } = (F(this) && this) || {},
      o = {},
      i = (i, n) => {
        let a = (e && W(o, n)) || n;
        R(o[a]) && R(i)
          ? (o[a] = t(o[a], i))
          : R(i)
          ? (o[a] = t({}, i))
          : N(i)
          ? (o[a] = i.slice())
          : (o[a] = i);
      };
    for (let t = 0, e = arguments.length; t < e; t++)
      arguments[t] && P(arguments[t], i);
    return o;
  },
  extend: (t, e, o, { allOwnKeys: i } = {}) => (
    P(
      e,
      (e, i) => {
        o && I(e) ? (t[i] = x(e, o)) : (t[i] = e);
      },
      { allOwnKeys: i }
    ),
    t
  ),
  trim: (t) =>
    t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
  stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
  inherits: (t, e, o, i) => {
    (t.prototype = Object.create(e.prototype, i)),
      (t.prototype.constructor = t),
      Object.defineProperty(t, "super", { value: e.prototype }),
      o && Object.assign(t.prototype, o);
  },
  toFlatObject: (t, e, o, i) => {
    let n, a, r;
    let s = {};
    if (((e = e || {}), null == t)) return e;
    do {
      for (a = (n = Object.getOwnPropertyNames(t)).length; a-- > 0; )
        (r = n[a]), (!i || i(r, t, e)) && !s[r] && ((e[r] = t[r]), (s[r] = !0));
      t = !1 !== o && w(t);
    } while (t && (!o || o(t, e)) && t !== Object.prototype);
    return e;
  },
  kindOf: v,
  kindOfTest: k,
  endsWith: (t, e, o) => {
    (t = String(t)),
      (void 0 === o || o > t.length) && (o = t.length),
      (o -= e.length);
    let i = t.indexOf(e, o);
    return -1 !== i && i === o;
  },
  toArray: (t) => {
    if (!t) return null;
    if (N(t)) return t;
    let e = t.length;
    if (!A(e)) return null;
    let o = Array(e);
    for (; e-- > 0; ) o[e] = t[e];
    return o;
  },
  forEachEntry: (t, e) => {
    let o;
    let i = t && t[Symbol.iterator],
      n = i.call(t);
    for (; (o = n.next()) && !o.done; ) {
      let i = o.value;
      e.call(t, i[0], i[1]);
    }
  },
  matchAll: (t, e) => {
    let o;
    let i = [];
    for (; null !== (o = t.exec(e)); ) i.push(o);
    return i;
  },
  isHTMLForm: U,
  hasOwnProperty: H,
  hasOwnProp: H,
  reduceDescriptors: _,
  freezeMethods: (t) => {
    _(t, (e, o) => {
      if (I(t) && -1 !== ["arguments", "caller", "callee"].indexOf(o))
        return !1;
      let i = t[o];
      if (I(i)) {
        if (((e.enumerable = !1), "writable" in e)) {
          e.writable = !1;
          return;
        }
        e.set ||
          (e.set = () => {
            throw Error("Can not rewrite read-only method '" + o + "'");
          });
      }
    });
  },
  toObjectSet: (t, e) => {
    let o = {};
    return (
      ((t) => {
        t.forEach((t) => {
          o[t] = !0;
        });
      })(N(t) ? t : String(t).split(e)),
      o
    );
  },
  toCamelCase: (t) =>
    t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, o) {
      return e.toUpperCase() + o;
    }),
  noop: () => {},
  toFiniteNumber: (t, e) => (Number.isFinite((t = +t)) ? t : e),
  findKey: W,
  global: X,
  isContextDefined: F,
  ALPHABET: V,
  generateString: (t = 16, e = V.ALPHA_DIGIT) => {
    let o = "",
      { length: i } = e;
    for (; t--; ) o += e[(Math.random() * i) | 0];
    return o;
  },
  isSpecCompliantForm: function (t) {
    return !!(
      t &&
      I(t.append) &&
      "FormData" === t[Symbol.toStringTag] &&
      t[Symbol.iterator]
    );
  },
  toJSONObject: (t) => {
    let e = Array(10),
      o = (t, i) => {
        if (L(t)) {
          if (e.indexOf(t) >= 0) return;
          if (!("toJSON" in t)) {
            e[i] = t;
            let n = N(t) ? [] : {};
            return (
              P(t, (t, e) => {
                let a = o(t, i + 1);
                S(a) || (n[e] = a);
              }),
              (e[i] = void 0),
              n
            );
          }
        }
        return t;
      };
    return o(t, 0);
  },
  isAsyncFn: J,
  isThenable: (t) => t && (L(t) || I(t)) && I(t.then) && I(t.catch),
};
function K(t, e, o, i, n) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    o && (this.config = o),
    i && (this.request = i),
    n && (this.response = n);
}
Z.inherits(K, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: Z.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
("use strict");
("use strict");
const Q = K.prototype,
  G = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  G[t] = { value: t };
}),
  Object.defineProperties(K, G),
  Object.defineProperty(Q, "isAxiosError", { value: !0 }),
  (K.from = (t, e, o, i, n, a) => {
    let r = Object.create(Q);
    return (
      Z.toFlatObject(
        t,
        r,
        function (t) {
          return t !== Error.prototype;
        },
        (t) => "isAxiosError" !== t
      ),
      K.call(r, t.message, e, o, i, n),
      (r.cause = t),
      (r.name = t.name),
      a && Object.assign(r, a),
      r
    );
  }),
  (n = function (t) {
    for (
      var e, o = t.length, i = o % 3, n = [], a = 0, r = o - i;
      a < r;
      a += 16383
    )
      n.push(
        (function (t, e, o) {
          for (var i, n = [], a = e; a < o; a += 3)
            n.push(
              tt[
                ((i =
                  ((t[a] << 16) & 16711680) +
                  ((t[a + 1] << 8) & 65280) +
                  (255 & t[a + 2])) >>
                  18) &
                  63
              ] +
                tt[(i >> 12) & 63] +
                tt[(i >> 6) & 63] +
                tt[63 & i]
            );
          return n.join("");
        })(t, a, a + 16383 > r ? r : a + 16383)
      );
    return (
      1 === i
        ? n.push(tt[(e = t[o - 1]) >> 2] + tt[(e << 4) & 63] + "==")
        : 2 === i &&
          n.push(
            tt[(e = (t[o - 2] << 8) + t[o - 1]) >> 10] +
              tt[(e >> 4) & 63] +
              tt[(e << 2) & 63] +
              "="
          ),
      n.join("")
    );
  });
for (
  var tt = [],
    te = [],
    to = "undefined" != typeof Uint8Array ? Uint8Array : Array,
    ti = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    tn = 0,
    ta = ti.length;
  tn < ta;
  ++tn
)
  (tt[tn] = ti[tn]), (te[ti.charCodeAt(tn)] = tn);
(te["-".charCodeAt(0)] = 62),
  (te["_".charCodeAt(0)] = 63),
  (a = function (t, e, o, i, n) {
    var a,
      r,
      s = 8 * n - i - 1,
      l = (1 << s) - 1,
      c = l >> 1,
      f = -7,
      d = o ? n - 1 : 0,
      p = o ? -1 : 1,
      m = t[e + d];
    for (
      d += p, a = m & ((1 << -f) - 1), m >>= -f, f += s;
      f > 0;
      a = 256 * a + t[e + d], d += p, f -= 8
    );
    for (
      r = a & ((1 << -f) - 1), a >>= -f, f += i;
      f > 0;
      r = 256 * r + t[e + d], d += p, f -= 8
    );
    if (0 === a) a = 1 - c;
    else {
      if (a === l) return r ? NaN : (m ? -1 : 1) * (1 / 0);
      (r += Math.pow(2, i)), (a -= c);
    }
    return (m ? -1 : 1) * r * Math.pow(2, a - i);
  }),
  (r = function (t, e, o, i, n, a) {
    var r,
      s,
      l,
      c = 8 * a - n - 1,
      f = (1 << c) - 1,
      d = f >> 1,
      p = 23 === n ? 5960464477539062e-23 : 0,
      m = i ? 0 : a - 1,
      u = i ? 1 : -1,
      h = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
    for (
      isNaN((e = Math.abs(e))) || e === 1 / 0
        ? ((s = isNaN(e) ? 1 : 0), (r = f))
        : ((r = Math.floor(Math.log(e) / Math.LN2)),
          e * (l = Math.pow(2, -r)) < 1 && (r--, (l *= 2)),
          r + d >= 1 ? (e += p / l) : (e += p * Math.pow(2, 1 - d)),
          e * l >= 2 && (r++, (l /= 2)),
          r + d >= f
            ? ((s = 0), (r = f))
            : r + d >= 1
            ? ((s = (e * l - 1) * Math.pow(2, n)), (r += d))
            : ((s = e * Math.pow(2, d - 1) * Math.pow(2, n)), (r = 0)));
      n >= 8;
      t[o + m] = 255 & s, m += u, s /= 256, n -= 8
    );
    for (
      r = (r << n) | s, c += n;
      c > 0;
      t[o + m] = 255 & r, m += u, r /= 256, c -= 8
    );
    t[o + m - u] |= 128 * h;
  });
const tr =
  "function" == typeof Symbol && "function" == typeof Symbol.for
    ? Symbol.for("nodejs.util.inspect.custom")
    : null;
function ts(t) {
  if (t > 2147483647)
    throw RangeError('The value "' + t + '" is invalid for option "size"');
  let e = new Uint8Array(t);
  return Object.setPrototypeOf(e, tl.prototype), e;
}
function tl(t, e, o) {
  if ("number" == typeof t) {
    if ("string" == typeof e)
      throw TypeError(
        'The "string" argument must be of type string. Received type number'
      );
    return td(t);
  }
  return tc(t, e, o);
}
function tc(t, e, o) {
  if ("string" == typeof t)
    return (function (t, e) {
      if (
        (("string" != typeof e || "" === e) && (e = "utf8"), !tl.isEncoding(e))
      )
        throw TypeError("Unknown encoding: " + e);
      let o = 0 | th(t, e),
        i = ts(o),
        n = i.write(t, e);
      return n !== o && (i = i.slice(0, n)), i;
    })(t, e);
  if (ArrayBuffer.isView(t))
    return (function (t) {
      if (tW(t, Uint8Array)) {
        let e = new Uint8Array(t);
        return tm(e.buffer, e.byteOffset, e.byteLength);
      }
      return tp(t);
    })(t);
  if (null == t)
    throw TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof t
    );
  if (
    tW(t, ArrayBuffer) ||
    (t && tW(t.buffer, ArrayBuffer)) ||
    ("undefined" != typeof SharedArrayBuffer &&
      (tW(t, SharedArrayBuffer) || (t && tW(t.buffer, SharedArrayBuffer))))
  )
    return tm(t, e, o);
  if ("number" == typeof t)
    throw TypeError(
      'The "value" argument must not be of type number. Received type number'
    );
  let i = t.valueOf && t.valueOf();
  if (null != i && i !== t) return tl.from(i, e, o);
  let n = (function (t) {
    var e;
    if (tl.isBuffer(t)) {
      let e = 0 | tu(t.length),
        o = ts(e);
      return 0 === o.length || t.copy(o, 0, 0, e), o;
    }
    return void 0 !== t.length
      ? "number" != typeof t.length || (e = t.length) != e
        ? ts(0)
        : tp(t)
      : "Buffer" === t.type && Array.isArray(t.data)
      ? tp(t.data)
      : void 0;
  })(t);
  if (n) return n;
  if (
    "undefined" != typeof Symbol &&
    null != Symbol.toPrimitive &&
    "function" == typeof t[Symbol.toPrimitive]
  )
    return tl.from(t[Symbol.toPrimitive]("string"), e, o);
  throw TypeError(
    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
      typeof t
  );
}
function tf(t) {
  if ("number" != typeof t)
    throw TypeError('"size" argument must be of type number');
  if (t < 0)
    throw RangeError('The value "' + t + '" is invalid for option "size"');
}
function td(t) {
  return tf(t), ts(t < 0 ? 0 : 0 | tu(t));
}
function tp(t) {
  let e = t.length < 0 ? 0 : 0 | tu(t.length),
    o = ts(e);
  for (let i = 0; i < e; i += 1) o[i] = 255 & t[i];
  return o;
}
function tm(t, e, o) {
  let i;
  if (e < 0 || t.byteLength < e)
    throw RangeError('"offset" is outside of buffer bounds');
  if (t.byteLength < e + (o || 0))
    throw RangeError('"length" is outside of buffer bounds');
  return (
    Object.setPrototypeOf(
      (i =
        void 0 === e && void 0 === o
          ? new Uint8Array(t)
          : void 0 === o
          ? new Uint8Array(t, e)
          : new Uint8Array(t, e, o)),
      tl.prototype
    ),
    i
  );
}
function tu(t) {
  if (t >= 2147483647)
    throw RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
    );
  return 0 | t;
}
function th(t, e) {
  if (tl.isBuffer(t)) return t.length;
  if (ArrayBuffer.isView(t) || tW(t, ArrayBuffer)) return t.byteLength;
  if ("string" != typeof t)
    throw TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
        typeof t
    );
  let o = t.length,
    i = arguments.length > 2 && !0 === arguments[2];
  if (!i && 0 === o) return 0;
  let n = !1;
  for (;;)
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return o;
      case "utf8":
      case "utf-8":
        return tD(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * o;
      case "hex":
        return o >>> 1;
      case "base64":
        return tM(t).length;
      default:
        if (n) return i ? -1 : tD(t).length;
        (e = ("" + e).toLowerCase()), (n = !0);
    }
}
function tg(t, e, o) {
  let i = !1;
  if (
    ((void 0 === e || e < 0) && (e = 0),
    e > this.length ||
      ((void 0 === o || o > this.length) && (o = this.length),
      o <= 0 || (o >>>= 0) <= (e >>>= 0)))
  )
    return "";
  for (t || (t = "utf8"); ; )
    switch (t) {
      case "hex":
        return (function (t, e, o) {
          let i = t.length;
          (!e || e < 0) && (e = 0), (!o || o < 0 || o > i) && (o = i);
          let n = "";
          for (let i = e; i < o; ++i) n += tX[t[i]];
          return n;
        })(this, e, o);
      case "utf8":
      case "utf-8":
        return tw(this, e, o);
      case "ascii":
        return (function (t, e, o) {
          let i = "";
          o = Math.min(t.length, o);
          for (let n = e; n < o; ++n) i += String.fromCharCode(127 & t[n]);
          return i;
        })(this, e, o);
      case "latin1":
      case "binary":
        return (function (t, e, o) {
          let i = "";
          o = Math.min(t.length, o);
          for (let n = e; n < o; ++n) i += String.fromCharCode(t[n]);
          return i;
        })(this, e, o);
      case "base64":
        var a, r;
        return (
          (a = e),
          (r = o),
          0 === a && r === this.length ? n(this) : n(this.slice(a, r))
        );
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return (function (t, e, o) {
          let i = t.slice(e, o),
            n = "";
          for (let t = 0; t < i.length - 1; t += 2)
            n += String.fromCharCode(i[t] + 256 * i[t + 1]);
          return n;
        })(this, e, o);
      default:
        if (i) throw TypeError("Unknown encoding: " + t);
        (t = (t + "").toLowerCase()), (i = !0);
    }
}
function ty(t, e, o) {
  let i = t[e];
  (t[e] = t[o]), (t[o] = i);
}
function tx(t, e, o, i, n) {
  var a;
  if (0 === t.length) return -1;
  if (
    ("string" == typeof o
      ? ((i = o), (o = 0))
      : o > 2147483647
      ? (o = 2147483647)
      : o < -2147483648 && (o = -2147483648),
    (a = o = +o) != a && (o = n ? 0 : t.length - 1),
    o < 0 && (o = t.length + o),
    o >= t.length)
  ) {
    if (n) return -1;
    o = t.length - 1;
  } else if (o < 0) {
    if (!n) return -1;
    o = 0;
  }
  if (("string" == typeof e && (e = tl.from(e, i)), tl.isBuffer(e)))
    return 0 === e.length ? -1 : tb(t, e, o, i, n);
  if ("number" == typeof e)
    return ((e &= 255), "function" == typeof Uint8Array.prototype.indexOf)
      ? n
        ? Uint8Array.prototype.indexOf.call(t, e, o)
        : Uint8Array.prototype.lastIndexOf.call(t, e, o)
      : tb(t, [e], o, i, n);
  throw TypeError("val must be string, number or Buffer");
}
function tb(t, e, o, i, n) {
  let a,
    r = 1,
    s = t.length,
    l = e.length;
  if (
    void 0 !== i &&
    ("ucs2" === (i = String(i).toLowerCase()) ||
      "ucs-2" === i ||
      "utf16le" === i ||
      "utf-16le" === i)
  ) {
    if (t.length < 2 || e.length < 2) return -1;
    (r = 2), (s /= 2), (l /= 2), (o /= 2);
  }
  function c(t, e) {
    return 1 === r ? t[e] : t.readUInt16BE(e * r);
  }
  if (n) {
    let i = -1;
    for (a = o; a < s; a++)
      if (c(t, a) === c(e, -1 === i ? 0 : a - i)) {
        if ((-1 === i && (i = a), a - i + 1 === l)) return i * r;
      } else -1 !== i && (a -= a - i), (i = -1);
  } else
    for (o + l > s && (o = s - l), a = o; a >= 0; a--) {
      let o = !0;
      for (let i = 0; i < l; i++)
        if (c(t, a + i) !== c(e, i)) {
          o = !1;
          break;
        }
      if (o) return a;
    }
  return -1;
}
function tw(t, e, o) {
  o = Math.min(t.length, o);
  let i = [],
    n = e;
  for (; n < o; ) {
    let e = t[n],
      a = null,
      r = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
    if (n + r <= o) {
      let o, i, s, l;
      switch (r) {
        case 1:
          e < 128 && (a = e);
          break;
        case 2:
          (192 & (o = t[n + 1])) == 128 &&
            (l = ((31 & e) << 6) | (63 & o)) > 127 &&
            (a = l);
          break;
        case 3:
          (o = t[n + 1]),
            (i = t[n + 2]),
            (192 & o) == 128 &&
              (192 & i) == 128 &&
              (l = ((15 & e) << 12) | ((63 & o) << 6) | (63 & i)) > 2047 &&
              (l < 55296 || l > 57343) &&
              (a = l);
          break;
        case 4:
          (o = t[n + 1]),
            (i = t[n + 2]),
            (s = t[n + 3]),
            (192 & o) == 128 &&
              (192 & i) == 128 &&
              (192 & s) == 128 &&
              (l =
                ((15 & e) << 18) |
                ((63 & o) << 12) |
                ((63 & i) << 6) |
                (63 & s)) > 65535 &&
              l < 1114112 &&
              (a = l);
      }
    }
    null === a
      ? ((a = 65533), (r = 1))
      : a > 65535 &&
        ((a -= 65536),
        i.push(((a >>> 10) & 1023) | 55296),
        (a = 56320 | (1023 & a))),
      i.push(a),
      (n += r);
  }
  return (function (t) {
    let e = t.length;
    if (e <= 4096) return String.fromCharCode.apply(String, t);
    let o = "",
      i = 0;
    for (; i < e; )
      o += String.fromCharCode.apply(String, t.slice(i, (i += 4096)));
    return o;
  })(i);
}
function tv(t, e, o) {
  if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
  if (t + e > o) throw RangeError("Trying to access beyond buffer length");
}
function tk(t, e, o, i, n, a) {
  if (!tl.isBuffer(t))
    throw TypeError('"buffer" argument must be a Buffer instance');
  if (e > n || e < a) throw RangeError('"value" argument is out of bounds');
  if (o + i > t.length) throw RangeError("Index out of range");
}
function tC(t, e, o, i, n) {
  tR(e, i, n, t, o, 7);
  let a = Number(e & BigInt(4294967295));
  (t[o++] = a),
    (a >>= 8),
    (t[o++] = a),
    (a >>= 8),
    (t[o++] = a),
    (a >>= 8),
    (t[o++] = a);
  let r = Number((e >> BigInt(32)) & BigInt(4294967295));
  return (
    (t[o++] = r),
    (r >>= 8),
    (t[o++] = r),
    (r >>= 8),
    (t[o++] = r),
    (r >>= 8),
    (t[o++] = r),
    o
  );
}
function tN(t, e, o, i, n) {
  tR(e, i, n, t, o, 7);
  let a = Number(e & BigInt(4294967295));
  (t[o + 7] = a),
    (a >>= 8),
    (t[o + 6] = a),
    (a >>= 8),
    (t[o + 5] = a),
    (a >>= 8),
    (t[o + 4] = a);
  let r = Number((e >> BigInt(32)) & BigInt(4294967295));
  return (
    (t[o + 3] = r),
    (r >>= 8),
    (t[o + 2] = r),
    (r >>= 8),
    (t[o + 1] = r),
    (r >>= 8),
    (t[o] = r),
    o + 8
  );
}
function tS(t, e, o, i, n, a) {
  if (o + i > t.length || o < 0) throw RangeError("Index out of range");
}
function tE(t, e, o, i, n) {
  return (
    (e = +e),
    (o >>>= 0),
    n || tS(t, e, o, 4, 34028234663852886e22, -34028234663852886e22),
    r(t, e, o, i, 23, 4),
    o + 4
  );
}
function tO(t, e, o, i, n) {
  return (
    (e = +e),
    (o >>>= 0),
    n || tS(t, e, o, 8, 17976931348623157e292, -17976931348623157e292),
    r(t, e, o, i, 52, 8),
    o + 8
  );
}
(tl.TYPED_ARRAY_SUPPORT = (function () {
  try {
    let t = new Uint8Array(1),
      e = {
        foo: function () {
          return 42;
        },
      };
    return (
      Object.setPrototypeOf(e, Uint8Array.prototype),
      Object.setPrototypeOf(t, e),
      42 === t.foo()
    );
  } catch (t) {
    return !1;
  }
})()),
  tl.TYPED_ARRAY_SUPPORT ||
    "undefined" == typeof console ||
    "function" != typeof console.error ||
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    ),
  Object.defineProperty(tl.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (tl.isBuffer(this)) return this.buffer;
    },
  }),
  Object.defineProperty(tl.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (tl.isBuffer(this)) return this.byteOffset;
    },
  }),
  (tl.poolSize = 8192),
  (tl.from = function (t, e, o) {
    return tc(t, e, o);
  }),
  Object.setPrototypeOf(tl.prototype, Uint8Array.prototype),
  Object.setPrototypeOf(tl, Uint8Array),
  (tl.alloc = function (t, e, o) {
    return (tf(t), t <= 0)
      ? ts(t)
      : void 0 !== e
      ? "string" == typeof o
        ? ts(t).fill(e, o)
        : ts(t).fill(e)
      : ts(t);
  }),
  (tl.allocUnsafe = function (t) {
    return td(t);
  }),
  (tl.allocUnsafeSlow = function (t) {
    return td(t);
  }),
  (tl.isBuffer = function (t) {
    return null != t && !0 === t._isBuffer && t !== tl.prototype;
  }),
  (tl.compare = function (t, e) {
    if (
      (tW(t, Uint8Array) && (t = tl.from(t, t.offset, t.byteLength)),
      tW(e, Uint8Array) && (e = tl.from(e, e.offset, e.byteLength)),
      !tl.isBuffer(t) || !tl.isBuffer(e))
    )
      throw TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (t === e) return 0;
    let o = t.length,
      i = e.length;
    for (let n = 0, a = Math.min(o, i); n < a; ++n)
      if (t[n] !== e[n]) {
        (o = t[n]), (i = e[n]);
        break;
      }
    return o < i ? -1 : i < o ? 1 : 0;
  }),
  (tl.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }),
  (tl.concat = function (t, e) {
    let o;
    if (!Array.isArray(t))
      throw TypeError('"list" argument must be an Array of Buffers');
    if (0 === t.length) return tl.alloc(0);
    if (void 0 === e) for (o = 0, e = 0; o < t.length; ++o) e += t[o].length;
    let i = tl.allocUnsafe(e),
      n = 0;
    for (o = 0; o < t.length; ++o) {
      let e = t[o];
      if (tW(e, Uint8Array))
        n + e.length > i.length
          ? (tl.isBuffer(e) || (e = tl.from(e)), e.copy(i, n))
          : Uint8Array.prototype.set.call(i, e, n);
      else if (tl.isBuffer(e)) e.copy(i, n);
      else throw TypeError('"list" argument must be an Array of Buffers');
      n += e.length;
    }
    return i;
  }),
  (tl.byteLength = th),
  (tl.prototype._isBuffer = !0),
  (tl.prototype.swap16 = function () {
    let t = this.length;
    if (t % 2 != 0)
      throw RangeError("Buffer size must be a multiple of 16-bits");
    for (let e = 0; e < t; e += 2) ty(this, e, e + 1);
    return this;
  }),
  (tl.prototype.swap32 = function () {
    let t = this.length;
    if (t % 4 != 0)
      throw RangeError("Buffer size must be a multiple of 32-bits");
    for (let e = 0; e < t; e += 4) ty(this, e, e + 3), ty(this, e + 1, e + 2);
    return this;
  }),
  (tl.prototype.swap64 = function () {
    let t = this.length;
    if (t % 8 != 0)
      throw RangeError("Buffer size must be a multiple of 64-bits");
    for (let e = 0; e < t; e += 8)
      ty(this, e, e + 7),
        ty(this, e + 1, e + 6),
        ty(this, e + 2, e + 5),
        ty(this, e + 3, e + 4);
    return this;
  }),
  (tl.prototype.toString = function () {
    let t = this.length;
    return 0 === t
      ? ""
      : 0 == arguments.length
      ? tw(this, 0, t)
      : tg.apply(this, arguments);
  }),
  (tl.prototype.toLocaleString = tl.prototype.toString),
  (tl.prototype.equals = function (t) {
    if (!tl.isBuffer(t)) throw TypeError("Argument must be a Buffer");
    return this === t || 0 === tl.compare(this, t);
  }),
  (tl.prototype.inspect = function () {
    let t = "";
    return (
      (t = this.toString("hex", 0, 50)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > 50 && (t += " ... "),
      "<Buffer " + t + ">"
    );
  }),
  tr && (tl.prototype[tr] = tl.prototype.inspect),
  (tl.prototype.compare = function (t, e, o, i, n) {
    if (
      (tW(t, Uint8Array) && (t = tl.from(t, t.offset, t.byteLength)),
      !tl.isBuffer(t))
    )
      throw TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof t
      );
    if (
      (void 0 === e && (e = 0),
      void 0 === o && (o = t ? t.length : 0),
      void 0 === i && (i = 0),
      void 0 === n && (n = this.length),
      e < 0 || o > t.length || i < 0 || n > this.length)
    )
      throw RangeError("out of range index");
    if (i >= n && e >= o) return 0;
    if (i >= n) return -1;
    if (e >= o) return 1;
    if (((e >>>= 0), (o >>>= 0), (i >>>= 0), (n >>>= 0), this === t)) return 0;
    let a = n - i,
      r = o - e,
      s = Math.min(a, r),
      l = this.slice(i, n),
      c = t.slice(e, o);
    for (let t = 0; t < s; ++t)
      if (l[t] !== c[t]) {
        (a = l[t]), (r = c[t]);
        break;
      }
    return a < r ? -1 : r < a ? 1 : 0;
  }),
  (tl.prototype.includes = function (t, e, o) {
    return -1 !== this.indexOf(t, e, o);
  }),
  (tl.prototype.indexOf = function (t, e, o) {
    return tx(this, t, e, o, !0);
  }),
  (tl.prototype.lastIndexOf = function (t, e, o) {
    return tx(this, t, e, o, !1);
  }),
  (tl.prototype.write = function (t, e, o, i) {
    var n, a, r, s, l, c, f, d;
    if (void 0 === e) (i = "utf8"), (o = this.length), (e = 0);
    else if (void 0 === o && "string" == typeof e)
      (i = e), (o = this.length), (e = 0);
    else if (isFinite(e))
      (e >>>= 0),
        isFinite(o)
          ? ((o >>>= 0), void 0 === i && (i = "utf8"))
          : ((i = o), (o = void 0));
    else
      throw Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    let p = this.length - e;
    if (
      ((void 0 === o || o > p) && (o = p),
      (t.length > 0 && (o < 0 || e < 0)) || e > this.length)
    )
      throw RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    let m = !1;
    for (;;)
      switch (i) {
        case "hex":
          return (function (t, e, o, i) {
            let n;
            o = Number(o) || 0;
            let a = t.length - o;
            i ? (i = Number(i)) > a && (i = a) : (i = a);
            let r = e.length;
            for (i > r / 2 && (i = r / 2), n = 0; n < i; ++n) {
              let i = parseInt(e.substr(2 * n, 2), 16);
              if (i != i) break;
              t[o + n] = i;
            }
            return n;
          })(this, t, e, o);
        case "utf8":
        case "utf-8":
          return (n = e), (a = o), tP(tD(t, this.length - n), this, n, a);
        case "ascii":
        case "latin1":
        case "binary":
          return (
            (r = e),
            (s = o),
            tP(
              (function (t) {
                let e = [];
                for (let o = 0; o < t.length; ++o)
                  e.push(255 & t.charCodeAt(o));
                return e;
              })(t),
              this,
              r,
              s
            )
          );
        case "base64":
          return (l = e), (c = o), tP(tM(t), this, l, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return (
            (f = e),
            (d = o),
            tP(
              (function (t, e) {
                let o, i;
                let n = [];
                for (let a = 0; a < t.length && !((e -= 2) < 0); ++a)
                  (i = (o = t.charCodeAt(a)) >> 8), n.push(o % 256), n.push(i);
                return n;
              })(t, this.length - f),
              this,
              f,
              d
            )
          );
        default:
          if (m) throw TypeError("Unknown encoding: " + i);
          (i = ("" + i).toLowerCase()), (m = !0);
      }
  }),
  (tl.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  }),
  (tl.prototype.slice = function (t, e) {
    let o = this.length;
    (t = ~~t),
      (e = void 0 === e ? o : ~~e),
      t < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o),
      e < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o),
      e < t && (e = t);
    let i = this.subarray(t, e);
    return Object.setPrototypeOf(i, tl.prototype), i;
  }),
  (tl.prototype.readUintLE = tl.prototype.readUIntLE =
    function (t, e, o) {
      (t >>>= 0), (e >>>= 0), o || tv(t, e, this.length);
      let i = this[t],
        n = 1,
        a = 0;
      for (; ++a < e && (n *= 256); ) i += this[t + a] * n;
      return i;
    }),
  (tl.prototype.readUintBE = tl.prototype.readUIntBE =
    function (t, e, o) {
      (t >>>= 0), (e >>>= 0), o || tv(t, e, this.length);
      let i = this[t + --e],
        n = 1;
      for (; e > 0 && (n *= 256); ) i += this[t + --e] * n;
      return i;
    }),
  (tl.prototype.readUint8 = tl.prototype.readUInt8 =
    function (t, e) {
      return (t >>>= 0), e || tv(t, 1, this.length), this[t];
    }),
  (tl.prototype.readUint16LE = tl.prototype.readUInt16LE =
    function (t, e) {
      return (
        (t >>>= 0), e || tv(t, 2, this.length), this[t] | (this[t + 1] << 8)
      );
    }),
  (tl.prototype.readUint16BE = tl.prototype.readUInt16BE =
    function (t, e) {
      return (
        (t >>>= 0), e || tv(t, 2, this.length), (this[t] << 8) | this[t + 1]
      );
    }),
  (tl.prototype.readUint32LE = tl.prototype.readUInt32LE =
    function (t, e) {
      return (
        (t >>>= 0),
        e || tv(t, 4, this.length),
        (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
          16777216 * this[t + 3]
      );
    }),
  (tl.prototype.readUint32BE = tl.prototype.readUInt32BE =
    function (t, e) {
      return (
        (t >>>= 0),
        e || tv(t, 4, this.length),
        16777216 * this[t] +
          ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
      );
    }),
  (tl.prototype.readBigUInt64LE = tF(function (t) {
    tT((t >>>= 0), "offset");
    let e = this[t],
      o = this[t + 7];
    (void 0 === e || void 0 === o) && tz(t, this.length - 8);
    let i = e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t],
      n = this[++t] + 256 * this[++t] + 65536 * this[++t] + 16777216 * o;
    return BigInt(i) + (BigInt(n) << BigInt(32));
  })),
  (tl.prototype.readBigUInt64BE = tF(function (t) {
    tT((t >>>= 0), "offset");
    let e = this[t],
      o = this[t + 7];
    (void 0 === e || void 0 === o) && tz(t, this.length - 8);
    let i = 16777216 * e + 65536 * this[++t] + 256 * this[++t] + this[++t],
      n = 16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + o;
    return (BigInt(i) << BigInt(32)) + BigInt(n);
  })),
  (tl.prototype.readIntLE = function (t, e, o) {
    (t >>>= 0), (e >>>= 0), o || tv(t, e, this.length);
    let i = this[t],
      n = 1,
      a = 0;
    for (; ++a < e && (n *= 256); ) i += this[t + a] * n;
    return i >= (n *= 128) && (i -= Math.pow(2, 8 * e)), i;
  }),
  (tl.prototype.readIntBE = function (t, e, o) {
    (t >>>= 0), (e >>>= 0), o || tv(t, e, this.length);
    let i = e,
      n = 1,
      a = this[t + --i];
    for (; i > 0 && (n *= 256); ) a += this[t + --i] * n;
    return a >= (n *= 128) && (a -= Math.pow(2, 8 * e)), a;
  }),
  (tl.prototype.readInt8 = function (t, e) {
    return ((t >>>= 0), e || tv(t, 1, this.length), 128 & this[t])
      ? -((255 - this[t] + 1) * 1)
      : this[t];
  }),
  (tl.prototype.readInt16LE = function (t, e) {
    (t >>>= 0), e || tv(t, 2, this.length);
    let o = this[t] | (this[t + 1] << 8);
    return 32768 & o ? 4294901760 | o : o;
  }),
  (tl.prototype.readInt16BE = function (t, e) {
    (t >>>= 0), e || tv(t, 2, this.length);
    let o = this[t + 1] | (this[t] << 8);
    return 32768 & o ? 4294901760 | o : o;
  }),
  (tl.prototype.readInt32LE = function (t, e) {
    return (
      (t >>>= 0),
      e || tv(t, 4, this.length),
      this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
    );
  }),
  (tl.prototype.readInt32BE = function (t, e) {
    return (
      (t >>>= 0),
      e || tv(t, 4, this.length),
      (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
    );
  }),
  (tl.prototype.readBigInt64LE = tF(function (t) {
    tT((t >>>= 0), "offset");
    let e = this[t],
      o = this[t + 7];
    (void 0 === e || void 0 === o) && tz(t, this.length - 8);
    let i = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (o << 24);
    return (
      (BigInt(i) << BigInt(32)) +
      BigInt(e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t])
    );
  })),
  (tl.prototype.readBigInt64BE = tF(function (t) {
    tT((t >>>= 0), "offset");
    let e = this[t],
      o = this[t + 7];
    (void 0 === e || void 0 === o) && tz(t, this.length - 8);
    let i = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
    return (
      (BigInt(i) << BigInt(32)) +
      BigInt(16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + o)
    );
  })),
  (tl.prototype.readFloatLE = function (t, e) {
    return (t >>>= 0), e || tv(t, 4, this.length), a(this, t, !0, 23, 4);
  }),
  (tl.prototype.readFloatBE = function (t, e) {
    return (t >>>= 0), e || tv(t, 4, this.length), a(this, t, !1, 23, 4);
  }),
  (tl.prototype.readDoubleLE = function (t, e) {
    return (t >>>= 0), e || tv(t, 8, this.length), a(this, t, !0, 52, 8);
  }),
  (tl.prototype.readDoubleBE = function (t, e) {
    return (t >>>= 0), e || tv(t, 8, this.length), a(this, t, !1, 52, 8);
  }),
  (tl.prototype.writeUintLE = tl.prototype.writeUIntLE =
    function (t, e, o, i) {
      if (((t = +t), (e >>>= 0), (o >>>= 0), !i)) {
        let i = Math.pow(2, 8 * o) - 1;
        tk(this, t, e, o, i, 0);
      }
      let n = 1,
        a = 0;
      for (this[e] = 255 & t; ++a < o && (n *= 256); )
        this[e + a] = (t / n) & 255;
      return e + o;
    }),
  (tl.prototype.writeUintBE = tl.prototype.writeUIntBE =
    function (t, e, o, i) {
      if (((t = +t), (e >>>= 0), (o >>>= 0), !i)) {
        let i = Math.pow(2, 8 * o) - 1;
        tk(this, t, e, o, i, 0);
      }
      let n = o - 1,
        a = 1;
      for (this[e + n] = 255 & t; --n >= 0 && (a *= 256); )
        this[e + n] = (t / a) & 255;
      return e + o;
    }),
  (tl.prototype.writeUint8 = tl.prototype.writeUInt8 =
    function (t, e, o) {
      return (
        (t = +t),
        (e >>>= 0),
        o || tk(this, t, e, 1, 255, 0),
        (this[e] = 255 & t),
        e + 1
      );
    }),
  (tl.prototype.writeUint16LE = tl.prototype.writeUInt16LE =
    function (t, e, o) {
      return (
        (t = +t),
        (e >>>= 0),
        o || tk(this, t, e, 2, 65535, 0),
        (this[e] = 255 & t),
        (this[e + 1] = t >>> 8),
        e + 2
      );
    }),
  (tl.prototype.writeUint16BE = tl.prototype.writeUInt16BE =
    function (t, e, o) {
      return (
        (t = +t),
        (e >>>= 0),
        o || tk(this, t, e, 2, 65535, 0),
        (this[e] = t >>> 8),
        (this[e + 1] = 255 & t),
        e + 2
      );
    }),
  (tl.prototype.writeUint32LE = tl.prototype.writeUInt32LE =
    function (t, e, o) {
      return (
        (t = +t),
        (e >>>= 0),
        o || tk(this, t, e, 4, 4294967295, 0),
        (this[e + 3] = t >>> 24),
        (this[e + 2] = t >>> 16),
        (this[e + 1] = t >>> 8),
        (this[e] = 255 & t),
        e + 4
      );
    }),
  (tl.prototype.writeUint32BE = tl.prototype.writeUInt32BE =
    function (t, e, o) {
      return (
        (t = +t),
        (e >>>= 0),
        o || tk(this, t, e, 4, 4294967295, 0),
        (this[e] = t >>> 24),
        (this[e + 1] = t >>> 16),
        (this[e + 2] = t >>> 8),
        (this[e + 3] = 255 & t),
        e + 4
      );
    }),
  (tl.prototype.writeBigUInt64LE = tF(function (t, e = 0) {
    return tC(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
  (tl.prototype.writeBigUInt64BE = tF(function (t, e = 0) {
    return tN(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
  (tl.prototype.writeIntLE = function (t, e, o, i) {
    if (((t = +t), (e >>>= 0), !i)) {
      let i = Math.pow(2, 8 * o - 1);
      tk(this, t, e, o, i - 1, -i);
    }
    let n = 0,
      a = 1,
      r = 0;
    for (this[e] = 255 & t; ++n < o && (a *= 256); )
      t < 0 && 0 === r && 0 !== this[e + n - 1] && (r = 1),
        (this[e + n] = (((t / a) >> 0) - r) & 255);
    return e + o;
  }),
  (tl.prototype.writeIntBE = function (t, e, o, i) {
    if (((t = +t), (e >>>= 0), !i)) {
      let i = Math.pow(2, 8 * o - 1);
      tk(this, t, e, o, i - 1, -i);
    }
    let n = o - 1,
      a = 1,
      r = 0;
    for (this[e + n] = 255 & t; --n >= 0 && (a *= 256); )
      t < 0 && 0 === r && 0 !== this[e + n + 1] && (r = 1),
        (this[e + n] = (((t / a) >> 0) - r) & 255);
    return e + o;
  }),
  (tl.prototype.writeInt8 = function (t, e, o) {
    return (
      (t = +t),
      (e >>>= 0),
      o || tk(this, t, e, 1, 127, -128),
      t < 0 && (t = 255 + t + 1),
      (this[e] = 255 & t),
      e + 1
    );
  }),
  (tl.prototype.writeInt16LE = function (t, e, o) {
    return (
      (t = +t),
      (e >>>= 0),
      o || tk(this, t, e, 2, 32767, -32768),
      (this[e] = 255 & t),
      (this[e + 1] = t >>> 8),
      e + 2
    );
  }),
  (tl.prototype.writeInt16BE = function (t, e, o) {
    return (
      (t = +t),
      (e >>>= 0),
      o || tk(this, t, e, 2, 32767, -32768),
      (this[e] = t >>> 8),
      (this[e + 1] = 255 & t),
      e + 2
    );
  }),
  (tl.prototype.writeInt32LE = function (t, e, o) {
    return (
      (t = +t),
      (e >>>= 0),
      o || tk(this, t, e, 4, 2147483647, -2147483648),
      (this[e] = 255 & t),
      (this[e + 1] = t >>> 8),
      (this[e + 2] = t >>> 16),
      (this[e + 3] = t >>> 24),
      e + 4
    );
  }),
  (tl.prototype.writeInt32BE = function (t, e, o) {
    return (
      (t = +t),
      (e >>>= 0),
      o || tk(this, t, e, 4, 2147483647, -2147483648),
      t < 0 && (t = 4294967295 + t + 1),
      (this[e] = t >>> 24),
      (this[e + 1] = t >>> 16),
      (this[e + 2] = t >>> 8),
      (this[e + 3] = 255 & t),
      e + 4
    );
  }),
  (tl.prototype.writeBigInt64LE = tF(function (t, e = 0) {
    return tC(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  })),
  (tl.prototype.writeBigInt64BE = tF(function (t, e = 0) {
    return tN(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  })),
  (tl.prototype.writeFloatLE = function (t, e, o) {
    return tE(this, t, e, !0, o);
  }),
  (tl.prototype.writeFloatBE = function (t, e, o) {
    return tE(this, t, e, !1, o);
  }),
  (tl.prototype.writeDoubleLE = function (t, e, o) {
    return tO(this, t, e, !0, o);
  }),
  (tl.prototype.writeDoubleBE = function (t, e, o) {
    return tO(this, t, e, !1, o);
  }),
  (tl.prototype.copy = function (t, e, o, i) {
    if (!tl.isBuffer(t)) throw TypeError("argument should be a Buffer");
    if (
      (o || (o = 0),
      i || 0 === i || (i = this.length),
      e >= t.length && (e = t.length),
      e || (e = 0),
      i > 0 && i < o && (i = o),
      i === o || 0 === t.length || 0 === this.length)
    )
      return 0;
    if (e < 0) throw RangeError("targetStart out of bounds");
    if (o < 0 || o >= this.length) throw RangeError("Index out of range");
    if (i < 0) throw RangeError("sourceEnd out of bounds");
    i > this.length && (i = this.length),
      t.length - e < i - o && (i = t.length - e + o);
    let n = i - o;
    return (
      this === t && "function" == typeof Uint8Array.prototype.copyWithin
        ? this.copyWithin(e, o, i)
        : Uint8Array.prototype.set.call(t, this.subarray(o, i), e),
      n
    );
  }),
  (tl.prototype.fill = function (t, e, o, i) {
    let n;
    if ("string" == typeof t) {
      if (
        ("string" == typeof e
          ? ((i = e), (e = 0), (o = this.length))
          : "string" == typeof o && ((i = o), (o = this.length)),
        void 0 !== i && "string" != typeof i)
      )
        throw TypeError("encoding must be a string");
      if ("string" == typeof i && !tl.isEncoding(i))
        throw TypeError("Unknown encoding: " + i);
      if (1 === t.length) {
        let e = t.charCodeAt(0);
        (("utf8" === i && e < 128) || "latin1" === i) && (t = e);
      }
    } else
      "number" == typeof t
        ? (t &= 255)
        : "boolean" == typeof t && (t = Number(t));
    if (e < 0 || this.length < e || this.length < o)
      throw RangeError("Out of range index");
    if (o <= e) return this;
    if (
      ((e >>>= 0),
      (o = void 0 === o ? this.length : o >>> 0),
      t || (t = 0),
      "number" == typeof t)
    )
      for (n = e; n < o; ++n) this[n] = t;
    else {
      let a = tl.isBuffer(t) ? t : tl.from(t, i),
        r = a.length;
      if (0 === r)
        throw TypeError(
          'The value "' + t + '" is invalid for argument "value"'
        );
      for (n = 0; n < o - e; ++n) this[n + e] = a[n % r];
    }
    return this;
  });
const tI = {};
function tA(t, e, o) {
  tI[t] = class extends o {
    get code() {
      return t;
    }
    set code(t) {
      Object.defineProperty(this, "code", {
        configurable: !0,
        enumerable: !0,
        value: t,
        writable: !0,
      });
    }
    toString() {
      return `${this.name} [${t}]: ${this.message}`;
    }
    constructor() {
      super(),
        Object.defineProperty(this, "message", {
          value: e.apply(this, arguments),
          writable: !0,
          configurable: !0,
        }),
        (this.name = `${this.name} [${t}]`),
        this.stack,
        delete this.name;
    }
  };
}
function tL(t) {
  let e = "",
    o = t.length,
    i = "-" === t[0] ? 1 : 0;
  for (; o >= i + 4; o -= 3) e = `_${t.slice(o - 3, o)}${e}`;
  return `${t.slice(0, o)}${e}`;
}
function tR(t, e, o, i, n, a) {
  if (t > o || t < e) {
    let i;
    let n = "bigint" == typeof e ? "n" : "";
    throw (
      ((i =
        a > 3
          ? 0 === e || e === BigInt(0)
            ? `>= 0${n} and < 2${n} ** ${(a + 1) * 8}${n}`
            : `>= -(2${n} ** ${(a + 1) * 8 - 1}${n}) and < 2 ** ${
                (a + 1) * 8 - 1
              }${n}`
          : `>= ${e}${n} and <= ${o}${n}`),
      new tI.ERR_OUT_OF_RANGE("value", i, t))
    );
  }
  tT(n, "offset"),
    (void 0 === i[n] || void 0 === i[n + a]) && tz(n, i.length - (a + 1));
}
function tT(t, e) {
  if ("number" != typeof t) throw new tI.ERR_INVALID_ARG_TYPE(e, "number", t);
}
function tz(t, e, o) {
  if (Math.floor(t) !== t)
    throw (tT(t, o), new tI.ERR_OUT_OF_RANGE(o || "offset", "an integer", t));
  if (e < 0) throw new tI.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new tI.ERR_OUT_OF_RANGE(
    o || "offset",
    `>= ${o ? 1 : 0} and <= ${e}`,
    t
  );
}
tA(
  "ERR_BUFFER_OUT_OF_BOUNDS",
  function (t) {
    return t
      ? `${t} is outside of buffer bounds`
      : "Attempt to access memory outside buffer bounds";
  },
  RangeError
),
  tA(
    "ERR_INVALID_ARG_TYPE",
    function (t, e) {
      return `The "${t}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError
  ),
  tA(
    "ERR_OUT_OF_RANGE",
    function (t, e, o) {
      let i = `The value of "${t}" is out of range.`,
        n = o;
      return (
        Number.isInteger(o) && Math.abs(o) > 4294967296
          ? (n = tL(String(o)))
          : "bigint" == typeof o &&
            ((n = String(o)),
            (o > BigInt(2) ** BigInt(32) || o < -(BigInt(2) ** BigInt(32))) &&
              (n = tL(n)),
            (n += "n")),
        (i += ` It must be ${e}. Received ${n}`)
      );
    },
    RangeError
  );
const tB = /[^+/0-9A-Za-z-_]/g;
function tD(t, e) {
  let o;
  e = e || 1 / 0;
  let i = t.length,
    n = null,
    a = [];
  for (let r = 0; r < i; ++r) {
    if ((o = t.charCodeAt(r)) > 55295 && o < 57344) {
      if (!n) {
        if (o > 56319 || r + 1 === i) {
          (e -= 3) > -1 && a.push(239, 191, 189);
          continue;
        }
        n = o;
        continue;
      }
      if (o < 56320) {
        (e -= 3) > -1 && a.push(239, 191, 189), (n = o);
        continue;
      }
      o = (((n - 55296) << 10) | (o - 56320)) + 65536;
    } else n && (e -= 3) > -1 && a.push(239, 191, 189);
    if (((n = null), o < 128)) {
      if ((e -= 1) < 0) break;
      a.push(o);
    } else if (o < 2048) {
      if ((e -= 2) < 0) break;
      a.push((o >> 6) | 192, (63 & o) | 128);
    } else if (o < 65536) {
      if ((e -= 3) < 0) break;
      a.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (63 & o) | 128);
    } else if (o < 1114112) {
      if ((e -= 4) < 0) break;
      a.push(
        (o >> 18) | 240,
        ((o >> 12) & 63) | 128,
        ((o >> 6) & 63) | 128,
        (63 & o) | 128
      );
    } else throw Error("Invalid code point");
  }
  return a;
}
function tM(t) {
  return (function (t) {
    var e,
      o,
      i = (function (t) {
        var e = t.length;
        if (e % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var o = t.indexOf("=");
        -1 === o && (o = e);
        var i = o === e ? 0 : 4 - (o % 4);
        return [o, i];
      })(t),
      n = i[0],
      a = i[1],
      r = new to(((n + a) * 3) / 4 - a),
      s = 0,
      l = a > 0 ? n - 4 : n;
    for (o = 0; o < l; o += 4)
      (e =
        (te[t.charCodeAt(o)] << 18) |
        (te[t.charCodeAt(o + 1)] << 12) |
        (te[t.charCodeAt(o + 2)] << 6) |
        te[t.charCodeAt(o + 3)]),
        (r[s++] = (e >> 16) & 255),
        (r[s++] = (e >> 8) & 255),
        (r[s++] = 255 & e);
    return (
      2 === a &&
        ((e = (te[t.charCodeAt(o)] << 2) | (te[t.charCodeAt(o + 1)] >> 4)),
        (r[s++] = 255 & e)),
      1 === a &&
        ((e =
          (te[t.charCodeAt(o)] << 10) |
          (te[t.charCodeAt(o + 1)] << 4) |
          (te[t.charCodeAt(o + 2)] >> 2)),
        (r[s++] = (e >> 8) & 255),
        (r[s++] = 255 & e)),
      r
    );
  })(
    (function (t) {
      if ((t = (t = t.split("=")[0]).trim().replace(tB, "")).length < 2)
        return "";
      for (; t.length % 4 != 0; ) t += "=";
      return t;
    })(t)
  );
}
function tP(t, e, o, i) {
  let n;
  for (n = 0; n < i && !(n + o >= e.length) && !(n >= t.length); ++n)
    e[n + o] = t[n];
  return n;
}
function tW(t, e) {
  return (
    t instanceof e ||
    (null != t &&
      null != t.constructor &&
      null != t.constructor.name &&
      t.constructor.name === e.name)
  );
}
const tX = (function () {
  let t = "0123456789abcdef",
    e = Array(256);
  for (let o = 0; o < 16; ++o) {
    let i = 16 * o;
    for (let n = 0; n < 16; ++n) e[i + n] = t[o] + t[n];
  }
  return e;
})();
function tF(t) {
  return "undefined" == typeof BigInt ? tj : t;
}
function tj() {
  throw Error("BigInt not supported");
}
("use strict");
function tU(t) {
  return Z.isPlainObject(t) || Z.isArray(t);
}
function tH(t) {
  return Z.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function tY(t, e, o) {
  return t
    ? t
        .concat(e)
        .map(function (t, e) {
          return (t = tH(t)), !o && e ? "[" + t + "]" : t;
        })
        .join(o ? "." : "")
    : e;
}
("use strict");
const t_ = Z.toFlatObject(Z, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
var tq = function (t, e, o) {
  if (!Z.isObject(t)) throw TypeError("target must be an object");
  (e = e || new FormData()),
    (o = Z.toFlatObject(
      o,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (t, e) {
        return !Z.isUndefined(e[t]);
      }
    ));
  let i = o.metaTokens,
    n = o.visitor || f,
    a = o.dots,
    r = o.indexes,
    s = o.Blob || ("undefined" != typeof Blob && Blob),
    l = s && Z.isSpecCompliantForm(e);
  if (!Z.isFunction(n)) throw TypeError("visitor must be a function");
  function c(t) {
    if (null === t) return "";
    if (Z.isDate(t)) return t.toISOString();
    if (!l && Z.isBlob(t))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return Z.isArrayBuffer(t) || Z.isTypedArray(t)
      ? l && "function" == typeof Blob
        ? new Blob([t])
        : tl.from(t)
      : t;
  }
  function f(t, o, n) {
    let s = t;
    if (t && !n && "object" == typeof t) {
      if (Z.endsWith(o, "{}"))
        (o = i ? o : o.slice(0, -2)), (t = JSON.stringify(t));
      else {
        var l;
        if (
          (Z.isArray(t) && ((l = t), Z.isArray(l) && !l.some(tU))) ||
          ((Z.isFileList(t) || Z.endsWith(o, "[]")) && (s = Z.toArray(t)))
        )
          return (
            (o = tH(o)),
            s.forEach(function (t, i) {
              Z.isUndefined(t) ||
                null === t ||
                e.append(
                  !0 === r ? tY([o], i, a) : null === r ? o : o + "[]",
                  c(t)
                );
            }),
            !1
          );
      }
    }
    return !!tU(t) || (e.append(tY(n, o, a), c(t)), !1);
  }
  let d = [],
    p = Object.assign(t_, {
      defaultVisitor: f,
      convertValue: c,
      isVisitable: tU,
    });
  if (!Z.isObject(t)) throw TypeError("data must be an object");
  return (
    !(function t(o, i) {
      if (!Z.isUndefined(o)) {
        if (-1 !== d.indexOf(o))
          throw Error("Circular reference detected in " + i.join("."));
        d.push(o),
          Z.forEach(o, function (o, a) {
            let r =
              !(Z.isUndefined(o) || null === o) &&
              n.call(e, o, Z.isString(a) ? a.trim() : a, i, p);
            !0 === r && t(o, i ? i.concat(a) : [a]);
          }),
          d.pop();
      }
    })(t),
    e
  );
};
function t$(t) {
  let e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\x00",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
    return e[t];
  });
}
function tV(t, e) {
  (this._pairs = []), t && tq(t, this, e);
}
("use strict");
const tJ = tV.prototype;
function tZ(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function tK(t, e, o) {
  let i;
  if (!e) return t;
  let n = (o && o.encode) || tZ,
    a = o && o.serialize;
  if (
    (i = a
      ? a(e, o)
      : Z.isURLSearchParams(e)
      ? e.toString()
      : new tV(e, o).toString(n))
  ) {
    let e = t.indexOf("#");
    -1 !== e && (t = t.slice(0, e)),
      (t += (-1 === t.indexOf("?") ? "?" : "&") + i);
  }
  return t;
}
("use strict");
("use strict");
("use strict");
("use strict");
("use strict");
(tJ.append = function (t, e) {
  this._pairs.push([t, e]);
}),
  (tJ.toString = function (t) {
    let e = t
      ? function (e) {
          return t.call(this, e, t$);
        }
      : t$;
    return this._pairs
      .map(function (t) {
        return e(t[0]) + "=" + e(t[1]);
      }, "")
      .join("&");
  });
var tQ = class {
    use(t, e, o) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: e,
          synchronous: !!o && o.synchronous,
          runWhen: o ? o.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      Z.forEach(this.handlers, function (e) {
        null !== e && t(e);
      });
    }
    constructor() {
      this.handlers = [];
    }
  },
  tG = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  t0 = "undefined" != typeof URLSearchParams ? URLSearchParams : tV,
  t1 = "undefined" != typeof FormData ? FormData : null,
  t2 = "undefined" != typeof Blob ? Blob : null;
("use strict");
const t6 = (() => {
    let t;
    return (
      ("undefined" == typeof navigator ||
        ("ReactNative" !== (t = navigator.product) &&
          "NativeScript" !== t &&
          "NS" !== t)) &&
      "undefined" != typeof window &&
      "undefined" != typeof document
    );
  })(),
  t5 =
    "undefined" != typeof WorkerGlobalScope &&
    self instanceof WorkerGlobalScope &&
    "function" == typeof self.importScripts;
("use strict");
("use strict");
var t3 = {
    isBrowser: !0,
    classes: { URLSearchParams: t0, FormData: t1, Blob: t2 },
    isStandardBrowserEnv: t6,
    isStandardBrowserWebWorkerEnv: t5,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  t4 = function (t) {
    if (Z.isFormData(t) && Z.isFunction(t.entries)) {
      let e = {};
      return (
        Z.forEachEntry(t, (t, o) => {
          !(function t(e, o, i, n) {
            let a = e[n++],
              r = Number.isFinite(+a),
              s = n >= e.length;
            if (((a = !a && Z.isArray(i) ? i.length : a), s))
              return Z.hasOwnProp(i, a) ? (i[a] = [i[a], o]) : (i[a] = o), !r;
            (i[a] && Z.isObject(i[a])) || (i[a] = []);
            let l = t(e, o, i[a], n);
            return (
              l &&
                Z.isArray(i[a]) &&
                (i[a] = (function (t) {
                  let e, o;
                  let i = {},
                    n = Object.keys(t),
                    a = n.length;
                  for (e = 0; e < a; e++) i[(o = n[e])] = t[o];
                  return i;
                })(i[a])),
              !r
            );
          })(
            Z.matchAll(/\w+|\[(\w*)]/g, t).map((t) =>
              "[]" === t[0] ? "" : t[1] || t[0]
            ),
            o,
            e,
            0
          );
        }),
        e
      );
    }
    return null;
  };
("use strict");
const t8 = { "Content-Type": void 0 },
  t9 = {
    transitional: tG,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (t, e) {
        let o;
        let i = e.getContentType() || "",
          n = i.indexOf("application/json") > -1,
          a = Z.isObject(t);
        a && Z.isHTMLForm(t) && (t = new FormData(t));
        let r = Z.isFormData(t);
        if (r) return n && n ? JSON.stringify(t4(t)) : t;
        if (
          Z.isArrayBuffer(t) ||
          Z.isBuffer(t) ||
          Z.isStream(t) ||
          Z.isFile(t) ||
          Z.isBlob(t)
        )
          return t;
        if (Z.isArrayBufferView(t)) return t.buffer;
        if (Z.isURLSearchParams(t))
          return (
            e.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            t.toString()
          );
        if (a) {
          if (i.indexOf("application/x-www-form-urlencoded") > -1) {
            var s, l;
            return ((s = t),
            (l = this.formSerializer),
            tq(
              s,
              new t3.classes.URLSearchParams(),
              Object.assign(
                {
                  visitor: function (t, e, o, i) {
                    return t3.isNode && Z.isBuffer(t)
                      ? (this.append(e, t.toString("base64")), !1)
                      : i.defaultVisitor.apply(this, arguments);
                  },
                },
                l
              )
            )).toString();
          }
          if ((o = Z.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
            let e = this.env && this.env.FormData;
            return tq(
              o ? { "files[]": t } : t,
              e && new e(),
              this.formSerializer
            );
          }
        }
        return a || n
          ? (e.setContentType("application/json", !1),
            (function (t, e, o) {
              if (Z.isString(t))
                try {
                  return (0, JSON.parse)(t), Z.trim(t);
                } catch (t) {
                  if ("SyntaxError" !== t.name) throw t;
                }
              return (0, JSON.stringify)(t);
            })(t))
          : t;
      },
    ],
    transformResponse: [
      function (t) {
        let e = this.transitional || t9.transitional,
          o = e && e.forcedJSONParsing,
          i = "json" === this.responseType;
        if (t && Z.isString(t) && ((o && !this.responseType) || i)) {
          let o = e && e.silentJSONParsing;
          try {
            return JSON.parse(t);
          } catch (t) {
            if (!o && i) {
              if ("SyntaxError" === t.name)
                throw K.from(t, K.ERR_BAD_RESPONSE, this, null, this.response);
              throw t;
            }
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: t3.classes.FormData, Blob: t3.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
Z.forEach(["delete", "get", "head"], function (t) {
  t9.headers[t] = {};
}),
  Z.forEach(["post", "put", "patch"], function (t) {
    t9.headers[t] = Z.merge(t8);
  });
("use strict");
const t7 = Z.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent",
]);
var et = (t) => {
  let e, o, i;
  let n = {};
  return (
    t &&
      t.split("\n").forEach(function (t) {
        (i = t.indexOf(":")),
          (e = t.substring(0, i).trim().toLowerCase()),
          (o = t.substring(i + 1).trim()),
          !e ||
            (n[e] && t7[e]) ||
            ("set-cookie" === e
              ? n[e]
                ? n[e].push(o)
                : (n[e] = [o])
              : (n[e] = n[e] ? n[e] + ", " + o : o));
      }),
    n
  );
};
const ee = Symbol("internals");
function eo(t) {
  return t && String(t).trim().toLowerCase();
}
function ei(t) {
  return !1 === t || null == t ? t : Z.isArray(t) ? t.map(ei) : String(t);
}
const en = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ea(t, e, o, i, n) {
  if (Z.isFunction(i)) return i.call(this, e, o);
  if ((n && (e = o), Z.isString(e))) {
    if (Z.isString(i)) return -1 !== e.indexOf(i);
    if (Z.isRegExp(i)) return i.test(e);
  }
}
class er {
  set(t, e, o) {
    let i = this;
    function n(t, e, o) {
      let n = eo(e);
      if (!n) throw Error("header name must be a non-empty string");
      let a = Z.findKey(i, n);
      (a && void 0 !== i[a] && !0 !== o && (void 0 !== o || !1 === i[a])) ||
        (i[a || e] = ei(t));
    }
    let a = (t, e) => Z.forEach(t, (t, o) => n(t, o, e));
    return (
      Z.isPlainObject(t) || t instanceof this.constructor
        ? a(t, e)
        : Z.isString(t) && (t = t.trim()) && !en(t)
        ? a(et(t), e)
        : null != t && n(e, t, o),
      this
    );
  }
  get(t, e) {
    if ((t = eo(t))) {
      let o = Z.findKey(this, t);
      if (o) {
        let t = this[o];
        if (!e) return t;
        if (!0 === e)
          return (function (t) {
            let e;
            let o = Object.create(null),
              i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            for (; (e = i.exec(t)); ) o[e[1]] = e[2];
            return o;
          })(t);
        if (Z.isFunction(e)) return e.call(this, t, o);
        if (Z.isRegExp(e)) return e.exec(t);
        throw TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, e) {
    if ((t = eo(t))) {
      let o = Z.findKey(this, t);
      return !!(o && void 0 !== this[o] && (!e || ea(this, this[o], o, e)));
    }
    return !1;
  }
  delete(t, e) {
    let o = this,
      i = !1;
    function n(t) {
      if ((t = eo(t))) {
        let n = Z.findKey(o, t);
        n && (!e || ea(o, o[n], n, e)) && (delete o[n], (i = !0));
      }
    }
    return Z.isArray(t) ? t.forEach(n) : n(t), i;
  }
  clear(t) {
    let e = Object.keys(this),
      o = e.length,
      i = !1;
    for (; o--; ) {
      let n = e[o];
      (!t || ea(this, this[n], n, t, !0)) && (delete this[n], (i = !0));
    }
    return i;
  }
  normalize(t) {
    let e = this,
      o = {};
    return (
      Z.forEach(this, (i, n) => {
        let a = Z.findKey(o, n);
        if (a) {
          (e[a] = ei(i)), delete e[n];
          return;
        }
        let r = t
          ? n
              .trim()
              .toLowerCase()
              .replace(/([a-z\d])(\w*)/g, (t, e, o) => e.toUpperCase() + o)
          : String(n).trim();
        r !== n && delete e[n], (e[r] = ei(i)), (o[r] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    let e = Object.create(null);
    return (
      Z.forEach(this, (o, i) => {
        null != o && !1 !== o && (e[i] = t && Z.isArray(o) ? o.join(", ") : o);
      }),
      e
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([t, e]) => t + ": " + e)
      .join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...e) {
    let o = new this(t);
    return e.forEach((t) => o.set(t)), o;
  }
  static accessor(t) {
    let e = (this[ee] = this[ee] = { accessors: {} }),
      o = e.accessors,
      i = this.prototype;
    function n(t) {
      let e = eo(t);
      o[e] ||
        (!(function (t, e) {
          let o = Z.toCamelCase(" " + e);
          ["get", "set", "has"].forEach((i) => {
            Object.defineProperty(t, i + o, {
              value: function (t, o, n) {
                return this[i].call(this, e, t, o, n);
              },
              configurable: !0,
            });
          });
        })(i, t),
        (o[e] = !0));
    }
    return Z.isArray(t) ? t.forEach(n) : n(t), this;
  }
  constructor(t) {
    t && this.set(t);
  }
}
("use strict");
function es(t, e) {
  let o = this || t9,
    i = e || o,
    n = er.from(i.headers),
    a = i.data;
  return (
    Z.forEach(t, function (t) {
      a = t.call(o, a, n.normalize(), e ? e.status : void 0);
    }),
    n.normalize(),
    a
  );
}
("use strict");
function el(t) {
  return !!(t && t.__CANCEL__);
}
("use strict");
function ec(t, e, o) {
  K.call(this, null == t ? "canceled" : t, K.ERR_CANCELED, e, o),
    (this.name = "CanceledError");
}
("use strict");
er.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]),
  Z.freezeMethods(er.prototype),
  Z.freezeMethods(er),
  Z.inherits(ec, K, { __CANCEL__: !0 });
("use strict");
("use strict");
("use strict");
("use strict");
var ef = t3.isStandardBrowserEnv
  ? {
      write: function (t, e, o, i, n, a) {
        let r = [];
        r.push(t + "=" + encodeURIComponent(e)),
          Z.isNumber(o) && r.push("expires=" + new Date(o).toGMTString()),
          Z.isString(i) && r.push("path=" + i),
          Z.isString(n) && r.push("domain=" + n),
          !0 === a && r.push("secure"),
          (document.cookie = r.join("; "));
      },
      read: function (t) {
        let e = document.cookie.match(RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return e ? decodeURIComponent(e[3]) : null;
      },
      remove: function (t) {
        this.write(t, "", Date.now() - 864e5);
      },
    }
  : {
      write: function () {},
      read: function () {
        return null;
      },
      remove: function () {},
    };
function ed(t, e) {
  return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    ? e
      ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "")
      : t
    : e;
}
("use strict");
("use strict");
("use strict");
("use strict");
var ep = t3.isStandardBrowserEnv
    ? (function () {
        let t;
        let e = /(msie|trident)/i.test(navigator.userAgent),
          o = document.createElement("a");
        function i(t) {
          let i = t;
          return (
            e && (o.setAttribute("href", i), (i = o.href)),
            o.setAttribute("href", i),
            {
              href: o.href,
              protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
              host: o.host,
              search: o.search ? o.search.replace(/^\?/, "") : "",
              hash: o.hash ? o.hash.replace(/^#/, "") : "",
              hostname: o.hostname,
              port: o.port,
              pathname:
                "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname,
            }
          );
        }
        return (
          (t = i(window.location.href)),
          function (e) {
            let o = Z.isString(e) ? i(e) : e;
            return o.protocol === t.protocol && o.host === t.host;
          }
        );
      })()
    : function () {
        return !0;
      },
  em = function (t, e) {
    let o;
    t = t || 10;
    let i = Array(t),
      n = Array(t),
      a = 0,
      r = 0;
    return (
      (e = void 0 !== e ? e : 1e3),
      function (s) {
        let l = Date.now(),
          c = n[r];
        o || (o = l), (i[a] = s), (n[a] = l);
        let f = r,
          d = 0;
        for (; f !== a; ) (d += i[f++]), (f %= t);
        if (((a = (a + 1) % t) === r && (r = (r + 1) % t), l - o < e)) return;
        let p = c && l - c;
        return p ? Math.round((1e3 * d) / p) : void 0;
      }
    );
  };
function eu(t, e) {
  let o = 0,
    i = em(50, 250);
  return (n) => {
    let a = n.loaded,
      r = n.lengthComputable ? n.total : void 0,
      s = a - o,
      l = i(s),
      c = a <= r;
    o = a;
    let f = {
      loaded: a,
      total: r,
      progress: r ? a / r : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && r && c ? (r - a) / l : void 0,
      event: n,
    };
    (f[e ? "download" : "upload"] = !0), t(f);
  };
}
const eh = "undefined" != typeof XMLHttpRequest;
var eg =
  eh &&
  function (t) {
    return new Promise(function (e, o) {
      let i,
        n = t.data,
        a = er.from(t.headers).normalize(),
        r = t.responseType;
      function s() {
        t.cancelToken && t.cancelToken.unsubscribe(i),
          t.signal && t.signal.removeEventListener("abort", i);
      }
      Z.isFormData(n) &&
        (t3.isStandardBrowserEnv || t3.isStandardBrowserWebWorkerEnv
          ? a.setContentType(!1)
          : a.setContentType("multipart/form-data;", !1));
      let l = new XMLHttpRequest();
      if (t.auth) {
        let e = t.auth.username || "",
          o = t.auth.password
            ? unescape(encodeURIComponent(t.auth.password))
            : "";
        a.set("Authorization", "Basic " + btoa(e + ":" + o));
      }
      let c = ed(t.baseURL, t.url);
      function f() {
        if (!l) return;
        let i = er.from(
            "getAllResponseHeaders" in l && l.getAllResponseHeaders()
          ),
          n = r && "text" !== r && "json" !== r ? l.response : l.responseText,
          a = {
            data: n,
            status: l.status,
            statusText: l.statusText,
            headers: i,
            config: t,
            request: l,
          };
        (function (t, e, o) {
          let i = o.config.validateStatus;
          !o.status || !i || i(o.status)
            ? t(o)
            : e(
                new K(
                  "Request failed with status code " + o.status,
                  [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][
                    Math.floor(o.status / 100) - 4
                  ],
                  o.config,
                  o.request,
                  o
                )
              );
        })(
          function (t) {
            e(t), s();
          },
          function (t) {
            o(t), s();
          },
          a
        ),
          (l = null);
      }
      if (
        (l.open(
          t.method.toUpperCase(),
          tK(c, t.params, t.paramsSerializer),
          !0
        ),
        (l.timeout = t.timeout),
        "onloadend" in l
          ? (l.onloadend = f)
          : (l.onreadystatechange = function () {
              l &&
                4 === l.readyState &&
                (0 !== l.status ||
                  (l.responseURL && 0 === l.responseURL.indexOf("file:"))) &&
                setTimeout(f);
            }),
        (l.onabort = function () {
          l && (o(new K("Request aborted", K.ECONNABORTED, t, l)), (l = null));
        }),
        (l.onerror = function () {
          o(new K("Network Error", K.ERR_NETWORK, t, l)), (l = null);
        }),
        (l.ontimeout = function () {
          let e = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded",
            i = t.transitional || tG;
          t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
            o(
              new K(
                e,
                i.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
                t,
                l
              )
            ),
            (l = null);
        }),
        t3.isStandardBrowserEnv)
      ) {
        let e =
          (t.withCredentials || ep(c)) &&
          t.xsrfCookieName &&
          ef.read(t.xsrfCookieName);
        e && a.set(t.xsrfHeaderName, e);
      }
      void 0 === n && a.setContentType(null),
        "setRequestHeader" in l &&
          Z.forEach(a.toJSON(), function (t, e) {
            l.setRequestHeader(e, t);
          }),
        Z.isUndefined(t.withCredentials) ||
          (l.withCredentials = !!t.withCredentials),
        r && "json" !== r && (l.responseType = t.responseType),
        "function" == typeof t.onDownloadProgress &&
          l.addEventListener("progress", eu(t.onDownloadProgress, !0)),
        "function" == typeof t.onUploadProgress &&
          l.upload &&
          l.upload.addEventListener("progress", eu(t.onUploadProgress)),
        (t.cancelToken || t.signal) &&
          ((i = (e) => {
            l &&
              (o(!e || e.type ? new ec(null, t, l) : e), l.abort(), (l = null));
          }),
          t.cancelToken && t.cancelToken.subscribe(i),
          t.signal &&
            (t.signal.aborted ? i() : t.signal.addEventListener("abort", i)));
      let d = (function (t) {
        let e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
        return (e && e[1]) || "";
      })(c);
      if (d && -1 === t3.protocols.indexOf(d)) {
        o(new K("Unsupported protocol " + d + ":", K.ERR_BAD_REQUEST, t));
        return;
      }
      l.send(n || null);
    });
  };
("use strict");
const ey = { http: null, xhr: eg };
Z.forEach(ey, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch (t) {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
var ex = {
  getAdapter: (t) => {
    let e, o;
    t = Z.isArray(t) ? t : [t];
    let { length: i } = t;
    for (
      let n = 0;
      n < i && ((e = t[n]), !(o = Z.isString(e) ? ey[e.toLowerCase()] : e));
      n++
    );
    if (!o) {
      if (!1 === o)
        throw new K(
          `Adapter ${e} is not supported by the environment`,
          "ERR_NOT_SUPPORT"
        );
      throw Error(
        Z.hasOwnProp(ey, e)
          ? `Adapter '${e}' is not available in the build`
          : `Unknown adapter '${e}'`
      );
    }
    if (!Z.isFunction(o)) throw TypeError("adapter is not a function");
    return o;
  },
  adapters: ey,
};
function eb(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new ec(null, t);
}
function ew(t) {
  eb(t),
    (t.headers = er.from(t.headers)),
    (t.data = es.call(t, t.transformRequest)),
    -1 !== ["post", "put", "patch"].indexOf(t.method) &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1);
  let e = ex.getAdapter(t.adapter || t9.adapter);
  return e(t).then(
    function (e) {
      return (
        eb(t),
        (e.data = es.call(t, t.transformResponse, e)),
        (e.headers = er.from(e.headers)),
        e
      );
    },
    function (e) {
      return (
        !el(e) &&
          (eb(t),
          e &&
            e.response &&
            ((e.response.data = es.call(t, t.transformResponse, e.response)),
            (e.response.headers = er.from(e.response.headers)))),
        Promise.reject(e)
      );
    }
  );
}
("use strict");
const ev = (t) => (t instanceof er ? t.toJSON() : t);
function ek(t, e) {
  e = e || {};
  let o = {};
  function i(t, e, o) {
    return Z.isPlainObject(t) && Z.isPlainObject(e)
      ? Z.merge.call({ caseless: o }, t, e)
      : Z.isPlainObject(e)
      ? Z.merge({}, e)
      : Z.isArray(e)
      ? e.slice()
      : e;
  }
  function n(t, e, o) {
    return Z.isUndefined(e)
      ? Z.isUndefined(t)
        ? void 0
        : i(void 0, t, o)
      : i(t, e, o);
  }
  function a(t, e) {
    if (!Z.isUndefined(e)) return i(void 0, e);
  }
  function r(t, e) {
    return Z.isUndefined(e)
      ? Z.isUndefined(t)
        ? void 0
        : i(void 0, t)
      : i(void 0, e);
  }
  function s(o, n, a) {
    return a in e ? i(o, n) : a in t ? i(void 0, o) : void 0;
  }
  let l = {
    url: a,
    method: a,
    data: a,
    baseURL: r,
    transformRequest: r,
    transformResponse: r,
    paramsSerializer: r,
    timeout: r,
    timeoutMessage: r,
    withCredentials: r,
    adapter: r,
    responseType: r,
    xsrfCookieName: r,
    xsrfHeaderName: r,
    onUploadProgress: r,
    onDownloadProgress: r,
    decompress: r,
    maxContentLength: r,
    maxBodyLength: r,
    beforeRedirect: r,
    transport: r,
    httpAgent: r,
    httpsAgent: r,
    cancelToken: r,
    socketPath: r,
    responseEncoding: r,
    validateStatus: s,
    headers: (t, e) => n(ev(t), ev(e), !0),
  };
  return (
    Z.forEach(Object.keys(Object.assign({}, t, e)), function (i) {
      let a = l[i] || n,
        r = a(t[i], e[i], i);
      (Z.isUndefined(r) && a !== s) || (o[i] = r);
    }),
    o
  );
}
("use strict");
const eC = "1.4.0",
  eN = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    eN[t] = function (o) {
      return typeof o === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
("use strict");
const eS = {};
eN.transitional = function (t, e, o) {
  function i(t, e) {
    return (
      "[Axios v" +
      eC +
      "] Transitional option '" +
      t +
      "'" +
      e +
      (o ? ". " + o : "")
    );
  }
  return (o, n, a) => {
    if (!1 === t)
      throw new K(
        i(n, " has been removed" + (e ? " in " + e : "")),
        K.ERR_DEPRECATED
      );
    return (
      e &&
        !eS[n] &&
        ((eS[n] = !0),
        console.warn(
          i(
            n,
            " has been deprecated since v" +
              e +
              " and will be removed in the near future"
          )
        )),
      !t || t(o, n, a)
    );
  };
};
var eE = {
  assertOptions: function (t, e, o) {
    if ("object" != typeof t)
      throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
    let i = Object.keys(t),
      n = i.length;
    for (; n-- > 0; ) {
      let a = i[n],
        r = e[a];
      if (r) {
        let e = t[a],
          o = void 0 === e || r(e, a, t);
        if (!0 !== o)
          throw new K("option " + a + " must be " + o, K.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (!0 !== o) throw new K("Unknown option " + a, K.ERR_BAD_OPTION);
    }
  },
  validators: eN,
};
const eO = eE.validators;
class eI {
  request(t, e) {
    let o, i, n;
    "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
      (e = ek(this.defaults, e));
    let { transitional: a, paramsSerializer: r, headers: s } = e;
    void 0 !== a &&
      eE.assertOptions(
        a,
        {
          silentJSONParsing: eO.transitional(eO.boolean),
          forcedJSONParsing: eO.transitional(eO.boolean),
          clarifyTimeoutError: eO.transitional(eO.boolean),
        },
        !1
      ),
      null != r &&
        (Z.isFunction(r)
          ? (e.paramsSerializer = { serialize: r })
          : eE.assertOptions(
              r,
              { encode: eO.function, serialize: eO.function },
              !0
            )),
      (e.method = (e.method || this.defaults.method || "get").toLowerCase()),
      (o = s && Z.merge(s.common, s[e.method])) &&
        Z.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (t) => {
            delete s[t];
          }
        ),
      (e.headers = er.concat(o, s));
    let l = [],
      c = !0;
    this.interceptors.request.forEach(function (t) {
      ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) &&
        ((c = c && t.synchronous), l.unshift(t.fulfilled, t.rejected));
    });
    let f = [];
    this.interceptors.response.forEach(function (t) {
      f.push(t.fulfilled, t.rejected);
    });
    let d = 0;
    if (!c) {
      let t = [ew.bind(this), void 0];
      for (
        t.unshift.apply(t, l),
          t.push.apply(t, f),
          n = t.length,
          i = Promise.resolve(e);
        d < n;

      )
        i = i.then(t[d++], t[d++]);
      return i;
    }
    n = l.length;
    let p = e;
    for (d = 0; d < n; ) {
      let t = l[d++],
        e = l[d++];
      try {
        p = t(p);
      } catch (t) {
        e.call(this, t);
        break;
      }
    }
    try {
      i = ew.call(this, p);
    } catch (t) {
      return Promise.reject(t);
    }
    for (d = 0, n = f.length; d < n; ) i = i.then(f[d++], f[d++]);
    return i;
  }
  getUri(t) {
    t = ek(this.defaults, t);
    let e = ed(t.baseURL, t.url);
    return tK(e, t.params, t.paramsSerializer);
  }
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new tQ(), response: new tQ() });
  }
}
("use strict");
Z.forEach(["delete", "get", "head", "options"], function (t) {
  eI.prototype[t] = function (e, o) {
    return this.request(
      ek(o || {}, { method: t, url: e, data: (o || {}).data })
    );
  };
}),
  Z.forEach(["post", "put", "patch"], function (t) {
    function e(e) {
      return function (o, i, n) {
        return this.request(
          ek(n || {}, {
            method: t,
            headers: e ? { "Content-Type": "multipart/form-data" } : {},
            url: o,
            data: i,
          })
        );
      };
    }
    (eI.prototype[t] = e()), (eI.prototype[t + "Form"] = e(!0));
  });
class eA {
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    let e = this._listeners.indexOf(t);
    -1 !== e && this._listeners.splice(e, 1);
  }
  static source() {
    let t;
    let e = new eA(function (e) {
      t = e;
    });
    return { token: e, cancel: t };
  }
  constructor(t) {
    let e;
    if ("function" != typeof t) throw TypeError("executor must be a function.");
    this.promise = new Promise(function (t) {
      e = t;
    });
    let o = this;
    this.promise.then((t) => {
      if (!o._listeners) return;
      let e = o._listeners.length;
      for (; e-- > 0; ) o._listeners[e](t);
      o._listeners = null;
    }),
      (this.promise.then = (t) => {
        let e;
        let i = new Promise((t) => {
          o.subscribe(t), (e = t);
        }).then(t);
        return (
          (i.cancel = function () {
            o.unsubscribe(e);
          }),
          i
        );
      }),
      t(function (t, i, n) {
        o.reason || ((o.reason = new ec(t, i, n)), e(o.reason));
      });
  }
}
("use strict");
("use strict");
("use strict");
const eL = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(eL).forEach(([t, e]) => {
  eL[e] = t;
});
const eR = (function t(e) {
  let o = new eI(e),
    i = x(eI.prototype.request, o);
  return (
    Z.extend(i, eI.prototype, o, { allOwnKeys: !0 }),
    Z.extend(i, o, null, { allOwnKeys: !0 }),
    (i.create = function (o) {
      return t(ek(e, o));
    }),
    i
  );
})(t9);
(eR.Axios = eI),
  (eR.CanceledError = ec),
  (eR.CancelToken = eA),
  (eR.isCancel = el),
  (eR.VERSION = eC),
  (eR.toFormData = tq),
  (eR.AxiosError = K),
  (eR.Cancel = eR.CanceledError),
  (eR.all = function (t) {
    return Promise.all(t);
  }),
  (eR.spread = function (t) {
    return function (e) {
      return t.apply(null, e);
    };
  }),
  (eR.isAxiosError = function (t) {
    return Z.isObject(t) && !0 === t.isAxiosError;
  }),
  (eR.mergeConfig = ek),
  (eR.AxiosHeaders = er),
  (eR.formToJSON = (t) => t4(Z.isHTMLForm(t) ? new FormData(t) : t)),
  (eR.HttpStatusCode = eL),
  (eR.default = eR);
const {
  Axios: eT,
  AxiosError: ez,
  CanceledError: eB,
  isCancel: eD,
  CancelToken: eM,
  VERSION: eP,
  all: eW,
  Cancel: eX,
  isAxiosError: eF,
  spread: ej,
  toFormData: eU,
  AxiosHeaders: eH,
  HttpStatusCode: eY,
  formToJSON: e_,
  mergeConfig: eq,
} = eR;
async function e$(t, e, o) {
  try {
    let i = await eR.get(
      `https://pixabay.com/api/?key=37512295-7e92ae3b8c2d51cd4aec1f8a1&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${o}`
    );
    return i;
  } catch (t) {
    throw Error(t);
  }
}
const eV = document.querySelector(".search-form"),
  eJ = eV[0],
  eZ = document.querySelector(".load-more"),
  eK = document.querySelector(".gallery");
eZ.classList.add("is-hidden");
const eQ = new (e(l))(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
  disableScroll: !1,
});
function eG({
  webformatURL: t,
  largeImageURL: e,
  tags: o,
  likes: i,
  views: n,
  comments: a,
  downloads: r,
}) {
  return `
  <div class="photo-card">
<a href="${e}"><img src="${t}" alt="${o} loading="lazy"></a>
<div class="info">
  <p class="info-item">
    <b>Likes</b>
    ${i}
  </p>
  <p class="info-item">
    <b>Views</b>
    ${n}
  </p>
  <p class="info-item">
    <b>Comments</b>
    ${a}
  </p>
  <p class="info-item">
    <b>Downloads</b>
    ${r}
  </p>
</div>
</div>
`;
}
eV.addEventListener("submit", (e) => {
  e.preventDefault(),
    "" !== eJ.value.trim() &&
      ((t = 1),
      (eK.innerHTML = " "),
      e$(eJ.value, t, 40).then((t) => {
        let e = t.data;
        if (0 === e.total) {
          y(
            "Sorry, there are no images matching your search query. Please try again"
          );
          return;
        }
        eZ.classList.remove("is-hidden");
        let o = e.hits.map((t) => eG(t));
        eK.insertAdjacentHTML("beforeend", o.join("")), eQ.refresh();
      }));
}),
  eZ.addEventListener("click", () => {
    (t += 1),
      e$(eJ.value, t, 40)
        .then((t) => {
          console.log(t);
          let e = t.data;
          e.hits.length < 40 &&
            (y("We're sorry, but you've reached the end of search results."),
            eZ.classList.add("is-hidden"));
          let o = e.hits.map((t) => eG(t));
          eK.insertAdjacentHTML("beforeend", o.join("")), eQ.refresh();
        })
        .catch(() => {
          y("We're sorry, but you've reached the end of search results."),
            eZ.classList.add("is-hidden");
        });
  });
//# sourceMappingURL=index.526ad28e.js.map
