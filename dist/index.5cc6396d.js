!function() {
    function t(t) {
        return t && t.__esModule ? t.default : t;
    }
    "use strict";
    var e, o, n, i, r, a, s, l, c, f, d = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, u = {};
    function p(t) {
        return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        })(t);
    }
    function m(t, e) {
        var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!o) {
            if (Array.isArray(t) || (o = h(t)) || e && t && "number" == typeof t.length) {
                o && (t = o);
                var n = 0, i = function() {};
                return {
                    s: i,
                    n: function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        };
                    },
                    e: function(t) {
                        throw t;
                    },
                    f: i
                };
            }
            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var r, a = !0, s = !1;
        return {
            s: function() {
                o = o.call(t);
            },
            n: function() {
                var t = o.next();
                return a = t.done, t;
            },
            e: function(t) {
                s = !0, r = t;
            },
            f: function() {
                try {
                    a || null == o.return || o.return();
                } finally{
                    if (s) throw r;
                }
            }
        };
    }
    function h(t, e) {
        if (t) {
            if ("string" == typeof t) return g(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            if ("Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o) return Array.from(t);
            if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return g(t, e);
        }
    }
    function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for(var o = 0, n = Array(e); o < e; o++)n[o] = t[o];
        return n;
    }
    function y(t, e) {
        for(var o = 0; o < e.length; o++){
            var n = e[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
    }
    function x(t, e, o) {
        return e in t ? Object.defineProperty(t, e, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = o, t;
    }
    Object.defineProperty(u, "__esModule", {
        value: !0
    }), u.default = void 0;
    var b = function() {
        var t, e;
        function o(t, e) {
            var n = this;
            if (!function(t, e) {
                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function");
            }(this, o), x(this, "defaultOptions", {
                sourceAttr: "href",
                overlay: !0,
                overlayOpacity: 0.7,
                spinner: !0,
                nav: !0,
                navText: [
                    "&lsaquo;",
                    "&rsaquo;"
                ],
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
                download: !1
            }), x(this, "transitionPrefix", void 0), x(this, "isPassiveEventsSupported", void 0), x(this, "transitionCapable", !1), x(this, "isTouchDevice", "ontouchstart" in window), x(this, "isAppleDevice", /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)), x(this, "initialLocationHash", void 0), x(this, "pushStateSupport", "pushState" in history), x(this, "isOpen", !1), x(this, "isAnimating", !1), x(this, "isClosing", !1), x(this, "isFadeIn", !1), x(this, "urlChangedOnce", !1), x(this, "hashReseted", !1), x(this, "historyHasChanges", !1), x(this, "historyUpdateTimeout", null), x(this, "currentImage", void 0), x(this, "eventNamespace", "simplelightbox"), x(this, "domNodes", {}), x(this, "loadedImages", []), x(this, "initialImageIndex", 0), x(this, "currentImageIndex", 0), x(this, "initialSelector", null), x(this, "globalScrollbarWidth", 0), x(this, "controlCoordinates", {
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
                touchmoveCount: 0
            }), this.options = Object.assign(this.defaultOptions, e), this.isPassiveEventsSupported = this.checkPassiveEventsSupport(), "string" == typeof t ? (this.initialSelector = t, this.elements = Array.from(document.querySelectorAll(t))) : this.elements = void 0 !== t.length && t.length > 0 ? Array.from(t) : [
                t
            ], this.relatedElements = [], this.transitionPrefix = this.calculateTransitionPrefix(), this.transitionCapable = !1 !== this.transitionPrefix, this.initialLocationHash = this.hash, this.options.rel && (this.elements = this.getRelated(this.options.rel)), this.options.uniqueImages) {
                var i = [];
                this.elements = Array.from(this.elements).filter(function(t) {
                    var e = t.getAttribute(n.options.sourceAttr);
                    return -1 === i.indexOf(e) && (i.push(e), !0);
                });
            }
            this.createDomNodes(), this.options.close && this.domNodes.wrapper.appendChild(this.domNodes.closeButton), this.options.nav && this.domNodes.wrapper.appendChild(this.domNodes.navigation), this.options.spinner && this.domNodes.wrapper.appendChild(this.domNodes.spinner), this.addEventListener(this.elements, "click." + this.eventNamespace, function(t) {
                if (n.isValidLink(t.currentTarget)) {
                    if (t.preventDefault(), n.isAnimating) return !1;
                    n.initialImageIndex = n.elements.indexOf(t.currentTarget), n.openImage(t.currentTarget);
                }
            }), this.options.docClose && this.addEventListener(this.domNodes.wrapper, [
                "click." + this.eventNamespace,
                "touchstart." + this.eventNamespace
            ], function(t) {
                n.isOpen && t.target === t.currentTarget && n.close();
            }), this.options.disableRightClick && this.addEventListener(document.body, "contextmenu." + this.eventNamespace, function(t) {
                t.target.parentElement.classList.contains("sl-image") && t.preventDefault();
            }), this.options.enableKeyboard && this.addEventListener(document.body, "keyup." + this.eventNamespace, this.throttle(function(t) {
                if (n.controlCoordinates.swipeDiff = 0, n.isAnimating && "Escape" === t.key) {
                    n.currentImage.setAttribute("src", ""), n.isAnimating = !1, n.close();
                    return;
                }
                n.isOpen && (t.preventDefault(), "Escape" === t.key && n.close(), !n.isAnimating && [
                    "ArrowLeft",
                    "ArrowRight"
                ].indexOf(t.key) > -1 && n.loadImage("ArrowRight" === t.key ? 1 : -1));
            }, this.options.throttleInterval)), this.addEvents();
        }
        return t = [
            {
                key: "checkPassiveEventsSupport",
                value: function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0;
                            }
                        });
                        window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
                    } catch (t) {}
                    return t;
                }
            },
            {
                key: "getCaptionElement",
                value: function(t) {
                    if (this.options.captionSelector.startsWith("+")) {
                        var e = this.options.captionSelector.replace(/^\+/, "").trimStart(), o = t.nextElementSibling;
                        return !!o.matches(e) && o;
                    }
                    if (!this.options.captionSelector.startsWith(">")) return t.querySelector(this.options.captionSelector);
                    var n = this.options.captionSelector.replace(/^>/, "").trimStart();
                    return t.querySelector(n);
                }
            },
            {
                key: "generateQuerySelector",
                value: function(t) {
                    var e = t.tagName, o = t.id, n = t.className, i = t.parentNode;
                    if ("HTML" === e) return "HTML";
                    var r = e;
                    if (r += "" !== o ? "#".concat(o) : "", n) for(var a = n.trim().split(/\s/), s = 0; s < a.length; s++)r += ".".concat(a[s]);
                    for(var l = 1, c = t; c.previousElementSibling; c = c.previousElementSibling)l += 1;
                    return r += ":nth-child(".concat(l, ")"), "".concat(this.generateQuerySelector(i), " > ").concat(r);
                }
            },
            {
                key: "createDomNodes",
                value: function() {
                    if (this.domNodes.overlay = document.createElement("div"), this.domNodes.overlay.classList.add("sl-overlay"), this.domNodes.overlay.dataset.opacityTarget = this.options.overlayOpacity, this.domNodes.closeButton = document.createElement("button"), this.domNodes.closeButton.classList.add("sl-close"), this.domNodes.closeButton.innerHTML = this.options.closeText, this.domNodes.spinner = document.createElement("div"), this.domNodes.spinner.classList.add("sl-spinner"), this.domNodes.spinner.innerHTML = "<div></div>", this.domNodes.navigation = document.createElement("div"), this.domNodes.navigation.classList.add("sl-navigation"), this.domNodes.navigation.innerHTML = '<button class="sl-prev">'.concat(this.options.navText[0], '</button><button class="sl-next">').concat(this.options.navText[1], "</button>"), this.domNodes.counter = document.createElement("div"), this.domNodes.counter.classList.add("sl-counter"), this.domNodes.counter.innerHTML = '<span class="sl-current"></span>/<span class="sl-total"></span>', this.domNodes.download = document.createElement("div"), this.domNodes.download.classList.add("sl-download"), this.domNodes.downloadLink = document.createElement("a"), this.domNodes.downloadLink.setAttribute("download", ""), this.domNodes.downloadLink.textContent = this.options.download, this.domNodes.download.appendChild(this.domNodes.downloadLink), this.domNodes.caption = document.createElement("div"), this.domNodes.caption.classList.add("sl-caption", "pos-" + this.options.captionPosition), this.options.captionClass) {
                        var t, e = this.options.captionClass.split(/[\s,]+/);
                        (t = this.domNodes.caption.classList).add.apply(t, function(t) {
                            if (Array.isArray(t)) return g(t);
                        }(e) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
                        }(e) || h(e) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }());
                    }
                    this.domNodes.image = document.createElement("div"), this.domNodes.image.classList.add("sl-image"), this.domNodes.wrapper = document.createElement("div"), this.domNodes.wrapper.classList.add("sl-wrapper"), this.domNodes.wrapper.setAttribute("tabindex", -1), this.domNodes.wrapper.setAttribute("role", "dialog"), this.domNodes.wrapper.setAttribute("aria-hidden", !1), this.options.className && this.domNodes.wrapper.classList.add(this.options.className), this.options.rtl && this.domNodes.wrapper.classList.add("sl-dir-rtl");
                }
            },
            {
                key: "throttle",
                value: function(t, e) {
                    var o;
                    return function() {
                        o || (t.apply(this, arguments), o = !0, setTimeout(function() {
                            return o = !1;
                        }, e));
                    };
                }
            },
            {
                key: "isValidLink",
                value: function(t) {
                    return !this.options.fileExt || t.getAttribute(this.options.sourceAttr) && RegExp("(" + this.options.fileExt + ")($|\\?.*$)", "i").test(t.getAttribute(this.options.sourceAttr));
                }
            },
            {
                key: "calculateTransitionPrefix",
                value: function() {
                    var t = (document.body || document.documentElement).style;
                    return "transition" in t ? "" : "WebkitTransition" in t ? "-webkit-" : "MozTransition" in t ? "-moz-" : "OTransition" in t && "-o";
                }
            },
            {
                key: "getScrollbarWidth",
                value: function() {
                    var t = 0, e = document.createElement("div");
                    return e.classList.add("sl-scrollbar-measure"), document.body.appendChild(e), t = e.offsetWidth - e.clientWidth, document.body.removeChild(e), t;
                }
            },
            {
                key: "toggleScrollbar",
                value: function(t) {
                    var e = 0, o = [].slice.call(document.querySelectorAll("." + this.options.fixedClass));
                    if ("hide" === t) {
                        var n = window.innerWidth;
                        if (!n) {
                            var i = document.documentElement.getBoundingClientRect();
                            n = i.right - Math.abs(i.left);
                        }
                        if (document.body.clientWidth < n || this.isAppleDevice) {
                            var r = parseInt(window.getComputedStyle(document.body).paddingRight || 0, 10);
                            e = this.getScrollbarWidth(), document.body.dataset.originalPaddingRight = r, (e > 0 || 0 == e && this.isAppleDevice) && (document.body.classList.add("hidden-scroll"), document.body.style.paddingRight = r + e + "px", o.forEach(function(t) {
                                var o = t.style.paddingRight, n = window.getComputedStyle(t)["padding-right"];
                                t.dataset.originalPaddingRight = o, t.style.paddingRight = "".concat(parseFloat(n) + e, "px");
                            }));
                        }
                    } else document.body.classList.remove("hidden-scroll"), document.body.style.paddingRight = document.body.dataset.originalPaddingRight + "px", o.forEach(function(t) {
                        var e = t.dataset.originalPaddingRight;
                        void 0 !== e && (t.style.paddingRight = e);
                    });
                    return e;
                }
            },
            {
                key: "close",
                value: function() {
                    var t = this;
                    if (!this.isOpen || this.isAnimating || this.isClosing) return !1;
                    this.isClosing = !0;
                    var e = this.relatedElements[this.currentImageIndex];
                    for(var o in e.dispatchEvent(new Event("close.simplelightbox")), this.options.history && (this.historyHasChanges = !1, this.hashReseted || this.resetHash()), this.removeEventListener(document, "focusin." + this.eventNamespace), this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed), this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"), this.options.fadeSpeed, function() {
                        t.options.disableScroll && t.toggleScrollbar("show"), t.options.htmlClass && "" !== t.options.htmlClass && document.querySelector("html").classList.remove(t.options.htmlClass), document.body.removeChild(t.domNodes.wrapper), t.options.overlay && document.body.removeChild(t.domNodes.overlay), t.domNodes.additionalHtml = null, t.domNodes.download = null, e.dispatchEvent(new Event("closed.simplelightbox")), t.isClosing = !1;
                    }), this.currentImage = null, this.isOpen = !1, this.isAnimating = !1, this.controlCoordinates)this.controlCoordinates[o] = 0;
                    this.controlCoordinates.mousedown = !1, this.controlCoordinates.zoomed = !1, this.controlCoordinates.capture = !1, this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom), this.controlCoordinates.doubleTapped = !1;
                }
            },
            {
                key: "hash",
                get: function() {
                    return window.location.hash.substring(1);
                }
            },
            {
                key: "preload",
                value: function() {
                    var t = this, e = this.currentImageIndex, o = this.relatedElements.length, n = new Image(), i = new Image();
                    n.addEventListener("load", function(o) {
                        var n = o.target.getAttribute("src");
                        -1 === t.loadedImages.indexOf(n) && t.loadedImages.push(n), t.relatedElements[e].dispatchEvent(new Event("nextImageLoaded." + t.eventNamespace));
                    }), n.setAttribute("src", this.relatedElements[e + 1 < 0 ? o - 1 : e + 1 >= o - 1 ? 0 : e + 1].getAttribute(this.options.sourceAttr)), i.addEventListener("load", function(o) {
                        var n = o.target.getAttribute("src");
                        -1 === t.loadedImages.indexOf(n) && t.loadedImages.push(n), t.relatedElements[e].dispatchEvent(new Event("prevImageLoaded." + t.eventNamespace));
                    }), i.setAttribute("src", this.relatedElements[e - 1 < 0 ? o - 1 : e - 1 >= o - 1 ? 0 : e - 1].getAttribute(this.options.sourceAttr));
                }
            },
            {
                key: "loadImage",
                value: function(t) {
                    var e = this, o = t;
                    this.options.rtl && (t = -t), this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change." + this.eventNamespace)), this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1 === t ? "next" : "prev") + "." + this.eventNamespace));
                    var n = this.currentImageIndex + t;
                    if (this.isAnimating || (n < 0 || n >= this.relatedElements.length) && !1 === this.options.loop) return !1;
                    this.currentImageIndex = n < 0 ? this.relatedElements.length - 1 : n > this.relatedElements.length - 1 ? 0 : n, this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1, this.options.animationSlide && this.slide(this.options.animationSpeed / 1e3, -100 * o - this.controlCoordinates.swipeDiff + "px"), this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function() {
                        e.isAnimating = !0, e.isClosing ? e.isAnimating = !1 : setTimeout(function() {
                            var t = e.relatedElements[e.currentImageIndex];
                            e.currentImage && (e.currentImage.setAttribute("src", t.getAttribute(e.options.sourceAttr)), -1 === e.loadedImages.indexOf(t.getAttribute(e.options.sourceAttr)) && e.show(e.domNodes.spinner), e.domNodes.image.contains(e.domNodes.caption) && e.domNodes.image.removeChild(e.domNodes.caption), e.adjustImage(o), e.options.preloading && e.preload());
                        }, 100);
                    });
                }
            },
            {
                key: "adjustImage",
                value: function(t) {
                    var e = this;
                    if (!this.currentImage) return !1;
                    var o = new Image(), n = window.innerWidth * this.options.widthRatio, i = window.innerHeight * this.options.heightRatio;
                    o.setAttribute("src", this.currentImage.getAttribute("src")), this.currentImage.dataset.scale = 1, this.currentImage.dataset.translateX = 0, this.currentImage.dataset.translateY = 0, this.zoomPanElement(0, 0, 1), o.addEventListener("error", function(o) {
                        e.relatedElements[e.currentImageIndex].dispatchEvent(new Event("error." + e.eventNamespace)), e.isAnimating = !1, e.isOpen = !0, e.domNodes.spinner.style.display = "none";
                        var n = 1 === t || -1 === t;
                        if (e.initialImageIndex === e.currentImageIndex && n) return e.close();
                        e.options.alertError && alert(e.options.alertErrorMessage), e.loadImage(n ? t : 1);
                    }), o.addEventListener("load", function(o) {
                        void 0 !== t && (e.relatedElements[e.currentImageIndex].dispatchEvent(new Event("changed." + e.eventNamespace)), e.relatedElements[e.currentImageIndex].dispatchEvent(new Event((1 === t ? "nextDone" : "prevDone") + "." + e.eventNamespace))), e.options.history && e.updateURL(), -1 === e.loadedImages.indexOf(e.currentImage.getAttribute("src")) && e.loadedImages.push(e.currentImage.getAttribute("src"));
                        var r, a, s = o.target.width, l = o.target.height;
                        if (e.options.scaleImageToRatio || s > n || l > i) {
                            var c = s / l > n / i ? s / n : l / i;
                            s /= c, l /= c;
                        }
                        e.domNodes.image.style.top = (window.innerHeight - l) / 2 + "px", e.domNodes.image.style.left = (window.innerWidth - s - e.globalScrollbarWidth) / 2 + "px", e.domNodes.image.style.width = s + "px", e.domNodes.image.style.height = l + "px", e.domNodes.spinner.style.display = "none", e.options.focus && e.forceFocus(), e.fadeIn(e.currentImage, e.options.fadeSpeed, function() {
                            e.options.focus && e.domNodes.wrapper.focus();
                        }), e.isOpen = !0, "string" == typeof e.options.captionSelector ? r = "self" === e.options.captionSelector ? e.relatedElements[e.currentImageIndex] : e.getCaptionElement(e.relatedElements[e.currentImageIndex]) : "function" == typeof e.options.captionSelector && (r = e.options.captionSelector(e.relatedElements[e.currentImageIndex])), e.options.captions && r && (a = "data" === e.options.captionType ? r.dataset[e.options.captionsData] : "text" === e.options.captionType ? r.innerHTML : r.getAttribute(e.options.captionsData)), e.options.loop ? 1 === e.relatedElements.length ? e.hide(e.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")) : e.show(e.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")) : (0 === e.currentImageIndex && e.hide(e.domNodes.navigation.querySelector(".sl-prev")), e.currentImageIndex >= e.relatedElements.length - 1 && e.hide(e.domNodes.navigation.querySelector(".sl-next")), e.currentImageIndex > 0 && e.show(e.domNodes.navigation.querySelector(".sl-prev")), e.currentImageIndex < e.relatedElements.length - 1 && e.show(e.domNodes.navigation.querySelector(".sl-next"))), 1 === t || -1 === t ? (e.options.animationSlide && (e.slide(0, 100 * t + "px"), setTimeout(function() {
                            e.slide(e.options.animationSpeed / 1e3, "0px");
                        }, 50)), e.fadeIn(e.domNodes.image, e.options.fadeSpeed, function() {
                            e.isAnimating = !1, e.setCaption(a, s);
                        })) : (e.isAnimating = !1, e.setCaption(a, s)), e.options.additionalHtml && !e.domNodes.additionalHtml && (e.domNodes.additionalHtml = document.createElement("div"), e.domNodes.additionalHtml.classList.add("sl-additional-html"), e.domNodes.additionalHtml.innerHTML = e.options.additionalHtml, e.domNodes.image.appendChild(e.domNodes.additionalHtml)), e.options.download && e.domNodes.downloadLink.setAttribute("href", e.currentImage.getAttribute("src"));
                    });
                }
            },
            {
                key: "zoomPanElement",
                value: function(t, e, o) {
                    this.currentImage.style[this.transitionPrefix + "transform"] = "translate(" + t + "," + e + ") scale(" + o + ")";
                }
            },
            {
                key: "minMax",
                value: function(t, e, o) {
                    return t < e ? e : t > o ? o : t;
                }
            },
            {
                key: "setZoomData",
                value: function(t, e, o) {
                    this.currentImage.dataset.scale = t, this.currentImage.dataset.translateX = e, this.currentImage.dataset.translateY = o;
                }
            },
            {
                key: "hashchangeHandler",
                value: function() {
                    this.isOpen && this.hash === this.initialLocationHash && (this.hashReseted = !0, this.close());
                }
            },
            {
                key: "addEvents",
                value: function() {
                    var t = this;
                    if (this.addEventListener(window, "resize." + this.eventNamespace, function(e) {
                        t.isOpen && t.adjustImage();
                    }), this.addEventListener(this.domNodes.closeButton, [
                        "click." + this.eventNamespace,
                        "touchstart." + this.eventNamespace
                    ], this.close.bind(this)), this.options.history && setTimeout(function() {
                        t.addEventListener(window, "hashchange." + t.eventNamespace, function(e) {
                            t.isOpen && t.hashchangeHandler();
                        });
                    }, 40), this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace, function(e) {
                        if (!e.currentTarget.tagName.match(/button/i)) return !0;
                        e.preventDefault(), t.controlCoordinates.swipeDiff = 0, t.loadImage(e.currentTarget.classList.contains("sl-next") ? 1 : -1);
                    }), this.options.scrollZoom) {
                        var e = 1;
                        this.addEventListener(this.domNodes.image, [
                            "mousewheel",
                            "DOMMouseScroll"
                        ], function(o) {
                            if (t.controlCoordinates.mousedown || t.isAnimating || t.isClosing || !t.isOpen) return !0;
                            0 == t.controlCoordinates.containerHeight && (t.controlCoordinates.containerHeight = t.getDimensions(t.domNodes.image).height, t.controlCoordinates.containerWidth = t.getDimensions(t.domNodes.image).width, t.controlCoordinates.imgHeight = t.getDimensions(t.currentImage).height, t.controlCoordinates.imgWidth = t.getDimensions(t.currentImage).width, t.controlCoordinates.containerOffsetX = t.domNodes.image.offsetLeft, t.controlCoordinates.containerOffsetY = t.domNodes.image.offsetTop, t.controlCoordinates.initialOffsetX = parseFloat(t.currentImage.dataset.translateX), t.controlCoordinates.initialOffsetY = parseFloat(t.currentImage.dataset.translateY));
                            var n = o.delta || o.wheelDelta;
                            void 0 === n && (n = o.detail), n = Math.max(-1, Math.min(1, n)), e += n * t.options.scrollZoomFactor * e, e = Math.max(1, Math.min(t.options.maxZoom, e)), t.controlCoordinates.targetScale = e;
                            var i = document.documentElement.scrollTop || document.body.scrollTop;
                            t.controlCoordinates.pinchOffsetX = o.pageX, t.controlCoordinates.pinchOffsetY = o.pageY - i || 0, t.controlCoordinates.limitOffsetX = (t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale - t.controlCoordinates.containerWidth) / 2, t.controlCoordinates.limitOffsetY = (t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale - t.controlCoordinates.containerHeight) / 2, t.controlCoordinates.scaleDifference = t.controlCoordinates.targetScale - t.controlCoordinates.initialScale, t.controlCoordinates.targetOffsetX = t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale <= t.controlCoordinates.containerWidth ? 0 : t.minMax(t.controlCoordinates.initialOffsetX - (t.controlCoordinates.pinchOffsetX - t.controlCoordinates.containerOffsetX - t.controlCoordinates.containerWidth / 2 - t.controlCoordinates.initialOffsetX) / (t.controlCoordinates.targetScale - t.controlCoordinates.scaleDifference) * t.controlCoordinates.scaleDifference, -1 * t.controlCoordinates.limitOffsetX, t.controlCoordinates.limitOffsetX), t.controlCoordinates.targetOffsetY = t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale <= t.controlCoordinates.containerHeight ? 0 : t.minMax(t.controlCoordinates.initialOffsetY - (t.controlCoordinates.pinchOffsetY - t.controlCoordinates.containerOffsetY - t.controlCoordinates.containerHeight / 2 - t.controlCoordinates.initialOffsetY) / (t.controlCoordinates.targetScale - t.controlCoordinates.scaleDifference) * t.controlCoordinates.scaleDifference, -1 * t.controlCoordinates.limitOffsetY, t.controlCoordinates.limitOffsetY), t.zoomPanElement(t.controlCoordinates.targetOffsetX + "px", t.controlCoordinates.targetOffsetY + "px", t.controlCoordinates.targetScale), t.controlCoordinates.targetScale > 1 ? (t.controlCoordinates.zoomed = !0, (!t.domNodes.caption.style.opacity || t.domNodes.caption.style.opacity > 0) && "none" !== t.domNodes.caption.style.display && t.fadeOut(t.domNodes.caption, t.options.fadeSpeed)) : (1 === t.controlCoordinates.initialScale && (t.controlCoordinates.zoomed = !1, "none" === t.domNodes.caption.style.display && t.fadeIn(t.domNodes.caption, t.options.fadeSpeed)), t.controlCoordinates.initialPinchDistance = null, t.controlCoordinates.capture = !1), t.controlCoordinates.initialPinchDistance = t.controlCoordinates.targetPinchDistance, t.controlCoordinates.initialScale = t.controlCoordinates.targetScale, t.controlCoordinates.initialOffsetX = t.controlCoordinates.targetOffsetX, t.controlCoordinates.initialOffsetY = t.controlCoordinates.targetOffsetY, t.setZoomData(t.controlCoordinates.targetScale, t.controlCoordinates.targetOffsetX, t.controlCoordinates.targetOffsetY), t.zoomPanElement(t.controlCoordinates.targetOffsetX + "px", t.controlCoordinates.targetOffsetY + "px", t.controlCoordinates.targetScale);
                        });
                    }
                    this.addEventListener(this.domNodes.image, [
                        "touchstart." + this.eventNamespace,
                        "mousedown." + this.eventNamespace
                    ], function(e) {
                        if ("A" === e.target.tagName && "touchstart" === e.type) return !0;
                        if ("mousedown" === e.type) e.preventDefault(), t.controlCoordinates.initialPointerOffsetX = e.clientX, t.controlCoordinates.initialPointerOffsetY = e.clientY, t.controlCoordinates.containerHeight = t.getDimensions(t.domNodes.image).height, t.controlCoordinates.containerWidth = t.getDimensions(t.domNodes.image).width, t.controlCoordinates.imgHeight = t.getDimensions(t.currentImage).height, t.controlCoordinates.imgWidth = t.getDimensions(t.currentImage).width, t.controlCoordinates.containerOffsetX = t.domNodes.image.offsetLeft, t.controlCoordinates.containerOffsetY = t.domNodes.image.offsetTop, t.controlCoordinates.initialOffsetX = parseFloat(t.currentImage.dataset.translateX), t.controlCoordinates.initialOffsetY = parseFloat(t.currentImage.dataset.translateY), t.controlCoordinates.capture = !0;
                        else {
                            if (t.controlCoordinates.touchCount = e.touches.length, t.controlCoordinates.initialPointerOffsetX = e.touches[0].clientX, t.controlCoordinates.initialPointerOffsetY = e.touches[0].clientY, t.controlCoordinates.containerHeight = t.getDimensions(t.domNodes.image).height, t.controlCoordinates.containerWidth = t.getDimensions(t.domNodes.image).width, t.controlCoordinates.imgHeight = t.getDimensions(t.currentImage).height, t.controlCoordinates.imgWidth = t.getDimensions(t.currentImage).width, t.controlCoordinates.containerOffsetX = t.domNodes.image.offsetLeft, t.controlCoordinates.containerOffsetY = t.domNodes.image.offsetTop, 1 === t.controlCoordinates.touchCount) {
                                if (t.controlCoordinates.doubleTapped) return t.currentImage.classList.add("sl-transition"), t.controlCoordinates.zoomed ? (t.controlCoordinates.initialScale = 1, t.setZoomData(t.controlCoordinates.initialScale, 0, 0), t.zoomPanElement("0px", "0px", t.controlCoordinates.initialScale), t.controlCoordinates.zoomed = !1) : (t.controlCoordinates.initialScale = t.options.doubleTapZoom, t.setZoomData(t.controlCoordinates.initialScale, 0, 0), t.zoomPanElement("0px", "0px", t.controlCoordinates.initialScale), (!t.domNodes.caption.style.opacity || t.domNodes.caption.style.opacity > 0) && "none" !== t.domNodes.caption.style.display && t.fadeOut(t.domNodes.caption, t.options.fadeSpeed), t.controlCoordinates.zoomed = !0), setTimeout(function() {
                                    t.currentImage && t.currentImage.classList.remove("sl-transition");
                                }, 200), !1;
                                t.controlCoordinates.doubleTapped = !0, setTimeout(function() {
                                    t.controlCoordinates.doubleTapped = !1;
                                }, 300), t.controlCoordinates.initialOffsetX = parseFloat(t.currentImage.dataset.translateX), t.controlCoordinates.initialOffsetY = parseFloat(t.currentImage.dataset.translateY);
                            } else 2 === t.controlCoordinates.touchCount && (t.controlCoordinates.initialPointerOffsetX2 = e.touches[1].clientX, t.controlCoordinates.initialPointerOffsetY2 = e.touches[1].clientY, t.controlCoordinates.initialOffsetX = parseFloat(t.currentImage.dataset.translateX), t.controlCoordinates.initialOffsetY = parseFloat(t.currentImage.dataset.translateY), t.controlCoordinates.pinchOffsetX = (t.controlCoordinates.initialPointerOffsetX + t.controlCoordinates.initialPointerOffsetX2) / 2, t.controlCoordinates.pinchOffsetY = (t.controlCoordinates.initialPointerOffsetY + t.controlCoordinates.initialPointerOffsetY2) / 2, t.controlCoordinates.initialPinchDistance = Math.sqrt((t.controlCoordinates.initialPointerOffsetX - t.controlCoordinates.initialPointerOffsetX2) * (t.controlCoordinates.initialPointerOffsetX - t.controlCoordinates.initialPointerOffsetX2) + (t.controlCoordinates.initialPointerOffsetY - t.controlCoordinates.initialPointerOffsetY2) * (t.controlCoordinates.initialPointerOffsetY - t.controlCoordinates.initialPointerOffsetY2)));
                            t.controlCoordinates.capture = !0;
                        }
                        return !!t.controlCoordinates.mousedown || (t.transitionCapable && (t.controlCoordinates.imageLeft = parseInt(t.domNodes.image.style.left, 10)), t.controlCoordinates.mousedown = !0, t.controlCoordinates.swipeDiff = 0, t.controlCoordinates.swipeYDiff = 0, t.controlCoordinates.swipeStart = e.pageX || e.touches[0].pageX, t.controlCoordinates.swipeYStart = e.pageY || e.touches[0].pageY, !1);
                    }), this.addEventListener(this.domNodes.image, [
                        "touchmove." + this.eventNamespace,
                        "mousemove." + this.eventNamespace,
                        "MSPointerMove"
                    ], function(e) {
                        if (!t.controlCoordinates.mousedown) return !0;
                        if ("touchmove" === e.type) {
                            if (!1 === t.controlCoordinates.capture) return !1;
                            t.controlCoordinates.pointerOffsetX = e.touches[0].clientX, t.controlCoordinates.pointerOffsetY = e.touches[0].clientY, t.controlCoordinates.touchCount = e.touches.length, t.controlCoordinates.touchmoveCount++, t.controlCoordinates.touchCount > 1 ? (t.controlCoordinates.pointerOffsetX2 = e.touches[1].clientX, t.controlCoordinates.pointerOffsetY2 = e.touches[1].clientY, t.controlCoordinates.targetPinchDistance = Math.sqrt((t.controlCoordinates.pointerOffsetX - t.controlCoordinates.pointerOffsetX2) * (t.controlCoordinates.pointerOffsetX - t.controlCoordinates.pointerOffsetX2) + (t.controlCoordinates.pointerOffsetY - t.controlCoordinates.pointerOffsetY2) * (t.controlCoordinates.pointerOffsetY - t.controlCoordinates.pointerOffsetY2)), null === t.controlCoordinates.initialPinchDistance && (t.controlCoordinates.initialPinchDistance = t.controlCoordinates.targetPinchDistance), Math.abs(t.controlCoordinates.initialPinchDistance - t.controlCoordinates.targetPinchDistance) >= 1 && (t.controlCoordinates.targetScale = t.minMax(t.controlCoordinates.targetPinchDistance / t.controlCoordinates.initialPinchDistance * t.controlCoordinates.initialScale, 1, t.options.maxZoom), t.controlCoordinates.limitOffsetX = (t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale - t.controlCoordinates.containerWidth) / 2, t.controlCoordinates.limitOffsetY = (t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale - t.controlCoordinates.containerHeight) / 2, t.controlCoordinates.scaleDifference = t.controlCoordinates.targetScale - t.controlCoordinates.initialScale, t.controlCoordinates.targetOffsetX = t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale <= t.controlCoordinates.containerWidth ? 0 : t.minMax(t.controlCoordinates.initialOffsetX - (t.controlCoordinates.pinchOffsetX - t.controlCoordinates.containerOffsetX - t.controlCoordinates.containerWidth / 2 - t.controlCoordinates.initialOffsetX) / (t.controlCoordinates.targetScale - t.controlCoordinates.scaleDifference) * t.controlCoordinates.scaleDifference, -1 * t.controlCoordinates.limitOffsetX, t.controlCoordinates.limitOffsetX), t.controlCoordinates.targetOffsetY = t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale <= t.controlCoordinates.containerHeight ? 0 : t.minMax(t.controlCoordinates.initialOffsetY - (t.controlCoordinates.pinchOffsetY - t.controlCoordinates.containerOffsetY - t.controlCoordinates.containerHeight / 2 - t.controlCoordinates.initialOffsetY) / (t.controlCoordinates.targetScale - t.controlCoordinates.scaleDifference) * t.controlCoordinates.scaleDifference, -1 * t.controlCoordinates.limitOffsetY, t.controlCoordinates.limitOffsetY), t.zoomPanElement(t.controlCoordinates.targetOffsetX + "px", t.controlCoordinates.targetOffsetY + "px", t.controlCoordinates.targetScale), t.controlCoordinates.targetScale > 1 && (t.controlCoordinates.zoomed = !0, (!t.domNodes.caption.style.opacity || t.domNodes.caption.style.opacity > 0) && "none" !== t.domNodes.caption.style.display && t.fadeOut(t.domNodes.caption, t.options.fadeSpeed)), t.controlCoordinates.initialPinchDistance = t.controlCoordinates.targetPinchDistance, t.controlCoordinates.initialScale = t.controlCoordinates.targetScale, t.controlCoordinates.initialOffsetX = t.controlCoordinates.targetOffsetX, t.controlCoordinates.initialOffsetY = t.controlCoordinates.targetOffsetY)) : (t.controlCoordinates.targetScale = t.controlCoordinates.initialScale, t.controlCoordinates.limitOffsetX = (t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale - t.controlCoordinates.containerWidth) / 2, t.controlCoordinates.limitOffsetY = (t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale - t.controlCoordinates.containerHeight) / 2, t.controlCoordinates.targetOffsetX = t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale <= t.controlCoordinates.containerWidth ? 0 : t.minMax(t.controlCoordinates.pointerOffsetX - (t.controlCoordinates.initialPointerOffsetX - t.controlCoordinates.initialOffsetX), -1 * t.controlCoordinates.limitOffsetX, t.controlCoordinates.limitOffsetX), t.controlCoordinates.targetOffsetY = t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale <= t.controlCoordinates.containerHeight ? 0 : t.minMax(t.controlCoordinates.pointerOffsetY - (t.controlCoordinates.initialPointerOffsetY - t.controlCoordinates.initialOffsetY), -1 * t.controlCoordinates.limitOffsetY, t.controlCoordinates.limitOffsetY), Math.abs(t.controlCoordinates.targetOffsetX) === Math.abs(t.controlCoordinates.limitOffsetX) && (t.controlCoordinates.initialOffsetX = t.controlCoordinates.targetOffsetX, t.controlCoordinates.initialPointerOffsetX = t.controlCoordinates.pointerOffsetX), Math.abs(t.controlCoordinates.targetOffsetY) === Math.abs(t.controlCoordinates.limitOffsetY) && (t.controlCoordinates.initialOffsetY = t.controlCoordinates.targetOffsetY, t.controlCoordinates.initialPointerOffsetY = t.controlCoordinates.pointerOffsetY), t.setZoomData(t.controlCoordinates.initialScale, t.controlCoordinates.targetOffsetX, t.controlCoordinates.targetOffsetY), t.zoomPanElement(t.controlCoordinates.targetOffsetX + "px", t.controlCoordinates.targetOffsetY + "px", t.controlCoordinates.targetScale));
                        }
                        if ("mousemove" === e.type && t.controlCoordinates.mousedown) {
                            if ("touchmove" == e.type) return !0;
                            if (e.preventDefault(), !1 === t.controlCoordinates.capture) return !1;
                            t.controlCoordinates.pointerOffsetX = e.clientX, t.controlCoordinates.pointerOffsetY = e.clientY, t.controlCoordinates.targetScale = t.controlCoordinates.initialScale, t.controlCoordinates.limitOffsetX = (t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale - t.controlCoordinates.containerWidth) / 2, t.controlCoordinates.limitOffsetY = (t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale - t.controlCoordinates.containerHeight) / 2, t.controlCoordinates.targetOffsetX = t.controlCoordinates.imgWidth * t.controlCoordinates.targetScale <= t.controlCoordinates.containerWidth ? 0 : t.minMax(t.controlCoordinates.pointerOffsetX - (t.controlCoordinates.initialPointerOffsetX - t.controlCoordinates.initialOffsetX), -1 * t.controlCoordinates.limitOffsetX, t.controlCoordinates.limitOffsetX), t.controlCoordinates.targetOffsetY = t.controlCoordinates.imgHeight * t.controlCoordinates.targetScale <= t.controlCoordinates.containerHeight ? 0 : t.minMax(t.controlCoordinates.pointerOffsetY - (t.controlCoordinates.initialPointerOffsetY - t.controlCoordinates.initialOffsetY), -1 * t.controlCoordinates.limitOffsetY, t.controlCoordinates.limitOffsetY), Math.abs(t.controlCoordinates.targetOffsetX) === Math.abs(t.controlCoordinates.limitOffsetX) && (t.controlCoordinates.initialOffsetX = t.controlCoordinates.targetOffsetX, t.controlCoordinates.initialPointerOffsetX = t.controlCoordinates.pointerOffsetX), Math.abs(t.controlCoordinates.targetOffsetY) === Math.abs(t.controlCoordinates.limitOffsetY) && (t.controlCoordinates.initialOffsetY = t.controlCoordinates.targetOffsetY, t.controlCoordinates.initialPointerOffsetY = t.controlCoordinates.pointerOffsetY), t.setZoomData(t.controlCoordinates.initialScale, t.controlCoordinates.targetOffsetX, t.controlCoordinates.targetOffsetY), t.zoomPanElement(t.controlCoordinates.targetOffsetX + "px", t.controlCoordinates.targetOffsetY + "px", t.controlCoordinates.targetScale);
                        }
                        !t.controlCoordinates.zoomed && (t.controlCoordinates.swipeEnd = e.pageX || e.touches[0].pageX, t.controlCoordinates.swipeYEnd = e.pageY || e.touches[0].pageY, t.controlCoordinates.swipeDiff = t.controlCoordinates.swipeStart - t.controlCoordinates.swipeEnd, t.controlCoordinates.swipeYDiff = t.controlCoordinates.swipeYStart - t.controlCoordinates.swipeYEnd, t.options.animationSlide && t.slide(0, -t.controlCoordinates.swipeDiff + "px"));
                    }), this.addEventListener(this.domNodes.image, [
                        "touchend." + this.eventNamespace,
                        "mouseup." + this.eventNamespace,
                        "touchcancel." + this.eventNamespace,
                        "mouseleave." + this.eventNamespace,
                        "pointerup",
                        "pointercancel",
                        "MSPointerUp",
                        "MSPointerCancel"
                    ], function(e) {
                        if (t.isTouchDevice && "touchend" === e.type && (t.controlCoordinates.touchCount = e.touches.length, 0 === t.controlCoordinates.touchCount ? (t.currentImage && t.setZoomData(t.controlCoordinates.initialScale, t.controlCoordinates.targetOffsetX, t.controlCoordinates.targetOffsetY), 1 === t.controlCoordinates.initialScale && (t.controlCoordinates.zoomed = !1, "none" === t.domNodes.caption.style.display && t.fadeIn(t.domNodes.caption, t.options.fadeSpeed)), t.controlCoordinates.initialPinchDistance = null, t.controlCoordinates.capture = !1) : 1 === t.controlCoordinates.touchCount ? (t.controlCoordinates.initialPointerOffsetX = e.touches[0].clientX, t.controlCoordinates.initialPointerOffsetY = e.touches[0].clientY) : t.controlCoordinates.touchCount > 1 && (t.controlCoordinates.initialPinchDistance = null)), t.controlCoordinates.mousedown) {
                            t.controlCoordinates.mousedown = !1;
                            var o = !0;
                            !t.options.loop && (0 === t.currentImageIndex && t.controlCoordinates.swipeDiff < 0 && (o = !1), t.currentImageIndex >= t.relatedElements.length - 1 && t.controlCoordinates.swipeDiff > 0 && (o = !1)), Math.abs(t.controlCoordinates.swipeDiff) > t.options.swipeTolerance && o ? t.loadImage(t.controlCoordinates.swipeDiff > 0 ? 1 : -1) : t.options.animationSlide && t.slide(t.options.animationSpeed / 1e3, "0px"), t.options.swipeClose && Math.abs(t.controlCoordinates.swipeYDiff) > 50 && Math.abs(t.controlCoordinates.swipeDiff) < t.options.swipeTolerance && t.close();
                        }
                    }), this.addEventListener(this.domNodes.image, [
                        "dblclick"
                    ], function(e) {
                        if (!t.isTouchDevice) return t.controlCoordinates.initialPointerOffsetX = e.clientX, t.controlCoordinates.initialPointerOffsetY = e.clientY, t.controlCoordinates.containerHeight = t.getDimensions(t.domNodes.image).height, t.controlCoordinates.containerWidth = t.getDimensions(t.domNodes.image).width, t.controlCoordinates.imgHeight = t.getDimensions(t.currentImage).height, t.controlCoordinates.imgWidth = t.getDimensions(t.currentImage).width, t.controlCoordinates.containerOffsetX = t.domNodes.image.offsetLeft, t.controlCoordinates.containerOffsetY = t.domNodes.image.offsetTop, t.currentImage.classList.add("sl-transition"), t.controlCoordinates.zoomed ? (t.controlCoordinates.initialScale = 1, t.setZoomData(t.controlCoordinates.initialScale, 0, 0), t.zoomPanElement("0px", "0px", t.controlCoordinates.initialScale), t.controlCoordinates.zoomed = !1, "none" === t.domNodes.caption.style.display && t.fadeIn(t.domNodes.caption, t.options.fadeSpeed)) : (t.controlCoordinates.initialScale = t.options.doubleTapZoom, t.setZoomData(t.controlCoordinates.initialScale, 0, 0), t.zoomPanElement("0px", "0px", t.controlCoordinates.initialScale), (!t.domNodes.caption.style.opacity || t.domNodes.caption.style.opacity > 0) && "none" !== t.domNodes.caption.style.display && t.fadeOut(t.domNodes.caption, t.options.fadeSpeed), t.controlCoordinates.zoomed = !0), setTimeout(function() {
                            t.currentImage && (t.currentImage.classList.remove("sl-transition"), t.currentImage.style[t.transitionPrefix + "transform-origin"] = null);
                        }, 200), t.controlCoordinates.capture = !0, !1;
                    });
                }
            },
            {
                key: "getDimensions",
                value: function(t) {
                    var e = window.getComputedStyle(t), o = t.offsetHeight, n = t.offsetWidth, i = parseFloat(e.borderTopWidth);
                    return {
                        height: o - parseFloat(e.borderBottomWidth) - i - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom),
                        width: n - parseFloat(e.borderLeftWidth) - parseFloat(e.borderRightWidth) - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight)
                    };
                }
            },
            {
                key: "updateHash",
                value: function() {
                    var t = "pid=" + (this.currentImageIndex + 1), e = window.location.href.split("#")[0] + "#" + t;
                    this.hashReseted = !1, this.pushStateSupport ? window.history[this.historyHasChanges ? "replaceState" : "pushState"]("", document.title, e) : this.historyHasChanges ? window.location.replace(e) : window.location.hash = t, this.historyHasChanges || (this.urlChangedOnce = !0), this.historyHasChanges = !0;
                }
            },
            {
                key: "resetHash",
                value: function() {
                    this.hashReseted = !0, this.urlChangedOnce ? history.back() : this.pushStateSupport ? history.pushState("", document.title, window.location.pathname + window.location.search) : window.location.hash = "", clearTimeout(this.historyUpdateTimeout);
                }
            },
            {
                key: "updateURL",
                value: function() {
                    clearTimeout(this.historyUpdateTimeout), this.historyHasChanges ? this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800) : this.updateHash();
                }
            },
            {
                key: "setCaption",
                value: function(t, e) {
                    var o = this;
                    this.options.captions && t && "" !== t && void 0 !== t && (this.hide(this.domNodes.caption), this.domNodes.caption.style.width = e + "px", this.domNodes.caption.innerHTML = t, this.domNodes.image.appendChild(this.domNodes.caption), setTimeout(function() {
                        o.fadeIn(o.domNodes.caption, o.options.fadeSpeed);
                    }, this.options.captionDelay));
                }
            },
            {
                key: "slide",
                value: function(t, e) {
                    if (!this.transitionCapable) return this.domNodes.image.style.left = e;
                    this.domNodes.image.style[this.transitionPrefix + "transform"] = "translateX(" + e + ")", this.domNodes.image.style[this.transitionPrefix + "transition"] = this.transitionPrefix + "transform " + t + "s linear";
                }
            },
            {
                key: "getRelated",
                value: function(t) {
                    return t && !1 !== t && "nofollow" !== t ? Array.from(this.elements).filter(function(e) {
                        return e.getAttribute("rel") === t;
                    }) : this.elements;
                }
            },
            {
                key: "openImage",
                value: function(t) {
                    var e = this;
                    t.dispatchEvent(new Event("show." + this.eventNamespace)), this.globalScrollbarWidth = this.getScrollbarWidth(), this.options.disableScroll && (this.toggleScrollbar("hide"), this.globalScrollbarWidth = 0), this.options.htmlClass && "" !== this.options.htmlClass && document.querySelector("html").classList.add(this.options.htmlClass), document.body.appendChild(this.domNodes.wrapper), this.domNodes.wrapper.appendChild(this.domNodes.image), this.options.overlay && document.body.appendChild(this.domNodes.overlay), this.relatedElements = this.getRelated(t.rel), this.options.showCounter && (1 == this.relatedElements.length && this.domNodes.wrapper.contains(this.domNodes.counter) ? this.domNodes.wrapper.removeChild(this.domNodes.counter) : this.relatedElements.length > 1 && !this.domNodes.wrapper.contains(this.domNodes.counter) && this.domNodes.wrapper.appendChild(this.domNodes.counter)), this.options.download && this.domNodes.download && this.domNodes.wrapper.appendChild(this.domNodes.download), this.isAnimating = !0, this.currentImageIndex = this.relatedElements.indexOf(t);
                    var o = t.getAttribute(this.options.sourceAttr);
                    this.currentImage = document.createElement("img"), this.currentImage.style.display = "none", this.currentImage.setAttribute("src", o), this.currentImage.dataset.scale = 1, this.currentImage.dataset.translateX = 0, this.currentImage.dataset.translateY = 0, -1 === this.loadedImages.indexOf(o) && this.loadedImages.push(o), this.domNodes.image.innerHTML = "", this.domNodes.image.setAttribute("style", ""), this.domNodes.image.appendChild(this.currentImage), this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed), this.fadeIn([
                        this.domNodes.counter,
                        this.domNodes.navigation,
                        this.domNodes.closeButton,
                        this.domNodes.download
                    ], this.options.fadeSpeed), this.show(this.domNodes.spinner), this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1, this.domNodes.counter.querySelector(".sl-total").innerHTML = this.relatedElements.length, this.adjustImage(), this.options.preloading && this.preload(), setTimeout(function() {
                        t.dispatchEvent(new Event("shown." + e.eventNamespace));
                    }, this.options.animationSpeed);
                }
            },
            {
                key: "forceFocus",
                value: function() {
                    var t = this;
                    this.removeEventListener(document, "focusin." + this.eventNamespace), this.addEventListener(document, "focusin." + this.eventNamespace, function(e) {
                        document === e.target || t.domNodes.wrapper === e.target || t.domNodes.wrapper.contains(e.target) || t.domNodes.wrapper.focus();
                    });
                }
            },
            {
                key: "addEventListener",
                value: function(t, e, o, n) {
                    t = this.wrap(t), e = this.wrap(e);
                    var i, r = m(t);
                    try {
                        for(r.s(); !(i = r.n()).done;){
                            var a = i.value;
                            a.namespaces || (a.namespaces = {});
                            var s, l = m(e);
                            try {
                                for(l.s(); !(s = l.n()).done;){
                                    var c = s.value, f = n || !1;
                                    [
                                        "touchstart",
                                        "touchmove",
                                        "mousewheel",
                                        "DOMMouseScroll"
                                    ].indexOf(c.split(".")[0]) >= 0 && this.isPassiveEventsSupported && ("object" === p(f) ? f.passive = !0 : f = {
                                        passive: !0
                                    }), a.namespaces[c] = o, a.addEventListener(c.split(".")[0], o, f);
                                }
                            } catch (t) {
                                l.e(t);
                            } finally{
                                l.f();
                            }
                        }
                    } catch (t) {
                        r.e(t);
                    } finally{
                        r.f();
                    }
                }
            },
            {
                key: "removeEventListener",
                value: function(t, e) {
                    t = this.wrap(t), e = this.wrap(e);
                    var o, n = m(t);
                    try {
                        for(n.s(); !(o = n.n()).done;){
                            var i, r = o.value, a = m(e);
                            try {
                                for(a.s(); !(i = a.n()).done;){
                                    var s = i.value;
                                    r.namespaces && r.namespaces[s] && (r.removeEventListener(s.split(".")[0], r.namespaces[s]), delete r.namespaces[s]);
                                }
                            } catch (t) {
                                a.e(t);
                            } finally{
                                a.f();
                            }
                        }
                    } catch (t) {
                        n.e(t);
                    } finally{
                        n.f();
                    }
                }
            },
            {
                key: "fadeOut",
                value: function(t, e, o) {
                    var n, i = this, r = m(t = this.wrap(t));
                    try {
                        for(r.s(); !(n = r.n()).done;){
                            var a = n.value;
                            a.style.opacity = parseFloat(a) || window.getComputedStyle(a).getPropertyValue("opacity");
                        }
                    } catch (t) {
                        r.e(t);
                    } finally{
                        r.f();
                    }
                    this.isFadeIn = !1;
                    var s = 16.66666 / (e || this.options.fadeSpeed);
                    !function e() {
                        var n = parseFloat(t[0].style.opacity);
                        if ((n -= s) < 0) {
                            var r, a = m(t);
                            try {
                                for(a.s(); !(r = a.n()).done;){
                                    var l = r.value;
                                    l.style.display = "none", l.style.opacity = 1;
                                }
                            } catch (t) {
                                a.e(t);
                            } finally{
                                a.f();
                            }
                            o && o.call(i, t);
                        } else {
                            var c, f = m(t);
                            try {
                                for(f.s(); !(c = f.n()).done;)c.value.style.opacity = n;
                            } catch (t) {
                                f.e(t);
                            } finally{
                                f.f();
                            }
                            requestAnimationFrame(e);
                        }
                    }();
                }
            },
            {
                key: "fadeIn",
                value: function(t, e, o, n) {
                    var i, r = this, a = m(t = this.wrap(t));
                    try {
                        for(a.s(); !(i = a.n()).done;){
                            var s = i.value;
                            s && (s.style.opacity = 0, s.style.display = n || "block");
                        }
                    } catch (t) {
                        a.e(t);
                    } finally{
                        a.f();
                    }
                    this.isFadeIn = !0;
                    var l = parseFloat(t[0].dataset.opacityTarget || 1), c = 16.66666 * l / (e || this.options.fadeSpeed);
                    !function e() {
                        var n = parseFloat(t[0].style.opacity);
                        if ((n += c) > l) {
                            var i, a = m(t);
                            try {
                                for(a.s(); !(i = a.n()).done;){
                                    var s = i.value;
                                    s && (s.style.opacity = l);
                                }
                            } catch (t) {
                                a.e(t);
                            } finally{
                                a.f();
                            }
                            o && o.call(r, t);
                        } else {
                            var f, d = m(t);
                            try {
                                for(d.s(); !(f = d.n()).done;){
                                    var u = f.value;
                                    u && (u.style.opacity = n);
                                }
                            } catch (t) {
                                d.e(t);
                            } finally{
                                d.f();
                            }
                            if (!r.isFadeIn) return;
                            requestAnimationFrame(e);
                        }
                    }();
                }
            },
            {
                key: "hide",
                value: function(t) {
                    var e, o = m(t = this.wrap(t));
                    try {
                        for(o.s(); !(e = o.n()).done;){
                            var n = e.value;
                            "none" != n.style.display && (n.dataset.initialDisplay = n.style.display), n.style.display = "none";
                        }
                    } catch (t) {
                        o.e(t);
                    } finally{
                        o.f();
                    }
                }
            },
            {
                key: "show",
                value: function(t, e) {
                    var o, n = m(t = this.wrap(t));
                    try {
                        for(n.s(); !(o = n.n()).done;){
                            var i = o.value;
                            i.style.display = i.dataset.initialDisplay || e || "block";
                        }
                    } catch (t) {
                        n.e(t);
                    } finally{
                        n.f();
                    }
                }
            },
            {
                key: "wrap",
                value: function(t) {
                    return "function" == typeof t[Symbol.iterator] && "string" != typeof t ? t : [
                        t
                    ];
                }
            },
            {
                key: "on",
                value: function(t, e) {
                    t = this.wrap(t);
                    var o, n = m(this.elements);
                    try {
                        for(n.s(); !(o = n.n()).done;){
                            var i = o.value;
                            i.fullyNamespacedEvents || (i.fullyNamespacedEvents = {});
                            var r, a = m(t);
                            try {
                                for(a.s(); !(r = a.n()).done;){
                                    var s = r.value;
                                    i.fullyNamespacedEvents[s] = e, i.addEventListener(s, e);
                                }
                            } catch (t) {
                                a.e(t);
                            } finally{
                                a.f();
                            }
                        }
                    } catch (t) {
                        n.e(t);
                    } finally{
                        n.f();
                    }
                    return this;
                }
            },
            {
                key: "off",
                value: function(t) {
                    t = this.wrap(t);
                    var e, o = m(this.elements);
                    try {
                        for(o.s(); !(e = o.n()).done;){
                            var n, i = e.value, r = m(t);
                            try {
                                for(r.s(); !(n = r.n()).done;){
                                    var a = n.value;
                                    void 0 !== i.fullyNamespacedEvents && a in i.fullyNamespacedEvents && i.removeEventListener(a, i.fullyNamespacedEvents[a]);
                                }
                            } catch (t) {
                                r.e(t);
                            } finally{
                                r.f();
                            }
                        }
                    } catch (t) {
                        o.e(t);
                    } finally{
                        o.f();
                    }
                    return this;
                }
            },
            {
                key: "open",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    t = t || this.elements[0], "undefined" != typeof jQuery && t instanceof jQuery && (t = t.get(0)), e > 0 && (t = this.elements[e]), this.initialImageIndex = this.elements.indexOf(t), this.initialImageIndex > -1 && this.openImage(t);
                }
            },
            {
                key: "openPosition",
                value: function(t) {
                    var e = this.elements[t];
                    this.open(e, t);
                }
            },
            {
                key: "next",
                value: function() {
                    this.loadImage(1);
                }
            },
            {
                key: "prev",
                value: function() {
                    this.loadImage(-1);
                }
            },
            {
                key: "getLighboxData",
                value: function() {
                    return {
                        currentImageIndex: this.currentImageIndex,
                        currentImage: this.currentImage,
                        globalScrollbarWidth: this.globalScrollbarWidth
                    };
                }
            },
            {
                key: "destroy",
                value: function() {
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
                        "shown." + this.eventNamespace
                    ]), this.removeEventListener(this.elements, "click." + this.eventNamespace), this.removeEventListener(document, "focusin." + this.eventNamespace), this.removeEventListener(document.body, "contextmenu." + this.eventNamespace), this.removeEventListener(document.body, "keyup." + this.eventNamespace), this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace), this.removeEventListener(this.domNodes.closeButton, "click." + this.eventNamespace), this.removeEventListener(window, "resize." + this.eventNamespace), this.removeEventListener(window, "hashchange." + this.eventNamespace), this.close(), this.isOpen && (document.body.removeChild(this.domNodes.wrapper), document.body.removeChild(this.domNodes.overlay)), this.elements = null;
                }
            },
            {
                key: "refresh",
                value: function() {
                    if (!this.initialSelector) throw "refreshing only works when you initialize using a selector!";
                    var t = this.options, e = this.initialSelector;
                    return this.destroy(), this.constructor(e, t), this;
                }
            }
        ], y(o.prototype, t), e && y(o, e), Object.defineProperty(o, "prototype", {
            writable: !1
        }), o;
    }();
    u.default = b, d.SimpleLightbox = b;
    var v = {};
    function w(e) {
        t(v).Notify.failure("".concat(e));
    }
    function k(t, e, o, n, i, r, a) {
        try {
            var s = t[r](a), l = s.value;
        } catch (t) {
            o(t);
            return;
        }
        s.done ? e(l) : Promise.resolve(l).then(n, i);
    }
    function C(t) {
        return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t;
    }
    "use strict";
    e = void 0 === d ? "undefined" == typeof window ? v : window : d, o = function(t) {
        "use strict";
        if (void 0 === t && void 0 === t.document) return !1;
        var e, o, n, i, r, a = "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation", s = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', l = {
            Success: "Success",
            Failure: "Failure",
            Warning: "Warning",
            Info: "Info"
        }, c = {
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
                backOverlayColor: "rgba(50,198,130,0.2)"
            },
            failure: {
                background: "#ff5549",
                textColor: "#fff",
                childClassName: "notiflix-notify-failure",
                notiflixIconColor: "rgba(0,0,0,0.2)",
                fontAwesomeClassName: "fas fa-times-circle",
                fontAwesomeIconColor: "rgba(0,0,0,0.2)",
                backOverlayColor: "rgba(255,85,73,0.2)"
            },
            warning: {
                background: "#eebf31",
                textColor: "#fff",
                childClassName: "notiflix-notify-warning",
                notiflixIconColor: "rgba(0,0,0,0.2)",
                fontAwesomeClassName: "fas fa-exclamation-circle",
                fontAwesomeIconColor: "rgba(0,0,0,0.2)",
                backOverlayColor: "rgba(238,191,49,0.2)"
            },
            info: {
                background: "#26c0d3",
                textColor: "#fff",
                childClassName: "notiflix-notify-info",
                notiflixIconColor: "rgba(0,0,0,0.2)",
                fontAwesomeClassName: "fas fa-info-circle",
                fontAwesomeIconColor: "rgba(0,0,0,0.2)",
                backOverlayColor: "rgba(38,192,211,0.2)"
            }
        }, f = {
            Success: "Success",
            Failure: "Failure",
            Warning: "Warning",
            Info: "Info"
        }, d = {
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
                backOverlayColor: "rgba(50,198,130,0.2)"
            },
            failure: {
                svgColor: "#ff5549",
                titleColor: "#1e1e1e",
                messageColor: "#242424",
                buttonBackground: "#ff5549",
                buttonColor: "#fff",
                backOverlayColor: "rgba(255,85,73,0.2)"
            },
            warning: {
                svgColor: "#eebf31",
                titleColor: "#1e1e1e",
                messageColor: "#242424",
                buttonBackground: "#eebf31",
                buttonColor: "#fff",
                backOverlayColor: "rgba(238,191,49,0.2)"
            },
            info: {
                svgColor: "#26c0d3",
                titleColor: "#1e1e1e",
                messageColor: "#242424",
                buttonBackground: "#26c0d3",
                buttonColor: "#fff",
                backOverlayColor: "rgba(38,192,211,0.2)"
            }
        }, u = {
            Show: "Show",
            Ask: "Ask",
            Prompt: "Prompt"
        }, p = {
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
            cancelButtonBackground: "#a9a9a9"
        }, m = {
            Standard: "Standard",
            Hourglass: "Hourglass",
            Circle: "Circle",
            Arrows: "Arrows",
            Dots: "Dots",
            Pulse: "Pulse",
            Custom: "Custom",
            Notiflix: "Notiflix"
        }, h = {
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
            messageColor: "#dcdcdc"
        }, g = {
            Standard: "Standard",
            Hourglass: "Hourglass",
            Circle: "Circle",
            Arrows: "Arrows",
            Dots: "Dots",
            Pulse: "Pulse"
        }, y = {
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
            messageColor: "#383838"
        }, x = function(t) {
            return console.error("%c Notiflix Error ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + t + a);
        }, b = function(t) {
            return console.log("%c Notiflix Info ", "padding:2px;border-radius:20px;color:#fff;background:#26c0d3", "\n" + t + a);
        }, v = function(e) {
            return e || (e = "head"), null !== t.document[e] || (x('\nNotiflix needs to be appended to the "<' + e + '>" element, but you called it before the "<' + e + '>" element has been created.'), !1);
        }, w = function(e, o) {
            if (!v("head")) return !1;
            if (null !== e() && !t.document.getElementById(o)) {
                var n = t.document.createElement("style");
                n.id = o, n.innerHTML = e(), t.document.head.appendChild(n);
            }
        }, k = function() {
            var t = {}, e = !1, o = 0;
            for("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], o++); o < arguments.length; o++)!function(o) {
                for(var n in o)Object.prototype.hasOwnProperty.call(o, n) && (t[n] = e && "[object Object]" === Object.prototype.toString.call(o[n]) ? k(t[n], o[n]) : o[n]);
            }(arguments[o]);
            return t;
        }, C = function(e) {
            var o = t.document.createElement("div");
            return o.innerHTML = e, o.textContent || o.innerText || "";
        }, N = function(t, e) {
            return t || (t = "60px"), e || (e = "#32c682"), '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e + '" width="' + t + '" height="' + t + '" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';
        }, S = function(t, e) {
            return t || (t = "60px"), e || (e = "#32c682"), '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';
        }, E = function(t, e) {
            return t || (t = "60px"), e || (e = "#32c682"), '<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + t + '" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:' + t + ";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:" + t + ';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="' + e + '" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';
        }, O = function(t, e) {
            return t || (t = "60px"), e || (e = "#32c682"), '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';
        }, I = function(t, e) {
            return t || (t = "60px"), e || (e = "#32c682"), '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';
        }, A = function(t, e) {
            return t || (t = "60px"), e || (e = "#32c682"), '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';
        }, L = function() {
            return '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
        }, R = 0, T = function(o, n, i, r) {
            if (!v("body")) return !1;
            e || H.Notify.init({});
            var a = k(!0, e, {});
            if ("object" == typeof i && !Array.isArray(i) || "object" == typeof r && !Array.isArray(r)) {
                var f = {};
                "object" == typeof i ? f = i : "object" == typeof r && (f = r), e = k(!0, e, f);
            }
            var d = e[o.toLocaleLowerCase("en")];
            R++, "string" != typeof n && (n = "Notiflix " + o), e.plainText && (n = C(n)), !e.plainText && n.length > e.messageMaxLength && (e = k(!0, e, {
                closeButton: !0,
                messageMaxLength: 150
            }), n = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'), n.length > e.messageMaxLength && (n = n.substring(0, e.messageMaxLength) + "..."), "shadow" === e.fontAwesomeIconStyle && (d.fontAwesomeIconColor = d.background), e.cssAnimation || (e.cssAnimationDuration = 0);
            var u = t.document.getElementById(c.wrapID) || t.document.createElement("div");
            if (u.id = c.wrapID, u.style.width = e.width, u.style.zIndex = e.zindex, u.style.opacity = e.opacity, "center-center" === e.position ? (u.style.left = e.distance, u.style.top = e.distance, u.style.right = e.distance, u.style.bottom = e.distance, u.style.margin = "auto", u.classList.add("nx-flex-center-center"), u.style.maxHeight = "calc((100vh - " + e.distance + ") - " + e.distance + ")", u.style.display = "flex", u.style.flexWrap = "wrap", u.style.flexDirection = "column", u.style.justifyContent = "center", u.style.alignItems = "center", u.style.pointerEvents = "none") : "center-top" === e.position ? (u.style.left = e.distance, u.style.right = e.distance, u.style.top = e.distance, u.style.bottom = "auto", u.style.margin = "auto") : "center-bottom" === e.position ? (u.style.left = e.distance, u.style.right = e.distance, u.style.bottom = e.distance, u.style.top = "auto", u.style.margin = "auto") : "right-bottom" === e.position ? (u.style.right = e.distance, u.style.bottom = e.distance, u.style.top = "auto", u.style.left = "auto") : "left-top" === e.position ? (u.style.left = e.distance, u.style.top = e.distance, u.style.right = "auto", u.style.bottom = "auto") : "left-bottom" === e.position ? (u.style.left = e.distance, u.style.bottom = e.distance, u.style.top = "auto", u.style.right = "auto") : (u.style.right = e.distance, u.style.top = e.distance, u.style.left = "auto", u.style.bottom = "auto"), e.backOverlay) {
                var p = t.document.getElementById(c.overlayID) || t.document.createElement("div");
                p.id = c.overlayID, p.style.width = "100%", p.style.height = "100%", p.style.position = "fixed", p.style.zIndex = e.zindex - 1, p.style.left = 0, p.style.top = 0, p.style.right = 0, p.style.bottom = 0, p.style.background = d.backOverlayColor || e.backOverlayColor, p.className = e.cssAnimation ? "nx-with-animation" : "", p.style.animationDuration = e.cssAnimation ? e.cssAnimationDuration + "ms" : "", t.document.getElementById(c.overlayID) || t.document.body.appendChild(p);
            }
            t.document.getElementById(c.wrapID) || t.document.body.appendChild(u);
            var m = t.document.createElement("div");
            m.id = e.ID + "-" + R, m.className = e.className + " " + d.childClassName + " " + (e.cssAnimation ? "nx-with-animation" : "") + " " + (e.useIcon ? "nx-with-icon" : "") + " nx-" + e.cssAnimationStyle + " " + (e.closeButton && "function" != typeof i ? "nx-with-close-button" : "") + " " + ("function" == typeof i ? "nx-with-callback" : "") + " " + (e.clickToClose ? "nx-notify-click-to-close" : ""), m.style.fontSize = e.fontSize, m.style.color = d.textColor, m.style.background = d.background, m.style.borderRadius = e.borderRadius, m.style.pointerEvents = "all", e.rtl && (m.setAttribute("dir", "rtl"), m.classList.add("nx-rtl-on")), m.style.fontFamily = '"' + e.fontFamily + '", ' + s, e.cssAnimation && (m.style.animationDuration = e.cssAnimationDuration + "ms");
            var h = "";
            if (e.closeButton && "function" != typeof i && (h = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + d.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'), e.useIcon) {
                if (e.useFontAwesome) m.innerHTML = '<i style="color:' + d.fontAwesomeIconColor + "; font-size:" + e.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + d.fontAwesomeClassName + " " + ("shadow" === e.fontAwesomeIconStyle ? "nx-message-icon-fa-shadow" : "nx-message-icon-fa-basic") + '"></i><span class="nx-message nx-with-icon">' + n + "</span>" + (e.closeButton ? h : "");
                else {
                    var g = "";
                    o === l.Success ? g = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + d.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>' : o === l.Failure ? g = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + d.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>' : o === l.Warning ? g = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + d.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>' : o === l.Info && (g = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + d.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'), m.innerHTML = g + '<span class="nx-message nx-with-icon">' + n + "</span>" + (e.closeButton ? h : "");
                }
            } else m.innerHTML = '<span class="nx-message">' + n + "</span>" + (e.closeButton ? h : "");
            if ("left-bottom" === e.position || "right-bottom" === e.position) {
                var y = t.document.getElementById(c.wrapID);
                y.insertBefore(m, y.firstChild);
            } else t.document.getElementById(c.wrapID).appendChild(m);
            var x = t.document.getElementById(m.id);
            if (x) {
                var b, w, N = function() {
                    x.classList.add("nx-remove");
                    var e = t.document.getElementById(c.overlayID);
                    e && 0 >= u.childElementCount && e.classList.add("nx-remove"), clearTimeout(b);
                }, S = function() {
                    if (x && null !== x.parentNode && x.parentNode.removeChild(x), 0 >= u.childElementCount && null !== u.parentNode) {
                        u.parentNode.removeChild(u);
                        var e = t.document.getElementById(c.overlayID);
                        e && null !== e.parentNode && e.parentNode.removeChild(e);
                    }
                    clearTimeout(w);
                };
                if (e.closeButton && "function" != typeof i && t.document.getElementById(m.id).querySelector("span.nx-close-button").addEventListener("click", function() {
                    N();
                    var t = setTimeout(function() {
                        S(), clearTimeout(t);
                    }, e.cssAnimationDuration);
                }), ("function" == typeof i || e.clickToClose) && x.addEventListener("click", function() {
                    "function" == typeof i && i(), N();
                    var t = setTimeout(function() {
                        S(), clearTimeout(t);
                    }, e.cssAnimationDuration);
                }), !e.closeButton && "function" != typeof i) {
                    var E = function() {
                        b = setTimeout(function() {
                            N();
                        }, e.timeout), w = setTimeout(function() {
                            S();
                        }, e.timeout + e.cssAnimationDuration);
                    };
                    E(), e.pauseOnHover && (x.addEventListener("mouseenter", function() {
                        x.classList.add("nx-paused"), clearTimeout(b), clearTimeout(w);
                    }), x.addEventListener("mouseleave", function() {
                        x.classList.remove("nx-paused"), E();
                    }));
                }
            }
            if (e.showOnlyTheLastOne && 0 < R) for(var O, I = t.document.querySelectorAll("[id^=" + e.ID + "-]:not([id=" + e.ID + "-" + R + "])"), A = 0; A < I.length; A++)null !== (O = I[A]).parentNode && O.parentNode.removeChild(O);
            e = k(!0, e, a);
        }, z = function() {
            return '[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
        }, B = function(e, n, i, r, a, l) {
            if (!v("body")) return !1;
            o || H.Report.init({});
            var c, u, p, m, h, g, y, x, b = {};
            if ("object" == typeof a && !Array.isArray(a) || "object" == typeof l && !Array.isArray(l)) {
                var w = {};
                "object" == typeof a ? w = a : "object" == typeof l && (w = l), b = k(!0, o, {}), o = k(!0, o, w);
            }
            var N = o[e.toLocaleLowerCase("en")];
            "string" != typeof n && (n = "Notiflix " + e), "string" != typeof i && (e === f.Success ? i = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein' : e === f.Failure ? i = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford' : e === f.Warning ? i = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk' : e === f.Info && (i = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')), "string" != typeof r && (r = "Okay"), o.plainText && (n = C(n), i = C(i), r = C(r)), o.plainText || (n.length > o.titleMaxLength && (n = "Possible HTML Tags Error", i = 'The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.', r = "Okay"), i.length > o.messageMaxLength && (n = "Possible HTML Tags Error", i = 'The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.', r = "Okay"), r.length > o.buttonMaxLength && (n = "Possible HTML Tags Error", i = 'The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.', r = "Okay")), n.length > o.titleMaxLength && (n = n.substring(0, o.titleMaxLength) + "..."), i.length > o.messageMaxLength && (i = i.substring(0, o.messageMaxLength) + "..."), r.length > o.buttonMaxLength && (r = r.substring(0, o.buttonMaxLength) + "..."), o.cssAnimation || (o.cssAnimationDuration = 0);
            var S = t.document.createElement("div");
            S.id = d.ID, S.className = o.className, S.style.zIndex = o.zindex, S.style.borderRadius = o.borderRadius, S.style.fontFamily = '"' + o.fontFamily + '", ' + s, o.rtl && (S.setAttribute("dir", "rtl"), S.classList.add("nx-rtl-on")), S.style.display = "flex", S.style.flexWrap = "wrap", S.style.flexDirection = "column", S.style.alignItems = "center", S.style.justifyContent = "center";
            var E = "", O = !0 === o.backOverlayClickToClose;
            o.backOverlay && (E = '<div class="' + o.className + "-overlay" + (o.cssAnimation ? " nx-with-animation" : "") + (O ? " nx-report-click-to-close" : "") + '" style="background:' + (N.backOverlayColor || o.backOverlayColor) + ";animation-duration:" + o.cssAnimationDuration + 'ms;"></div>');
            var I = "";
            if (e === f.Success ? (c = o.svgSize, u = N.svgColor, c || (c = "110px"), u || (u = "#32c682"), I = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="' + c + '" height="' + c + '" fill="' + u + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>') : e === f.Failure ? (p = o.svgSize, m = N.svgColor, p || (p = "110px"), m || (m = "#ff5549"), I = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="' + p + '" height="' + p + '" fill="' + m + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>') : e === f.Warning ? (h = o.svgSize, g = N.svgColor, h || (h = "110px"), g || (g = "#eebf31"), I = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="' + h + '" height="' + h + '" fill="' + g + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>') : e === f.Info && (y = o.svgSize, x = N.svgColor, y || (y = "110px"), x || (x = "#26c0d3"), I = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="' + y + '" height="' + y + '" fill="' + x + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'), S.innerHTML = E + '<div class="' + o.className + "-content" + (o.cssAnimation ? " nx-with-animation " : "") + " nx-" + o.cssAnimationStyle + '" style="width:' + o.width + "; background:" + o.backgroundColor + "; animation-duration:" + o.cssAnimationDuration + 'ms;"><div style="width:' + o.svgSize + "; height:" + o.svgSize + ';" class="' + o.className + '-icon">' + I + '</div><h5 class="' + o.className + '-title" style="font-weight:500; font-size:' + o.titleFontSize + "; color:" + N.titleColor + ';">' + n + '</h5><p class="' + o.className + '-message" style="font-size:' + o.messageFontSize + "; color:" + N.messageColor + ';">' + i + '</p><a id="NXReportButton" class="' + o.className + '-button" style="font-weight:500; font-size:' + o.buttonFontSize + "; background:" + N.buttonBackground + "; color:" + N.buttonColor + ';">' + r + "</a></div>", !t.document.getElementById(S.id)) {
                t.document.body.appendChild(S);
                var A = function() {
                    var e = t.document.getElementById(S.id);
                    e.classList.add("nx-remove");
                    var n = setTimeout(function() {
                        null !== e.parentNode && e.parentNode.removeChild(e), clearTimeout(n);
                    }, o.cssAnimationDuration);
                };
                t.document.getElementById("NXReportButton").addEventListener("click", function() {
                    "function" == typeof a && a(), A();
                }), E && O && t.document.querySelector(".nx-report-click-to-close").addEventListener("click", function() {
                    A();
                });
            }
            o = k(!0, o, b);
        }, D = function() {
            return '[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
        }, M = function(e, o, i, r, a, l, c, f, d) {
            if (!v("body")) return !1;
            n || H.Confirm.init({});
            var m = k(!0, n, {});
            "object" != typeof d || Array.isArray(d) || (n = k(!0, n, d)), "string" != typeof o && (o = "Notiflix Confirm"), "string" != typeof i && (i = "Do you agree with me?"), "string" != typeof a && (a = "Yes"), "string" != typeof l && (l = "No"), "function" != typeof c && (c = void 0), "function" != typeof f && (f = void 0), n.plainText && (o = C(o), i = C(i), a = C(a), l = C(l)), n.plainText || (o.length > n.titleMaxLength && (o = "Possible HTML Tags Error", i = 'The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.', a = "Okay", l = "..."), i.length > n.messageMaxLength && (o = "Possible HTML Tags Error", i = 'The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.', a = "Okay", l = "..."), (a.length || l.length) > n.buttonsMaxLength && (o = "Possible HTML Tags Error", i = 'The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.', a = "Okay", l = "...")), o.length > n.titleMaxLength && (o = o.substring(0, n.titleMaxLength) + "..."), i.length > n.messageMaxLength && (i = i.substring(0, n.messageMaxLength) + "..."), a.length > n.buttonsMaxLength && (a = a.substring(0, n.buttonsMaxLength) + "..."), l.length > n.buttonsMaxLength && (l = l.substring(0, n.buttonsMaxLength) + "..."), n.cssAnimation || (n.cssAnimationDuration = 0);
            var h = t.document.createElement("div");
            h.id = p.ID, h.className = n.className + (n.cssAnimation ? " nx-with-animation nx-" + n.cssAnimationStyle : ""), h.style.zIndex = n.zindex, h.style.padding = n.distance, n.rtl && (h.setAttribute("dir", "rtl"), h.classList.add("nx-rtl-on"));
            var g = "string" == typeof n.position ? n.position.trim() : "center";
            h.classList.add("nx-position-" + g), h.style.fontFamily = '"' + n.fontFamily + '", ' + s;
            var y = "";
            n.backOverlay && (y = '<div class="' + n.className + "-overlay" + (n.cssAnimation ? " nx-with-animation" : "") + '" style="background:' + n.backOverlayColor + ";animation-duration:" + n.cssAnimationDuration + 'ms;"></div>');
            var x = "";
            "function" == typeof c && (x = '<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:' + n.cancelButtonColor + ";background:" + n.cancelButtonBackground + ";font-size:" + n.buttonsFontSize + ';">' + l + "</a>");
            var b = "", w = null, N = void 0;
            if (e === u.Ask || e === u.Prompt) {
                w = r || "";
                var S = e === u.Ask ? Math.ceil(1.5 * w.length) : 200 < w.length ? Math.ceil(1.5 * w.length) : 250;
                b = '<div><input id="NXConfirmValidationInput" type="text" ' + (e === u.Prompt ? 'value="' + w + '"' : "") + ' maxlength="' + S + '" style="font-size:' + n.messageFontSize + ";border-radius: " + n.borderRadius + ';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>';
            }
            if (h.innerHTML = y + '<div class="' + n.className + '-content" style="width:' + n.width + "; background:" + n.backgroundColor + "; animation-duration:" + n.cssAnimationDuration + "ms; border-radius: " + n.borderRadius + ';"><div class="' + n.className + '-head"><h5 style="color:' + n.titleColor + ";font-size:" + n.titleFontSize + ';">' + o + '</h5><div style="color:' + n.messageColor + ";font-size:" + n.messageFontSize + ';">' + i + b + '</div></div><div class="' + n.className + '-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok' + ("function" == typeof c ? "" : " nx-full") + '" style="color:' + n.okButtonColor + ";background:" + n.okButtonBackground + ";font-size:" + n.buttonsFontSize + ';">' + a + "</a>" + x + "</div></div>", !t.document.getElementById(h.id)) {
                t.document.body.appendChild(h);
                var E = t.document.getElementById(h.id), O = t.document.getElementById("NXConfirmButtonOk"), I = t.document.getElementById("NXConfirmValidationInput");
                I && (I.focus(), I.setSelectionRange(0, (I.value || "").length), I.addEventListener("keyup", function(t) {
                    var o = t.target.value;
                    e === u.Ask && o !== w ? (t.preventDefault(), I.classList.add("nx-validation-failure"), I.classList.remove("nx-validation-success")) : (e === u.Ask && (I.classList.remove("nx-validation-failure"), I.classList.add("nx-validation-success")), ("enter" === (t.key || "").toLocaleLowerCase("en") || 13 === t.keyCode) && O.dispatchEvent(new Event("click")));
                })), O.addEventListener("click", function(t) {
                    if (e === u.Ask && w && I) {
                        if ((I.value || "").toString() !== w) return I.focus(), I.classList.add("nx-validation-failure"), t.stopPropagation(), t.preventDefault(), t.returnValue = !1, t.cancelBubble = !0, !1;
                        I.classList.remove("nx-validation-failure");
                    }
                    "function" == typeof c && (e === u.Prompt && I && (N = I.value || ""), c(N)), E.classList.add("nx-remove");
                    var o = setTimeout(function() {
                        null !== E.parentNode && (E.parentNode.removeChild(E), clearTimeout(o));
                    }, n.cssAnimationDuration);
                }), "function" == typeof c && t.document.getElementById("NXConfirmButtonCancel").addEventListener("click", function() {
                    "function" == typeof f && (e === u.Prompt && I && (N = I.value || ""), f(N)), E.classList.add("nx-remove");
                    var t = setTimeout(function() {
                        null !== E.parentNode && (E.parentNode.removeChild(E), clearTimeout(t));
                    }, n.cssAnimationDuration);
                });
            }
            n = k(!0, n, m);
        }, P = function() {
            return '[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}';
        }, W = function(e, o, n, r, a) {
            if (!v("body")) return !1;
            i || H.Loading.init({});
            var l = k(!0, i, {});
            if ("object" == typeof o && !Array.isArray(o) || "object" == typeof n && !Array.isArray(n)) {
                var c = {};
                "object" == typeof o ? c = o : "object" == typeof n && (c = n), i = k(!0, i, c);
            }
            var f = "";
            if ("string" == typeof o && 0 < o.length && (f = o), r) {
                f = f.length > i.messageMaxLength ? C(f).toString().substring(0, i.messageMaxLength) + "..." : C(f).toString();
                var d, u, p = "";
                0 < f.length && (p = '<p id="' + i.messageID + '" class="nx-loading-message" style="color:' + i.messageColor + ";font-size:" + i.messageFontSize + ';">' + f + "</p>"), i.cssAnimation || (i.cssAnimationDuration = 0);
                var g = "";
                if (e === m.Standard) g = N(i.svgSize, i.svgColor);
                else if (e === m.Hourglass) g = S(i.svgSize, i.svgColor);
                else if (e === m.Circle) g = E(i.svgSize, i.svgColor);
                else if (e === m.Arrows) g = O(i.svgSize, i.svgColor);
                else if (e === m.Dots) g = I(i.svgSize, i.svgColor);
                else if (e === m.Pulse) g = A(i.svgSize, i.svgColor);
                else if (e === m.Custom && null !== i.customSvgCode && null === i.customSvgUrl) g = i.customSvgCode || "";
                else if (e === m.Custom && null !== i.customSvgUrl && null === i.customSvgCode) g = '<img class="nx-custom-loading-icon" width="' + i.svgSize + '" height="' + i.svgSize + '" src="' + i.customSvgUrl + '" alt="Notiflix">';
                else {
                    if (e === m.Custom && (null === i.customSvgUrl || null === i.customSvgCode)) return x('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'), !1;
                    (d = i.svgSize) || (d = "60px"), g = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="' + d + '" height="' + d + '" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:#f8f8f8;stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="' + (u = "#32c682") + '" stroke="' + u + '" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';
                }
                var y = parseInt((i.svgSize || "").replace(/[^0-9]/g, "")), b = t.innerWidth, w = y >= b ? b - 40 + "px" : y + "px", L = '<div style="width:' + w + "; height:" + w + ';" class="' + i.className + "-icon" + (0 < f.length ? " nx-with-message" : "") + '">' + g + "</div>", R = t.document.createElement("div");
                R.id = h.ID, R.className = i.className + (i.cssAnimation ? " nx-with-animation" : "") + (i.clickToClose ? " nx-loading-click-to-close" : ""), R.style.zIndex = i.zindex, R.style.background = i.backgroundColor, R.style.animationDuration = i.cssAnimationDuration + "ms", R.style.fontFamily = '"' + i.fontFamily + '", ' + s, R.style.display = "flex", R.style.flexWrap = "wrap", R.style.flexDirection = "column", R.style.alignItems = "center", R.style.justifyContent = "center", i.rtl && (R.setAttribute("dir", "rtl"), R.classList.add("nx-rtl-on")), R.innerHTML = L + p, !t.document.getElementById(R.id) && (t.document.body.appendChild(R), i.clickToClose) && t.document.getElementById(R.id).addEventListener("click", function() {
                    R.classList.add("nx-remove");
                    var t = setTimeout(function() {
                        null !== R.parentNode && (R.parentNode.removeChild(R), clearTimeout(t));
                    }, i.cssAnimationDuration);
                });
            } else if (t.document.getElementById(h.ID)) var T = t.document.getElementById(h.ID), z = setTimeout(function() {
                T.classList.add("nx-remove");
                var t = setTimeout(function() {
                    null !== T.parentNode && (T.parentNode.removeChild(T), clearTimeout(t));
                }, i.cssAnimationDuration);
                clearTimeout(z);
            }, a);
            i = k(!0, i, l);
        }, X = function(e) {
            "string" != typeof e && (e = "");
            var o = t.document.getElementById(h.ID);
            if (o) {
                if (0 < e.length) {
                    e = e.length > i.messageMaxLength ? C(e).substring(0, i.messageMaxLength) + "..." : C(e);
                    var n = o.getElementsByTagName("p")[0];
                    if (n) n.innerHTML = e;
                    else {
                        var r = t.document.createElement("p");
                        r.id = i.messageID, r.className = "nx-loading-message nx-loading-message-new", r.style.color = i.messageColor, r.style.fontSize = i.messageFontSize, r.innerHTML = e, o.appendChild(r);
                    }
                } else x("Where is the new message?");
            }
        }, j = function() {
            return '[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}';
        }, F = 0, U = function(e, o, n, i, a, l) {
            if (Array.isArray(n)) {
                if (1 > n.length) return x("Array of HTMLElements should contains at least one HTMLElement."), !1;
                L = n;
            } else if (Object.prototype.isPrototypeOf.call(NodeList.prototype, n)) {
                if (1 > n.length) return x("NodeListOf<HTMLElement> should contains at least one HTMLElement."), !1;
                L = Array.prototype.slice.call(n);
            } else {
                if ("string" != typeof n || 1 > (n || "").length || 1 === (n || "").length && ("#" === (n || "")[0] || "." === (n || "")[0])) return x("The selector parameter must be a string and matches a specified CSS selector(s)."), !1;
                var c = t.document.querySelectorAll(n);
                if (1 > c.length) return x('You called the "Notiflix.Block..." function with "' + n + '" selector, but there is no such element(s) in the document.'), !1;
                L = c;
            }
            r || H.Block.init({});
            var f = k(!0, r, {});
            if ("object" == typeof i && !Array.isArray(i) || "object" == typeof a && !Array.isArray(a)) {
                var d = {};
                "object" == typeof i ? d = i : "object" == typeof a && (d = a), r = k(!0, r, d);
            }
            var u = "";
            "string" == typeof i && 0 < i.length && (u = i), r.cssAnimation || (r.cssAnimationDuration = 0);
            var p = y.className;
            "string" == typeof r.className && (p = r.className.trim());
            var m = "number" == typeof r.querySelectorLimit ? r.querySelectorLimit : 200, h = (L || []).length >= m ? m : L.length, w = "nx-block-temporary-position";
            if (e) {
                for(var L, R, T = [
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
                    "iframe"
                ], z = 0; z < h; z++)if (R = L[z]) {
                    if (-1 < T.indexOf(R.tagName.toLocaleLowerCase("en"))) break;
                    var B = R.querySelectorAll("[id^=" + y.ID + "]");
                    if (1 > B.length) {
                        var D = "";
                        o && (D = o === g.Hourglass ? S(r.svgSize, r.svgColor) : o === g.Circle ? E(r.svgSize, r.svgColor) : o === g.Arrows ? O(r.svgSize, r.svgColor) : o === g.Dots ? I(r.svgSize, r.svgColor) : o === g.Pulse ? A(r.svgSize, r.svgColor) : N(r.svgSize, r.svgColor));
                        var M = '<span class="' + p + '-icon" style="width:' + r.svgSize + ";height:" + r.svgSize + ';">' + D + "</span>", P = "";
                        0 < u.length && (u = u.length > r.messageMaxLength ? C(u).substring(0, r.messageMaxLength) + "..." : C(u), P = '<span style="font-size:' + r.messageFontSize + ";color:" + r.messageColor + ';" class="' + p + '-message">' + u + "</span>"), F++;
                        var W = t.document.createElement("div");
                        W.id = y.ID + "-" + F, W.className = p + (r.cssAnimation ? " nx-with-animation" : ""), W.style.position = r.position, W.style.zIndex = r.zindex, W.style.background = r.backgroundColor, W.style.animationDuration = r.cssAnimationDuration + "ms", W.style.fontFamily = '"' + r.fontFamily + '", ' + s, W.style.display = "flex", W.style.flexWrap = "wrap", W.style.flexDirection = "column", W.style.alignItems = "center", W.style.justifyContent = "center", r.rtl && (W.setAttribute("dir", "rtl"), W.classList.add("nx-rtl-on")), W.innerHTML = M + P;
                        var X = t.getComputedStyle(R).getPropertyValue("position"), j = "string" == typeof X ? X.toLocaleLowerCase("en") : "relative", U = Math.round(1.25 * parseInt(r.svgSize)) + 40, Y = R.offsetHeight || 0, _ = "";
                        U > Y && (_ = "min-height:" + U + "px;");
                        var q = "";
                        q = R.getAttribute("id") ? "#" + R.getAttribute("id") : R.classList[0] ? "." + R.classList[0] : (R.tagName || "").toLocaleLowerCase("en");
                        var V = "", J = -1 >= [
                            "absolute",
                            "relative",
                            "fixed",
                            "sticky"
                        ].indexOf(j);
                        if (J || 0 < _.length) {
                            if (!v("head")) return !1;
                            J && (V = "position:relative!important;");
                            var Z = '<style id="Style-' + y.ID + "-" + F + '">' + q + "." + w + "{" + V + _ + "}</style>", K = t.document.createRange();
                            K.selectNode(t.document.head);
                            var G = K.createContextualFragment(Z);
                            t.document.head.appendChild(G), R.classList.add(w);
                        }
                        R.appendChild(W);
                    }
                }
            } else var Q = function(e) {
                var o = setTimeout(function() {
                    null !== e.parentNode && e.parentNode.removeChild(e);
                    var n = e.getAttribute("id"), i = t.document.getElementById("Style-" + n);
                    i && null !== i.parentNode && i.parentNode.removeChild(i), clearTimeout(o);
                }, r.cssAnimationDuration);
            }, $ = function(t) {
                if (t && 0 < t.length) for(var e, o = 0; o < t.length; o++)(e = t[o]) && (e.classList.add("nx-remove"), Q(e));
                else "string" == typeof n ? b('"Notiflix.Block.remove();" function called with "' + n + '" selector, but this selector does not have a "Block" element to remove.') : b('"Notiflix.Block.remove();" function called with "' + n + '", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.');
            }, tt = function(t) {
                var e = setTimeout(function() {
                    t.classList.remove(w), clearTimeout(e);
                }, r.cssAnimationDuration + 300);
            }, te = setTimeout(function() {
                for(var t, e = 0; e < h; e++)(t = L[e]) && (tt(t), $(B = t.querySelectorAll("[id^=" + y.ID + "]")));
                clearTimeout(te);
            }, l);
            r = k(!0, r, f);
        }, H = {
            Notify: {
                init: function(t) {
                    e = k(!0, c, t), w(L, "NotiflixNotifyInternalCSS");
                },
                merge: function(t) {
                    return e ? void (e = k(!0, e, t)) : (x("You have to initialize the Notify module before call Merge function."), !1);
                },
                success: function(t, e, o) {
                    T(l.Success, t, e, o);
                },
                failure: function(t, e, o) {
                    T(l.Failure, t, e, o);
                },
                warning: function(t, e, o) {
                    T(l.Warning, t, e, o);
                },
                info: function(t, e, o) {
                    T(l.Info, t, e, o);
                }
            },
            Report: {
                init: function(t) {
                    o = k(!0, d, t), w(z, "NotiflixReportInternalCSS");
                },
                merge: function(t) {
                    return o ? void (o = k(!0, o, t)) : (x("You have to initialize the Report module before call Merge function."), !1);
                },
                success: function(t, e, o, n, i) {
                    B(f.Success, t, e, o, n, i);
                },
                failure: function(t, e, o, n, i) {
                    B(f.Failure, t, e, o, n, i);
                },
                warning: function(t, e, o, n, i) {
                    B(f.Warning, t, e, o, n, i);
                },
                info: function(t, e, o, n, i) {
                    B(f.Info, t, e, o, n, i);
                }
            },
            Confirm: {
                init: function(t) {
                    n = k(!0, p, t), w(D, "NotiflixConfirmInternalCSS");
                },
                merge: function(t) {
                    return n ? void (n = k(!0, n, t)) : (x("You have to initialize the Confirm module before call Merge function."), !1);
                },
                show: function(t, e, o, n, i, r, a) {
                    M(u.Show, t, e, null, o, n, i, r, a);
                },
                ask: function(t, e, o, n, i, r, a, s) {
                    M(u.Ask, t, e, o, n, i, r, a, s);
                },
                prompt: function(t, e, o, n, i, r, a, s) {
                    M(u.Prompt, t, e, o, n, i, r, a, s);
                }
            },
            Loading: {
                init: function(t) {
                    i = k(!0, h, t), w(P, "NotiflixLoadingInternalCSS");
                },
                merge: function(t) {
                    return i ? void (i = k(!0, i, t)) : (x("You have to initialize the Loading module before call Merge function."), !1);
                },
                standard: function(t, e) {
                    W(m.Standard, t, e, !0, 0);
                },
                hourglass: function(t, e) {
                    W(m.Hourglass, t, e, !0, 0);
                },
                circle: function(t, e) {
                    W(m.Circle, t, e, !0, 0);
                },
                arrows: function(t, e) {
                    W(m.Arrows, t, e, !0, 0);
                },
                dots: function(t, e) {
                    W(m.Dots, t, e, !0, 0);
                },
                pulse: function(t, e) {
                    W(m.Pulse, t, e, !0, 0);
                },
                custom: function(t, e) {
                    W(m.Custom, t, e, !0, 0);
                },
                notiflix: function(t, e) {
                    W(m.Notiflix, t, e, !0, 0);
                },
                remove: function(t) {
                    "number" != typeof t && (t = 0), W(null, null, null, !1, t);
                },
                change: function(t) {
                    X(t);
                }
            },
            Block: {
                init: function(t) {
                    r = k(!0, y, t), w(j, "NotiflixBlockInternalCSS");
                },
                merge: function(t) {
                    return r ? void (r = k(!0, r, t)) : (x('You have to initialize the "Notiflix.Block" module before call Merge function.'), !1);
                },
                standard: function(t, e, o) {
                    U(!0, g.Standard, t, e, o);
                },
                hourglass: function(t, e, o) {
                    U(!0, g.Hourglass, t, e, o);
                },
                circle: function(t, e, o) {
                    U(!0, g.Circle, t, e, o);
                },
                arrows: function(t, e, o) {
                    U(!0, g.Arrows, t, e, o);
                },
                dots: function(t, e, o) {
                    U(!0, g.Dots, t, e, o);
                },
                pulse: function(t, e, o) {
                    U(!0, g.Pulse, t, e, o);
                },
                remove: function(t, e) {
                    "number" != typeof e && (e = 0), U(!1, null, t, null, null, e);
                }
            }
        };
        return "object" == typeof t.Notiflix ? k(!0, t.Notiflix, {
            Notify: H.Notify,
            Report: H.Report,
            Confirm: H.Confirm,
            Loading: H.Loading,
            Block: H.Block
        }) : {
            Notify: H.Notify,
            Report: H.Report,
            Confirm: H.Confirm,
            Loading: H.Loading,
            Block: H.Block
        };
    }, "function" == typeof define && define.amd ? define([], function() {
        return o(e);
    }) : "object" == typeof v ? v = o(e) : e.Notiflix = o(e), t(v).Notify.init({
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
            backOverlayColor: "rgba(255,85,73,0.2)"
        }
    });
    function N(t, e) {
        return function() {
            return t.apply(e, arguments);
        };
    }
    "use strict";
    "function" == typeof SuppressedError && SuppressedError;
    var S = Object.prototype.toString, E = Object.getPrototypeOf, O = (n = Object.create(null), function(t) {
        var e = S.call(t);
        return n[e] || (n[e] = e.slice(8, -1).toLowerCase());
    }), I = function(t) {
        return t = t.toLowerCase(), function(e) {
            return O(e) === t;
        };
    }, A = function(t) {
        return function(e) {
            return (void 0 === e ? "undefined" : C(e)) === t;
        };
    }, L = Array.isArray, R = A("undefined"), T = I("ArrayBuffer"), z = A("string"), B = A("function"), D = A("number"), M = function(t) {
        return null !== t && "object" == typeof t;
    }, P = function(t) {
        if ("object" !== O(t)) return !1;
        var e = E(t);
        return (null === e || e === Object.prototype || null === Object.getPrototypeOf(e)) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
    }, W = I("Date"), X = I("File"), j = I("Blob"), F = I("FileList"), U = I("URLSearchParams");
    function H(t, e) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = o.allOwnKeys;
        if (null != t) {
            if ("object" != typeof t && (t = [
                t
            ]), L(t)) for(i = 0, r = t.length; i < r; i++)e.call(null, t[i], i, t);
            else {
                var i, r, a, s = void 0 !== n && n ? Object.getOwnPropertyNames(t) : Object.keys(t), l = s.length;
                for(i = 0; i < l; i++)a = s[i], e.call(null, t[a], a, t);
            }
        }
    }
    function Y(t, e) {
        e = e.toLowerCase();
        for(var o, n = Object.keys(t), i = n.length; i-- > 0;)if (e === (o = n[i]).toLowerCase()) return o;
        return null;
    }
    var _ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : d, q = function(t) {
        return !R(t) && t !== _;
    }, V = (i = "undefined" != typeof Uint8Array && E(Uint8Array), function(t) {
        return i && t instanceof i;
    }), J = I("HTMLFormElement"), Z = (r = Object.prototype.hasOwnProperty, function(t, e) {
        return r.call(t, e);
    }), K = I("RegExp"), G = function(t, e) {
        var o = Object.getOwnPropertyDescriptors(t), n = {};
        H(o, function(o, i) {
            !1 !== e(o, i, t) && (n[i] = o);
        }), Object.defineProperties(t, n);
    }, Q = "abcdefghijklmnopqrstuvwxyz", $ = "0123456789", tt = {
        DIGIT: $,
        ALPHA: Q,
        ALPHA_DIGIT: Q + Q.toUpperCase() + $
    }, te = I("AsyncFunction"), to = {
        isArray: L,
        isArrayBuffer: T,
        isBuffer: function(t) {
            return null !== t && !R(t) && null !== t.constructor && !R(t.constructor) && B(t.constructor.isBuffer) && t.constructor.isBuffer(t);
        },
        isFormData: function(t) {
            var e;
            return t && ("function" == typeof FormData && t instanceof FormData || B(t.append) && ("formdata" === (e = O(t)) || "object" === e && B(t.toString) && "[object FormData]" === t.toString()));
        },
        isArrayBufferView: function(t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && T(t.buffer);
        },
        isString: z,
        isNumber: D,
        isBoolean: function(t) {
            return !0 === t || !1 === t;
        },
        isObject: M,
        isPlainObject: P,
        isUndefined: R,
        isDate: W,
        isFile: X,
        isBlob: j,
        isRegExp: K,
        isFunction: B,
        isStream: function(t) {
            return M(t) && B(t.pipe);
        },
        isURLSearchParams: U,
        isTypedArray: V,
        isFileList: F,
        forEach: H,
        merge: function t() {
            for(var e = (q(this) && this || {}).caseless, o = {}, n = function(n, i) {
                var r = e && Y(o, i) || i;
                P(o[r]) && P(n) ? o[r] = t(o[r], n) : P(n) ? o[r] = t({}, n) : L(n) ? o[r] = n.slice() : o[r] = n;
            }, i = 0, r = arguments.length; i < r; i++)arguments[i] && H(arguments[i], n);
            return o;
        },
        extend: function(t, e, o) {
            var n = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).allOwnKeys;
            return H(e, function(e, n) {
                o && B(e) ? t[n] = N(e, o) : t[n] = e;
            }, {
                allOwnKeys: n
            }), t;
        },
        trim: function(t) {
            return t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        },
        stripBOM: function(t) {
            return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t;
        },
        inherits: function(t, e, o, n) {
            t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
                value: e.prototype
            }), o && Object.assign(t.prototype, o);
        },
        toFlatObject: function(t, e, o, n) {
            var i, r, a, s = {};
            if (e = e || {}, null == t) return e;
            do {
                for(r = (i = Object.getOwnPropertyNames(t)).length; r-- > 0;)a = i[r], (!n || n(a, t, e)) && !s[a] && (e[a] = t[a], s[a] = !0);
                t = !1 !== o && E(t);
            }while (t && (!o || o(t, e)) && t !== Object.prototype);
            return e;
        },
        kindOf: O,
        kindOfTest: I,
        endsWith: function(t, e, o) {
            t = String(t), (void 0 === o || o > t.length) && (o = t.length), o -= e.length;
            var n = t.indexOf(e, o);
            return -1 !== n && n === o;
        },
        toArray: function(t) {
            if (!t) return null;
            if (L(t)) return t;
            var e = t.length;
            if (!D(e)) return null;
            for(var o = Array(e); e-- > 0;)o[e] = t[e];
            return o;
        },
        forEachEntry: function(t, e) {
            for(var o, n = (t && t[Symbol.iterator]).call(t); (o = n.next()) && !o.done;){
                var i = o.value;
                e.call(t, i[0], i[1]);
            }
        },
        matchAll: function(t, e) {
            for(var o, n = []; null !== (o = t.exec(e));)n.push(o);
            return n;
        },
        isHTMLForm: J,
        hasOwnProperty: Z,
        hasOwnProp: Z,
        reduceDescriptors: G,
        freezeMethods: function(t) {
            G(t, function(e, o) {
                if (B(t) && -1 !== [
                    "arguments",
                    "caller",
                    "callee"
                ].indexOf(o)) return !1;
                if (B(t[o])) {
                    if (e.enumerable = !1, "writable" in e) {
                        e.writable = !1;
                        return;
                    }
                    e.set || (e.set = function() {
                        throw Error("Can not rewrite read-only method '" + o + "'");
                    });
                }
            });
        },
        toObjectSet: function(t, e) {
            var o = {};
            return function(t) {
                t.forEach(function(t) {
                    o[t] = !0;
                });
            }(L(t) ? t : String(t).split(e)), o;
        },
        toCamelCase: function(t) {
            return t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, e, o) {
                return e.toUpperCase() + o;
            });
        },
        noop: function() {},
        toFiniteNumber: function(t, e) {
            return Number.isFinite(t = +t) ? t : e;
        },
        findKey: Y,
        global: _,
        isContextDefined: q,
        ALPHABET: tt,
        generateString: function() {
            for(var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tt.ALPHA_DIGIT, o = "", n = e.length; t--;)o += e[Math.random() * n | 0];
            return o;
        },
        isSpecCompliantForm: function(t) {
            return !!(t && B(t.append) && "FormData" === t[Symbol.toStringTag] && t[Symbol.iterator]);
        },
        toJSONObject: function(t) {
            var e = Array(10), o = function(t, n) {
                if (M(t)) {
                    if (e.indexOf(t) >= 0) return;
                    if (!("toJSON" in t)) {
                        e[n] = t;
                        var i = L(t) ? [] : {};
                        return H(t, function(t, e) {
                            var r = o(t, n + 1);
                            R(r) || (i[e] = r);
                        }), e[n] = void 0, i;
                    }
                }
                return t;
            };
            return o(t, 0);
        },
        isAsyncFn: te,
        isThenable: function(t) {
            return t && (M(t) || B(t)) && B(t.then) && B(t.catch);
        }
    };
    function tn(t, e) {
        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function");
    }
    function ti(t, e) {
        for(var o = 0; o < e.length; o++){
            var n = e[o];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
    }
    function tr(t, e, o) {
        return e && ti(t.prototype, e), o && ti(t, o), t;
    }
    "use strict";
    function ta(t, e, o, n, i) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), o && (this.config = o), n && (this.request = n), i && (this.response = i);
    }
    to.inherits(ta, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: to.toJSONObject(this.config),
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
            };
        }
    });
    var ts = ta.prototype, tl = {};
    function tc(t) {
        if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function tf(t, e) {
        return (tf = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        })(t, e);
    }
    function td(t) {
        return (td = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    "use strict";
    "use strict";
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
        "ERR_INVALID_URL"
    ].forEach(function(t) {
        tl[t] = {
            value: t
        };
    }), Object.defineProperties(ta, tl), Object.defineProperty(ts, "isAxiosError", {
        value: !0
    }), ta.from = function(t, e, o, n, i, r) {
        var a = Object.create(ts);
        return to.toFlatObject(t, a, function(t) {
            return t !== Error.prototype;
        }, function(t) {
            return "isAxiosError" !== t;
        }), ta.call(a, t.message, e, o, n, i), a.cause = t, a.name = t.name, r && Object.assign(a, r), a;
    }, s = function(t) {
        for(var e, o = t.length, n = o % 3, i = [], r = 0, a = o - n; r < a; r += 16383)i.push(function(t, e, o) {
            for(var n, i = [], r = e; r < o; r += 3)i.push(tu[(n = (t[r] << 16 & 16711680) + (t[r + 1] << 8 & 65280) + (255 & t[r + 2])) >> 18 & 63] + tu[n >> 12 & 63] + tu[n >> 6 & 63] + tu[63 & n]);
            return i.join("");
        }(t, r, r + 16383 > a ? a : r + 16383));
        return 1 === n ? i.push(tu[(e = t[o - 1]) >> 2] + tu[e << 4 & 63] + "==") : 2 === n && i.push(tu[(e = (t[o - 2] << 8) + t[o - 1]) >> 10] + tu[e >> 4 & 63] + tu[e << 2 & 63] + "="), i.join("");
    };
    for(var tu = [], tp = [], tm = "undefined" != typeof Uint8Array ? Uint8Array : Array, th = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tg = 0, ty = th.length; tg < ty; ++tg)tu[tg] = th[tg], tp[th.charCodeAt(tg)] = tg;
    tp["-".charCodeAt(0)] = 62, tp["_".charCodeAt(0)] = 63, l = function(t, e, o, n, i) {
        var r, a, s = 8 * i - n - 1, l = (1 << s) - 1, c = l >> 1, f = -7, d = o ? i - 1 : 0, u = o ? -1 : 1, p = t[e + d];
        for(d += u, r = p & (1 << -f) - 1, p >>= -f, f += s; f > 0; r = 256 * r + t[e + d], d += u, f -= 8);
        for(a = r & (1 << -f) - 1, r >>= -f, f += n; f > 0; a = 256 * a + t[e + d], d += u, f -= 8);
        if (0 === r) r = 1 - c;
        else {
            if (r === l) return a ? NaN : (p ? -1 : 1) * (1 / 0);
            a += Math.pow(2, n), r -= c;
        }
        return (p ? -1 : 1) * a * Math.pow(2, r - n);
    }, c = function(t, e, o, n, i, r) {
        var a, s, l, c = 8 * r - i - 1, f = (1 << c) - 1, d = f >> 1, u = 23 === i ? 5960464477539062e-23 : 0, p = n ? 0 : r - 1, m = n ? 1 : -1, h = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for(isNaN(e = Math.abs(e)) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = f) : (a = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), a + d >= 1 ? e += u / l : e += u * Math.pow(2, 1 - d), e * l >= 2 && (a++, l /= 2), a + d >= f ? (s = 0, a = f) : a + d >= 1 ? (s = (e * l - 1) * Math.pow(2, i), a += d) : (s = e * Math.pow(2, d - 1) * Math.pow(2, i), a = 0)); i >= 8; t[o + p] = 255 & s, p += m, s /= 256, i -= 8);
        for(a = a << i | s, c += i; c > 0; t[o + p] = 255 & a, p += m, a /= 256, c -= 8);
        t[o + p - m] |= 128 * h;
    };
    var tx = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    function tb(t) {
        if (t > 2147483647) throw RangeError('The value "' + t + '" is invalid for option "size"');
        var e = new Uint8Array(t);
        return Object.setPrototypeOf(e, tv.prototype), e;
    }
    function tv(t, e, o) {
        if ("number" == typeof t) {
            if ("string" == typeof e) throw TypeError('The "string" argument must be of type string. Received type number');
            return tC(t);
        }
        return tw(t, e, o);
    }
    function tw(t, e, o) {
        if ("string" == typeof t) return function(t, e) {
            if (("string" != typeof e || "" === e) && (e = "utf8"), !tv.isEncoding(e)) throw TypeError("Unknown encoding: " + e);
            var o = 0 | tO(t, e), n = tb(o), i = n.write(t, e);
            return i !== o && (n = n.slice(0, i)), n;
        }(t, e);
        if (ArrayBuffer.isView(t)) return function(t) {
            if (tK(t, Uint8Array)) {
                var e = new Uint8Array(t);
                return tS(e.buffer, e.byteOffset, e.byteLength);
            }
            return tN(t);
        }(t);
        if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === t ? "undefined" : C(t)));
        if (tK(t, ArrayBuffer) || t && tK(t.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (tK(t, SharedArrayBuffer) || t && tK(t.buffer, SharedArrayBuffer))) return tS(t, e, o);
        if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
        var n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return tv.from(n, e, o);
        var i = function(t) {
            if (tv.isBuffer(t)) {
                var e, o = 0 | tE(t.length), n = tb(o);
                return 0 === n.length || t.copy(n, 0, 0, o), n;
            }
            return void 0 !== t.length ? "number" != typeof t.length || (e = t.length) != e ? tb(0) : tN(t) : "Buffer" === t.type && Array.isArray(t.data) ? tN(t.data) : void 0;
        }(t);
        if (i) return i;
        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return tv.from(t[Symbol.toPrimitive]("string"), e, o);
        throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === t ? "undefined" : C(t)));
    }
    function tk(t) {
        if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
        if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"');
    }
    function tC(t) {
        return tk(t), tb(t < 0 ? 0 : 0 | tE(t));
    }
    function tN(t) {
        for(var e = t.length < 0 ? 0 : 0 | tE(t.length), o = tb(e), n = 0; n < e; n += 1)o[n] = 255 & t[n];
        return o;
    }
    function tS(t, e, o) {
        var n;
        if (e < 0 || t.byteLength < e) throw RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (o || 0)) throw RangeError('"length" is outside of buffer bounds');
        return Object.setPrototypeOf(n = void 0 === e && void 0 === o ? new Uint8Array(t) : void 0 === o ? new Uint8Array(t, e) : new Uint8Array(t, e, o), tv.prototype), n;
    }
    function tE(t) {
        if (t >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
        return 0 | t;
    }
    function tO(t, e) {
        if (tv.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || tK(t, ArrayBuffer)) return t.byteLength;
        if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + (void 0 === t ? "undefined" : C(t)));
        var o = t.length, n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === o) return 0;
        for(var i = !1;;)switch(e){
            case "ascii":
            case "latin1":
            case "binary":
                return o;
            case "utf8":
            case "utf-8":
                return tV(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * o;
            case "hex":
                return o >>> 1;
            case "base64":
                return tJ(t).length;
            default:
                if (i) return n ? -1 : tV(t).length;
                e = ("" + e).toLowerCase(), i = !0;
        }
    }
    function tI(t, e, o) {
        var n, i, r = !1;
        if ((void 0 === e || e < 0) && (e = 0), e > this.length || ((void 0 === o || o > this.length) && (o = this.length), o <= 0 || (o >>>= 0) <= (e >>>= 0))) return "";
        for(t || (t = "utf8");;)switch(t){
            case "hex":
                return function(t, e, o) {
                    var n = t.length;
                    (!e || e < 0) && (e = 0), (!o || o < 0 || o > n) && (o = n);
                    for(var i = "", r = e; r < o; ++r)i += tG[t[r]];
                    return i;
                }(this, e, o);
            case "utf8":
            case "utf-8":
                return tT(this, e, o);
            case "ascii":
                return function(t, e, o) {
                    var n = "";
                    o = Math.min(t.length, o);
                    for(var i = e; i < o; ++i)n += String.fromCharCode(127 & t[i]);
                    return n;
                }(this, e, o);
            case "latin1":
            case "binary":
                return function(t, e, o) {
                    var n = "";
                    o = Math.min(t.length, o);
                    for(var i = e; i < o; ++i)n += String.fromCharCode(t[i]);
                    return n;
                }(this, e, o);
            case "base64":
                return n = e, i = o, 0 === n && i === this.length ? s(this) : s(this.slice(n, i));
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return function(t, e, o) {
                    for(var n = t.slice(e, o), i = "", r = 0; r < n.length - 1; r += 2)i += String.fromCharCode(n[r] + 256 * n[r + 1]);
                    return i;
                }(this, e, o);
            default:
                if (r) throw TypeError("Unknown encoding: " + t);
                t = (t + "").toLowerCase(), r = !0;
        }
    }
    function tA(t, e, o) {
        var n = t[e];
        t[e] = t[o], t[o] = n;
    }
    function tL(t, e, o, n, i) {
        var r;
        if (0 === t.length) return -1;
        if ("string" == typeof o ? (n = o, o = 0) : o > 2147483647 ? o = 2147483647 : o < -2147483648 && (o = -2147483648), (r = o = +o) != r && (o = i ? 0 : t.length - 1), o < 0 && (o = t.length + o), o >= t.length) {
            if (i) return -1;
            o = t.length - 1;
        } else if (o < 0) {
            if (!i) return -1;
            o = 0;
        }
        if ("string" == typeof e && (e = tv.from(e, n)), tv.isBuffer(e)) return 0 === e.length ? -1 : tR(t, e, o, n, i);
        if ("number" == typeof e) return (e &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? i ? Uint8Array.prototype.indexOf.call(t, e, o) : Uint8Array.prototype.lastIndexOf.call(t, e, o) : tR(t, [
            e
        ], o, n, i);
        throw TypeError("val must be string, number or Buffer");
    }
    function tR(t, e, o, n, i) {
        var r, a = 1, s = t.length, l = e.length;
        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (t.length < 2 || e.length < 2) return -1;
            a = 2, s /= 2, l /= 2, o /= 2;
        }
        function c(t, e) {
            return 1 === a ? t[e] : t.readUInt16BE(e * a);
        }
        if (i) {
            var f = -1;
            for(r = o; r < s; r++)if (c(t, r) === c(e, -1 === f ? 0 : r - f)) {
                if (-1 === f && (f = r), r - f + 1 === l) return f * a;
            } else -1 !== f && (r -= r - f), f = -1;
        } else for(o + l > s && (o = s - l), r = o; r >= 0; r--){
            for(var d = !0, u = 0; u < l; u++)if (c(t, r + u) !== c(e, u)) {
                d = !1;
                break;
            }
            if (d) return r;
        }
        return -1;
    }
    function tT(t, e, o) {
        o = Math.min(t.length, o);
        for(var n = [], i = e; i < o;){
            var r = t[i], a = null, s = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
            if (i + s <= o) {
                var l = void 0, c = void 0, f = void 0, d = void 0;
                switch(s){
                    case 1:
                        r < 128 && (a = r);
                        break;
                    case 2:
                        (192 & (l = t[i + 1])) == 128 && (d = (31 & r) << 6 | 63 & l) > 127 && (a = d);
                        break;
                    case 3:
                        l = t[i + 1], c = t[i + 2], (192 & l) == 128 && (192 & c) == 128 && (d = (15 & r) << 12 | (63 & l) << 6 | 63 & c) > 2047 && (d < 55296 || d > 57343) && (a = d);
                        break;
                    case 4:
                        l = t[i + 1], c = t[i + 2], f = t[i + 3], (192 & l) == 128 && (192 & c) == 128 && (192 & f) == 128 && (d = (15 & r) << 18 | (63 & l) << 12 | (63 & c) << 6 | 63 & f) > 65535 && d < 1114112 && (a = d);
                }
            }
            null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), i += s;
        }
        return function(t) {
            var e = t.length;
            if (e <= 4096) return String.fromCharCode.apply(String, t);
            for(var o = "", n = 0; n < e;)o += String.fromCharCode.apply(String, t.slice(n, n += 4096));
            return o;
        }(n);
    }
    function tz(t, e, o) {
        if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
        if (t + e > o) throw RangeError("Trying to access beyond buffer length");
    }
    function tB(t, e, o, n, i, r) {
        if (!tv.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < r) throw RangeError('"value" argument is out of bounds');
        if (o + n > t.length) throw RangeError("Index out of range");
    }
    function tD(t, e, o, n, i) {
        tH(e, n, i, t, o, 7);
        var r = Number(e & BigInt(4294967295));
        t[o++] = r, r >>= 8, t[o++] = r, r >>= 8, t[o++] = r, r >>= 8, t[o++] = r;
        var a = Number(e >> BigInt(32) & BigInt(4294967295));
        return t[o++] = a, a >>= 8, t[o++] = a, a >>= 8, t[o++] = a, a >>= 8, t[o++] = a, o;
    }
    function tM(t, e, o, n, i) {
        tH(e, n, i, t, o, 7);
        var r = Number(e & BigInt(4294967295));
        t[o + 7] = r, r >>= 8, t[o + 6] = r, r >>= 8, t[o + 5] = r, r >>= 8, t[o + 4] = r;
        var a = Number(e >> BigInt(32) & BigInt(4294967295));
        return t[o + 3] = a, a >>= 8, t[o + 2] = a, a >>= 8, t[o + 1] = a, a >>= 8, t[o] = a, o + 8;
    }
    function tP(t, e, o, n, i, r) {
        if (o + n > t.length || o < 0) throw RangeError("Index out of range");
    }
    function tW(t, e, o, n, i) {
        return e = +e, o >>>= 0, i || tP(t, e, o, 4, 34028234663852886e22, -340282346638528860000000000000000000000), c(t, e, o, n, 23, 4), o + 4;
    }
    function tX(t, e, o, n, i) {
        return e = +e, o >>>= 0, i || tP(t, e, o, 8, 17976931348623157e292, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), c(t, e, o, n, 52, 8), o + 8;
    }
    tv.TYPED_ARRAY_SUPPORT = function() {
        try {
            var t = new Uint8Array(1), e = {
                foo: function() {
                    return 42;
                }
            };
            return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
        } catch (t) {
            return !1;
        }
    }(), tv.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(tv.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (tv.isBuffer(this)) return this.buffer;
        }
    }), Object.defineProperty(tv.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (tv.isBuffer(this)) return this.byteOffset;
        }
    }), tv.poolSize = 8192, tv.from = function(t, e, o) {
        return tw(t, e, o);
    }, Object.setPrototypeOf(tv.prototype, Uint8Array.prototype), Object.setPrototypeOf(tv, Uint8Array), tv.alloc = function(t, e, o) {
        return (tk(t), t <= 0) ? tb(t) : void 0 !== e ? "string" == typeof o ? tb(t).fill(e, o) : tb(t).fill(e) : tb(t);
    }, tv.allocUnsafe = function(t) {
        return tC(t);
    }, tv.allocUnsafeSlow = function(t) {
        return tC(t);
    }, tv.isBuffer = function(t) {
        return null != t && !0 === t._isBuffer && t !== tv.prototype;
    }, tv.compare = function(t, e) {
        if (tK(t, Uint8Array) && (t = tv.from(t, t.offset, t.byteLength)), tK(e, Uint8Array) && (e = tv.from(e, e.offset, e.byteLength)), !tv.isBuffer(t) || !tv.isBuffer(e)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === e) return 0;
        for(var o = t.length, n = e.length, i = 0, r = Math.min(o, n); i < r; ++i)if (t[i] !== e[i]) {
            o = t[i], n = e[i];
            break;
        }
        return o < n ? -1 : n < o ? 1 : 0;
    }, tv.isEncoding = function(t) {
        switch(String(t).toLowerCase()){
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
    }, tv.concat = function(t, e) {
        if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return tv.alloc(0);
        if (void 0 === e) for(o = 0, e = 0; o < t.length; ++o)e += t[o].length;
        var o, n = tv.allocUnsafe(e), i = 0;
        for(o = 0; o < t.length; ++o){
            var r = t[o];
            if (tK(r, Uint8Array)) i + r.length > n.length ? (tv.isBuffer(r) || (r = tv.from(r)), r.copy(n, i)) : Uint8Array.prototype.set.call(n, r, i);
            else if (tv.isBuffer(r)) r.copy(n, i);
            else throw TypeError('"list" argument must be an Array of Buffers');
            i += r.length;
        }
        return n;
    }, tv.byteLength = tO, tv.prototype._isBuffer = !0, tv.prototype.swap16 = function() {
        var t = this.length;
        if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
        for(var e = 0; e < t; e += 2)tA(this, e, e + 1);
        return this;
    }, tv.prototype.swap32 = function() {
        var t = this.length;
        if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
        for(var e = 0; e < t; e += 4)tA(this, e, e + 3), tA(this, e + 1, e + 2);
        return this;
    }, tv.prototype.swap64 = function() {
        var t = this.length;
        if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
        for(var e = 0; e < t; e += 8)tA(this, e, e + 7), tA(this, e + 1, e + 6), tA(this, e + 2, e + 5), tA(this, e + 3, e + 4);
        return this;
    }, tv.prototype.toString = function() {
        var t = this.length;
        return 0 === t ? "" : 0 == arguments.length ? tT(this, 0, t) : tI.apply(this, arguments);
    }, tv.prototype.toLocaleString = tv.prototype.toString, tv.prototype.equals = function(t) {
        if (!tv.isBuffer(t)) throw TypeError("Argument must be a Buffer");
        return this === t || 0 === tv.compare(this, t);
    }, tv.prototype.inspect = function() {
        var t = "";
        return t = this.toString("hex", 0, 50).replace(/(.{2})/g, "$1 ").trim(), this.length > 50 && (t += " ... "), "<Buffer " + t + ">";
    }, tx && (tv.prototype[tx] = tv.prototype.inspect), tv.prototype.compare = function(t, e, o, n, i) {
        if (tK(t, Uint8Array) && (t = tv.from(t, t.offset, t.byteLength)), !tv.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + (void 0 === t ? "undefined" : C(t)));
        if (void 0 === e && (e = 0), void 0 === o && (o = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || o > t.length || n < 0 || i > this.length) throw RangeError("out of range index");
        if (n >= i && e >= o) return 0;
        if (n >= i) return -1;
        if (e >= o) return 1;
        if (e >>>= 0, o >>>= 0, n >>>= 0, i >>>= 0, this === t) return 0;
        for(var r = i - n, a = o - e, s = Math.min(r, a), l = this.slice(n, i), c = t.slice(e, o), f = 0; f < s; ++f)if (l[f] !== c[f]) {
            r = l[f], a = c[f];
            break;
        }
        return r < a ? -1 : a < r ? 1 : 0;
    }, tv.prototype.includes = function(t, e, o) {
        return -1 !== this.indexOf(t, e, o);
    }, tv.prototype.indexOf = function(t, e, o) {
        return tL(this, t, e, o, !0);
    }, tv.prototype.lastIndexOf = function(t, e, o) {
        return tL(this, t, e, o, !1);
    }, tv.prototype.write = function(t, e, o, n) {
        if (void 0 === e) n = "utf8", o = this.length, e = 0;
        else if (void 0 === o && "string" == typeof e) n = e, o = this.length, e = 0;
        else if (isFinite(e)) e >>>= 0, isFinite(o) ? (o >>>= 0, void 0 === n && (n = "utf8")) : (n = o, o = void 0);
        else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        var i, r, a, s, l, c, f, d, u = this.length - e;
        if ((void 0 === o || o > u) && (o = u), t.length > 0 && (o < 0 || e < 0) || e > this.length) throw RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        for(var p = !1;;)switch(n){
            case "hex":
                return function(t, e, o, n) {
                    o = Number(o) || 0;
                    var i, r = t.length - o;
                    n ? (n = Number(n)) > r && (n = r) : n = r;
                    var a = e.length;
                    for(n > a / 2 && (n = a / 2), i = 0; i < n; ++i){
                        var s = parseInt(e.substr(2 * i, 2), 16);
                        if (s != s) break;
                        t[o + i] = s;
                    }
                    return i;
                }(this, t, e, o);
            case "utf8":
            case "utf-8":
                return i = e, r = o, tZ(tV(t, this.length - i), this, i, r);
            case "ascii":
            case "latin1":
            case "binary":
                return a = e, s = o, tZ(function(t) {
                    for(var e = [], o = 0; o < t.length; ++o)e.push(255 & t.charCodeAt(o));
                    return e;
                }(t), this, a, s);
            case "base64":
                return l = e, c = o, tZ(tJ(t), this, l, c);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return f = e, d = o, tZ(function(t, e) {
                    for(var o, n, i = [], r = 0; r < t.length && !((e -= 2) < 0); ++r)n = (o = t.charCodeAt(r)) >> 8, i.push(o % 256), i.push(n);
                    return i;
                }(t, this.length - f), this, f, d);
            default:
                if (p) throw TypeError("Unknown encoding: " + n);
                n = ("" + n).toLowerCase(), p = !0;
        }
    }, tv.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    }, tv.prototype.slice = function(t, e) {
        var o = this.length;
        t = ~~t, e = void 0 === e ? o : ~~e, t < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o), e < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o), e < t && (e = t);
        var n = this.subarray(t, e);
        return Object.setPrototypeOf(n, tv.prototype), n;
    }, tv.prototype.readUintLE = tv.prototype.readUIntLE = function(t, e, o) {
        t >>>= 0, e >>>= 0, o || tz(t, e, this.length);
        for(var n = this[t], i = 1, r = 0; ++r < e && (i *= 256);)n += this[t + r] * i;
        return n;
    }, tv.prototype.readUintBE = tv.prototype.readUIntBE = function(t, e, o) {
        t >>>= 0, e >>>= 0, o || tz(t, e, this.length);
        for(var n = this[t + --e], i = 1; e > 0 && (i *= 256);)n += this[t + --e] * i;
        return n;
    }, tv.prototype.readUint8 = tv.prototype.readUInt8 = function(t, e) {
        return t >>>= 0, e || tz(t, 1, this.length), this[t];
    }, tv.prototype.readUint16LE = tv.prototype.readUInt16LE = function(t, e) {
        return t >>>= 0, e || tz(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, tv.prototype.readUint16BE = tv.prototype.readUInt16BE = function(t, e) {
        return t >>>= 0, e || tz(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, tv.prototype.readUint32LE = tv.prototype.readUInt32LE = function(t, e) {
        return t >>>= 0, e || tz(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, tv.prototype.readUint32BE = tv.prototype.readUInt32BE = function(t, e) {
        return t >>>= 0, e || tz(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, tv.prototype.readBigUInt64LE = tQ(function(t) {
        tY(t >>>= 0, "offset");
        var e = this[t], o = this[t + 7];
        (void 0 === e || void 0 === o) && t_(t, this.length - 8);
        var n = e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t], i = this[++t] + 256 * this[++t] + 65536 * this[++t] + 16777216 * o;
        return BigInt(n) + (BigInt(i) << BigInt(32));
    }), tv.prototype.readBigUInt64BE = tQ(function(t) {
        tY(t >>>= 0, "offset");
        var e = this[t], o = this[t + 7];
        (void 0 === e || void 0 === o) && t_(t, this.length - 8);
        var n = 16777216 * e + 65536 * this[++t] + 256 * this[++t] + this[++t], i = 16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + o;
        return (BigInt(n) << BigInt(32)) + BigInt(i);
    }), tv.prototype.readIntLE = function(t, e, o) {
        t >>>= 0, e >>>= 0, o || tz(t, e, this.length);
        for(var n = this[t], i = 1, r = 0; ++r < e && (i *= 256);)n += this[t + r] * i;
        return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
    }, tv.prototype.readIntBE = function(t, e, o) {
        t >>>= 0, e >>>= 0, o || tz(t, e, this.length);
        for(var n = e, i = 1, r = this[t + --n]; n > 0 && (i *= 256);)r += this[t + --n] * i;
        return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
    }, tv.prototype.readInt8 = function(t, e) {
        return (t >>>= 0, e || tz(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t];
    }, tv.prototype.readInt16LE = function(t, e) {
        t >>>= 0, e || tz(t, 2, this.length);
        var o = this[t] | this[t + 1] << 8;
        return 32768 & o ? 4294901760 | o : o;
    }, tv.prototype.readInt16BE = function(t, e) {
        t >>>= 0, e || tz(t, 2, this.length);
        var o = this[t + 1] | this[t] << 8;
        return 32768 & o ? 4294901760 | o : o;
    }, tv.prototype.readInt32LE = function(t, e) {
        return t >>>= 0, e || tz(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, tv.prototype.readInt32BE = function(t, e) {
        return t >>>= 0, e || tz(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, tv.prototype.readBigInt64LE = tQ(function(t) {
        tY(t >>>= 0, "offset");
        var e = this[t], o = this[t + 7];
        return (void 0 === e || void 0 === o) && t_(t, this.length - 8), (BigInt(this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (o << 24)) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t]);
    }), tv.prototype.readBigInt64BE = tQ(function(t) {
        tY(t >>>= 0, "offset");
        var e = this[t], o = this[t + 7];
        return (void 0 === e || void 0 === o) && t_(t, this.length - 8), (BigInt((e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]) << BigInt(32)) + BigInt(16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + o);
    }), tv.prototype.readFloatLE = function(t, e) {
        return t >>>= 0, e || tz(t, 4, this.length), l(this, t, !0, 23, 4);
    }, tv.prototype.readFloatBE = function(t, e) {
        return t >>>= 0, e || tz(t, 4, this.length), l(this, t, !1, 23, 4);
    }, tv.prototype.readDoubleLE = function(t, e) {
        return t >>>= 0, e || tz(t, 8, this.length), l(this, t, !0, 52, 8);
    }, tv.prototype.readDoubleBE = function(t, e) {
        return t >>>= 0, e || tz(t, 8, this.length), l(this, t, !1, 52, 8);
    }, tv.prototype.writeUintLE = tv.prototype.writeUIntLE = function(t, e, o, n) {
        if (t = +t, e >>>= 0, o >>>= 0, !n) {
            var i = Math.pow(2, 8 * o) - 1;
            tB(this, t, e, o, i, 0);
        }
        var r = 1, a = 0;
        for(this[e] = 255 & t; ++a < o && (r *= 256);)this[e + a] = t / r & 255;
        return e + o;
    }, tv.prototype.writeUintBE = tv.prototype.writeUIntBE = function(t, e, o, n) {
        if (t = +t, e >>>= 0, o >>>= 0, !n) {
            var i = Math.pow(2, 8 * o) - 1;
            tB(this, t, e, o, i, 0);
        }
        var r = o - 1, a = 1;
        for(this[e + r] = 255 & t; --r >= 0 && (a *= 256);)this[e + r] = t / a & 255;
        return e + o;
    }, tv.prototype.writeUint8 = tv.prototype.writeUInt8 = function(t, e, o) {
        return t = +t, e >>>= 0, o || tB(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1;
    }, tv.prototype.writeUint16LE = tv.prototype.writeUInt16LE = function(t, e, o) {
        return t = +t, e >>>= 0, o || tB(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2;
    }, tv.prototype.writeUint16BE = tv.prototype.writeUInt16BE = function(t, e, o) {
        return t = +t, e >>>= 0, o || tB(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2;
    }, tv.prototype.writeUint32LE = tv.prototype.writeUInt32LE = function(t, e, o) {
        return t = +t, e >>>= 0, o || tB(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4;
    }, tv.prototype.writeUint32BE = tv.prototype.writeUInt32BE = function(t, e, o) {
        return t = +t, e >>>= 0, o || tB(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4;
    }, tv.prototype.writeBigUInt64LE = tQ(function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tD(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
    }), tv.prototype.writeBigUInt64BE = tQ(function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tM(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
    }), tv.prototype.writeIntLE = function(t, e, o, n) {
        if (t = +t, e >>>= 0, !n) {
            var i = Math.pow(2, 8 * o - 1);
            tB(this, t, e, o, i - 1, -i);
        }
        var r = 0, a = 1, s = 0;
        for(this[e] = 255 & t; ++r < o && (a *= 256);)t < 0 && 0 === s && 0 !== this[e + r - 1] && (s = 1), this[e + r] = (t / a >> 0) - s & 255;
        return e + o;
    }, tv.prototype.writeIntBE = function(t, e, o, n) {
        if (t = +t, e >>>= 0, !n) {
            var i = Math.pow(2, 8 * o - 1);
            tB(this, t, e, o, i - 1, -i);
        }
        var r = o - 1, a = 1, s = 0;
        for(this[e + r] = 255 & t; --r >= 0 && (a *= 256);)t < 0 && 0 === s && 0 !== this[e + r + 1] && (s = 1), this[e + r] = (t / a >> 0) - s & 255;
        return e + o;
    }, tv.prototype.writeInt8 = function(t, e, o) {
        return t = +t, e >>>= 0, o || tB(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
    }, tv.prototype.writeInt16LE = function(t, e, o) {
        return t = +t, e >>>= 0, o || tB(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2;
    }, tv.prototype.writeInt16BE = function(t, e, o) {
        return t = +t, e >>>= 0, o || tB(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2;
    }, tv.prototype.writeInt32LE = function(t, e, o) {
        return t = +t, e >>>= 0, o || tB(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4;
    }, tv.prototype.writeInt32BE = function(t, e, o) {
        return t = +t, e >>>= 0, o || tB(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4;
    }, tv.prototype.writeBigInt64LE = tQ(function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tD(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), tv.prototype.writeBigInt64BE = tQ(function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tM(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), tv.prototype.writeFloatLE = function(t, e, o) {
        return tW(this, t, e, !0, o);
    }, tv.prototype.writeFloatBE = function(t, e, o) {
        return tW(this, t, e, !1, o);
    }, tv.prototype.writeDoubleLE = function(t, e, o) {
        return tX(this, t, e, !0, o);
    }, tv.prototype.writeDoubleBE = function(t, e, o) {
        return tX(this, t, e, !1, o);
    }, tv.prototype.copy = function(t, e, o, n) {
        if (!tv.isBuffer(t)) throw TypeError("argument should be a Buffer");
        if (o || (o = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < o && (n = o), n === o || 0 === t.length || 0 === this.length) return 0;
        if (e < 0) throw RangeError("targetStart out of bounds");
        if (o < 0 || o >= this.length) throw RangeError("Index out of range");
        if (n < 0) throw RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), t.length - e < n - o && (n = t.length - e + o);
        var i = n - o;
        return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, o, n) : Uint8Array.prototype.set.call(t, this.subarray(o, n), e), i;
    }, tv.prototype.fill = function(t, e, o, n) {
        if ("string" == typeof t) {
            if ("string" == typeof e ? (n = e, e = 0, o = this.length) : "string" == typeof o && (n = o, o = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
            if ("string" == typeof n && !tv.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
            if (1 === t.length) {
                var i, r = t.charCodeAt(0);
                ("utf8" === n && r < 128 || "latin1" === n) && (t = r);
            }
        } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
        if (e < 0 || this.length < e || this.length < o) throw RangeError("Out of range index");
        if (o <= e) return this;
        if (e >>>= 0, o = void 0 === o ? this.length : o >>> 0, t || (t = 0), "number" == typeof t) for(i = e; i < o; ++i)this[i] = t;
        else {
            var a = tv.isBuffer(t) ? t : tv.from(t, n), s = a.length;
            if (0 === s) throw TypeError('The value "' + t + '" is invalid for argument "value"');
            for(i = 0; i < o - e; ++i)this[i + e] = a[i % s];
        }
        return this;
    };
    var tj = {};
    function tF(t, e, o) {
        tj[t] = function(o) {
            !function(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && tf(t, e);
            }(r, o);
            var n, i = (n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                } catch (t) {
                    return !1;
                }
            }(), function() {
                var t, e, o = td(r);
                if (n) {
                    var i = td(this).constructor;
                    e = Reflect.construct(o, arguments, i);
                } else e = o.apply(this, arguments);
                return (t = e) && ("object" === C(t) || "function" == typeof t) ? t : tc(this);
            });
            function r() {
                var o;
                return tn(this, r), Object.defineProperty(tc(o = i.call(this)), "message", {
                    value: e.apply(tc(o), arguments),
                    writable: !0,
                    configurable: !0
                }), o.name = "".concat(o.name, " [").concat(t, "]"), o.stack, delete o.name, o;
            }
            return tr(r, [
                {
                    key: "code",
                    get: function() {
                        return t;
                    },
                    set: function(t) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: t,
                            writable: !0
                        });
                    }
                },
                {
                    key: "toString",
                    value: function() {
                        return "".concat(this.name, " [").concat(t, "]: ").concat(this.message);
                    }
                }
            ]), r;
        }(o);
    }
    function tU(t) {
        for(var e = "", o = t.length, n = "-" === t[0] ? 1 : 0; o >= n + 4; o -= 3)e = "_".concat(t.slice(o - 3, o)).concat(e);
        return "".concat(t.slice(0, o)).concat(e);
    }
    function tH(t, e, o, n, i, r) {
        if (t > o || t < e) {
            var a, s = (void 0 === e ? "undefined" : C(e)) === "bigint" ? "n" : "";
            throw a = r > 3 ? 0 === e || e === BigInt(0) ? ">= 0".concat(s, " and < 2").concat(s, " ** ").concat((r + 1) * 8).concat(s) : ">= -(2".concat(s, " ** ").concat((r + 1) * 8 - 1).concat(s, ") and < 2 ** ") + "".concat((r + 1) * 8 - 1).concat(s) : ">= ".concat(e).concat(s, " and <= ").concat(o).concat(s), new tj.ERR_OUT_OF_RANGE("value", a, t);
        }
        tY(i, "offset"), (void 0 === n[i] || void 0 === n[i + r]) && t_(i, n.length - (r + 1));
    }
    function tY(t, e) {
        if ("number" != typeof t) throw new tj.ERR_INVALID_ARG_TYPE(e, "number", t);
    }
    function t_(t, e, o) {
        if (Math.floor(t) !== t) throw tY(t, o), new tj.ERR_OUT_OF_RANGE(o || "offset", "an integer", t);
        if (e < 0) throw new tj.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new tj.ERR_OUT_OF_RANGE(o || "offset", ">= ".concat(o ? 1 : 0, " and <= ").concat(e), t);
    }
    tF("ERR_BUFFER_OUT_OF_BOUNDS", function(t) {
        return t ? "".concat(t, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds";
    }, RangeError), tF("ERR_INVALID_ARG_TYPE", function(t, e) {
        return 'The "'.concat(t, '" argument must be of type number. Received type ').concat(void 0 === e ? "undefined" : C(e));
    }, TypeError), tF("ERR_OUT_OF_RANGE", function(t, e, o) {
        var n = 'The value of "'.concat(t, '" is out of range.'), i = o;
        return Number.isInteger(o) && Math.abs(o) > 4294967296 ? i = tU(String(o)) : (void 0 === o ? "undefined" : C(o)) === "bigint" && (i = String(o), (o > Math.pow(BigInt(2), BigInt(32)) || o < -Math.pow(BigInt(2), BigInt(32))) && (i = tU(i)), i += "n"), n += " It must be ".concat(e, ". Received ").concat(i);
    }, RangeError);
    var tq = /[^+/0-9A-Za-z-_]/g;
    function tV(t, e) {
        e = e || 1 / 0;
        for(var o, n = t.length, i = null, r = [], a = 0; a < n; ++a){
            if ((o = t.charCodeAt(a)) > 55295 && o < 57344) {
                if (!i) {
                    if (o > 56319 || a + 1 === n) {
                        (e -= 3) > -1 && r.push(239, 191, 189);
                        continue;
                    }
                    i = o;
                    continue;
                }
                if (o < 56320) {
                    (e -= 3) > -1 && r.push(239, 191, 189), i = o;
                    continue;
                }
                o = (i - 55296 << 10 | o - 56320) + 65536;
            } else i && (e -= 3) > -1 && r.push(239, 191, 189);
            if (i = null, o < 128) {
                if ((e -= 1) < 0) break;
                r.push(o);
            } else if (o < 2048) {
                if ((e -= 2) < 0) break;
                r.push(o >> 6 | 192, 63 & o | 128);
            } else if (o < 65536) {
                if ((e -= 3) < 0) break;
                r.push(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128);
            } else if (o < 1114112) {
                if ((e -= 4) < 0) break;
                r.push(o >> 18 | 240, o >> 12 & 63 | 128, o >> 6 & 63 | 128, 63 & o | 128);
            } else throw Error("Invalid code point");
        }
        return r;
    }
    function tJ(t) {
        return function(t) {
            var e, o, n = function(t) {
                var e = t.length;
                if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var o = t.indexOf("=");
                -1 === o && (o = e);
                var n = o === e ? 0 : 4 - o % 4;
                return [
                    o,
                    n
                ];
            }(t), i = n[0], r = n[1], a = new tm((i + r) * 3 / 4 - r), s = 0, l = r > 0 ? i - 4 : i;
            for(o = 0; o < l; o += 4)e = tp[t.charCodeAt(o)] << 18 | tp[t.charCodeAt(o + 1)] << 12 | tp[t.charCodeAt(o + 2)] << 6 | tp[t.charCodeAt(o + 3)], a[s++] = e >> 16 & 255, a[s++] = e >> 8 & 255, a[s++] = 255 & e;
            return 2 === r && (e = tp[t.charCodeAt(o)] << 2 | tp[t.charCodeAt(o + 1)] >> 4, a[s++] = 255 & e), 1 === r && (e = tp[t.charCodeAt(o)] << 10 | tp[t.charCodeAt(o + 1)] << 4 | tp[t.charCodeAt(o + 2)] >> 2, a[s++] = e >> 8 & 255, a[s++] = 255 & e), a;
        }(function(t) {
            if ((t = (t = t.split("=")[0]).trim().replace(tq, "")).length < 2) return "";
            for(; t.length % 4 != 0;)t += "=";
            return t;
        }(t));
    }
    function tZ(t, e, o, n) {
        var i;
        for(i = 0; i < n && !(i + o >= e.length) && !(i >= t.length); ++i)e[i + o] = t[i];
        return i;
    }
    function tK(t, e) {
        return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name;
    }
    var tG = function() {
        for(var t = "0123456789abcdef", e = Array(256), o = 0; o < 16; ++o)for(var n = 16 * o, i = 0; i < 16; ++i)e[n + i] = t[o] + t[i];
        return e;
    }();
    function tQ(t) {
        return "undefined" == typeof BigInt ? t$ : t;
    }
    function t$() {
        throw Error("BigInt not supported");
    }
    "use strict";
    function t0(t) {
        return to.isPlainObject(t) || to.isArray(t);
    }
    function t1(t) {
        return to.endsWith(t, "[]") ? t.slice(0, -2) : t;
    }
    function t2(t, e, o) {
        return t ? t.concat(e).map(function(t, e) {
            return t = t1(t), !o && e ? "[" + t + "]" : t;
        }).join(o ? "." : "") : e;
    }
    "use strict";
    var t6 = to.toFlatObject(to, {}, null, function(t) {
        return /^is[A-Z]/.test(t);
    }), t5 = function(t, e, o) {
        if (!to.isObject(t)) throw TypeError("target must be an object");
        e = e || new FormData();
        var n = (o = to.toFlatObject(o, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(t, e) {
            return !to.isUndefined(e[t]);
        })).metaTokens, i = o.visitor || c, r = o.dots, a = o.indexes, s = (o.Blob || "undefined" != typeof Blob && Blob) && to.isSpecCompliantForm(e);
        if (!to.isFunction(i)) throw TypeError("visitor must be a function");
        function l(t) {
            if (null === t) return "";
            if (to.isDate(t)) return t.toISOString();
            if (!s && to.isBlob(t)) throw new ta("Blob is not supported. Use a Buffer instead.");
            return to.isArrayBuffer(t) || to.isTypedArray(t) ? s && "function" == typeof Blob ? new Blob([
                t
            ]) : tv.from(t) : t;
        }
        function c(t, o, i) {
            var s, c = t;
            if (t && !i && "object" == typeof t) {
                if (to.endsWith(o, "{}")) o = n ? o : o.slice(0, -2), t = JSON.stringify(t);
                else if (to.isArray(t) && (s = t, to.isArray(s) && !s.some(t0)) || (to.isFileList(t) || to.endsWith(o, "[]")) && (c = to.toArray(t))) return o = t1(o), c.forEach(function(t, n) {
                    to.isUndefined(t) || null === t || e.append(!0 === a ? t2([
                        o
                    ], n, r) : null === a ? o : o + "[]", l(t));
                }), !1;
            }
            return !!t0(t) || (e.append(t2(i, o, r), l(t)), !1);
        }
        var f = [], d = Object.assign(t6, {
            defaultVisitor: c,
            convertValue: l,
            isVisitable: t0
        });
        if (!to.isObject(t)) throw TypeError("data must be an object");
        return !function t(o, n) {
            if (!to.isUndefined(o)) {
                if (-1 !== f.indexOf(o)) throw Error("Circular reference detected in " + n.join("."));
                f.push(o), to.forEach(o, function(o, r) {
                    !0 === (!(to.isUndefined(o) || null === o) && i.call(e, o, to.isString(r) ? r.trim() : r, n, d)) && t(o, n ? n.concat(r) : [
                        r
                    ]);
                }), f.pop();
            }
        }(t), e;
    };
    function t3(t) {
        var e = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\x00"
        };
        return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(t) {
            return e[t];
        });
    }
    function t4(t, e) {
        this._pairs = [], t && t5(t, this, e);
    }
    "use strict";
    var t8 = t4.prototype;
    function t9(t) {
        return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    function t7(t, e, o) {
        if (!e) return t;
        var n, i = o && o.encode || t9, r = o && o.serialize;
        if (n = r ? r(e, o) : to.isURLSearchParams(e) ? e.toString() : new t4(e, o).toString(i)) {
            var a = t.indexOf("#");
            -1 !== a && (t = t.slice(0, a)), t += (-1 === t.indexOf("?") ? "?" : "&") + n;
        }
        return t;
    }
    "use strict";
    "use strict";
    "use strict";
    "use strict";
    "use strict";
    "use strict";
    "use strict";
    "use strict";
    t8.append = function(t, e) {
        this._pairs.push([
            t,
            e
        ]);
    }, t8.toString = function(t) {
        var e = t ? function(e) {
            return t.call(this, e, t3);
        } : t3;
        return this._pairs.map(function(t) {
            return e(t[0]) + "=" + e(t[1]);
        }, "").join("&");
    };
    var et = function() {
        function t() {
            tn(this, t), this.handlers = [];
        }
        return tr(t, [
            {
                key: "use",
                value: function(t, e, o) {
                    return this.handlers.push({
                        fulfilled: t,
                        rejected: e,
                        synchronous: !!o && o.synchronous,
                        runWhen: o ? o.runWhen : null
                    }), this.handlers.length - 1;
                }
            },
            {
                key: "eject",
                value: function(t) {
                    this.handlers[t] && (this.handlers[t] = null);
                }
            },
            {
                key: "clear",
                value: function() {
                    this.handlers && (this.handlers = []);
                }
            },
            {
                key: "forEach",
                value: function(t) {
                    to.forEach(this.handlers, function(e) {
                        null !== e && t(e);
                    });
                }
            }
        ]), t;
    }(), ee = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    }, eo = {
        isBrowser: !0,
        classes: {
            URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : t4,
            FormData: "undefined" != typeof FormData ? FormData : null,
            Blob: "undefined" != typeof Blob ? Blob : null
        },
        isStandardBrowserEnv: ("undefined" == typeof navigator || "ReactNative" !== (a = navigator.product) && "NativeScript" !== a && "NS" !== a) && "undefined" != typeof window && "undefined" != typeof document,
        isStandardBrowserWebWorkerEnv: "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        protocols: [
            "http",
            "https",
            "file",
            "blob",
            "url",
            "data"
        ]
    }, en = function(t) {
        if (to.isFormData(t) && to.isFunction(t.entries)) {
            var e = {};
            return to.forEachEntry(t, function(t, o) {
                !function t(e, o, n, i) {
                    var r = e[i++], a = Number.isFinite(+r), s = i >= e.length;
                    return (r = !r && to.isArray(n) ? n.length : r, s) ? (to.hasOwnProp(n, r) ? n[r] = [
                        n[r],
                        o
                    ] : n[r] = o, !a) : (n[r] && to.isObject(n[r]) || (n[r] = []), t(e, o, n[r], i) && to.isArray(n[r]) && (n[r] = function(t) {
                        var e, o, n = {}, i = Object.keys(t), r = i.length;
                        for(e = 0; e < r; e++)n[o = i[e]] = t[o];
                        return n;
                    }(n[r])), !a);
                }(to.matchAll(/\w+|\[(\w*)]/g, t).map(function(t) {
                    return "[]" === t[0] ? "" : t[1] || t[0];
                }), o, e, 0);
            }), e;
        }
        return null;
    }, ei = {
        "Content-Type": void 0
    }, er = {
        transitional: ee,
        adapter: [
            "xhr",
            "http"
        ],
        transformRequest: [
            function(t, e) {
                var o, n, i, r = e.getContentType() || "", a = r.indexOf("application/json") > -1, s = to.isObject(t);
                if (s && to.isHTMLForm(t) && (t = new FormData(t)), to.isFormData(t)) return a && a ? JSON.stringify(en(t)) : t;
                if (to.isArrayBuffer(t) || to.isBuffer(t) || to.isStream(t) || to.isFile(t) || to.isBlob(t)) return t;
                if (to.isArrayBufferView(t)) return t.buffer;
                if (to.isURLSearchParams(t)) return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
                if (s) {
                    if (r.indexOf("application/x-www-form-urlencoded") > -1) return (o = t, n = this.formSerializer, t5(o, new eo.classes.URLSearchParams(), Object.assign({
                        visitor: function(t, e, o, n) {
                            return eo.isNode && to.isBuffer(t) ? (this.append(e, t.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments);
                        }
                    }, n))).toString();
                    if ((i = to.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                        var l = this.env && this.env.FormData;
                        return t5(i ? {
                            "files[]": t
                        } : t, l && new l(), this.formSerializer);
                    }
                }
                return s || a ? (e.setContentType("application/json", !1), function(t, e, o) {
                    if (to.isString(t)) try {
                        return (0, JSON.parse)(t), to.trim(t);
                    } catch (t) {
                        if ("SyntaxError" !== t.name) throw t;
                    }
                    return (0, JSON.stringify)(t);
                }(t)) : t;
            }
        ],
        transformResponse: [
            function(t) {
                var e = this.transitional || er.transitional, o = e && e.forcedJSONParsing, n = "json" === this.responseType;
                if (t && to.isString(t) && (o && !this.responseType || n)) {
                    var i = e && e.silentJSONParsing;
                    try {
                        return JSON.parse(t);
                    } catch (t) {
                        if (!i && n) {
                            if ("SyntaxError" === t.name) throw ta.from(t, ta.ERR_BAD_RESPONSE, this, null, this.response);
                            throw t;
                        }
                    }
                }
                return t;
            }
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: eo.classes.FormData,
            Blob: eo.classes.Blob
        },
        validateStatus: function(t) {
            return t >= 200 && t < 300;
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }
    };
    function ea(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for(var o = 0, n = Array(e); o < e; o++)n[o] = t[o];
        return n;
    }
    function es(t, e) {
        if (t) {
            if ("string" == typeof t) return ea(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            if ("Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o) return Array.from(o);
            if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return ea(t, e);
        }
    }
    function el(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t;
        }(t) || function(t, e) {
            var o, n, i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != i) {
                var r = [], a = !0, s = !1;
                try {
                    for(i = i.call(t); !(a = (o = i.next()).done) && (r.push(o.value), !e || r.length !== e); a = !0);
                } catch (t) {
                    s = !0, n = t;
                } finally{
                    try {
                        a || null == i.return || i.return();
                    } finally{
                        if (s) throw n;
                    }
                }
                return r;
            }
        }(t, e) || es(t, e) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    "use strict";
    "use strict";
    to.forEach([
        "delete",
        "get",
        "head"
    ], function(t) {
        er.headers[t] = {};
    }), to.forEach([
        "post",
        "put",
        "patch"
    ], function(t) {
        er.headers[t] = to.merge(ei);
    });
    var ec = to.toObjectSet([
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
        "user-agent"
    ]), ef = function(t) {
        var e, o, n, i = {};
        return t && t.split("\n").forEach(function(t) {
            n = t.indexOf(":"), e = t.substring(0, n).trim().toLowerCase(), o = t.substring(n + 1).trim(), !e || i[e] && ec[e] || ("set-cookie" === e ? i[e] ? i[e].push(o) : i[e] = [
                o
            ] : i[e] = i[e] ? i[e] + ", " + o : o);
        }), i;
    }, ed = Symbol("internals");
    function eu(t) {
        return t && String(t).trim().toLowerCase();
    }
    function ep(t) {
        return !1 === t || null == t ? t : to.isArray(t) ? t.map(ep) : String(t);
    }
    function em(t, e, o, n, i) {
        if (to.isFunction(n)) return n.call(this, e, o);
        if (i && (e = o), to.isString(e)) {
            if (to.isString(n)) return -1 !== e.indexOf(n);
            if (to.isRegExp(n)) return n.test(e);
        }
    }
    "use strict";
    var eh = function() {
        function t(e) {
            tn(this, t), e && this.set(e);
        }
        return tr(t, [
            {
                key: "set",
                value: function(t, e, o) {
                    var n, i = this;
                    function r(t, e, o) {
                        var n = eu(e);
                        if (!n) throw Error("header name must be a non-empty string");
                        var r = to.findKey(i, n);
                        r && void 0 !== i[r] && !0 !== o && (void 0 !== o || !1 === i[r]) || (i[r || e] = ep(t));
                    }
                    var a = function(t, e) {
                        return to.forEach(t, function(t, o) {
                            return r(t, o, e);
                        });
                    };
                    return to.isPlainObject(t) || t instanceof this.constructor ? a(t, e) : to.isString(t) && (t = t.trim()) && (n = t, !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim())) ? a(ef(t), e) : null != t && r(e, t, o), this;
                }
            },
            {
                key: "get",
                value: function(t, e) {
                    if (t = eu(t)) {
                        var o = to.findKey(this, t);
                        if (o) {
                            var n = this[o];
                            if (!e) return n;
                            if (!0 === e) return function(t) {
                                for(var e, o = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; e = n.exec(t);)o[e[1]] = e[2];
                                return o;
                            }(n);
                            if (to.isFunction(e)) return e.call(this, n, o);
                            if (to.isRegExp(e)) return e.exec(n);
                            throw TypeError("parser must be boolean|regexp|function");
                        }
                    }
                }
            },
            {
                key: "has",
                value: function(t, e) {
                    if (t = eu(t)) {
                        var o = to.findKey(this, t);
                        return !!(o && void 0 !== this[o] && (!e || em(this, this[o], o, e)));
                    }
                    return !1;
                }
            },
            {
                key: "delete",
                value: function(t, e) {
                    var o = this, n = !1;
                    function i(t) {
                        if (t = eu(t)) {
                            var i = to.findKey(o, t);
                            i && (!e || em(o, o[i], i, e)) && (delete o[i], n = !0);
                        }
                    }
                    return to.isArray(t) ? t.forEach(i) : i(t), n;
                }
            },
            {
                key: "clear",
                value: function(t) {
                    for(var e = Object.keys(this), o = e.length, n = !1; o--;){
                        var i = e[o];
                        (!t || em(this, this[i], i, t, !0)) && (delete this[i], n = !0);
                    }
                    return n;
                }
            },
            {
                key: "normalize",
                value: function(t) {
                    var e = this, o = {};
                    return to.forEach(this, function(n, i) {
                        var r = to.findKey(o, i);
                        if (r) {
                            e[r] = ep(n), delete e[i];
                            return;
                        }
                        var a = t ? i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function(t, e, o) {
                            return e.toUpperCase() + o;
                        }) : String(i).trim();
                        a !== i && delete e[i], e[a] = ep(n), o[a] = !0;
                    }), this;
                }
            },
            {
                key: "concat",
                value: function() {
                    for(var t, e = arguments.length, o = Array(e), n = 0; n < e; n++)o[n] = arguments[n];
                    return (t = this.constructor).concat.apply(t, [
                        this
                    ].concat(function(t) {
                        if (Array.isArray(t)) return ea(t);
                    }(o) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
                    }(o) || es(o) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }()));
                }
            },
            {
                key: "toJSON",
                value: function(t) {
                    var e = Object.create(null);
                    return to.forEach(this, function(o, n) {
                        null != o && !1 !== o && (e[n] = t && to.isArray(o) ? o.join(", ") : o);
                    }), e;
                }
            },
            {
                key: Symbol.iterator,
                value: function() {
                    return Object.entries(this.toJSON())[Symbol.iterator]();
                }
            },
            {
                key: "toString",
                value: function() {
                    return Object.entries(this.toJSON()).map(function(t) {
                        var e = el(t, 2);
                        return e[0] + ": " + e[1];
                    }).join("\n");
                }
            },
            {
                key: Symbol.toStringTag,
                get: function() {
                    return "AxiosHeaders";
                }
            }
        ], [
            {
                key: "from",
                value: function(t) {
                    return t instanceof this ? t : new this(t);
                }
            },
            {
                key: "concat",
                value: function(t) {
                    for(var e = arguments.length, o = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)o[n - 1] = arguments[n];
                    var i = new this(t);
                    return o.forEach(function(t) {
                        return i.set(t);
                    }), i;
                }
            },
            {
                key: "accessor",
                value: function(t) {
                    var e = (this[ed] = this[ed] = {
                        accessors: {}
                    }).accessors, o = this.prototype;
                    function n(t) {
                        var n, i = eu(t);
                        e[i] || (n = to.toCamelCase(" " + t), [
                            "get",
                            "set",
                            "has"
                        ].forEach(function(e) {
                            Object.defineProperty(o, e + n, {
                                value: function(o, n, i) {
                                    return this[e].call(this, t, o, n, i);
                                },
                                configurable: !0
                            });
                        }), e[i] = !0);
                    }
                    return to.isArray(t) ? t.forEach(n) : n(t), this;
                }
            }
        ]), t;
    }();
    function eg(t, e) {
        var o = this || er, n = e || o, i = eh.from(n.headers), r = n.data;
        return to.forEach(t, function(t) {
            r = t.call(o, r, i.normalize(), e ? e.status : void 0);
        }), i.normalize(), r;
    }
    "use strict";
    function ey(t) {
        return !!(t && t.__CANCEL__);
    }
    "use strict";
    function ex(t, e, o) {
        ta.call(this, null == t ? "canceled" : t, ta.ERR_CANCELED, e, o), this.name = "CanceledError";
    }
    "use strict";
    "use strict";
    "use strict";
    "use strict";
    "use strict";
    eh.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization"
    ]), to.freezeMethods(eh.prototype), to.freezeMethods(eh), to.inherits(ex, ta, {
        __CANCEL__: !0
    });
    var eb = eo.isStandardBrowserEnv ? {
        write: function(t, e, o, n, i, r) {
            var a = [];
            a.push(t + "=" + encodeURIComponent(e)), to.isNumber(o) && a.push("expires=" + new Date(o).toGMTString()), to.isString(n) && a.push("path=" + n), to.isString(i) && a.push("domain=" + i), !0 === r && a.push("secure"), document.cookie = a.join("; ");
        },
        read: function(t) {
            var e = document.cookie.match(RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
            return e ? decodeURIComponent(e[3]) : null;
        },
        remove: function(t) {
            this.write(t, "", Date.now() - 864e5);
        }
    } : {
        write: function() {},
        read: function() {
            return null;
        },
        remove: function() {}
    };
    function ev(t, e) {
        return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) ? e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t : e;
    }
    "use strict";
    "use strict";
    "use strict";
    "use strict";
    var ew = eo.isStandardBrowserEnv ? function() {
        var t, e = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
        function n(t) {
            var n = t;
            return e && (o.setAttribute("href", n), n = o.href), o.setAttribute("href", n), {
                href: o.href,
                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                host: o.host,
                search: o.search ? o.search.replace(/^\?/, "") : "",
                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                hostname: o.hostname,
                port: o.port,
                pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
            };
        }
        return t = n(window.location.href), function(e) {
            var o = to.isString(e) ? n(e) : e;
            return o.protocol === t.protocol && o.host === t.host;
        };
    }() : function() {
        return !0;
    }, ek = function(t, e) {
        var o, n = Array(t = t || 10), i = Array(t), r = 0, a = 0;
        return e = void 0 !== e ? e : 1e3, function(s) {
            var l = Date.now(), c = i[a];
            o || (o = l), n[r] = s, i[r] = l;
            for(var f = a, d = 0; f !== r;)d += n[f++], f %= t;
            if ((r = (r + 1) % t) === a && (a = (a + 1) % t), !(l - o < e)) {
                var u = c && l - c;
                return u ? Math.round(1e3 * d / u) : void 0;
            }
        };
    };
    function eC(t, e) {
        var o = 0, n = ek(50, 250);
        return function(i) {
            var r = i.loaded, a = i.lengthComputable ? i.total : void 0, s = r - o, l = n(s), c = r <= a;
            o = r;
            var f = {
                loaded: r,
                total: a,
                progress: a ? r / a : void 0,
                bytes: s,
                rate: l || void 0,
                estimated: l && a && c ? (a - r) / l : void 0,
                event: i
            };
            f[e ? "download" : "upload"] = !0, t(f);
        };
    }
    "use strict";
    var eN = {
        http: null,
        xhr: "undefined" != typeof XMLHttpRequest && function(t) {
            return new Promise(function(e, o) {
                var n, i, r = t.data, a = eh.from(t.headers).normalize(), s = t.responseType;
                function l() {
                    t.cancelToken && t.cancelToken.unsubscribe(i), t.signal && t.signal.removeEventListener("abort", i);
                }
                to.isFormData(r) && (eo.isStandardBrowserEnv || eo.isStandardBrowserWebWorkerEnv ? a.setContentType(!1) : a.setContentType("multipart/form-data;", !1));
                var c = new XMLHttpRequest();
                if (t.auth) {
                    var f = t.auth.username || "", d = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                    a.set("Authorization", "Basic " + btoa(f + ":" + d));
                }
                var u = ev(t.baseURL, t.url);
                function p() {
                    if (c) {
                        var n, i, r = eh.from("getAllResponseHeaders" in c && c.getAllResponseHeaders());
                        i = (n = {
                            data: s && "text" !== s && "json" !== s ? c.response : c.responseText,
                            status: c.status,
                            statusText: c.statusText,
                            headers: r,
                            config: t,
                            request: c
                        }).config.validateStatus, !n.status || !i || i(n.status) ? (e(n), l()) : (o(new ta("Request failed with status code " + n.status, [
                            ta.ERR_BAD_REQUEST,
                            ta.ERR_BAD_RESPONSE
                        ][Math.floor(n.status / 100) - 4], n.config, n.request, n)), l()), c = null;
                    }
                }
                if (c.open(t.method.toUpperCase(), t7(u, t.params, t.paramsSerializer), !0), c.timeout = t.timeout, "onloadend" in c ? c.onloadend = p : c.onreadystatechange = function() {
                    c && 4 === c.readyState && (0 !== c.status || c.responseURL && 0 === c.responseURL.indexOf("file:")) && setTimeout(p);
                }, c.onabort = function() {
                    c && (o(new ta("Request aborted", ta.ECONNABORTED, t, c)), c = null);
                }, c.onerror = function() {
                    o(new ta("Network Error", ta.ERR_NETWORK, t, c)), c = null;
                }, c.ontimeout = function() {
                    var e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded", n = t.transitional || ee;
                    t.timeoutErrorMessage && (e = t.timeoutErrorMessage), o(new ta(e, n.clarifyTimeoutError ? ta.ETIMEDOUT : ta.ECONNABORTED, t, c)), c = null;
                }, eo.isStandardBrowserEnv) {
                    var m = (t.withCredentials || ew(u)) && t.xsrfCookieName && eb.read(t.xsrfCookieName);
                    m && a.set(t.xsrfHeaderName, m);
                }
                void 0 === r && a.setContentType(null), "setRequestHeader" in c && to.forEach(a.toJSON(), function(t, e) {
                    c.setRequestHeader(e, t);
                }), to.isUndefined(t.withCredentials) || (c.withCredentials = !!t.withCredentials), s && "json" !== s && (c.responseType = t.responseType), "function" == typeof t.onDownloadProgress && c.addEventListener("progress", eC(t.onDownloadProgress, !0)), "function" == typeof t.onUploadProgress && c.upload && c.upload.addEventListener("progress", eC(t.onUploadProgress)), (t.cancelToken || t.signal) && (i = function(e) {
                    c && (o(!e || e.type ? new ex(null, t, c) : e), c.abort(), c = null);
                }, t.cancelToken && t.cancelToken.subscribe(i), t.signal && (t.signal.aborted ? i() : t.signal.addEventListener("abort", i)));
                var h = (n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u)) && n[1] || "";
                if (h && -1 === eo.protocols.indexOf(h)) {
                    o(new ta("Unsupported protocol " + h + ":", ta.ERR_BAD_REQUEST, t));
                    return;
                }
                c.send(r || null);
            });
        }
    };
    to.forEach(eN, function(t, e) {
        if (t) {
            try {
                Object.defineProperty(t, "name", {
                    value: e
                });
            } catch (t) {}
            Object.defineProperty(t, "adapterName", {
                value: e
            });
        }
    });
    var eS = {
        getAdapter: function(t) {
            for(var e, o, n = (t = to.isArray(t) ? t : [
                t
            ]).length, i = 0; i < n && (e = t[i], !(o = to.isString(e) ? eN[e.toLowerCase()] : e)); i++);
            if (!o) {
                if (!1 === o) throw new ta("Adapter ".concat(e, " is not supported by the environment"), "ERR_NOT_SUPPORT");
                throw Error(to.hasOwnProp(eN, e) ? "Adapter '".concat(e, "' is not available in the build") : "Unknown adapter '".concat(e, "'"));
            }
            if (!to.isFunction(o)) throw TypeError("adapter is not a function");
            return o;
        },
        adapters: eN
    };
    function eE(t) {
        if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new ex(null, t);
    }
    function eO(t) {
        return eE(t), t.headers = eh.from(t.headers), t.data = eg.call(t, t.transformRequest), -1 !== [
            "post",
            "put",
            "patch"
        ].indexOf(t.method) && t.headers.setContentType("application/x-www-form-urlencoded", !1), eS.getAdapter(t.adapter || er.adapter)(t).then(function(e) {
            return eE(t), e.data = eg.call(t, t.transformResponse, e), e.headers = eh.from(e.headers), e;
        }, function(e) {
            return !ey(e) && (eE(t), e && e.response && (e.response.data = eg.call(t, t.transformResponse, e.response), e.response.headers = eh.from(e.response.headers))), Promise.reject(e);
        });
    }
    "use strict";
    var eI = function(t) {
        return t instanceof eh ? t.toJSON() : t;
    };
    function eA(t, e) {
        e = e || {};
        var o = {};
        function n(t, e, o) {
            return to.isPlainObject(t) && to.isPlainObject(e) ? to.merge.call({
                caseless: o
            }, t, e) : to.isPlainObject(e) ? to.merge({}, e) : to.isArray(e) ? e.slice() : e;
        }
        function i(t, e, o) {
            return to.isUndefined(e) ? to.isUndefined(t) ? void 0 : n(void 0, t, o) : n(t, e, o);
        }
        function r(t, e) {
            if (!to.isUndefined(e)) return n(void 0, e);
        }
        function a(t, e) {
            return to.isUndefined(e) ? to.isUndefined(t) ? void 0 : n(void 0, t) : n(void 0, e);
        }
        function s(o, i, r) {
            return r in e ? n(o, i) : r in t ? n(void 0, o) : void 0;
        }
        var l = {
            url: r,
            method: r,
            data: r,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: s,
            headers: function(t, e) {
                return i(eI(t), eI(e), !0);
            }
        };
        return to.forEach(Object.keys(Object.assign({}, t, e)), function(n) {
            var r = l[n] || i, a = r(t[n], e[n], n);
            to.isUndefined(a) && r !== s || (o[n] = a);
        }), o;
    }
    "use strict";
    var eL = "1.4.0", eR = {};
    "use strict";
    [
        "object",
        "boolean",
        "number",
        "function",
        "string",
        "symbol"
    ].forEach(function(t, e) {
        eR[t] = function(o) {
            return (void 0 === o ? "undefined" : C(o)) === t || "a" + (e < 1 ? "n " : " ") + t;
        };
    });
    var eT = {};
    "use strict";
    "use strict";
    "use strict";
    eR.transitional = function(t, e, o) {
        function n(t, e) {
            return "[Axios v" + eL + "] Transitional option '" + t + "'" + e + (o ? ". " + o : "");
        }
        return function(o, i, r) {
            if (!1 === t) throw new ta(n(i, " has been removed" + (e ? " in " + e : "")), ta.ERR_DEPRECATED);
            return e && !eT[i] && (eT[i] = !0, console.warn(n(i, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(o, i, r);
        };
    };
    var ez = {
        assertOptions: function(t, e, o) {
            if ("object" != typeof t) throw new ta("options must be an object", ta.ERR_BAD_OPTION_VALUE);
            for(var n = Object.keys(t), i = n.length; i-- > 0;){
                var r = n[i], a = e[r];
                if (a) {
                    var s = t[r], l = void 0 === s || a(s, r, t);
                    if (!0 !== l) throw new ta("option " + r + " must be " + l, ta.ERR_BAD_OPTION_VALUE);
                    continue;
                }
                if (!0 !== o) throw new ta("Unknown option " + r, ta.ERR_BAD_OPTION);
            }
        },
        validators: eR
    }, eB = ez.validators, eD = function() {
        function t(e) {
            tn(this, t), this.defaults = e, this.interceptors = {
                request: new et(),
                response: new et()
            };
        }
        return tr(t, [
            {
                key: "request",
                value: function(t, e) {
                    "string" == typeof t ? (e = e || {}).url = t : e = t || {};
                    var o, n, i, r = (e = eA(this.defaults, e)).transitional, a = e.paramsSerializer, s = e.headers;
                    void 0 !== r && ez.assertOptions(r, {
                        silentJSONParsing: eB.transitional(eB.boolean),
                        forcedJSONParsing: eB.transitional(eB.boolean),
                        clarifyTimeoutError: eB.transitional(eB.boolean)
                    }, !1), null != a && (to.isFunction(a) ? e.paramsSerializer = {
                        serialize: a
                    } : ez.assertOptions(a, {
                        encode: eB.function,
                        serialize: eB.function
                    }, !0)), e.method = (e.method || this.defaults.method || "get").toLowerCase(), (o = s && to.merge(s.common, s[e.method])) && to.forEach([
                        "delete",
                        "get",
                        "head",
                        "post",
                        "put",
                        "patch",
                        "common"
                    ], function(t) {
                        delete s[t];
                    }), e.headers = eh.concat(o, s);
                    var l = [], c = !0;
                    this.interceptors.request.forEach(function(t) {
                        ("function" != typeof t.runWhen || !1 !== t.runWhen(e)) && (c = c && t.synchronous, l.unshift(t.fulfilled, t.rejected));
                    });
                    var f = [];
                    this.interceptors.response.forEach(function(t) {
                        f.push(t.fulfilled, t.rejected);
                    });
                    var d = 0;
                    if (!c) {
                        var u = [
                            eO.bind(this),
                            void 0
                        ];
                        for(u.unshift.apply(u, l), u.push.apply(u, f), i = u.length, n = Promise.resolve(e); d < i;)n = n.then(u[d++], u[d++]);
                        return n;
                    }
                    i = l.length;
                    var p = e;
                    for(d = 0; d < i;){
                        var m = l[d++], h = l[d++];
                        try {
                            p = m(p);
                        } catch (t) {
                            h.call(this, t);
                            break;
                        }
                    }
                    try {
                        n = eO.call(this, p);
                    } catch (t) {
                        return Promise.reject(t);
                    }
                    for(d = 0, i = f.length; d < i;)n = n.then(f[d++], f[d++]);
                    return n;
                }
            },
            {
                key: "getUri",
                value: function(t) {
                    return t7(ev((t = eA(this.defaults, t)).baseURL, t.url), t.params, t.paramsSerializer);
                }
            }
        ]), t;
    }();
    "use strict";
    to.forEach([
        "delete",
        "get",
        "head",
        "options"
    ], function(t) {
        eD.prototype[t] = function(e, o) {
            return this.request(eA(o || {}, {
                method: t,
                url: e,
                data: (o || {}).data
            }));
        };
    }), to.forEach([
        "post",
        "put",
        "patch"
    ], function(t) {
        function e(e) {
            return function(o, n, i) {
                return this.request(eA(i || {}, {
                    method: t,
                    headers: e ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: o,
                    data: n
                }));
            };
        }
        eD.prototype[t] = e(), eD.prototype[t + "Form"] = e(!0);
    });
    var eM = function() {
        function t(e) {
            if (tn(this, t), "function" != typeof e) throw TypeError("executor must be a function.");
            this.promise = new Promise(function(t) {
                o = t;
            });
            var o, n = this;
            this.promise.then(function(t) {
                if (n._listeners) {
                    for(var e = n._listeners.length; e-- > 0;)n._listeners[e](t);
                    n._listeners = null;
                }
            }), this.promise.then = function(t) {
                var e, o = new Promise(function(t) {
                    n.subscribe(t), e = t;
                }).then(t);
                return o.cancel = function() {
                    n.unsubscribe(e);
                }, o;
            }, e(function(t, e, i) {
                n.reason || (n.reason = new ex(t, e, i), o(n.reason));
            });
        }
        return tr(t, [
            {
                key: "throwIfRequested",
                value: function() {
                    if (this.reason) throw this.reason;
                }
            },
            {
                key: "subscribe",
                value: function(t) {
                    if (this.reason) {
                        t(this.reason);
                        return;
                    }
                    this._listeners ? this._listeners.push(t) : this._listeners = [
                        t
                    ];
                }
            },
            {
                key: "unsubscribe",
                value: function(t) {
                    if (this._listeners) {
                        var e = this._listeners.indexOf(t);
                        -1 !== e && this._listeners.splice(e, 1);
                    }
                }
            }
        ], [
            {
                key: "source",
                value: function() {
                    var e;
                    return {
                        token: new t(function(t) {
                            e = t;
                        }),
                        cancel: e
                    };
                }
            }
        ]), t;
    }(), eP = {
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
        NetworkAuthenticationRequired: 511
    };
    Object.entries(eP).forEach(function(t) {
        var e = el(t, 2), o = e[0];
        eP[e[1]] = o;
    });
    var eW = function t(e) {
        var o = new eD(e), n = N(eD.prototype.request, o);
        return to.extend(n, eD.prototype, o, {
            allOwnKeys: !0
        }), to.extend(n, o, null, {
            allOwnKeys: !0
        }), n.create = function(o) {
            return t(eA(e, o));
        }, n;
    }(er);
    function eX(t, e, o) {
        return ej.apply(this, arguments);
    }
    function ej() {
        var t;
        return (t = function(t, e, o) {
            return function(t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this;
                }), r;
                function s(s) {
                    return function(l) {
                        return function(s) {
                            if (o) throw TypeError("Generator is already executing.");
                            for(; r && (r = 0, s[0] && (a = 0)), a;)try {
                                if (o = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                                switch(n = 0, i && (s = [
                                    2 & s[0],
                                    i.value
                                ]), s[0]){
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = s[1], s = [
                                            0
                                        ];
                                        continue;
                                    case 7:
                                        s = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            a = 0;
                                            continue;
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            a.label = s[1];
                                            break;
                                        }
                                        if (6 === s[0] && a.label < i[1]) {
                                            a.label = i[1], i = s;
                                            break;
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(s);
                                            break;
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue;
                                }
                                s = e.call(t, a);
                            } catch (t) {
                                s = [
                                    6,
                                    t
                                ], n = 0;
                            } finally{
                                o = i = 0;
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            };
                        }([
                            s,
                            l
                        ]);
                    };
                }
            }(this, function(n) {
                switch(n.label){
                    case 0:
                        return n.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]), [
                            4,
                            eW.get("https://pixabay.com/api/?key=37512295-7e92ae3b8c2d51cd4aec1f8a1&q=".concat(t, "&image_type=photo&orientation=horizontal&safesearch=true&page=").concat(e, "&per_page=").concat(o))
                        ];
                    case 1:
                        return [
                            2,
                            n.sent()
                        ];
                    case 2:
                        throw Error(n.sent());
                    case 3:
                        return [
                            2
                        ];
                }
            });
        }, ej = function() {
            var e = this, o = arguments;
            return new Promise(function(n, i) {
                var r = t.apply(e, o);
                function a(t) {
                    k(r, n, i, a, s, "next", t);
                }
                function s(t) {
                    k(r, n, i, a, s, "throw", t);
                }
                a(void 0);
            });
        }).apply(this, arguments);
    }
    eW.Axios = eD, eW.CanceledError = ex, eW.CancelToken = eM, eW.isCancel = ey, eW.VERSION = eL, eW.toFormData = t5, eW.AxiosError = ta, eW.Cancel = eW.CanceledError, eW.all = function(t) {
        return Promise.all(t);
    }, eW.spread = function(t) {
        return function(e) {
            return t.apply(null, e);
        };
    }, eW.isAxiosError = function(t) {
        return to.isObject(t) && !0 === t.isAxiosError;
    }, eW.mergeConfig = eA, eW.AxiosHeaders = eh, eW.formToJSON = function(t) {
        return en(to.isHTMLForm(t) ? new FormData(t) : t);
    }, eW.HttpStatusCode = eP, eW.default = eW, eW.Axios, eW.AxiosError, eW.CanceledError, eW.isCancel, eW.CancelToken, eW.VERSION, eW.all, eW.Cancel, eW.isAxiosError, eW.spread, eW.toFormData, eW.AxiosHeaders, eW.HttpStatusCode, eW.formToJSON, eW.mergeConfig;
    var eF = document.querySelector(".search-form"), eU = eF[0], eH = document.querySelector(".load-more"), eY = document.querySelector(".gallery");
    eH.classList.add("is-hidden");
    var e_ = new (t(u))(".gallery a", {
        captionsData: "alt",
        captionsDelay: 250,
        disableScroll: !1
    });
    function eq(t) {
        var e = t.webformatURL, o = t.largeImageURL, n = t.tags, i = t.likes, r = t.views, a = t.comments, s = t.downloads;
        return '\n  <div class="photo-card">\n<a href="'.concat(o, '"><img src="').concat(e, '" alt="').concat(n, ' loading="lazy"></a>\n<div class="info">\n  <p class="info-item">\n    <b>Likes</b>\n    ').concat(i, '\n  </p>\n  <p class="info-item">\n    <b>Views</b>\n    ').concat(r, '\n  </p>\n  <p class="info-item">\n    <b>Comments</b>\n    ').concat(a, '\n  </p>\n  <p class="info-item">\n    <b>Downloads</b>\n    ').concat(s, "\n  </p>\n</div>\n</div>\n");
    }
    eF.addEventListener("submit", function(t) {
        t.preventDefault(), "" !== eU.value.trim() && (f = 1, eY.innerHTML = " ", eX(eU.value, f, 40).then(function(t) {
            var e = t.data;
            if (0 === e.total) {
                w("Sorry, there are no images matching your search query. Please try again");
                return;
            }
            eH.classList.remove("is-hidden");
            var o = e.hits.map(function(t) {
                return eq(t);
            });
            eY.insertAdjacentHTML("beforeend", o.join("")), e_.refresh();
        }));
    }), eH.addEventListener("click", function() {
        f += 1, eX(eU.value, f, 40).then(function(t) {
            console.log(t);
            var e = t.data;
            e.hits.length < 40 && (w("We're sorry, but you've reached the end of search results."), eH.classList.add("is-hidden"));
            var o = e.hits.map(function(t) {
                return eq(t);
            });
            eY.insertAdjacentHTML("beforeend", o.join("")), e_.refresh();
        }).catch(function() {
            w("We're sorry, but you've reached the end of search results."), eH.classList.add("is-hidden");
        });
    });
}();

//# sourceMappingURL=index.5cc6396d.js.map
