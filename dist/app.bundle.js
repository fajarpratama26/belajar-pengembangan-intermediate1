/*! For license information please see app.bundle.js.LICENSE.txt */
(() => {
  var t,
    e,
    n = {
      481: function (t, e) {
        !(function (t) {
          'use strict';
          function e(t) {
            var e, n, r, i;
            for (n = 1, r = arguments.length; n < r; n++) for (e in (i = arguments[n])) t[e] = i[e];
            return t;
          }
          var n =
            Object.create ||
            (function () {
              function t() {}
              return function (e) {
                return (t.prototype = e), new t();
              };
            })();
          function r(t, e) {
            var n = Array.prototype.slice;
            if (t.bind) return t.bind.apply(t, n.call(arguments, 1));
            var r = n.call(arguments, 2);
            return function () {
              return t.apply(e, r.length ? r.concat(n.call(arguments)) : arguments);
            };
          }
          var i = 0;
          function o(t) {
            return '_leaflet_id' in t || (t._leaflet_id = ++i), t._leaflet_id;
          }
          function a(t, e, n) {
            var r, i, o, a;
            return (
              (a = function () {
                (r = !1), i && (o.apply(n, i), (i = !1));
              }),
              (o = function () {
                r ? (i = arguments) : (t.apply(n, arguments), setTimeout(a, e), (r = !0));
              }),
              o
            );
          }
          function s(t, e, n) {
            var r = e[1],
              i = e[0],
              o = r - i;
            return t === r && n ? t : ((((t - i) % o) + o) % o) + i;
          }
          function c() {
            return !1;
          }
          function u(t, e) {
            if (!1 === e) return t;
            var n = Math.pow(10, void 0 === e ? 6 : e);
            return Math.round(t * n) / n;
          }
          function h(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
          }
          function l(t) {
            return h(t).split(/\s+/);
          }
          function f(t, e) {
            for (var r in (Object.prototype.hasOwnProperty.call(t, 'options') ||
              (t.options = t.options ? n(t.options) : {}),
            e))
              t.options[r] = e[r];
            return t.options;
          }
          function p(t, e, n) {
            var r = [];
            for (var i in t)
              r.push(encodeURIComponent(n ? i.toUpperCase() : i) + '=' + encodeURIComponent(t[i]));
            return (e && -1 !== e.indexOf('?') ? '&' : '?') + r.join('&');
          }
          var d = /\{ *([\w_ -]+) *\}/g;
          function m(t, e) {
            return t.replace(d, function (t, n) {
              var r = e[n];
              if (void 0 === r) throw new Error('No value provided for variable ' + t);
              return 'function' == typeof r && (r = r(e)), r;
            });
          }
          var v =
            Array.isArray ||
            function (t) {
              return '[object Array]' === Object.prototype.toString.call(t);
            };
          function y(t, e) {
            for (var n = 0; n < t.length; n++) if (t[n] === e) return n;
            return -1;
          }
          var _ = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
          function g(t) {
            return window['webkit' + t] || window['moz' + t] || window['ms' + t];
          }
          var w = 0;
          function b(t) {
            var e = +new Date(),
              n = Math.max(0, 16 - (e - w));
            return (w = e + n), window.setTimeout(t, n);
          }
          var x = window.requestAnimationFrame || g('RequestAnimationFrame') || b,
            E =
              window.cancelAnimationFrame ||
              g('CancelAnimationFrame') ||
              g('CancelRequestAnimationFrame') ||
              function (t) {
                window.clearTimeout(t);
              };
          function P(t, e, n) {
            if (!n || x !== b) return x.call(window, r(t, e));
            t.call(e);
          }
          function k(t) {
            t && E.call(window, t);
          }
          var T = {
            __proto__: null,
            extend: e,
            create: n,
            bind: r,
            get lastId() {
              return i;
            },
            stamp: o,
            throttle: a,
            wrapNum: s,
            falseFn: c,
            formatNum: u,
            trim: h,
            splitWords: l,
            setOptions: f,
            getParamString: p,
            template: m,
            isArray: v,
            indexOf: y,
            emptyImageUrl: _,
            requestFn: x,
            cancelFn: E,
            requestAnimFrame: P,
            cancelAnimFrame: k,
          };
          function S() {}
          (S.extend = function (t) {
            var r = function () {
                f(this),
                  this.initialize && this.initialize.apply(this, arguments),
                  this.callInitHooks();
              },
              i = (r.__super__ = this.prototype),
              o = n(i);
            for (var a in ((o.constructor = r), (r.prototype = o), this))
              Object.prototype.hasOwnProperty.call(this, a) &&
                'prototype' !== a &&
                '__super__' !== a &&
                (r[a] = this[a]);
            return (
              t.statics && e(r, t.statics),
              t.includes &&
                ((function (t) {
                  if ('undefined' != typeof L && L && L.Mixin) {
                    t = v(t) ? t : [t];
                    for (var e = 0; e < t.length; e++)
                      t[e] === L.Mixin.Events &&
                        console.warn(
                          'Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.',
                          new Error().stack,
                        );
                  }
                })(t.includes),
                e.apply(null, [o].concat(t.includes))),
              e(o, t),
              delete o.statics,
              delete o.includes,
              o.options && ((o.options = i.options ? n(i.options) : {}), e(o.options, t.options)),
              (o._initHooks = []),
              (o.callInitHooks = function () {
                if (!this._initHooksCalled) {
                  i.callInitHooks && i.callInitHooks.call(this), (this._initHooksCalled = !0);
                  for (var t = 0, e = o._initHooks.length; t < e; t++) o._initHooks[t].call(this);
                }
              }),
              r
            );
          }),
            (S.include = function (t) {
              var n = this.prototype.options;
              return (
                e(this.prototype, t),
                t.options && ((this.prototype.options = n), this.mergeOptions(t.options)),
                this
              );
            }),
            (S.mergeOptions = function (t) {
              return e(this.prototype.options, t), this;
            }),
            (S.addInitHook = function (t) {
              var e = Array.prototype.slice.call(arguments, 1),
                n =
                  'function' == typeof t
                    ? t
                    : function () {
                        this[t].apply(this, e);
                      };
              return (
                (this.prototype._initHooks = this.prototype._initHooks || []),
                this.prototype._initHooks.push(n),
                this
              );
            });
          var O = {
            on: function (t, e, n) {
              if ('object' == typeof t) for (var r in t) this._on(r, t[r], e);
              else for (var i = 0, o = (t = l(t)).length; i < o; i++) this._on(t[i], e, n);
              return this;
            },
            off: function (t, e, n) {
              if (arguments.length)
                if ('object' == typeof t) for (var r in t) this._off(r, t[r], e);
                else {
                  t = l(t);
                  for (var i = 1 === arguments.length, o = 0, a = t.length; o < a; o++)
                    i ? this._off(t[o]) : this._off(t[o], e, n);
                }
              else delete this._events;
              return this;
            },
            _on: function (t, e, n, r) {
              if ('function' == typeof e) {
                if (!1 === this._listens(t, e, n)) {
                  n === this && (n = void 0);
                  var i = { fn: e, ctx: n };
                  r && (i.once = !0),
                    (this._events = this._events || {}),
                    (this._events[t] = this._events[t] || []),
                    this._events[t].push(i);
                }
              } else console.warn('wrong listener type: ' + typeof e);
            },
            _off: function (t, e, n) {
              var r, i, o;
              if (this._events && (r = this._events[t]))
                if (1 !== arguments.length)
                  if ('function' == typeof e) {
                    var a = this._listens(t, e, n);
                    if (!1 !== a) {
                      var s = r[a];
                      this._firingCount && ((s.fn = c), (this._events[t] = r = r.slice())),
                        r.splice(a, 1);
                    }
                  } else console.warn('wrong listener type: ' + typeof e);
                else {
                  if (this._firingCount) for (i = 0, o = r.length; i < o; i++) r[i].fn = c;
                  delete this._events[t];
                }
            },
            fire: function (t, n, r) {
              if (!this.listens(t, r)) return this;
              var i = e({}, n, {
                type: t,
                target: this,
                sourceTarget: (n && n.sourceTarget) || this,
              });
              if (this._events) {
                var o = this._events[t];
                if (o) {
                  this._firingCount = this._firingCount + 1 || 1;
                  for (var a = 0, s = o.length; a < s; a++) {
                    var c = o[a],
                      u = c.fn;
                    c.once && this.off(t, u, c.ctx), u.call(c.ctx || this, i);
                  }
                  this._firingCount--;
                }
              }
              return r && this._propagateEvent(i), this;
            },
            listens: function (t, e, n, r) {
              'string' != typeof t && console.warn('"string" type argument expected');
              var i = e;
              'function' != typeof e && ((r = !!e), (i = void 0), (n = void 0));
              var o = this._events && this._events[t];
              if (o && o.length && !1 !== this._listens(t, i, n)) return !0;
              if (r)
                for (var a in this._eventParents)
                  if (this._eventParents[a].listens(t, e, n, r)) return !0;
              return !1;
            },
            _listens: function (t, e, n) {
              if (!this._events) return !1;
              var r = this._events[t] || [];
              if (!e) return !!r.length;
              n === this && (n = void 0);
              for (var i = 0, o = r.length; i < o; i++)
                if (r[i].fn === e && r[i].ctx === n) return i;
              return !1;
            },
            once: function (t, e, n) {
              if ('object' == typeof t) for (var r in t) this._on(r, t[r], e, !0);
              else for (var i = 0, o = (t = l(t)).length; i < o; i++) this._on(t[i], e, n, !0);
              return this;
            },
            addEventParent: function (t) {
              return (
                (this._eventParents = this._eventParents || {}),
                (this._eventParents[o(t)] = t),
                this
              );
            },
            removeEventParent: function (t) {
              return this._eventParents && delete this._eventParents[o(t)], this;
            },
            _propagateEvent: function (t) {
              for (var n in this._eventParents)
                this._eventParents[n].fire(
                  t.type,
                  e({ layer: t.target, propagatedFrom: t.target }, t),
                  !0,
                );
            },
          };
          (O.addEventListener = O.on),
            (O.removeEventListener = O.clearAllEventListeners = O.off),
            (O.addOneTimeEventListener = O.once),
            (O.fireEvent = O.fire),
            (O.hasEventListeners = O.listens);
          var M = S.extend(O);
          function j(t, e, n) {
            (this.x = n ? Math.round(t) : t), (this.y = n ? Math.round(e) : e);
          }
          var I =
            Math.trunc ||
            function (t) {
              return t > 0 ? Math.floor(t) : Math.ceil(t);
            };
          function z(t, e, n) {
            return t instanceof j
              ? t
              : v(t)
                ? new j(t[0], t[1])
                : null == t
                  ? t
                  : 'object' == typeof t && 'x' in t && 'y' in t
                    ? new j(t.x, t.y)
                    : new j(t, e, n);
          }
          function C(t, e) {
            if (t) for (var n = e ? [t, e] : t, r = 0, i = n.length; r < i; r++) this.extend(n[r]);
          }
          function B(t, e) {
            return !t || t instanceof C ? t : new C(t, e);
          }
          function A(t, e) {
            if (t) for (var n = e ? [t, e] : t, r = 0, i = n.length; r < i; r++) this.extend(n[r]);
          }
          function N(t, e) {
            return t instanceof A ? t : new A(t, e);
          }
          function Z(t, e, n) {
            if (isNaN(t) || isNaN(e))
              throw new Error('Invalid LatLng object: (' + t + ', ' + e + ')');
            (this.lat = +t), (this.lng = +e), void 0 !== n && (this.alt = +n);
          }
          function R(t, e, n) {
            return t instanceof Z
              ? t
              : v(t) && 'object' != typeof t[0]
                ? 3 === t.length
                  ? new Z(t[0], t[1], t[2])
                  : 2 === t.length
                    ? new Z(t[0], t[1])
                    : null
                : null == t
                  ? t
                  : 'object' == typeof t && 'lat' in t
                    ? new Z(t.lat, 'lng' in t ? t.lng : t.lon, t.alt)
                    : void 0 === e
                      ? null
                      : new Z(t, e, n);
          }
          (j.prototype = {
            clone: function () {
              return new j(this.x, this.y);
            },
            add: function (t) {
              return this.clone()._add(z(t));
            },
            _add: function (t) {
              return (this.x += t.x), (this.y += t.y), this;
            },
            subtract: function (t) {
              return this.clone()._subtract(z(t));
            },
            _subtract: function (t) {
              return (this.x -= t.x), (this.y -= t.y), this;
            },
            divideBy: function (t) {
              return this.clone()._divideBy(t);
            },
            _divideBy: function (t) {
              return (this.x /= t), (this.y /= t), this;
            },
            multiplyBy: function (t) {
              return this.clone()._multiplyBy(t);
            },
            _multiplyBy: function (t) {
              return (this.x *= t), (this.y *= t), this;
            },
            scaleBy: function (t) {
              return new j(this.x * t.x, this.y * t.y);
            },
            unscaleBy: function (t) {
              return new j(this.x / t.x, this.y / t.y);
            },
            round: function () {
              return this.clone()._round();
            },
            _round: function () {
              return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
            },
            floor: function () {
              return this.clone()._floor();
            },
            _floor: function () {
              return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
            },
            ceil: function () {
              return this.clone()._ceil();
            },
            _ceil: function () {
              return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
            },
            trunc: function () {
              return this.clone()._trunc();
            },
            _trunc: function () {
              return (this.x = I(this.x)), (this.y = I(this.y)), this;
            },
            distanceTo: function (t) {
              var e = (t = z(t)).x - this.x,
                n = t.y - this.y;
              return Math.sqrt(e * e + n * n);
            },
            equals: function (t) {
              return (t = z(t)).x === this.x && t.y === this.y;
            },
            contains: function (t) {
              return (
                (t = z(t)), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
              );
            },
            toString: function () {
              return 'Point(' + u(this.x) + ', ' + u(this.y) + ')';
            },
          }),
            (C.prototype = {
              extend: function (t) {
                var e, n;
                if (!t) return this;
                if (t instanceof j || 'number' == typeof t[0] || 'x' in t) e = n = z(t);
                else if (((e = (t = B(t)).min), (n = t.max), !e || !n)) return this;
                return (
                  this.min || this.max
                    ? ((this.min.x = Math.min(e.x, this.min.x)),
                      (this.max.x = Math.max(n.x, this.max.x)),
                      (this.min.y = Math.min(e.y, this.min.y)),
                      (this.max.y = Math.max(n.y, this.max.y)))
                    : ((this.min = e.clone()), (this.max = n.clone())),
                  this
                );
              },
              getCenter: function (t) {
                return z((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
              },
              getBottomLeft: function () {
                return z(this.min.x, this.max.y);
              },
              getTopRight: function () {
                return z(this.max.x, this.min.y);
              },
              getTopLeft: function () {
                return this.min;
              },
              getBottomRight: function () {
                return this.max;
              },
              getSize: function () {
                return this.max.subtract(this.min);
              },
              contains: function (t) {
                var e, n;
                return (
                  (t = 'number' == typeof t[0] || t instanceof j ? z(t) : B(t)) instanceof C
                    ? ((e = t.min), (n = t.max))
                    : (e = n = t),
                  e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
                );
              },
              intersects: function (t) {
                t = B(t);
                var e = this.min,
                  n = this.max,
                  r = t.min,
                  i = t.max,
                  o = i.x >= e.x && r.x <= n.x,
                  a = i.y >= e.y && r.y <= n.y;
                return o && a;
              },
              overlaps: function (t) {
                t = B(t);
                var e = this.min,
                  n = this.max,
                  r = t.min,
                  i = t.max,
                  o = i.x > e.x && r.x < n.x,
                  a = i.y > e.y && r.y < n.y;
                return o && a;
              },
              isValid: function () {
                return !(!this.min || !this.max);
              },
              pad: function (t) {
                var e = this.min,
                  n = this.max,
                  r = Math.abs(e.x - n.x) * t,
                  i = Math.abs(e.y - n.y) * t;
                return B(z(e.x - r, e.y - i), z(n.x + r, n.y + i));
              },
              equals: function (t) {
                return (
                  !!t &&
                  ((t = B(t)),
                  this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()))
                );
              },
            }),
            (A.prototype = {
              extend: function (t) {
                var e,
                  n,
                  r = this._southWest,
                  i = this._northEast;
                if (t instanceof Z) (e = t), (n = t);
                else {
                  if (!(t instanceof A)) return t ? this.extend(R(t) || N(t)) : this;
                  if (((e = t._southWest), (n = t._northEast), !e || !n)) return this;
                }
                return (
                  r || i
                    ? ((r.lat = Math.min(e.lat, r.lat)),
                      (r.lng = Math.min(e.lng, r.lng)),
                      (i.lat = Math.max(n.lat, i.lat)),
                      (i.lng = Math.max(n.lng, i.lng)))
                    : ((this._southWest = new Z(e.lat, e.lng)),
                      (this._northEast = new Z(n.lat, n.lng))),
                  this
                );
              },
              pad: function (t) {
                var e = this._southWest,
                  n = this._northEast,
                  r = Math.abs(e.lat - n.lat) * t,
                  i = Math.abs(e.lng - n.lng) * t;
                return new A(new Z(e.lat - r, e.lng - i), new Z(n.lat + r, n.lng + i));
              },
              getCenter: function () {
                return new Z(
                  (this._southWest.lat + this._northEast.lat) / 2,
                  (this._southWest.lng + this._northEast.lng) / 2,
                );
              },
              getSouthWest: function () {
                return this._southWest;
              },
              getNorthEast: function () {
                return this._northEast;
              },
              getNorthWest: function () {
                return new Z(this.getNorth(), this.getWest());
              },
              getSouthEast: function () {
                return new Z(this.getSouth(), this.getEast());
              },
              getWest: function () {
                return this._southWest.lng;
              },
              getSouth: function () {
                return this._southWest.lat;
              },
              getEast: function () {
                return this._northEast.lng;
              },
              getNorth: function () {
                return this._northEast.lat;
              },
              contains: function (t) {
                t = 'number' == typeof t[0] || t instanceof Z || 'lat' in t ? R(t) : N(t);
                var e,
                  n,
                  r = this._southWest,
                  i = this._northEast;
                return (
                  t instanceof A ? ((e = t.getSouthWest()), (n = t.getNorthEast())) : (e = n = t),
                  e.lat >= r.lat && n.lat <= i.lat && e.lng >= r.lng && n.lng <= i.lng
                );
              },
              intersects: function (t) {
                t = N(t);
                var e = this._southWest,
                  n = this._northEast,
                  r = t.getSouthWest(),
                  i = t.getNorthEast(),
                  o = i.lat >= e.lat && r.lat <= n.lat,
                  a = i.lng >= e.lng && r.lng <= n.lng;
                return o && a;
              },
              overlaps: function (t) {
                t = N(t);
                var e = this._southWest,
                  n = this._northEast,
                  r = t.getSouthWest(),
                  i = t.getNorthEast(),
                  o = i.lat > e.lat && r.lat < n.lat,
                  a = i.lng > e.lng && r.lng < n.lng;
                return o && a;
              },
              toBBoxString: function () {
                return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
              },
              equals: function (t, e) {
                return (
                  !!t &&
                  ((t = N(t)),
                  this._southWest.equals(t.getSouthWest(), e) &&
                    this._northEast.equals(t.getNorthEast(), e))
                );
              },
              isValid: function () {
                return !(!this._southWest || !this._northEast);
              },
            }),
            (Z.prototype = {
              equals: function (t, e) {
                return (
                  !!t &&
                  ((t = R(t)),
                  Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <=
                    (void 0 === e ? 1e-9 : e))
                );
              },
              toString: function (t) {
                return 'LatLng(' + u(this.lat, t) + ', ' + u(this.lng, t) + ')';
              },
              distanceTo: function (t) {
                return G.distance(this, R(t));
              },
              wrap: function () {
                return G.wrapLatLng(this);
              },
              toBounds: function (t) {
                var e = (180 * t) / 40075017,
                  n = e / Math.cos((Math.PI / 180) * this.lat);
                return N([this.lat - e, this.lng - n], [this.lat + e, this.lng + n]);
              },
              clone: function () {
                return new Z(this.lat, this.lng, this.alt);
              },
            });
          var D,
            F = {
              latLngToPoint: function (t, e) {
                var n = this.projection.project(t),
                  r = this.scale(e);
                return this.transformation._transform(n, r);
              },
              pointToLatLng: function (t, e) {
                var n = this.scale(e),
                  r = this.transformation.untransform(t, n);
                return this.projection.unproject(r);
              },
              project: function (t) {
                return this.projection.project(t);
              },
              unproject: function (t) {
                return this.projection.unproject(t);
              },
              scale: function (t) {
                return 256 * Math.pow(2, t);
              },
              zoom: function (t) {
                return Math.log(t / 256) / Math.LN2;
              },
              getProjectedBounds: function (t) {
                if (this.infinite) return null;
                var e = this.projection.bounds,
                  n = this.scale(t);
                return new C(
                  this.transformation.transform(e.min, n),
                  this.transformation.transform(e.max, n),
                );
              },
              infinite: !1,
              wrapLatLng: function (t) {
                var e = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
                return new Z(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, e, t.alt);
              },
              wrapLatLngBounds: function (t) {
                var e = t.getCenter(),
                  n = this.wrapLatLng(e),
                  r = e.lat - n.lat,
                  i = e.lng - n.lng;
                if (0 === r && 0 === i) return t;
                var o = t.getSouthWest(),
                  a = t.getNorthEast();
                return new A(new Z(o.lat - r, o.lng - i), new Z(a.lat - r, a.lng - i));
              },
            },
            G = e({}, F, {
              wrapLng: [-180, 180],
              R: 6371e3,
              distance: function (t, e) {
                var n = Math.PI / 180,
                  r = t.lat * n,
                  i = e.lat * n,
                  o = Math.sin(((e.lat - t.lat) * n) / 2),
                  a = Math.sin(((e.lng - t.lng) * n) / 2),
                  s = o * o + Math.cos(r) * Math.cos(i) * a * a,
                  c = 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
                return this.R * c;
              },
            }),
            W = 6378137,
            H = {
              R: W,
              MAX_LATITUDE: 85.0511287798,
              project: function (t) {
                var e = Math.PI / 180,
                  n = this.MAX_LATITUDE,
                  r = Math.max(Math.min(n, t.lat), -n),
                  i = Math.sin(r * e);
                return new j(this.R * t.lng * e, (this.R * Math.log((1 + i) / (1 - i))) / 2);
              },
              unproject: function (t) {
                var e = 180 / Math.PI;
                return new Z(
                  (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
                  (t.x * e) / this.R,
                );
              },
              bounds: ((D = W * Math.PI), new C([-D, -D], [D, D])),
            };
          function U(t, e, n, r) {
            if (v(t))
              return (this._a = t[0]), (this._b = t[1]), (this._c = t[2]), void (this._d = t[3]);
            (this._a = t), (this._b = e), (this._c = n), (this._d = r);
          }
          function Y(t, e, n, r) {
            return new U(t, e, n, r);
          }
          U.prototype = {
            transform: function (t, e) {
              return this._transform(t.clone(), e);
            },
            _transform: function (t, e) {
              return (
                (e = e || 1),
                (t.x = e * (this._a * t.x + this._b)),
                (t.y = e * (this._c * t.y + this._d)),
                t
              );
            },
            untransform: function (t, e) {
              return (
                (e = e || 1), new j((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
              );
            },
          };
          var V = e({}, G, {
              code: 'EPSG:3857',
              projection: H,
              transformation: (function () {
                var t = 0.5 / (Math.PI * H.R);
                return Y(t, 0.5, -t, 0.5);
              })(),
            }),
            q = e({}, V, { code: 'EPSG:900913' });
          function K(t) {
            return document.createElementNS('http://www.w3.org/2000/svg', t);
          }
          function J(t, e) {
            var n,
              r,
              i,
              o,
              a,
              s,
              c = '';
            for (n = 0, i = t.length; n < i; n++) {
              for (r = 0, o = (a = t[n]).length; r < o; r++)
                c += (r ? 'L' : 'M') + (s = a[r]).x + ' ' + s.y;
              c += e ? (Ct.svg ? 'z' : 'x') : '';
            }
            return c || 'M0 0';
          }
          var X,
            $ = document.documentElement.style,
            Q = 'ActiveXObject' in window,
            tt = Q && !document.addEventListener,
            et = 'msLaunchUri' in navigator && !('documentMode' in document),
            nt = zt('webkit'),
            rt = zt('android'),
            it = zt('android 2') || zt('android 3'),
            ot = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
            at = rt && zt('Google') && ot < 537 && !('AudioNode' in window),
            st = !!window.opera,
            ct = !et && zt('chrome'),
            ut = zt('gecko') && !nt && !st && !Q,
            ht = !ct && zt('safari'),
            lt = zt('phantom'),
            ft = 'OTransition' in $,
            pt = 0 === navigator.platform.indexOf('Win'),
            dt = Q && 'transition' in $,
            mt = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !it,
            vt = 'MozPerspective' in $,
            yt = !window.L_DISABLE_3D && (dt || mt || vt) && !ft && !lt,
            _t = 'undefined' != typeof orientation || zt('mobile'),
            gt = _t && nt,
            wt = _t && mt,
            bt = !window.PointerEvent && window.MSPointerEvent,
            xt = !(!window.PointerEvent && !bt),
            Lt = 'ontouchstart' in window || !!window.TouchEvent,
            Et = !window.L_NO_TOUCH && (Lt || xt),
            Pt = _t && st,
            kt = _t && ut,
            Tt =
              (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
            St = (function () {
              var t = !1;
              try {
                var e = Object.defineProperty({}, 'passive', {
                  get: function () {
                    t = !0;
                  },
                });
                window.addEventListener('testPassiveEventSupport', c, e),
                  window.removeEventListener('testPassiveEventSupport', c, e);
              } catch (t) {}
              return t;
            })(),
            Ot = !!document.createElement('canvas').getContext,
            Mt = !(!document.createElementNS || !K('svg').createSVGRect),
            jt =
              !!Mt &&
              (((X = document.createElement('div')).innerHTML = '<svg/>'),
              'http://www.w3.org/2000/svg' === (X.firstChild && X.firstChild.namespaceURI)),
            It =
              !Mt &&
              (function () {
                try {
                  var t = document.createElement('div');
                  t.innerHTML = '<v:shape adj="1"/>';
                  var e = t.firstChild;
                  return (e.style.behavior = 'url(#default#VML)'), e && 'object' == typeof e.adj;
                } catch (t) {
                  return !1;
                }
              })();
          function zt(t) {
            return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
          }
          var Ct = {
              ie: Q,
              ielt9: tt,
              edge: et,
              webkit: nt,
              android: rt,
              android23: it,
              androidStock: at,
              opera: st,
              chrome: ct,
              gecko: ut,
              safari: ht,
              phantom: lt,
              opera12: ft,
              win: pt,
              ie3d: dt,
              webkit3d: mt,
              gecko3d: vt,
              any3d: yt,
              mobile: _t,
              mobileWebkit: gt,
              mobileWebkit3d: wt,
              msPointer: bt,
              pointer: xt,
              touch: Et,
              touchNative: Lt,
              mobileOpera: Pt,
              mobileGecko: kt,
              retina: Tt,
              passiveEvents: St,
              canvas: Ot,
              svg: Mt,
              vml: It,
              inlineSvg: jt,
              mac: 0 === navigator.platform.indexOf('Mac'),
              linux: 0 === navigator.platform.indexOf('Linux'),
            },
            Bt = Ct.msPointer ? 'MSPointerDown' : 'pointerdown',
            At = Ct.msPointer ? 'MSPointerMove' : 'pointermove',
            Nt = Ct.msPointer ? 'MSPointerUp' : 'pointerup',
            Zt = Ct.msPointer ? 'MSPointerCancel' : 'pointercancel',
            Rt = { touchstart: Bt, touchmove: At, touchend: Nt, touchcancel: Zt },
            Dt = {
              touchstart: function (t, e) {
                e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && Ne(e),
                  Vt(t, e);
              },
              touchmove: Vt,
              touchend: Vt,
              touchcancel: Vt,
            },
            Ft = {},
            Gt = !1;
          function Wt(t, e, n) {
            return (
              'touchstart' === e &&
                (Gt ||
                  (document.addEventListener(Bt, Ht, !0),
                  document.addEventListener(At, Ut, !0),
                  document.addEventListener(Nt, Yt, !0),
                  document.addEventListener(Zt, Yt, !0),
                  (Gt = !0))),
              Dt[e]
                ? ((n = Dt[e].bind(this, n)), t.addEventListener(Rt[e], n, !1), n)
                : (console.warn('wrong event specified:', e), c)
            );
          }
          function Ht(t) {
            Ft[t.pointerId] = t;
          }
          function Ut(t) {
            Ft[t.pointerId] && (Ft[t.pointerId] = t);
          }
          function Yt(t) {
            delete Ft[t.pointerId];
          }
          function Vt(t, e) {
            if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || 'mouse')) {
              for (var n in ((e.touches = []), Ft)) e.touches.push(Ft[n]);
              (e.changedTouches = [e]), t(e);
            }
          }
          var qt,
            Kt,
            Jt,
            Xt,
            $t,
            Qt = me(['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']),
            te = me([
              'webkitTransition',
              'transition',
              'OTransition',
              'MozTransition',
              'msTransition',
            ]),
            ee = 'webkitTransition' === te || 'OTransition' === te ? te + 'End' : 'transitionend';
          function ne(t) {
            return 'string' == typeof t ? document.getElementById(t) : t;
          }
          function re(t, e) {
            var n = t.style[e] || (t.currentStyle && t.currentStyle[e]);
            if ((!n || 'auto' === n) && document.defaultView) {
              var r = document.defaultView.getComputedStyle(t, null);
              n = r ? r[e] : null;
            }
            return 'auto' === n ? null : n;
          }
          function ie(t, e, n) {
            var r = document.createElement(t);
            return (r.className = e || ''), n && n.appendChild(r), r;
          }
          function oe(t) {
            var e = t.parentNode;
            e && e.removeChild(t);
          }
          function ae(t) {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          }
          function se(t) {
            var e = t.parentNode;
            e && e.lastChild !== t && e.appendChild(t);
          }
          function ce(t) {
            var e = t.parentNode;
            e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
          }
          function ue(t, e) {
            if (void 0 !== t.classList) return t.classList.contains(e);
            var n = pe(t);
            return n.length > 0 && new RegExp('(^|\\s)' + e + '(\\s|$)').test(n);
          }
          function he(t, e) {
            if (void 0 !== t.classList)
              for (var n = l(e), r = 0, i = n.length; r < i; r++) t.classList.add(n[r]);
            else if (!ue(t, e)) {
              var o = pe(t);
              fe(t, (o ? o + ' ' : '') + e);
            }
          }
          function le(t, e) {
            void 0 !== t.classList
              ? t.classList.remove(e)
              : fe(t, h((' ' + pe(t) + ' ').replace(' ' + e + ' ', ' ')));
          }
          function fe(t, e) {
            void 0 === t.className.baseVal ? (t.className = e) : (t.className.baseVal = e);
          }
          function pe(t) {
            return (
              t.correspondingElement && (t = t.correspondingElement),
              void 0 === t.className.baseVal ? t.className : t.className.baseVal
            );
          }
          function de(t, e) {
            'opacity' in t.style
              ? (t.style.opacity = e)
              : 'filter' in t.style &&
                (function (t, e) {
                  var n = !1,
                    r = 'DXImageTransform.Microsoft.Alpha';
                  try {
                    n = t.filters.item(r);
                  } catch (t) {
                    if (1 === e) return;
                  }
                  (e = Math.round(100 * e)),
                    n
                      ? ((n.Enabled = 100 !== e), (n.Opacity = e))
                      : (t.style.filter += ' progid:' + r + '(opacity=' + e + ')');
                })(t, e);
          }
          function me(t) {
            for (var e = document.documentElement.style, n = 0; n < t.length; n++)
              if (t[n] in e) return t[n];
            return !1;
          }
          function ve(t, e, n) {
            var r = e || new j(0, 0);
            t.style[Qt] =
              (Ct.ie3d
                ? 'translate(' + r.x + 'px,' + r.y + 'px)'
                : 'translate3d(' + r.x + 'px,' + r.y + 'px,0)') + (n ? ' scale(' + n + ')' : '');
          }
          function ye(t, e) {
            (t._leaflet_pos = e),
              Ct.any3d ? ve(t, e) : ((t.style.left = e.x + 'px'), (t.style.top = e.y + 'px'));
          }
          function _e(t) {
            return t._leaflet_pos || new j(0, 0);
          }
          if ('onselectstart' in document)
            (qt = function () {
              Te(window, 'selectstart', Ne);
            }),
              (Kt = function () {
                Oe(window, 'selectstart', Ne);
              });
          else {
            var ge = me([
              'userSelect',
              'WebkitUserSelect',
              'OUserSelect',
              'MozUserSelect',
              'msUserSelect',
            ]);
            (qt = function () {
              if (ge) {
                var t = document.documentElement.style;
                (Jt = t[ge]), (t[ge] = 'none');
              }
            }),
              (Kt = function () {
                ge && ((document.documentElement.style[ge] = Jt), (Jt = void 0));
              });
          }
          function we() {
            Te(window, 'dragstart', Ne);
          }
          function be() {
            Oe(window, 'dragstart', Ne);
          }
          function xe(t) {
            for (; -1 === t.tabIndex; ) t = t.parentNode;
            t.style &&
              (Le(),
              (Xt = t),
              ($t = t.style.outlineStyle),
              (t.style.outlineStyle = 'none'),
              Te(window, 'keydown', Le));
          }
          function Le() {
            Xt &&
              ((Xt.style.outlineStyle = $t),
              (Xt = void 0),
              ($t = void 0),
              Oe(window, 'keydown', Le));
          }
          function Ee(t) {
            do {
              t = t.parentNode;
            } while (!((t.offsetWidth && t.offsetHeight) || t === document.body));
            return t;
          }
          function Pe(t) {
            var e = t.getBoundingClientRect();
            return {
              x: e.width / t.offsetWidth || 1,
              y: e.height / t.offsetHeight || 1,
              boundingClientRect: e,
            };
          }
          var ke = {
            __proto__: null,
            TRANSFORM: Qt,
            TRANSITION: te,
            TRANSITION_END: ee,
            get: ne,
            getStyle: re,
            create: ie,
            remove: oe,
            empty: ae,
            toFront: se,
            toBack: ce,
            hasClass: ue,
            addClass: he,
            removeClass: le,
            setClass: fe,
            getClass: pe,
            setOpacity: de,
            testProp: me,
            setTransform: ve,
            setPosition: ye,
            getPosition: _e,
            get disableTextSelection() {
              return qt;
            },
            get enableTextSelection() {
              return Kt;
            },
            disableImageDrag: we,
            enableImageDrag: be,
            preventOutline: xe,
            restoreOutline: Le,
            getSizedParentNode: Ee,
            getScale: Pe,
          };
          function Te(t, e, n, r) {
            if (e && 'object' == typeof e) for (var i in e) Ie(t, i, e[i], n);
            else for (var o = 0, a = (e = l(e)).length; o < a; o++) Ie(t, e[o], n, r);
            return this;
          }
          var Se = '_leaflet_events';
          function Oe(t, e, n, r) {
            if (1 === arguments.length) Me(t), delete t[Se];
            else if (e && 'object' == typeof e) for (var i in e) ze(t, i, e[i], n);
            else if (((e = l(e)), 2 === arguments.length))
              Me(t, function (t) {
                return -1 !== y(e, t);
              });
            else for (var o = 0, a = e.length; o < a; o++) ze(t, e[o], n, r);
            return this;
          }
          function Me(t, e) {
            for (var n in t[Se]) {
              var r = n.split(/\d/)[0];
              (e && !e(r)) || ze(t, r, null, null, n);
            }
          }
          var je = {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout',
            wheel: !('onwheel' in window) && 'mousewheel',
          };
          function Ie(t, e, n, r) {
            var i = e + o(n) + (r ? '_' + o(r) : '');
            if (t[Se] && t[Se][i]) return this;
            var a = function (e) {
                return n.call(r || t, e || window.event);
              },
              s = a;
            !Ct.touchNative && Ct.pointer && 0 === e.indexOf('touch')
              ? (a = Wt(t, e, a))
              : Ct.touch && 'dblclick' === e
                ? (a = (function (t, e) {
                    t.addEventListener('dblclick', e);
                    var n,
                      r = 0;
                    function i(t) {
                      if (1 === t.detail) {
                        if (
                          'mouse' !== t.pointerType &&
                          (!t.sourceCapabilities || t.sourceCapabilities.firesTouchEvents)
                        ) {
                          var i = Re(t);
                          if (
                            !i.some(function (t) {
                              return t instanceof HTMLLabelElement && t.attributes.for;
                            }) ||
                            i.some(function (t) {
                              return (
                                t instanceof HTMLInputElement || t instanceof HTMLSelectElement
                              );
                            })
                          ) {
                            var o = Date.now();
                            o - r <= 200
                              ? 2 == ++n &&
                                e(
                                  (function (t) {
                                    var e,
                                      n,
                                      r = {};
                                    for (n in t) (e = t[n]), (r[n] = e && e.bind ? e.bind(t) : e);
                                    return (
                                      (t = r),
                                      (r.type = 'dblclick'),
                                      (r.detail = 2),
                                      (r.isTrusted = !1),
                                      (r._simulated = !0),
                                      r
                                    );
                                  })(t),
                                )
                              : (n = 1),
                              (r = o);
                          }
                        }
                      } else n = t.detail;
                    }
                    return t.addEventListener('click', i), { dblclick: e, simDblclick: i };
                  })(t, a))
                : 'addEventListener' in t
                  ? 'touchstart' === e || 'touchmove' === e || 'wheel' === e || 'mousewheel' === e
                    ? t.addEventListener(je[e] || e, a, !!Ct.passiveEvents && { passive: !1 })
                    : 'mouseenter' === e || 'mouseleave' === e
                      ? ((a = function (e) {
                          (e = e || window.event), We(t, e) && s(e);
                        }),
                        t.addEventListener(je[e], a, !1))
                      : t.addEventListener(e, s, !1)
                  : t.attachEvent('on' + e, a),
              (t[Se] = t[Se] || {}),
              (t[Se][i] = a);
          }
          function ze(t, e, n, r, i) {
            i = i || e + o(n) + (r ? '_' + o(r) : '');
            var a = t[Se] && t[Se][i];
            if (!a) return this;
            !Ct.touchNative && Ct.pointer && 0 === e.indexOf('touch')
              ? (function (t, e, n) {
                  Rt[e]
                    ? t.removeEventListener(Rt[e], n, !1)
                    : console.warn('wrong event specified:', e);
                })(t, e, a)
              : Ct.touch && 'dblclick' === e
                ? (function (t, e) {
                    t.removeEventListener('dblclick', e.dblclick),
                      t.removeEventListener('click', e.simDblclick);
                  })(t, a)
                : 'removeEventListener' in t
                  ? t.removeEventListener(je[e] || e, a, !1)
                  : t.detachEvent('on' + e, a),
              (t[Se][i] = null);
          }
          function Ce(t) {
            return (
              t.stopPropagation
                ? t.stopPropagation()
                : t.originalEvent
                  ? (t.originalEvent._stopped = !0)
                  : (t.cancelBubble = !0),
              this
            );
          }
          function Be(t) {
            return Ie(t, 'wheel', Ce), this;
          }
          function Ae(t) {
            return (
              Te(t, 'mousedown touchstart dblclick contextmenu', Ce),
              (t._leaflet_disable_click = !0),
              this
            );
          }
          function Ne(t) {
            return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
          }
          function Ze(t) {
            return Ne(t), Ce(t), this;
          }
          function Re(t) {
            if (t.composedPath) return t.composedPath();
            for (var e = [], n = t.target; n; ) e.push(n), (n = n.parentNode);
            return e;
          }
          function De(t, e) {
            if (!e) return new j(t.clientX, t.clientY);
            var n = Pe(e),
              r = n.boundingClientRect;
            return new j(
              (t.clientX - r.left) / n.x - e.clientLeft,
              (t.clientY - r.top) / n.y - e.clientTop,
            );
          }
          var Fe =
            Ct.linux && Ct.chrome
              ? window.devicePixelRatio
              : Ct.mac
                ? 3 * window.devicePixelRatio
                : window.devicePixelRatio > 0
                  ? 2 * window.devicePixelRatio
                  : 1;
          function Ge(t) {
            return Ct.edge
              ? t.wheelDeltaY / 2
              : t.deltaY && 0 === t.deltaMode
                ? -t.deltaY / Fe
                : t.deltaY && 1 === t.deltaMode
                  ? 20 * -t.deltaY
                  : t.deltaY && 2 === t.deltaMode
                    ? 60 * -t.deltaY
                    : t.deltaX || t.deltaZ
                      ? 0
                      : t.wheelDelta
                        ? (t.wheelDeltaY || t.wheelDelta) / 2
                        : t.detail && Math.abs(t.detail) < 32765
                          ? 20 * -t.detail
                          : t.detail
                            ? (t.detail / -32765) * 60
                            : 0;
          }
          function We(t, e) {
            var n = e.relatedTarget;
            if (!n) return !0;
            try {
              for (; n && n !== t; ) n = n.parentNode;
            } catch (t) {
              return !1;
            }
            return n !== t;
          }
          var He = {
              __proto__: null,
              on: Te,
              off: Oe,
              stopPropagation: Ce,
              disableScrollPropagation: Be,
              disableClickPropagation: Ae,
              preventDefault: Ne,
              stop: Ze,
              getPropagationPath: Re,
              getMousePosition: De,
              getWheelDelta: Ge,
              isExternalTarget: We,
              addListener: Te,
              removeListener: Oe,
            },
            Ue = M.extend({
              run: function (t, e, n, r) {
                this.stop(),
                  (this._el = t),
                  (this._inProgress = !0),
                  (this._duration = n || 0.25),
                  (this._easeOutPower = 1 / Math.max(r || 0.5, 0.2)),
                  (this._startPos = _e(t)),
                  (this._offset = e.subtract(this._startPos)),
                  (this._startTime = +new Date()),
                  this.fire('start'),
                  this._animate();
              },
              stop: function () {
                this._inProgress && (this._step(!0), this._complete());
              },
              _animate: function () {
                (this._animId = P(this._animate, this)), this._step();
              },
              _step: function (t) {
                var e = +new Date() - this._startTime,
                  n = 1e3 * this._duration;
                e < n
                  ? this._runFrame(this._easeOut(e / n), t)
                  : (this._runFrame(1), this._complete());
              },
              _runFrame: function (t, e) {
                var n = this._startPos.add(this._offset.multiplyBy(t));
                e && n._round(), ye(this._el, n), this.fire('step');
              },
              _complete: function () {
                k(this._animId), (this._inProgress = !1), this.fire('end');
              },
              _easeOut: function (t) {
                return 1 - Math.pow(1 - t, this._easeOutPower);
              },
            }),
            Ye = M.extend({
              options: {
                crs: V,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0,
              },
              initialize: function (t, e) {
                (e = f(this, e)),
                  (this._handlers = []),
                  (this._layers = {}),
                  (this._zoomBoundLayers = {}),
                  (this._sizeChanged = !0),
                  this._initContainer(t),
                  this._initLayout(),
                  (this._onResize = r(this._onResize, this)),
                  this._initEvents(),
                  e.maxBounds && this.setMaxBounds(e.maxBounds),
                  void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
                  e.center && void 0 !== e.zoom && this.setView(R(e.center), e.zoom, { reset: !0 }),
                  this.callInitHooks(),
                  (this._zoomAnimated =
                    te && Ct.any3d && !Ct.mobileOpera && this.options.zoomAnimation),
                  this._zoomAnimated &&
                    (this._createAnimProxy(), Te(this._proxy, ee, this._catchTransitionEnd, this)),
                  this._addLayers(this.options.layers);
              },
              setView: function (t, n, r) {
                return (
                  (n = void 0 === n ? this._zoom : this._limitZoom(n)),
                  (t = this._limitCenter(R(t), n, this.options.maxBounds)),
                  (r = r || {}),
                  this._stop(),
                  this._loaded &&
                  !r.reset &&
                  !0 !== r &&
                  (void 0 !== r.animate &&
                    ((r.zoom = e({ animate: r.animate }, r.zoom)),
                    (r.pan = e({ animate: r.animate, duration: r.duration }, r.pan))),
                  this._zoom !== n
                    ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, n, r.zoom)
                    : this._tryAnimatedPan(t, r.pan))
                    ? (clearTimeout(this._sizeTimer), this)
                    : (this._resetView(t, n, r.pan && r.pan.noMoveStart), this)
                );
              },
              setZoom: function (t, e) {
                return this._loaded
                  ? this.setView(this.getCenter(), t, { zoom: e })
                  : ((this._zoom = t), this);
              },
              zoomIn: function (t, e) {
                return (
                  (t = t || (Ct.any3d ? this.options.zoomDelta : 1)),
                  this.setZoom(this._zoom + t, e)
                );
              },
              zoomOut: function (t, e) {
                return (
                  (t = t || (Ct.any3d ? this.options.zoomDelta : 1)),
                  this.setZoom(this._zoom - t, e)
                );
              },
              setZoomAround: function (t, e, n) {
                var r = this.getZoomScale(e),
                  i = this.getSize().divideBy(2),
                  o = (t instanceof j ? t : this.latLngToContainerPoint(t))
                    .subtract(i)
                    .multiplyBy(1 - 1 / r),
                  a = this.containerPointToLatLng(i.add(o));
                return this.setView(a, e, { zoom: n });
              },
              _getBoundsCenterZoom: function (t, e) {
                (e = e || {}), (t = t.getBounds ? t.getBounds() : N(t));
                var n = z(e.paddingTopLeft || e.padding || [0, 0]),
                  r = z(e.paddingBottomRight || e.padding || [0, 0]),
                  i = this.getBoundsZoom(t, !1, n.add(r));
                if ((i = 'number' == typeof e.maxZoom ? Math.min(e.maxZoom, i) : i) === 1 / 0)
                  return { center: t.getCenter(), zoom: i };
                var o = r.subtract(n).divideBy(2),
                  a = this.project(t.getSouthWest(), i),
                  s = this.project(t.getNorthEast(), i);
                return { center: this.unproject(a.add(s).divideBy(2).add(o), i), zoom: i };
              },
              fitBounds: function (t, e) {
                if (!(t = N(t)).isValid()) throw new Error('Bounds are not valid.');
                var n = this._getBoundsCenterZoom(t, e);
                return this.setView(n.center, n.zoom, e);
              },
              fitWorld: function (t) {
                return this.fitBounds(
                  [
                    [-90, -180],
                    [90, 180],
                  ],
                  t,
                );
              },
              panTo: function (t, e) {
                return this.setView(t, this._zoom, { pan: e });
              },
              panBy: function (t, e) {
                if (((e = e || {}), !(t = z(t).round()).x && !t.y)) return this.fire('moveend');
                if (!0 !== e.animate && !this.getSize().contains(t))
                  return (
                    this._resetView(
                      this.unproject(this.project(this.getCenter()).add(t)),
                      this.getZoom(),
                    ),
                    this
                  );
                if (
                  (this._panAnim ||
                    ((this._panAnim = new Ue()),
                    this._panAnim.on(
                      { step: this._onPanTransitionStep, end: this._onPanTransitionEnd },
                      this,
                    )),
                  e.noMoveStart || this.fire('movestart'),
                  !1 !== e.animate)
                ) {
                  he(this._mapPane, 'leaflet-pan-anim');
                  var n = this._getMapPanePos().subtract(t).round();
                  this._panAnim.run(this._mapPane, n, e.duration || 0.25, e.easeLinearity);
                } else this._rawPanBy(t), this.fire('move').fire('moveend');
                return this;
              },
              flyTo: function (t, e, n) {
                if (!1 === (n = n || {}).animate || !Ct.any3d) return this.setView(t, e, n);
                this._stop();
                var r = this.project(this.getCenter()),
                  i = this.project(t),
                  o = this.getSize(),
                  a = this._zoom;
                (t = R(t)), (e = void 0 === e ? a : e);
                var s = Math.max(o.x, o.y),
                  c = s * this.getZoomScale(a, e),
                  u = i.distanceTo(r) || 1,
                  h = 1.42,
                  l = 2.0164;
                function f(t) {
                  var e =
                      (c * c - s * s + (t ? -1 : 1) * l * l * u * u) / (2 * (t ? c : s) * l * u),
                    n = Math.sqrt(e * e + 1) - e;
                  return n < 1e-9 ? -18 : Math.log(n);
                }
                function p(t) {
                  return (Math.exp(t) - Math.exp(-t)) / 2;
                }
                function d(t) {
                  return (Math.exp(t) + Math.exp(-t)) / 2;
                }
                var m = f(0);
                function v(t) {
                  return (s * (d(m) * (p((e = m + h * t)) / d(e)) - p(m))) / l;
                  var e;
                }
                var y = Date.now(),
                  _ = (f(1) - m) / h,
                  g = n.duration ? 1e3 * n.duration : 1e3 * _ * 0.8;
                return (
                  this._moveStart(!0, n.noMoveStart),
                  function n() {
                    var o = (Date.now() - y) / g,
                      c =
                        (function (t) {
                          return 1 - Math.pow(1 - t, 1.5);
                        })(o) * _;
                    o <= 1
                      ? ((this._flyToFrame = P(n, this)),
                        this._move(
                          this.unproject(r.add(i.subtract(r).multiplyBy(v(c) / u)), a),
                          this.getScaleZoom(
                            s /
                              (function (t) {
                                return s * (d(m) / d(m + h * t));
                              })(c),
                            a,
                          ),
                          { flyTo: !0 },
                        ))
                      : this._move(t, e)._moveEnd(!0);
                  }.call(this),
                  this
                );
              },
              flyToBounds: function (t, e) {
                var n = this._getBoundsCenterZoom(t, e);
                return this.flyTo(n.center, n.zoom, e);
              },
              setMaxBounds: function (t) {
                return (
                  (t = N(t)),
                  this.listens('moveend', this._panInsideMaxBounds) &&
                    this.off('moveend', this._panInsideMaxBounds),
                  t.isValid()
                    ? ((this.options.maxBounds = t),
                      this._loaded && this._panInsideMaxBounds(),
                      this.on('moveend', this._panInsideMaxBounds))
                    : ((this.options.maxBounds = null), this)
                );
              },
              setMinZoom: function (t) {
                var e = this.options.minZoom;
                return (
                  (this.options.minZoom = t),
                  this._loaded &&
                  e !== t &&
                  (this.fire('zoomlevelschange'), this.getZoom() < this.options.minZoom)
                    ? this.setZoom(t)
                    : this
                );
              },
              setMaxZoom: function (t) {
                var e = this.options.maxZoom;
                return (
                  (this.options.maxZoom = t),
                  this._loaded &&
                  e !== t &&
                  (this.fire('zoomlevelschange'), this.getZoom() > this.options.maxZoom)
                    ? this.setZoom(t)
                    : this
                );
              },
              panInsideBounds: function (t, e) {
                this._enforcingBounds = !0;
                var n = this.getCenter(),
                  r = this._limitCenter(n, this._zoom, N(t));
                return n.equals(r) || this.panTo(r, e), (this._enforcingBounds = !1), this;
              },
              panInside: function (t, e) {
                var n = z((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                  r = z(e.paddingBottomRight || e.padding || [0, 0]),
                  i = this.project(this.getCenter()),
                  o = this.project(t),
                  a = this.getPixelBounds(),
                  s = B([a.min.add(n), a.max.subtract(r)]),
                  c = s.getSize();
                if (!s.contains(o)) {
                  this._enforcingBounds = !0;
                  var u = o.subtract(s.getCenter()),
                    h = s.extend(o).getSize().subtract(c);
                  (i.x += u.x < 0 ? -h.x : h.x),
                    (i.y += u.y < 0 ? -h.y : h.y),
                    this.panTo(this.unproject(i), e),
                    (this._enforcingBounds = !1);
                }
                return this;
              },
              invalidateSize: function (t) {
                if (!this._loaded) return this;
                t = e({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
                var n = this.getSize();
                (this._sizeChanged = !0), (this._lastCenter = null);
                var i = this.getSize(),
                  o = n.divideBy(2).round(),
                  a = i.divideBy(2).round(),
                  s = o.subtract(a);
                return s.x || s.y
                  ? (t.animate && t.pan
                      ? this.panBy(s)
                      : (t.pan && this._rawPanBy(s),
                        this.fire('move'),
                        t.debounceMoveend
                          ? (clearTimeout(this._sizeTimer),
                            (this._sizeTimer = setTimeout(r(this.fire, this, 'moveend'), 200)))
                          : this.fire('moveend')),
                    this.fire('resize', { oldSize: n, newSize: i }))
                  : this;
              },
              stop: function () {
                return (
                  this.setZoom(this._limitZoom(this._zoom)),
                  this.options.zoomSnap || this.fire('viewreset'),
                  this._stop()
                );
              },
              locate: function (t) {
                if (
                  ((t = this._locateOptions = e({ timeout: 1e4, watch: !1 }, t)),
                  !('geolocation' in navigator))
                )
                  return (
                    this._handleGeolocationError({
                      code: 0,
                      message: 'Geolocation not supported.',
                    }),
                    this
                  );
                var n = r(this._handleGeolocationResponse, this),
                  i = r(this._handleGeolocationError, this);
                return (
                  t.watch
                    ? (this._locationWatchId = navigator.geolocation.watchPosition(n, i, t))
                    : navigator.geolocation.getCurrentPosition(n, i, t),
                  this
                );
              },
              stopLocate: function () {
                return (
                  navigator.geolocation &&
                    navigator.geolocation.clearWatch &&
                    navigator.geolocation.clearWatch(this._locationWatchId),
                  this._locateOptions && (this._locateOptions.setView = !1),
                  this
                );
              },
              _handleGeolocationError: function (t) {
                if (this._container._leaflet_id) {
                  var e = t.code,
                    n =
                      t.message ||
                      (1 === e
                        ? 'permission denied'
                        : 2 === e
                          ? 'position unavailable'
                          : 'timeout');
                  this._locateOptions.setView && !this._loaded && this.fitWorld(),
                    this.fire('locationerror', {
                      code: e,
                      message: 'Geolocation error: ' + n + '.',
                    });
                }
              },
              _handleGeolocationResponse: function (t) {
                if (this._container._leaflet_id) {
                  var e = new Z(t.coords.latitude, t.coords.longitude),
                    n = e.toBounds(2 * t.coords.accuracy),
                    r = this._locateOptions;
                  if (r.setView) {
                    var i = this.getBoundsZoom(n);
                    this.setView(e, r.maxZoom ? Math.min(i, r.maxZoom) : i);
                  }
                  var o = { latlng: e, bounds: n, timestamp: t.timestamp };
                  for (var a in t.coords) 'number' == typeof t.coords[a] && (o[a] = t.coords[a]);
                  this.fire('locationfound', o);
                }
              },
              addHandler: function (t, e) {
                if (!e) return this;
                var n = (this[t] = new e(this));
                return this._handlers.push(n), this.options[t] && n.enable(), this;
              },
              remove: function () {
                if (
                  (this._initEvents(!0),
                  this.options.maxBounds && this.off('moveend', this._panInsideMaxBounds),
                  this._containerId !== this._container._leaflet_id)
                )
                  throw new Error('Map container is being reused by another instance');
                try {
                  delete this._container._leaflet_id, delete this._containerId;
                } catch (t) {
                  (this._container._leaflet_id = void 0), (this._containerId = void 0);
                }
                var t;
                for (t in (void 0 !== this._locationWatchId && this.stopLocate(),
                this._stop(),
                oe(this._mapPane),
                this._clearControlPos && this._clearControlPos(),
                this._resizeRequest && (k(this._resizeRequest), (this._resizeRequest = null)),
                this._clearHandlers(),
                this._loaded && this.fire('unload'),
                this._layers))
                  this._layers[t].remove();
                for (t in this._panes) oe(this._panes[t]);
                return (
                  (this._layers = []),
                  (this._panes = []),
                  delete this._mapPane,
                  delete this._renderer,
                  this
                );
              },
              createPane: function (t, e) {
                var n = ie(
                  'div',
                  'leaflet-pane' + (t ? ' leaflet-' + t.replace('Pane', '') + '-pane' : ''),
                  e || this._mapPane,
                );
                return t && (this._panes[t] = n), n;
              },
              getCenter: function () {
                return (
                  this._checkIfLoaded(),
                  this._lastCenter && !this._moved()
                    ? this._lastCenter.clone()
                    : this.layerPointToLatLng(this._getCenterLayerPoint())
                );
              },
              getZoom: function () {
                return this._zoom;
              },
              getBounds: function () {
                var t = this.getPixelBounds();
                return new A(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
              },
              getMinZoom: function () {
                return void 0 === this.options.minZoom
                  ? this._layersMinZoom || 0
                  : this.options.minZoom;
              },
              getMaxZoom: function () {
                return void 0 === this.options.maxZoom
                  ? void 0 === this._layersMaxZoom
                    ? 1 / 0
                    : this._layersMaxZoom
                  : this.options.maxZoom;
              },
              getBoundsZoom: function (t, e, n) {
                (t = N(t)), (n = z(n || [0, 0]));
                var r = this.getZoom() || 0,
                  i = this.getMinZoom(),
                  o = this.getMaxZoom(),
                  a = t.getNorthWest(),
                  s = t.getSouthEast(),
                  c = this.getSize().subtract(n),
                  u = B(this.project(s, r), this.project(a, r)).getSize(),
                  h = Ct.any3d ? this.options.zoomSnap : 1,
                  l = c.x / u.x,
                  f = c.y / u.y,
                  p = e ? Math.max(l, f) : Math.min(l, f);
                return (
                  (r = this.getScaleZoom(p, r)),
                  h &&
                    ((r = Math.round(r / (h / 100)) * (h / 100)),
                    (r = e ? Math.ceil(r / h) * h : Math.floor(r / h) * h)),
                  Math.max(i, Math.min(o, r))
                );
              },
              getSize: function () {
                return (
                  (this._size && !this._sizeChanged) ||
                    ((this._size = new j(
                      this._container.clientWidth || 0,
                      this._container.clientHeight || 0,
                    )),
                    (this._sizeChanged = !1)),
                  this._size.clone()
                );
              },
              getPixelBounds: function (t, e) {
                var n = this._getTopLeftPoint(t, e);
                return new C(n, n.add(this.getSize()));
              },
              getPixelOrigin: function () {
                return this._checkIfLoaded(), this._pixelOrigin;
              },
              getPixelWorldBounds: function (t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
              },
              getPane: function (t) {
                return 'string' == typeof t ? this._panes[t] : t;
              },
              getPanes: function () {
                return this._panes;
              },
              getContainer: function () {
                return this._container;
              },
              getZoomScale: function (t, e) {
                var n = this.options.crs;
                return (e = void 0 === e ? this._zoom : e), n.scale(t) / n.scale(e);
              },
              getScaleZoom: function (t, e) {
                var n = this.options.crs;
                e = void 0 === e ? this._zoom : e;
                var r = n.zoom(t * n.scale(e));
                return isNaN(r) ? 1 / 0 : r;
              },
              project: function (t, e) {
                return (e = void 0 === e ? this._zoom : e), this.options.crs.latLngToPoint(R(t), e);
              },
              unproject: function (t, e) {
                return (e = void 0 === e ? this._zoom : e), this.options.crs.pointToLatLng(z(t), e);
              },
              layerPointToLatLng: function (t) {
                var e = z(t).add(this.getPixelOrigin());
                return this.unproject(e);
              },
              latLngToLayerPoint: function (t) {
                return this.project(R(t))._round()._subtract(this.getPixelOrigin());
              },
              wrapLatLng: function (t) {
                return this.options.crs.wrapLatLng(R(t));
              },
              wrapLatLngBounds: function (t) {
                return this.options.crs.wrapLatLngBounds(N(t));
              },
              distance: function (t, e) {
                return this.options.crs.distance(R(t), R(e));
              },
              containerPointToLayerPoint: function (t) {
                return z(t).subtract(this._getMapPanePos());
              },
              layerPointToContainerPoint: function (t) {
                return z(t).add(this._getMapPanePos());
              },
              containerPointToLatLng: function (t) {
                var e = this.containerPointToLayerPoint(z(t));
                return this.layerPointToLatLng(e);
              },
              latLngToContainerPoint: function (t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(R(t)));
              },
              mouseEventToContainerPoint: function (t) {
                return De(t, this._container);
              },
              mouseEventToLayerPoint: function (t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
              },
              mouseEventToLatLng: function (t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
              },
              _initContainer: function (t) {
                var e = (this._container = ne(t));
                if (!e) throw new Error('Map container not found.');
                if (e._leaflet_id) throw new Error('Map container is already initialized.');
                Te(e, 'scroll', this._onScroll, this), (this._containerId = o(e));
              },
              _initLayout: function () {
                var t = this._container;
                (this._fadeAnimated = this.options.fadeAnimation && Ct.any3d),
                  he(
                    t,
                    'leaflet-container' +
                      (Ct.touch ? ' leaflet-touch' : '') +
                      (Ct.retina ? ' leaflet-retina' : '') +
                      (Ct.ielt9 ? ' leaflet-oldie' : '') +
                      (Ct.safari ? ' leaflet-safari' : '') +
                      (this._fadeAnimated ? ' leaflet-fade-anim' : ''),
                  );
                var e = re(t, 'position');
                'absolute' !== e &&
                  'relative' !== e &&
                  'fixed' !== e &&
                  'sticky' !== e &&
                  (t.style.position = 'relative'),
                  this._initPanes(),
                  this._initControlPos && this._initControlPos();
              },
              _initPanes: function () {
                var t = (this._panes = {});
                (this._paneRenderers = {}),
                  (this._mapPane = this.createPane('mapPane', this._container)),
                  ye(this._mapPane, new j(0, 0)),
                  this.createPane('tilePane'),
                  this.createPane('overlayPane'),
                  this.createPane('shadowPane'),
                  this.createPane('markerPane'),
                  this.createPane('tooltipPane'),
                  this.createPane('popupPane'),
                  this.options.markerZoomAnimation ||
                    (he(t.markerPane, 'leaflet-zoom-hide'), he(t.shadowPane, 'leaflet-zoom-hide'));
              },
              _resetView: function (t, e, n) {
                ye(this._mapPane, new j(0, 0));
                var r = !this._loaded;
                (this._loaded = !0), (e = this._limitZoom(e)), this.fire('viewprereset');
                var i = this._zoom !== e;
                this._moveStart(i, n)._move(t, e)._moveEnd(i),
                  this.fire('viewreset'),
                  r && this.fire('load');
              },
              _moveStart: function (t, e) {
                return t && this.fire('zoomstart'), e || this.fire('movestart'), this;
              },
              _move: function (t, e, n, r) {
                void 0 === e && (e = this._zoom);
                var i = this._zoom !== e;
                return (
                  (this._zoom = e),
                  (this._lastCenter = t),
                  (this._pixelOrigin = this._getNewPixelOrigin(t)),
                  r
                    ? n && n.pinch && this.fire('zoom', n)
                    : ((i || (n && n.pinch)) && this.fire('zoom', n), this.fire('move', n)),
                  this
                );
              },
              _moveEnd: function (t) {
                return t && this.fire('zoomend'), this.fire('moveend');
              },
              _stop: function () {
                return k(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
              },
              _rawPanBy: function (t) {
                ye(this._mapPane, this._getMapPanePos().subtract(t));
              },
              _getZoomSpan: function () {
                return this.getMaxZoom() - this.getMinZoom();
              },
              _panInsideMaxBounds: function () {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
              },
              _checkIfLoaded: function () {
                if (!this._loaded) throw new Error('Set map center and zoom first.');
              },
              _initEvents: function (t) {
                (this._targets = {}), (this._targets[o(this._container)] = this);
                var e = t ? Oe : Te;
                e(
                  this._container,
                  'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup',
                  this._handleDOMEvent,
                  this,
                ),
                  this.options.trackResize && e(window, 'resize', this._onResize, this),
                  Ct.any3d &&
                    this.options.transform3DLimit &&
                    (t ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
              },
              _onResize: function () {
                k(this._resizeRequest),
                  (this._resizeRequest = P(function () {
                    this.invalidateSize({ debounceMoveend: !0 });
                  }, this));
              },
              _onScroll: function () {
                (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
              },
              _onMoveEnd: function () {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit &&
                  this._resetView(this.getCenter(), this.getZoom());
              },
              _findEventTargets: function (t, e) {
                for (
                  var n,
                    r = [],
                    i = 'mouseout' === e || 'mouseover' === e,
                    a = t.target || t.srcElement,
                    s = !1;
                  a;

                ) {
                  if (
                    (n = this._targets[o(a)]) &&
                    ('click' === e || 'preclick' === e) &&
                    this._draggableMoved(n)
                  ) {
                    s = !0;
                    break;
                  }
                  if (n && n.listens(e, !0)) {
                    if (i && !We(a, t)) break;
                    if ((r.push(n), i)) break;
                  }
                  if (a === this._container) break;
                  a = a.parentNode;
                }
                return r.length || s || i || !this.listens(e, !0) || (r = [this]), r;
              },
              _isClickDisabled: function (t) {
                for (; t && t !== this._container; ) {
                  if (t._leaflet_disable_click) return !0;
                  t = t.parentNode;
                }
              },
              _handleDOMEvent: function (t) {
                var e = t.target || t.srcElement;
                if (
                  !(
                    !this._loaded ||
                    e._leaflet_disable_events ||
                    ('click' === t.type && this._isClickDisabled(e))
                  )
                ) {
                  var n = t.type;
                  'mousedown' === n && xe(e), this._fireDOMEvent(t, n);
                }
              },
              _mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],
              _fireDOMEvent: function (t, n, r) {
                if ('click' === t.type) {
                  var i = e({}, t);
                  (i.type = 'preclick'), this._fireDOMEvent(i, i.type, r);
                }
                var o = this._findEventTargets(t, n);
                if (r) {
                  for (var a = [], s = 0; s < r.length; s++) r[s].listens(n, !0) && a.push(r[s]);
                  o = a.concat(o);
                }
                if (o.length) {
                  'contextmenu' === n && Ne(t);
                  var c = o[0],
                    u = { originalEvent: t };
                  if ('keypress' !== t.type && 'keydown' !== t.type && 'keyup' !== t.type) {
                    var h = c.getLatLng && (!c._radius || c._radius <= 10);
                    (u.containerPoint = h
                      ? this.latLngToContainerPoint(c.getLatLng())
                      : this.mouseEventToContainerPoint(t)),
                      (u.layerPoint = this.containerPointToLayerPoint(u.containerPoint)),
                      (u.latlng = h ? c.getLatLng() : this.layerPointToLatLng(u.layerPoint));
                  }
                  for (s = 0; s < o.length; s++)
                    if (
                      (o[s].fire(n, u, !0),
                      u.originalEvent._stopped ||
                        (!1 === o[s].options.bubblingMouseEvents && -1 !== y(this._mouseEvents, n)))
                    )
                      return;
                }
              },
              _draggableMoved: function (t) {
                return (
                  ((t = t.dragging && t.dragging.enabled() ? t : this).dragging &&
                    t.dragging.moved()) ||
                  (this.boxZoom && this.boxZoom.moved())
                );
              },
              _clearHandlers: function () {
                for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
              },
              whenReady: function (t, e) {
                return (
                  this._loaded ? t.call(e || this, { target: this }) : this.on('load', t, e), this
                );
              },
              _getMapPanePos: function () {
                return _e(this._mapPane) || new j(0, 0);
              },
              _moved: function () {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0]);
              },
              _getTopLeftPoint: function (t, e) {
                return (
                  t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()
                ).subtract(this._getMapPanePos());
              },
              _getNewPixelOrigin: function (t, e) {
                var n = this.getSize()._divideBy(2);
                return this.project(t, e)._subtract(n)._add(this._getMapPanePos())._round();
              },
              _latLngToNewLayerPoint: function (t, e, n) {
                var r = this._getNewPixelOrigin(n, e);
                return this.project(t, e)._subtract(r);
              },
              _latLngBoundsToNewLayerBounds: function (t, e, n) {
                var r = this._getNewPixelOrigin(n, e);
                return B([
                  this.project(t.getSouthWest(), e)._subtract(r),
                  this.project(t.getNorthWest(), e)._subtract(r),
                  this.project(t.getSouthEast(), e)._subtract(r),
                  this.project(t.getNorthEast(), e)._subtract(r),
                ]);
              },
              _getCenterLayerPoint: function () {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
              },
              _getCenterOffset: function (t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
              },
              _limitCenter: function (t, e, n) {
                if (!n) return t;
                var r = this.project(t, e),
                  i = this.getSize().divideBy(2),
                  o = new C(r.subtract(i), r.add(i)),
                  a = this._getBoundsOffset(o, n, e);
                return Math.abs(a.x) <= 1 && Math.abs(a.y) <= 1 ? t : this.unproject(r.add(a), e);
              },
              _limitOffset: function (t, e) {
                if (!e) return t;
                var n = this.getPixelBounds(),
                  r = new C(n.min.add(t), n.max.add(t));
                return t.add(this._getBoundsOffset(r, e));
              },
              _getBoundsOffset: function (t, e, n) {
                var r = B(this.project(e.getNorthEast(), n), this.project(e.getSouthWest(), n)),
                  i = r.min.subtract(t.min),
                  o = r.max.subtract(t.max);
                return new j(this._rebound(i.x, -o.x), this._rebound(i.y, -o.y));
              },
              _rebound: function (t, e) {
                return t + e > 0
                  ? Math.round(t - e) / 2
                  : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
              },
              _limitZoom: function (t) {
                var e = this.getMinZoom(),
                  n = this.getMaxZoom(),
                  r = Ct.any3d ? this.options.zoomSnap : 1;
                return r && (t = Math.round(t / r) * r), Math.max(e, Math.min(n, t));
              },
              _onPanTransitionStep: function () {
                this.fire('move');
              },
              _onPanTransitionEnd: function () {
                le(this._mapPane, 'leaflet-pan-anim'), this.fire('moveend');
              },
              _tryAnimatedPan: function (t, e) {
                var n = this._getCenterOffset(t)._trunc();
                return !(
                  (!0 !== (e && e.animate) && !this.getSize().contains(n)) ||
                  (this.panBy(n, e), 0)
                );
              },
              _createAnimProxy: function () {
                var t = (this._proxy = ie('div', 'leaflet-proxy leaflet-zoom-animated'));
                this._panes.mapPane.appendChild(t),
                  this.on(
                    'zoomanim',
                    function (t) {
                      var e = Qt,
                        n = this._proxy.style[e];
                      ve(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                        n === this._proxy.style[e] &&
                          this._animatingZoom &&
                          this._onZoomTransitionEnd();
                    },
                    this,
                  ),
                  this.on('load moveend', this._animMoveEnd, this),
                  this._on('unload', this._destroyAnimProxy, this);
              },
              _destroyAnimProxy: function () {
                oe(this._proxy),
                  this.off('load moveend', this._animMoveEnd, this),
                  delete this._proxy;
              },
              _animMoveEnd: function () {
                var t = this.getCenter(),
                  e = this.getZoom();
                ve(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
              },
              _catchTransitionEnd: function (t) {
                this._animatingZoom &&
                  t.propertyName.indexOf('transform') >= 0 &&
                  this._onZoomTransitionEnd();
              },
              _nothingToAnimate: function () {
                return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
              },
              _tryAnimatedZoom: function (t, e, n) {
                if (this._animatingZoom) return !0;
                if (
                  ((n = n || {}),
                  !this._zoomAnimated ||
                    !1 === n.animate ||
                    this._nothingToAnimate() ||
                    Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
                )
                  return !1;
                var r = this.getZoomScale(e),
                  i = this._getCenterOffset(t)._divideBy(1 - 1 / r);
                return !(
                  (!0 !== n.animate && !this.getSize().contains(i)) ||
                  (P(function () {
                    this._moveStart(!0, n.noMoveStart || !1)._animateZoom(t, e, !0);
                  }, this),
                  0)
                );
              },
              _animateZoom: function (t, e, n, i) {
                this._mapPane &&
                  (n &&
                    ((this._animatingZoom = !0),
                    (this._animateToCenter = t),
                    (this._animateToZoom = e),
                    he(this._mapPane, 'leaflet-zoom-anim')),
                  this.fire('zoomanim', { center: t, zoom: e, noUpdate: i }),
                  this._tempFireZoomEvent ||
                    (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
                  this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
                  setTimeout(r(this._onZoomTransitionEnd, this), 250));
              },
              _onZoomTransitionEnd: function () {
                this._animatingZoom &&
                  (this._mapPane && le(this._mapPane, 'leaflet-zoom-anim'),
                  (this._animatingZoom = !1),
                  this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
                  this._tempFireZoomEvent && this.fire('zoom'),
                  delete this._tempFireZoomEvent,
                  this.fire('move'),
                  this._moveEnd(!0));
              },
            });
          var Ve = S.extend({
              options: { position: 'topright' },
              initialize: function (t) {
                f(this, t);
              },
              getPosition: function () {
                return this.options.position;
              },
              setPosition: function (t) {
                var e = this._map;
                return (
                  e && e.removeControl(this),
                  (this.options.position = t),
                  e && e.addControl(this),
                  this
                );
              },
              getContainer: function () {
                return this._container;
              },
              addTo: function (t) {
                this.remove(), (this._map = t);
                var e = (this._container = this.onAdd(t)),
                  n = this.getPosition(),
                  r = t._controlCorners[n];
                return (
                  he(e, 'leaflet-control'),
                  -1 !== n.indexOf('bottom') ? r.insertBefore(e, r.firstChild) : r.appendChild(e),
                  this._map.on('unload', this.remove, this),
                  this
                );
              },
              remove: function () {
                return this._map
                  ? (oe(this._container),
                    this.onRemove && this.onRemove(this._map),
                    this._map.off('unload', this.remove, this),
                    (this._map = null),
                    this)
                  : this;
              },
              _refocusOnMap: function (t) {
                this._map &&
                  t &&
                  t.screenX > 0 &&
                  t.screenY > 0 &&
                  this._map.getContainer().focus();
              },
            }),
            qe = function (t) {
              return new Ve(t);
            };
          Ye.include({
            addControl: function (t) {
              return t.addTo(this), this;
            },
            removeControl: function (t) {
              return t.remove(), this;
            },
            _initControlPos: function () {
              var t = (this._controlCorners = {}),
                e = 'leaflet-',
                n = (this._controlContainer = ie('div', e + 'control-container', this._container));
              function r(r, i) {
                var o = e + r + ' ' + e + i;
                t[r + i] = ie('div', o, n);
              }
              r('top', 'left'), r('top', 'right'), r('bottom', 'left'), r('bottom', 'right');
            },
            _clearControlPos: function () {
              for (var t in this._controlCorners) oe(this._controlCorners[t]);
              oe(this._controlContainer),
                delete this._controlCorners,
                delete this._controlContainer;
            },
          });
          var Ke = Ve.extend({
              options: {
                collapsed: !0,
                position: 'topright',
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function (t, e, n, r) {
                  return n < r ? -1 : r < n ? 1 : 0;
                },
              },
              initialize: function (t, e, n) {
                for (var r in (f(this, n),
                (this._layerControlInputs = []),
                (this._layers = []),
                (this._lastZIndex = 0),
                (this._handlingClick = !1),
                (this._preventClick = !1),
                t))
                  this._addLayer(t[r], r);
                for (r in e) this._addLayer(e[r], r, !0);
              },
              onAdd: function (t) {
                this._initLayout(),
                  this._update(),
                  (this._map = t),
                  t.on('zoomend', this._checkDisabledLayers, this);
                for (var e = 0; e < this._layers.length; e++)
                  this._layers[e].layer.on('add remove', this._onLayerChange, this);
                return this._container;
              },
              addTo: function (t) {
                return Ve.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
              },
              onRemove: function () {
                this._map.off('zoomend', this._checkDisabledLayers, this);
                for (var t = 0; t < this._layers.length; t++)
                  this._layers[t].layer.off('add remove', this._onLayerChange, this);
              },
              addBaseLayer: function (t, e) {
                return this._addLayer(t, e), this._map ? this._update() : this;
              },
              addOverlay: function (t, e) {
                return this._addLayer(t, e, !0), this._map ? this._update() : this;
              },
              removeLayer: function (t) {
                t.off('add remove', this._onLayerChange, this);
                var e = this._getLayer(o(t));
                return (
                  e && this._layers.splice(this._layers.indexOf(e), 1),
                  this._map ? this._update() : this
                );
              },
              expand: function () {
                he(this._container, 'leaflet-control-layers-expanded'),
                  (this._section.style.height = null);
                var t = this._map.getSize().y - (this._container.offsetTop + 50);
                return (
                  t < this._section.clientHeight
                    ? (he(this._section, 'leaflet-control-layers-scrollbar'),
                      (this._section.style.height = t + 'px'))
                    : le(this._section, 'leaflet-control-layers-scrollbar'),
                  this._checkDisabledLayers(),
                  this
                );
              },
              collapse: function () {
                return le(this._container, 'leaflet-control-layers-expanded'), this;
              },
              _initLayout: function () {
                var t = 'leaflet-control-layers',
                  e = (this._container = ie('div', t)),
                  n = this.options.collapsed;
                e.setAttribute('aria-haspopup', !0), Ae(e), Be(e);
                var r = (this._section = ie('section', t + '-list'));
                n &&
                  (this._map.on('click', this.collapse, this),
                  Te(e, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this));
                var i = (this._layersLink = ie('a', t + '-toggle', e));
                (i.href = '#'),
                  (i.title = 'Layers'),
                  i.setAttribute('role', 'button'),
                  Te(
                    i,
                    {
                      keydown: function (t) {
                        13 === t.keyCode && this._expandSafely();
                      },
                      click: function (t) {
                        Ne(t), this._expandSafely();
                      },
                    },
                    this,
                  ),
                  n || this.expand(),
                  (this._baseLayersList = ie('div', t + '-base', r)),
                  (this._separator = ie('div', t + '-separator', r)),
                  (this._overlaysList = ie('div', t + '-overlays', r)),
                  e.appendChild(r);
              },
              _getLayer: function (t) {
                for (var e = 0; e < this._layers.length; e++)
                  if (this._layers[e] && o(this._layers[e].layer) === t) return this._layers[e];
              },
              _addLayer: function (t, e, n) {
                this._map && t.on('add remove', this._onLayerChange, this),
                  this._layers.push({ layer: t, name: e, overlay: n }),
                  this.options.sortLayers &&
                    this._layers.sort(
                      r(function (t, e) {
                        return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
                      }, this),
                    ),
                  this.options.autoZIndex &&
                    t.setZIndex &&
                    (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
                  this._expandIfNotCollapsed();
              },
              _update: function () {
                if (!this._container) return this;
                ae(this._baseLayersList), ae(this._overlaysList), (this._layerControlInputs = []);
                var t,
                  e,
                  n,
                  r,
                  i = 0;
                for (n = 0; n < this._layers.length; n++)
                  (r = this._layers[n]),
                    this._addItem(r),
                    (e = e || r.overlay),
                    (t = t || !r.overlay),
                    (i += r.overlay ? 0 : 1);
                return (
                  this.options.hideSingleBase &&
                    ((t = t && i > 1), (this._baseLayersList.style.display = t ? '' : 'none')),
                  (this._separator.style.display = e && t ? '' : 'none'),
                  this
                );
              },
              _onLayerChange: function (t) {
                this._handlingClick || this._update();
                var e = this._getLayer(o(t.target)),
                  n = e.overlay
                    ? 'add' === t.type
                      ? 'overlayadd'
                      : 'overlayremove'
                    : 'add' === t.type
                      ? 'baselayerchange'
                      : null;
                n && this._map.fire(n, e);
              },
              _createRadioElement: function (t, e) {
                var n =
                    '<input type="radio" class="leaflet-control-layers-selector" name="' +
                    t +
                    '"' +
                    (e ? ' checked="checked"' : '') +
                    '/>',
                  r = document.createElement('div');
                return (r.innerHTML = n), r.firstChild;
              },
              _addItem: function (t) {
                var e,
                  n = document.createElement('label'),
                  r = this._map.hasLayer(t.layer);
                t.overlay
                  ? (((e = document.createElement('input')).type = 'checkbox'),
                    (e.className = 'leaflet-control-layers-selector'),
                    (e.defaultChecked = r))
                  : (e = this._createRadioElement('leaflet-base-layers_' + o(this), r)),
                  this._layerControlInputs.push(e),
                  (e.layerId = o(t.layer)),
                  Te(e, 'click', this._onInputClick, this);
                var i = document.createElement('span');
                i.innerHTML = ' ' + t.name;
                var a = document.createElement('span');
                return (
                  n.appendChild(a),
                  a.appendChild(e),
                  a.appendChild(i),
                  (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(n),
                  this._checkDisabledLayers(),
                  n
                );
              },
              _onInputClick: function () {
                if (!this._preventClick) {
                  var t,
                    e,
                    n = this._layerControlInputs,
                    r = [],
                    i = [];
                  this._handlingClick = !0;
                  for (var o = n.length - 1; o >= 0; o--)
                    (t = n[o]),
                      (e = this._getLayer(t.layerId).layer),
                      t.checked ? r.push(e) : t.checked || i.push(e);
                  for (o = 0; o < i.length; o++)
                    this._map.hasLayer(i[o]) && this._map.removeLayer(i[o]);
                  for (o = 0; o < r.length; o++)
                    this._map.hasLayer(r[o]) || this._map.addLayer(r[o]);
                  (this._handlingClick = !1), this._refocusOnMap();
                }
              },
              _checkDisabledLayers: function () {
                for (
                  var t, e, n = this._layerControlInputs, r = this._map.getZoom(), i = n.length - 1;
                  i >= 0;
                  i--
                )
                  (t = n[i]),
                    (e = this._getLayer(t.layerId).layer),
                    (t.disabled =
                      (void 0 !== e.options.minZoom && r < e.options.minZoom) ||
                      (void 0 !== e.options.maxZoom && r > e.options.maxZoom));
              },
              _expandIfNotCollapsed: function () {
                return this._map && !this.options.collapsed && this.expand(), this;
              },
              _expandSafely: function () {
                var t = this._section;
                (this._preventClick = !0), Te(t, 'click', Ne), this.expand();
                var e = this;
                setTimeout(function () {
                  Oe(t, 'click', Ne), (e._preventClick = !1);
                });
              },
            }),
            Je = Ve.extend({
              options: {
                position: 'topleft',
                zoomInText: '<span aria-hidden="true">+</span>',
                zoomInTitle: 'Zoom in',
                zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
                zoomOutTitle: 'Zoom out',
              },
              onAdd: function (t) {
                var e = 'leaflet-control-zoom',
                  n = ie('div', e + ' leaflet-bar'),
                  r = this.options;
                return (
                  (this._zoomInButton = this._createButton(
                    r.zoomInText,
                    r.zoomInTitle,
                    e + '-in',
                    n,
                    this._zoomIn,
                  )),
                  (this._zoomOutButton = this._createButton(
                    r.zoomOutText,
                    r.zoomOutTitle,
                    e + '-out',
                    n,
                    this._zoomOut,
                  )),
                  this._updateDisabled(),
                  t.on('zoomend zoomlevelschange', this._updateDisabled, this),
                  n
                );
              },
              onRemove: function (t) {
                t.off('zoomend zoomlevelschange', this._updateDisabled, this);
              },
              disable: function () {
                return (this._disabled = !0), this._updateDisabled(), this;
              },
              enable: function () {
                return (this._disabled = !1), this._updateDisabled(), this;
              },
              _zoomIn: function (t) {
                !this._disabled &&
                  this._map._zoom < this._map.getMaxZoom() &&
                  this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
              },
              _zoomOut: function (t) {
                !this._disabled &&
                  this._map._zoom > this._map.getMinZoom() &&
                  this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
              },
              _createButton: function (t, e, n, r, i) {
                var o = ie('a', n, r);
                return (
                  (o.innerHTML = t),
                  (o.href = '#'),
                  (o.title = e),
                  o.setAttribute('role', 'button'),
                  o.setAttribute('aria-label', e),
                  Ae(o),
                  Te(o, 'click', Ze),
                  Te(o, 'click', i, this),
                  Te(o, 'click', this._refocusOnMap, this),
                  o
                );
              },
              _updateDisabled: function () {
                var t = this._map,
                  e = 'leaflet-disabled';
                le(this._zoomInButton, e),
                  le(this._zoomOutButton, e),
                  this._zoomInButton.setAttribute('aria-disabled', 'false'),
                  this._zoomOutButton.setAttribute('aria-disabled', 'false'),
                  (this._disabled || t._zoom === t.getMinZoom()) &&
                    (he(this._zoomOutButton, e),
                    this._zoomOutButton.setAttribute('aria-disabled', 'true')),
                  (this._disabled || t._zoom === t.getMaxZoom()) &&
                    (he(this._zoomInButton, e),
                    this._zoomInButton.setAttribute('aria-disabled', 'true'));
              },
            });
          Ye.mergeOptions({ zoomControl: !0 }),
            Ye.addInitHook(function () {
              this.options.zoomControl &&
                ((this.zoomControl = new Je()), this.addControl(this.zoomControl));
            });
          var Xe = Ve.extend({
              options: { position: 'bottomleft', maxWidth: 100, metric: !0, imperial: !0 },
              onAdd: function (t) {
                var e = 'leaflet-control-scale',
                  n = ie('div', e),
                  r = this.options;
                return (
                  this._addScales(r, e + '-line', n),
                  t.on(r.updateWhenIdle ? 'moveend' : 'move', this._update, this),
                  t.whenReady(this._update, this),
                  n
                );
              },
              onRemove: function (t) {
                t.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
              },
              _addScales: function (t, e, n) {
                t.metric && (this._mScale = ie('div', e, n)),
                  t.imperial && (this._iScale = ie('div', e, n));
              },
              _update: function () {
                var t = this._map,
                  e = t.getSize().y / 2,
                  n = t.distance(
                    t.containerPointToLatLng([0, e]),
                    t.containerPointToLatLng([this.options.maxWidth, e]),
                  );
                this._updateScales(n);
              },
              _updateScales: function (t) {
                this.options.metric && t && this._updateMetric(t),
                  this.options.imperial && t && this._updateImperial(t);
              },
              _updateMetric: function (t) {
                var e = this._getRoundNum(t),
                  n = e < 1e3 ? e + ' m' : e / 1e3 + ' km';
                this._updateScale(this._mScale, n, e / t);
              },
              _updateImperial: function (t) {
                var e,
                  n,
                  r,
                  i = 3.2808399 * t;
                i > 5280
                  ? ((e = i / 5280),
                    (n = this._getRoundNum(e)),
                    this._updateScale(this._iScale, n + ' mi', n / e))
                  : ((r = this._getRoundNum(i)), this._updateScale(this._iScale, r + ' ft', r / i));
              },
              _updateScale: function (t, e, n) {
                (t.style.width = Math.round(this.options.maxWidth * n) + 'px'), (t.innerHTML = e);
              },
              _getRoundNum: function (t) {
                var e = Math.pow(10, (Math.floor(t) + '').length - 1),
                  n = t / e;
                return e * (n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1);
              },
            }),
            $e = Ve.extend({
              options: {
                position: 'bottomright',
                prefix:
                  '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
                  (Ct.inlineSvg
                    ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> '
                    : '') +
                  'Leaflet</a>',
              },
              initialize: function (t) {
                f(this, t), (this._attributions = {});
              },
              onAdd: function (t) {
                for (var e in ((t.attributionControl = this),
                (this._container = ie('div', 'leaflet-control-attribution')),
                Ae(this._container),
                t._layers))
                  t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                return (
                  this._update(), t.on('layeradd', this._addAttribution, this), this._container
                );
              },
              onRemove: function (t) {
                t.off('layeradd', this._addAttribution, this);
              },
              _addAttribution: function (t) {
                t.layer.getAttribution &&
                  (this.addAttribution(t.layer.getAttribution()),
                  t.layer.once(
                    'remove',
                    function () {
                      this.removeAttribution(t.layer.getAttribution());
                    },
                    this,
                  ));
              },
              setPrefix: function (t) {
                return (this.options.prefix = t), this._update(), this;
              },
              addAttribution: function (t) {
                return t
                  ? (this._attributions[t] || (this._attributions[t] = 0),
                    this._attributions[t]++,
                    this._update(),
                    this)
                  : this;
              },
              removeAttribution: function (t) {
                return t
                  ? (this._attributions[t] && (this._attributions[t]--, this._update()), this)
                  : this;
              },
              _update: function () {
                if (this._map) {
                  var t = [];
                  for (var e in this._attributions) this._attributions[e] && t.push(e);
                  var n = [];
                  this.options.prefix && n.push(this.options.prefix),
                    t.length && n.push(t.join(', ')),
                    (this._container.innerHTML = n.join(' <span aria-hidden="true">|</span> '));
                }
              },
            });
          Ye.mergeOptions({ attributionControl: !0 }),
            Ye.addInitHook(function () {
              this.options.attributionControl && new $e().addTo(this);
            });
          (Ve.Layers = Ke),
            (Ve.Zoom = Je),
            (Ve.Scale = Xe),
            (Ve.Attribution = $e),
            (qe.layers = function (t, e, n) {
              return new Ke(t, e, n);
            }),
            (qe.zoom = function (t) {
              return new Je(t);
            }),
            (qe.scale = function (t) {
              return new Xe(t);
            }),
            (qe.attribution = function (t) {
              return new $e(t);
            });
          var Qe = S.extend({
            initialize: function (t) {
              this._map = t;
            },
            enable: function () {
              return this._enabled || ((this._enabled = !0), this.addHooks()), this;
            },
            disable: function () {
              return this._enabled ? ((this._enabled = !1), this.removeHooks(), this) : this;
            },
            enabled: function () {
              return !!this._enabled;
            },
          });
          Qe.addTo = function (t, e) {
            return t.addHandler(e, this), this;
          };
          var tn = { Events: O },
            en = Ct.touch ? 'touchstart mousedown' : 'mousedown',
            nn = M.extend({
              options: { clickTolerance: 3 },
              initialize: function (t, e, n, r) {
                f(this, r),
                  (this._element = t),
                  (this._dragStartTarget = e || t),
                  (this._preventOutline = n);
              },
              enable: function () {
                this._enabled ||
                  (Te(this._dragStartTarget, en, this._onDown, this), (this._enabled = !0));
              },
              disable: function () {
                this._enabled &&
                  (nn._dragging === this && this.finishDrag(!0),
                  Oe(this._dragStartTarget, en, this._onDown, this),
                  (this._enabled = !1),
                  (this._moved = !1));
              },
              _onDown: function (t) {
                if (this._enabled && ((this._moved = !1), !ue(this._element, 'leaflet-zoom-anim')))
                  if (t.touches && 1 !== t.touches.length)
                    nn._dragging === this && this.finishDrag();
                  else if (
                    !(
                      nn._dragging ||
                      t.shiftKey ||
                      (1 !== t.which && 1 !== t.button && !t.touches) ||
                      ((nn._dragging = this),
                      this._preventOutline && xe(this._element),
                      we(),
                      qt(),
                      this._moving)
                    )
                  ) {
                    this.fire('down');
                    var e = t.touches ? t.touches[0] : t,
                      n = Ee(this._element);
                    (this._startPoint = new j(e.clientX, e.clientY)),
                      (this._startPos = _e(this._element)),
                      (this._parentScale = Pe(n));
                    var r = 'mousedown' === t.type;
                    Te(document, r ? 'mousemove' : 'touchmove', this._onMove, this),
                      Te(document, r ? 'mouseup' : 'touchend touchcancel', this._onUp, this);
                  }
              },
              _onMove: function (t) {
                if (this._enabled)
                  if (t.touches && t.touches.length > 1) this._moved = !0;
                  else {
                    var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                      n = new j(e.clientX, e.clientY)._subtract(this._startPoint);
                    (n.x || n.y) &&
                      (Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance ||
                        ((n.x /= this._parentScale.x),
                        (n.y /= this._parentScale.y),
                        Ne(t),
                        this._moved ||
                          (this.fire('dragstart'),
                          (this._moved = !0),
                          he(document.body, 'leaflet-dragging'),
                          (this._lastTarget = t.target || t.srcElement),
                          window.SVGElementInstance &&
                            this._lastTarget instanceof window.SVGElementInstance &&
                            (this._lastTarget = this._lastTarget.correspondingUseElement),
                          he(this._lastTarget, 'leaflet-drag-target')),
                        (this._newPos = this._startPos.add(n)),
                        (this._moving = !0),
                        (this._lastEvent = t),
                        this._updatePosition()));
                  }
              },
              _updatePosition: function () {
                var t = { originalEvent: this._lastEvent };
                this.fire('predrag', t), ye(this._element, this._newPos), this.fire('drag', t);
              },
              _onUp: function () {
                this._enabled && this.finishDrag();
              },
              finishDrag: function (t) {
                le(document.body, 'leaflet-dragging'),
                  this._lastTarget &&
                    (le(this._lastTarget, 'leaflet-drag-target'), (this._lastTarget = null)),
                  Oe(document, 'mousemove touchmove', this._onMove, this),
                  Oe(document, 'mouseup touchend touchcancel', this._onUp, this),
                  be(),
                  Kt();
                var e = this._moved && this._moving;
                (this._moving = !1),
                  (nn._dragging = !1),
                  e &&
                    this.fire('dragend', {
                      noInertia: t,
                      distance: this._newPos.distanceTo(this._startPos),
                    });
              },
            });
          function rn(t, e, n) {
            var r,
              i,
              o,
              a,
              s,
              c,
              u,
              h,
              l,
              f = [1, 4, 2, 8];
            for (i = 0, u = t.length; i < u; i++) t[i]._code = dn(t[i], e);
            for (a = 0; a < 4; a++) {
              for (h = f[a], r = [], i = 0, o = (u = t.length) - 1; i < u; o = i++)
                (s = t[i]),
                  (c = t[o]),
                  s._code & h
                    ? c._code & h || (((l = pn(c, s, h, e, n))._code = dn(l, e)), r.push(l))
                    : (c._code & h && (((l = pn(c, s, h, e, n))._code = dn(l, e)), r.push(l)),
                      r.push(s));
              t = r;
            }
            return t;
          }
          function on(t, e) {
            var n, r, i, o, a, s, c, u, h;
            if (!t || 0 === t.length) throw new Error('latlngs not passed');
            yn(t) ||
              (console.warn('latlngs are not flat! Only the first ring will be used'), (t = t[0]));
            var l = R([0, 0]),
              f = N(t);
            f.getNorthWest().distanceTo(f.getSouthWest()) *
              f.getNorthEast().distanceTo(f.getNorthWest()) <
              1700 && (l = an(t));
            var p = t.length,
              d = [];
            for (n = 0; n < p; n++) {
              var m = R(t[n]);
              d.push(e.project(R([m.lat - l.lat, m.lng - l.lng])));
            }
            for (s = c = u = 0, n = 0, r = p - 1; n < p; r = n++)
              (i = d[n]),
                (o = d[r]),
                (a = i.y * o.x - o.y * i.x),
                (c += (i.x + o.x) * a),
                (u += (i.y + o.y) * a),
                (s += 3 * a);
            h = 0 === s ? d[0] : [c / s, u / s];
            var v = e.unproject(z(h));
            return R([v.lat + l.lat, v.lng + l.lng]);
          }
          function an(t) {
            for (var e = 0, n = 0, r = 0, i = 0; i < t.length; i++) {
              var o = R(t[i]);
              (e += o.lat), (n += o.lng), r++;
            }
            return R([e / r, n / r]);
          }
          var sn,
            cn = { __proto__: null, clipPolygon: rn, polygonCenter: on, centroid: an };
          function un(t, e) {
            if (!e || !t.length) return t.slice();
            var n = e * e;
            return (function (t, e) {
              var n = t.length,
                r = new (typeof Uint8Array != void 0 + '' ? Uint8Array : Array)(n);
              (r[0] = r[n - 1] = 1), ln(t, r, e, 0, n - 1);
              var i,
                o = [];
              for (i = 0; i < n; i++) r[i] && o.push(t[i]);
              return o;
            })(
              (t = (function (t, e) {
                for (var n = [t[0]], r = 1, i = 0, o = t.length; r < o; r++)
                  mn(t[r], t[i]) > e && (n.push(t[r]), (i = r));
                return i < o - 1 && n.push(t[o - 1]), n;
              })(t, n)),
              n,
            );
          }
          function hn(t, e, n) {
            return Math.sqrt(vn(t, e, n, !0));
          }
          function ln(t, e, n, r, i) {
            var o,
              a,
              s,
              c = 0;
            for (a = r + 1; a <= i - 1; a++)
              (s = vn(t[a], t[r], t[i], !0)) > c && ((o = a), (c = s));
            c > n && ((e[o] = 1), ln(t, e, n, r, o), ln(t, e, n, o, i));
          }
          function fn(t, e, n, r, i) {
            var o,
              a,
              s,
              c = r ? sn : dn(t, n),
              u = dn(e, n);
            for (sn = u; ; ) {
              if (!(c | u)) return [t, e];
              if (c & u) return !1;
              (s = dn((a = pn(t, e, (o = c || u), n, i)), n)),
                o === c ? ((t = a), (c = s)) : ((e = a), (u = s));
            }
          }
          function pn(t, e, n, r, i) {
            var o,
              a,
              s = e.x - t.x,
              c = e.y - t.y,
              u = r.min,
              h = r.max;
            return (
              8 & n
                ? ((o = t.x + (s * (h.y - t.y)) / c), (a = h.y))
                : 4 & n
                  ? ((o = t.x + (s * (u.y - t.y)) / c), (a = u.y))
                  : 2 & n
                    ? ((o = h.x), (a = t.y + (c * (h.x - t.x)) / s))
                    : 1 & n && ((o = u.x), (a = t.y + (c * (u.x - t.x)) / s)),
              new j(o, a, i)
            );
          }
          function dn(t, e) {
            var n = 0;
            return (
              t.x < e.min.x ? (n |= 1) : t.x > e.max.x && (n |= 2),
              t.y < e.min.y ? (n |= 4) : t.y > e.max.y && (n |= 8),
              n
            );
          }
          function mn(t, e) {
            var n = e.x - t.x,
              r = e.y - t.y;
            return n * n + r * r;
          }
          function vn(t, e, n, r) {
            var i,
              o = e.x,
              a = e.y,
              s = n.x - o,
              c = n.y - a,
              u = s * s + c * c;
            return (
              u > 0 &&
                ((i = ((t.x - o) * s + (t.y - a) * c) / u) > 1
                  ? ((o = n.x), (a = n.y))
                  : i > 0 && ((o += s * i), (a += c * i))),
              (s = t.x - o),
              (c = t.y - a),
              r ? s * s + c * c : new j(o, a)
            );
          }
          function yn(t) {
            return !v(t[0]) || ('object' != typeof t[0][0] && void 0 !== t[0][0]);
          }
          function _n(t) {
            return (
              console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.'), yn(t)
            );
          }
          function gn(t, e) {
            var n, r, i, o, a, s, c, u;
            if (!t || 0 === t.length) throw new Error('latlngs not passed');
            yn(t) ||
              (console.warn('latlngs are not flat! Only the first ring will be used'), (t = t[0]));
            var h = R([0, 0]),
              l = N(t);
            l.getNorthWest().distanceTo(l.getSouthWest()) *
              l.getNorthEast().distanceTo(l.getNorthWest()) <
              1700 && (h = an(t));
            var f = t.length,
              p = [];
            for (n = 0; n < f; n++) {
              var d = R(t[n]);
              p.push(e.project(R([d.lat - h.lat, d.lng - h.lng])));
            }
            for (n = 0, r = 0; n < f - 1; n++) r += p[n].distanceTo(p[n + 1]) / 2;
            if (0 === r) u = p[0];
            else
              for (n = 0, o = 0; n < f - 1; n++)
                if (((a = p[n]), (s = p[n + 1]), (o += i = a.distanceTo(s)) > r)) {
                  (c = (o - r) / i), (u = [s.x - c * (s.x - a.x), s.y - c * (s.y - a.y)]);
                  break;
                }
            var m = e.unproject(z(u));
            return R([m.lat + h.lat, m.lng + h.lng]);
          }
          var wn = {
              __proto__: null,
              simplify: un,
              pointToSegmentDistance: hn,
              closestPointOnSegment: function (t, e, n) {
                return vn(t, e, n);
              },
              clipSegment: fn,
              _getEdgeIntersection: pn,
              _getBitCode: dn,
              _sqClosestPointOnSegment: vn,
              isFlat: yn,
              _flat: _n,
              polylineCenter: gn,
            },
            bn = {
              project: function (t) {
                return new j(t.lng, t.lat);
              },
              unproject: function (t) {
                return new Z(t.y, t.x);
              },
              bounds: new C([-180, -90], [180, 90]),
            },
            xn = {
              R: 6378137,
              R_MINOR: 6356752.314245179,
              bounds: new C([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
              project: function (t) {
                var e = Math.PI / 180,
                  n = this.R,
                  r = t.lat * e,
                  i = this.R_MINOR / n,
                  o = Math.sqrt(1 - i * i),
                  a = o * Math.sin(r),
                  s = Math.tan(Math.PI / 4 - r / 2) / Math.pow((1 - a) / (1 + a), o / 2);
                return (r = -n * Math.log(Math.max(s, 1e-10))), new j(t.lng * e * n, r);
              },
              unproject: function (t) {
                for (
                  var e,
                    n = 180 / Math.PI,
                    r = this.R,
                    i = this.R_MINOR / r,
                    o = Math.sqrt(1 - i * i),
                    a = Math.exp(-t.y / r),
                    s = Math.PI / 2 - 2 * Math.atan(a),
                    c = 0,
                    u = 0.1;
                  c < 15 && Math.abs(u) > 1e-7;
                  c++
                )
                  (e = o * Math.sin(s)),
                    (e = Math.pow((1 - e) / (1 + e), o / 2)),
                    (s += u = Math.PI / 2 - 2 * Math.atan(a * e) - s);
                return new Z(s * n, (t.x * n) / r);
              },
            },
            Ln = { __proto__: null, LonLat: bn, Mercator: xn, SphericalMercator: H },
            En = e({}, G, {
              code: 'EPSG:3395',
              projection: xn,
              transformation: (function () {
                var t = 0.5 / (Math.PI * xn.R);
                return Y(t, 0.5, -t, 0.5);
              })(),
            }),
            Pn = e({}, G, {
              code: 'EPSG:4326',
              projection: bn,
              transformation: Y(1 / 180, 1, -1 / 180, 0.5),
            }),
            kn = e({}, F, {
              projection: bn,
              transformation: Y(1, 0, -1, 0),
              scale: function (t) {
                return Math.pow(2, t);
              },
              zoom: function (t) {
                return Math.log(t) / Math.LN2;
              },
              distance: function (t, e) {
                var n = e.lng - t.lng,
                  r = e.lat - t.lat;
                return Math.sqrt(n * n + r * r);
              },
              infinite: !0,
            });
          (F.Earth = G),
            (F.EPSG3395 = En),
            (F.EPSG3857 = V),
            (F.EPSG900913 = q),
            (F.EPSG4326 = Pn),
            (F.Simple = kn);
          var Tn = M.extend({
            options: { pane: 'overlayPane', attribution: null, bubblingMouseEvents: !0 },
            addTo: function (t) {
              return t.addLayer(this), this;
            },
            remove: function () {
              return this.removeFrom(this._map || this._mapToAdd);
            },
            removeFrom: function (t) {
              return t && t.removeLayer(this), this;
            },
            getPane: function (t) {
              return this._map.getPane(t ? this.options[t] || t : this.options.pane);
            },
            addInteractiveTarget: function (t) {
              return (this._map._targets[o(t)] = this), this;
            },
            removeInteractiveTarget: function (t) {
              return delete this._map._targets[o(t)], this;
            },
            getAttribution: function () {
              return this.options.attribution;
            },
            _layerAdd: function (t) {
              var e = t.target;
              if (e.hasLayer(this)) {
                if (((this._map = e), (this._zoomAnimated = e._zoomAnimated), this.getEvents)) {
                  var n = this.getEvents();
                  e.on(n, this),
                    this.once(
                      'remove',
                      function () {
                        e.off(n, this);
                      },
                      this,
                    );
                }
                this.onAdd(e), this.fire('add'), e.fire('layeradd', { layer: this });
              }
            },
          });
          Ye.include({
            addLayer: function (t) {
              if (!t._layerAdd) throw new Error('The provided object is not a Layer.');
              var e = o(t);
              return (
                this._layers[e] ||
                  ((this._layers[e] = t),
                  (t._mapToAdd = this),
                  t.beforeAdd && t.beforeAdd(this),
                  this.whenReady(t._layerAdd, t)),
                this
              );
            },
            removeLayer: function (t) {
              var e = o(t);
              return this._layers[e]
                ? (this._loaded && t.onRemove(this),
                  delete this._layers[e],
                  this._loaded && (this.fire('layerremove', { layer: t }), t.fire('remove')),
                  (t._map = t._mapToAdd = null),
                  this)
                : this;
            },
            hasLayer: function (t) {
              return o(t) in this._layers;
            },
            eachLayer: function (t, e) {
              for (var n in this._layers) t.call(e, this._layers[n]);
              return this;
            },
            _addLayers: function (t) {
              for (var e = 0, n = (t = t ? (v(t) ? t : [t]) : []).length; e < n; e++)
                this.addLayer(t[e]);
            },
            _addZoomLimit: function (t) {
              (isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
                ((this._zoomBoundLayers[o(t)] = t), this._updateZoomLevels());
            },
            _removeZoomLimit: function (t) {
              var e = o(t);
              this._zoomBoundLayers[e] &&
                (delete this._zoomBoundLayers[e], this._updateZoomLevels());
            },
            _updateZoomLevels: function () {
              var t = 1 / 0,
                e = -1 / 0,
                n = this._getZoomSpan();
              for (var r in this._zoomBoundLayers) {
                var i = this._zoomBoundLayers[r].options;
                (t = void 0 === i.minZoom ? t : Math.min(t, i.minZoom)),
                  (e = void 0 === i.maxZoom ? e : Math.max(e, i.maxZoom));
              }
              (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
                (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
                n !== this._getZoomSpan() && this.fire('zoomlevelschange'),
                void 0 === this.options.maxZoom &&
                  this._layersMaxZoom &&
                  this.getZoom() > this._layersMaxZoom &&
                  this.setZoom(this._layersMaxZoom),
                void 0 === this.options.minZoom &&
                  this._layersMinZoom &&
                  this.getZoom() < this._layersMinZoom &&
                  this.setZoom(this._layersMinZoom);
            },
          });
          var Sn = Tn.extend({
              initialize: function (t, e) {
                var n, r;
                if ((f(this, e), (this._layers = {}), t))
                  for (n = 0, r = t.length; n < r; n++) this.addLayer(t[n]);
              },
              addLayer: function (t) {
                var e = this.getLayerId(t);
                return (this._layers[e] = t), this._map && this._map.addLayer(t), this;
              },
              removeLayer: function (t) {
                var e = t in this._layers ? t : this.getLayerId(t);
                return (
                  this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
                  delete this._layers[e],
                  this
                );
              },
              hasLayer: function (t) {
                return ('number' == typeof t ? t : this.getLayerId(t)) in this._layers;
              },
              clearLayers: function () {
                return this.eachLayer(this.removeLayer, this);
              },
              invoke: function (t) {
                var e,
                  n,
                  r = Array.prototype.slice.call(arguments, 1);
                for (e in this._layers) (n = this._layers[e])[t] && n[t].apply(n, r);
                return this;
              },
              onAdd: function (t) {
                this.eachLayer(t.addLayer, t);
              },
              onRemove: function (t) {
                this.eachLayer(t.removeLayer, t);
              },
              eachLayer: function (t, e) {
                for (var n in this._layers) t.call(e, this._layers[n]);
                return this;
              },
              getLayer: function (t) {
                return this._layers[t];
              },
              getLayers: function () {
                var t = [];
                return this.eachLayer(t.push, t), t;
              },
              setZIndex: function (t) {
                return this.invoke('setZIndex', t);
              },
              getLayerId: function (t) {
                return o(t);
              },
            }),
            On = Sn.extend({
              addLayer: function (t) {
                return this.hasLayer(t)
                  ? this
                  : (t.addEventParent(this),
                    Sn.prototype.addLayer.call(this, t),
                    this.fire('layeradd', { layer: t }));
              },
              removeLayer: function (t) {
                return this.hasLayer(t)
                  ? (t in this._layers && (t = this._layers[t]),
                    t.removeEventParent(this),
                    Sn.prototype.removeLayer.call(this, t),
                    this.fire('layerremove', { layer: t }))
                  : this;
              },
              setStyle: function (t) {
                return this.invoke('setStyle', t);
              },
              bringToFront: function () {
                return this.invoke('bringToFront');
              },
              bringToBack: function () {
                return this.invoke('bringToBack');
              },
              getBounds: function () {
                var t = new A();
                for (var e in this._layers) {
                  var n = this._layers[e];
                  t.extend(n.getBounds ? n.getBounds() : n.getLatLng());
                }
                return t;
              },
            }),
            Mn = S.extend({
              options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: !1 },
              initialize: function (t) {
                f(this, t);
              },
              createIcon: function (t) {
                return this._createIcon('icon', t);
              },
              createShadow: function (t) {
                return this._createIcon('shadow', t);
              },
              _createIcon: function (t, e) {
                var n = this._getIconUrl(t);
                if (!n) {
                  if ('icon' === t)
                    throw new Error('iconUrl not set in Icon options (see the docs).');
                  return null;
                }
                var r = this._createImg(n, e && 'IMG' === e.tagName ? e : null);
                return (
                  this._setIconStyles(r, t),
                  (this.options.crossOrigin || '' === this.options.crossOrigin) &&
                    (r.crossOrigin =
                      !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
                  r
                );
              },
              _setIconStyles: function (t, e) {
                var n = this.options,
                  r = n[e + 'Size'];
                'number' == typeof r && (r = [r, r]);
                var i = z(r),
                  o = z(
                    ('shadow' === e && n.shadowAnchor) || n.iconAnchor || (i && i.divideBy(2, !0)),
                  );
                (t.className = 'leaflet-marker-' + e + ' ' + (n.className || '')),
                  o && ((t.style.marginLeft = -o.x + 'px'), (t.style.marginTop = -o.y + 'px')),
                  i && ((t.style.width = i.x + 'px'), (t.style.height = i.y + 'px'));
              },
              _createImg: function (t, e) {
                return ((e = e || document.createElement('img')).src = t), e;
              },
              _getIconUrl: function (t) {
                return (Ct.retina && this.options[t + 'RetinaUrl']) || this.options[t + 'Url'];
              },
            });
          var jn = Mn.extend({
              options: {
                iconUrl: 'marker-icon.png',
                iconRetinaUrl: 'marker-icon-2x.png',
                shadowUrl: 'marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41],
              },
              _getIconUrl: function (t) {
                return (
                  'string' != typeof jn.imagePath && (jn.imagePath = this._detectIconPath()),
                  (this.options.imagePath || jn.imagePath) + Mn.prototype._getIconUrl.call(this, t)
                );
              },
              _stripUrl: function (t) {
                var e = function (t, e, n) {
                  var r = e.exec(t);
                  return r && r[n];
                };
                return (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) && e(t, /^(.*)marker-icon\.png$/, 1);
              },
              _detectIconPath: function () {
                var t = ie('div', 'leaflet-default-icon-path', document.body),
                  e = re(t, 'background-image') || re(t, 'backgroundImage');
                if ((document.body.removeChild(t), (e = this._stripUrl(e)))) return e;
                var n = document.querySelector('link[href$="leaflet.css"]');
                return n ? n.href.substring(0, n.href.length - 11 - 1) : '';
              },
            }),
            In = Qe.extend({
              initialize: function (t) {
                this._marker = t;
              },
              addHooks: function () {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new nn(t, t, !0)),
                  this._draggable
                    .on(
                      {
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd,
                      },
                      this,
                    )
                    .enable(),
                  he(t, 'leaflet-marker-draggable');
              },
              removeHooks: function () {
                this._draggable
                  .off(
                    {
                      dragstart: this._onDragStart,
                      predrag: this._onPreDrag,
                      drag: this._onDrag,
                      dragend: this._onDragEnd,
                    },
                    this,
                  )
                  .disable(),
                  this._marker._icon && le(this._marker._icon, 'leaflet-marker-draggable');
              },
              moved: function () {
                return this._draggable && this._draggable._moved;
              },
              _adjustPan: function (t) {
                var e = this._marker,
                  n = e._map,
                  r = this._marker.options.autoPanSpeed,
                  i = this._marker.options.autoPanPadding,
                  o = _e(e._icon),
                  a = n.getPixelBounds(),
                  s = n.getPixelOrigin(),
                  c = B(a.min._subtract(s).add(i), a.max._subtract(s).subtract(i));
                if (!c.contains(o)) {
                  var u = z(
                    (Math.max(c.max.x, o.x) - c.max.x) / (a.max.x - c.max.x) -
                      (Math.min(c.min.x, o.x) - c.min.x) / (a.min.x - c.min.x),
                    (Math.max(c.max.y, o.y) - c.max.y) / (a.max.y - c.max.y) -
                      (Math.min(c.min.y, o.y) - c.min.y) / (a.min.y - c.min.y),
                  ).multiplyBy(r);
                  n.panBy(u, { animate: !1 }),
                    this._draggable._newPos._add(u),
                    this._draggable._startPos._add(u),
                    ye(e._icon, this._draggable._newPos),
                    this._onDrag(t),
                    (this._panRequest = P(this._adjustPan.bind(this, t)));
                }
              },
              _onDragStart: function () {
                (this._oldLatLng = this._marker.getLatLng()),
                  this._marker.closePopup && this._marker.closePopup(),
                  this._marker.fire('movestart').fire('dragstart');
              },
              _onPreDrag: function (t) {
                this._marker.options.autoPan &&
                  (k(this._panRequest), (this._panRequest = P(this._adjustPan.bind(this, t))));
              },
              _onDrag: function (t) {
                var e = this._marker,
                  n = e._shadow,
                  r = _e(e._icon),
                  i = e._map.layerPointToLatLng(r);
                n && ye(n, r),
                  (e._latlng = i),
                  (t.latlng = i),
                  (t.oldLatLng = this._oldLatLng),
                  e.fire('move', t).fire('drag', t);
              },
              _onDragEnd: function (t) {
                k(this._panRequest),
                  delete this._oldLatLng,
                  this._marker.fire('moveend').fire('dragend', t);
              },
            }),
            zn = Tn.extend({
              options: {
                icon: new jn(),
                interactive: !0,
                keyboard: !0,
                title: '',
                alt: 'Marker',
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: 'markerPane',
                shadowPane: 'shadowPane',
                bubblingMouseEvents: !1,
                autoPanOnFocus: !0,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10,
              },
              initialize: function (t, e) {
                f(this, e), (this._latlng = R(t));
              },
              onAdd: function (t) {
                (this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation),
                  this._zoomAnimated && t.on('zoomanim', this._animateZoom, this),
                  this._initIcon(),
                  this.update();
              },
              onRemove: function (t) {
                this.dragging &&
                  this.dragging.enabled() &&
                  ((this.options.draggable = !0), this.dragging.removeHooks()),
                  delete this.dragging,
                  this._zoomAnimated && t.off('zoomanim', this._animateZoom, this),
                  this._removeIcon(),
                  this._removeShadow();
              },
              getEvents: function () {
                return { zoom: this.update, viewreset: this.update };
              },
              getLatLng: function () {
                return this._latlng;
              },
              setLatLng: function (t) {
                var e = this._latlng;
                return (
                  (this._latlng = R(t)),
                  this.update(),
                  this.fire('move', { oldLatLng: e, latlng: this._latlng })
                );
              },
              setZIndexOffset: function (t) {
                return (this.options.zIndexOffset = t), this.update();
              },
              getIcon: function () {
                return this.options.icon;
              },
              setIcon: function (t) {
                return (
                  (this.options.icon = t),
                  this._map && (this._initIcon(), this.update()),
                  this._popup && this.bindPopup(this._popup, this._popup.options),
                  this
                );
              },
              getElement: function () {
                return this._icon;
              },
              update: function () {
                if (this._icon && this._map) {
                  var t = this._map.latLngToLayerPoint(this._latlng).round();
                  this._setPos(t);
                }
                return this;
              },
              _initIcon: function () {
                var t = this.options,
                  e = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
                  n = t.icon.createIcon(this._icon),
                  r = !1;
                n !== this._icon &&
                  (this._icon && this._removeIcon(),
                  (r = !0),
                  t.title && (n.title = t.title),
                  'IMG' === n.tagName && (n.alt = t.alt || '')),
                  he(n, e),
                  t.keyboard && ((n.tabIndex = '0'), n.setAttribute('role', 'button')),
                  (this._icon = n),
                  t.riseOnHover &&
                    this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
                  this.options.autoPanOnFocus && Te(n, 'focus', this._panOnFocus, this);
                var i = t.icon.createShadow(this._shadow),
                  o = !1;
                i !== this._shadow && (this._removeShadow(), (o = !0)),
                  i && (he(i, e), (i.alt = '')),
                  (this._shadow = i),
                  t.opacity < 1 && this._updateOpacity(),
                  r && this.getPane().appendChild(this._icon),
                  this._initInteraction(),
                  i && o && this.getPane(t.shadowPane).appendChild(this._shadow);
              },
              _removeIcon: function () {
                this.options.riseOnHover &&
                  this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
                  this.options.autoPanOnFocus && Oe(this._icon, 'focus', this._panOnFocus, this),
                  oe(this._icon),
                  this.removeInteractiveTarget(this._icon),
                  (this._icon = null);
              },
              _removeShadow: function () {
                this._shadow && oe(this._shadow), (this._shadow = null);
              },
              _setPos: function (t) {
                this._icon && ye(this._icon, t),
                  this._shadow && ye(this._shadow, t),
                  (this._zIndex = t.y + this.options.zIndexOffset),
                  this._resetZIndex();
              },
              _updateZIndex: function (t) {
                this._icon && (this._icon.style.zIndex = this._zIndex + t);
              },
              _animateZoom: function (t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(e);
              },
              _initInteraction: function () {
                if (
                  this.options.interactive &&
                  (he(this._icon, 'leaflet-interactive'), this.addInteractiveTarget(this._icon), In)
                ) {
                  var t = this.options.draggable;
                  this.dragging && ((t = this.dragging.enabled()), this.dragging.disable()),
                    (this.dragging = new In(this)),
                    t && this.dragging.enable();
                }
              },
              setOpacity: function (t) {
                return (this.options.opacity = t), this._map && this._updateOpacity(), this;
              },
              _updateOpacity: function () {
                var t = this.options.opacity;
                this._icon && de(this._icon, t), this._shadow && de(this._shadow, t);
              },
              _bringToFront: function () {
                this._updateZIndex(this.options.riseOffset);
              },
              _resetZIndex: function () {
                this._updateZIndex(0);
              },
              _panOnFocus: function () {
                var t = this._map;
                if (t) {
                  var e = this.options.icon.options,
                    n = e.iconSize ? z(e.iconSize) : z(0, 0),
                    r = e.iconAnchor ? z(e.iconAnchor) : z(0, 0);
                  t.panInside(this._latlng, {
                    paddingTopLeft: r,
                    paddingBottomRight: n.subtract(r),
                  });
                }
              },
              _getPopupAnchor: function () {
                return this.options.icon.options.popupAnchor;
              },
              _getTooltipAnchor: function () {
                return this.options.icon.options.tooltipAnchor;
              },
            });
          var Cn = Tn.extend({
              options: {
                stroke: !0,
                color: '#3388ff',
                weight: 3,
                opacity: 1,
                lineCap: 'round',
                lineJoin: 'round',
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: 0.2,
                fillRule: 'evenodd',
                interactive: !0,
                bubblingMouseEvents: !0,
              },
              beforeAdd: function (t) {
                this._renderer = t.getRenderer(this);
              },
              onAdd: function () {
                this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
              },
              onRemove: function () {
                this._renderer._removePath(this);
              },
              redraw: function () {
                return this._map && this._renderer._updatePath(this), this;
              },
              setStyle: function (t) {
                return (
                  f(this, t),
                  this._renderer &&
                    (this._renderer._updateStyle(this),
                    this.options.stroke &&
                      t &&
                      Object.prototype.hasOwnProperty.call(t, 'weight') &&
                      this._updateBounds()),
                  this
                );
              },
              bringToFront: function () {
                return this._renderer && this._renderer._bringToFront(this), this;
              },
              bringToBack: function () {
                return this._renderer && this._renderer._bringToBack(this), this;
              },
              getElement: function () {
                return this._path;
              },
              _reset: function () {
                this._project(), this._update();
              },
              _clickTolerance: function () {
                return (
                  (this.options.stroke ? this.options.weight / 2 : 0) +
                  (this._renderer.options.tolerance || 0)
                );
              },
            }),
            Bn = Cn.extend({
              options: { fill: !0, radius: 10 },
              initialize: function (t, e) {
                f(this, e), (this._latlng = R(t)), (this._radius = this.options.radius);
              },
              setLatLng: function (t) {
                var e = this._latlng;
                return (
                  (this._latlng = R(t)),
                  this.redraw(),
                  this.fire('move', { oldLatLng: e, latlng: this._latlng })
                );
              },
              getLatLng: function () {
                return this._latlng;
              },
              setRadius: function (t) {
                return (this.options.radius = this._radius = t), this.redraw();
              },
              getRadius: function () {
                return this._radius;
              },
              setStyle: function (t) {
                var e = (t && t.radius) || this._radius;
                return Cn.prototype.setStyle.call(this, t), this.setRadius(e), this;
              },
              _project: function () {
                (this._point = this._map.latLngToLayerPoint(this._latlng)), this._updateBounds();
              },
              _updateBounds: function () {
                var t = this._radius,
                  e = this._radiusY || t,
                  n = this._clickTolerance(),
                  r = [t + n, e + n];
                this._pxBounds = new C(this._point.subtract(r), this._point.add(r));
              },
              _update: function () {
                this._map && this._updatePath();
              },
              _updatePath: function () {
                this._renderer._updateCircle(this);
              },
              _empty: function () {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
              },
              _containsPoint: function (t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
              },
            });
          var An = Bn.extend({
            initialize: function (t, n, r) {
              if (
                ('number' == typeof n && (n = e({}, r, { radius: n })),
                f(this, n),
                (this._latlng = R(t)),
                isNaN(this.options.radius))
              )
                throw new Error('Circle radius cannot be NaN');
              this._mRadius = this.options.radius;
            },
            setRadius: function (t) {
              return (this._mRadius = t), this.redraw();
            },
            getRadius: function () {
              return this._mRadius;
            },
            getBounds: function () {
              var t = [this._radius, this._radiusY || this._radius];
              return new A(
                this._map.layerPointToLatLng(this._point.subtract(t)),
                this._map.layerPointToLatLng(this._point.add(t)),
              );
            },
            setStyle: Cn.prototype.setStyle,
            _project: function () {
              var t = this._latlng.lng,
                e = this._latlng.lat,
                n = this._map,
                r = n.options.crs;
              if (r.distance === G.distance) {
                var i = Math.PI / 180,
                  o = this._mRadius / G.R / i,
                  a = n.project([e + o, t]),
                  s = n.project([e - o, t]),
                  c = a.add(s).divideBy(2),
                  u = n.unproject(c).lat,
                  h =
                    Math.acos(
                      (Math.cos(o * i) - Math.sin(e * i) * Math.sin(u * i)) /
                        (Math.cos(e * i) * Math.cos(u * i)),
                    ) / i;
                (isNaN(h) || 0 === h) && (h = o / Math.cos((Math.PI / 180) * e)),
                  (this._point = c.subtract(n.getPixelOrigin())),
                  (this._radius = isNaN(h) ? 0 : c.x - n.project([u, t - h]).x),
                  (this._radiusY = c.y - a.y);
              } else {
                var l = r.unproject(r.project(this._latlng).subtract([this._mRadius, 0]));
                (this._point = n.latLngToLayerPoint(this._latlng)),
                  (this._radius = this._point.x - n.latLngToLayerPoint(l).x);
              }
              this._updateBounds();
            },
          });
          var Nn = Cn.extend({
            options: { smoothFactor: 1, noClip: !1 },
            initialize: function (t, e) {
              f(this, e), this._setLatLngs(t);
            },
            getLatLngs: function () {
              return this._latlngs;
            },
            setLatLngs: function (t) {
              return this._setLatLngs(t), this.redraw();
            },
            isEmpty: function () {
              return !this._latlngs.length;
            },
            closestLayerPoint: function (t) {
              for (var e, n, r = 1 / 0, i = null, o = vn, a = 0, s = this._parts.length; a < s; a++)
                for (var c = this._parts[a], u = 1, h = c.length; u < h; u++) {
                  var l = o(t, (e = c[u - 1]), (n = c[u]), !0);
                  l < r && ((r = l), (i = o(t, e, n)));
                }
              return i && (i.distance = Math.sqrt(r)), i;
            },
            getCenter: function () {
              if (!this._map) throw new Error('Must add layer to map before using getCenter()');
              return gn(this._defaultShape(), this._map.options.crs);
            },
            getBounds: function () {
              return this._bounds;
            },
            addLatLng: function (t, e) {
              return (
                (e = e || this._defaultShape()),
                (t = R(t)),
                e.push(t),
                this._bounds.extend(t),
                this.redraw()
              );
            },
            _setLatLngs: function (t) {
              (this._bounds = new A()), (this._latlngs = this._convertLatLngs(t));
            },
            _defaultShape: function () {
              return yn(this._latlngs) ? this._latlngs : this._latlngs[0];
            },
            _convertLatLngs: function (t) {
              for (var e = [], n = yn(t), r = 0, i = t.length; r < i; r++)
                n
                  ? ((e[r] = R(t[r])), this._bounds.extend(e[r]))
                  : (e[r] = this._convertLatLngs(t[r]));
              return e;
            },
            _project: function () {
              var t = new C();
              (this._rings = []),
                this._projectLatlngs(this._latlngs, this._rings, t),
                this._bounds.isValid() &&
                  t.isValid() &&
                  ((this._rawPxBounds = t), this._updateBounds());
            },
            _updateBounds: function () {
              var t = this._clickTolerance(),
                e = new j(t, t);
              this._rawPxBounds &&
                (this._pxBounds = new C([
                  this._rawPxBounds.min.subtract(e),
                  this._rawPxBounds.max.add(e),
                ]));
            },
            _projectLatlngs: function (t, e, n) {
              var r,
                i,
                o = t[0] instanceof Z,
                a = t.length;
              if (o) {
                for (i = [], r = 0; r < a; r++)
                  (i[r] = this._map.latLngToLayerPoint(t[r])), n.extend(i[r]);
                e.push(i);
              } else for (r = 0; r < a; r++) this._projectLatlngs(t[r], e, n);
            },
            _clipPoints: function () {
              var t = this._renderer._bounds;
              if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
                if (this.options.noClip) this._parts = this._rings;
                else {
                  var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    c = this._parts;
                  for (e = 0, r = 0, i = this._rings.length; e < i; e++)
                    for (n = 0, o = (s = this._rings[e]).length; n < o - 1; n++)
                      (a = fn(s[n], s[n + 1], t, n, !0)) &&
                        ((c[r] = c[r] || []),
                        c[r].push(a[0]),
                        (a[1] === s[n + 1] && n !== o - 2) || (c[r].push(a[1]), r++));
                }
            },
            _simplifyPoints: function () {
              for (
                var t = this._parts, e = this.options.smoothFactor, n = 0, r = t.length;
                n < r;
                n++
              )
                t[n] = un(t[n], e);
            },
            _update: function () {
              this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
            },
            _updatePath: function () {
              this._renderer._updatePoly(this);
            },
            _containsPoint: function (t, e) {
              var n,
                r,
                i,
                o,
                a,
                s,
                c = this._clickTolerance();
              if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
              for (n = 0, o = this._parts.length; n < o; n++)
                for (r = 0, i = (a = (s = this._parts[n]).length) - 1; r < a; i = r++)
                  if ((e || 0 !== r) && hn(t, s[i], s[r]) <= c) return !0;
              return !1;
            },
          });
          Nn._flat = _n;
          var Zn = Nn.extend({
            options: { fill: !0 },
            isEmpty: function () {
              return !this._latlngs.length || !this._latlngs[0].length;
            },
            getCenter: function () {
              if (!this._map) throw new Error('Must add layer to map before using getCenter()');
              return on(this._defaultShape(), this._map.options.crs);
            },
            _convertLatLngs: function (t) {
              var e = Nn.prototype._convertLatLngs.call(this, t),
                n = e.length;
              return n >= 2 && e[0] instanceof Z && e[0].equals(e[n - 1]) && e.pop(), e;
            },
            _setLatLngs: function (t) {
              Nn.prototype._setLatLngs.call(this, t),
                yn(this._latlngs) && (this._latlngs = [this._latlngs]);
            },
            _defaultShape: function () {
              return yn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
            },
            _clipPoints: function () {
              var t = this._renderer._bounds,
                e = this.options.weight,
                n = new j(e, e);
              if (
                ((t = new C(t.min.subtract(n), t.max.add(n))),
                (this._parts = []),
                this._pxBounds && this._pxBounds.intersects(t))
              )
                if (this.options.noClip) this._parts = this._rings;
                else
                  for (var r, i = 0, o = this._rings.length; i < o; i++)
                    (r = rn(this._rings[i], t, !0)).length && this._parts.push(r);
            },
            _updatePath: function () {
              this._renderer._updatePoly(this, !0);
            },
            _containsPoint: function (t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                s,
                c,
                u = !1;
              if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
              for (i = 0, s = this._parts.length; i < s; i++)
                for (o = 0, a = (c = (e = this._parts[i]).length) - 1; o < c; a = o++)
                  (n = e[o]),
                    (r = e[a]),
                    n.y > t.y != r.y > t.y &&
                      t.x < ((r.x - n.x) * (t.y - n.y)) / (r.y - n.y) + n.x &&
                      (u = !u);
              return u || Nn.prototype._containsPoint.call(this, t, !0);
            },
          });
          var Rn = On.extend({
            initialize: function (t, e) {
              f(this, e), (this._layers = {}), t && this.addData(t);
            },
            addData: function (t) {
              var e,
                n,
                r,
                i = v(t) ? t : t.features;
              if (i) {
                for (e = 0, n = i.length; e < n; e++)
                  ((r = i[e]).geometries || r.geometry || r.features || r.coordinates) &&
                    this.addData(r);
                return this;
              }
              var o = this.options;
              if (o.filter && !o.filter(t)) return this;
              var a = Dn(t, o);
              return a
                ? ((a.feature = Vn(t)),
                  (a.defaultOptions = a.options),
                  this.resetStyle(a),
                  o.onEachFeature && o.onEachFeature(t, a),
                  this.addLayer(a))
                : this;
            },
            resetStyle: function (t) {
              return void 0 === t
                ? this.eachLayer(this.resetStyle, this)
                : ((t.options = e({}, t.defaultOptions)),
                  this._setLayerStyle(t, this.options.style),
                  this);
            },
            setStyle: function (t) {
              return this.eachLayer(function (e) {
                this._setLayerStyle(e, t);
              }, this);
            },
            _setLayerStyle: function (t, e) {
              t.setStyle && ('function' == typeof e && (e = e(t.feature)), t.setStyle(e));
            },
          });
          function Dn(t, e) {
            var n,
              r,
              i,
              o,
              a = 'Feature' === t.type ? t.geometry : t,
              s = a ? a.coordinates : null,
              c = [],
              u = e && e.pointToLayer,
              h = (e && e.coordsToLatLng) || Gn;
            if (!s && !a) return null;
            switch (a.type) {
              case 'Point':
                return Fn(u, t, (n = h(s)), e);
              case 'MultiPoint':
                for (i = 0, o = s.length; i < o; i++) (n = h(s[i])), c.push(Fn(u, t, n, e));
                return new On(c);
              case 'LineString':
              case 'MultiLineString':
                return (r = Wn(s, 'LineString' === a.type ? 0 : 1, h)), new Nn(r, e);
              case 'Polygon':
              case 'MultiPolygon':
                return (r = Wn(s, 'Polygon' === a.type ? 1 : 2, h)), new Zn(r, e);
              case 'GeometryCollection':
                for (i = 0, o = a.geometries.length; i < o; i++) {
                  var l = Dn(
                    { geometry: a.geometries[i], type: 'Feature', properties: t.properties },
                    e,
                  );
                  l && c.push(l);
                }
                return new On(c);
              case 'FeatureCollection':
                for (i = 0, o = a.features.length; i < o; i++) {
                  var f = Dn(a.features[i], e);
                  f && c.push(f);
                }
                return new On(c);
              default:
                throw new Error('Invalid GeoJSON object.');
            }
          }
          function Fn(t, e, n, r) {
            return t ? t(e, n) : new zn(n, r && r.markersInheritOptions && r);
          }
          function Gn(t) {
            return new Z(t[1], t[0], t[2]);
          }
          function Wn(t, e, n) {
            for (var r, i = [], o = 0, a = t.length; o < a; o++)
              (r = e ? Wn(t[o], e - 1, n) : (n || Gn)(t[o])), i.push(r);
            return i;
          }
          function Hn(t, e) {
            return void 0 !== (t = R(t)).alt
              ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)]
              : [u(t.lng, e), u(t.lat, e)];
          }
          function Un(t, e, n, r) {
            for (var i = [], o = 0, a = t.length; o < a; o++)
              i.push(e ? Un(t[o], yn(t[o]) ? 0 : e - 1, n, r) : Hn(t[o], r));
            return !e && n && i.length > 0 && i.push(i[0].slice()), i;
          }
          function Yn(t, n) {
            return t.feature ? e({}, t.feature, { geometry: n }) : Vn(n);
          }
          function Vn(t) {
            return 'Feature' === t.type || 'FeatureCollection' === t.type
              ? t
              : { type: 'Feature', properties: {}, geometry: t };
          }
          var qn = {
            toGeoJSON: function (t) {
              return Yn(this, { type: 'Point', coordinates: Hn(this.getLatLng(), t) });
            },
          };
          function Kn(t, e) {
            return new Rn(t, e);
          }
          zn.include(qn),
            An.include(qn),
            Bn.include(qn),
            Nn.include({
              toGeoJSON: function (t) {
                var e = !yn(this._latlngs);
                return Yn(this, {
                  type: (e ? 'Multi' : '') + 'LineString',
                  coordinates: Un(this._latlngs, e ? 1 : 0, !1, t),
                });
              },
            }),
            Zn.include({
              toGeoJSON: function (t) {
                var e = !yn(this._latlngs),
                  n = e && !yn(this._latlngs[0]),
                  r = Un(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
                return (
                  e || (r = [r]), Yn(this, { type: (n ? 'Multi' : '') + 'Polygon', coordinates: r })
                );
              },
            }),
            Sn.include({
              toMultiPoint: function (t) {
                var e = [];
                return (
                  this.eachLayer(function (n) {
                    e.push(n.toGeoJSON(t).geometry.coordinates);
                  }),
                  Yn(this, { type: 'MultiPoint', coordinates: e })
                );
              },
              toGeoJSON: function (t) {
                var e = this.feature && this.feature.geometry && this.feature.geometry.type;
                if ('MultiPoint' === e) return this.toMultiPoint(t);
                var n = 'GeometryCollection' === e,
                  r = [];
                return (
                  this.eachLayer(function (e) {
                    if (e.toGeoJSON) {
                      var i = e.toGeoJSON(t);
                      if (n) r.push(i.geometry);
                      else {
                        var o = Vn(i);
                        'FeatureCollection' === o.type ? r.push.apply(r, o.features) : r.push(o);
                      }
                    }
                  }),
                  n
                    ? Yn(this, { geometries: r, type: 'GeometryCollection' })
                    : { type: 'FeatureCollection', features: r }
                );
              },
            });
          var Jn = Kn,
            Xn = Tn.extend({
              options: {
                opacity: 1,
                alt: '',
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: '',
                zIndex: 1,
                className: '',
              },
              initialize: function (t, e, n) {
                (this._url = t), (this._bounds = N(e)), f(this, n);
              },
              onAdd: function () {
                this._image ||
                  (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
                  this.options.interactive &&
                    (he(this._image, 'leaflet-interactive'),
                    this.addInteractiveTarget(this._image)),
                  this.getPane().appendChild(this._image),
                  this._reset();
              },
              onRemove: function () {
                oe(this._image),
                  this.options.interactive && this.removeInteractiveTarget(this._image);
              },
              setOpacity: function (t) {
                return (this.options.opacity = t), this._image && this._updateOpacity(), this;
              },
              setStyle: function (t) {
                return t.opacity && this.setOpacity(t.opacity), this;
              },
              bringToFront: function () {
                return this._map && se(this._image), this;
              },
              bringToBack: function () {
                return this._map && ce(this._image), this;
              },
              setUrl: function (t) {
                return (this._url = t), this._image && (this._image.src = t), this;
              },
              setBounds: function (t) {
                return (this._bounds = N(t)), this._map && this._reset(), this;
              },
              getEvents: function () {
                var t = { zoom: this._reset, viewreset: this._reset };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
              },
              setZIndex: function (t) {
                return (this.options.zIndex = t), this._updateZIndex(), this;
              },
              getBounds: function () {
                return this._bounds;
              },
              getElement: function () {
                return this._image;
              },
              _initImage: function () {
                var t = 'IMG' === this._url.tagName,
                  e = (this._image = t ? this._url : ie('img'));
                he(e, 'leaflet-image-layer'),
                  this._zoomAnimated && he(e, 'leaflet-zoom-animated'),
                  this.options.className && he(e, this.options.className),
                  (e.onselectstart = c),
                  (e.onmousemove = c),
                  (e.onload = r(this.fire, this, 'load')),
                  (e.onerror = r(this._overlayOnError, this, 'error')),
                  (this.options.crossOrigin || '' === this.options.crossOrigin) &&
                    (e.crossOrigin =
                      !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
                  this.options.zIndex && this._updateZIndex(),
                  t ? (this._url = e.src) : ((e.src = this._url), (e.alt = this.options.alt));
              },
              _animateZoom: function (t) {
                var e = this._map.getZoomScale(t.zoom),
                  n = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                ve(this._image, n, e);
              },
              _reset: function () {
                var t = this._image,
                  e = new C(
                    this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                    this._map.latLngToLayerPoint(this._bounds.getSouthEast()),
                  ),
                  n = e.getSize();
                ye(t, e.min), (t.style.width = n.x + 'px'), (t.style.height = n.y + 'px');
              },
              _updateOpacity: function () {
                de(this._image, this.options.opacity);
              },
              _updateZIndex: function () {
                this._image &&
                  void 0 !== this.options.zIndex &&
                  null !== this.options.zIndex &&
                  (this._image.style.zIndex = this.options.zIndex);
              },
              _overlayOnError: function () {
                this.fire('error');
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && ((this._url = t), (this._image.src = t));
              },
              getCenter: function () {
                return this._bounds.getCenter();
              },
            }),
            $n = Xn.extend({
              options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1, playsInline: !0 },
              _initImage: function () {
                var t = 'VIDEO' === this._url.tagName,
                  e = (this._image = t ? this._url : ie('video'));
                if (
                  (he(e, 'leaflet-image-layer'),
                  this._zoomAnimated && he(e, 'leaflet-zoom-animated'),
                  this.options.className && he(e, this.options.className),
                  (e.onselectstart = c),
                  (e.onmousemove = c),
                  (e.onloadeddata = r(this.fire, this, 'load')),
                  t)
                ) {
                  for (var n = e.getElementsByTagName('source'), i = [], o = 0; o < n.length; o++)
                    i.push(n[o].src);
                  this._url = n.length > 0 ? i : [e.src];
                } else {
                  v(this._url) || (this._url = [this._url]),
                    !this.options.keepAspectRatio &&
                      Object.prototype.hasOwnProperty.call(e.style, 'objectFit') &&
                      (e.style.objectFit = 'fill'),
                    (e.autoplay = !!this.options.autoplay),
                    (e.loop = !!this.options.loop),
                    (e.muted = !!this.options.muted),
                    (e.playsInline = !!this.options.playsInline);
                  for (var a = 0; a < this._url.length; a++) {
                    var s = ie('source');
                    (s.src = this._url[a]), e.appendChild(s);
                  }
                }
              },
            });
          var Qn = Xn.extend({
            _initImage: function () {
              var t = (this._image = this._url);
              he(t, 'leaflet-image-layer'),
                this._zoomAnimated && he(t, 'leaflet-zoom-animated'),
                this.options.className && he(t, this.options.className),
                (t.onselectstart = c),
                (t.onmousemove = c);
            },
          });
          var tr = Tn.extend({
            options: { interactive: !1, offset: [0, 0], className: '', pane: void 0, content: '' },
            initialize: function (t, e) {
              t && (t instanceof Z || v(t))
                ? ((this._latlng = R(t)), f(this, e))
                : (f(this, t), (this._source = e)),
                this.options.content && (this._content = this.options.content);
            },
            openOn: function (t) {
              return (
                (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this),
                this
              );
            },
            close: function () {
              return this._map && this._map.removeLayer(this), this;
            },
            toggle: function (t) {
              return (
                this._map
                  ? this.close()
                  : (arguments.length ? (this._source = t) : (t = this._source),
                    this._prepareOpen(),
                    this.openOn(t._map)),
                this
              );
            },
            onAdd: function (t) {
              (this._zoomAnimated = t._zoomAnimated),
                this._container || this._initLayout(),
                t._fadeAnimated && de(this._container, 0),
                clearTimeout(this._removeTimeout),
                this.getPane().appendChild(this._container),
                this.update(),
                t._fadeAnimated && de(this._container, 1),
                this.bringToFront(),
                this.options.interactive &&
                  (he(this._container, 'leaflet-interactive'),
                  this.addInteractiveTarget(this._container));
            },
            onRemove: function (t) {
              t._fadeAnimated
                ? (de(this._container, 0),
                  (this._removeTimeout = setTimeout(r(oe, void 0, this._container), 200)))
                : oe(this._container),
                this.options.interactive &&
                  (le(this._container, 'leaflet-interactive'),
                  this.removeInteractiveTarget(this._container));
            },
            getLatLng: function () {
              return this._latlng;
            },
            setLatLng: function (t) {
              return (
                (this._latlng = R(t)),
                this._map && (this._updatePosition(), this._adjustPan()),
                this
              );
            },
            getContent: function () {
              return this._content;
            },
            setContent: function (t) {
              return (this._content = t), this.update(), this;
            },
            getElement: function () {
              return this._container;
            },
            update: function () {
              this._map &&
                ((this._container.style.visibility = 'hidden'),
                this._updateContent(),
                this._updateLayout(),
                this._updatePosition(),
                (this._container.style.visibility = ''),
                this._adjustPan());
            },
            getEvents: function () {
              var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
              return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
            },
            isOpen: function () {
              return !!this._map && this._map.hasLayer(this);
            },
            bringToFront: function () {
              return this._map && se(this._container), this;
            },
            bringToBack: function () {
              return this._map && ce(this._container), this;
            },
            _prepareOpen: function (t) {
              var e = this._source;
              if (!e._map) return !1;
              if (e instanceof On) {
                e = null;
                var n = this._source._layers;
                for (var r in n)
                  if (n[r]._map) {
                    e = n[r];
                    break;
                  }
                if (!e) return !1;
                this._source = e;
              }
              if (!t)
                if (e.getCenter) t = e.getCenter();
                else if (e.getLatLng) t = e.getLatLng();
                else {
                  if (!e.getBounds) throw new Error('Unable to get source layer LatLng.');
                  t = e.getBounds().getCenter();
                }
              return this.setLatLng(t), this._map && this.update(), !0;
            },
            _updateContent: function () {
              if (this._content) {
                var t = this._contentNode,
                  e =
                    'function' == typeof this._content
                      ? this._content(this._source || this)
                      : this._content;
                if ('string' == typeof e) t.innerHTML = e;
                else {
                  for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
                  t.appendChild(e);
                }
                this.fire('contentupdate');
              }
            },
            _updatePosition: function () {
              if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng),
                  e = z(this.options.offset),
                  n = this._getAnchor();
                this._zoomAnimated ? ye(this._container, t.add(n)) : (e = e.add(t).add(n));
                var r = (this._containerBottom = -e.y),
                  i = (this._containerLeft = -Math.round(this._containerWidth / 2) + e.x);
                (this._container.style.bottom = r + 'px'), (this._container.style.left = i + 'px');
              }
            },
            _getAnchor: function () {
              return [0, 0];
            },
          });
          Ye.include({
            _initOverlay: function (t, e, n, r) {
              var i = e;
              return i instanceof t || (i = new t(r).setContent(e)), n && i.setLatLng(n), i;
            },
          }),
            Tn.include({
              _initOverlay: function (t, e, n, r) {
                var i = n;
                return (
                  i instanceof t
                    ? (f(i, r), (i._source = this))
                    : (i = e && !r ? e : new t(r, this)).setContent(n),
                  i
                );
              },
            });
          var er = tr.extend({
            options: {
              pane: 'popupPane',
              offset: [0, 7],
              maxWidth: 300,
              minWidth: 50,
              maxHeight: null,
              autoPan: !0,
              autoPanPaddingTopLeft: null,
              autoPanPaddingBottomRight: null,
              autoPanPadding: [5, 5],
              keepInView: !1,
              closeButton: !0,
              autoClose: !0,
              closeOnEscapeKey: !0,
              className: '',
            },
            openOn: function (t) {
              return (
                !(t = arguments.length ? t : this._source._map).hasLayer(this) &&
                  t._popup &&
                  t._popup.options.autoClose &&
                  t.removeLayer(t._popup),
                (t._popup = this),
                tr.prototype.openOn.call(this, t)
              );
            },
            onAdd: function (t) {
              tr.prototype.onAdd.call(this, t),
                t.fire('popupopen', { popup: this }),
                this._source &&
                  (this._source.fire('popupopen', { popup: this }, !0),
                  this._source instanceof Cn || this._source.on('preclick', Ce));
            },
            onRemove: function (t) {
              tr.prototype.onRemove.call(this, t),
                t.fire('popupclose', { popup: this }),
                this._source &&
                  (this._source.fire('popupclose', { popup: this }, !0),
                  this._source instanceof Cn || this._source.off('preclick', Ce));
            },
            getEvents: function () {
              var t = tr.prototype.getEvents.call(this);
              return (
                (void 0 !== this.options.closeOnClick
                  ? this.options.closeOnClick
                  : this._map.options.closePopupOnClick) && (t.preclick = this.close),
                this.options.keepInView && (t.moveend = this._adjustPan),
                t
              );
            },
            _initLayout: function () {
              var t = 'leaflet-popup',
                e = (this._container = ie(
                  'div',
                  t + ' ' + (this.options.className || '') + ' leaflet-zoom-animated',
                )),
                n = (this._wrapper = ie('div', t + '-content-wrapper', e));
              if (
                ((this._contentNode = ie('div', t + '-content', n)),
                Ae(e),
                Be(this._contentNode),
                Te(e, 'contextmenu', Ce),
                (this._tipContainer = ie('div', t + '-tip-container', e)),
                (this._tip = ie('div', t + '-tip', this._tipContainer)),
                this.options.closeButton)
              ) {
                var r = (this._closeButton = ie('a', t + '-close-button', e));
                r.setAttribute('role', 'button'),
                  r.setAttribute('aria-label', 'Close popup'),
                  (r.href = '#close'),
                  (r.innerHTML = '<span aria-hidden="true">&#215;</span>'),
                  Te(
                    r,
                    'click',
                    function (t) {
                      Ne(t), this.close();
                    },
                    this,
                  );
              }
            },
            _updateLayout: function () {
              var t = this._contentNode,
                e = t.style;
              (e.width = ''), (e.whiteSpace = 'nowrap');
              var n = t.offsetWidth;
              (n = Math.min(n, this.options.maxWidth)),
                (n = Math.max(n, this.options.minWidth)),
                (e.width = n + 1 + 'px'),
                (e.whiteSpace = ''),
                (e.height = '');
              var r = t.offsetHeight,
                i = this.options.maxHeight,
                o = 'leaflet-popup-scrolled';
              i && r > i ? ((e.height = i + 'px'), he(t, o)) : le(t, o),
                (this._containerWidth = this._container.offsetWidth);
            },
            _animateZoom: function (t) {
              var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                n = this._getAnchor();
              ye(this._container, e.add(n));
            },
            _adjustPan: function () {
              if (this.options.autoPan)
                if ((this._map._panAnim && this._map._panAnim.stop(), this._autopanning))
                  this._autopanning = !1;
                else {
                  var t = this._map,
                    e = parseInt(re(this._container, 'marginBottom'), 10) || 0,
                    n = this._container.offsetHeight + e,
                    r = this._containerWidth,
                    i = new j(this._containerLeft, -n - this._containerBottom);
                  i._add(_e(this._container));
                  var o = t.layerPointToContainerPoint(i),
                    a = z(this.options.autoPanPadding),
                    s = z(this.options.autoPanPaddingTopLeft || a),
                    c = z(this.options.autoPanPaddingBottomRight || a),
                    u = t.getSize(),
                    h = 0,
                    l = 0;
                  o.x + r + c.x > u.x && (h = o.x + r - u.x + c.x),
                    o.x - h - s.x < 0 && (h = o.x - s.x),
                    o.y + n + c.y > u.y && (l = o.y + n - u.y + c.y),
                    o.y - l - s.y < 0 && (l = o.y - s.y),
                    (h || l) &&
                      (this.options.keepInView && (this._autopanning = !0),
                      t.fire('autopanstart').panBy([h, l]));
                }
            },
            _getAnchor: function () {
              return z(
                this._source && this._source._getPopupAnchor
                  ? this._source._getPopupAnchor()
                  : [0, 0],
              );
            },
          });
          Ye.mergeOptions({ closePopupOnClick: !0 }),
            Ye.include({
              openPopup: function (t, e, n) {
                return this._initOverlay(er, t, e, n).openOn(this), this;
              },
              closePopup: function (t) {
                return (t = arguments.length ? t : this._popup) && t.close(), this;
              },
            }),
            Tn.include({
              bindPopup: function (t, e) {
                return (
                  (this._popup = this._initOverlay(er, this._popup, t, e)),
                  this._popupHandlersAdded ||
                    (this.on({
                      click: this._openPopup,
                      keypress: this._onKeyPress,
                      remove: this.closePopup,
                      move: this._movePopup,
                    }),
                    (this._popupHandlersAdded = !0)),
                  this
                );
              },
              unbindPopup: function () {
                return (
                  this._popup &&
                    (this.off({
                      click: this._openPopup,
                      keypress: this._onKeyPress,
                      remove: this.closePopup,
                      move: this._movePopup,
                    }),
                    (this._popupHandlersAdded = !1),
                    (this._popup = null)),
                  this
                );
              },
              openPopup: function (t) {
                return (
                  this._popup &&
                    (this instanceof On || (this._popup._source = this),
                    this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)),
                  this
                );
              },
              closePopup: function () {
                return this._popup && this._popup.close(), this;
              },
              togglePopup: function () {
                return this._popup && this._popup.toggle(this), this;
              },
              isPopupOpen: function () {
                return !!this._popup && this._popup.isOpen();
              },
              setPopupContent: function (t) {
                return this._popup && this._popup.setContent(t), this;
              },
              getPopup: function () {
                return this._popup;
              },
              _openPopup: function (t) {
                if (this._popup && this._map) {
                  Ze(t);
                  var e = t.layer || t.target;
                  this._popup._source !== e || e instanceof Cn
                    ? ((this._popup._source = e), this.openPopup(t.latlng))
                    : this._map.hasLayer(this._popup)
                      ? this.closePopup()
                      : this.openPopup(t.latlng);
                }
              },
              _movePopup: function (t) {
                this._popup.setLatLng(t.latlng);
              },
              _onKeyPress: function (t) {
                13 === t.originalEvent.keyCode && this._openPopup(t);
              },
            });
          var nr = tr.extend({
            options: {
              pane: 'tooltipPane',
              offset: [0, 0],
              direction: 'auto',
              permanent: !1,
              sticky: !1,
              opacity: 0.9,
            },
            onAdd: function (t) {
              tr.prototype.onAdd.call(this, t),
                this.setOpacity(this.options.opacity),
                t.fire('tooltipopen', { tooltip: this }),
                this._source &&
                  (this.addEventParent(this._source),
                  this._source.fire('tooltipopen', { tooltip: this }, !0));
            },
            onRemove: function (t) {
              tr.prototype.onRemove.call(this, t),
                t.fire('tooltipclose', { tooltip: this }),
                this._source &&
                  (this.removeEventParent(this._source),
                  this._source.fire('tooltipclose', { tooltip: this }, !0));
            },
            getEvents: function () {
              var t = tr.prototype.getEvents.call(this);
              return this.options.permanent || (t.preclick = this.close), t;
            },
            _initLayout: function () {
              var t =
                'leaflet-tooltip ' +
                (this.options.className || '') +
                ' leaflet-zoom-' +
                (this._zoomAnimated ? 'animated' : 'hide');
              (this._contentNode = this._container = ie('div', t)),
                this._container.setAttribute('role', 'tooltip'),
                this._container.setAttribute('id', 'leaflet-tooltip-' + o(this));
            },
            _updateLayout: function () {},
            _adjustPan: function () {},
            _setPosition: function (t) {
              var e,
                n,
                r = this._map,
                i = this._container,
                o = r.latLngToContainerPoint(r.getCenter()),
                a = r.layerPointToContainerPoint(t),
                s = this.options.direction,
                c = i.offsetWidth,
                u = i.offsetHeight,
                h = z(this.options.offset),
                l = this._getAnchor();
              'top' === s
                ? ((e = c / 2), (n = u))
                : 'bottom' === s
                  ? ((e = c / 2), (n = 0))
                  : 'center' === s
                    ? ((e = c / 2), (n = u / 2))
                    : 'right' === s
                      ? ((e = 0), (n = u / 2))
                      : 'left' === s
                        ? ((e = c), (n = u / 2))
                        : a.x < o.x
                          ? ((s = 'right'), (e = 0), (n = u / 2))
                          : ((s = 'left'), (e = c + 2 * (h.x + l.x)), (n = u / 2)),
                (t = t
                  .subtract(z(e, n, !0))
                  .add(h)
                  .add(l)),
                le(i, 'leaflet-tooltip-right'),
                le(i, 'leaflet-tooltip-left'),
                le(i, 'leaflet-tooltip-top'),
                le(i, 'leaflet-tooltip-bottom'),
                he(i, 'leaflet-tooltip-' + s),
                ye(i, t);
            },
            _updatePosition: function () {
              var t = this._map.latLngToLayerPoint(this._latlng);
              this._setPosition(t);
            },
            setOpacity: function (t) {
              (this.options.opacity = t), this._container && de(this._container, t);
            },
            _animateZoom: function (t) {
              var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
              this._setPosition(e);
            },
            _getAnchor: function () {
              return z(
                this._source && this._source._getTooltipAnchor && !this.options.sticky
                  ? this._source._getTooltipAnchor()
                  : [0, 0],
              );
            },
          });
          Ye.include({
            openTooltip: function (t, e, n) {
              return this._initOverlay(nr, t, e, n).openOn(this), this;
            },
            closeTooltip: function (t) {
              return t.close(), this;
            },
          }),
            Tn.include({
              bindTooltip: function (t, e) {
                return (
                  this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
                  (this._tooltip = this._initOverlay(nr, this._tooltip, t, e)),
                  this._initTooltipInteractions(),
                  this._tooltip.options.permanent &&
                    this._map &&
                    this._map.hasLayer(this) &&
                    this.openTooltip(),
                  this
                );
              },
              unbindTooltip: function () {
                return (
                  this._tooltip &&
                    (this._initTooltipInteractions(!0),
                    this.closeTooltip(),
                    (this._tooltip = null)),
                  this
                );
              },
              _initTooltipInteractions: function (t) {
                if (t || !this._tooltipHandlersAdded) {
                  var e = t ? 'off' : 'on',
                    n = { remove: this.closeTooltip, move: this._moveTooltip };
                  this._tooltip.options.permanent
                    ? (n.add = this._openTooltip)
                    : ((n.mouseover = this._openTooltip),
                      (n.mouseout = this.closeTooltip),
                      (n.click = this._openTooltip),
                      this._map ? this._addFocusListeners() : (n.add = this._addFocusListeners)),
                    this._tooltip.options.sticky && (n.mousemove = this._moveTooltip),
                    this[e](n),
                    (this._tooltipHandlersAdded = !t);
                }
              },
              openTooltip: function (t) {
                return (
                  this._tooltip &&
                    (this instanceof On || (this._tooltip._source = this),
                    this._tooltip._prepareOpen(t) &&
                      (this._tooltip.openOn(this._map),
                      this.getElement
                        ? this._setAriaDescribedByOnLayer(this)
                        : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))),
                  this
                );
              },
              closeTooltip: function () {
                if (this._tooltip) return this._tooltip.close();
              },
              toggleTooltip: function () {
                return this._tooltip && this._tooltip.toggle(this), this;
              },
              isTooltipOpen: function () {
                return this._tooltip.isOpen();
              },
              setTooltipContent: function (t) {
                return this._tooltip && this._tooltip.setContent(t), this;
              },
              getTooltip: function () {
                return this._tooltip;
              },
              _addFocusListeners: function () {
                this.getElement
                  ? this._addFocusListenersOnLayer(this)
                  : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
              },
              _addFocusListenersOnLayer: function (t) {
                var e = 'function' == typeof t.getElement && t.getElement();
                e &&
                  (Te(
                    e,
                    'focus',
                    function () {
                      (this._tooltip._source = t), this.openTooltip();
                    },
                    this,
                  ),
                  Te(e, 'blur', this.closeTooltip, this));
              },
              _setAriaDescribedByOnLayer: function (t) {
                var e = 'function' == typeof t.getElement && t.getElement();
                e && e.setAttribute('aria-describedby', this._tooltip._container.id);
              },
              _openTooltip: function (t) {
                if (this._tooltip && this._map)
                  if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
                    this._openOnceFlag = !0;
                    var e = this;
                    this._map.once('moveend', function () {
                      (e._openOnceFlag = !1), e._openTooltip(t);
                    });
                  } else
                    (this._tooltip._source = t.layer || t.target),
                      this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
              },
              _moveTooltip: function (t) {
                var e,
                  n,
                  r = t.latlng;
                this._tooltip.options.sticky &&
                  t.originalEvent &&
                  ((e = this._map.mouseEventToContainerPoint(t.originalEvent)),
                  (n = this._map.containerPointToLayerPoint(e)),
                  (r = this._map.layerPointToLatLng(n))),
                  this._tooltip.setLatLng(r);
              },
            });
          var rr = Mn.extend({
            options: { iconSize: [12, 12], html: !1, bgPos: null, className: 'leaflet-div-icon' },
            createIcon: function (t) {
              var e = t && 'DIV' === t.tagName ? t : document.createElement('div'),
                n = this.options;
              if (
                (n.html instanceof Element
                  ? (ae(e), e.appendChild(n.html))
                  : (e.innerHTML = !1 !== n.html ? n.html : ''),
                n.bgPos)
              ) {
                var r = z(n.bgPos);
                e.style.backgroundPosition = -r.x + 'px ' + -r.y + 'px';
              }
              return this._setIconStyles(e, 'icon'), e;
            },
            createShadow: function () {
              return null;
            },
          });
          Mn.Default = jn;
          var ir = Tn.extend({
            options: {
              tileSize: 256,
              opacity: 1,
              updateWhenIdle: Ct.mobile,
              updateWhenZooming: !0,
              updateInterval: 200,
              zIndex: 1,
              bounds: null,
              minZoom: 0,
              maxZoom: void 0,
              maxNativeZoom: void 0,
              minNativeZoom: void 0,
              noWrap: !1,
              pane: 'tilePane',
              className: '',
              keepBuffer: 2,
            },
            initialize: function (t) {
              f(this, t);
            },
            onAdd: function () {
              this._initContainer(), (this._levels = {}), (this._tiles = {}), this._resetView();
            },
            beforeAdd: function (t) {
              t._addZoomLimit(this);
            },
            onRemove: function (t) {
              this._removeAllTiles(),
                oe(this._container),
                t._removeZoomLimit(this),
                (this._container = null),
                (this._tileZoom = void 0);
            },
            bringToFront: function () {
              return this._map && (se(this._container), this._setAutoZIndex(Math.max)), this;
            },
            bringToBack: function () {
              return this._map && (ce(this._container), this._setAutoZIndex(Math.min)), this;
            },
            getContainer: function () {
              return this._container;
            },
            setOpacity: function (t) {
              return (this.options.opacity = t), this._updateOpacity(), this;
            },
            setZIndex: function (t) {
              return (this.options.zIndex = t), this._updateZIndex(), this;
            },
            isLoading: function () {
              return this._loading;
            },
            redraw: function () {
              if (this._map) {
                this._removeAllTiles();
                var t = this._clampZoom(this._map.getZoom());
                t !== this._tileZoom && ((this._tileZoom = t), this._updateLevels()),
                  this._update();
              }
              return this;
            },
            getEvents: function () {
              var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd,
              };
              return (
                this.options.updateWhenIdle ||
                  (this._onMove ||
                    (this._onMove = a(this._onMoveEnd, this.options.updateInterval, this)),
                  (t.move = this._onMove)),
                this._zoomAnimated && (t.zoomanim = this._animateZoom),
                t
              );
            },
            createTile: function () {
              return document.createElement('div');
            },
            getTileSize: function () {
              var t = this.options.tileSize;
              return t instanceof j ? t : new j(t, t);
            },
            _updateZIndex: function () {
              this._container &&
                void 0 !== this.options.zIndex &&
                null !== this.options.zIndex &&
                (this._container.style.zIndex = this.options.zIndex);
            },
            _setAutoZIndex: function (t) {
              for (
                var e, n = this.getPane().children, r = -t(-1 / 0, 1 / 0), i = 0, o = n.length;
                i < o;
                i++
              )
                (e = n[i].style.zIndex), n[i] !== this._container && e && (r = t(r, +e));
              isFinite(r) && ((this.options.zIndex = r + t(-1, 1)), this._updateZIndex());
            },
            _updateOpacity: function () {
              if (this._map && !Ct.ielt9) {
                de(this._container, this.options.opacity);
                var t = +new Date(),
                  e = !1,
                  n = !1;
                for (var r in this._tiles) {
                  var i = this._tiles[r];
                  if (i.current && i.loaded) {
                    var o = Math.min(1, (t - i.loaded) / 200);
                    de(i.el, o),
                      o < 1
                        ? (e = !0)
                        : (i.active ? (n = !0) : this._onOpaqueTile(i), (i.active = !0));
                  }
                }
                n && !this._noPrune && this._pruneTiles(),
                  e && (k(this._fadeFrame), (this._fadeFrame = P(this._updateOpacity, this)));
              }
            },
            _onOpaqueTile: c,
            _initContainer: function () {
              this._container ||
                ((this._container = ie('div', 'leaflet-layer ' + (this.options.className || ''))),
                this._updateZIndex(),
                this.options.opacity < 1 && this._updateOpacity(),
                this.getPane().appendChild(this._container));
            },
            _updateLevels: function () {
              var t = this._tileZoom,
                e = this.options.maxZoom;
              if (void 0 !== t) {
                for (var n in this._levels)
                  (n = Number(n)),
                    this._levels[n].el.children.length || n === t
                      ? ((this._levels[n].el.style.zIndex = e - Math.abs(t - n)),
                        this._onUpdateLevel(n))
                      : (oe(this._levels[n].el),
                        this._removeTilesAtZoom(n),
                        this._onRemoveLevel(n),
                        delete this._levels[n]);
                var r = this._levels[t],
                  i = this._map;
                return (
                  r ||
                    (((r = this._levels[t] = {}).el = ie(
                      'div',
                      'leaflet-tile-container leaflet-zoom-animated',
                      this._container,
                    )),
                    (r.el.style.zIndex = e),
                    (r.origin = i.project(i.unproject(i.getPixelOrigin()), t).round()),
                    (r.zoom = t),
                    this._setZoomTransform(r, i.getCenter(), i.getZoom()),
                    r.el.offsetWidth,
                    this._onCreateLevel(r)),
                  (this._level = r),
                  r
                );
              }
            },
            _onUpdateLevel: c,
            _onRemoveLevel: c,
            _onCreateLevel: c,
            _pruneTiles: function () {
              if (this._map) {
                var t,
                  e,
                  n = this._map.getZoom();
                if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();
                else {
                  for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
                  for (t in this._tiles)
                    if ((e = this._tiles[t]).current && !e.active) {
                      var r = e.coords;
                      this._retainParent(r.x, r.y, r.z, r.z - 5) ||
                        this._retainChildren(r.x, r.y, r.z, r.z + 2);
                    }
                  for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
                }
              }
            },
            _removeTilesAtZoom: function (t) {
              for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
            },
            _removeAllTiles: function () {
              for (var t in this._tiles) this._removeTile(t);
            },
            _invalidateAll: function () {
              for (var t in this._levels)
                oe(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
              this._removeAllTiles(), (this._tileZoom = void 0);
            },
            _retainParent: function (t, e, n, r) {
              var i = Math.floor(t / 2),
                o = Math.floor(e / 2),
                a = n - 1,
                s = new j(+i, +o);
              s.z = +a;
              var c = this._tileCoordsToKey(s),
                u = this._tiles[c];
              return u && u.active
                ? ((u.retain = !0), !0)
                : (u && u.loaded && (u.retain = !0), a > r && this._retainParent(i, o, a, r));
            },
            _retainChildren: function (t, e, n, r) {
              for (var i = 2 * t; i < 2 * t + 2; i++)
                for (var o = 2 * e; o < 2 * e + 2; o++) {
                  var a = new j(i, o);
                  a.z = n + 1;
                  var s = this._tileCoordsToKey(a),
                    c = this._tiles[s];
                  c && c.active
                    ? (c.retain = !0)
                    : (c && c.loaded && (c.retain = !0),
                      n + 1 < r && this._retainChildren(i, o, n + 1, r));
                }
            },
            _resetView: function (t) {
              var e = t && (t.pinch || t.flyTo);
              this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
            },
            _animateZoom: function (t) {
              this._setView(t.center, t.zoom, !0, t.noUpdate);
            },
            _clampZoom: function (t) {
              var e = this.options;
              return void 0 !== e.minNativeZoom && t < e.minNativeZoom
                ? e.minNativeZoom
                : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t
                  ? e.maxNativeZoom
                  : t;
            },
            _setView: function (t, e, n, r) {
              var i = Math.round(e);
              i =
                (void 0 !== this.options.maxZoom && i > this.options.maxZoom) ||
                (void 0 !== this.options.minZoom && i < this.options.minZoom)
                  ? void 0
                  : this._clampZoom(i);
              var o = this.options.updateWhenZooming && i !== this._tileZoom;
              (r && !o) ||
                ((this._tileZoom = i),
                this._abortLoading && this._abortLoading(),
                this._updateLevels(),
                this._resetGrid(),
                void 0 !== i && this._update(t),
                n || this._pruneTiles(),
                (this._noPrune = !!n)),
                this._setZoomTransforms(t, e);
            },
            _setZoomTransforms: function (t, e) {
              for (var n in this._levels) this._setZoomTransform(this._levels[n], t, e);
            },
            _setZoomTransform: function (t, e, n) {
              var r = this._map.getZoomScale(n, t.zoom),
                i = t.origin.multiplyBy(r).subtract(this._map._getNewPixelOrigin(e, n)).round();
              Ct.any3d ? ve(t.el, i, r) : ye(t.el, i);
            },
            _resetGrid: function () {
              var t = this._map,
                e = t.options.crs,
                n = (this._tileSize = this.getTileSize()),
                r = this._tileZoom,
                i = this._map.getPixelWorldBounds(this._tileZoom);
              i && (this._globalTileRange = this._pxBoundsToTileRange(i)),
                (this._wrapX = e.wrapLng &&
                  !this.options.noWrap && [
                    Math.floor(t.project([0, e.wrapLng[0]], r).x / n.x),
                    Math.ceil(t.project([0, e.wrapLng[1]], r).x / n.y),
                  ]),
                (this._wrapY = e.wrapLat &&
                  !this.options.noWrap && [
                    Math.floor(t.project([e.wrapLat[0], 0], r).y / n.x),
                    Math.ceil(t.project([e.wrapLat[1], 0], r).y / n.y),
                  ]);
            },
            _onMoveEnd: function () {
              this._map && !this._map._animatingZoom && this._update();
            },
            _getTiledPixelBounds: function (t) {
              var e = this._map,
                n = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                r = e.getZoomScale(n, this._tileZoom),
                i = e.project(t, this._tileZoom).floor(),
                o = e.getSize().divideBy(2 * r);
              return new C(i.subtract(o), i.add(o));
            },
            _update: function (t) {
              var e = this._map;
              if (e) {
                var n = this._clampZoom(e.getZoom());
                if ((void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom)) {
                  var r = this._getTiledPixelBounds(t),
                    i = this._pxBoundsToTileRange(r),
                    o = i.getCenter(),
                    a = [],
                    s = this.options.keepBuffer,
                    c = new C(i.getBottomLeft().subtract([s, -s]), i.getTopRight().add([s, -s]));
                  if (
                    !(
                      isFinite(i.min.x) &&
                      isFinite(i.min.y) &&
                      isFinite(i.max.x) &&
                      isFinite(i.max.y)
                    )
                  )
                    throw new Error('Attempted to load an infinite number of tiles');
                  for (var u in this._tiles) {
                    var h = this._tiles[u].coords;
                    (h.z === this._tileZoom && c.contains(new j(h.x, h.y))) ||
                      (this._tiles[u].current = !1);
                  }
                  if (Math.abs(n - this._tileZoom) > 1) this._setView(t, n);
                  else {
                    for (var l = i.min.y; l <= i.max.y; l++)
                      for (var f = i.min.x; f <= i.max.x; f++) {
                        var p = new j(f, l);
                        if (((p.z = this._tileZoom), this._isValidTile(p))) {
                          var d = this._tiles[this._tileCoordsToKey(p)];
                          d ? (d.current = !0) : a.push(p);
                        }
                      }
                    if (
                      (a.sort(function (t, e) {
                        return t.distanceTo(o) - e.distanceTo(o);
                      }),
                      0 !== a.length)
                    ) {
                      this._loading || ((this._loading = !0), this.fire('loading'));
                      var m = document.createDocumentFragment();
                      for (f = 0; f < a.length; f++) this._addTile(a[f], m);
                      this._level.el.appendChild(m);
                    }
                  }
                }
              }
            },
            _isValidTile: function (t) {
              var e = this._map.options.crs;
              if (!e.infinite) {
                var n = this._globalTileRange;
                if (
                  (!e.wrapLng && (t.x < n.min.x || t.x > n.max.x)) ||
                  (!e.wrapLat && (t.y < n.min.y || t.y > n.max.y))
                )
                  return !1;
              }
              if (!this.options.bounds) return !0;
              var r = this._tileCoordsToBounds(t);
              return N(this.options.bounds).overlaps(r);
            },
            _keyToBounds: function (t) {
              return this._tileCoordsToBounds(this._keyToTileCoords(t));
            },
            _tileCoordsToNwSe: function (t) {
              var e = this._map,
                n = this.getTileSize(),
                r = t.scaleBy(n),
                i = r.add(n);
              return [e.unproject(r, t.z), e.unproject(i, t.z)];
            },
            _tileCoordsToBounds: function (t) {
              var e = this._tileCoordsToNwSe(t),
                n = new A(e[0], e[1]);
              return this.options.noWrap || (n = this._map.wrapLatLngBounds(n)), n;
            },
            _tileCoordsToKey: function (t) {
              return t.x + ':' + t.y + ':' + t.z;
            },
            _keyToTileCoords: function (t) {
              var e = t.split(':'),
                n = new j(+e[0], +e[1]);
              return (n.z = +e[2]), n;
            },
            _removeTile: function (t) {
              var e = this._tiles[t];
              e &&
                (oe(e.el),
                delete this._tiles[t],
                this.fire('tileunload', { tile: e.el, coords: this._keyToTileCoords(t) }));
            },
            _initTile: function (t) {
              he(t, 'leaflet-tile');
              var e = this.getTileSize();
              (t.style.width = e.x + 'px'),
                (t.style.height = e.y + 'px'),
                (t.onselectstart = c),
                (t.onmousemove = c),
                Ct.ielt9 && this.options.opacity < 1 && de(t, this.options.opacity);
            },
            _addTile: function (t, e) {
              var n = this._getTilePos(t),
                i = this._tileCoordsToKey(t),
                o = this.createTile(this._wrapCoords(t), r(this._tileReady, this, t));
              this._initTile(o),
                this.createTile.length < 2 && P(r(this._tileReady, this, t, null, o)),
                ye(o, n),
                (this._tiles[i] = { el: o, coords: t, current: !0 }),
                e.appendChild(o),
                this.fire('tileloadstart', { tile: o, coords: t });
            },
            _tileReady: function (t, e, n) {
              e && this.fire('tileerror', { error: e, tile: n, coords: t });
              var i = this._tileCoordsToKey(t);
              (n = this._tiles[i]) &&
                ((n.loaded = +new Date()),
                this._map._fadeAnimated
                  ? (de(n.el, 0),
                    k(this._fadeFrame),
                    (this._fadeFrame = P(this._updateOpacity, this)))
                  : ((n.active = !0), this._pruneTiles()),
                e ||
                  (he(n.el, 'leaflet-tile-loaded'),
                  this.fire('tileload', { tile: n.el, coords: t })),
                this._noTilesToLoad() &&
                  ((this._loading = !1),
                  this.fire('load'),
                  Ct.ielt9 || !this._map._fadeAnimated
                    ? P(this._pruneTiles, this)
                    : setTimeout(r(this._pruneTiles, this), 250)));
            },
            _getTilePos: function (t) {
              return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
            },
            _wrapCoords: function (t) {
              var e = new j(
                this._wrapX ? s(t.x, this._wrapX) : t.x,
                this._wrapY ? s(t.y, this._wrapY) : t.y,
              );
              return (e.z = t.z), e;
            },
            _pxBoundsToTileRange: function (t) {
              var e = this.getTileSize();
              return new C(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]));
            },
            _noTilesToLoad: function () {
              for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
              return !0;
            },
          });
          var or = ir.extend({
            options: {
              minZoom: 0,
              maxZoom: 18,
              subdomains: 'abc',
              errorTileUrl: '',
              zoomOffset: 0,
              tms: !1,
              zoomReverse: !1,
              detectRetina: !1,
              crossOrigin: !1,
              referrerPolicy: !1,
            },
            initialize: function (t, e) {
              (this._url = t),
                (e = f(this, e)).detectRetina && Ct.retina && e.maxZoom > 0
                  ? ((e.tileSize = Math.floor(e.tileSize / 2)),
                    e.zoomReverse
                      ? (e.zoomOffset--, (e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)))
                      : (e.zoomOffset++, (e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1))),
                    (e.minZoom = Math.max(0, e.minZoom)))
                  : e.zoomReverse
                    ? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
                    : (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
                'string' == typeof e.subdomains && (e.subdomains = e.subdomains.split('')),
                this.on('tileunload', this._onTileRemove);
            },
            setUrl: function (t, e) {
              return (
                this._url === t && void 0 === e && (e = !0),
                (this._url = t),
                e || this.redraw(),
                this
              );
            },
            createTile: function (t, e) {
              var n = document.createElement('img');
              return (
                Te(n, 'load', r(this._tileOnLoad, this, e, n)),
                Te(n, 'error', r(this._tileOnError, this, e, n)),
                (this.options.crossOrigin || '' === this.options.crossOrigin) &&
                  (n.crossOrigin = !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
                'string' == typeof this.options.referrerPolicy &&
                  (n.referrerPolicy = this.options.referrerPolicy),
                (n.alt = ''),
                (n.src = this.getTileUrl(t)),
                n
              );
            },
            getTileUrl: function (t) {
              var n = {
                r: Ct.retina ? '@2x' : '',
                s: this._getSubdomain(t),
                x: t.x,
                y: t.y,
                z: this._getZoomForUrl(),
              };
              if (this._map && !this._map.options.crs.infinite) {
                var r = this._globalTileRange.max.y - t.y;
                this.options.tms && (n.y = r), (n['-y'] = r);
              }
              return m(this._url, e(n, this.options));
            },
            _tileOnLoad: function (t, e) {
              Ct.ielt9 ? setTimeout(r(t, this, null, e), 0) : t(null, e);
            },
            _tileOnError: function (t, e, n) {
              var r = this.options.errorTileUrl;
              r && e.getAttribute('src') !== r && (e.src = r), t(n, e);
            },
            _onTileRemove: function (t) {
              t.tile.onload = null;
            },
            _getZoomForUrl: function () {
              var t = this._tileZoom,
                e = this.options.maxZoom;
              return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset;
            },
            _getSubdomain: function (t) {
              var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
              return this.options.subdomains[e];
            },
            _abortLoading: function () {
              var t, e;
              for (t in this._tiles)
                if (
                  this._tiles[t].coords.z !== this._tileZoom &&
                  (((e = this._tiles[t].el).onload = c), (e.onerror = c), !e.complete)
                ) {
                  e.src = _;
                  var n = this._tiles[t].coords;
                  oe(e), delete this._tiles[t], this.fire('tileabort', { tile: e, coords: n });
                }
            },
            _removeTile: function (t) {
              var e = this._tiles[t];
              if (e) return e.el.setAttribute('src', _), ir.prototype._removeTile.call(this, t);
            },
            _tileReady: function (t, e, n) {
              if (this._map && (!n || n.getAttribute('src') !== _))
                return ir.prototype._tileReady.call(this, t, e, n);
            },
          });
          function ar(t, e) {
            return new or(t, e);
          }
          var sr = or.extend({
            defaultWmsParams: {
              service: 'WMS',
              request: 'GetMap',
              layers: '',
              styles: '',
              format: 'image/jpeg',
              transparent: !1,
              version: '1.1.1',
            },
            options: { crs: null, uppercase: !1 },
            initialize: function (t, n) {
              this._url = t;
              var r = e({}, this.defaultWmsParams);
              for (var i in n) i in this.options || (r[i] = n[i]);
              var o = (n = f(this, n)).detectRetina && Ct.retina ? 2 : 1,
                a = this.getTileSize();
              (r.width = a.x * o), (r.height = a.y * o), (this.wmsParams = r);
            },
            onAdd: function (t) {
              (this._crs = this.options.crs || t.options.crs),
                (this._wmsVersion = parseFloat(this.wmsParams.version));
              var e = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
              (this.wmsParams[e] = this._crs.code), or.prototype.onAdd.call(this, t);
            },
            getTileUrl: function (t) {
              var e = this._tileCoordsToNwSe(t),
                n = this._crs,
                r = B(n.project(e[0]), n.project(e[1])),
                i = r.min,
                o = r.max,
                a = (
                  this._wmsVersion >= 1.3 && this._crs === Pn
                    ? [i.y, i.x, o.y, o.x]
                    : [i.x, i.y, o.x, o.y]
                ).join(','),
                s = or.prototype.getTileUrl.call(this, t);
              return (
                s +
                p(this.wmsParams, s, this.options.uppercase) +
                (this.options.uppercase ? '&BBOX=' : '&bbox=') +
                a
              );
            },
            setParams: function (t, n) {
              return e(this.wmsParams, t), n || this.redraw(), this;
            },
          });
          (or.WMS = sr),
            (ar.wms = function (t, e) {
              return new sr(t, e);
            });
          var cr = Tn.extend({
              options: { padding: 0.1 },
              initialize: function (t) {
                f(this, t), o(this), (this._layers = this._layers || {});
              },
              onAdd: function () {
                this._container ||
                  (this._initContainer(), he(this._container, 'leaflet-zoom-animated')),
                  this.getPane().appendChild(this._container),
                  this._update(),
                  this.on('update', this._updatePaths, this);
              },
              onRemove: function () {
                this.off('update', this._updatePaths, this), this._destroyContainer();
              },
              getEvents: function () {
                var t = {
                  viewreset: this._reset,
                  zoom: this._onZoom,
                  moveend: this._update,
                  zoomend: this._onZoomEnd,
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
              },
              _onAnimZoom: function (t) {
                this._updateTransform(t.center, t.zoom);
              },
              _onZoom: function () {
                this._updateTransform(this._map.getCenter(), this._map.getZoom());
              },
              _updateTransform: function (t, e) {
                var n = this._map.getZoomScale(e, this._zoom),
                  r = this._map.getSize().multiplyBy(0.5 + this.options.padding),
                  i = this._map.project(this._center, e),
                  o = r.multiplyBy(-n).add(i).subtract(this._map._getNewPixelOrigin(t, e));
                Ct.any3d ? ve(this._container, o, n) : ye(this._container, o);
              },
              _reset: function () {
                for (var t in (this._update(),
                this._updateTransform(this._center, this._zoom),
                this._layers))
                  this._layers[t]._reset();
              },
              _onZoomEnd: function () {
                for (var t in this._layers) this._layers[t]._project();
              },
              _updatePaths: function () {
                for (var t in this._layers) this._layers[t]._update();
              },
              _update: function () {
                var t = this.options.padding,
                  e = this._map.getSize(),
                  n = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                (this._bounds = new C(n, n.add(e.multiplyBy(1 + 2 * t)).round())),
                  (this._center = this._map.getCenter()),
                  (this._zoom = this._map.getZoom());
              },
            }),
            ur = cr.extend({
              options: { tolerance: 0 },
              getEvents: function () {
                var t = cr.prototype.getEvents.call(this);
                return (t.viewprereset = this._onViewPreReset), t;
              },
              _onViewPreReset: function () {
                this._postponeUpdatePaths = !0;
              },
              onAdd: function () {
                cr.prototype.onAdd.call(this), this._draw();
              },
              _initContainer: function () {
                var t = (this._container = document.createElement('canvas'));
                Te(t, 'mousemove', this._onMouseMove, this),
                  Te(t, 'click dblclick mousedown mouseup contextmenu', this._onClick, this),
                  Te(t, 'mouseout', this._handleMouseOut, this),
                  (t._leaflet_disable_events = !0),
                  (this._ctx = t.getContext('2d'));
              },
              _destroyContainer: function () {
                k(this._redrawRequest),
                  delete this._ctx,
                  oe(this._container),
                  Oe(this._container),
                  delete this._container;
              },
              _updatePaths: function () {
                if (!this._postponeUpdatePaths) {
                  for (var t in ((this._redrawBounds = null), this._layers))
                    this._layers[t]._update();
                  this._redraw();
                }
              },
              _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                  cr.prototype._update.call(this);
                  var t = this._bounds,
                    e = this._container,
                    n = t.getSize(),
                    r = Ct.retina ? 2 : 1;
                  ye(e, t.min),
                    (e.width = r * n.x),
                    (e.height = r * n.y),
                    (e.style.width = n.x + 'px'),
                    (e.style.height = n.y + 'px'),
                    Ct.retina && this._ctx.scale(2, 2),
                    this._ctx.translate(-t.min.x, -t.min.y),
                    this.fire('update');
                }
              },
              _reset: function () {
                cr.prototype._reset.call(this),
                  this._postponeUpdatePaths &&
                    ((this._postponeUpdatePaths = !1), this._updatePaths());
              },
              _initPath: function (t) {
                this._updateDashArray(t), (this._layers[o(t)] = t);
                var e = (t._order = { layer: t, prev: this._drawLast, next: null });
                this._drawLast && (this._drawLast.next = e),
                  (this._drawLast = e),
                  (this._drawFirst = this._drawFirst || this._drawLast);
              },
              _addPath: function (t) {
                this._requestRedraw(t);
              },
              _removePath: function (t) {
                var e = t._order,
                  n = e.next,
                  r = e.prev;
                n ? (n.prev = r) : (this._drawLast = r),
                  r ? (r.next = n) : (this._drawFirst = n),
                  delete t._order,
                  delete this._layers[o(t)],
                  this._requestRedraw(t);
              },
              _updatePath: function (t) {
                this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
              },
              _updateStyle: function (t) {
                this._updateDashArray(t), this._requestRedraw(t);
              },
              _updateDashArray: function (t) {
                if ('string' == typeof t.options.dashArray) {
                  var e,
                    n,
                    r = t.options.dashArray.split(/[, ]+/),
                    i = [];
                  for (n = 0; n < r.length; n++) {
                    if (((e = Number(r[n])), isNaN(e))) return;
                    i.push(e);
                  }
                  t.options._dashArray = i;
                } else t.options._dashArray = t.options.dashArray;
              },
              _requestRedraw: function (t) {
                this._map &&
                  (this._extendRedrawBounds(t),
                  (this._redrawRequest = this._redrawRequest || P(this._redraw, this)));
              },
              _extendRedrawBounds: function (t) {
                if (t._pxBounds) {
                  var e = (t.options.weight || 0) + 1;
                  (this._redrawBounds = this._redrawBounds || new C()),
                    this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                    this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
                }
              },
              _redraw: function () {
                (this._redrawRequest = null),
                  this._redrawBounds &&
                    (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
                  this._clear(),
                  this._draw(),
                  (this._redrawBounds = null);
              },
              _clear: function () {
                var t = this._redrawBounds;
                if (t) {
                  var e = t.getSize();
                  this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
                } else
                  this._ctx.save(),
                    this._ctx.setTransform(1, 0, 0, 1, 0, 0),
                    this._ctx.clearRect(0, 0, this._container.width, this._container.height),
                    this._ctx.restore();
              },
              _draw: function () {
                var t,
                  e = this._redrawBounds;
                if ((this._ctx.save(), e)) {
                  var n = e.getSize();
                  this._ctx.beginPath(),
                    this._ctx.rect(e.min.x, e.min.y, n.x, n.y),
                    this._ctx.clip();
                }
                this._drawing = !0;
                for (var r = this._drawFirst; r; r = r.next)
                  (t = r.layer),
                    (!e || (t._pxBounds && t._pxBounds.intersects(e))) && t._updatePath();
                (this._drawing = !1), this._ctx.restore();
              },
              _updatePoly: function (t, e) {
                if (this._drawing) {
                  var n,
                    r,
                    i,
                    o,
                    a = t._parts,
                    s = a.length,
                    c = this._ctx;
                  if (s) {
                    for (c.beginPath(), n = 0; n < s; n++) {
                      for (r = 0, i = a[n].length; r < i; r++)
                        (o = a[n][r]), c[r ? 'lineTo' : 'moveTo'](o.x, o.y);
                      e && c.closePath();
                    }
                    this._fillStroke(c, t);
                  }
                }
              },
              _updateCircle: function (t) {
                if (this._drawing && !t._empty()) {
                  var e = t._point,
                    n = this._ctx,
                    r = Math.max(Math.round(t._radius), 1),
                    i = (Math.max(Math.round(t._radiusY), 1) || r) / r;
                  1 !== i && (n.save(), n.scale(1, i)),
                    n.beginPath(),
                    n.arc(e.x, e.y / i, r, 0, 2 * Math.PI, !1),
                    1 !== i && n.restore(),
                    this._fillStroke(n, t);
                }
              },
              _fillStroke: function (t, e) {
                var n = e.options;
                n.fill &&
                  ((t.globalAlpha = n.fillOpacity),
                  (t.fillStyle = n.fillColor || n.color),
                  t.fill(n.fillRule || 'evenodd')),
                  n.stroke &&
                    0 !== n.weight &&
                    (t.setLineDash && t.setLineDash((e.options && e.options._dashArray) || []),
                    (t.globalAlpha = n.opacity),
                    (t.lineWidth = n.weight),
                    (t.strokeStyle = n.color),
                    (t.lineCap = n.lineCap),
                    (t.lineJoin = n.lineJoin),
                    t.stroke());
              },
              _onClick: function (t) {
                for (
                  var e, n, r = this._map.mouseEventToLayerPoint(t), i = this._drawFirst;
                  i;
                  i = i.next
                )
                  (e = i.layer).options.interactive &&
                    e._containsPoint(r) &&
                    (('click' !== t.type && 'preclick' !== t.type) ||
                      !this._map._draggableMoved(e)) &&
                    (n = e);
                this._fireEvent(!!n && [n], t);
              },
              _onMouseMove: function (t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                  var e = this._map.mouseEventToLayerPoint(t);
                  this._handleMouseHover(t, e);
                }
              },
              _handleMouseOut: function (t) {
                var e = this._hoveredLayer;
                e &&
                  (le(this._container, 'leaflet-interactive'),
                  this._fireEvent([e], t, 'mouseout'),
                  (this._hoveredLayer = null),
                  (this._mouseHoverThrottled = !1));
              },
              _handleMouseHover: function (t, e) {
                if (!this._mouseHoverThrottled) {
                  for (var n, i, o = this._drawFirst; o; o = o.next)
                    (n = o.layer).options.interactive && n._containsPoint(e) && (i = n);
                  i !== this._hoveredLayer &&
                    (this._handleMouseOut(t),
                    i &&
                      (he(this._container, 'leaflet-interactive'),
                      this._fireEvent([i], t, 'mouseover'),
                      (this._hoveredLayer = i))),
                    this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t),
                    (this._mouseHoverThrottled = !0),
                    setTimeout(
                      r(function () {
                        this._mouseHoverThrottled = !1;
                      }, this),
                      32,
                    );
                }
              },
              _fireEvent: function (t, e, n) {
                this._map._fireDOMEvent(e, n || e.type, t);
              },
              _bringToFront: function (t) {
                var e = t._order;
                if (e) {
                  var n = e.next,
                    r = e.prev;
                  n &&
                    ((n.prev = r),
                    r ? (r.next = n) : n && (this._drawFirst = n),
                    (e.prev = this._drawLast),
                    (this._drawLast.next = e),
                    (e.next = null),
                    (this._drawLast = e),
                    this._requestRedraw(t));
                }
              },
              _bringToBack: function (t) {
                var e = t._order;
                if (e) {
                  var n = e.next,
                    r = e.prev;
                  r &&
                    ((r.next = n),
                    n ? (n.prev = r) : r && (this._drawLast = r),
                    (e.prev = null),
                    (e.next = this._drawFirst),
                    (this._drawFirst.prev = e),
                    (this._drawFirst = e),
                    this._requestRedraw(t));
                }
              },
            });
          function hr(t) {
            return Ct.canvas ? new ur(t) : null;
          }
          var lr = (function () {
              try {
                return (
                  document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
                  function (t) {
                    return document.createElement('<lvml:' + t + ' class="lvml">');
                  }
                );
              } catch (t) {}
              return function (t) {
                return document.createElement(
                  '<' + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">',
                );
              };
            })(),
            fr = {
              _initContainer: function () {
                this._container = ie('div', 'leaflet-vml-container');
              },
              _update: function () {
                this._map._animatingZoom || (cr.prototype._update.call(this), this.fire('update'));
              },
              _initPath: function (t) {
                var e = (t._container = lr('shape'));
                he(e, 'leaflet-vml-shape ' + (this.options.className || '')),
                  (e.coordsize = '1 1'),
                  (t._path = lr('path')),
                  e.appendChild(t._path),
                  this._updateStyle(t),
                  (this._layers[o(t)] = t);
              },
              _addPath: function (t) {
                var e = t._container;
                this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
              },
              _removePath: function (t) {
                var e = t._container;
                oe(e), t.removeInteractiveTarget(e), delete this._layers[o(t)];
              },
              _updateStyle: function (t) {
                var e = t._stroke,
                  n = t._fill,
                  r = t.options,
                  i = t._container;
                (i.stroked = !!r.stroke),
                  (i.filled = !!r.fill),
                  r.stroke
                    ? (e || (e = t._stroke = lr('stroke')),
                      i.appendChild(e),
                      (e.weight = r.weight + 'px'),
                      (e.color = r.color),
                      (e.opacity = r.opacity),
                      r.dashArray
                        ? (e.dashStyle = v(r.dashArray)
                            ? r.dashArray.join(' ')
                            : r.dashArray.replace(/( *, *)/g, ' '))
                        : (e.dashStyle = ''),
                      (e.endcap = r.lineCap.replace('butt', 'flat')),
                      (e.joinstyle = r.lineJoin))
                    : e && (i.removeChild(e), (t._stroke = null)),
                  r.fill
                    ? (n || (n = t._fill = lr('fill')),
                      i.appendChild(n),
                      (n.color = r.fillColor || r.color),
                      (n.opacity = r.fillOpacity))
                    : n && (i.removeChild(n), (t._fill = null));
              },
              _updateCircle: function (t) {
                var e = t._point.round(),
                  n = Math.round(t._radius),
                  r = Math.round(t._radiusY || n);
                this._setPath(
                  t,
                  t._empty() ? 'M0 0' : 'AL ' + e.x + ',' + e.y + ' ' + n + ',' + r + ' 0,23592600',
                );
              },
              _setPath: function (t, e) {
                t._path.v = e;
              },
              _bringToFront: function (t) {
                se(t._container);
              },
              _bringToBack: function (t) {
                ce(t._container);
              },
            },
            pr = Ct.vml ? lr : K,
            dr = cr.extend({
              _initContainer: function () {
                (this._container = pr('svg')),
                  this._container.setAttribute('pointer-events', 'none'),
                  (this._rootGroup = pr('g')),
                  this._container.appendChild(this._rootGroup);
              },
              _destroyContainer: function () {
                oe(this._container),
                  Oe(this._container),
                  delete this._container,
                  delete this._rootGroup,
                  delete this._svgSize;
              },
              _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                  cr.prototype._update.call(this);
                  var t = this._bounds,
                    e = t.getSize(),
                    n = this._container;
                  (this._svgSize && this._svgSize.equals(e)) ||
                    ((this._svgSize = e),
                    n.setAttribute('width', e.x),
                    n.setAttribute('height', e.y)),
                    ye(n, t.min),
                    n.setAttribute('viewBox', [t.min.x, t.min.y, e.x, e.y].join(' ')),
                    this.fire('update');
                }
              },
              _initPath: function (t) {
                var e = (t._path = pr('path'));
                t.options.className && he(e, t.options.className),
                  t.options.interactive && he(e, 'leaflet-interactive'),
                  this._updateStyle(t),
                  (this._layers[o(t)] = t);
              },
              _addPath: function (t) {
                this._rootGroup || this._initContainer(),
                  this._rootGroup.appendChild(t._path),
                  t.addInteractiveTarget(t._path);
              },
              _removePath: function (t) {
                oe(t._path), t.removeInteractiveTarget(t._path), delete this._layers[o(t)];
              },
              _updatePath: function (t) {
                t._project(), t._update();
              },
              _updateStyle: function (t) {
                var e = t._path,
                  n = t.options;
                e &&
                  (n.stroke
                    ? (e.setAttribute('stroke', n.color),
                      e.setAttribute('stroke-opacity', n.opacity),
                      e.setAttribute('stroke-width', n.weight),
                      e.setAttribute('stroke-linecap', n.lineCap),
                      e.setAttribute('stroke-linejoin', n.lineJoin),
                      n.dashArray
                        ? e.setAttribute('stroke-dasharray', n.dashArray)
                        : e.removeAttribute('stroke-dasharray'),
                      n.dashOffset
                        ? e.setAttribute('stroke-dashoffset', n.dashOffset)
                        : e.removeAttribute('stroke-dashoffset'))
                    : e.setAttribute('stroke', 'none'),
                  n.fill
                    ? (e.setAttribute('fill', n.fillColor || n.color),
                      e.setAttribute('fill-opacity', n.fillOpacity),
                      e.setAttribute('fill-rule', n.fillRule || 'evenodd'))
                    : e.setAttribute('fill', 'none'));
              },
              _updatePoly: function (t, e) {
                this._setPath(t, J(t._parts, e));
              },
              _updateCircle: function (t) {
                var e = t._point,
                  n = Math.max(Math.round(t._radius), 1),
                  r = 'a' + n + ',' + (Math.max(Math.round(t._radiusY), 1) || n) + ' 0 1,0 ',
                  i = t._empty()
                    ? 'M0 0'
                    : 'M' + (e.x - n) + ',' + e.y + r + 2 * n + ',0 ' + r + 2 * -n + ',0 ';
                this._setPath(t, i);
              },
              _setPath: function (t, e) {
                t._path.setAttribute('d', e);
              },
              _bringToFront: function (t) {
                se(t._path);
              },
              _bringToBack: function (t) {
                ce(t._path);
              },
            });
          function mr(t) {
            return Ct.svg || Ct.vml ? new dr(t) : null;
          }
          Ct.vml && dr.include(fr),
            Ye.include({
              getRenderer: function (t) {
                var e =
                  t.options.renderer ||
                  this._getPaneRenderer(t.options.pane) ||
                  this.options.renderer ||
                  this._renderer;
                return (
                  e || (e = this._renderer = this._createRenderer()),
                  this.hasLayer(e) || this.addLayer(e),
                  e
                );
              },
              _getPaneRenderer: function (t) {
                if ('overlayPane' === t || void 0 === t) return !1;
                var e = this._paneRenderers[t];
                return (
                  void 0 === e &&
                    ((e = this._createRenderer({ pane: t })), (this._paneRenderers[t] = e)),
                  e
                );
              },
              _createRenderer: function (t) {
                return (this.options.preferCanvas && hr(t)) || mr(t);
              },
            });
          var vr = Zn.extend({
            initialize: function (t, e) {
              Zn.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
            },
            setBounds: function (t) {
              return this.setLatLngs(this._boundsToLatLngs(t));
            },
            _boundsToLatLngs: function (t) {
              return [
                (t = N(t)).getSouthWest(),
                t.getNorthWest(),
                t.getNorthEast(),
                t.getSouthEast(),
              ];
            },
          });
          (dr.create = pr),
            (dr.pointsToPath = J),
            (Rn.geometryToLayer = Dn),
            (Rn.coordsToLatLng = Gn),
            (Rn.coordsToLatLngs = Wn),
            (Rn.latLngToCoords = Hn),
            (Rn.latLngsToCoords = Un),
            (Rn.getFeature = Yn),
            (Rn.asFeature = Vn),
            Ye.mergeOptions({ boxZoom: !0 });
          var yr = Qe.extend({
            initialize: function (t) {
              (this._map = t),
                (this._container = t._container),
                (this._pane = t._panes.overlayPane),
                (this._resetStateTimeout = 0),
                t.on('unload', this._destroy, this);
            },
            addHooks: function () {
              Te(this._container, 'mousedown', this._onMouseDown, this);
            },
            removeHooks: function () {
              Oe(this._container, 'mousedown', this._onMouseDown, this);
            },
            moved: function () {
              return this._moved;
            },
            _destroy: function () {
              oe(this._pane), delete this._pane;
            },
            _resetState: function () {
              (this._resetStateTimeout = 0), (this._moved = !1);
            },
            _clearDeferredResetState: function () {
              0 !== this._resetStateTimeout &&
                (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
            },
            _onMouseDown: function (t) {
              if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
              this._clearDeferredResetState(),
                this._resetState(),
                qt(),
                we(),
                (this._startPoint = this._map.mouseEventToContainerPoint(t)),
                Te(
                  document,
                  {
                    contextmenu: Ze,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown,
                  },
                  this,
                );
            },
            _onMouseMove: function (t) {
              this._moved ||
                ((this._moved = !0),
                (this._box = ie('div', 'leaflet-zoom-box', this._container)),
                he(this._container, 'leaflet-crosshair'),
                this._map.fire('boxzoomstart')),
                (this._point = this._map.mouseEventToContainerPoint(t));
              var e = new C(this._point, this._startPoint),
                n = e.getSize();
              ye(this._box, e.min),
                (this._box.style.width = n.x + 'px'),
                (this._box.style.height = n.y + 'px');
            },
            _finish: function () {
              this._moved && (oe(this._box), le(this._container, 'leaflet-crosshair')),
                Kt(),
                be(),
                Oe(
                  document,
                  {
                    contextmenu: Ze,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown,
                  },
                  this,
                );
            },
            _onMouseUp: function (t) {
              if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(),
                  (this._resetStateTimeout = setTimeout(r(this._resetState, this), 0));
                var e = new A(
                  this._map.containerPointToLatLng(this._startPoint),
                  this._map.containerPointToLatLng(this._point),
                );
                this._map.fitBounds(e).fire('boxzoomend', { boxZoomBounds: e });
              }
            },
            _onKeyDown: function (t) {
              27 === t.keyCode &&
                (this._finish(), this._clearDeferredResetState(), this._resetState());
            },
          });
          Ye.addInitHook('addHandler', 'boxZoom', yr), Ye.mergeOptions({ doubleClickZoom: !0 });
          var _r = Qe.extend({
            addHooks: function () {
              this._map.on('dblclick', this._onDoubleClick, this);
            },
            removeHooks: function () {
              this._map.off('dblclick', this._onDoubleClick, this);
            },
            _onDoubleClick: function (t) {
              var e = this._map,
                n = e.getZoom(),
                r = e.options.zoomDelta,
                i = t.originalEvent.shiftKey ? n - r : n + r;
              'center' === e.options.doubleClickZoom
                ? e.setZoom(i)
                : e.setZoomAround(t.containerPoint, i);
            },
          });
          Ye.addInitHook('addHandler', 'doubleClickZoom', _r),
            Ye.mergeOptions({
              dragging: !0,
              inertia: !0,
              inertiaDeceleration: 3400,
              inertiaMaxSpeed: 1 / 0,
              easeLinearity: 0.2,
              worldCopyJump: !1,
              maxBoundsViscosity: 0,
            });
          var gr = Qe.extend({
            addHooks: function () {
              if (!this._draggable) {
                var t = this._map;
                (this._draggable = new nn(t._mapPane, t._container)),
                  this._draggable.on(
                    { dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd },
                    this,
                  ),
                  this._draggable.on('predrag', this._onPreDragLimit, this),
                  t.options.worldCopyJump &&
                    (this._draggable.on('predrag', this._onPreDragWrap, this),
                    t.on('zoomend', this._onZoomEnd, this),
                    t.whenReady(this._onZoomEnd, this));
              }
              he(this._map._container, 'leaflet-grab leaflet-touch-drag'),
                this._draggable.enable(),
                (this._positions = []),
                (this._times = []);
            },
            removeHooks: function () {
              le(this._map._container, 'leaflet-grab'),
                le(this._map._container, 'leaflet-touch-drag'),
                this._draggable.disable();
            },
            moved: function () {
              return this._draggable && this._draggable._moved;
            },
            moving: function () {
              return this._draggable && this._draggable._moving;
            },
            _onDragStart: function () {
              var t = this._map;
              if (
                (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
              ) {
                var e = N(this._map.options.maxBounds);
                (this._offsetLimit = B(
                  this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
                  this._map
                    .latLngToContainerPoint(e.getSouthEast())
                    .multiplyBy(-1)
                    .add(this._map.getSize()),
                )),
                  (this._viscosity = Math.min(
                    1,
                    Math.max(0, this._map.options.maxBoundsViscosity),
                  ));
              } else this._offsetLimit = null;
              t.fire('movestart').fire('dragstart'),
                t.options.inertia && ((this._positions = []), (this._times = []));
            },
            _onDrag: function (t) {
              if (this._map.options.inertia) {
                var e = (this._lastTime = +new Date()),
                  n = (this._lastPos = this._draggable._absPos || this._draggable._newPos);
                this._positions.push(n), this._times.push(e), this._prunePositions(e);
              }
              this._map.fire('move', t).fire('drag', t);
            },
            _prunePositions: function (t) {
              for (; this._positions.length > 1 && t - this._times[0] > 50; )
                this._positions.shift(), this._times.shift();
            },
            _onZoomEnd: function () {
              var t = this._map.getSize().divideBy(2),
                e = this._map.latLngToLayerPoint([0, 0]);
              (this._initialWorldOffset = e.subtract(t).x),
                (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
            },
            _viscousLimit: function (t, e) {
              return t - (t - e) * this._viscosity;
            },
            _onPreDragLimit: function () {
              if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                  e = this._offsetLimit;
                t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
                  t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
                  t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
                  t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
                  (this._draggable._newPos = this._draggable._startPos.add(t));
              }
            },
            _onPreDragWrap: function () {
              var t = this._worldWidth,
                e = Math.round(t / 2),
                n = this._initialWorldOffset,
                r = this._draggable._newPos.x,
                i = ((r - e + n) % t) + e - n,
                o = ((r + e + n) % t) - e - n,
                a = Math.abs(i + n) < Math.abs(o + n) ? i : o;
              (this._draggable._absPos = this._draggable._newPos.clone()),
                (this._draggable._newPos.x = a);
            },
            _onDragEnd: function (t) {
              var e = this._map,
                n = e.options,
                r = !n.inertia || t.noInertia || this._times.length < 2;
              if ((e.fire('dragend', t), r)) e.fire('moveend');
              else {
                this._prunePositions(+new Date());
                var i = this._lastPos.subtract(this._positions[0]),
                  o = (this._lastTime - this._times[0]) / 1e3,
                  a = n.easeLinearity,
                  s = i.multiplyBy(a / o),
                  c = s.distanceTo([0, 0]),
                  u = Math.min(n.inertiaMaxSpeed, c),
                  h = s.multiplyBy(u / c),
                  l = u / (n.inertiaDeceleration * a),
                  f = h.multiplyBy(-l / 2).round();
                f.x || f.y
                  ? ((f = e._limitOffset(f, e.options.maxBounds)),
                    P(function () {
                      e.panBy(f, { duration: l, easeLinearity: a, noMoveStart: !0, animate: !0 });
                    }))
                  : e.fire('moveend');
              }
            },
          });
          Ye.addInitHook('addHandler', 'dragging', gr),
            Ye.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
          var wr = Qe.extend({
            keyCodes: {
              left: [37],
              right: [39],
              down: [40],
              up: [38],
              zoomIn: [187, 107, 61, 171],
              zoomOut: [189, 109, 54, 173],
            },
            initialize: function (t) {
              (this._map = t),
                this._setPanDelta(t.options.keyboardPanDelta),
                this._setZoomDelta(t.options.zoomDelta);
            },
            addHooks: function () {
              var t = this._map._container;
              t.tabIndex <= 0 && (t.tabIndex = '0'),
                Te(
                  t,
                  { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown },
                  this,
                ),
                this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
            },
            removeHooks: function () {
              this._removeHooks(),
                Oe(
                  this._map._container,
                  { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown },
                  this,
                ),
                this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
            },
            _onMouseDown: function () {
              if (!this._focused) {
                var t = document.body,
                  e = document.documentElement,
                  n = t.scrollTop || e.scrollTop,
                  r = t.scrollLeft || e.scrollLeft;
                this._map._container.focus(), window.scrollTo(r, n);
              }
            },
            _onFocus: function () {
              (this._focused = !0), this._map.fire('focus');
            },
            _onBlur: function () {
              (this._focused = !1), this._map.fire('blur');
            },
            _setPanDelta: function (t) {
              var e,
                n,
                r = (this._panKeys = {}),
                i = this.keyCodes;
              for (e = 0, n = i.left.length; e < n; e++) r[i.left[e]] = [-1 * t, 0];
              for (e = 0, n = i.right.length; e < n; e++) r[i.right[e]] = [t, 0];
              for (e = 0, n = i.down.length; e < n; e++) r[i.down[e]] = [0, t];
              for (e = 0, n = i.up.length; e < n; e++) r[i.up[e]] = [0, -1 * t];
            },
            _setZoomDelta: function (t) {
              var e,
                n,
                r = (this._zoomKeys = {}),
                i = this.keyCodes;
              for (e = 0, n = i.zoomIn.length; e < n; e++) r[i.zoomIn[e]] = t;
              for (e = 0, n = i.zoomOut.length; e < n; e++) r[i.zoomOut[e]] = -t;
            },
            _addHooks: function () {
              Te(document, 'keydown', this._onKeyDown, this);
            },
            _removeHooks: function () {
              Oe(document, 'keydown', this._onKeyDown, this);
            },
            _onKeyDown: function (t) {
              if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e,
                  n = t.keyCode,
                  r = this._map;
                if (n in this._panKeys) {
                  if (!r._panAnim || !r._panAnim._inProgress)
                    if (
                      ((e = this._panKeys[n]),
                      t.shiftKey && (e = z(e).multiplyBy(3)),
                      r.options.maxBounds && (e = r._limitOffset(z(e), r.options.maxBounds)),
                      r.options.worldCopyJump)
                    ) {
                      var i = r.wrapLatLng(r.unproject(r.project(r.getCenter()).add(e)));
                      r.panTo(i);
                    } else r.panBy(e);
                } else if (n in this._zoomKeys)
                  r.setZoom(r.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
                else {
                  if (27 !== n || !r._popup || !r._popup.options.closeOnEscapeKey) return;
                  r.closePopup();
                }
                Ze(t);
              }
            },
          });
          Ye.addInitHook('addHandler', 'keyboard', wr),
            Ye.mergeOptions({
              scrollWheelZoom: !0,
              wheelDebounceTime: 40,
              wheelPxPerZoomLevel: 60,
            });
          var br = Qe.extend({
            addHooks: function () {
              Te(this._map._container, 'wheel', this._onWheelScroll, this), (this._delta = 0);
            },
            removeHooks: function () {
              Oe(this._map._container, 'wheel', this._onWheelScroll, this);
            },
            _onWheelScroll: function (t) {
              var e = Ge(t),
                n = this._map.options.wheelDebounceTime;
              (this._delta += e),
                (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
                this._startTime || (this._startTime = +new Date());
              var i = Math.max(n - (+new Date() - this._startTime), 0);
              clearTimeout(this._timer),
                (this._timer = setTimeout(r(this._performZoom, this), i)),
                Ze(t);
            },
            _performZoom: function () {
              var t = this._map,
                e = t.getZoom(),
                n = this._map.options.zoomSnap || 0;
              t._stop();
              var r = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                i = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(r))))) / Math.LN2,
                o = n ? Math.ceil(i / n) * n : i,
                a = t._limitZoom(e + (this._delta > 0 ? o : -o)) - e;
              (this._delta = 0),
                (this._startTime = null),
                a &&
                  ('center' === t.options.scrollWheelZoom
                    ? t.setZoom(e + a)
                    : t.setZoomAround(this._lastMousePos, e + a));
            },
          });
          Ye.addInitHook('addHandler', 'scrollWheelZoom', br);
          Ye.mergeOptions({ tapHold: Ct.touchNative && Ct.safari && Ct.mobile, tapTolerance: 15 });
          var xr = Qe.extend({
            addHooks: function () {
              Te(this._map._container, 'touchstart', this._onDown, this);
            },
            removeHooks: function () {
              Oe(this._map._container, 'touchstart', this._onDown, this);
            },
            _onDown: function (t) {
              if ((clearTimeout(this._holdTimeout), 1 === t.touches.length)) {
                var e = t.touches[0];
                (this._startPos = this._newPos = new j(e.clientX, e.clientY)),
                  (this._holdTimeout = setTimeout(
                    r(function () {
                      this._cancel(),
                        this._isTapValid() &&
                          (Te(document, 'touchend', Ne),
                          Te(document, 'touchend touchcancel', this._cancelClickPrevent),
                          this._simulateEvent('contextmenu', e));
                    }, this),
                    600,
                  )),
                  Te(document, 'touchend touchcancel contextmenu', this._cancel, this),
                  Te(document, 'touchmove', this._onMove, this);
              }
            },
            _cancelClickPrevent: function t() {
              Oe(document, 'touchend', Ne), Oe(document, 'touchend touchcancel', t);
            },
            _cancel: function () {
              clearTimeout(this._holdTimeout),
                Oe(document, 'touchend touchcancel contextmenu', this._cancel, this),
                Oe(document, 'touchmove', this._onMove, this);
            },
            _onMove: function (t) {
              var e = t.touches[0];
              this._newPos = new j(e.clientX, e.clientY);
            },
            _isTapValid: function () {
              return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
            },
            _simulateEvent: function (t, e) {
              var n = new MouseEvent(t, {
                bubbles: !0,
                cancelable: !0,
                view: window,
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY,
              });
              (n._simulated = !0), e.target.dispatchEvent(n);
            },
          });
          Ye.addInitHook('addHandler', 'tapHold', xr),
            Ye.mergeOptions({ touchZoom: Ct.touch, bounceAtZoomLimits: !0 });
          var Lr = Qe.extend({
            addHooks: function () {
              he(this._map._container, 'leaflet-touch-zoom'),
                Te(this._map._container, 'touchstart', this._onTouchStart, this);
            },
            removeHooks: function () {
              le(this._map._container, 'leaflet-touch-zoom'),
                Oe(this._map._container, 'touchstart', this._onTouchStart, this);
            },
            _onTouchStart: function (t) {
              var e = this._map;
              if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                var n = e.mouseEventToContainerPoint(t.touches[0]),
                  r = e.mouseEventToContainerPoint(t.touches[1]);
                (this._centerPoint = e.getSize()._divideBy(2)),
                  (this._startLatLng = e.containerPointToLatLng(this._centerPoint)),
                  'center' !== e.options.touchZoom &&
                    (this._pinchStartLatLng = e.containerPointToLatLng(n.add(r)._divideBy(2))),
                  (this._startDist = n.distanceTo(r)),
                  (this._startZoom = e.getZoom()),
                  (this._moved = !1),
                  (this._zooming = !0),
                  e._stop(),
                  Te(document, 'touchmove', this._onTouchMove, this),
                  Te(document, 'touchend touchcancel', this._onTouchEnd, this),
                  Ne(t);
              }
            },
            _onTouchMove: function (t) {
              if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map,
                  n = e.mouseEventToContainerPoint(t.touches[0]),
                  i = e.mouseEventToContainerPoint(t.touches[1]),
                  o = n.distanceTo(i) / this._startDist;
                if (
                  ((this._zoom = e.getScaleZoom(o, this._startZoom)),
                  !e.options.bounceAtZoomLimits &&
                    ((this._zoom < e.getMinZoom() && o < 1) ||
                      (this._zoom > e.getMaxZoom() && o > 1)) &&
                    (this._zoom = e._limitZoom(this._zoom)),
                  'center' === e.options.touchZoom)
                ) {
                  if (((this._center = this._startLatLng), 1 === o)) return;
                } else {
                  var a = n._add(i)._divideBy(2)._subtract(this._centerPoint);
                  if (1 === o && 0 === a.x && 0 === a.y) return;
                  this._center = e.unproject(
                    e.project(this._pinchStartLatLng, this._zoom).subtract(a),
                    this._zoom,
                  );
                }
                this._moved || (e._moveStart(!0, !1), (this._moved = !0)), k(this._animRequest);
                var s = r(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
                (this._animRequest = P(s, this, !0)), Ne(t);
              }
            },
            _onTouchEnd: function () {
              this._moved && this._zooming
                ? ((this._zooming = !1),
                  k(this._animRequest),
                  Oe(document, 'touchmove', this._onTouchMove, this),
                  Oe(document, 'touchend touchcancel', this._onTouchEnd, this),
                  this._map.options.zoomAnimation
                    ? this._map._animateZoom(
                        this._center,
                        this._map._limitZoom(this._zoom),
                        !0,
                        this._map.options.zoomSnap,
                      )
                    : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))
                : (this._zooming = !1);
            },
          });
          Ye.addInitHook('addHandler', 'touchZoom', Lr),
            (Ye.BoxZoom = yr),
            (Ye.DoubleClickZoom = _r),
            (Ye.Drag = gr),
            (Ye.Keyboard = wr),
            (Ye.ScrollWheelZoom = br),
            (Ye.TapHold = xr),
            (Ye.TouchZoom = Lr),
            (t.Bounds = C),
            (t.Browser = Ct),
            (t.CRS = F),
            (t.Canvas = ur),
            (t.Circle = An),
            (t.CircleMarker = Bn),
            (t.Class = S),
            (t.Control = Ve),
            (t.DivIcon = rr),
            (t.DivOverlay = tr),
            (t.DomEvent = He),
            (t.DomUtil = ke),
            (t.Draggable = nn),
            (t.Evented = M),
            (t.FeatureGroup = On),
            (t.GeoJSON = Rn),
            (t.GridLayer = ir),
            (t.Handler = Qe),
            (t.Icon = Mn),
            (t.ImageOverlay = Xn),
            (t.LatLng = Z),
            (t.LatLngBounds = A),
            (t.Layer = Tn),
            (t.LayerGroup = Sn),
            (t.LineUtil = wn),
            (t.Map = Ye),
            (t.Marker = zn),
            (t.Mixin = tn),
            (t.Path = Cn),
            (t.Point = j),
            (t.PolyUtil = cn),
            (t.Polygon = Zn),
            (t.Polyline = Nn),
            (t.Popup = er),
            (t.PosAnimation = Ue),
            (t.Projection = Ln),
            (t.Rectangle = vr),
            (t.Renderer = cr),
            (t.SVG = dr),
            (t.SVGOverlay = Qn),
            (t.TileLayer = or),
            (t.Tooltip = nr),
            (t.Transformation = U),
            (t.Util = T),
            (t.VideoOverlay = $n),
            (t.bind = r),
            (t.bounds = B),
            (t.canvas = hr),
            (t.circle = function (t, e, n) {
              return new An(t, e, n);
            }),
            (t.circleMarker = function (t, e) {
              return new Bn(t, e);
            }),
            (t.control = qe),
            (t.divIcon = function (t) {
              return new rr(t);
            }),
            (t.extend = e),
            (t.featureGroup = function (t, e) {
              return new On(t, e);
            }),
            (t.geoJSON = Kn),
            (t.geoJson = Jn),
            (t.gridLayer = function (t) {
              return new ir(t);
            }),
            (t.icon = function (t) {
              return new Mn(t);
            }),
            (t.imageOverlay = function (t, e, n) {
              return new Xn(t, e, n);
            }),
            (t.latLng = R),
            (t.latLngBounds = N),
            (t.layerGroup = function (t, e) {
              return new Sn(t, e);
            }),
            (t.map = function (t, e) {
              return new Ye(t, e);
            }),
            (t.marker = function (t, e) {
              return new zn(t, e);
            }),
            (t.point = z),
            (t.polygon = function (t, e) {
              return new Zn(t, e);
            }),
            (t.polyline = function (t, e) {
              return new Nn(t, e);
            }),
            (t.popup = function (t, e) {
              return new er(t, e);
            }),
            (t.rectangle = function (t, e) {
              return new vr(t, e);
            }),
            (t.setOptions = f),
            (t.stamp = o),
            (t.svg = mr),
            (t.svgOverlay = function (t, e, n) {
              return new Qn(t, e, n);
            }),
            (t.tileLayer = ar),
            (t.tooltip = function (t, e) {
              return new nr(t, e);
            }),
            (t.transformation = Y),
            (t.version = '1.9.4'),
            (t.videoOverlay = function (t, e, n) {
              return new $n(t, e, n);
            });
          var Er = window.L;
          (t.noConflict = function () {
            return (window.L = Er), this;
          }),
            (window.L = t);
        })(e);
      },
    },
    r = {};
  function i(t) {
    var e = r[t];
    if (void 0 !== e) return e.exports;
    var o = (r[t] = { exports: {} });
    return n[t].call(o.exports, o, o.exports, i), o.exports;
  }
  (i.m = n),
    (i.d = (t, e) => {
      for (var n in e)
        i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (i.f = {}),
    (i.e = (t) => Promise.all(Object.keys(i.f).reduce((e, n) => (i.f[n](t, e), e), []))),
    (i.u = (t) => t + '.bundle.js'),
    (i.miniCssF = (t) => {}),
    (i.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (t = {}),
    (e = 'story-app-submission:'),
    (i.l = (n, r, o, a) => {
      if (t[n]) t[n].push(r);
      else {
        var s, c;
        if (void 0 !== o)
          for (var u = document.getElementsByTagName('script'), h = 0; h < u.length; h++) {
            var l = u[h];
            if (l.getAttribute('src') == n || l.getAttribute('data-webpack') == e + o) {
              s = l;
              break;
            }
          }
        s ||
          ((c = !0),
          ((s = document.createElement('script')).charset = 'utf-8'),
          (s.timeout = 120),
          i.nc && s.setAttribute('nonce', i.nc),
          s.setAttribute('data-webpack', e + o),
          (s.src = n)),
          (t[n] = [r]);
        var f = (e, r) => {
            (s.onerror = s.onload = null), clearTimeout(p);
            var i = t[n];
            if (
              (delete t[n],
              s.parentNode && s.parentNode.removeChild(s),
              i && i.forEach((t) => t(r)),
              e)
            )
              return e(r);
          },
          p = setTimeout(f.bind(null, void 0, { type: 'timeout', target: s }), 12e4);
        (s.onerror = f.bind(null, s.onerror)),
          (s.onload = f.bind(null, s.onload)),
          c && document.head.appendChild(s);
      }
    }),
    (i.r = (t) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (() => {
      var t;
      i.g.importScripts && (t = i.g.location + '');
      var e = i.g.document;
      if (
        !t &&
        e &&
        (e.currentScript &&
          'SCRIPT' === e.currentScript.tagName.toUpperCase() &&
          (t = e.currentScript.src),
        !t)
      ) {
        var n = e.getElementsByTagName('script');
        if (n.length)
          for (var r = n.length - 1; r > -1 && (!t || !/^http(s?):/.test(t)); ) t = n[r--].src;
      }
      if (!t) throw new Error('Automatic publicPath is not supported in this browser');
      (t = t
        .replace(/^blob:/, '')
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (i.p = t);
    })(),
    (() => {
      var t = { 524: 0 };
      i.f.j = (e, n) => {
        var r = i.o(t, e) ? t[e] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var o = new Promise((n, i) => (r = t[e] = [n, i]));
            n.push((r[2] = o));
            var a = i.p + i.u(e),
              s = new Error();
            i.l(
              a,
              (n) => {
                if (i.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0), r)) {
                  var o = n && ('load' === n.type ? 'missing' : n.type),
                    a = n && n.target && n.target.src;
                  (s.message = 'Loading chunk ' + e + ' failed.\n(' + o + ': ' + a + ')'),
                    (s.name = 'ChunkLoadError'),
                    (s.type = o),
                    (s.request = a),
                    r[1](s);
                }
              },
              'chunk-' + e,
              e,
            );
          }
      };
      var e = (e, n) => {
          var r,
            o,
            [a, s, c] = n,
            u = 0;
          if (a.some((e) => 0 !== t[e])) {
            for (r in s) i.o(s, r) && (i.m[r] = s[r]);
            c && c(i);
          }
          for (e && e(n); u < a.length; u++) (o = a[u]), i.o(t, o) && t[o] && t[o][0](), (t[o] = 0);
        },
        n = (self.webpackChunkstory_app_submission = self.webpackChunkstory_app_submission || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })(),
    (() => {
      'use strict';
      var t = {};
      i.r(t),
        i.d(t, {
          checkAuthenticatedRoute: () => P,
          checkUnauthenticatedRouteOnly: () => E,
          getAccessToken: () => w,
          getLogout: () => k,
          putAccessToken: () => b,
          removeAccessToken: () => x,
        });
      var e = {};
      function n(t) {
        var e = t.split('/');
        return { resource: e[1] || null, id: e[2] || null };
      }
      function r() {
        return location.hash.replace('#', '') || '/';
      }
      function o() {
        return (
          (t = n(r())),
          (e = ''),
          t.resource && (e = e.concat('/'.concat(t.resource))),
          t.id && (e = e.concat('/:id')),
          e || '/'
        );
        var t, e;
      }
      function a() {
        a = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          c = o.iterator || '@@iterator',
          u = o.asyncIterator || '@@asyncIterator',
          h = o.toStringTag || '@@toStringTag';
        function l(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, '');
        } catch (t) {
          l = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function f(t, e, n, r) {
          var o = e && e.prototype instanceof g ? e : g,
            a = Object.create(o.prototype),
            s = new I(r || []);
          return i(a, '_invoke', { value: S(t, n, s) }), a;
        }
        function p(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = f;
        var d = 'suspendedStart',
          m = 'suspendedYield',
          v = 'executing',
          y = 'completed',
          _ = {};
        function g() {}
        function w() {}
        function b() {}
        var x = {};
        l(x, c, function () {
          return this;
        });
        var L = Object.getPrototypeOf,
          E = L && L(L(z([])));
        E && E !== n && r.call(E, c) && (x = E);
        var P = (b.prototype = g.prototype = Object.create(x));
        function k(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function T(t, e) {
          function n(i, o, a, c) {
            var u = p(t[i], t, o);
            if ('throw' !== u.type) {
              var h = u.arg,
                l = h.value;
              return l && 'object' == s(l) && r.call(l, '__await')
                ? e.resolve(l.__await).then(
                    function (t) {
                      n('next', t, a, c);
                    },
                    function (t) {
                      n('throw', t, a, c);
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      (h.value = t), a(h);
                    },
                    function (t) {
                      return n('throw', t, a, c);
                    },
                  );
            }
            c(u.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function S(e, n, r) {
          var i = d;
          return function (o, a) {
            if (i === v) throw Error('Generator is already running');
            if (i === y) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = O(s, r);
                if (c) {
                  if (c === _) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === d) throw ((i = y), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = v;
              var u = p(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? y : m), u.arg === _)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = y), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function O(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), O(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              _
            );
          var o = p(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), _;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                _)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              _);
        }
        function M(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function j(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function I(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(M, this), this.reset(!0);
        }
        function z(e) {
          if (e || '' === e) {
            var n = e[c];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(s(e) + ' is not iterable');
        }
        return (
          (w.prototype = b),
          i(P, 'constructor', { value: b, configurable: !0 }),
          i(b, 'constructor', { value: w, configurable: !0 }),
          (w.displayName = l(b, h, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === w || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), l(t, h, 'GeneratorFunction')),
              (t.prototype = Object.create(P)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          k(T.prototype),
          l(T.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = T),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new T(f(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          k(P),
          l(P, h, 'Generator'),
          l(P, c, function () {
            return this;
          }),
          l(P, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = z),
          (I.prototype = {
            constructor: I,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), _) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                _
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), j(n), _;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    j(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: z(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                _
              );
            },
          }),
          e
        );
      }
      function s(t) {
        return (
          (s =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          s(t)
        );
      }
      function c(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                l(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
        }
        return t;
      }
      function l(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t) {
              if ('object' != s(t) || !t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, 'string');
                if ('object' != s(n)) return n;
                throw new TypeError('@@toPrimitive must return a primitive value.');
              }
              return String(t);
            })(t);
            return 'symbol' == s(e) ? e : e + '';
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function f(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'en-US',
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return new Date(t).toLocaleDateString(
          e,
          h({ year: 'numeric', month: 'long', day: 'numeric' }, n),
        );
      }
      function p(t) {
        return d.apply(this, arguments);
      }
      function d() {
        var t;
        return (
          (t = a().mark(function t(e) {
            var n,
              r,
              o,
              s = arguments;
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                      (t.next = 3),
                      i.e(756).then(i.bind(i, 756))
                    );
                  case 3:
                    return (
                      (r = t.sent),
                      (o = r.tns),
                      t.abrupt(
                        'return',
                        o(
                          h(
                            {
                              container: e,
                              mouseDrag: !0,
                              swipeAngle: !1,
                              speed: 600,
                              nav: !0,
                              navPosition: 'bottom',
                              autoplay: !1,
                              controls: !1,
                            },
                            n,
                          ),
                        ),
                      )
                    );
                  case 6:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })),
          (d = function () {
            var e = this,
              n = arguments;
            return new Promise(function (r, i) {
              var o = t.apply(e, n);
              function a(t) {
                c(o, r, i, a, s, 'next', t);
              }
              function s(t) {
                c(o, r, i, a, s, 'throw', t);
              }
              a(void 0);
            });
          }),
          d.apply(this, arguments)
        );
      }
      function m(t) {
        for (
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 512,
            r = atob(t),
            i = [],
            o = 0;
          o < r.length;
          o += n
        ) {
          for (var a = r.slice(o, o + n), s = new Array(a.length), c = 0; c < a.length; c++)
            s[c] = a.charCodeAt(c);
          var u = new Uint8Array(s);
          i.push(u);
        }
        return new Blob(i, { type: e });
      }
      function v(t) {
        var e = t.skipTransition,
          n = void 0 !== e && e,
          r = t.updateDOM;
        if (n || !document.startViewTransition) {
          var i = Promise.resolve(r()).then(function () {});
          return {
            ready: Promise.reject(Error('View transitions unsupported')),
            updateCallbackDone: i,
            finished: i,
          };
        }
        return document.startViewTransition(r);
      }
      function y(t) {
        var e = t.title,
          n = t.description,
          r = t.damageLevel,
          i = t.evidenceImages,
          o = (t.latitudeLocation, t.longitudeLocation, t.reporterName),
          a = t.location,
          s = f(t.createdAt, 'id-ID'),
          c = (function (t) {
            return 'minor' === t
              ? '\n    <span class="story-detail__damage-level__minor" data-damage-level="minor">Kerusakan Rendah</span>\n  '
              : 'moderate' === t
                ? '\n    <span class="story-detail__damage-level__moderate" data-damage-level="moderate">Kerusakan Sedang</span>\n  '
                : 'severe' === t
                  ? '\n    <span class="story-detail__damage-level__severe" data-damage-level="severe">Kerusakan Berat</span>\n  '
                  : '';
          })(r),
          u = i.reduce(function (t, n) {
            return t.concat(
              (function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
                return t
                  ? '\n    <img class="story-detail__image" src="'
                      .concat(t, '" alt="')
                      .concat(e, '">\n  ')
                  : '\n      <img class="story-detail__image" src="images/placeholder-image.jpg" alt="Placeholder Image">\n    ';
              })(n, e),
            );
          }, '');
        return '\n    <div class="story-detail__header">\n      <h1 id="title" class="story-detail__title">'
          .concat(
            e,
            '</h1>\n\n      <div class="story-detail__more-info">\n        <div class="story-detail__more-info__inline">\n          <div id="createdat" class="story-detail__createdat" data-value="',
          )
          .concat(
            s,
            '"><i class="fas fa-calendar-alt"></i></div>\n          <div id="location-place-name" class="story-detail__location__place-name" data-value="',
          )
          .concat(
            a.placeName,
            '"><i class="fas fa-map"></i></div>\n          </div>\n        <div class="story-detail__more-info__inline">\n        <div id="location-latitude" class="story-detail__location__latitude" data-value="',
          )
          .concat(
            a.latitude,
            '">Latitude:</div>\n          <div id="location-longitude" class="story-detail__location__longitude" data-value="',
          )
          .concat(
            a.longitude,
            '">Longitude:</div>\n                  </div>\n        <div id="author" class="story-detail__author" data-value="',
          )
          .concat(
            o,
            '">Dilaporkan oleh:</div>\n      </div>\n\n      <div id="damage-level" class="story-detail__damage-level">\n        ',
          )
          .concat(
            c,
            '\n      </div>\n    </div>\n\n    <div class="container">\n      <div class="story-detail__images__container">\n        <div id="images" class="story-detail__images">',
          )
          .concat(
            u,
            '</div>\n      </div>\n    </div>\n\n    <div class="container">\n      <div class="story-detail__body">\n        <div class="story-detail__body__description__container">\n          <h2 class="story-detail__description__title">Informasi Lengkap</h2>\n          <div id="description" class="story-detail__description__body">\n            ',
          )
          .concat(
            n,
            '\n          </div>\n        </div>\n        <div class="story-detail__body__map__container">\n          <h2 class="story-detail__map__title">Peta Lokasi</h2>\n          <div class="story-detail__map__container">\n            <div id="map" class="story-detail__map"></div>\n            <div id="map-loading-container"></div>\n          </div>\n        </div>\n  \n        <hr>\n  \n        <div class="story-detail__body__actions__container">\n          <h2>Aksi</h2>\n          <div class="story-detail__actions__buttons">\n            <div id="save-actions-container"></div>\n            <div id="notify-me-actions-container">\n              <button id="story-detail-notify-me" class="btn btn-transparent">\n                Try Notify Me <i class="far fa-bell"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ',
          );
      }
      i.r(e),
        i.d(e, {
          getAllStories: () => X,
          getLogin: () => K,
          getRegistered: () => V,
          getStoryById: () => Q,
          storeNewStory: () => et,
          storeNewStoryWithGuest: () => rt,
          subscribePushNotification: () => ot,
          unsubscribePushNotification: () => st,
        });
      var _ = 'accessToken',
        g = 'https://story-api.dicoding.dev/v1';
      function w() {
        try {
          var t = localStorage.getItem(_);
          return 'null' === t || 'undefined' === t ? null : t;
        } catch (t) {
          return console.error('getAccessToken: error:', t), null;
        }
      }
      function b(t) {
        try {
          return localStorage.setItem(_, t), !0;
        } catch (t) {
          return console.error('putAccessToken: error:', t), !1;
        }
      }
      function x() {
        try {
          return localStorage.removeItem(_), !0;
        } catch (t) {
          return console.error('getLogout: error:', t), !1;
        }
      }
      var L = ['/login', '/register'];
      function E(t) {
        var e = o(),
          n = !!w();
        return L.includes(e) && n ? ((location.hash = '/'), null) : t;
      }
      function P(t) {
        return w() ? t : ((location.hash = '/login'), null);
      }
      function k() {
        x();
      }
      function T(t) {
        return (
          (T =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          T(t)
        );
      }
      function S() {
        S = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new I(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(z([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == T(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = O(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function O(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), O(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function M(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function j(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function I(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(M, this), this.reset(!0);
        }
        function z(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(T(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = z),
          (I.prototype = {
            constructor: I,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), j(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    j(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: z(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function O(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function M(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, j(r.key), r);
        }
      }
      function j(t) {
        var e = (function (t) {
          if ('object' != T(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != T(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == T(e) ? e : e + '';
      }
      function I(t, e, n) {
        (function (t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object');
        })(t, e),
          e.set(t, n);
      }
      function z(t, e) {
        return t.get(B(t, e));
      }
      function C(t, e, n) {
        return t.set(B(t, e), n), n;
      }
      function B(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var A = new WeakMap(),
        N = new WeakMap(),
        Z = (function () {
          return (
            (t = function t(e) {
              var n = e.view,
                r = e.model;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                I(this, A, void 0),
                I(this, N, void 0),
                C(A, this, n),
                C(N, this, r);
            }),
            (e = [
              {
                key: 'getRegistered',
                value: (function () {
                  var t,
                    e =
                      ((t = S().mark(function t(e) {
                        var n, r, i, o;
                        return S().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = e.name),
                                    (r = e.email),
                                    (i = e.password),
                                    z(A, this).showSubmitLoadingButton(),
                                    (t.prev = 2),
                                    (t.next = 5),
                                    z(N, this).getRegistered({ name: n, email: r, password: i })
                                  );
                                case 5:
                                  if ((o = t.sent).ok) {
                                    t.next = 10;
                                    break;
                                  }
                                  return (
                                    console.error('getRegistered: response:', o),
                                    z(A, this).registeredFailed(o.message),
                                    t.abrupt('return')
                                  );
                                case 10:
                                  z(A, this).registeredSuccessfully(o.message, o.data),
                                    (t.next = 17);
                                  break;
                                case 13:
                                  (t.prev = 13),
                                    (t.t0 = t.catch(2)),
                                    console.error('getRegistered: error:', t.t0),
                                    z(A, this).registeredFailed(t.t0.message);
                                case 17:
                                  return (
                                    (t.prev = 17),
                                    z(A, this).hideSubmitLoadingButton(),
                                    t.finish(17)
                                  );
                                case 20:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[2, 13, 17, 20]],
                        );
                      })),
                      function () {
                        var e = this,
                          n = arguments;
                        return new Promise(function (r, i) {
                          var o = t.apply(e, n);
                          function a(t) {
                            O(o, r, i, a, s, 'next', t);
                          }
                          function s(t) {
                            O(o, r, i, a, s, 'throw', t);
                          }
                          a(void 0);
                        });
                      });
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e && M(t.prototype, e),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
          var t, e;
        })();
      function R(t) {
        return (
          (R =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          R(t)
        );
      }
      function D() {
        D = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == R(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(R(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function F(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function G(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? F(Object(n), !0).forEach(function (e) {
                W(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : F(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
        }
        return t;
      }
      function W(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t) {
              if ('object' != R(t) || !t) return t;
              var e = t[Symbol.toPrimitive];
              if (void 0 !== e) {
                var n = e.call(t, 'string');
                if ('object' != R(n)) return n;
                throw new TypeError('@@toPrimitive must return a primitive value.');
              }
              return String(t);
            })(t);
            return 'symbol' == R(e) ? e : e + '';
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function H(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function U(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              H(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              H(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      var Y = {
        REGISTER: ''.concat(g, '/register'),
        LOGIN: ''.concat(g, '/login'),
        MY_USER_INFO: ''.concat(g, '/users/me'),
        STORY_LIST: ''.concat(g, '/stories'),
        STORY_DETAIL: function (t) {
          return ''.concat(g, '/stories/').concat(t);
        },
        STORE_NEW_STORY: ''.concat(g, '/stories'),
        STORE_NEW_STORY_GUEST: ''.concat(g, '/stories/guest'),
        REPORT_COMMENTS_LIST: function (t) {
          return ''.concat(g, '/reports/').concat(t, '/comments');
        },
        STORE_NEW_REPORT_COMMENT: function (t) {
          return ''.concat(g, '/reports/').concat(t, '/comments');
        },
        SUBSCRIBE: ''.concat(g, '/notifications/subscribe'),
        UNSUBSCRIBE: ''.concat(g, '/notifications/subscribe'),
      };
      function V(t) {
        return q.apply(this, arguments);
      }
      function q() {
        return (q = U(
          D().mark(function t(e) {
            var n, r, i, o, a, s;
            return D().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = e.name),
                      (r = e.email),
                      (i = e.password),
                      (o = JSON.stringify({ name: n, email: r, password: i })),
                      (t.next = 4),
                      fetch(Y.REGISTER, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: o,
                      })
                    );
                  case 4:
                    return (a = t.sent), (t.next = 7), a.json();
                  case 7:
                    return (s = t.sent), t.abrupt('return', G(G({}, s), {}, { ok: a.ok }));
                  case 9:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function K(t) {
        return J.apply(this, arguments);
      }
      function J() {
        return (J = U(
          D().mark(function t(e) {
            var n, r, i, o, a;
            return D().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = e.email),
                      (r = e.password),
                      (i = JSON.stringify({ email: n, password: r })),
                      (t.next = 4),
                      fetch(Y.LOGIN, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: i,
                      })
                    );
                  case 4:
                    return (o = t.sent), (t.next = 7), o.json();
                  case 7:
                    return (a = t.sent), t.abrupt('return', G(G({}, a), {}, { ok: o.ok }));
                  case 9:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function X() {
        return $.apply(this, arguments);
      }
      function $() {
        return ($ = U(
          D().mark(function t() {
            var e, n, r;
            return D().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e = w()),
                      (t.next = 3),
                      fetch(Y.STORY_LIST, { headers: { Authorization: 'Bearer '.concat(e) } })
                    );
                  case 3:
                    return (n = t.sent), (t.next = 6), n.json();
                  case 6:
                    return (r = t.sent), t.abrupt('return', G(G({}, r), {}, { ok: n.ok }));
                  case 8:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function Q(t) {
        return tt.apply(this, arguments);
      }
      function tt() {
        return (tt = U(
          D().mark(function t(e) {
            var n, r, i;
            return D().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = w()),
                      (t.next = 3),
                      fetch(Y.STORY_DETAIL(e), { headers: { Authorization: 'Bearer '.concat(n) } })
                    );
                  case 3:
                    return (r = t.sent), (t.next = 6), r.json();
                  case 6:
                    return (i = t.sent), t.abrupt('return', G(G({}, i), {}, { ok: r.ok }));
                  case 8:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function et(t) {
        return nt.apply(this, arguments);
      }
      function nt() {
        return (nt = U(
          D().mark(function t(e) {
            var n, r, i, o, a, s, c, u;
            return D().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = e.description),
                      (r = e.evidenceImages),
                      (i = e.latitude),
                      (o = e.longitude),
                      (a = w()),
                      (s = new FormData()).set('description', n),
                      s.set('latitude', i),
                      s.set('longitude', o),
                      r.forEach(function (t) {
                        s.append('evidenceImages', t);
                      }),
                      (t.next = 9),
                      fetch(Y.STORE_NEW_STORY, {
                        method: 'POST',
                        headers: { Authorization: 'Bearer '.concat(a) },
                        body: s,
                      })
                    );
                  case 9:
                    return (c = t.sent), (t.next = 12), c.json();
                  case 12:
                    return (u = t.sent), t.abrupt('return', G(G({}, u), {}, { ok: c.ok }));
                  case 14:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function rt(t) {
        return it.apply(this, arguments);
      }
      function it() {
        return (it = U(
          D().mark(function t(e) {
            var n, r, i, o, a, s, c;
            return D().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = e.description),
                      (r = e.evidenceImages),
                      (i = e.latitude),
                      (o = e.longitude),
                      w(),
                      (a = new FormData()).set('description', n),
                      a.set('latitude', i),
                      a.set('longitude', o),
                      r.forEach(function (t) {
                        a.append('evidenceImages', t);
                      }),
                      (t.next = 9),
                      fetch(Y.STORE_NEW_STORY, { method: 'POST', body: a })
                    );
                  case 9:
                    return (s = t.sent), (t.next = 12), s.json();
                  case 12:
                    return (c = t.sent), t.abrupt('return', G(G({}, c), {}, { ok: s.ok }));
                  case 14:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function ot(t) {
        return at.apply(this, arguments);
      }
      function at() {
        return (at = U(
          D().mark(function t(e) {
            var n, r, i, o, a, s, c, u;
            return D().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = e.endpoint),
                      (r = e.keys),
                      (i = r.p256dh),
                      (o = r.auth),
                      (a = w()),
                      (s = JSON.stringify({ endpoint: n, keys: { p256dh: i, auth: o } })),
                      (t.next = 5),
                      fetch(Y.SUBSCRIBE, {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer '.concat(a),
                        },
                        body: s,
                      })
                    );
                  case 5:
                    return (c = t.sent), (t.next = 8), c.json();
                  case 8:
                    return (u = t.sent), t.abrupt('return', G(G({}, u), {}, { ok: c.ok }));
                  case 10:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function st(t) {
        return ct.apply(this, arguments);
      }
      function ct() {
        return (ct = U(
          D().mark(function t(e) {
            var n, r, i, o, a;
            return D().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = e.endpoint),
                      (r = w()),
                      (i = JSON.stringify({ endpoint: n })),
                      (t.next = 5),
                      fetch(Y.UNSUBSCRIBE, {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer '.concat(r),
                        },
                        body: i,
                      })
                    );
                  case 5:
                    return (o = t.sent), (t.next = 8), o.json();
                  case 8:
                    return (a = t.sent), t.abrupt('return', G(G({}, a), {}, { ok: o.ok }));
                  case 10:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        )).apply(this, arguments);
      }
      function ut(t) {
        return (
          (ut =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          ut(t)
        );
      }
      function ht() {
        ht = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == ut(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(ut(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function lt(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function ft(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              lt(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              lt(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function pt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, dt(r.key), r);
        }
      }
      function dt(t) {
        var e = (function (t) {
          if ('object' != ut(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != ut(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == ut(e) ? e : e + '';
      }
      function mt(t, e) {
        if (e.has(t))
          throw new TypeError('Cannot initialize the same private elements twice on an object');
      }
      function vt(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var yt = new WeakMap(),
        _t = new WeakSet(),
        gt = (function () {
          return (
            (t = function t() {
              var e;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                mt(this, (e = _t)),
                e.add(this),
                (function (t, e) {
                  mt(t, e), e.set(t, null);
                })(this, yt);
            }),
            (n = [
              {
                key: 'render',
                value:
                  ((i = ft(
                    ht().mark(function t() {
                      return ht().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                'return',
                                '\n      <section class="register-container">\n        <div class="register-form-container">\n          <h1 class="register__title">Daftar akun</h1>\n\n          <form id="register-form" class="register-form">\n            <div class="form-control">\n              <label for="name-input" class="register-form__name-title">Nama lengkap</label>\n\n              <div class="register-form__title-container">\n                <input id="name-input" type="text" name="name" placeholder="Masukkan nama lengkap Anda">\n              </div>\n            </div>\n            <div class="form-control">\n              <label for="email-input" class="register-form__email-title">Email</label>\n\n              <div class="register-form__title-container">\n                <input id="email-input" type="email" name="email" placeholder="Contoh: nama@email.com">\n              </div>\n            </div>\n            <div class="form-control">\n              <label for="password-input" class="register-form__password-title">Password</label>\n\n              <div class="register-form__title-container">\n                <input id="password-input" type="password" name="password" placeholder="Masukkan password baru">\n              </div>\n            </div>\n            <div class="form-buttons register-form__form-buttons">\n              <div id="submit-button-container">\n                <button class="btn" type="submit">Daftar akun</button>\n              </div>\n              <p class="register-form__already-have-account">Sudah punya akun? <a href="#/login">Masuk</a></p>\n            </div>\n          </form>\n        </div>\n      </section>\n    ',
                              );
                            case 1:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    }),
                  )),
                  function () {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: 'afterRender',
                value:
                  ((r = ft(
                    ht().mark(function t() {
                      return ht().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (n = yt),
                                  (r = new Z({ view: this, model: e })),
                                  n.set(vt(n, this), r),
                                  vt(_t, this, wt).call(this);
                              case 2:
                              case 'end':
                                return t.stop();
                            }
                          var n, r;
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: 'registeredSuccessfully',
                value: function (t) {
                  console.log(t), (location.hash = '/login');
                },
              },
              {
                key: 'registeredFailed',
                value: function (t) {
                  alert(t);
                },
              },
              {
                key: 'showSubmitLoadingButton',
                value: function () {
                  document.getElementById('submit-button-container').innerHTML =
                    '\n      <button class="btn" type="submit" disabled>\n        <i class="fas fa-spinner loader-button"></i> Daftar akun\n      </button>\n    ';
                },
              },
              {
                key: 'hideSubmitLoadingButton',
                value: function () {
                  document.getElementById('submit-button-container').innerHTML =
                    '\n      <button class="btn" type="submit">Daftar akun</button>\n    ';
                },
              },
            ]),
            n && pt(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
          var t, n, r, i;
        })();
      function wt() {
        var t = this;
        document.getElementById('register-form').addEventListener(
          'submit',
          (function () {
            var e = ft(
              ht().mark(function e(n) {
                var r;
                return ht().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          n.preventDefault(),
                          (r = {
                            name: document.getElementById('name-input').value,
                            email: document.getElementById('email-input').value,
                            password: document.getElementById('password-input').value,
                          }),
                          (e.next = 4),
                          ((i = yt), (o = t), i.get(vt(i, o))).getRegistered(r)
                        );
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                  var i, o;
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
      }
      function bt(t) {
        return (
          (bt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          bt(t)
        );
      }
      function xt() {
        xt = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == bt(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(bt(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function Lt(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function Et(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, Pt(r.key), r);
        }
      }
      function Pt(t) {
        var e = (function (t) {
          if ('object' != bt(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != bt(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == bt(e) ? e : e + '';
      }
      function kt(t, e, n) {
        (function (t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object');
        })(t, e),
          e.set(t, n);
      }
      function Tt(t, e) {
        return t.get(Ot(t, e));
      }
      function St(t, e, n) {
        return t.set(Ot(t, e), n), n;
      }
      function Ot(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var Mt = new WeakMap(),
        jt = new WeakMap(),
        It = new WeakMap(),
        zt = (function () {
          return (
            (t = function t(e) {
              var n = e.view,
                r = e.model,
                i = e.authModel;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                kt(this, Mt, void 0),
                kt(this, jt, void 0),
                kt(this, It, void 0),
                St(Mt, this, n),
                St(jt, this, r),
                St(It, this, i);
            }),
            (e = [
              {
                key: 'getLogin',
                value: (function () {
                  var t,
                    e =
                      ((t = xt().mark(function t(e) {
                        var n, r, i;
                        return xt().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (n = e.email),
                                    (r = e.password),
                                    Tt(Mt, this).showSubmitLoadingButton(),
                                    (t.prev = 2),
                                    (t.next = 5),
                                    Tt(jt, this).getLogin({ email: n, password: r })
                                  );
                                case 5:
                                  if ((i = t.sent).ok) {
                                    t.next = 10;
                                    break;
                                  }
                                  return (
                                    console.error('getLogin: response:', i),
                                    Tt(Mt, this).loginFailed(i.message),
                                    t.abrupt('return')
                                  );
                                case 10:
                                  Tt(It, this).putAccessToken(i.data.accessToken),
                                    Tt(Mt, this).loginSuccessfully(i.message, i.data),
                                    (t.next = 18);
                                  break;
                                case 14:
                                  (t.prev = 14),
                                    (t.t0 = t.catch(2)),
                                    console.error('getLogin: error:', t.t0),
                                    Tt(Mt, this).loginFailed(t.t0.message);
                                case 18:
                                  return (
                                    (t.prev = 18),
                                    Tt(Mt, this).hideSubmitLoadingButton(),
                                    t.finish(18)
                                  );
                                case 21:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[2, 14, 18, 21]],
                        );
                      })),
                      function () {
                        var e = this,
                          n = arguments;
                        return new Promise(function (r, i) {
                          var o = t.apply(e, n);
                          function a(t) {
                            Lt(o, r, i, a, s, 'next', t);
                          }
                          function s(t) {
                            Lt(o, r, i, a, s, 'throw', t);
                          }
                          a(void 0);
                        });
                      });
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e && Et(t.prototype, e),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
          var t, e;
        })();
      function Ct(t) {
        return (
          (Ct =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          Ct(t)
        );
      }
      function Bt() {
        Bt = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == Ct(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(Ct(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function At(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function Nt(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              At(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              At(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function Zt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, Rt(r.key), r);
        }
      }
      function Rt(t) {
        var e = (function (t) {
          if ('object' != Ct(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != Ct(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == Ct(e) ? e : e + '';
      }
      function Dt(t, e) {
        if (e.has(t))
          throw new TypeError('Cannot initialize the same private elements twice on an object');
      }
      function Ft(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var Gt = new WeakMap(),
        Wt = new WeakSet(),
        Ht = (function () {
          return (
            (n = function t() {
              var e;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                Dt(this, (e = Wt)),
                e.add(this),
                (function (t, e) {
                  Dt(t, e), e.set(t, null);
                })(this, Gt);
            }),
            (r = [
              {
                key: 'render',
                value:
                  ((o = Nt(
                    Bt().mark(function t() {
                      return Bt().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                'return',
                                '\n      <section class="login-container">\n        <article class="login-form-container">\n          <h1 class="login__title">Masuk akun</h1>\n\n          <form id="login-form" class="login-form">\n            <div class="form-control">\n              <label for="email-input" class="login-form__email-title">Email</label>\n\n              <div class="login-form__title-container">\n                <input id="email-input" type="email" name="email" placeholder="Contoh: nama@email.com">\n              </div>\n            </div>\n            <div class="form-control">\n              <label for="password-input" class="login-form__password-title">Password</label>\n\n              <div class="login-form__title-container">\n                <input id="password-input" type="password" name="password" placeholder="Masukkan password Anda">\n              </div>\n            </div>\n            <div class="form-buttons login-form__form-buttons">\n              <div id="submit-button-container">\n                <button class="btn" type="submit">Masuk</button>\n              </div>\n              <p class="login-form__do-not-have-account">Belum punya akun? <a href="#/register">Daftar</a></p>\n            </div>\n          </form>\n        </article>\n      </section>\n    ',
                              );
                            case 1:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    }),
                  )),
                  function () {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: 'afterRender',
                value:
                  ((i = Nt(
                    Bt().mark(function n() {
                      return Bt().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                (r = Gt),
                                  (i = new zt({ view: this, model: e, authModel: t })),
                                  r.set(Ft(r, this), i),
                                  Ft(Wt, this, Ut).call(this);
                              case 2:
                              case 'end':
                                return n.stop();
                            }
                          var r, i;
                        },
                        n,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: 'loginSuccessfully',
                value: function (t) {
                  console.log(t), (location.hash = '/');
                },
              },
              {
                key: 'loginFailed',
                value: function (t) {
                  alert(t);
                },
              },
              {
                key: 'showSubmitLoadingButton',
                value: function () {
                  document.getElementById('submit-button-container').innerHTML =
                    '\n      <button class="btn" type="submit" disabled>\n        <i class="fas fa-spinner loader-button"></i> Masuk\n      </button>\n    ';
                },
              },
              {
                key: 'hideSubmitLoadingButton',
                value: function () {
                  document.getElementById('submit-button-container').innerHTML =
                    '\n      <button class="btn" type="submit">Masuk</button>\n    ';
                },
              },
            ]),
            r && Zt(n.prototype, r),
            Object.defineProperty(n, 'prototype', { writable: !1 }),
            n
          );
          var n, r, i, o;
        })();
      function Ut() {
        var t = this;
        document.getElementById('login-form').addEventListener(
          'submit',
          (function () {
            var e = Nt(
              Bt().mark(function e(n) {
                var r;
                return Bt().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          n.preventDefault(),
                          (r = {
                            email: document.getElementById('email-input').value,
                            password: document.getElementById('password-input').value,
                          }),
                          (e.next = 4),
                          ((i = Gt), (o = t), i.get(Ft(i, o))).getLogin(r)
                        );
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                  var i, o;
                }, e);
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
      }
      var Yt = i(481);
      const Vt = i.p + '2b3e1faf89f94a483539.png',
        qt = i.p + '680f69f3c2e6b90c1812.png',
        Kt = i.p + 'a0c6cc1401c107b501ef.png';
      function Jt() {
        Jt = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == Qt(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(Qt(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function Xt(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function $t(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              Xt(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              Xt(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function Qt(t) {
        return (
          (Qt =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          Qt(t)
        );
      }
      function te(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ee(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? te(Object(n), !0).forEach(function (e) {
                ne(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : te(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
        }
        return t;
      }
      function ne(t, e, n) {
        return (
          (e = ie(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function re(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, ie(r.key), r);
        }
      }
      function ie(t) {
        var e = (function (t) {
          if ('object' != Qt(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != Qt(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == Qt(e) ? e : e + '';
      }
      function oe(t, e, n) {
        (function (t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object');
        })(t, e),
          e.set(t, n);
      }
      function ae(t, e, n) {
        return t.set(ce(t, e), n), n;
      }
      function se(t, e) {
        return t.get(ce(t, e));
      }
      function ce(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var ue = new WeakMap(),
        he = new WeakMap(),
        le = (function () {
          function t(e) {
            var n,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !(function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
              oe(this, ue, 5),
              oe(this, he, null),
              ae(ue, this, null !== (n = r.zoom) && void 0 !== n ? n : se(ue, this));
            var i = (0, Yt.tileLayer)('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
            });
            ae(
              he,
              this,
              (0, Yt.map)(
                document.querySelector(e),
                ee({ zoom: se(ue, this), scrollWheelZoom: !1, layers: [i] }, r),
              ),
            );
          }
          return (
            (e = t),
            (n = [
              {
                key: 'addMapEventListener',
                value: function (t, e) {
                  se(he, this).addEventListener(t, e);
                },
              },
              {
                key: 'changeCamera',
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                  e
                    ? se(he, this).setView((0, Yt.latLng)(t), e)
                    : se(he, this).setView((0, Yt.latLng)(t), se(ue, this));
                },
              },
              {
                key: 'getCenter',
                value: function () {
                  var t = se(he, this).getCenter();
                  return { latitude: t.lat, longitude: t.lng };
                },
              },
              {
                key: 'createIcon',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return (0, Yt.icon)(
                    ee(
                      ee({}, Yt.Icon.Default.prototype.options),
                      {},
                      { iconRetinaUrl: qt, iconUrl: Vt, shadowUrl: Kt },
                      t,
                    ),
                  );
                },
              },
              {
                key: 'addMarker',
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                  if ('object' !== Qt(e)) throw new Error('markerOptions must be an object');
                  var r = (0, Yt.marker)(t, ee({ icon: this.createIcon() }, e));
                  if (n) {
                    if ('object' !== Qt(n)) throw new Error('popupOptions must be an object');
                    if (!('content' in n))
                      throw new Error('popupOptions must include `content` property.');
                    var i = (0, Yt.popup)(t, n);
                    r.bindPopup(i);
                  }
                  return r.addTo(se(he, this)), r;
                },
              },
            ]),
            (r = [
              {
                key: 'isGeolocationAvailable',
                value: function () {
                  return 'geolocation' in navigator;
                },
              },
              {
                key: 'getCurrentPosition',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return new Promise(function (n, r) {
                    t.isGeolocationAvailable()
                      ? navigator.geolocation.getCurrentPosition(n, r, e)
                      : r('Geolocation API unsupported');
                  });
                },
              },
              {
                key: 'getPlaceNameByCoordinate',
                value:
                  ((o = $t(
                    Jt().mark(function t(e, n) {
                      var r, i, o, a;
                      return Jt().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (r = new URL(
                                    'https://api.maptiler.com/geocoding/'
                                      .concat(n, ',')
                                      .concat(e, '.json'),
                                  )).searchParams.set('key', 'YOUR_KEY'),
                                  r.searchParams.set('language', 'id'),
                                  r.searchParams.set('limit', '1'),
                                  (t.next = 7),
                                  fetch(r)
                                );
                              case 7:
                                return (i = t.sent), (t.next = 10), i.json();
                              case 10:
                                return (
                                  (o = t.sent),
                                  (a = o.features[0].place_name.split(', ')),
                                  t.abrupt(
                                    'return',
                                    [a.at(-2), a.at(-1)]
                                      .map(function (t) {
                                        return t;
                                      })
                                      .join(', '),
                                  )
                                );
                              case 15:
                                return (
                                  (t.prev = 15),
                                  (t.t0 = t.catch(0)),
                                  console.error('getPlaceNameByCoordinate: error:', t.t0),
                                  t.abrupt('return', ''.concat(e, ', ').concat(n))
                                );
                              case 19:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 15]],
                      );
                    }),
                  )),
                  function (t, e) {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: 'build',
                value:
                  ((i = $t(
                    Jt().mark(function e(n) {
                      var r,
                        i,
                        o,
                        a,
                        s = arguments;
                      return Jt().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  !(
                                    'center' in (r = s.length > 1 && void 0 !== s[1] ? s[1] : {})
                                  ) ||
                                  !r.center
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt('return', new t(n, r));
                              case 3:
                                if (((i = [-6.2, 106.816666]), !('locate' in r) || !r.locate)) {
                                  e.next = 17;
                                  break;
                                }
                                return (e.prev = 5), (e.next = 8), t.getCurrentPosition();
                              case 8:
                                return (
                                  (o = e.sent),
                                  (a = [o.coords.latitude, o.coords.longitude]),
                                  e.abrupt('return', new t(n, ee(ee({}, r), {}, { center: a })))
                                );
                              case 13:
                                return (
                                  (e.prev = 13),
                                  (e.t0 = e.catch(5)),
                                  console.error('build: error:', e.t0),
                                  e.abrupt('return', new t(n, ee(ee({}, r), {}, { center: i })))
                                );
                              case 17:
                                return e.abrupt(
                                  'return',
                                  new t(n, ee(ee({}, r), {}, { center: i })),
                                );
                              case 18:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[5, 13]],
                      );
                    }),
                  )),
                  function (t) {
                    return i.apply(this, arguments);
                  }),
              },
            ]),
            n && re(e.prototype, n),
            r && re(e, r),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            e
          );
          var e, n, r, i, o;
        })();
      function fe(t) {
        return (
          (fe =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          fe(t)
        );
      }
      function pe() {
        pe = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == fe(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(fe(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function de(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function me(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              de(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              de(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function ve(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, ye(r.key), r);
        }
      }
      function ye(t) {
        var e = (function (t) {
          if ('object' != fe(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != fe(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == fe(e) ? e : e + '';
      }
      function _e(t, e, n) {
        (function (t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object');
        })(t, e),
          e.set(t, n);
      }
      function ge(t, e) {
        return t.get(be(t, e));
      }
      function we(t, e, n) {
        return t.set(be(t, e), n), n;
      }
      function be(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var xe = new WeakMap(),
        Le = new WeakMap(),
        Ee = (function () {
          return (
            (t = function t(e) {
              var n = e.view,
                r = e.model;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                _e(this, xe, void 0),
                _e(this, Le, void 0),
                we(xe, this, n),
                we(Le, this, r);
            }),
            (e = [
              {
                key: 'showStoryListMap',
                value:
                  ((r = me(
                    pe().mark(function t() {
                      return pe().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  ge(xe, this).showMapLoading(),
                                  (t.prev = 1),
                                  (t.next = 4),
                                  ge(xe, this).initialMap()
                                );
                              case 4:
                                t.next = 9;
                                break;
                              case 6:
                                (t.prev = 6),
                                  (t.t0 = t.catch(1)),
                                  console.error('showStoryListMap: error:', t.t0);
                              case 9:
                                return (t.prev = 9), ge(xe, this).hideMapLoading(), t.finish(9);
                              case 12:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 6, 9, 12]],
                      );
                    }),
                  )),
                  function () {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: 'initialGalleryAndMap',
                value:
                  ((n = me(
                    pe().mark(function t() {
                      var e;
                      return pe().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  ge(xe, this).showLoading(),
                                  (t.prev = 1),
                                  (t.next = 4),
                                  this.showStoriesListMap()
                                );
                              case 4:
                                return (t.next = 6), ge(Le, this).getAllStories();
                              case 6:
                                if ((e = t.sent).ok) {
                                  t.next = 11;
                                  break;
                                }
                                return (
                                  console.error('initialGalleryAndMap: response:', e),
                                  ge(xe, this).populateReportsListError(e.message),
                                  t.abrupt('return')
                                );
                              case 11:
                                ge(xe, this).populateStoriesList(e.message, e.data), (t.next = 18);
                                break;
                              case 14:
                                (t.prev = 14),
                                  (t.t0 = t.catch(1)),
                                  console.error('initialGalleryAndMap: error:', t.t0),
                                  ge(xe, this).populateStoriesListError(t.t0.message);
                              case 18:
                                return (t.prev = 18), ge(xe, this).hideLoading(), t.finish(18);
                              case 21:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 14, 18, 21]],
                      );
                    }),
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
            ]),
            e && ve(t.prototype, e),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
          var t, e, n, r;
        })();
      function Pe(t) {
        return (
          (Pe =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          Pe(t)
        );
      }
      function ke(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Te(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ke(Object(n), !0).forEach(function (e) {
                Se(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : ke(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
        }
        return t;
      }
      function Se(t, e, n) {
        return (
          (e = ze(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function Oe() {
        Oe = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == Pe(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(Pe(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function Me(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function je(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              Me(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              Me(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function Ie(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, ze(r.key), r);
        }
      }
      function ze(t) {
        var e = (function (t) {
          if ('object' != Pe(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != Pe(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == Pe(e) ? e : e + '';
      }
      function Ce(t, e, n) {
        (function (t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object');
        })(t, e),
          e.set(t, n);
      }
      function Be(t, e) {
        return t.get(Ne(t, e));
      }
      function Ae(t, e, n) {
        return t.set(Ne(t, e), n), n;
      }
      function Ne(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var Ze = new WeakMap(),
        Re = new WeakMap(),
        De = (function () {
          return (
            (t = function t() {
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                Ce(this, Ze, null),
                Ce(this, Re, null);
            }),
            (n = [
              {
                key: 'render',
                value:
                  ((o = je(
                    Oe().mark(function t() {
                      return Oe().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                'return',
                                '\n        <section>\n          <div class="stories-list__map__container">\n            <div id="map" class="stories-list__map"></div>\n            <div id="map-loading-container"></div>\n          </div>\n        </section>\n  \n        <section class="container">\n          <h1 class="section-title">Daftar Cerita</h1>\n  \n          <div class="stories-list__container">\n            <div id="stories-list"></div>\n            <div id="stories-list-loading-container"></div>\n          </div>\n        </section>\n      ',
                              );
                            case 1:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    }),
                  )),
                  function () {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: 'afterRender',
                value:
                  ((i = je(
                    Oe().mark(function t() {
                      return Oe().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  Ae(Ze, this, new Ee({ view: this, model: e })),
                                  (t.next = 3),
                                  Be(Ze, this).initialGalleryAndMap()
                                );
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: 'populateList',
                value: function (t, e) {
                  var n = this;
                  if (e.length <= 0) this.populateStoriesListEmpty();
                  else {
                    var r = e.reduce(function (t, e) {
                      if (Be(Re, n)) {
                        var r = [e.location.latitude, e.location.longitude],
                          i = { alt: e.title },
                          o = { content: e.title };
                        Be(Re, n).addMarker(r, i, o);
                      }
                      return t.concat(
                        (function (t) {
                          var e = t.id,
                            n = t.description,
                            r = t.evidenceImages,
                            i = t.reporterName,
                            o = t.createdAt,
                            a = t.location;
                          return '\n    <div tabindex="0" class="story-item" data-storyid="'
                            .concat(e, '">\n      <img class="story-item__image" src="')
                            .concat(r[0], '" alt="')
                            .concat(
                              title,
                              '">\n      <div class="story-item__body">\n        <div class="story-item__main">\n          <div class="story-item__more-info">\n            <div class="story-item__createdat">\n              <i class="fas fa-calendar-alt"></i> ',
                            )
                            .concat(
                              f(o, 'id-ID'),
                              '\n            </div>\n            <div class="story-item__location">\n              <i class="fas fa-map"></i> ',
                            )
                            .concat(
                              Object.values(a),
                              '\n            </div>\n          </div>\n        </div>\n        <div id="story-description" class="story-item__description">\n          ',
                            )
                            .concat(
                              n,
                              '\n        </div>\n        <div class="story-item__more-info">\n          <div class="story-item__author">\n            Diceritakan oleh: ',
                            )
                            .concat(
                              i,
                              '\n          </div>\n        </div>\n        <a class="btn story-item__read-more" href="#/stories/',
                            )
                            .concat(
                              e,
                              '">\n          Selengkapnya <i class="fas fa-arrow-right"></i>\n        </a>\n      </div>\n    </div>\n  ',
                            );
                        })(Te(Te({}, e), {}, { reporterName: e.reporter.name })),
                      );
                    }, '');
                    document.getElementById('stories-list').innerHTML =
                      '\n        <div class="stories-list">'.concat(r, '</div>\n      ');
                  }
                },
              },
              {
                key: 'populateStoriesListEmpty',
                value: function () {
                  document.getElementById('stories-list').innerHTML =
                    '\n    <div id="stories-list-empty" class="stories-list__empty">\n      <h2>Tidak ada cerita yang tersedia</h2>\n      <p>Saat ini, tidak ada cerita yang dapat ditampilkan.</p>\n    </div>\n  ';
                },
              },
              {
                key: 'populateStoriesListError',
                value: function (t) {
                  document.getElementById('stories-list').innerHTML = (function (t) {
                    return '\n    <div id="stories-list-error" class="stories-list__error">\n      <h2>Terjadi kesalahan pengambilan daftar cerita</h2>\n      <p>'.concat(
                      t || 'Gunakan jaringan lain atau laporkan error ini.',
                      '</p>\n    </div>\n  ',
                    );
                  })(t);
                },
              },
              {
                key: 'initialMap',
                value:
                  ((r = je(
                    Oe().mark(function t() {
                      return Oe().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.t0 = Ae),
                                  (t.t1 = Re),
                                  (t.t2 = this),
                                  (t.next = 5),
                                  le.build('#map', { zoom: 10, locate: !0 })
                                );
                              case 5:
                                (t.t3 = t.sent), (0, t.t0)(t.t1, t.t2, t.t3);
                              case 7:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: 'showMapLoading',
                value: function () {
                  document.getElementById('map-loading-container').innerHTML =
                    '\n    <div class="loader loader-absolute"></div>\n  ';
                },
              },
              {
                key: 'hideMapLoading',
                value: function () {
                  document.getElementById('map-loading-container').innerHTML = '';
                },
              },
              {
                key: 'showLoading',
                value: function () {
                  document.getElementById('stories-list-loading-container').innerHTML =
                    '\n    <div class="loader loader-absolute"></div>\n  ';
                },
              },
              {
                key: 'hideLoading',
                value: function () {
                  document.getElementById('stories-list-loading-container').innerHTML = '';
                },
              },
            ]),
            n && Ie(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
          var t, n, r, i, o;
        })();
      function Fe(t) {
        return (
          (Fe =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          Fe(t)
        );
      }
      function Ge() {
        Ge = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == Fe(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(Fe(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function We(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function He(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              We(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              We(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function Ue(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, Ye(r.key), r);
        }
      }
      function Ye(t) {
        var e = (function (t) {
          if ('object' != Fe(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != Fe(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == Fe(e) ? e : e + '';
      }
      function Ve(t, e, n) {
        qe(t, e), e.set(t, n);
      }
      function qe(t, e) {
        if (e.has(t))
          throw new TypeError('Cannot initialize the same private elements twice on an object');
      }
      function Ke(t, e) {
        return t.get(Xe(t, e));
      }
      function Je(t, e, n) {
        return t.set(Xe(t, e), n), n;
      }
      function Xe(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var $e = new WeakMap(),
        Qe = new WeakMap(),
        tn = new WeakMap(),
        en = new WeakSet(),
        nn = (function () {
          return (
            (t = function t(e, n) {
              var r,
                i = n.view,
                o = n.apiModel;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                qe(this, (r = en)),
                r.add(this),
                Ve(this, $e, void 0),
                Ve(this, Qe, void 0),
                Ve(this, tn, void 0),
                Je($e, this, e),
                Je(Qe, this, i),
                Je(tn, this, o);
            }),
            (e = [
              {
                key: 'showStoryDetailMap',
                value:
                  ((r = He(
                    Ge().mark(function t() {
                      return Ge().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  Ke(Qe, this).showMapLoading(),
                                  (t.prev = 1),
                                  (t.next = 4),
                                  Ke(Qe, this).initialMap()
                                );
                              case 4:
                                t.next = 9;
                                break;
                              case 6:
                                (t.prev = 6),
                                  (t.t0 = t.catch(1)),
                                  console.error('showStoryDetailMap: error:', t.t0);
                              case 9:
                                return (t.prev = 9), Ke(Qe, this).hideMapLoading(), t.finish(9);
                              case 12:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 6, 9, 12]],
                      );
                    }),
                  )),
                  function () {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: 'showStoryDetail',
                value:
                  ((n = He(
                    Ge().mark(function t() {
                      var e, n;
                      return Ge().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  Ke(Qe, this).showStoryDetailLoading(),
                                  (t.prev = 1),
                                  (t.next = 4),
                                  Ke(tn, this).getStoryById(Ke($e, this))
                                );
                              case 4:
                                if ((e = t.sent).ok) {
                                  t.next = 9;
                                  break;
                                }
                                return (
                                  console.error('showStoryDetailAndMap: response:', e),
                                  Ke(Qe, this).populateStoryDetailError(e.message),
                                  t.abrupt('return')
                                );
                              case 9:
                                return (t.next = 11), storyMapper(e.data);
                              case 11:
                                (n = t.sent),
                                  console.log(n),
                                  Ke(Qe, this).populateStoryDetailAndInitialMap(e.message, n),
                                  (t.next = 20);
                                break;
                              case 16:
                                (t.prev = 16),
                                  (t.t0 = t.catch(1)),
                                  console.error('showStoryDetailAndMap: error:', t.t0),
                                  Ke(Qe, this).populateStoryDetailError(t.t0.message);
                              case 20:
                                return (
                                  (t.prev = 20), Ke(Qe, this).hideStoryDetailLoading(), t.finish(20)
                                );
                              case 23:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 16, 20, 23]],
                      );
                    }),
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: 'showSaveButton',
                value: function () {
                  Xe(en, this, rn).call(this)
                    ? Ke(Qe, this).renderRemoveButton()
                    : Ke(Qe, this).renderSaveButton();
                },
              },
            ]),
            e && Ue(t.prototype, e),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
          var t, e, n, r;
        })();
      function rn() {
        return !1;
      }
      function on(t) {
        return (
          (on =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          on(t)
        );
      }
      function an() {
        an = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == on(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(on(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function sn(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function cn(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              sn(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              sn(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function un(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, hn(r.key), r);
        }
      }
      function hn(t) {
        var e = (function (t) {
          if ('object' != on(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != on(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == on(e) ? e : e + '';
      }
      function ln(t, e, n) {
        (function (t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object');
        })(t, e),
          e.set(t, n);
      }
      function fn(t, e) {
        return t.get(dn(t, e));
      }
      function pn(t, e, n) {
        return t.set(dn(t, e), n), n;
      }
      function dn(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var mn = new WeakMap(),
        vn = new WeakMap(),
        yn = new WeakMap(),
        _n = (function () {
          return (
            (t = function t() {
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                ln(this, mn, null),
                ln(this, vn, null),
                ln(this, yn, null);
            }),
            (i = [
              {
                key: 'render',
                value:
                  ((c = cn(
                    an().mark(function t() {
                      return an().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                'return',
                                '\n      <section>\n        <div class="story-detail__container">\n          <div id="story-detail" class="story-detail"></div>\n          <div id="story-detail-loading-container"></div>\n        </div>\n      </section>\n      \n      <section class="container">\n        <hr>\n        <div class="story-detail__comments__container">\n          <div class="story-detail__comments-form__container">\n            <h2 class="story-detail__comments-form__title">Beri Tanggapan</h2>\n            <form id="comments-list-form" class="story-detail__comments-form__form">\n              <textarea name="body" placeholder="Beri tanggapan terkait cerita."></textarea>\n              <div id="submit-button-container">\n                <button class="btn" type="submit">Tanggapi</button>\n              </div>\n            </form>\n          </div>\n          <hr>\n          <div class="story-detail__comments-list__container">\n            <div id="story-detail-comments-list"></div>\n            <div id="comments-list-loading-container"></div>\n          </div>\n        </div>\n      </section>\n    ',
                              );
                            case 1:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    }),
                  )),
                  function () {
                    return c.apply(this, arguments);
                  }),
              },
              {
                key: 'afterRender',
                value:
                  ((s = cn(
                    an().mark(function t() {
                      return an().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                pn(mn, this, new nn(n(r()).id, { view: this, apiModel: e })),
                                  fn(mn, this).showStoryDetail();
                              case 2:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return s.apply(this, arguments);
                  }),
              },
              {
                key: 'populateStoryDetailAndInitialMap',
                value:
                  ((a = cn(
                    an().mark(function t(e, n) {
                      var r, i, o;
                      return an().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (document.getElementById('story-detail').innerHTML = y({
                                    title: n.title,
                                    description: n.description,
                                    damageLevel: n.damageLevel,
                                    evidenceImages: n.evidenceImages,
                                    location: n.location,
                                    latitudeLocation: n.location.latitude,
                                    longitudeLocation: n.location.longitude,
                                    reporterName: n.reporter.name,
                                    createdAt: n.createdAt,
                                  })),
                                  p(document.getElementById('images')),
                                  (t.next = 4),
                                  fn(mn, this).showStoryDetailMap()
                                );
                              case 4:
                                fn(yn, this) &&
                                  ((r = [n.location.latitude, n.location.longitude]),
                                  (i = { alt: n.title }),
                                  (o = { content: n.title }),
                                  fn(yn, this).changeCamera(r),
                                  fn(yn, this).addMarker(r, i, o)),
                                  fn(mn, this).showSaveButton(),
                                  this.addNotifyMeEventListener();
                              case 7:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function (t, e) {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: 'populateStoryDetailError',
                value: function (t) {
                  document.getElementById('story-detail').innerHTML =
                    generateStoriesDetailErrorTemplate(t);
                },
              },
              {
                key: 'initialMap',
                value:
                  ((o = cn(
                    an().mark(function t() {
                      return an().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.t0 = pn),
                                  (t.t1 = yn),
                                  (t.t2 = this),
                                  (t.next = 5),
                                  le.build('#map', { zoom: 15 })
                                );
                              case 5:
                                (t.t3 = t.sent), (0, t.t0)(t.t1, t.t2, t.t3);
                              case 7:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: 'clearForm',
                value: function () {
                  fn(vn, this).reset();
                },
              },
              {
                key: 'renderSaveButton',
                value: function () {
                  (document.getElementById('save-actions-container').innerHTML =
                    '\n    <button id="story-detail-save" class="btn btn-transparent">\n      Simpan cerita <i class="far fa-bookmark"></i>\n    </button>\n  '),
                    document.getElementById('story-detail-save').addEventListener(
                      'click',
                      cn(
                        an().mark(function t() {
                          return an().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  alert('Fitur simpan cerita akan segera hadir!');
                                case 1:
                                case 'end':
                                  return t.stop();
                              }
                          }, t);
                        }),
                      ),
                    );
                },
              },
              {
                key: 'renderRemoveButton',
                value: function () {
                  (document.getElementById('save-actions-container').innerHTML =
                    '\n    <button id="story-detail-remove" class="btn btn-transparent">\n      Buang cerita <i class="fas fa-bookmark"></i>\n    </button>\n  '),
                    document.getElementById('story-detail-remove').addEventListener(
                      'click',
                      cn(
                        an().mark(function t() {
                          return an().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  alert('Fitur simpan cerita akan segera hadir!');
                                case 1:
                                case 'end':
                                  return t.stop();
                              }
                          }, t);
                        }),
                      ),
                    );
                },
              },
              {
                key: 'addNotifyMeEventListener',
                value: function () {
                  document
                    .getElementById('story-detail-notify-me')
                    .addEventListener('click', function () {
                      alert('Fitur notifikasi cerita akan segera hadir!');
                    });
                },
              },
              {
                key: 'showStoryDetailLoading',
                value: function () {
                  document.getElementById('story-detail-loading-container').innerHTML =
                    '\n    <div class="loader loader-absolute"></div>\n  ';
                },
              },
              {
                key: 'hideStoryDetailLoading',
                value: function () {
                  document.getElementById('story-detail-loading-container').innerHTML = '';
                },
              },
              {
                key: 'showMapLoading',
                value: function () {
                  document.getElementById('map-loading-container').innerHTML =
                    '\n    <div class="loader loader-absolute"></div>\n  ';
                },
              },
              {
                key: 'hideMapLoading',
                value: function () {
                  document.getElementById('map-loading-container').innerHTML = '';
                },
              },
              {
                key: 'showCommentsLoading',
                value: function () {
                  document.getElementById('comments-list-loading-container').innerHTML =
                    '\n    <div class="loader loader-absolute"></div>\n  ';
                },
              },
              {
                key: 'hideCommentsLoading',
                value: function () {
                  document.getElementById('comments-list-loading-container').innerHTML = '';
                },
              },
              {
                key: 'showSubmitLoadingButton',
                value: function () {
                  document.getElementById('submit-button-container').innerHTML =
                    '\n      <button class="btn" type="submit" disabled>\n        <i class="fas fa-spinner loader-button"></i> Tanggapi\n      </button>\n    ';
                },
              },
              {
                key: 'hideSubmitLoadingButton',
                value: function () {
                  document.getElementById('submit-button-container').innerHTML =
                    '\n      <button class="btn" type="submit">Tanggapi</button>\n    ';
                },
              },
            ]),
            i && un(t.prototype, i),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
          var t, i, o, a, s, c;
        })();
      function gn(t) {
        return (
          (gn =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          gn(t)
        );
      }
      function wn() {
        wn = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == gn(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(gn(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function bn(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function xn(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              bn(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              bn(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function Ln(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, En(r.key), r);
        }
      }
      function En(t) {
        var e = (function (t) {
          if ('object' != gn(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != gn(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == gn(e) ? e : e + '';
      }
      function Pn(t, e, n) {
        (function (t, e) {
          if (e.has(t))
            throw new TypeError('Cannot initialize the same private elements twice on an object');
        })(t, e),
          e.set(t, n);
      }
      function kn(t, e) {
        return t.get(Sn(t, e));
      }
      function Tn(t, e, n) {
        return t.set(Sn(t, e), n), n;
      }
      function Sn(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var On = new WeakMap(),
        Mn = new WeakMap(),
        jn = (function () {
          return (
            (t = function t(e) {
              var n = e.view,
                r = e.model;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                Pn(this, On, void 0),
                Pn(this, Mn, void 0),
                Tn(On, this, n),
                Tn(Mn, this, r);
            }),
            (e = [
              {
                key: 'showNewFormMap',
                value:
                  ((r = xn(
                    wn().mark(function t() {
                      return wn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  kn(On, this).showMapLoading(),
                                  (t.prev = 1),
                                  (t.next = 4),
                                  kn(On, this).initialMap()
                                );
                              case 4:
                                t.next = 9;
                                break;
                              case 6:
                                (t.prev = 6),
                                  (t.t0 = t.catch(1)),
                                  console.error('showNewFormMap: error:', t.t0);
                              case 9:
                                return (t.prev = 9), kn(On, this).hideMapLoading(), t.finish(9);
                              case 12:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 6, 9, 12]],
                      );
                    }),
                  )),
                  function () {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: 'postNewStory',
                value:
                  ((n = xn(
                    wn().mark(function t(e) {
                      var n, r, i, o, a, s;
                      return wn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = e.description),
                                  (r = e.evidenceImages),
                                  (i = e.latitude),
                                  (o = e.longitude),
                                  kn(On, this).showSubmitLoadingButton(),
                                  (t.prev = 2),
                                  (a = {
                                    description: n,
                                    evidenceImages: r,
                                    latitude: i,
                                    longitude: o,
                                  }),
                                  (t.next = 6),
                                  kn(Mn, this).storeNewReport(a)
                                );
                              case 6:
                                if ((s = t.sent).ok) {
                                  t.next = 11;
                                  break;
                                }
                                return (
                                  console.error('postNewReport: response:', s),
                                  kn(On, this).storeFailed(s.message),
                                  t.abrupt('return')
                                );
                              case 11:
                                kn(On, this).storeSuccessfully(s.message, s.data), (t.next = 18);
                                break;
                              case 14:
                                (t.prev = 14),
                                  (t.t0 = t.catch(2)),
                                  console.error('postNewReport: error:', t.t0),
                                  kn(On, this).storeFailed(t.t0.message);
                              case 18:
                                return (
                                  (t.prev = 18),
                                  kn(On, this).hideSubmitLoadingButton(),
                                  t.finish(18)
                                );
                              case 21:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[2, 14, 18, 21]],
                      );
                    }),
                  )),
                  function (t) {
                    return n.apply(this, arguments);
                  }),
              },
            ]),
            e && Ln(t.prototype, e),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
          var t, e, n, r;
        })();
      function In(t) {
        return (
          (In =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          In(t)
        );
      }
      function zn(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function Cn() {
        Cn = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == In(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(In(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function Bn(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function An(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              Bn(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              Bn(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function Nn(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, Zn(r.key), r);
        }
      }
      function Zn(t) {
        var e = (function (t) {
          if ('object' != In(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != In(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == In(e) ? e : e + '';
      }
      function Rn(t, e, n) {
        Dn(t, e), e.set(t, n);
      }
      function Dn(t, e) {
        if (e.has(t))
          throw new TypeError('Cannot initialize the same private elements twice on an object');
      }
      function Fn(t, e) {
        return t.get(Wn(t, e));
      }
      function Gn(t, e, n) {
        return t.set(Wn(t, e), n), n;
      }
      function Wn(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var Hn = new WeakMap(),
        Un = new WeakMap(),
        Yn = new WeakMap(),
        Vn = new WeakMap(),
        qn = new WeakMap(),
        Kn = new WeakMap(),
        Jn = new WeakMap(),
        Xn = new WeakMap(),
        $n = new WeakSet(),
        Qn = (function () {
          function t(e) {
            var n,
              r = e.video,
              i = e.cameraSelect,
              o = e.canvas;
            e.options,
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
              Dn(this, (n = $n)),
              n.add(this),
              Rn(this, Hn, void 0),
              Rn(this, Un, !1),
              Rn(this, Yn, 640),
              Rn(this, Vn, 0),
              Rn(this, qn, void 0),
              Rn(this, Kn, void 0),
              Rn(this, Jn, void 0),
              Rn(this, Xn, void 0),
              Gn(qn, this, r),
              Gn(Kn, this, i),
              Gn(Jn, this, o),
              Wn($n, this, tr).call(this);
          }
          return (
            (e = t),
            (n = [
              {
                key: 'launch',
                value:
                  ((o = An(
                    Cn().mark(function e() {
                      return Cn().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.t0 = Gn),
                                  (e.t1 = Hn),
                                  (e.t2 = this),
                                  (e.next = 5),
                                  Wn($n, this, rr).call(this)
                                );
                              case 5:
                                (e.t3 = e.sent),
                                  (0, e.t0)(e.t1, e.t2, e.t3),
                                  t.addNewStream(Fn(Hn, this)),
                                  (Fn(qn, this).srcObject = Fn(Hn, this)),
                                  Fn(qn, this).play(),
                                  Wn($n, this, or).call(this);
                              case 11:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: 'stop',
                value: function () {
                  Fn(qn, this) && ((Fn(qn, this).srcObject = null), Gn(Un, this, !1)),
                    Fn(Hn, this) instanceof MediaStream &&
                      Fn(Hn, this)
                        .getTracks()
                        .forEach(function (t) {
                          t.stop();
                        }),
                    Wn($n, this, or).call(this);
                },
              },
              {
                key: 'takePicture',
                value:
                  ((i = An(
                    Cn().mark(function t() {
                      var e,
                        n = this;
                      return Cn().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (Fn(Yn, this) && Fn(Vn, this)) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt('return', null);
                              case 2:
                                return (
                                  (e = Fn(Jn, this).getContext('2d')),
                                  (Fn(Jn, this).width = Fn(Yn, this)),
                                  (Fn(Jn, this).height = Fn(Vn, this)),
                                  e.drawImage(Fn(qn, this), 0, 0, Fn(Yn, this), Fn(Vn, this)),
                                  (t.next = 8),
                                  new Promise(function (t) {
                                    Fn(Jn, n).toBlob(function (e) {
                                      return t(e);
                                    });
                                  })
                                );
                              case 8:
                                return t.abrupt('return', t.sent);
                              case 9:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: 'addCheeseButtonListener',
                value: function (t, e) {
                  Gn(Xn, this, document.querySelector(t)), (Fn(Xn, this).onclick = e);
                },
              },
            ]),
            (r = [
              {
                key: 'addNewStream',
                value: function (t) {
                  Array.isArray(window.currentStreams)
                    ? (window.currentStreams = [].concat(
                        (function (t) {
                          return (
                            (function (t) {
                              if (Array.isArray(t)) return zn(t);
                            })(t) ||
                            (function (t) {
                              if (
                                ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
                                null != t['@@iterator']
                              )
                                return Array.from(t);
                            })(t) ||
                            (function (t, e) {
                              if (t) {
                                if ('string' == typeof t) return zn(t, e);
                                var n = {}.toString.call(t).slice(8, -1);
                                return (
                                  'Object' === n && t.constructor && (n = t.constructor.name),
                                  'Map' === n || 'Set' === n
                                    ? Array.from(t)
                                    : 'Arguments' === n ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                      ? zn(t, e)
                                      : void 0
                                );
                              }
                            })(t) ||
                            (function () {
                              throw new TypeError(
                                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                              );
                            })()
                          );
                        })(window.currentStreams),
                        [t],
                      ))
                    : (window.currentStreams = [t]);
                },
              },
              {
                key: 'stopAllStreams',
                value: function () {
                  Array.isArray(window.currentStreams)
                    ? window.currentStreams.forEach(function (t) {
                        t.active &&
                          t.getTracks().forEach(function (t) {
                            return t.stop();
                          });
                      })
                    : (window.currentStreams = []);
                },
              },
            ]),
            n && Nn(e.prototype, n),
            r && Nn(e, r),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            e
          );
          var e, n, r, i, o;
        })();
      function tr() {
        var t = this;
        (Fn(qn, this).oncanplay = function () {
          Fn(Un, t) ||
            (Gn(Vn, t, (Fn(qn, t).videoHeight * Fn(Yn, t)) / Fn(qn, t).videoWidth),
            Fn(Jn, t).setAttribute('width', Fn(Yn, t)),
            Fn(Jn, t).setAttribute('height', Fn(Vn, t)),
            Gn(Un, t, !0));
        }),
          (Fn(Kn, this).onchange = An(
            Cn().mark(function e() {
              return Cn().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.stop();
                    case 2:
                      return (e.next = 4), t.launch();
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          ));
      }
      function er(t) {
        return nr.apply(this, arguments);
      }
      function nr() {
        return (nr = An(
          Cn().mark(function t(e) {
            var n, r, i, o, a;
            return Cn().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), e instanceof MediaStream)) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt('return', Promise.reject(Error('MediaStream not found!')));
                    case 3:
                      return (
                        (n = e.getVideoTracks()[0].getSettings()),
                        (r = n.deviceId),
                        (t.next = 6),
                        navigator.mediaDevices.enumerateDevices()
                      );
                    case 6:
                      (i = t.sent),
                        (o = i.filter(function (t) {
                          return 'videoinput' === t.kind;
                        })),
                        (a = o.reduce(function (t, e, n) {
                          return t.concat(
                            '\n          <option\n            value="'
                              .concat(e.deviceId, '"\n            ')
                              .concat(
                                r === e.deviceId ? 'selected' : '',
                                '\n          >\n            ',
                              )
                              .concat(
                                e.label || 'Camera '.concat(n + 1),
                                '\n          </option>\n        ',
                              ),
                          );
                        }, '')),
                        (Fn(Kn, this).innerHTML = a),
                        (t.next = 15);
                      break;
                    case 12:
                      (t.prev = 12),
                        (t.t0 = t.catch(0)),
                        console.error('#populateDeviceList: error:', t.t0);
                    case 15:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 12]],
            );
          }),
        )).apply(this, arguments);
      }
      function rr() {
        return ir.apply(this, arguments);
      }
      function ir() {
        return (ir = An(
          Cn().mark(function t() {
            var e, n;
            return Cn().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (e =
                          Fn(Un, this) || Fn(Kn, this).value
                            ? { exact: Fn(Kn, this).value }
                            : void 0),
                        (t.next = 4),
                        navigator.mediaDevices.getUserMedia({
                          video: { aspectRatio: 4 / 3, deviceId: e },
                        })
                      );
                    case 4:
                      return (n = t.sent), (t.next = 7), Wn($n, this, er).call(this, n);
                    case 7:
                      return t.abrupt('return', n);
                    case 10:
                      return (
                        (t.prev = 10),
                        (t.t0 = t.catch(0)),
                        console.error('#getStream: error:', t.t0),
                        t.abrupt('return', null)
                      );
                    case 14:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 10]],
            );
          }),
        )).apply(this, arguments);
      }
      function or() {
        var t = Fn(Jn, this).getContext('2d');
        (t.fillStyle = '#AAAAAA'), t.fillRect(0, 0, Fn(Jn, this).width, Fn(Jn, this).height);
      }
      function ar(t) {
        return (
          (ar =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          ar(t)
        );
      }
      function sr(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function cr() {
        cr = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == ar(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(ar(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function ur(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function hr(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              ur(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              ur(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function lr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, fr(r.key), r);
        }
      }
      function fr(t) {
        var e = (function (t) {
          if ('object' != ar(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != ar(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == ar(e) ? e : e + '';
      }
      function pr(t, e, n) {
        dr(t, e), e.set(t, n);
      }
      function dr(t, e) {
        if (e.has(t))
          throw new TypeError('Cannot initialize the same private elements twice on an object');
      }
      function mr(t, e) {
        return t.get(yr(t, e));
      }
      function vr(t, e, n) {
        return t.set(yr(t, e), n), n;
      }
      function yr(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var _r = new WeakMap(),
        gr = new WeakMap(),
        wr = new WeakMap(),
        br = new WeakMap(),
        xr = new WeakMap(),
        Lr = new WeakMap(),
        Er = new WeakSet(),
        Pr = (function () {
          return (
            (t = function t() {
              var e;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                dr(this, (e = Er)),
                e.add(this),
                pr(this, _r, void 0),
                pr(this, gr, void 0),
                pr(this, wr, void 0),
                pr(this, br, !1),
                pr(this, xr, []),
                pr(this, Lr, null);
            }),
            (n = [
              {
                key: 'render',
                value:
                  ((o = hr(
                    cr().mark(function t() {
                      return cr().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt(
                                'return',
                                '\n      <section>\n        <div class="new-story__header">\n          <div class="container">\n            <h1 class="new-story__header__title">Buat Cerita Baru</h1>\n            <p class="new-story__header__description">\n              Silakan lengkapi formulir di bawah untuk membuat cerita baru.<br>\n              Pastikan cerita yang dibuat adalah valid.\n            </p>\n          </div>\n        </div>\n      </section>\n  \n      <section class="container">\n        <div class="new-form__container">\n          <form id="new-form" class="new-form">\n            \n            <div class="form-control">\n              <label for="description-input" class="new-form__description__title">Keterangan</label>\n  \n              <div class="new-form__description__container">\n                <textarea\n                  id="description-input"\n                  name="description"\n                  placeholder="Masukkan dengan lengkap cerita anda"\n                ></textarea>\n              </div>\n            </div>\n            <div class="form-control">\n              <label for="documentations-input" class="new-form__documentations__title">Dokumentasi</label>\n              <div id="documentations-more-info">Anda dapat menyertakan foto sebagai dokumentasi.</div>\n  \n              <div class="new-form__documentations__container">\n                <div class="new-form__documentations__buttons">\n                  <button id="documentations-input-button" class="btn btn-outline" type="button">\n                    Ambil Gambar\n                  </button>\n                  <input\n                    id="documentations-input"\n                    name="documentations"\n                    type="file"\n                    accept="image/*"\n                    multiple\n                    hidden="hidden"\n                    aria-multiline="true"\n                    aria-describedby="documentations-more-info"\n                  >\n                  <button id="open-documentations-camera-button" class="btn btn-outline" type="button">\n                    Buka Kamera\n                  </button>\n                </div>\n                <div id="camera-container" class="new-form__camera__container">\n                  <video id="camera-video" class="new-form__camera__video">\n                    Video stream not available.\n                  </video>\n                  <canvas id="camera-canvas" class="new-form__camera__canvas"></canvas>\n  \n                  <div class="new-form__camera__tools">\n                    <select id="camera-select"></select>\n                    <div class="new-form__camera__tools_buttons">\n                      <button id="camera-take-button" class="btn" type="button">\n                        Ambil Gambar\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <ul id="documentations-taken-list" class="new-form__documentations__outputs"></ul>\n              </div>\n            </div>\n            <div class="form-control">\n              <div class="new-form__location__title">Lokasi</div>\n  \n              <div class="new-form__location__container">\n                <div class="new-form__location__map__container">\n                  <div id="map" class="new-form__location__map"></div>\n                  <div id="map-loading-container"></div>\n                </div>\n                <div class="new-form__location__lat-lng">\n                <input type="number" name="latitude" value="-6.175389" disabled>\n                <input type="number" name="longitude" value="106.827139" disabled>\n                </div>\n              </div>\n            </div>\n            <div class="form-buttons">\n              <span id="submit-button-container">\n                <button class="btn" type="submit">Buat Cerita</button>\n              </span>\n              <a class="btn btn-outline" href="#/">Batal</a>\n            </div>\n          </form>\n        </div>\n      </section>\n    ',
                              );
                            case 1:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    }),
                  )),
                  function () {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: 'afterRender',
                value:
                  ((i = hr(
                    cr().mark(function t() {
                      return cr().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                vr(_r, this, new jn({ view: this, model: e })),
                                  vr(xr, this, []),
                                  mr(_r, this).showNewFormMap(),
                                  yr(Er, this, kr).call(this);
                              case 4:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: 'initialMap',
                value:
                  ((r = hr(
                    cr().mark(function t() {
                      var e,
                        n,
                        r = this;
                      return cr().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.t0 = vr),
                                  (t.t1 = Lr),
                                  (t.t2 = this),
                                  (t.next = 5),
                                  le.build('#map', { zoom: 15, locate: !0 })
                                );
                              case 5:
                                (t.t3 = t.sent),
                                  (0, t.t0)(t.t1, t.t2, t.t3),
                                  (e = mr(Lr, this).getCenter()),
                                  yr(Er, this, Tr).call(this, e.latitude, e.longitude),
                                  (n = mr(Lr, this).addMarker([e.latitude, e.longitude], {
                                    draggable: 'true',
                                  })).addEventListener('move', function (t) {
                                    var e = t.target.getLatLng();
                                    yr(Er, r, Tr).call(r, e.lat, e.lng);
                                  }),
                                  mr(Lr, this).addMapEventListener('click', function (t) {
                                    n.setLatLng(t.latlng), t.sourceTarget.flyTo(t.latlng);
                                  });
                              case 12:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                      );
                    }),
                  )),
                  function () {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: 'storeSuccessfully',
                value: function (t) {
                  console.log(t), this.clearForm(), (location.hash = '/');
                },
              },
              {
                key: 'storeFailed',
                value: function (t) {
                  alert(t);
                },
              },
              {
                key: 'clearForm',
                value: function () {
                  mr(gr, this).reset();
                },
              },
              {
                key: 'showMapLoading',
                value: function () {
                  document.getElementById('map-loading-container').innerHTML =
                    '\n    <div class="loader loader-absolute"></div>\n  ';
                },
              },
              {
                key: 'hideMapLoading',
                value: function () {
                  document.getElementById('map-loading-container').innerHTML = '';
                },
              },
              {
                key: 'showSubmitLoadingButton',
                value: function () {
                  document.getElementById('submit-button-container').innerHTML =
                    '\n      <button class="btn" type="submit" disabled>\n        <i class="fas fa-spinner loader-button"></i> Buat Cerita\n      </button>\n    ';
                },
              },
              {
                key: 'hideSubmitLoadingButton',
                value: function () {
                  document.getElementById('submit-button-container').innerHTML =
                    '\n      <button class="btn" type="submit">Buat Cerita</button>\n    ';
                },
              },
            ]),
            n && lr(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
          var t, n, r, i, o;
        })();
      function kr() {
        var t = this;
        vr(gr, this, document.getElementById('new-form')),
          mr(gr, this).addEventListener(
            'submit',
            (function () {
              var e = hr(
                cr().mark(function e(n) {
                  var r;
                  return cr().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n.preventDefault(),
                            (r = {
                              description: mr(gr, t).elements.namedItem('description').value,
                              evidenceImages: mr(xr, t).map(function (t) {
                                return t.blob;
                              }),
                              latitude: mr(gr, t).elements.namedItem('latitude').value,
                              longitude: mr(gr, t).elements.namedItem('longitude').value,
                            }),
                            (e.next = 4),
                            mr(_r, t).postNewStory(r)
                          );
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          ),
          document.getElementById('documentations-input').addEventListener(
            'change',
            (function () {
              var e = hr(
                cr().mark(function e(n) {
                  var r;
                  return cr().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = Object.values(n.target.files).map(
                              (function () {
                                var e = hr(
                                  cr().mark(function e(n) {
                                    return cr().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 2), yr(Er, t, Or).call(t, n);
                                          case 2:
                                            return e.abrupt('return', e.sent);
                                          case 3:
                                          case 'end':
                                            return e.stop();
                                        }
                                    }, e);
                                  }),
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })(),
                            )),
                            (e.next = 3),
                            Promise.all(r)
                          );
                        case 3:
                          return (e.next = 5), yr(Er, t, jr).call(t);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          ),
          document
            .getElementById('documentations-input-button')
            .addEventListener('click', function () {
              mr(gr, t).elements.namedItem('documentations-input').click();
            });
        var e = document.getElementById('camera-container');
        document.getElementById('open-documentations-camera-button').addEventListener(
          'click',
          (function () {
            var n = hr(
              cr().mark(function n(r) {
                return cr().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          (e.classList.toggle('open'),
                          vr(br, t, e.classList.contains('open')),
                          !mr(br, t))
                        ) {
                          n.next = 8;
                          break;
                        }
                        return (
                          (r.currentTarget.textContent = 'Tutup Kamera'),
                          yr(Er, t, Sr).call(t),
                          (n.next = 7),
                          mr(wr, t).launch()
                        );
                      case 7:
                        return n.abrupt('return');
                      case 8:
                        (r.currentTarget.textContent = 'Buka Kamera'), mr(wr, t).stop();
                      case 10:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              }),
            );
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
        );
      }
      function Tr(t, e) {
        (mr(gr, this).elements.namedItem('latitude').value = t),
          (mr(gr, this).elements.namedItem('longitude').value = e);
      }
      function Sr() {
        var t = this;
        mr(wr, this) ||
          vr(
            wr,
            this,
            new Qn({
              video: document.getElementById('camera-video'),
              cameraSelect: document.getElementById('camera-select'),
              canvas: document.getElementById('camera-canvas'),
            }),
          ),
          mr(wr, this).addCheeseButtonListener(
            '#camera-take-button',
            hr(
              cr().mark(function e() {
                var n;
                return cr().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), mr(wr, t).takePicture();
                      case 2:
                        return (n = e.sent), (e.next = 5), yr(Er, t, Or).call(t, n);
                      case 5:
                        return (e.next = 7), yr(Er, t, jr).call(t);
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            ),
          );
      }
      function Or(t) {
        return Mr.apply(this, arguments);
      }
      function Mr() {
        return (Mr = hr(
          cr().mark(function t(e) {
            var n, r;
            return cr().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((n = e), !(e instanceof String))) {
                        t.next = 5;
                        break;
                      }
                      return (t.next = 4), m(e, 'image/png');
                    case 4:
                      n = t.sent;
                    case 5:
                      (r = {
                        id: ''
                          .concat(Date.now(), '-')
                          .concat(Math.random().toString(36).substring(2, 9)),
                        blob: n,
                      }),
                        vr(
                          xr,
                          this,
                          [].concat(
                            (function (t) {
                              if (Array.isArray(t)) return sr(t);
                            })((i = mr(xr, this))) ||
                              (function (t) {
                                if (
                                  ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
                                  null != t['@@iterator']
                                )
                                  return Array.from(t);
                              })(i) ||
                              (function (t, e) {
                                if (t) {
                                  if ('string' == typeof t) return sr(t, e);
                                  var n = {}.toString.call(t).slice(8, -1);
                                  return (
                                    'Object' === n && t.constructor && (n = t.constructor.name),
                                    'Map' === n || 'Set' === n
                                      ? Array.from(t)
                                      : 'Arguments' === n ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                        ? sr(t, e)
                                        : void 0
                                  );
                                }
                              })(i) ||
                              (function () {
                                throw new TypeError(
                                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                );
                              })(),
                            [r],
                          ),
                        );
                    case 7:
                    case 'end':
                      return t.stop();
                  }
                var i;
              },
              t,
              this,
            );
          }),
        )).apply(this, arguments);
      }
      function jr() {
        return Ir.apply(this, arguments);
      }
      function Ir() {
        return (Ir = hr(
          cr().mark(function t() {
            var e,
              n = this;
            return cr().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (e = mr(xr, this).reduce(function (t, e, n) {
                        var r = URL.createObjectURL(e.blob);
                        return t.concat(
                          '\n        <li class="new-form__documentations__outputs-item">\n          <button type="button" data-deletepictureid="'
                            .concat(
                              e.id,
                              '" class="new-form__documentations__outputs-item__delete-btn">\n            <img src="',
                            )
                            .concat(r, '" alt="Dokumentasi ke-')
                            .concat(n + 1, '">\n          </button>\n        </li>\n      '),
                        );
                      }, '')),
                        (document.getElementById('documentations-taken-list').innerHTML = e),
                        document
                          .querySelectorAll('button[data-deletepictureid]')
                          .forEach(function (t) {
                            return t.addEventListener('click', function (t) {
                              var e = t.currentTarget.dataset.deletepictureid;
                              yr(Er, n, zr).call(n, e) ||
                                console.log('Picture with id '.concat(e, ' was not found')),
                                yr(Er, n, jr).call(n);
                            });
                          });
                    case 3:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              this,
            );
          }),
        )).apply(this, arguments);
      }
      function zr(t) {
        var e = mr(xr, this).find(function (e) {
          return e.id == t;
        });
        return e
          ? (vr(
              xr,
              this,
              mr(xr, this).filter(function (t) {
                return t.id != e.id;
              }),
            ),
            e)
          : null;
      }
      var Cr = {
        '/login': function () {
          return E(new Ht());
        },
        '/register': function () {
          return E(new gt());
        },
        '/': function () {
          return P(new De());
        },
        '/stories': function () {
          return P(new Pr());
        },
        '/stories/:id': function () {
          return P(new _n());
        },
      };
      function Br(t) {
        return (
          (Br =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          Br(t)
        );
      }
      function Ar() {
        Ar = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == Br(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(Br(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function Nr(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function Zr(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              Nr(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              Nr(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function Rr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, Dr(r.key), r);
        }
      }
      function Dr(t) {
        var e = (function (t) {
          if ('object' != Br(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var n = e.call(t, 'string');
            if ('object' != Br(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(t);
        })(t);
        return 'symbol' == Br(e) ? e : e + '';
      }
      function Fr(t, e, n) {
        Gr(t, e), e.set(t, n);
      }
      function Gr(t, e) {
        if (e.has(t))
          throw new TypeError('Cannot initialize the same private elements twice on an object');
      }
      function Wr(t, e) {
        return t.get(Ur(t, e));
      }
      function Hr(t, e, n) {
        return t.set(Ur(t, e), n), n;
      }
      function Ur(t, e, n) {
        if ('function' == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
        throw new TypeError('Private element is not present on this object');
      }
      var Yr = new WeakMap(),
        Vr = new WeakMap(),
        qr = new WeakMap(),
        Kr = new WeakMap(),
        Jr = new WeakSet(),
        Xr = (function () {
          return (
            (t = function t(e) {
              var n,
                r = e.content,
                i = e.drawerNavigation,
                o = e.drawerButton,
                a = e.skipLinkButton;
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                Gr(this, (n = Jr)),
                n.add(this),
                Fr(this, Yr, void 0),
                Fr(this, Vr, void 0),
                Fr(this, qr, void 0),
                Fr(this, Kr, void 0),
                Hr(Yr, this, r),
                Hr(Vr, this, o),
                Hr(qr, this, i),
                Hr(Kr, this, a),
                Ur(Jr, this, $r).call(this);
            }),
            (e = [
              {
                key: 'renderPage',
                value:
                  ((n = Zr(
                    Ar().mark(function t() {
                      var e,
                        n,
                        r,
                        i = this;
                      return Ar().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (e = o()),
                                (n = (0, Cr[e])()),
                                (r = v({
                                  updateDOM: (function () {
                                    var t = Zr(
                                      Ar().mark(function t() {
                                        return Ar().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (t.next = 2), n.render();
                                              case 2:
                                                (Wr(Yr, i).innerHTML = t.sent), n.afterRender();
                                              case 4:
                                              case 'end':
                                                return t.stop();
                                            }
                                        }, t);
                                      }),
                                    );
                                    return function () {
                                      return t.apply(this, arguments);
                                    };
                                  })(),
                                })),
                                r.ready.catch(console.error),
                                r.updateCallbackDone.then(function () {
                                  scrollTo({ top: 0, behavior: 'instant' }), Ur(Jr, i, ti).call(i);
                                });
                            case 6:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    }),
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
            ]),
            e && Rr(t.prototype, e),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
          var t, e, n;
        })();
      function $r() {
        var t, e;
        (t = Wr(Kr, this)),
          (e = Wr(Yr, this)),
          t.addEventListener('click', function () {
            return e.focus();
          }),
          Ur(Jr, this, Qr).call(this);
      }
      function Qr() {
        var t = this;
        Wr(Vr, this).addEventListener('click', function () {
          Wr(qr, t).classList.toggle('open');
        }),
          document.body.addEventListener('click', function (e) {
            var n = Wr(qr, t).contains(e.target),
              r = Wr(Vr, t).contains(e.target);
            n || r || Wr(qr, t).classList.remove('open'),
              Wr(qr, t)
                .querySelectorAll('a')
                .forEach(function (n) {
                  n.contains(e.target) && Wr(qr, t).classList.remove('open');
                });
          });
      }
      function ti() {
        var t = !!w(),
          e = Wr(qr, this).children.namedItem('navlist-main'),
          n = Wr(qr, this).children.namedItem('navlist');
        if (!t)
          return (
            (e.innerHTML = ''),
            void (n.innerHTML =
              '\n    <li id="push-notification-tools" class="push-notification-tools"></li>\n    <li><a id="login-button" href="#/login">Login</a></li>\n    <li><a id="register-button" href="#/register">Register</a></li>\n  ')
          );
        (e.innerHTML =
          '\n    <li><a id="story-list-button" class="story-list-button" href="#/">Daftar Laporan</a></li>\n    <li><a id="bookmark-button" class="bookmark-button" href="#/bookmark">Laporan Tersimpan</a></li>\n  '),
          (n.innerHTML =
            '\n    <li id="push-notification-tools" class="push-notification-tools"></li>\n    <li><a id="new-story-button" class="btn new-story-button" href="#/new">Buat Laporan <i class="fas fa-plus"></i></a></li>\n    <li><a id="logout-button" class="logout-button" href="#/logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>\n  '),
          document.getElementById('logout-button').addEventListener('click', function (t) {
            t.preventDefault(),
              confirm('Apakah Anda yakin ingin keluar?') && (k(), (location.hash = '/login'));
          });
      }
      function ei(t) {
        return (
          (ei =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          ei(t)
        );
      }
      function ni() {
        ni = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new M(r || []);
          return i(a, '_invoke', { value: k(t, n, s) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = h;
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          m = 'completed',
          v = {};
        function y() {}
        function _() {}
        function g() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(j([])));
        x && x !== n && r.call(x, a) && (w = x);
        var L = (g.prototype = y.prototype = Object.create(w));
        function E(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function P(t, e) {
          function n(i, o, a, s) {
            var c = l(t[i], t, o);
            if ('throw' !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && 'object' == ei(h) && r.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      n('next', t, a, s);
                    },
                    function (t) {
                      n('throw', t, a, s);
                    },
                  )
                : e.resolve(h).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n('throw', t, a, s);
                    },
                  );
            }
            s(c.arg);
          }
          var o;
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function k(e, n, r) {
          var i = f;
          return function (o, a) {
            if (i === d) throw Error('Generator is already running');
            if (i === m) {
              if ('throw' === o) throw a;
              return { value: t, done: !0 };
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate;
              if (s) {
                var c = T(s, r);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (i === f) throw ((i = m), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              i = d;
              var u = l(e, n, r);
              if ('normal' === u.type) {
                if (((i = r.done ? m : p), u.arg === v)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type && ((i = m), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        }
        function T(e, n) {
          var r = n.method,
            i = e.iterator[r];
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'), (n.arg = t), T(e, n), 'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
              v
            );
          var o = l(i, e.iterator, n.arg);
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), v;
          var a = o.arg;
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                v)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              v);
        }
        function S(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function O(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function M(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(S, this), this.reset(!0);
        }
        function j(e) {
          if (e || '' === e) {
            var n = e[a];
            if (n) return n.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          throw new TypeError(ei(e) + ' is not iterable');
        }
        return (
          (_.prototype = g),
          i(L, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = u(g, c, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return !!e && (e === _ || 'GeneratorFunction' === (e.displayName || e.name));
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          E(P.prototype),
          u(P.prototype, s, function () {
            return this;
          }),
          (e.AsyncIterator = P),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new P(h(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          E(L),
          u(L, c, 'Generator'),
          u(L, a, function () {
            return this;
          }),
          u(L, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = j),
          (M.prototype = {
            constructor: M,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return i('end');
                if (a.tryLoc <= this.prev) {
                  var c = r.call(a, 'catchLoc'),
                    u = r.call(a, 'finallyLoc');
                  if (c && u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!u) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (i.tryLoc <= this.prev && r.call(i, 'finallyLoc') && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    O(n);
                  }
                  return i;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function ri(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            c = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i);
      }
      function ii(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function a(t) {
              ri(o, r, i, a, s, 'next', t);
            }
            function s(t) {
              ri(o, r, i, a, s, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      document.addEventListener(
        'DOMContentLoaded',
        ii(
          ni().mark(function t() {
            var e;
            return ni().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e = new Xr({
                        content: document.getElementById('main-content'),
                        drawerButton: document.getElementById('drawer-button'),
                        drawerNavigation: document.getElementById('navigation-drawer'),
                        skipLinkButton: document.getElementById('skip-link'),
                      })),
                      (t.next = 3),
                      e.renderPage()
                    );
                  case 3:
                    window.addEventListener(
                      'hashchange',
                      ii(
                        ni().mark(function t() {
                          return ni().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), e.renderPage();
                                case 2:
                                  Qn.stopAllStreams();
                                case 3:
                                case 'end':
                                  return t.stop();
                              }
                          }, t);
                        }),
                      ),
                    );
                  case 4:
                  case 'end':
                    return t.stop();
                }
            }, t);
          }),
        ),
      );
    })();
})();
