import {
	L as Ln
} from "./vendor-C_-IKxkE.js";
import {
	g as k
} from "./gsap-DDlvirwQ.js";
import {
	E as Tn,
	F as Pn,
	D as Dn,
	d as In,
	N as Fr,
	g as On
} from "./NotFound-DMpjgg40.js";
import {
	S as ns,
	D as Hs,
	V as Ns,
	M as as,
	G as es,
	P as qs,
	L as Rn,
	T as Vn,
	a as Gn,
	b as Wr,
	R as zn,
	c as $n,
	d as Bn,
	C as Fn,
	W as Wn,
	e as Hn,
	f as Nn
} from "./three-CZcCwkUH.js";

function qn(r, e) {
	for (var t = 0; t < e.length; t++) {
		var i = e[t];
		i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i)
	}
}

function Yn(r, e, t) {
	return e && qn(r.prototype, e), r
}
var Oe, Ls, st, Ht, Nt, bi, $o, Qt, Hi, Bo, It, mt, Fo, Wo = function () {
		return Oe || typeof window < "u" && (Oe = window.gsap) && Oe.registerPlugin && Oe
	},
	Ho = 1,
	yi = [],
	Y = [],
	Mt = [],
	Ni = Date.now,
	cr = function (e, t) {
		return t
	},
	Xn = function () {
		var e = Hi.core,
			t = e.bridge || {},
			i = e._scrollers,
			s = e._proxies;
		i.push.apply(i, Y), s.push.apply(s, Mt), Y = i, Mt = s, cr = function (n, a) {
			return t[n](a)
		}
	},
	Yt = function (e, t) {
		return ~Mt.indexOf(e) && Mt[Mt.indexOf(e) + 1][t]
	},
	qi = function (e) {
		return !!~Bo.indexOf(e)
	},
	Ne = function (e, t, i, s, o) {
		return e.addEventListener(t, i, {
			passive: s !== !1,
			capture: !!o
		})
	},
	He = function (e, t, i, s) {
		return e.removeEventListener(t, i, !!s)
	},
	fs = "scrollLeft",
	ms = "scrollTop",
	ur = function () {
		return It && It.isPressed || Y.cache++
	},
	Vs = function (e, t) {
		var i = function s(o) {
			if (o || o === 0) {
				Ho && (st.history.scrollRestoration = "manual");
				var n = It && It.isPressed;
				o = s.v = Math.round(o) || (It && It.iOS ? 1 : 0), e(o), s.cacheID = Y.cache, n && cr("ss", o)
			} else(t || Y.cache !== s.cacheID || cr("ref")) && (s.cacheID = Y.cache, s.v = e());
			return s.v + s.offset
		};
		return i.offset = 0, e && i
	},
	Ue = {
		s: fs,
		p: "left",
		p2: "Left",
		os: "right",
		os2: "Right",
		d: "width",
		d2: "Width",
		a: "x",
		sc: Vs(function (r) {
			return arguments.length ? st.scrollTo(r, ke.sc()) : st.pageXOffset || Ht[fs] || Nt[fs] || bi[fs] || 0
		})
	},
	ke = {
		s: ms,
		p: "top",
		p2: "Top",
		os: "bottom",
		os2: "Bottom",
		d: "height",
		d2: "Height",
		a: "y",
		op: Ue,
		sc: Vs(function (r) {
			return arguments.length ? st.scrollTo(Ue.sc(), r) : st.pageYOffset || Ht[ms] || Nt[ms] || bi[ms] || 0
		})
	},
	Ke = function (e, t) {
		return (t && t._ctx && t._ctx.selector || Oe.utils.toArray)(e)[0] || (typeof e == "string" && Oe.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
	},
	Un = function (e, t) {
		for (var i = t.length; i--;)
			if (t[i] === e || t[i].contains(e)) return !0;
		return !1
	},
	Xt = function (e, t) {
		var i = t.s,
			s = t.sc;
		qi(e) && (e = Ht.scrollingElement || Nt);
		var o = Y.indexOf(e),
			n = s === ke.sc ? 1 : 2;
		!~o && (o = Y.push(e) - 1), Y[o + n] || Ne(e, "scroll", ur);
		var a = Y[o + n],
			l = a || (Y[o + n] = Vs(Yt(e, i), !0) || (qi(e) ? s : Vs(function (h) {
				return arguments.length ? e[i] = h : e[i]
			})));
		return l.target = e, a || (l.smooth = Oe.getProperty(e, "scrollBehavior") === "smooth"), l
	},
	dr = function (e, t, i) {
		var s = e,
			o = e,
			n = Ni(),
			a = n,
			l = t || 50,
			h = Math.max(500, l * 3),
			f = function (g, v) {
				var w = Ni();
				v || w - n > l ? (o = s, s = g, a = n, n = w) : i ? s += g : s = o + (g - o) / (w - a) * (n - a)
			},
			d = function () {
				o = s = i ? 0 : s, a = n = 0
			},
			u = function (g) {
				var v = a,
					w = o,
					p = Ni();
				return (g || g === 0) && g !== s && f(g), n === a || p - a > h ? 0 : (s + (i ? w : -w)) / ((i ? p : n) - v) * 1e3
			};
		return {
			update: f,
			reset: d,
			getVelocity: u
		}
	},
	Pi = function (e, t) {
		return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
	},
	Hr = function (e) {
		var t = Math.max.apply(Math, e),
			i = Math.min.apply(Math, e);
		return Math.abs(t) >= Math.abs(i) ? t : i
	},
	No = function () {
		Hi = Oe.core.globals().ScrollTrigger, Hi && Hi.core && Xn()
	},
	qo = function (e) {
		return Oe = e || Wo(), !Ls && Oe && typeof document < "u" && document.body && (st = window, Ht = document, Nt = Ht.documentElement, bi = Ht.body, Bo = [st, Ht, Nt, bi], Oe.utils.clamp, Fo = Oe.core.context || function () {}, Qt = "onpointerenter" in bi ? "pointer" : "mouse", $o = ve.isTouch = st.matchMedia && st.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in st || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, mt = ve.eventTypes = ("ontouchstart" in Nt ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Nt ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
			return Ho = 0
		}, 500), No(), Ls = 1), Ls
	};
Ue.op = ke;
Y.cache = 0;
var ve = (function () {
	function r(t) {
		this.init(t)
	}
	var e = r.prototype;
	return e.init = function (i) {
		Ls || qo(Oe) || console.warn("Please gsap.registerPlugin(Observer)"), Hi || No();
		var s = i.tolerance,
			o = i.dragMinimum,
			n = i.type,
			a = i.target,
			l = i.lineHeight,
			h = i.debounce,
			f = i.preventDefault,
			d = i.onStop,
			u = i.onStopDelay,
			c = i.ignore,
			g = i.wheelSpeed,
			v = i.event,
			w = i.onDragStart,
			p = i.onDragEnd,
			y = i.onDrag,
			x = i.onPress,
			b = i.onRelease,
			A = i.onRight,
			E = i.onLeft,
			S = i.onUp,
			C = i.onDown,
			P = i.onChangeX,
			M = i.onChangeY,
			G = i.onChange,
			L = i.onToggleX,
			I = i.onToggleY,
			H = i.onHover,
			j = i.onHoverEnd,
			K = i.onMove,
			z = i.ignoreCheck,
			J = i.isNormalizer,
			W = i.onGestureStart,
			m = i.onGestureEnd,
			X = i.onWheel,
			he = i.onEnable,
			re = i.onDisable,
			ae = i.onClick,
			Te = i.scrollSpeed,
			Me = i.capture,
			ce = i.allowClicks,
			Pe = i.lockAxis,
			Se = i.onLockAxis;
		this.target = a = Ke(a) || Nt, this.vars = i, c && (c = Oe.utils.toArray(c)), s = s || 1e-9, o = o || 0, g = g || 1, Te = Te || 1, n = n || "wheel,touch,pointer", h = h !== !1, l || (l = parseFloat(st.getComputedStyle(bi).lineHeight) || 22);
		var ue, Fe, We, Q, fe, je, Ze, _ = this,
			Je = 0,
			Et = 0,
			Vt = i.passive || !f && i.passive !== !1,
			de = Xt(a, Ue),
			At = Xt(a, ke),
			Gt = de(),
			Ut = At(),
			Ee = ~n.indexOf("touch") && !~n.indexOf("pointer") && mt[0] === "pointerdown",
			zt = qi(a),
			me = a.ownerDocument || Ht,
			ct = [0, 0, 0],
			ot = [0, 0, 0],
			Ct = 0,
			Ai = function () {
				return Ct = Ni()
			},
			we = function (V, ee) {
				return (_.event = V) && c && Un(V.target, c) || ee && Ee && V.pointerType !== "touch" || z && z(V, ee)
			},
			us = function () {
				_._vx.reset(), _._vy.reset(), Fe.pause(), d && d(_)
			},
			Lt = function () {
				var V = _.deltaX = Hr(ct),
					ee = _.deltaY = Hr(ot),
					T = Math.abs(V) >= s,
					$ = Math.abs(ee) >= s;
				G && (T || $) && G(_, V, ee, ct, ot), T && (A && _.deltaX > 0 && A(_), E && _.deltaX < 0 && E(_), P && P(_), L && _.deltaX < 0 != Je < 0 && L(_), Je = _.deltaX, ct[0] = ct[1] = ct[2] = 0), $ && (C && _.deltaY > 0 && C(_), S && _.deltaY < 0 && S(_), M && M(_), I && _.deltaY < 0 != Et < 0 && I(_), Et = _.deltaY, ot[0] = ot[1] = ot[2] = 0), (Q || We) && (K && K(_), We && (w && We === 1 && w(_), y && y(_), We = 0), Q = !1), je && !(je = !1) && Se && Se(_), fe && (X(_), fe = !1), ue = 0
			},
			ci = function (V, ee, T) {
				ct[T] += V, ot[T] += ee, _._vx.update(V), _._vy.update(ee), h ? ue || (ue = requestAnimationFrame(Lt)) : Lt()
			},
			ui = function (V, ee) {
				Pe && !Ze && (_.axis = Ze = Math.abs(V) > Math.abs(ee) ? "x" : "y", je = !0), Ze !== "y" && (ct[2] += V, _._vx.update(V, !0)), Ze !== "x" && (ot[2] += ee, _._vy.update(ee, !0)), h ? ue || (ue = requestAnimationFrame(Lt)) : Lt()
			},
			$t = function (V) {
				if (!we(V, 1)) {
					V = Pi(V, f);
					var ee = V.clientX,
						T = V.clientY,
						$ = ee - _.x,
						R = T - _.y,
						B = _.isDragging;
					_.x = ee, _.y = T, (B || ($ || R) && (Math.abs(_.startX - ee) >= o || Math.abs(_.startY - T) >= o)) && (We || (We = B ? 2 : 1), B || (_.isDragging = !0), ui($, R))
				}
			},
			jt = _.onPress = function (F) {
				we(F, 1) || F && F.button || (_.axis = Ze = null, Fe.pause(), _.isPressed = !0, F = Pi(F), Je = Et = 0, _.startX = _.x = F.clientX, _.startY = _.y = F.clientY, _._vx.reset(), _._vy.reset(), Ne(J ? a : me, mt[1], $t, Vt, !0), _.deltaX = _.deltaY = 0, x && x(_))
			},
			U = _.onRelease = function (F) {
				if (!we(F, 1)) {
					He(J ? a : me, mt[1], $t, !0);
					var V = !isNaN(_.y - _.startY),
						ee = _.isDragging,
						T = ee && (Math.abs(_.x - _.startX) > 3 || Math.abs(_.y - _.startY) > 3),
						$ = Pi(F);
					!T && V && (_._vx.reset(), _._vy.reset(), f && ce && Oe.delayedCall(.08, function () {
						if (Ni() - Ct > 300 && !F.defaultPrevented) {
							if (F.target.click) F.target.click();
							else if (me.createEvent) {
								var R = me.createEvent("MouseEvents");
								R.initMouseEvent("click", !0, !0, st, 1, $.screenX, $.screenY, $.clientX, $.clientY, !1, !1, !1, !1, 0, null), F.target.dispatchEvent(R)
							}
						}
					})), _.isDragging = _.isGesturing = _.isPressed = !1, d && ee && !J && Fe.restart(!0), We && Lt(), p && ee && p(_), b && b(_, T)
				}
			},
			Kt = function (V) {
				return V.touches && V.touches.length > 1 && (_.isGesturing = !0) && W(V, _.isDragging)
			},
			ut = function () {
				return (_.isGesturing = !1) || m(_)
			},
			dt = function (V) {
				if (!we(V)) {
					var ee = de(),
						T = At();
					ci((ee - Gt) * Te, (T - Ut) * Te, 1), Gt = ee, Ut = T, d && Fe.restart(!0)
				}
			},
			pt = function (V) {
				if (!we(V)) {
					V = Pi(V, f), X && (fe = !0);
					var ee = (V.deltaMode === 1 ? l : V.deltaMode === 2 ? st.innerHeight : 1) * g;
					ci(V.deltaX * ee, V.deltaY * ee, 0), d && !J && Fe.restart(!0)
				}
			},
			Zt = function (V) {
				if (!we(V)) {
					var ee = V.clientX,
						T = V.clientY,
						$ = ee - _.x,
						R = T - _.y;
					_.x = ee, _.y = T, Q = !0, d && Fe.restart(!0), ($ || R) && ui($, R)
				}
			},
			di = function (V) {
				_.event = V, H(_)
			},
			Tt = function (V) {
				_.event = V, j(_)
			},
			Ci = function (V) {
				return we(V) || Pi(V, f) && ae(_)
			};
		Fe = _._dc = Oe.delayedCall(u || .25, us).pause(), _.deltaX = _.deltaY = 0, _._vx = dr(0, 50, !0), _._vy = dr(0, 50, !0), _.scrollX = de, _.scrollY = At, _.isDragging = _.isGesturing = _.isPressed = !1, Fo(this), _.enable = function (F) {
			return _.isEnabled || (Ne(zt ? me : a, "scroll", ur), n.indexOf("scroll") >= 0 && Ne(zt ? me : a, "scroll", dt, Vt, Me), n.indexOf("wheel") >= 0 && Ne(a, "wheel", pt, Vt, Me), (n.indexOf("touch") >= 0 && $o || n.indexOf("pointer") >= 0) && (Ne(a, mt[0], jt, Vt, Me), Ne(me, mt[2], U), Ne(me, mt[3], U), ce && Ne(a, "click", Ai, !0, !0), ae && Ne(a, "click", Ci), W && Ne(me, "gesturestart", Kt), m && Ne(me, "gestureend", ut), H && Ne(a, Qt + "enter", di), j && Ne(a, Qt + "leave", Tt), K && Ne(a, Qt + "move", Zt)), _.isEnabled = !0, _.isDragging = _.isGesturing = _.isPressed = Q = We = !1, _._vx.reset(), _._vy.reset(), Gt = de(), Ut = At(), F && F.type && jt(F), he && he(_)), _
		}, _.disable = function () {
			_.isEnabled && (yi.filter(function (F) {
				return F !== _ && qi(F.target)
			}).length || He(zt ? me : a, "scroll", ur), _.isPressed && (_._vx.reset(), _._vy.reset(), He(J ? a : me, mt[1], $t, !0)), He(zt ? me : a, "scroll", dt, Me), He(a, "wheel", pt, Me), He(a, mt[0], jt, Me), He(me, mt[2], U), He(me, mt[3], U), He(a, "click", Ai, !0), He(a, "click", Ci), He(me, "gesturestart", Kt), He(me, "gestureend", ut), He(a, Qt + "enter", di), He(a, Qt + "leave", Tt), He(a, Qt + "move", Zt), _.isEnabled = _.isPressed = _.isDragging = !1, re && re(_))
		}, _.kill = _.revert = function () {
			_.disable();
			var F = yi.indexOf(_);
			F >= 0 && yi.splice(F, 1), It === _ && (It = 0)
		}, yi.push(_), J && qi(a) && (It = _), _.enable(v)
	}, Yn(r, [{
		key: "velocityX",
		get: function () {
			return this._vx.getVelocity()
		}
	}, {
		key: "velocityY",
		get: function () {
			return this._vy.getVelocity()
		}
	}]), r
})();
ve.version = "3.14.2";
ve.create = function (r) {
	return new ve(r)
};
ve.register = qo;
ve.getAll = function () {
	return yi.slice()
};
ve.getById = function (r) {
	return yi.filter(function (e) {
		return e.vars.id === r
	})[0]
};
Wo() && Oe.registerPlugin(ve);
var D, vi, q, se, it, te, Cr, Gs, ts, Yi, Ri, gs, ze, Ys, pr, Ye, Nr, qr, wi, Yo, Ks, Xo, qe, fr, Uo, jo, Ft, mr, Lr, xi, Tr, Xi, gr, Zs, vs = 1,
	$e = Date.now,
	Js = $e(),
	ht = 0,
	Vi = 0,
	Yr = function (e, t, i) {
		var s = tt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
		return i["_" + t + "Clamp"] = s, s ? e.substr(6, e.length - 7) : e
	},
	Xr = function (e, t) {
		return t && (!tt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
	},
	jn = function r() {
		return Vi && requestAnimationFrame(r)
	},
	Ur = function () {
		return Ys = 1
	},
	jr = function () {
		return Ys = 0
	},
	bt = function (e) {
		return e
	},
	Gi = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0
	},
	Ko = function () {
		return typeof window < "u"
	},
	Zo = function () {
		return D || Ko() && (D = window.gsap) && D.registerPlugin && D
	},
	ni = function (e) {
		return !!~Cr.indexOf(e)
	},
	Jo = function (e) {
		return (e === "Height" ? Tr : q["inner" + e]) || it["client" + e] || te["client" + e]
	},
	Qo = function (e) {
		return Yt(e, "getBoundingClientRect") || (ni(e) ? function () {
			return Os.width = q.innerWidth, Os.height = Tr, Os
		} : function () {
			return Pt(e)
		})
	},
	Kn = function (e, t, i) {
		var s = i.d,
			o = i.d2,
			n = i.a;
		return (n = Yt(e, "getBoundingClientRect")) ? function () {
			return n()[s]
		} : function () {
			return (t ? Jo(o) : e["client" + o]) || 0
		}
	},
	Zn = function (e, t) {
		return !t || ~Mt.indexOf(e) ? Qo(e) : function () {
			return Os
		}
	},
	kt = function (e, t) {
		var i = t.s,
			s = t.d2,
			o = t.d,
			n = t.a;
		return Math.max(0, (i = "scroll" + s) && (n = Yt(e, i)) ? n() - Qo(e)()[o] : ni(e) ? (it[i] || te[i]) - Jo(s) : e[i] - e["offset" + s])
	},
	ws = function (e, t) {
		for (var i = 0; i < wi.length; i += 3)(!t || ~t.indexOf(wi[i + 1])) && e(wi[i], wi[i + 1], wi[i + 2])
	},
	tt = function (e) {
		return typeof e == "string"
	},
	Be = function (e) {
		return typeof e == "function"
	},
	zi = function (e) {
		return typeof e == "number"
	},
	ei = function (e) {
		return typeof e == "object"
	},
	Di = function (e, t, i) {
		return e && e.progress(t ? 0 : 1) && i && e.pause()
	},
	Qs = function (e, t) {
		if (e.enabled) {
			var i = e._ctx ? e._ctx.add(function () {
				return t(e)
			}) : t(e);
			i && i.totalTime && (e.callbackAnimation = i)
		}
	},
	pi = Math.abs,
	en = "left",
	tn = "top",
	Pr = "right",
	Dr = "bottom",
	si = "width",
	ri = "height",
	Ui = "Right",
	ji = "Left",
	Ki = "Top",
	Zi = "Bottom",
	ye = "padding",
	nt = "margin",
	Si = "Width",
	Ir = "Height",
	xe = "px",
	at = function (e) {
		return q.getComputedStyle(e)
	},
	Jn = function (e) {
		var t = at(e).position;
		e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
	},
	Kr = function (e, t) {
		for (var i in t) i in e || (e[i] = t[i]);
		return e
	},
	Pt = function (e, t) {
		var i = t && at(e)[pr] !== "matrix(1, 0, 0, 1, 0, 0)" && D.to(e, {
				x: 0,
				y: 0,
				xPercent: 0,
				yPercent: 0,
				rotation: 0,
				rotationX: 0,
				rotationY: 0,
				scale: 1,
				skewX: 0,
				skewY: 0
			}).progress(1),
			s = e.getBoundingClientRect();
		return i && i.progress(0).kill(), s
	},
	zs = function (e, t) {
		var i = t.d2;
		return e["offset" + i] || e["client" + i] || 0
	},
	sn = function (e) {
		var t = [],
			i = e.labels,
			s = e.duration(),
			o;
		for (o in i) t.push(i[o] / s);
		return t
	},
	Qn = function (e) {
		return function (t) {
			return D.utils.snap(sn(e), t)
		}
	},
	Or = function (e) {
		var t = D.utils.snap(e),
			i = Array.isArray(e) && e.slice(0).sort(function (s, o) {
				return s - o
			});
		return i ? function (s, o, n) {
			n === void 0 && (n = .001);
			var a;
			if (!o) return t(s);
			if (o > 0) {
				for (s -= n, a = 0; a < i.length; a++)
					if (i[a] >= s) return i[a];
				return i[a - 1]
			} else
				for (a = i.length, s += n; a--;)
					if (i[a] <= s) return i[a];
			return i[0]
		} : function (s, o, n) {
			n === void 0 && (n = .001);
			var a = t(s);
			return !o || Math.abs(a - s) < n || a - s < 0 == o < 0 ? a : t(o < 0 ? s - e : s + e)
		}
	},
	ea = function (e) {
		return function (t, i) {
			return Or(sn(e))(t, i.direction)
		}
	},
	ys = function (e, t, i, s) {
		return i.split(",").forEach(function (o) {
			return e(t, o, s)
		})
	},
	Le = function (e, t, i, s, o) {
		return e.addEventListener(t, i, {
			passive: !s,
			capture: !!o
		})
	},
	Ce = function (e, t, i, s) {
		return e.removeEventListener(t, i, !!s)
	},
	_s = function (e, t, i) {
		i = i && i.wheelHandler, i && (e(t, "wheel", i), e(t, "touchmove", i))
	},
	Zr = {
		startColor: "green",
		endColor: "red",
		indent: 0,
		fontSize: "16px",
		fontWeight: "normal"
	},
	bs = {
		toggleActions: "play",
		anticipatePin: 0
	},
	$s = {
		top: 0,
		left: 0,
		center: .5,
		bottom: 1,
		right: 1
	},
	Ts = function (e, t) {
		if (tt(e)) {
			var i = e.indexOf("="),
				s = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
			~i && (e.indexOf("%") > i && (s *= t / 100), e = e.substr(0, i - 1)), e = s + (e in $s ? $s[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
		}
		return e
	},
	xs = function (e, t, i, s, o, n, a, l) {
		var h = o.startColor,
			f = o.endColor,
			d = o.fontSize,
			u = o.indent,
			c = o.fontWeight,
			g = se.createElement("div"),
			v = ni(i) || Yt(i, "pinType") === "fixed",
			w = e.indexOf("scroller") !== -1,
			p = v ? te : i,
			y = e.indexOf("start") !== -1,
			x = y ? h : f,
			b = "border-color:" + x + ";font-size:" + d + ";color:" + x + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
		return b += "position:" + ((w || l) && v ? "fixed;" : "absolute;"), (w || l || !v) && (b += (s === ke ? Pr : Dr) + ":" + (n + parseFloat(u)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), g._isStart = y, g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), g.style.cssText = b, g.innerText = t || t === 0 ? e + "-" + t : e, p.children[0] ? p.insertBefore(g, p.children[0]) : p.appendChild(g), g._offset = g["offset" + s.op.d2], Ps(g, 0, s, y), g
	},
	Ps = function (e, t, i, s) {
		var o = {
				display: "block"
			},
			n = i[s ? "os2" : "p2"],
			a = i[s ? "p2" : "os2"];
		e._isFlipped = s, o[i.a + "Percent"] = s ? -100 : 0, o[i.a] = s ? "1px" : 0, o["border" + n + Si] = 1, o["border" + a + Si] = 0, o[i.p] = t + "px", D.set(e, o)
	},
	N = [],
	vr = {},
	is, Jr = function () {
		return $e() - ht > 34 && (is || (is = requestAnimationFrame(Rt)))
	},
	fi = function () {
		(!qe || !qe.isPressed || qe.startX > te.clientWidth) && (Y.cache++, qe ? is || (is = requestAnimationFrame(Rt)) : Rt(), ht || li("scrollStart"), ht = $e())
	},
	er = function () {
		jo = q.innerWidth, Uo = q.innerHeight
	},
	$i = function (e) {
		Y.cache++, (e === !0 || !ze && !Xo && !se.fullscreenElement && !se.webkitFullscreenElement && (!fr || jo !== q.innerWidth || Math.abs(q.innerHeight - Uo) > q.innerHeight * .25)) && Gs.restart(!0)
	},
	ai = {},
	ta = [],
	rn = function r() {
		return Ce(O, "scrollEnd", r) || ti(!0)
	},
	li = function (e) {
		return ai[e] && ai[e].map(function (t) {
			return t()
		}) || ta
	},
	et = [],
	on = function (e) {
		for (var t = 0; t < et.length; t += 5)(!e || et[t + 4] && et[t + 4].query === e) && (et[t].style.cssText = et[t + 1], et[t].getBBox && et[t].setAttribute("transform", et[t + 2] || ""), et[t + 3].uncache = 1)
	},
	nn = function () {
		return Y.forEach(function (e) {
			return Be(e) && ++e.cacheID && (e.rec = e())
		})
	},
	Rr = function (e, t) {
		var i;
		for (Ye = 0; Ye < N.length; Ye++) i = N[Ye], i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
		Xi = !0, t && on(t), t || li("revert")
	},
	an = function (e, t) {
		Y.cache++, (t || !Xe) && Y.forEach(function (i) {
			return Be(i) && i.cacheID++ && (i.rec = 0)
		}), tt(e) && (q.history.scrollRestoration = Lr = e)
	},
	Xe, oi = 0,
	Qr, ia = function () {
		if (Qr !== oi) {
			var e = Qr = oi;
			requestAnimationFrame(function () {
				return e === oi && ti(!0)
			})
		}
	},
	ln = function () {
		te.appendChild(xi), Tr = !qe && xi.offsetHeight || q.innerHeight, te.removeChild(xi)
	},
	eo = function (e) {
		return ts(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (t) {
			return t.style.display = e ? "none" : "block"
		})
	},
	ti = function (e, t) {
		if (it = se.documentElement, te = se.body, Cr = [q, se, it, te], ht && !e && !Xi) {
			Le(O, "scrollEnd", rn);
			return
		}
		ln(), Xe = O.isRefreshing = !0, Xi || nn();
		var i = li("refreshInit");
		Yo && O.sort(), t || Rr(), Y.forEach(function (s) {
			Be(s) && (s.smooth && (s.target.style.scrollBehavior = "auto"), s(0))
		}), N.slice(0).forEach(function (s) {
			return s.refresh()
		}), Xi = !1, N.forEach(function (s) {
			if (s._subPinOffset && s.pin) {
				var o = s.vars.horizontal ? "offsetWidth" : "offsetHeight",
					n = s.pin[o];
				s.revert(!0, 1), s.adjustPinSpacing(s.pin[o] - n), s.refresh()
			}
		}), gr = 1, eo(!0), N.forEach(function (s) {
			var o = kt(s.scroller, s._dir),
				n = s.vars.end === "max" || s._endClamp && s.end > o,
				a = s._startClamp && s.start >= o;
			(n || a) && s.setPositions(a ? o - 1 : s.start, n ? Math.max(a ? o : s.start + 1, o) : s.end, !0)
		}), eo(!1), gr = 0, i.forEach(function (s) {
			return s && s.render && s.render(-1)
		}), Y.forEach(function (s) {
			Be(s) && (s.smooth && requestAnimationFrame(function () {
				return s.target.style.scrollBehavior = "smooth"
			}), s.rec && s(s.rec))
		}), an(Lr, 1), Gs.pause(), oi++, Xe = 2, Rt(2), N.forEach(function (s) {
			return Be(s.vars.onRefresh) && s.vars.onRefresh(s)
		}), Xe = O.isRefreshing = !1, li("refresh")
	},
	wr = 0,
	Ds = 1,
	Ji, Rt = function (e) {
		if (e === 2 || !Xe && !Xi) {
			O.isUpdating = !0, Ji && Ji.update(0);
			var t = N.length,
				i = $e(),
				s = i - Js >= 50,
				o = t && N[0].scroll();
			if (Ds = wr > o ? -1 : 1, Xe || (wr = o), s && (ht && !Ys && i - ht > 200 && (ht = 0, li("scrollEnd")), Ri = Js, Js = i), Ds < 0) {
				for (Ye = t; Ye-- > 0;) N[Ye] && N[Ye].update(0, s);
				Ds = 1
			} else
				for (Ye = 0; Ye < t; Ye++) N[Ye] && N[Ye].update(0, s);
			O.isUpdating = !1
		}
		is = 0
	},
	yr = [en, tn, Dr, Pr, nt + Zi, nt + Ui, nt + Ki, nt + ji, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
	Is = yr.concat([si, ri, "boxSizing", "max" + Si, "max" + Ir, "position", nt, ye, ye + Ki, ye + Ui, ye + Zi, ye + ji]),
	sa = function (e, t, i) {
		ki(i);
		var s = e._gsap;
		if (s.spacerIsNative) ki(s.spacerState);
		else if (e._gsap.swappedIn) {
			var o = t.parentNode;
			o && (o.insertBefore(e, t), o.removeChild(t))
		}
		e._gsap.swappedIn = !1
	},
	tr = function (e, t, i, s) {
		if (!e._gsap.swappedIn) {
			for (var o = yr.length, n = t.style, a = e.style, l; o--;) l = yr[o], n[l] = i[l];
			n.position = i.position === "absolute" ? "absolute" : "relative", i.display === "inline" && (n.display = "inline-block"), a[Dr] = a[Pr] = "auto", n.flexBasis = i.flexBasis || "auto", n.overflow = "visible", n.boxSizing = "border-box", n[si] = zs(e, Ue) + xe, n[ri] = zs(e, ke) + xe, n[ye] = a[nt] = a[tn] = a[en] = "0", ki(s), a[si] = a["max" + Si] = i[si], a[ri] = a["max" + Ir] = i[ri], a[ye] = i[ye], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
		}
	},
	ra = /([A-Z])/g,
	ki = function (e) {
		if (e) {
			var t = e.t.style,
				i = e.length,
				s = 0,
				o, n;
			for ((e.t._gsap || D.core.getCache(e.t)).uncache = 1; s < i; s += 2) n = e[s + 1], o = e[s], n ? t[o] = n : t[o] && t.removeProperty(o.replace(ra, "-$1").toLowerCase())
		}
	},
	ks = function (e) {
		for (var t = Is.length, i = e.style, s = [], o = 0; o < t; o++) s.push(Is[o], i[Is[o]]);
		return s.t = e, s
	},
	oa = function (e, t, i) {
		for (var s = [], o = e.length, n = i ? 8 : 0, a; n < o; n += 2) a = e[n], s.push(a, a in t ? t[a] : e[n + 1]);
		return s.t = e.t, s
	},
	Os = {
		left: 0,
		top: 0
	},
	to = function (e, t, i, s, o, n, a, l, h, f, d, u, c, g) {
		Be(e) && (e = e(l)), tt(e) && e.substr(0, 3) === "max" && (e = u + (e.charAt(4) === "=" ? Ts("0" + e.substr(3), i) : 0));
		var v = c ? c.time() : 0,
			w, p, y;
		if (c && c.seek(0), isNaN(e) || (e = +e), zi(e)) c && (e = D.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, u, e)), a && Ps(a, i, s, !0);
		else {
			Be(t) && (t = t(l));
			var x = (e || "0").split(" "),
				b, A, E, S;
			y = Ke(t, l) || te, b = Pt(y) || {}, (!b || !b.left && !b.top) && at(y).display === "none" && (S = y.style.display, y.style.display = "block", b = Pt(y), S ? y.style.display = S : y.style.removeProperty("display")), A = Ts(x[0], b[s.d]), E = Ts(x[1] || "0", i), e = b[s.p] - h[s.p] - f + A + o - E, a && Ps(a, E, s, i - E < 20 || a._isStart && E > 20), i -= i - E
		}
		if (g && (l[g] = e || -.001, e < 0 && (e = 0)), n) {
			var C = e + i,
				P = n._isStart;
			w = "scroll" + s.d2, Ps(n, C, s, P && C > 20 || !P && (d ? Math.max(te[w], it[w]) : n.parentNode[w]) <= C + 1), d && (h = Pt(a), d && (n.style[s.op.p] = h[s.op.p] - s.op.m - n._offset + xe))
		}
		return c && y && (w = Pt(y), c.seek(u), p = Pt(y), c._caScrollDist = w[s.p] - p[s.p], e = e / c._caScrollDist * u), c && c.seek(v), c ? e : Math.round(e)
	},
	na = /(webkit|moz|length|cssText|inset)/i,
	io = function (e, t, i, s) {
		if (e.parentNode !== t) {
			var o = e.style,
				n, a;
			if (t === te) {
				e._stOrig = o.cssText, a = at(e);
				for (n in a) !+n && !na.test(n) && a[n] && typeof o[n] == "string" && n !== "0" && (o[n] = a[n]);
				o.top = i, o.left = s
			} else o.cssText = e._stOrig;
			D.core.getCache(e).uncache = 1, t.appendChild(e)
		}
	},
	hn = function (e, t, i) {
		var s = t,
			o = s;
		return function (n) {
			var a = Math.round(e());
			return a !== s && a !== o && Math.abs(a - s) > 3 && Math.abs(a - o) > 3 && (n = a, i && i()), o = s, s = Math.round(n), s
		}
	},
	Ms = function (e, t, i) {
		var s = {};
		s[t.p] = "+=" + i, D.set(e, s)
	},
	so = function (e, t) {
		var i = Xt(e, t),
			s = "_scroll" + t.p2,
			o = function n(a, l, h, f, d) {
				var u = n.tween,
					c = l.onComplete,
					g = {};
				h = h || i();
				var v = hn(i, h, function () {
					u.kill(), n.tween = 0
				});
				return d = f && d || 0, f = f || a - h, u && u.kill(), l[s] = a, l.inherit = !1, l.modifiers = g, g[s] = function () {
					return v(h + f * u.ratio + d * u.ratio * u.ratio)
				}, l.onUpdate = function () {
					Y.cache++, n.tween && Rt()
				}, l.onComplete = function () {
					n.tween = 0, c && c.call(u)
				}, u = n.tween = D.to(e, l), u
			};
		return e[s] = i, i.wheelHandler = function () {
			return o.tween && o.tween.kill() && (o.tween = 0)
		}, Le(e, "wheel", i.wheelHandler), O.isTouch && Le(e, "touchmove", i.wheelHandler), o
	},
	O = (function () {
		function r(t, i) {
			vi || r.register(D) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), mr(this), this.init(t, i)
		}
		var e = r.prototype;
		return e.init = function (i, s) {
			if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Vi) {
				this.update = this.refresh = this.kill = bt;
				return
			}
			i = Kr(tt(i) || zi(i) || i.nodeType ? {
				trigger: i
			} : i, bs);
			var o = i,
				n = o.onUpdate,
				a = o.toggleClass,
				l = o.id,
				h = o.onToggle,
				f = o.onRefresh,
				d = o.scrub,
				u = o.trigger,
				c = o.pin,
				g = o.pinSpacing,
				v = o.invalidateOnRefresh,
				w = o.anticipatePin,
				p = o.onScrubComplete,
				y = o.onSnapComplete,
				x = o.once,
				b = o.snap,
				A = o.pinReparent,
				E = o.pinSpacer,
				S = o.containerAnimation,
				C = o.fastScrollEnd,
				P = o.preventOverlaps,
				M = i.horizontal || i.containerAnimation && i.horizontal !== !1 ? Ue : ke,
				G = !d && d !== 0,
				L = Ke(i.scroller || q),
				I = D.core.getCache(L),
				H = ni(L),
				j = ("pinType" in i ? i.pinType : Yt(L, "pinType") || H && "fixed") === "fixed",
				K = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
				z = G && i.toggleActions.split(" "),
				J = "markers" in i ? i.markers : bs.markers,
				W = H ? 0 : parseFloat(at(L)["border" + M.p2 + Si]) || 0,
				m = this,
				X = i.onRefreshInit && function () {
					return i.onRefreshInit(m)
				},
				he = Kn(L, H, M),
				re = Zn(L, H),
				ae = 0,
				Te = 0,
				Me = 0,
				ce = Xt(L, M),
				Pe, Se, ue, Fe, We, Q, fe, je, Ze, _, Je, Et, Vt, de, At, Gt, Ut, Ee, zt, me, ct, ot, Ct, Ai, we, us, Lt, ci, ui, $t, jt, U, Kt, ut, dt, pt, Zt, di, Tt;
			if (m._startClamp = m._endClamp = !1, m._dir = M, w *= 45, m.scroller = L, m.scroll = S ? S.time.bind(S) : ce, Fe = ce(), m.vars = i, s = s || i.animation, "refreshPriority" in i && (Yo = 1, i.refreshPriority === -9999 && (Ji = m)), I.tweenScroll = I.tweenScroll || {
					top: so(L, ke),
					left: so(L, Ue)
				}, m.tweenTo = Pe = I.tweenScroll[M.p], m.scrubDuration = function (T) {
					Kt = zi(T) && T, Kt ? U ? U.duration(T) : U = D.to(s, {
						ease: "expo",
						totalProgress: "+=0",
						inherit: !1,
						duration: Kt,
						paused: !0,
						onComplete: function () {
							return p && p(m)
						}
					}) : (U && U.progress(1).kill(), U = 0)
				}, s && (s.vars.lazy = !1, s._initted && !m.isReverted || s.vars.immediateRender !== !1 && i.immediateRender !== !1 && s.duration() && s.render(0, !0, !0), m.animation = s.pause(), s.scrollTrigger = m, m.scrubDuration(d), $t = 0, l || (l = s.vars.id)), b && ((!ei(b) || b.push) && (b = {
					snapTo: b
				}), "scrollBehavior" in te.style && D.set(H ? [te, it] : L, {
					scrollBehavior: "auto"
				}), Y.forEach(function (T) {
					return Be(T) && T.target === (H ? se.scrollingElement || it : L) && (T.smooth = !1)
				}), ue = Be(b.snapTo) ? b.snapTo : b.snapTo === "labels" ? Qn(s) : b.snapTo === "labelsDirectional" ? ea(s) : b.directional !== !1 ? function (T, $) {
					return Or(b.snapTo)(T, $e() - Te < 500 ? 0 : $.direction)
				} : D.utils.snap(b.snapTo), ut = b.duration || {
					min: .1,
					max: 2
				}, ut = ei(ut) ? Yi(ut.min, ut.max) : Yi(ut, ut), dt = D.delayedCall(b.delay || Kt / 2 || .1, function () {
					var T = ce(),
						$ = $e() - Te < 500,
						R = Pe.tween;
					if (($ || Math.abs(m.getVelocity()) < 10) && !R && !Ys && ae !== T) {
						var B = (T - Q) / de,
							Ae = s && !G ? s.totalProgress() : B,
							Z = $ ? 0 : (Ae - jt) / ($e() - Ri) * 1e3 || 0,
							ge = D.utils.clamp(-B, 1 - B, pi(Z / 2) * Z / .185),
							Re = B + (b.inertia === !1 ? 0 : ge),
							pe, oe, ie = b,
							ft = ie.onStart,
							le = ie.onInterrupt,
							Qe = ie.onComplete;
						if (pe = ue(Re, m), zi(pe) || (pe = Re), oe = Math.max(0, Math.round(Q + pe * de)), T <= fe && T >= Q && oe !== T) {
							if (R && !R._initted && R.data <= pi(oe - T)) return;
							b.inertia === !1 && (ge = pe - B), Pe(oe, {
								duration: ut(pi(Math.max(pi(Re - Ae), pi(pe - Ae)) * .185 / Z / .05 || 0)),
								ease: b.ease || "power3",
								data: pi(oe - T),
								onInterrupt: function () {
									return dt.restart(!0) && le && le(m)
								},
								onComplete: function () {
									m.update(), ae = ce(), s && !G && (U ? U.resetTo("totalProgress", pe, s._tTime / s._tDur) : s.progress(pe)), $t = jt = s && !G ? s.totalProgress() : m.progress, y && y(m), Qe && Qe(m)
								}
							}, T, ge * de, oe - T - ge * de), ft && ft(m, Pe.tween)
						}
					} else m.isActive && ae !== T && dt.restart(!0)
				}).pause()), l && (vr[l] = m), u = m.trigger = Ke(u || c !== !0 && c), Tt = u && u._gsap && u._gsap.stRevert, Tt && (Tt = Tt(m)), c = c === !0 ? u : Ke(c), tt(a) && (a = {
					targets: u,
					className: a
				}), c && (g === !1 || g === nt || (g = !g && c.parentNode && c.parentNode.style && at(c.parentNode).display === "flex" ? !1 : ye), m.pin = c, Se = D.core.getCache(c), Se.spacer ? At = Se.pinState : (E && (E = Ke(E), E && !E.nodeType && (E = E.current || E.nativeElement), Se.spacerIsNative = !!E, E && (Se.spacerState = ks(E))), Se.spacer = Ee = E || se.createElement("div"), Ee.classList.add("pin-spacer"), l && Ee.classList.add("pin-spacer-" + l), Se.pinState = At = ks(c)), i.force3D !== !1 && D.set(c, {
					force3D: !0
				}), m.spacer = Ee = Se.spacer, ui = at(c), Ai = ui[g + M.os2], me = D.getProperty(c), ct = D.quickSetter(c, M.a, xe), tr(c, Ee, ui), Ut = ks(c)), J) {
				Et = ei(J) ? Kr(J, Zr) : Zr, _ = xs("scroller-start", l, L, M, Et, 0), Je = xs("scroller-end", l, L, M, Et, 0, _), zt = _["offset" + M.op.d2];
				var Ci = Ke(Yt(L, "content") || L);
				je = this.markerStart = xs("start", l, Ci, M, Et, zt, 0, S), Ze = this.markerEnd = xs("end", l, Ci, M, Et, zt, 0, S), S && (di = D.quickSetter([je, Ze], M.a, xe)), !j && !(Mt.length && Yt(L, "fixedMarkers") === !0) && (Jn(H ? te : L), D.set([_, Je], {
					force3D: !0
				}), us = D.quickSetter(_, M.a, xe), ci = D.quickSetter(Je, M.a, xe))
			}
			if (S) {
				var F = S.vars.onUpdate,
					V = S.vars.onUpdateParams;
				S.eventCallback("onUpdate", function () {
					m.update(0, 0, 1), F && F.apply(S, V || [])
				})
			}
			if (m.previous = function () {
					return N[N.indexOf(m) - 1]
				}, m.next = function () {
					return N[N.indexOf(m) + 1]
				}, m.revert = function (T, $) {
					if (!$) return m.kill(!0);
					var R = T !== !1 || !m.enabled,
						B = ze;
					R !== m.isReverted && (R && (pt = Math.max(ce(), m.scroll.rec || 0), Me = m.progress, Zt = s && s.progress()), je && [je, Ze, _, Je].forEach(function (Ae) {
						return Ae.style.display = R ? "none" : "block"
					}), R && (ze = m, m.update(R)), c && (!A || !m.isActive) && (R ? sa(c, Ee, At) : tr(c, Ee, at(c), we)), R || m.update(R), ze = B, m.isReverted = R)
				}, m.refresh = function (T, $, R, B) {
					if (!((ze || !m.enabled) && !$)) {
						if (c && T && ht) {
							Le(r, "scrollEnd", rn);
							return
						}!Xe && X && X(m), ze = m, Pe.tween && !R && (Pe.tween.kill(), Pe.tween = 0), U && U.pause(), v && s && (s.revert({
							kill: !1
						}).invalidate(), s.getChildren ? s.getChildren(!0, !0, !1).forEach(function (Bt) {
							return Bt.vars.immediateRender && Bt.render(0, !0, !0)
						}) : s.vars.immediateRender && s.render(0, !0, !0)), m.isReverted || m.revert(!0, !0), m._subPinOffset = !1;
						var Ae = he(),
							Z = re(),
							ge = S ? S.duration() : kt(L, M),
							Re = de <= .01 || !de,
							pe = 0,
							oe = B || 0,
							ie = ei(R) ? R.end : i.end,
							ft = i.endTrigger || u,
							le = ei(R) ? R.start : i.start || (i.start === 0 || !u ? 0 : c ? "0 0" : "0 100%"),
							Qe = m.pinnedContainer = i.pinnedContainer && Ke(i.pinnedContainer, m),
							vt = u && Math.max(0, N.indexOf(m)) || 0,
							De = vt,
							Ie, Ve, Jt, ds, Ge, be, wt, js, Br, Li, yt, Ti, ps;
						for (J && ei(R) && (Ti = D.getProperty(_, M.p), ps = D.getProperty(Je, M.p)); De-- > 0;) be = N[De], be.end || be.refresh(0, 1) || (ze = m), wt = be.pin, wt && (wt === u || wt === c || wt === Qe) && !be.isReverted && (Li || (Li = []), Li.unshift(be), be.revert(!0, !0)), be !== N[De] && (vt--, De--);
						for (Be(le) && (le = le(m)), le = Yr(le, "start", m), Q = to(le, u, Ae, M, ce(), je, _, m, Z, W, j, ge, S, m._startClamp && "_startClamp") || (c ? -.001 : 0), Be(ie) && (ie = ie(m)), tt(ie) && !ie.indexOf("+=") && (~ie.indexOf(" ") ? ie = (tt(le) ? le.split(" ")[0] : "") + ie : (pe = Ts(ie.substr(2), Ae), ie = tt(le) ? le : (S ? D.utils.mapRange(0, S.duration(), S.scrollTrigger.start, S.scrollTrigger.end, Q) : Q) + pe, ft = u)), ie = Yr(ie, "end", m), fe = Math.max(Q, to(ie || (ft ? "100% 0" : ge), ft, Ae, M, ce() + pe, Ze, Je, m, Z, W, j, ge, S, m._endClamp && "_endClamp")) || -.001, pe = 0, De = vt; De--;) be = N[De] || {}, wt = be.pin, wt && be.start - be._pinPush <= Q && !S && be.end > 0 && (Ie = be.end - (m._startClamp ? Math.max(0, be.start) : be.start), (wt === u && be.start - be._pinPush < Q || wt === Qe) && isNaN(le) && (pe += Ie * (1 - be.progress)), wt === c && (oe += Ie));
						if (Q += pe, fe += pe, m._startClamp && (m._startClamp += pe), m._endClamp && !Xe && (m._endClamp = fe || -.001, fe = Math.min(fe, kt(L, M))), de = fe - Q || (Q -= .01) && .001, Re && (Me = D.utils.clamp(0, 1, D.utils.normalize(Q, fe, pt))), m._pinPush = oe, je && pe && (Ie = {}, Ie[M.a] = "+=" + pe, Qe && (Ie[M.p] = "-=" + ce()), D.set([je, Ze], Ie)), c && !(gr && m.end >= kt(L, M))) Ie = at(c), ds = M === ke, Jt = ce(), ot = parseFloat(me(M.a)) + oe, !ge && fe > 1 && (yt = (H ? se.scrollingElement || it : L).style, yt = {
							style: yt,
							value: yt["overflow" + M.a.toUpperCase()]
						}, H && at(te)["overflow" + M.a.toUpperCase()] !== "scroll" && (yt.style["overflow" + M.a.toUpperCase()] = "scroll")), tr(c, Ee, Ie), Ut = ks(c), Ve = Pt(c, !0), js = j && Xt(L, ds ? Ue : ke)(), g ? (we = [g + M.os2, de + oe + xe], we.t = Ee, De = g === ye ? zs(c, M) + de + oe : 0, De && (we.push(M.d, De + xe), Ee.style.flexBasis !== "auto" && (Ee.style.flexBasis = De + xe)), ki(we), Qe && N.forEach(function (Bt) {
							Bt.pin === Qe && Bt.vars.pinSpacing !== !1 && (Bt._subPinOffset = !0)
						}), j && ce(pt)) : (De = zs(c, M), De && Ee.style.flexBasis !== "auto" && (Ee.style.flexBasis = De + xe)), j && (Ge = {
							top: Ve.top + (ds ? Jt - Q : js) + xe,
							left: Ve.left + (ds ? js : Jt - Q) + xe,
							boxSizing: "border-box",
							position: "fixed"
						}, Ge[si] = Ge["max" + Si] = Math.ceil(Ve.width) + xe, Ge[ri] = Ge["max" + Ir] = Math.ceil(Ve.height) + xe, Ge[nt] = Ge[nt + Ki] = Ge[nt + Ui] = Ge[nt + Zi] = Ge[nt + ji] = "0", Ge[ye] = Ie[ye], Ge[ye + Ki] = Ie[ye + Ki], Ge[ye + Ui] = Ie[ye + Ui], Ge[ye + Zi] = Ie[ye + Zi], Ge[ye + ji] = Ie[ye + ji], Gt = oa(At, Ge, A), Xe && ce(0)), s ? (Br = s._initted, Ks(1), s.render(s.duration(), !0, !0), Ct = me(M.a) - ot + de + oe, Lt = Math.abs(de - Ct) > 1, j && Lt && Gt.splice(Gt.length - 2, 2), s.render(0, !0, !0), Br || s.invalidate(!0), s.parent || s.totalTime(s.totalTime()), Ks(0)) : Ct = de, yt && (yt.value ? yt.style["overflow" + M.a.toUpperCase()] = yt.value : yt.style.removeProperty("overflow-" + M.a));
						else if (u && ce() && !S)
							for (Ve = u.parentNode; Ve && Ve !== te;) Ve._pinOffset && (Q -= Ve._pinOffset, fe -= Ve._pinOffset), Ve = Ve.parentNode;
						Li && Li.forEach(function (Bt) {
							return Bt.revert(!1, !0)
						}), m.start = Q, m.end = fe, Fe = We = Xe ? pt : ce(), !S && !Xe && (Fe < pt && ce(pt), m.scroll.rec = 0), m.revert(!1, !0), Te = $e(), dt && (ae = -1, dt.restart(!0)), ze = 0, s && G && (s._initted || Zt) && s.progress() !== Zt && s.progress(Zt || 0, !0).render(s.time(), !0, !0), (Re || Me !== m.progress || S || v || s && !s._initted) && (s && !G && (s._initted || Me || s.vars.immediateRender !== !1) && s.totalProgress(S && Q < -.001 && !Me ? D.utils.normalize(Q, fe, 0) : Me, !0), m.progress = Re || (Fe - Q) / de === Me ? 0 : Me), c && g && (Ee._pinOffset = Math.round(m.progress * Ct)), U && U.invalidate(), isNaN(Ti) || (Ti -= D.getProperty(_, M.p), ps -= D.getProperty(Je, M.p), Ms(_, M, Ti), Ms(je, M, Ti - (B || 0)), Ms(Je, M, ps), Ms(Ze, M, ps - (B || 0))), Re && !Xe && m.update(), f && !Xe && !Vt && (Vt = !0, f(m), Vt = !1)
					}
				}, m.getVelocity = function () {
					return (ce() - We) / ($e() - Ri) * 1e3 || 0
				}, m.endAnimation = function () {
					Di(m.callbackAnimation), s && (U ? U.progress(1) : s.paused() ? G || Di(s, m.direction < 0, 1) : Di(s, s.reversed()))
				}, m.labelToScroll = function (T) {
					return s && s.labels && (Q || m.refresh() || Q) + s.labels[T] / s.duration() * de || 0
				}, m.getTrailing = function (T) {
					var $ = N.indexOf(m),
						R = m.direction > 0 ? N.slice(0, $).reverse() : N.slice($ + 1);
					return (tt(T) ? R.filter(function (B) {
						return B.vars.preventOverlaps === T
					}) : R).filter(function (B) {
						return m.direction > 0 ? B.end <= Q : B.start >= fe
					})
				}, m.update = function (T, $, R) {
					if (!(S && !R && !T)) {
						var B = Xe === !0 ? pt : m.scroll(),
							Ae = T ? 0 : (B - Q) / de,
							Z = Ae < 0 ? 0 : Ae > 1 ? 1 : Ae || 0,
							ge = m.progress,
							Re, pe, oe, ie, ft, le, Qe, vt;
						if ($ && (We = Fe, Fe = S ? ce() : B, b && (jt = $t, $t = s && !G ? s.totalProgress() : Z)), w && c && !ze && !vs && ht && (!Z && Q < B + (B - We) / ($e() - Ri) * w ? Z = 1e-4 : Z === 1 && fe > B + (B - We) / ($e() - Ri) * w && (Z = .9999)), Z !== ge && m.enabled) {
							if (Re = m.isActive = !!Z && Z < 1, pe = !!ge && ge < 1, le = Re !== pe, ft = le || !!Z != !!ge, m.direction = Z > ge ? 1 : -1, m.progress = Z, ft && !ze && (oe = Z && !ge ? 0 : Z === 1 ? 1 : ge === 1 ? 2 : 3, G && (ie = !le && z[oe + 1] !== "none" && z[oe + 1] || z[oe], vt = s && (ie === "complete" || ie === "reset" || ie in s))), P && (le || vt) && (vt || d || !s) && (Be(P) ? P(m) : m.getTrailing(P).forEach(function (Jt) {
									return Jt.endAnimation()
								})), G || (U && !ze && !vs ? (U._dp._time - U._start !== U._time && U.render(U._dp._time - U._start), U.resetTo ? U.resetTo("totalProgress", Z, s._tTime / s._tDur) : (U.vars.totalProgress = Z, U.invalidate().restart())) : s && s.totalProgress(Z, !!(ze && (Te || T)))), c) {
								if (T && g && (Ee.style[g + M.os2] = Ai), !j) ct(Gi(ot + Ct * Z));
								else if (ft) {
									if (Qe = !T && Z > ge && fe + 1 > B && B + 1 >= kt(L, M), A)
										if (!T && (Re || Qe)) {
											var De = Pt(c, !0),
												Ie = B - Q;
											io(c, te, De.top + (M === ke ? Ie : 0) + xe, De.left + (M === ke ? 0 : Ie) + xe)
										} else io(c, Ee);
									ki(Re || Qe ? Gt : Ut), Lt && Z < 1 && Re || ct(ot + (Z === 1 && !Qe ? Ct : 0))
								}
							}
							b && !Pe.tween && !ze && !vs && dt.restart(!0), a && (le || x && Z && (Z < 1 || !Zs)) && ts(a.targets).forEach(function (Jt) {
								return Jt.classList[Re || x ? "add" : "remove"](a.className)
							}), n && !G && !T && n(m), ft && !ze ? (G && (vt && (ie === "complete" ? s.pause().totalProgress(1) : ie === "reset" ? s.restart(!0).pause() : ie === "restart" ? s.restart(!0) : s[ie]()), n && n(m)), (le || !Zs) && (h && le && Qs(m, h), K[oe] && Qs(m, K[oe]), x && (Z === 1 ? m.kill(!1, 1) : K[oe] = 0), le || (oe = Z === 1 ? 1 : 3, K[oe] && Qs(m, K[oe]))), C && !Re && Math.abs(m.getVelocity()) > (zi(C) ? C : 2500) && (Di(m.callbackAnimation), U ? U.progress(1) : Di(s, ie === "reverse" ? 1 : !Z, 1))) : G && n && !ze && n(m)
						}
						if (ci) {
							var Ve = S ? B / S.duration() * (S._caScrollDist || 0) : B;
							us(Ve + (_._isFlipped ? 1 : 0)), ci(Ve)
						}
						di && di(-B / S.duration() * (S._caScrollDist || 0))
					}
				}, m.enable = function (T, $) {
					m.enabled || (m.enabled = !0, Le(L, "resize", $i), H || Le(L, "scroll", fi), X && Le(r, "refreshInit", X), T !== !1 && (m.progress = Me = 0, Fe = We = ae = ce()), $ !== !1 && m.refresh())
				}, m.getTween = function (T) {
					return T && Pe ? Pe.tween : U
				}, m.setPositions = function (T, $, R, B) {
					if (S) {
						var Ae = S.scrollTrigger,
							Z = S.duration(),
							ge = Ae.end - Ae.start;
						T = Ae.start + ge * T / Z, $ = Ae.start + ge * $ / Z
					}
					m.refresh(!1, !1, {
						start: Xr(T, R && !!m._startClamp),
						end: Xr($, R && !!m._endClamp)
					}, B), m.update()
				}, m.adjustPinSpacing = function (T) {
					if (we && T) {
						var $ = we.indexOf(M.d) + 1;
						we[$] = parseFloat(we[$]) + T + xe, we[1] = parseFloat(we[1]) + T + xe, ki(we)
					}
				}, m.disable = function (T, $) {
					if (T !== !1 && m.revert(!0, !0), m.enabled && (m.enabled = m.isActive = !1, $ || U && U.pause(), pt = 0, Se && (Se.uncache = 1), X && Ce(r, "refreshInit", X), dt && (dt.pause(), Pe.tween && Pe.tween.kill() && (Pe.tween = 0)), !H)) {
						for (var R = N.length; R--;)
							if (N[R].scroller === L && N[R] !== m) return;
						Ce(L, "resize", $i), H || Ce(L, "scroll", fi)
					}
				}, m.kill = function (T, $) {
					m.disable(T, $), U && !$ && U.kill(), l && delete vr[l];
					var R = N.indexOf(m);
					R >= 0 && N.splice(R, 1), R === Ye && Ds > 0 && Ye--, R = 0, N.forEach(function (B) {
						return B.scroller === m.scroller && (R = 1)
					}), R || Xe || (m.scroll.rec = 0), s && (s.scrollTrigger = null, T && s.revert({
						kill: !1
					}), $ || s.kill()), je && [je, Ze, _, Je].forEach(function (B) {
						return B.parentNode && B.parentNode.removeChild(B)
					}), Ji === m && (Ji = 0), c && (Se && (Se.uncache = 1), R = 0, N.forEach(function (B) {
						return B.pin === c && R++
					}), R || (Se.spacer = 0)), i.onKill && i.onKill(m)
				}, N.push(m), m.enable(!1, !1), Tt && Tt(m), s && s.add && !de) {
				var ee = m.update;
				m.update = function () {
					m.update = ee, Y.cache++, Q || fe || m.refresh()
				}, D.delayedCall(.01, m.update), de = .01, Q = fe = 0
			} else m.refresh();
			c && ia()
		}, r.register = function (i) {
			return vi || (D = i || Zo(), Ko() && window.document && r.enable(), vi = Vi), vi
		}, r.defaults = function (i) {
			if (i)
				for (var s in i) bs[s] = i[s];
			return bs
		}, r.disable = function (i, s) {
			Vi = 0, N.forEach(function (n) {
				return n[s ? "kill" : "disable"](i)
			}), Ce(q, "wheel", fi), Ce(se, "scroll", fi), clearInterval(gs), Ce(se, "touchcancel", bt), Ce(te, "touchstart", bt), ys(Ce, se, "pointerdown,touchstart,mousedown", Ur), ys(Ce, se, "pointerup,touchend,mouseup", jr), Gs.kill(), ws(Ce);
			for (var o = 0; o < Y.length; o += 3) _s(Ce, Y[o], Y[o + 1]), _s(Ce, Y[o], Y[o + 2])
		}, r.enable = function () {
			if (q = window, se = document, it = se.documentElement, te = se.body, D && (ts = D.utils.toArray, Yi = D.utils.clamp, mr = D.core.context || bt, Ks = D.core.suppressOverwrites || bt, Lr = q.history.scrollRestoration || "auto", wr = q.pageYOffset || 0, D.core.globals("ScrollTrigger", r), te)) {
				Vi = 1, xi = document.createElement("div"), xi.style.height = "100vh", xi.style.position = "absolute", ln(), jn(), ve.register(D), r.isTouch = ve.isTouch, Ft = ve.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), fr = ve.isTouch === 1, Le(q, "wheel", fi), Cr = [q, se, it, te], D.matchMedia ? (r.matchMedia = function (h) {
					var f = D.matchMedia(),
						d;
					for (d in h) f.add(d, h[d]);
					return f
				}, D.addEventListener("matchMediaInit", function () {
					nn(), Rr()
				}), D.addEventListener("matchMediaRevert", function () {
					return on()
				}), D.addEventListener("matchMedia", function () {
					ti(0, 1), li("matchMedia")
				}), D.matchMedia().add("(orientation: portrait)", function () {
					return er(), er
				})) : console.warn("Requires GSAP 3.11.0 or later"), er(), Le(se, "scroll", fi);
				var i = te.hasAttribute("style"),
					s = te.style,
					o = s.borderTopStyle,
					n = D.core.Animation.prototype,
					a, l;
				for (n.revert || Object.defineProperty(n, "revert", {
						value: function () {
							return this.time(-.01, !0)
						}
					}), s.borderTopStyle = "solid", a = Pt(te), ke.m = Math.round(a.top + ke.sc()) || 0, Ue.m = Math.round(a.left + Ue.sc()) || 0, o ? s.borderTopStyle = o : s.removeProperty("border-top-style"), i || (te.setAttribute("style", ""), te.removeAttribute("style")), gs = setInterval(Jr, 250), D.delayedCall(.5, function () {
						return vs = 0
					}), Le(se, "touchcancel", bt), Le(te, "touchstart", bt), ys(Le, se, "pointerdown,touchstart,mousedown", Ur), ys(Le, se, "pointerup,touchend,mouseup", jr), pr = D.utils.checkPrefix("transform"), Is.push(pr), vi = $e(), Gs = D.delayedCall(.2, ti).pause(), wi = [se, "visibilitychange", function () {
						var h = q.innerWidth,
							f = q.innerHeight;
						se.hidden ? (Nr = h, qr = f) : (Nr !== h || qr !== f) && $i()
					}, se, "DOMContentLoaded", ti, q, "load", ti, q, "resize", $i], ws(Le), N.forEach(function (h) {
						return h.enable(0, 1)
					}), l = 0; l < Y.length; l += 3) _s(Ce, Y[l], Y[l + 1]), _s(Ce, Y[l], Y[l + 2])
			}
		}, r.config = function (i) {
			"limitCallbacks" in i && (Zs = !!i.limitCallbacks);
			var s = i.syncInterval;
			s && clearInterval(gs) || (gs = s) && setInterval(Jr, s), "ignoreMobileResize" in i && (fr = r.isTouch === 1 && i.ignoreMobileResize), "autoRefreshEvents" in i && (ws(Ce) || ws(Le, i.autoRefreshEvents || "none"), Xo = (i.autoRefreshEvents + "").indexOf("resize") === -1)
		}, r.scrollerProxy = function (i, s) {
			var o = Ke(i),
				n = Y.indexOf(o),
				a = ni(o);
			~n && Y.splice(n, a ? 6 : 2), s && (a ? Mt.unshift(q, s, te, s, it, s) : Mt.unshift(o, s))
		}, r.clearMatchMedia = function (i) {
			N.forEach(function (s) {
				return s._ctx && s._ctx.query === i && s._ctx.kill(!0, !0)
			})
		}, r.isInViewport = function (i, s, o) {
			var n = (tt(i) ? Ke(i) : i).getBoundingClientRect(),
				a = n[o ? si : ri] * s || 0;
			return o ? n.right - a > 0 && n.left + a < q.innerWidth : n.bottom - a > 0 && n.top + a < q.innerHeight
		}, r.positionInViewport = function (i, s, o) {
			tt(i) && (i = Ke(i));
			var n = i.getBoundingClientRect(),
				a = n[o ? si : ri],
				l = s == null ? a / 2 : s in $s ? $s[s] * a : ~s.indexOf("%") ? parseFloat(s) * a / 100 : parseFloat(s) || 0;
			return o ? (n.left + l) / q.innerWidth : (n.top + l) / q.innerHeight
		}, r.killAll = function (i) {
			if (N.slice(0).forEach(function (o) {
					return o.vars.id !== "ScrollSmoother" && o.kill()
				}), i !== !0) {
				var s = ai.killAll || [];
				ai = {}, s.forEach(function (o) {
					return o()
				})
			}
		}, r
	})();
O.version = "3.14.2";
O.saveStyles = function (r) {
	return r ? ts(r).forEach(function (e) {
		if (e && e.style) {
			var t = et.indexOf(e);
			t >= 0 && et.splice(t, 5), et.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), D.core.getCache(e), mr())
		}
	}) : et
};
O.revert = function (r, e) {
	return Rr(!r, e)
};
O.create = function (r, e) {
	return new O(r, e)
};
O.refresh = function (r) {
	return r ? $i(!0) : (vi || O.register()) && ti(!0)
};
O.update = function (r) {
	return ++Y.cache && Rt(r === !0 ? 2 : 0)
};
O.clearScrollMemory = an;
O.maxScroll = function (r, e) {
	return kt(r, e ? Ue : ke)
};
O.getScrollFunc = function (r, e) {
	return Xt(Ke(r), e ? Ue : ke)
};
O.getById = function (r) {
	return vr[r]
};
O.getAll = function () {
	return N.filter(function (r) {
		return r.vars.id !== "ScrollSmoother"
	})
};
O.isScrolling = function () {
	return !!ht
};
O.snapDirectional = Or;
O.addEventListener = function (r, e) {
	var t = ai[r] || (ai[r] = []);
	~t.indexOf(e) || t.push(e)
};
O.removeEventListener = function (r, e) {
	var t = ai[r],
		i = t && t.indexOf(e);
	i >= 0 && t.splice(i, 1)
};
O.batch = function (r, e) {
	var t = [],
		i = {},
		s = e.interval || .016,
		o = e.batchMax || 1e9,
		n = function (h, f) {
			var d = [],
				u = [],
				c = D.delayedCall(s, function () {
					f(d, u), d = [], u = []
				}).pause();
			return function (g) {
				d.length || c.restart(!0), d.push(g.trigger), u.push(g), o <= d.length && c.progress(1)
			}
		},
		a;
	for (a in e) i[a] = a.substr(0, 2) === "on" && Be(e[a]) && a !== "onRefreshInit" ? n(a, e[a]) : e[a];
	return Be(o) && (o = o(), Le(O, "refresh", function () {
		return o = e.batchMax()
	})), ts(r).forEach(function (l) {
		var h = {};
		for (a in i) h[a] = i[a];
		h.trigger = l, t.push(O.create(h))
	}), t
};
var ro = function (e, t, i, s) {
		return t > s ? e(s) : t < 0 && e(0), i > s ? (s - t) / (i - t) : i < 0 ? t / (t - i) : 1
	},
	ir = function r(e, t) {
		t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (ve.isTouch ? " pinch-zoom" : "") : "none", e === it && r(te, t)
	},
	Ss = {
		auto: 1,
		scroll: 1
	},
	aa = function (e) {
		var t = e.event,
			i = e.target,
			s = e.axis,
			o = (t.changedTouches ? t.changedTouches[0] : t).target,
			n = o._gsap || D.core.getCache(o),
			a = $e(),
			l;
		if (!n._isScrollT || a - n._isScrollT > 2e3) {
			for (; o && o !== te && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(Ss[(l = at(o)).overflowY] || Ss[l.overflowX]));) o = o.parentNode;
			n._isScroll = o && o !== i && !ni(o) && (Ss[(l = at(o)).overflowY] || Ss[l.overflowX]), n._isScrollT = a
		}(n._isScroll || s === "x") && (t.stopPropagation(), t._gsapAllow = !0)
	},
	cn = function (e, t, i, s) {
		return ve.create({
			target: e,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: t,
			onWheel: s = s && aa,
			onPress: s,
			onDrag: s,
			onScroll: s,
			onEnable: function () {
				return i && Le(se, ve.eventTypes[0], no, !1, !0)
			},
			onDisable: function () {
				return Ce(se, ve.eventTypes[0], no, !0)
			}
		})
	},
	la = /(input|label|select|textarea)/i,
	oo, no = function (e) {
		var t = la.test(e.target.tagName);
		(t || oo) && (e._gsapAllow = !0, oo = t)
	},
	ha = function (e) {
		ei(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
		var t = e,
			i = t.normalizeScrollX,
			s = t.momentum,
			o = t.allowNestedScroll,
			n = t.onRelease,
			a, l, h = Ke(e.target) || it,
			f = D.core.globals().ScrollSmoother,
			d = f && f.get(),
			u = Ft && (e.content && Ke(e.content) || d && e.content !== !1 && !d.smooth() && d.content()),
			c = Xt(h, ke),
			g = Xt(h, Ue),
			v = 1,
			w = (ve.isTouch && q.visualViewport ? q.visualViewport.scale * q.visualViewport.width : q.outerWidth) / q.innerWidth,
			p = 0,
			y = Be(s) ? function () {
				return s(a)
			} : function () {
				return s || 2.8
			},
			x, b, A = cn(h, e.type, !0, o),
			E = function () {
				return b = !1
			},
			S = bt,
			C = bt,
			P = function () {
				l = kt(h, ke), C = Yi(Ft ? 1 : 0, l), i && (S = Yi(0, kt(h, Ue))), x = oi
			},
			M = function () {
				u._gsap.y = Gi(parseFloat(u._gsap.y) + c.offset) + "px", u.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(u._gsap.y) + ", 0, 1)", c.offset = c.cacheID = 0
			},
			G = function () {
				if (b) {
					requestAnimationFrame(E);
					var J = Gi(a.deltaY / 2),
						W = C(c.v - J);
					if (u && W !== c.v + c.offset) {
						c.offset = W - c.v;
						var m = Gi((parseFloat(u && u._gsap.y) || 0) - c.offset);
						u.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + m + ", 0, 1)", u._gsap.y = m + "px", c.cacheID = Y.cache, Rt()
					}
					return !0
				}
				c.offset && M(), b = !0
			},
			L, I, H, j, K = function () {
				P(), L.isActive() && L.vars.scrollY > l && (c() > l ? L.progress(1) && c(l) : L.resetTo("scrollY", l))
			};
		return u && D.set(u, {
			y: "+=0"
		}), e.ignoreCheck = function (z) {
			return Ft && z.type === "touchmove" && G() || v > 1.05 && z.type !== "touchstart" || a.isGesturing || z.touches && z.touches.length > 1
		}, e.onPress = function () {
			b = !1;
			var z = v;
			v = Gi((q.visualViewport && q.visualViewport.scale || 1) / w), L.pause(), z !== v && ir(h, v > 1.01 ? !0 : i ? !1 : "x"), I = g(), H = c(), P(), x = oi
		}, e.onRelease = e.onGestureStart = function (z, J) {
			if (c.offset && M(), !J) j.restart(!0);
			else {
				Y.cache++;
				var W = y(),
					m, X;
				i && (m = g(), X = m + W * .05 * -z.velocityX / .227, W *= ro(g, m, X, kt(h, Ue)), L.vars.scrollX = S(X)), m = c(), X = m + W * .05 * -z.velocityY / .227, W *= ro(c, m, X, kt(h, ke)), L.vars.scrollY = C(X), L.invalidate().duration(W).play(.01), (Ft && L.vars.scrollY >= l || m >= l - 1) && D.to({}, {
					onUpdate: K,
					duration: W
				})
			}
			n && n(z)
		}, e.onWheel = function () {
			L._ts && L.pause(), $e() - p > 1e3 && (x = 0, p = $e())
		}, e.onChange = function (z, J, W, m, X) {
			if (oi !== x && P(), J && i && g(S(m[2] === J ? I + (z.startX - z.x) : g() + J - m[1])), W) {
				c.offset && M();
				var he = X[2] === W,
					re = he ? H + z.startY - z.y : c() + W - X[1],
					ae = C(re);
				he && re !== ae && (H += ae - re), c(ae)
			}(W || J) && Rt()
		}, e.onEnable = function () {
			ir(h, i ? !1 : "x"), O.addEventListener("refresh", K), Le(q, "resize", K), c.smooth && (c.target.style.scrollBehavior = "auto", c.smooth = g.smooth = !1), A.enable()
		}, e.onDisable = function () {
			ir(h, !0), Ce(q, "resize", K), O.removeEventListener("refresh", K), A.kill()
		}, e.lockAxis = e.lockAxis !== !1, a = new ve(e), a.iOS = Ft, Ft && !c() && c(1), Ft && D.ticker.add(bt), j = a._dc, L = D.to(a, {
			ease: "power4",
			paused: !0,
			inherit: !1,
			scrollX: i ? "+=0.1" : "+=0",
			scrollY: "+=0.1",
			modifiers: {
				scrollY: hn(c, c(), function () {
					return L.pause()
				})
			},
			onUpdate: Rt,
			onComplete: j.vars.onComplete
		}), a
	};
O.sort = function (r) {
	if (Be(r)) return N.sort(r);
	var e = q.pageYOffset || 0;
	return O.getAll().forEach(function (t) {
		return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + q.innerHeight
	}), N.sort(r || function (t, i) {
		return (t.vars.refreshPriority || 0) * -1e6 + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((i.vars.containerAnimation ? 1e6 : i._sortY) + (i.vars.refreshPriority || 0) * -1e6)
	})
};
O.observe = function (r) {
	return new ve(r)
};
O.normalizeScroll = function (r) {
	if (typeof r > "u") return qe;
	if (r === !0 && qe) return qe.enable();
	if (r === !1) {
		qe && qe.kill(), qe = r;
		return
	}
	var e = r instanceof ve ? r : ha(r);
	return qe && qe.target === e.target && qe.kill(), ni(e.target) && (qe = e), e
};
O.core = {
	_getVelocityProp: dr,
	_inputObserver: cn,
	_scrollers: Y,
	_proxies: Mt,
	bridge: {
		ss: function () {
			ht || li("scrollStart"), ht = $e()
		},
		ref: function () {
			return ze
		}
	}
};
Zo() && D.registerPlugin(O);
k.registerPlugin(O);
const _r = {
		default: "#ffffff",
		fw: "#070304",
		about: "#f8f8f8",
		archive: "#f8f8f8",
		overview: "#f8f8f8",
		work: "#f8f8f8",
		notFound: "#FF4401"
	},
	un = {
		default: "#DEDEDE",
		fw: "#141414",
		about: "#DEDEDE",
		archive: "#DEDEDE",
		overview: "#DEDEDE",
		work: "#DEDEDE",
		notFound: "#CB3500"
	},
	ca = {
		default: 1,
		fw: 1,
		about: 1,
		archive: 1,
		overview: 11,
		work: 1,
		notFound: 1
	},
	ua = r => {
		document.documentElement.style.setProperty("--canvas-z-index", ca[r])
	},
	da = r => {
		k.set(document.documentElement, {
			pointerEvents: "none",
			cursor: "wait"
		}), r.stop()
	},
	ls = r => {
		k.set(document.documentElement, {
			pointerEvents: "auto",
			cursor: ""
		}), r.start(), O.refresh()
	},
	Ei = {
		duration: .5,
		ease: "power3.out"
	},
	sr = window.navigator,
	rr = /Mobi|Android|Tablet|iPad|iPhone/.test(sr.userAgent) || sr.platform === "MacIntel" && sr.maxTouchPoints > 1,
	ne = {
		isMobile: rr,
		isDesktop: !rr,
		shouldEnableWebGL: !rr
	};
class pa {
	constructor({
		onNavigate: e
	}) {
		this.onNavigate = e, this.handlePopState = this.handlePopState.bind(this), this.handleClick = this.handleClick.bind(this), this.init()
	}
	init() {
		window.addEventListener("popstate", this.handlePopState), document.addEventListener("click", this.handleClick)
	}
	handlePopState() {
		this.onNavigate({
			url: window.location.pathname,
			push: !1
		})
	}
	handleClick(e) {
		const t = e.target.closest("a");
		!t || !this.shouldHandleLink(t, e) || (e.preventDefault(), new URL(t.href).pathname === window.location.pathname) || this.onNavigate({
			url: t.href
		})
	}
	parseRoute(e) {
		try {
			const i = new URL(e, window.location.origin).pathname;
			return i === "/" || i === "/index" ? {
				template: "index",
				workSlug: null
			} : i.startsWith("/work/") ? {
				template: "work",
				workSlug: i.replace("/work/", "").replace("/", "")
			} : i.startsWith("/archive") ? {
				template: "archive",
				workSlug: null
			} : i.startsWith("/overview") ? {
				template: "overview",
				workSlug: null
			} : i.startsWith("/about") ? {
				template: "about",
				workSlug: null
			} : {
				template: i.replace("/", "").split("/")[0] || "index",
				workSlug: null
			}
		} catch {
			return {
				template: "index",
				workSlug: null
			}
		}
	}
	getWorkSlugFromCurrentUrl() {
		const t = window.location.pathname.match(/\/work\/([^\/]+)/);
		return t ? t[1] : null
	}
	async fetch(e) {
		const t = await fetch(e);
		if (!t.ok) throw new Error(`HTTP ${t.status}`);
		const i = await t.text(),
			o = new DOMParser().parseFromString(i, "text/html"),
			n = o.querySelector("#app"),
			a = o.querySelector("title")?.textContent || document.title;
		if (!n) throw new Error("No #app element found");
		return {
			element: n,
			html: i,
			title: a
		}
	}
	shouldHandleLink(e, t) {
		const i = e.getAttribute("href");
		if (t.ctrlKey || t.metaKey || t.shiftKey || t.altKey || !i || e.hasAttribute("target") || /^(#|mailto:|tel:|javascript:)/.test(i)) return !1;
		try {
			return new URL(e.href).origin === window.location.origin
		} catch {
			return !1
		}
	}
	bindLinks() {}
	destroy() {
		window.removeEventListener("popstate", this.handlePopState), document.removeEventListener("click", this.handleClick), this.onNavigate = null
	}
}
class St {
	constructor(e, t, i, s, o = "div") {
		this.parent = e, this.object = t, this.property = i, this._disabled = !1, this._hidden = !1, this.initialValue = this.getValue(), this.domElement = document.createElement(o), this.domElement.classList.add("controller"), this.domElement.classList.add(s), this.$name = document.createElement("div"), this.$name.classList.add("name"), St.nextNameID = St.nextNameID || 0, this.$name.id = `lil-gui-name-${++St.nextNameID}`, this.$widget = document.createElement("div"), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.domElement.addEventListener("keydown", n => n.stopPropagation()), this.domElement.addEventListener("keyup", n => n.stopPropagation()), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(i)
	}
	name(e) {
		return this._name = e, this.$name.textContent = e, this
	}
	onChange(e) {
		return this._onChange = e, this
	}
	_callOnChange() {
		this.parent._callOnChange(this), this._onChange !== void 0 && this._onChange.call(this, this.getValue()), this._changed = !0
	}
	onFinishChange(e) {
		return this._onFinishChange = e, this
	}
	_callOnFinishChange() {
		this._changed && (this.parent._callOnFinishChange(this), this._onFinishChange !== void 0 && this._onFinishChange.call(this, this.getValue())), this._changed = !1
	}
	reset() {
		return this.setValue(this.initialValue), this._callOnFinishChange(), this
	}
	enable(e = !0) {
		return this.disable(!e)
	}
	disable(e = !0) {
		return e === this._disabled ? this : (this._disabled = e, this.domElement.classList.toggle("disabled", e), this.$disable.toggleAttribute("disabled", e), this)
	}
	show(e = !0) {
		return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this
	}
	hide() {
		return this.show(!1)
	}
	options(e) {
		const t = this.parent.add(this.object, this.property, e);
		return t.name(this._name), this.destroy(), t
	}
	min(e) {
		return this
	}
	max(e) {
		return this
	}
	step(e) {
		return this
	}
	decimals(e) {
		return this
	}
	listen(e = !0) {
		return this._listening = e, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this
	}
	_listenCallback() {
		this._listenCallbackID = requestAnimationFrame(this._listenCallback);
		const e = this.save();
		e !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = e
	}
	getValue() {
		return this.object[this.property]
	}
	setValue(e) {
		return this.getValue() !== e && (this.object[this.property] = e, this._callOnChange(), this.updateDisplay()), this
	}
	updateDisplay() {
		return this
	}
	load(e) {
		return this.setValue(e), this._callOnFinishChange(), this
	}
	save() {
		return this.getValue()
	}
	destroy() {
		this.listen(!1), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement)
	}
}
class fa extends St {
	constructor(e, t, i) {
		super(e, t, i, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
			this.setValue(this.$input.checked), this._callOnFinishChange()
		}), this.$disable = this.$input, this.updateDisplay()
	}
	updateDisplay() {
		return this.$input.checked = this.getValue(), this
	}
}

function br(r) {
	let e, t;
	return (e = r.match(/(#|0x)?([a-f0-9]{6})/i)) ? t = e[2] : (e = r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? t = parseInt(e[1]).toString(16).padStart(2, 0) + parseInt(e[2]).toString(16).padStart(2, 0) + parseInt(e[3]).toString(16).padStart(2, 0) : (e = r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (t = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]), t ? "#" + t : !1
}
const ma = {
		isPrimitive: !0,
		match: r => typeof r == "string",
		fromHexString: br,
		toHexString: br
	},
	ss = {
		isPrimitive: !0,
		match: r => typeof r == "number",
		fromHexString: r => parseInt(r.substring(1), 16),
		toHexString: r => "#" + r.toString(16).padStart(6, 0)
	},
	ga = {
		isPrimitive: !1,
		match: r => Array.isArray(r),
		fromHexString(r, e, t = 1) {
			const i = ss.fromHexString(r);
			e[0] = (i >> 16 & 255) / 255 * t, e[1] = (i >> 8 & 255) / 255 * t, e[2] = (i & 255) / 255 * t
		},
		toHexString([r, e, t], i = 1) {
			i = 255 / i;
			const s = r * i << 16 ^ e * i << 8 ^ t * i << 0;
			return ss.toHexString(s)
		}
	},
	va = {
		isPrimitive: !1,
		match: r => Object(r) === r,
		fromHexString(r, e, t = 1) {
			const i = ss.fromHexString(r);
			e.r = (i >> 16 & 255) / 255 * t, e.g = (i >> 8 & 255) / 255 * t, e.b = (i & 255) / 255 * t
		},
		toHexString({
			r,
			g: e,
			b: t
		}, i = 1) {
			i = 255 / i;
			const s = r * i << 16 ^ e * i << 8 ^ t * i << 0;
			return ss.toHexString(s)
		}
	},
	wa = [ma, ss, ga, va];

function ya(r) {
	return wa.find(e => e.match(r))
}
class _a extends St {
	constructor(e, t, i, s) {
		super(e, t, i, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = ya(this.initialValue), this._rgbScale = s, this._initialValueHexString = this.save(), this._textFocused = !1, this.$input.addEventListener("input", () => {
			this._setValueFromHexString(this.$input.value)
		}), this.$input.addEventListener("blur", () => {
			this._callOnFinishChange()
		}), this.$text.addEventListener("input", () => {
			const o = br(this.$text.value);
			o && this._setValueFromHexString(o)
		}), this.$text.addEventListener("focus", () => {
			this._textFocused = !0, this.$text.select()
		}), this.$text.addEventListener("blur", () => {
			this._textFocused = !1, this.updateDisplay(), this._callOnFinishChange()
		}), this.$disable = this.$text, this.updateDisplay()
	}
	reset() {
		return this._setValueFromHexString(this._initialValueHexString), this
	}
	_setValueFromHexString(e) {
		if (this._format.isPrimitive) {
			const t = this._format.fromHexString(e);
			this.setValue(t)
		} else this._format.fromHexString(e, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay()
	}
	save() {
		return this._format.toHexString(this.getValue(), this._rgbScale)
	}
	load(e) {
		return this._setValueFromHexString(e), this._callOnFinishChange(), this
	}
	updateDisplay() {
		return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this
	}
}
class or extends St {
	constructor(e, t, i) {
		super(e, t, i, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", s => {
			s.preventDefault(), this.getValue().call(this.object), this._callOnChange()
		}), this.$button.addEventListener("touchstart", () => {}, {
			passive: !0
		}), this.$disable = this.$button
	}
}
class ba extends St {
	constructor(e, t, i, s, o, n) {
		super(e, t, i, "number"), this._initInput(), this.min(s), this.max(o);
		const a = n !== void 0;
		this.step(a ? n : this._getImplicitStep(), a), this.updateDisplay()
	}
	decimals(e) {
		return this._decimals = e, this.updateDisplay(), this
	}
	min(e) {
		return this._min = e, this._onUpdateMinMax(), this
	}
	max(e) {
		return this._max = e, this._onUpdateMinMax(), this
	}
	step(e, t = !0) {
		return this._step = e, this._stepExplicit = t, this
	}
	updateDisplay() {
		const e = this.getValue();
		if (this._hasSlider) {
			let t = (e - this._min) / (this._max - this._min);
			t = Math.max(0, Math.min(t, 1)), this.$fill.style.width = t * 100 + "%"
		}
		return this._inputFocused || (this.$input.value = this._decimals === void 0 ? e : e.toFixed(this._decimals)), this
	}
	_initInput() {
		this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), window.matchMedia("(pointer: coarse)").matches && (this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any")), this.$widget.appendChild(this.$input), this.$disable = this.$input;
		const t = () => {
				let y = parseFloat(this.$input.value);
				isNaN(y) || (this._stepExplicit && (y = this._snap(y)), this.setValue(this._clamp(y)))
			},
			i = y => {
				const x = parseFloat(this.$input.value);
				isNaN(x) || (this._snapClampSetValue(x + y), this.$input.value = this.getValue())
			},
			s = y => {
				y.key === "Enter" && this.$input.blur(), y.code === "ArrowUp" && (y.preventDefault(), i(this._step * this._arrowKeyMultiplier(y))), y.code === "ArrowDown" && (y.preventDefault(), i(this._step * this._arrowKeyMultiplier(y) * -1))
			},
			o = y => {
				this._inputFocused && (y.preventDefault(), i(this._step * this._normalizeMouseWheel(y)))
			};
		let n = !1,
			a, l, h, f, d;
		const u = 5,
			c = y => {
				a = y.clientX, l = h = y.clientY, n = !0, f = this.getValue(), d = 0, window.addEventListener("mousemove", g), window.addEventListener("mouseup", v)
			},
			g = y => {
				if (n) {
					const x = y.clientX - a,
						b = y.clientY - l;
					Math.abs(b) > u ? (y.preventDefault(), this.$input.blur(), n = !1, this._setDraggingStyle(!0, "vertical")) : Math.abs(x) > u && v()
				}
				if (!n) {
					const x = y.clientY - h;
					d -= x * this._step * this._arrowKeyMultiplier(y), f + d > this._max ? d = this._max - f : f + d < this._min && (d = this._min - f), this._snapClampSetValue(f + d)
				}
				h = y.clientY
			},
			v = () => {
				this._setDraggingStyle(!1, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", v)
			},
			w = () => {
				this._inputFocused = !0
			},
			p = () => {
				this._inputFocused = !1, this.updateDisplay(), this._callOnFinishChange()
			};
		this.$input.addEventListener("input", t), this.$input.addEventListener("keydown", s), this.$input.addEventListener("wheel", o, {
			passive: !1
		}), this.$input.addEventListener("mousedown", c), this.$input.addEventListener("focus", w), this.$input.addEventListener("blur", p)
	}
	_initSlider() {
		this._hasSlider = !0, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
		const e = (p, y, x, b, A) => (p - y) / (x - y) * (A - b) + b,
			t = p => {
				const y = this.$slider.getBoundingClientRect();
				let x = e(p, y.left, y.right, this._min, this._max);
				this._snapClampSetValue(x)
			},
			i = p => {
				this._setDraggingStyle(!0), t(p.clientX), window.addEventListener("mousemove", s), window.addEventListener("mouseup", o)
			},
			s = p => {
				t(p.clientX)
			},
			o = () => {
				this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", o)
			};
		let n = !1,
			a, l;
		const h = p => {
				p.preventDefault(), this._setDraggingStyle(!0), t(p.touches[0].clientX), n = !1
			},
			f = p => {
				p.touches.length > 1 || (this._hasScrollBar ? (a = p.touches[0].clientX, l = p.touches[0].clientY, n = !0) : h(p), window.addEventListener("touchmove", d, {
					passive: !1
				}), window.addEventListener("touchend", u))
			},
			d = p => {
				if (n) {
					const y = p.touches[0].clientX - a,
						x = p.touches[0].clientY - l;
					Math.abs(y) > Math.abs(x) ? h(p) : (window.removeEventListener("touchmove", d), window.removeEventListener("touchend", u))
				} else p.preventDefault(), t(p.touches[0].clientX)
			},
			u = () => {
				this._callOnFinishChange(), this._setDraggingStyle(!1), window.removeEventListener("touchmove", d), window.removeEventListener("touchend", u)
			},
			c = this._callOnFinishChange.bind(this),
			g = 400;
		let v;
		const w = p => {
			if (Math.abs(p.deltaX) < Math.abs(p.deltaY) && this._hasScrollBar) return;
			p.preventDefault();
			const x = this._normalizeMouseWheel(p) * this._step;
			this._snapClampSetValue(this.getValue() + x), this.$input.value = this.getValue(), clearTimeout(v), v = setTimeout(c, g)
		};
		this.$slider.addEventListener("mousedown", i), this.$slider.addEventListener("touchstart", f, {
			passive: !1
		}), this.$slider.addEventListener("wheel", w, {
			passive: !1
		})
	}
	_setDraggingStyle(e, t = "horizontal") {
		this.$slider && this.$slider.classList.toggle("active", e), document.body.classList.toggle("lil-gui-dragging", e), document.body.classList.toggle(`lil-gui-${t}`, e)
	}
	_getImplicitStep() {
		return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : .1
	}
	_onUpdateMinMax() {
		!this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), !1), this._initSlider(), this.updateDisplay())
	}
	_normalizeMouseWheel(e) {
		let {
			deltaX: t,
			deltaY: i
		} = e;
		return Math.floor(e.deltaY) !== e.deltaY && e.wheelDelta && (t = 0, i = -e.wheelDelta / 120, i *= this._stepExplicit ? 1 : 10), t + -i
	}
	_arrowKeyMultiplier(e) {
		let t = this._stepExplicit ? 1 : 10;
		return e.shiftKey ? t *= 10 : e.altKey && (t /= 10), t
	}
	_snap(e) {
		let t = 0;
		return this._hasMin ? t = this._min : this._hasMax && (t = this._max), e -= t, e = Math.round(e / this._step) * this._step, e += t, e = parseFloat(e.toPrecision(15)), e
	}
	_clamp(e) {
		return e < this._min && (e = this._min), e > this._max && (e = this._max), e
	}
	_snapClampSetValue(e) {
		this.setValue(this._clamp(this._snap(e)))
	}
	get _hasScrollBar() {
		const e = this.parent.root.$children;
		return e.scrollHeight > e.clientHeight
	}
	get _hasMin() {
		return this._min !== void 0
	}
	get _hasMax() {
		return this._max !== void 0
	}
}
class xa extends St {
	constructor(e, t, i, s) {
		super(e, t, i, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$select.addEventListener("change", () => {
			this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange()
		}), this.$select.addEventListener("focus", () => {
			this.$display.classList.add("focus")
		}), this.$select.addEventListener("blur", () => {
			this.$display.classList.remove("focus")
		}), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.options(s)
	}
	options(e) {
		return this._values = Array.isArray(e) ? e : Object.values(e), this._names = Array.isArray(e) ? e : Object.keys(e), this.$select.replaceChildren(), this._names.forEach(t => {
			const i = document.createElement("option");
			i.textContent = t, this.$select.appendChild(i)
		}), this.updateDisplay(), this
	}
	updateDisplay() {
		const e = this.getValue(),
			t = this._values.indexOf(e);
		return this.$select.selectedIndex = t, this.$display.textContent = t === -1 ? e : this._names[t], this
	}
}
class ka extends St {
	constructor(e, t, i) {
		super(e, t, i, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("spellcheck", "false"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
			this.setValue(this.$input.value)
		}), this.$input.addEventListener("keydown", s => {
			s.code === "Enter" && this.$input.blur()
		}), this.$input.addEventListener("blur", () => {
			this._callOnFinishChange()
		}), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay()
	}
	updateDisplay() {
		return this.$input.value = this.getValue(), this
	}
}
var Ma = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;

function Sa(r) {
	const e = document.createElement("style");
	e.innerHTML = r;
	const t = document.querySelector("head link[rel=stylesheet], head style");
	t ? document.head.insertBefore(e, t) : document.head.appendChild(e)
}
let ao = !1;
class Vr {
	constructor({
		parent: e,
		autoPlace: t = e === void 0,
		container: i,
		width: s,
		title: o = "Controls",
		closeFolders: n = !1,
		injectStyles: a = !0,
		touchStyles: l = !0
	} = {}) {
		if (this.parent = e, this.root = e ? e.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = !1, this._hidden = !1, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("button"), this.$title.classList.add("title"), this.$title.setAttribute("aria-expanded", !0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("touchstart", () => {}, {
				passive: !0
			}), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(o), this.parent) {
			this.parent.children.push(this), this.parent.folders.push(this), this.parent.$children.appendChild(this.domElement);
			return
		}
		this.domElement.classList.add("root"), l && this.domElement.classList.add("allow-touch-styles"), !ao && a && (Sa(Ma), ao = !0), i ? i.appendChild(this.domElement) : t && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), s && this.domElement.style.setProperty("--width", s + "px"), this._closeFolders = n
	}
	add(e, t, i, s, o) {
		if (Object(i) === i) return new xa(this, e, t, i);
		const n = e[t];
		switch (typeof n) {
		case "number":
			return new ba(this, e, t, i, s, o);
		case "boolean":
			return new fa(this, e, t);
		case "string":
			return new ka(this, e, t);
		case "function":
			return new or(this, e, t)
		}
		console.error(`gui.add failed
	property:`, t, `
	object:`, e, `
	value:`, n)
	}
	addColor(e, t, i = 1) {
		return new _a(this, e, t, i)
	}
	addFolder(e) {
		const t = new Vr({
			parent: this,
			title: e
		});
		return this.root._closeFolders && t.close(), t
	}
	load(e, t = !0) {
		return e.controllers && this.controllers.forEach(i => {
			i instanceof or || i._name in e.controllers && i.load(e.controllers[i._name])
		}), t && e.folders && this.folders.forEach(i => {
			i._title in e.folders && i.load(e.folders[i._title])
		}), this
	}
	save(e = !0) {
		const t = {
			controllers: {},
			folders: {}
		};
		return this.controllers.forEach(i => {
			if (!(i instanceof or)) {
				if (i._name in t.controllers) throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);
				t.controllers[i._name] = i.save()
			}
		}), e && this.folders.forEach(i => {
			if (i._title in t.folders) throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);
			t.folders[i._title] = i.save()
		}), t
	}
	open(e = !0) {
		return this._setClosed(!e), this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this
	}
	close() {
		return this.open(!1)
	}
	_setClosed(e) {
		this._closed !== e && (this._closed = e, this._callOnOpenClose(this))
	}
	show(e = !0) {
		return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this
	}
	hide() {
		return this.show(!1)
	}
	openAnimated(e = !0) {
		return this._setClosed(!e), this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
			const t = this.$children.clientHeight;
			this.$children.style.height = t + "px", this.domElement.classList.add("transition");
			const i = o => {
				o.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", i))
			};
			this.$children.addEventListener("transitionend", i);
			const s = e ? this.$children.scrollHeight : 0;
			this.domElement.classList.toggle("closed", !e), requestAnimationFrame(() => {
				this.$children.style.height = s + "px"
			})
		}), this
	}
	title(e) {
		return this._title = e, this.$title.textContent = e, this
	}
	reset(e = !0) {
		return (e ? this.controllersRecursive() : this.controllers).forEach(i => i.reset()), this
	}
	onChange(e) {
		return this._onChange = e, this
	}
	_callOnChange(e) {
		this.parent && this.parent._callOnChange(e), this._onChange !== void 0 && this._onChange.call(this, {
			object: e.object,
			property: e.property,
			value: e.getValue(),
			controller: e
		})
	}
	onFinishChange(e) {
		return this._onFinishChange = e, this
	}
	_callOnFinishChange(e) {
		this.parent && this.parent._callOnFinishChange(e), this._onFinishChange !== void 0 && this._onFinishChange.call(this, {
			object: e.object,
			property: e.property,
			value: e.getValue(),
			controller: e
		})
	}
	onOpenClose(e) {
		return this._onOpenClose = e, this
	}
	_callOnOpenClose(e) {
		this.parent && this.parent._callOnOpenClose(e), this._onOpenClose !== void 0 && this._onOpenClose.call(this, e)
	}
	destroy() {
		this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach(e => e.destroy())
	}
	controllersRecursive() {
		let e = Array.from(this.controllers);
		return this.folders.forEach(t => {
			e = e.concat(t.controllersRecursive())
		}), e
	}
	foldersRecursive() {
		let e = Array.from(this.folders);
		return this.folders.forEach(t => {
			e = e.concat(t.foldersRecursive())
		}), e
	}
}
const Gr = (r, e, t) => r * (1 - t) + e * t;
var Ea = `varying float vFacing;

varying vec2 vUv;

void main() {
  vUv = uv;

  vec3 worldNormal = normalize(normalMatrix * normal);
  vec3 viewDir = normalize(-(modelViewMatrix * vec4(position, 1.0)).xyz);
  
  vec3 pos = position;
  
  
  vFacing = dot(worldNormal, viewDir);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,
	Aa = `precision highp float;

uniform sampler2D tMap;
uniform float uAlpha;
uniform float uIsActive;

varying vec2 vUv;
varying float vFacing;

void main() {
  vec4 color = texture2D(tMap, vUv);
  color.a = uAlpha;

  
  float isBack = step(vFacing, 0.0);

  float darken = mix(1.0, 0.25, isBack);
  darken = mix(darken, 1.0, uIsActive);

  color.rgb *= darken;

  
  float brightness = mix(1.0, 1.2, uIsActive);
  color.rgb *= brightness;

  gl_FragColor = color;
}`;

function lo(r, e, t, i) {
	const s = Math.ceil(t / 6),
		o = Math.floor(e / s),
		n = e % s,
		a = Math.ceil(Math.sqrt(s)),
		l = n % a,
		h = Math.floor(n / a),
		f = i * 1.9,
		d = i * 1.25,
		u = (a - 1) / 2,
		c = [{
			x: f,
			y: (h - u) * d,
			z: (l - u) * d,
			rx: 0,
			ry: Math.PI / 2,
			rz: 0
		}, {
			x: -f,
			y: (h - u) * d,
			z: -(l - u) * d,
			rx: 0,
			ry: -Math.PI / 2,
			rz: 0
		}, {
			x: (l - u) * d,
			y: f,
			z: (h - u) * d,
			rx: -Math.PI / 2,
			ry: 0,
			rz: 0
		}, {
			x: (l - u) * d,
			y: -f,
			z: -(h - u) * d,
			rx: Math.PI / 2,
			ry: 0,
			rz: 0
		}, {
			x: (l - u) * d,
			y: (h - u) * d,
			z: f,
			rx: 0,
			ry: 0,
			rz: 0
		}, {
			x: -(l - u) * d,
			y: (h - u) * d,
			z: -f,
			rx: 0,
			ry: Math.PI,
			rz: 0
		}],
		g = c[o] || c[0];
	r.mesh.position.set(g.x, g.y, g.z), r.mesh.rotation.set(g.rx, g.ry, g.rz)
}
let Ca = class {
	constructor({
		geometry: e,
		gl: t,
		index: i,
		item: s,
		length: o,
		renderer: n,
		scene: a,
		screen: l,
		texture: h,
		viewport: f
	}) {
		this.geometry = e, this.gl = t, this.index = i, this.item = s, this.length = o, this.renderer = n, this.scene = a, this.screen = l, this.texture = h, this.viewport = f, this.smoothedVelocity = 0, this.createProgram(), this.createMesh(), this.onResize()
	}
	createProgram() {
		this.material = new ns({
			vertexShader: Ea,
			fragmentShader: Aa,
			uniforms: {
				tMap: {
					value: this.texture
				},
				uAlpha: {
					value: 0
				},
				uVelocity: {
					value: 0
				},
				uTime: {
					value: 0
				},
				uIsActive: {
					value: 0
				},
				uViewportSizes: {
					value: new Ns(this.viewport.width, this.viewport.height)
				}
			},
			transparent: !0,
			side: Hs
		})
	}
	createMesh() {
		this.mesh = new as(this.geometry, this.material), this.item || this.mesh.scale.set(1, 1, 1), this.scene.add(this.mesh)
	}
	show({
		delay: e = 0
	} = {}) {
		const t = k.timeline({
			delay: e,
			defaults: {
				ease: "expo.inOut",
				duration: 1.5
			}
		});
		return t.fromTo(this.material.uniforms.uAlpha, {
			value: 0
		}, {
			value: 1
		}, 0), t
	}
	hide({
		delay: e = 0
	} = {}) {
		k.killTweensOf(this.material.uniforms.uAlpha), k.killTweensOf(this.material.uniforms.uIsActive);
		const t = k.timeline({
			delay: e,
			defaults: Ei
		});
		return t.to(this.material.uniforms.uAlpha, {
			value: 0
		}, 0), t
	}
	setAlpha(e) {
		k.killTweensOf(this.material.uniforms.uAlpha), k.to(this.material.uniforms.uAlpha, {
			value: e,
			duration: .8,
			ease: "power2.out"
		})
	}
	setActive(e) {
		k.killTweensOf(this.material.uniforms.uIsActive), k.to(this.material.uniforms.uIsActive, {
			value: e ? 1 : 0,
			duration: .8,
			ease: "power2.out"
		})
	}
	onResize({
		screen: e,
		viewport: t
	} = {}) {
		e && (this.screen = e), t && (this.viewport = t, this.material.uniforms.uViewportSizes.value.set(t.width, t.height)), this.item ? (this.createBounds(), this.updateScale(), this.updateX(), this.updateY()) : (this.mesh.scale.x = 1, this.mesh.scale.y = 1)
	}
	createBounds() {
		const {
			top: e,
			left: t,
			width: i,
			height: s
		} = this.item.getBoundingClientRect();
		this.bounds = {
			top: e + window.pageYOffset,
			left: t,
			width: i,
			height: s
		}
	}
	updateScale() {
		this.height = this.bounds.height / window.innerHeight, this.width = this.bounds.width / window.innerWidth, this.mesh.scale.x = this.viewport.width * this.width, this.mesh.scale.y = this.viewport.height * this.height
	}
	updateX(e = 0) {
		this.x = (this.bounds.left + e) / window.innerWidth, this.mesh.position.x = -this.viewport.width / 2 + this.mesh.scale.x / 2 + this.x * this.viewport.width
	}
	updateY(e = 0) {
		this.y = (this.bounds.top - e) / window.innerHeight, this.mesh.position.y = this.viewport.height / 2 - this.mesh.scale.y / 2 - this.y * this.viewport.height
	}
	applyGeometry(e, t) {
		e && lo(this, this.index, this.length, t)
	}
	update(e, t) {
		this.applyGeometry(lo, this.mesh.scale.x), this.material.uniforms.uTime.value = t
	}
	destroy() {
		this.video && (this.video.pause(), this.video.src = "", this.video.load()), this.material && this.material.dispose(), this.texture && this.texture.dispose(), this.mesh && this.scene.remove(this.mesh), this.texture = null, this.video = null
	}
};
const La = [{
		id: "fw_1",
		slug: "shaped-by-earth",
		img: {
			url: "/imgs/fw/picture_1.avif",
			title: "Picture 1"
		}
	}, {
		id: "fw_2",
		slug: "studies-in-motion",
		img: {
			url: "/imgs/fw/picture_2.avif",
			title: "Picture 2"
		}
	}, {
		id: "fw_3",
		slug: "ruby-campbell",
		img: {
			url: "/imgs/fw/picture_3.avif",
			title: "Picture 3"
		}
	}, {
		id: "fw_4",
		slug: "issey-miyake-ss25",
		img: {
			url: "/imgs/fw/picture_4.avif",
			title: "Picture 4"
		}
	}, {
		id: "fw_5",
		slug: "shaped-by-earth",
		img: {
			url: "/imgs/fw/picture_5.avif",
			title: "Picture 5"
		}
	}, {
		id: "fw_6",
		slug: "issey-miyake-ss25",
		img: {
			url: "/imgs/fw/picture_6.avif",
			title: "Picture 6"
		}
	}, {
		id: "fw_7",
		slug: "ruby-campbell",
		img: {
			url: "/imgs/fw/picture_7.avif",
			title: "Picture 7"
		}
	}, {
		id: "fw_8",
		slug: "echoes-in-light",
		img: {
			url: "/imgs/fw/picture_8.avif",
			title: "Picture 8"
		}
	}, {
		id: "fw_9",
		slug: "ruby-campbell",
		img: {
			url: "/imgs/fw/picture_9.avif",
			title: "Picture 9"
		}
	}, {
		id: "fw_10",
		slug: "ruby-campbell",
		img: {
			url: "/imgs/fw/picture_10.avif",
			title: "Picture 10"
		}
	}, {
		id: "fw_11",
		slug: "studies-in-motion",
		img: {
			url: "/imgs/fw/picture_11.avif",
			title: "Picture 11"
		}
	}, {
		id: "fw_12",
		slug: "issey-miyake-ss25",
		img: {
			url: "/imgs/fw/picture_12.avif",
			title: "Picture 12"
		}
	}, {
		id: "fw_13",
		slug: "shaped-by-earth",
		img: {
			url: "/imgs/fw/picture_13.avif",
			title: "Picture 13"
		}
	}, {
		id: "fw_14",
		slug: "moving-portraits",
		img: {
			url: "/imgs/fw/picture_14.avif",
			title: "Picture 14"
		}
	}, {
		id: "fw_15",
		slug: "shaped-by-earth",
		img: {
			url: "/imgs/fw/picture_15.avif",
			title: "Picture 15"
		}
	}, {
		id: "fw_16",
		slug: "issey-miyake-ss25",
		img: {
			url: "/imgs/fw/picture_16.avif",
			title: "Picture 16"
		}
	}, {
		id: "fw_17",
		slug: "ruby-campbell",
		img: {
			url: "/imgs/fw/picture_17.avif",
			title: "Picture 17"
		}
	}, {
		id: "fw_18",
		slug: "studies-in-motion",
		img: {
			url: "/imgs/fw/picture_18.avif",
			title: "Picture 18"
		}
	}, {
		id: "fw_19",
		slug: "issey-miyake-ss25",
		img: {
			url: "/imgs/fw/picture_19.avif",
			title: "Picture 19"
		}
	}, {
		id: "fw_20",
		slug: "shaped-by-earth",
		img: {
			url: "/imgs/fw/picture_20.avif",
			title: "Picture 20"
		}
	}, {
		id: "fw_21",
		slug: "echoes-in-light",
		img: {
			url: "/imgs/fw/picture_21.avif",
			title: "Picture 21"
		}
	}, {
		id: "fw_22",
		slug: "ruby-campbell",
		img: {
			url: "/imgs/fw/picture_22.avif",
			title: "Picture 22"
		}
	}, {
		id: "fw_23",
		slug: "studies-in-motion",
		img: {
			url: "/imgs/fw/picture_23.avif",
			title: "Picture 23"
		}
	}, {
		id: "fw_24",
		slug: "ruby-campbell",
		img: {
			url: "/imgs/fw/picture_24.avif",
			title: "Picture 24"
		}
	}, {
		id: "fw_25",
		slug: "issey-miyake-ss25",
		img: {
			url: "/imgs/fw/picture_25.avif",
			title: "Picture 25"
		}
	}, {
		id: "fw_26",
		slug: "moving-portraits",
		img: {
			url: "/imgs/fw/picture_26.avif",
			title: "Picture 26"
		}
	}, {
		id: "fw_27",
		slug: "motion-in-motion",
		img: {
			url: "/imgs/fw/picture_27.avif",
			title: "Picture 27"
		}
	}, {
		id: "fw_28",
		slug: "ruby-campbell",
		img: {
			url: "/imgs/fw/picture_28.avif",
			title: "Picture 28"
		}
	}, {
		id: "fw_29",
		slug: "echoes-in-light",
		img: {
			url: "/imgs/fw/picture_29.avif",
			title: "Picture 29"
		}
	}, {
		id: "fw_30",
		slug: "moving-portraits",
		img: {
			url: "/imgs/fw/picture_30.avif",
			title: "Picture 30"
		}
	}, {
		id: "fw_31",
		slug: "issey-miyake-ss25",
		img: {
			url: "/imgs/fw/picture_31.avif",
			title: "Picture 31"
		}
	}, {
		id: "fw_32",
		slug: "moving-portraits",
		img: {
			url: "/imgs/fw/picture_32.avif",
			title: "Picture 32"
		}
	}, {
		id: "fw_33",
		slug: "shaped-by-earth",
		img: {
			url: "/imgs/fw/picture_33.avif",
			title: "Picture 33"
		}
	}, {
		id: "fw_34",
		slug: "moving-portraits",
		img: {
			url: "/imgs/fw/picture_34.avif",
			title: "Picture 34"
		}
	}, {
		id: "fw_35",
		slug: "issey-miyake-ss25",
		img: {
			url: "/imgs/fw/picture_35.avif",
			title: "Picture 35"
		}
	}, {
		id: "fw_36",
		slug: "studies-in-motion",
		img: {
			url: "/imgs/fw/picture_36.avif",
			title: "Picture 36"
		}
	}, {
		id: "fw_37",
		slug: "shaped-by-earth",
		img: {
			url: "/imgs/fw/picture_37.avif",
			title: "Picture 37"
		}
	}, {
		id: "fw_38",
		slug: "moving-portraits",
		img: {
			url: "/imgs/fw/picture_38.avif",
			title: "Picture 38"
		}
	}, {
		id: "fw_39",
		slug: "echoes-in-light",
		img: {
			url: "/imgs/fw/picture_39.avif",
			title: "Picture 39"
		}
	}, {
		id: "fw_40",
		slug: "studies-in-motion",
		img: {
			url: "/imgs/fw/picture_40.avif",
			title: "Picture 40"
		}
	}, {
		id: "fw_41",
		slug: "ruby-campbell",
		img: {
			url: "/imgs/fw/picture_41.avif",
			title: "Picture 41"
		}
	}, {
		id: "fw_42",
		slug: "moving-portraits",
		img: {
			url: "/imgs/fw/picture_42.avif",
			title: "Picture 42"
		}
	}, {
		id: "fw_43",
		slug: "echoes-in-light",
		img: {
			url: "/imgs/fw/picture_43.avif",
			title: "Picture 43"
		}
	}, {
		id: "fw_44",
		slug: "shaped-by-earth",
		img: {
			url: "/imgs/fw/picture_44.avif",
			title: "Picture 44"
		}
	}, {
		id: "fw_45",
		slug: "issey-miyake-ss25",
		img: {
			url: "/imgs/fw/picture_45.avif",
			title: "Picture 45"
		}
	}, {
		id: "fw_46",
		slug: "ruby-campbell",
		img: {
			url: "/imgs/fw/picture_46.avif",
			title: "Picture 46"
		}
	}, {
		id: "fw_47",
		slug: "echoes-in-light",
		img: {
			url: "/imgs/fw/picture_47.avif",
			title: "Picture 47"
		}
	}, {
		id: "fw_48",
		slug: "studies-in-motion",
		img: {
			url: "/imgs/fw/picture_48.avif",
			title: "Picture 48"
		}
	}, {
		id: "fw_49",
		slug: "echoes-in-light",
		img: {
			url: "/imgs/fw/picture_49.avif",
			title: "Picture 49"
		}
	}, {
		id: "fw_50",
		slug: "moving-portraits",
		img: {
			url: "/imgs/fw/picture_50.avif",
			title: "Picture 50"
		}
	}, {
		id: "fw_51",
		slug: "shaped-by-earth",
		img: {
			url: "/imgs/fw/picture_51.avif",
			title: "Picture 51"
		}
	}, {
		id: "fw_52",
		slug: "moving-portraits",
		img: {
			url: "/imgs/fw/picture_52.avif",
			title: "Picture 52"
		}
	}, {
		id: "fw_53",
		slug: "shaped-by-earth",
		img: {
			url: "/imgs/fw/picture_53.avif",
			title: "Picture 53"
		}
	}, {
		id: "fw_54",
		slug: "studies-in-motion",
		img: {
			url: "/imgs/fw/picture_54.avif",
			title: "Picture 54"
		}
	}],
	Ii = {
		fw_items: La
	},
	Ta = [{
		slug: "moving-portraits",
		title: "Moving Portraits",
		description: 'A series of animated portraits exploring subtle motion and visual rhythm, featuring photography by <a href="https://www.davidurbanke.com" target="_blank" rel="noopener noreferrer">David Urbanke</a>.',
		focus: "WebGL · Motion · Interaction",
		year: "2024",
		medias: [{
			id: "moving-portraits_1",
			type: "video",
			url: "/imgs/work/moving-portraits/moving-portraits_1.webm",
			poster: "/imgs/work/moving-portraits/posters/moving-portraits_1_poster.avif",
			title: "Moving Portrait 1"
		}, {
			id: "moving-portraits_2",
			type: "image",
			url: "/imgs/work/moving-portraits/moving-portraits_2.avif",
			title: "Moving Portrait 2"
		}, {
			id: "moving-portraits_3",
			type: "video",
			url: "/imgs/work/moving-portraits/moving-portraits_3.webm",
			poster: "/imgs/work/moving-portraits/posters/moving-portraits_3_poster.avif",
			title: "Moving Portrait 3"
		}, {
			id: "moving-portraits_4",
			type: "image",
			url: "/imgs/work/moving-portraits/moving-portraits_4.avif",
			title: "Moving Portrait 4"
		}, {
			id: "moving-portraits_5",
			type: "video",
			url: "/imgs/work/moving-portraits/moving-portraits_5.webm",
			poster: "/imgs/work/moving-portraits/posters/moving-portraits_5_poster.avif",
			title: "Moving Portrait 5"
		}, {
			id: "moving-portraits_6",
			type: "image",
			url: "/imgs/work/moving-portraits/moving-portraits_6.avif",
			title: "Moving Portrait 6"
		}, {
			id: "moving-portraits_7",
			type: "video",
			url: "/imgs/work/moving-portraits/moving-portraits_7.webm",
			poster: "/imgs/work/moving-portraits/posters/moving-portraits_7_poster.avif",
			title: "Moving Portrait 7"
		}],
		next_work: {
			slug: "issey-miyake-ss25",
			title: "Issey Miyake SS25"
		}
	}, {
		slug: "issey-miyake-ss25",
		title: "Issey Miyake SS25",
		description: "A minimalist WebGL experience inspired by Issey Miyake SS25, where technology and sculptural silhouettes meet in motion.",
		focus: "WebGL · Motion · Interaction",
		year: "2025",
		medias: [{
			id: "issey-miyake-ss25_1",
			type: "video",
			url: "/imgs/work/issey-miyake-ss25/issey-miyake-ss25_1.webm",
			poster: "/imgs/work/issey-miyake-ss25/posters/issey-miyake-ss25_1_poster.avif",
			title: "Issey Miyake SS25 1"
		}, {
			id: "issey-miyake-ss25_2",
			type: "image",
			url: "/imgs/work/issey-miyake-ss25/issey-miyake-ss25_2.avif",
			title: "Issey Miyake SS25 2"
		}, {
			id: "issey-miyake-ss25_3",
			type: "video",
			url: "/imgs/work/issey-miyake-ss25/issey-miyake-ss25_3.webm",
			poster: "/imgs/work/issey-miyake-ss25/posters/issey-miyake-ss25_3_poster.avif",
			title: "Issey Miyake SS25 3"
		}, {
			id: "issey-miyake-ss25_4",
			type: "image",
			url: "/imgs/work/issey-miyake-ss25/issey-miyake-ss25_4.avif",
			title: "Issey Miyake SS25 4"
		}, {
			id: "issey-miyake-ss25_5",
			type: "video",
			url: "/imgs/work/issey-miyake-ss25/issey-miyake-ss25_5.webm",
			poster: "/imgs/work/issey-miyake-ss25/posters/issey-miyake-ss25_5_poster.avif",
			title: "Video 5"
		}],
		next_work: {
			slug: "studies-in-motion",
			title: "Studies in Motion"
		}
	}, {
		slug: "studies-in-motion",
		title: "Studies in Motion",
		description: "WebGL motion studies where geometry evolves through parametric paths and rhythmic movement.",
		focus: "WebGL · Motion",
		year: "2025",
		medias: [{
			id: "studies-in-motion_1",
			type: "video",
			url: "/imgs/work/studies-in-motion/studies-in-motion_1.webm",
			poster: "/imgs/work/studies-in-motion/posters/studies-in-motion_1_poster.avif",
			title: "Studies in Motion 1"
		}, {
			id: "studies-in-motion_2",
			type: "image",
			url: "/imgs/work/studies-in-motion/studies-in-motion_2.avif",
			title: "Studies in Motion 2"
		}, {
			id: "studies-in-motion_3",
			type: "video",
			url: "/imgs/work/studies-in-motion/studies-in-motion_3.webm",
			poster: "/imgs/work/studies-in-motion/posters/studies-in-motion_3_poster.avif",
			title: "Studies in Motion 3"
		}, {
			id: "studies-in-motion_4",
			type: "video",
			url: "/imgs/work/studies-in-motion/studies-in-motion_4.webm",
			poster: "/imgs/work/studies-in-motion/posters/studies-in-motion_4_poster.avif",
			title: "Studies in Motion 4"
		}, {
			id: "studies-in-motion_5",
			type: "video",
			url: "/imgs/work/studies-in-motion/studies-in-motion_5.webm",
			poster: "/imgs/work/studies-in-motion/posters/studies-in-motion_5_poster.avif",
			title: "Studies in Motion 5"
		}, {
			id: "studies-in-motion_6",
			type: "video",
			url: "/imgs/work/studies-in-motion/studies-in-motion_6.webm",
			poster: "/imgs/work/studies-in-motion/posters/studies-in-motion_6_poster.avif",
			title: "Studies in Motion 6"
		}, {
			id: "studies-in-motion_7",
			type: "video",
			url: "/imgs/work/studies-in-motion/studies-in-motion_7.webm",
			poster: "/imgs/work/studies-in-motion/posters/studies-in-motion_7_poster.avif",
			title: "Studies in Motion 7"
		}, {
			id: "studies-in-motion_8",
			type: "video",
			url: "/imgs/work/studies-in-motion/studies-in-motion_8.webm",
			poster: "/imgs/work/studies-in-motion/posters/studies-in-motion_8_poster.avif",
			title: "Studies in Motion 8"
		}, {
			id: "studies-in-motion_9",
			type: "video",
			url: "/imgs/work/studies-in-motion/studies-in-motion_9.webm",
			poster: "/imgs/work/studies-in-motion/posters/studies-in-motion_9_poster.avif",
			title: "Studies in Motion 9"
		}, {
			id: "studies-in-motion_10",
			type: "video",
			url: "/imgs/work/studies-in-motion/studies-in-motion_10.webm",
			poster: "/imgs/work/studies-in-motion/posters/studies-in-motion_10_poster.avif",
			title: "Studies in Motion 10"
		}],
		next_work: {
			slug: "ruby-campbell",
			title: "Ruby Campbell"
		}
	}, {
		slug: "ruby-campbell",
		title: "Ruby Campbell",
		description: "A minimalist interactive lookbook featuring Ruby Campbell, enhanced by subtle WebGL deformations and scroll-driven motion.",
		focus: "WebGL · Motion · Interaction",
		year: "2025",
		medias: [{
			id: "ruby-campbell_1",
			type: "video",
			url: "/imgs/work/ruby-campbell/ruby-campbell_1.webm",
			poster: "/imgs/work/ruby-campbell/posters/ruby-campbell_1_poster.avif",
			title: "Ruby Campbell 1"
		}, {
			id: "ruby-campbell_2",
			type: "image",
			url: "/imgs/work/ruby-campbell/ruby-campbell_2.avif",
			title: "Ruby Campbell 2"
		}, {
			id: "ruby-campbell_3",
			type: "video",
			url: "/imgs/work/ruby-campbell/ruby-campbell_3.webm",
			poster: "/imgs/work/ruby-campbell/posters/ruby-campbell_3_poster.avif",
			title: "Ruby Campbell 3"
		}, {
			id: "ruby-campbell_4",
			type: "image",
			url: "/imgs/work/ruby-campbell/ruby-campbell_4.avif",
			title: "Ruby Campbell 4"
		}, {
			id: "ruby-campbell_5",
			type: "image",
			url: "/imgs/work/ruby-campbell/ruby-campbell_5.avif",
			title: "Ruby Campbell 5"
		}],
		next_work: {
			slug: "shaped-by-earth",
			title: "Shaped by Earth"
		}
	}, {
		slug: "shaped-by-earth",
		title: "Shaped by Earth",
		description: 'A horizontal interactive gallery translating handcrafted ceramics into fluid digital forms, shaped by motion and subtle WebGL distortion, with images of <a href="https://www.behance.net/gallery/225366471/earthen-pialas" target="_blank" rel="noopener noreferrer">Yevhenii Avramenko’s Earthen Pialas</a>.',
		focus: "WebGL · Motion · Interaction",
		year: "2025",
		medias: [{
			id: "shaped-by-earth_1",
			type: "image",
			url: "/imgs/work/shaped-by-earth/shaped-by-earth_1.avif",
			title: "Shaped by Earth 1"
		}, {
			id: "shaped-by-earth_2",
			type: "image",
			url: "/imgs/work/shaped-by-earth/shaped-by-earth_2.avif",
			title: "Shaped by Earth 2"
		}, {
			id: "shaped-by-earth_3",
			type: "video",
			url: "/imgs/work/shaped-by-earth/shaped-by-earth_3.webm",
			poster: "/imgs/work/shaped-by-earth/posters/shaped-by-earth_3_poster.avif",
			title: "Shaped by Earth 3"
		}, {
			id: "shaped-by-earth_4",
			type: "image",
			url: "/imgs/work/shaped-by-earth/shaped-by-earth_4.avif",
			title: "Shaped by Earth 4"
		}, {
			id: "shaped-by-earth_5",
			type: "image",
			url: "/imgs/work/shaped-by-earth/shaped-by-earth_5.avif",
			title: "Shaped by Earth 5"
		}],
		next_work: {
			slug: "echoes-in-light",
			title: "Echoes in Light"
		}
	}, {
		slug: "echoes-in-light",
		title: "Echoes in Light",
		description: 'In close collaboration with <a href="https://www.auroradefiori.com" target="_blank" rel="noopener noreferrer">Aurora Defiori</a>, this series explores how distortion, scroll interaction, and light can transform abstract archival imagery into living, evolving compositions.',
		focus: "WebGL · Motion · Interaction",
		year: "2026",
		medias: [{
			id: "echoes-in-light_1",
			type: "video",
			url: "/imgs/work/echoes-in-light/echoes-in-light_1.webm",
			poster: "/imgs/work/echoes-in-light/posters/echoes-in-light_1_poster.avif",
			title: "Echoes in Light 1"
		}, {
			id: "echoes-in-light_2",
			type: "image",
			url: "/imgs/work/echoes-in-light/echoes-in-light_2.avif",
			title: "Echoes in Light 2"
		}, {
			id: "echoes-in-light_3",
			type: "video",
			url: "/imgs/work/echoes-in-light/echoes-in-light_3.webm",
			poster: "/imgs/work/echoes-in-light/posters/echoes-in-light_3_poster.avif",
			title: "Echoes in Light 3"
		}, {
			id: "echoes-in-light_4",
			type: "video",
			url: "/imgs/work/echoes-in-light/echoes-in-light_4.webm",
			poster: "/imgs/work/echoes-in-light/posters/echoes-in-light_4_poster.avif",
			title: "Echoes in Light 4"
		}, {
			id: "echoes-in-light_5",
			type: "image",
			url: "/imgs/work/echoes-in-light/echoes-in-light_5.avif",
			title: "Echoes in Light 5"
		}, {
			id: "echoes-in-light_6",
			type: "video",
			url: "/imgs/work/echoes-in-light/echoes-in-light_6.webm",
			poster: "/imgs/work/echoes-in-light/posters/echoes-in-light_6_poster.avif",
			title: "Echoes in Light 6"
		}],
		next_work: {
			slug: "moving-portraits",
			title: "Moving Portraits"
		}
	}],
	ho = {
		works: Ta
	};
class Pa {
	constructor({
		gl: e,
		renderer: t,
		scene: i,
		screen: s,
		viewport: o,
		geometryFunction: n
	}) {
		this.gl = e, this.renderer = t, this.scene = i, this.screen = s, this.viewport = o, this.geometryFunction = n, this.parentGroup = new es, this.group = new es, this.parentGroup.add(this.group), this.rotationSpeedX = .06, this.rotationSpeedY = .18, this.rotationSpeedZ = .02, this.entranceRotationScale = 15, this.timeScale = 5, this.lastElapsedTime = 0, this.groupScale = .45, this.isAnimationFinished = !1, this.medias = [], this.texturesLoaded = 0, this.totalTextures = Ii?.fw_items?.length || 0, this.createGeometry(), this.createMediasFromCache(), this.scene.add(this.parentGroup)
	}
	createGeometry() {
		this.geometry = new qs(1, 1, 1, 1)
	}
	createMediasFromCache() {
		!Ii || !Ii.fw_items || Ii.fw_items.forEach((e, t) => {
			const i = window.GL_TEXTURES?.find(s => s.id === e.id);
			i ? this.createMedia(e, i, t) : console.warn(`[IndexGallery] Texture not found: ${e.id}`)
		})
	}
	createMedia(e, t, i) {
		const s = new Ca({
			geometry: this.geometry,
			gl: this.gl,
			index: i,
			item: document.querySelector(".fw__placeholder"),
			length: Ii.fw_items.length,
			renderer: this.renderer,
			scene: this.group,
			screen: this.screen,
			texture: t.texture,
			viewport: this.viewport
		});
		if (this.geometryFunction) {
			const o = Math.max(s.mesh.scale.x, s.mesh.scale.y);
			s.applyGeometry(this.geometryFunction, o)
		}
		s.slug = e.slug, this.medias.push(s), s.show({
			delay: .25 + .15
		}), this.texturesLoaded++
	}
	delay(e) {
		return new Promise(t => setTimeout(t, e))
	}
	onMouseEnter(e) {
		this.transitionToHide || (this.medias?.forEach(t => {
			const i = t.slug === e;
			t.setAlpha(i ? 1 : .1), t.setActive(i)
		}), this.timeScale = .25, k.to(this.parentGroup.scale, {
			x: .55,
			y: .55,
			z: .55,
			duration: 1,
			ease: "expo.out"
		}))
	}
	onMouseLeave(e) {
		this.transitionToHide || (e?.preventDefault(), this.medias?.forEach(t => {
			t.setAlpha(1), t.setActive(!1)
		}), this.timeScale = 5, k.to(this.parentGroup.scale, {
			x: this.groupScale,
			y: this.groupScale,
			z: this.groupScale,
			duration: 1,
			ease: "expo.out"
		}))
	}
	show() {
		this.group.rotation.x = 0, this.group.rotation.y = 0;
		const e = k.timeline({
			defaults: {
				ease: "expo.inOut",
				duration: 2.5
			}
		});
		return e.fromTo(this.parentGroup.scale, {
			x: 0,
			y: 0,
			z: 0
		}, {
			x: this.groupScale,
			y: this.groupScale,
			z: this.groupScale
		}, 0), e.fromTo(this.parentGroup.rotation, {
			x: -Math.PI * .2,
			y: -Math.PI * 1.85
		}, {
			x: 0,
			y: 0
		}, 0), e.timeScale(.85), e
	}
	hide() {
		this.transitionToHide = !0;
		const e = k.timeline({
			defaults: {
				ease: "power3.out",
				duration: .5
			}
		});
		return this.medias?.forEach(t => {
			t.hide({
				delay: 0
			}, 0)
		}), e
	}
	createGUI() {
		this.gui = new Vr, this.params = {
			rotationX: 0,
			rotationY: Math.PI * .25,
			rotationZ: 0,
			animateX: !1,
			animateXSpeed: 1,
			animateY: !1,
			animateYSpeed: 1,
			animateZ: !1,
			animateZSpeed: 1,
			animationSpeed: 1,
			scale: .5
		};
		const e = this.gui.addFolder("Rotation");
		e.add(this.params, "rotationX", -Math.PI, Math.PI, .01).name("Rotation X"), e.add(this.params, "rotationY", -Math.PI, Math.PI, .01).name("Rotation Y"), e.add(this.params, "rotationZ", -Math.PI, Math.PI, .01).name("Rotation Z"), e.open();
		const t = this.gui.addFolder("Scale");
		t.add(this.params, "scale", 0, 1, .01).name("Scale"), t.open();
		const i = this.gui.addFolder("Animation");
		i.add(this.params, "animateX").name("Animer X"), i.add(this.params, "animateXSpeed", 0, 10, .1).name("Vitesse X"), i.add(this.params, "animateY").name("Animer Y"), i.add(this.params, "animateYSpeed", 0, 10, .1).name("Vitesse Y"), i.add(this.params, "animateZ").name("Animer Z"), i.add(this.params, "animateZSpeed", 0, 10, .1).name("Vitesse Z"), i.add(this.params, "animationSpeed", 0, 10, .1).name("Vitesse"), i.open()
	}
	onResize({
		screen: e,
		viewport: t
	} = {}) {
		this.screen = e, this.viewport = t, this.medias?.forEach(i => {
			i.onResize({
				screen: e,
				viewport: t
			})
		})
	}
	update(e, t) {
		this.medias?.forEach(n => n.update());
		const i = t - this.lastElapsedTime;
		if (this.lastElapsedTime = t, i > .2) return;
		const o = this.timeScale;
		this.group.rotation.x += i * this.rotationSpeedX * o, this.group.rotation.y += i * this.rotationSpeedY * o, this.group.rotation.z += i * this.rotationSpeedZ * o
	}
	destroy() {
		this.isDestroyed = !0, this.medias?.forEach(e => {
			this.group.remove(e.mesh), e?.destroy()
		}), this.scene.remove(this.parentGroup), this.geometry?.dispose()
	}
}
const Da = [{
		id: "fw_1",
		url: "/imgs/fw/picture_1.avif"
	}, {
		id: "fw_2",
		url: "/imgs/fw/picture_2.avif"
	}, {
		id: "fw_3",
		url: "/imgs/fw/picture_3.avif"
	}, {
		id: "fw_4",
		url: "/imgs/fw/picture_4.avif"
	}, {
		id: "fw_5",
		url: "/imgs/fw/picture_5.avif"
	}, {
		id: "fw_6",
		url: "/imgs/fw/picture_6.avif"
	}, {
		id: "fw_7",
		url: "/imgs/fw/picture_7.avif"
	}, {
		id: "fw_8",
		url: "/imgs/fw/picture_8.avif"
	}, {
		id: "fw_9",
		url: "/imgs/fw/picture_9.avif"
	}, {
		id: "fw_10",
		url: "/imgs/fw/picture_10.avif"
	}, {
		id: "fw_11",
		url: "/imgs/fw/picture_11.avif"
	}, {
		id: "fw_12",
		url: "/imgs/fw/picture_12.avif"
	}, {
		id: "fw_13",
		url: "/imgs/fw/picture_13.avif"
	}, {
		id: "fw_14",
		url: "/imgs/fw/picture_14.avif"
	}, {
		id: "fw_15",
		url: "/imgs/fw/picture_15.avif"
	}, {
		id: "fw_16",
		url: "/imgs/fw/picture_16.avif"
	}, {
		id: "fw_17",
		url: "/imgs/fw/picture_17.avif"
	}, {
		id: "fw_18",
		url: "/imgs/fw/picture_18.avif"
	}, {
		id: "fw_19",
		url: "/imgs/fw/picture_19.avif"
	}, {
		id: "fw_20",
		url: "/imgs/fw/picture_20.avif"
	}, {
		id: "fw_21",
		url: "/imgs/fw/picture_21.avif"
	}, {
		id: "fw_22",
		url: "/imgs/fw/picture_22.avif"
	}, {
		id: "fw_23",
		url: "/imgs/fw/picture_23.avif"
	}, {
		id: "fw_24",
		url: "/imgs/fw/picture_24.avif"
	}, {
		id: "fw_25",
		url: "/imgs/fw/picture_25.avif"
	}, {
		id: "fw_26",
		url: "/imgs/fw/picture_26.avif"
	}, {
		id: "fw_27",
		url: "/imgs/fw/picture_27.avif"
	}, {
		id: "fw_28",
		url: "/imgs/fw/picture_28.avif"
	}, {
		id: "fw_29",
		url: "/imgs/fw/picture_29.avif"
	}, {
		id: "fw_30",
		url: "/imgs/fw/picture_30.avif"
	}, {
		id: "fw_31",
		url: "/imgs/fw/picture_31.avif"
	}, {
		id: "fw_32",
		url: "/imgs/fw/picture_32.avif"
	}, {
		id: "fw_33",
		url: "/imgs/fw/picture_33.avif"
	}, {
		id: "fw_34",
		url: "/imgs/fw/picture_34.avif"
	}, {
		id: "fw_35",
		url: "/imgs/fw/picture_35.avif"
	}, {
		id: "fw_36",
		url: "/imgs/fw/picture_36.avif"
	}, {
		id: "fw_37",
		url: "/imgs/fw/picture_37.avif"
	}, {
		id: "fw_38",
		url: "/imgs/fw/picture_38.avif"
	}, {
		id: "fw_39",
		url: "/imgs/fw/picture_39.avif"
	}, {
		id: "fw_40",
		url: "/imgs/fw/picture_40.avif"
	}, {
		id: "fw_41",
		url: "/imgs/fw/picture_41.avif"
	}, {
		id: "fw_42",
		url: "/imgs/fw/picture_42.avif"
	}, {
		id: "fw_43",
		url: "/imgs/fw/picture_43.avif"
	}, {
		id: "fw_44",
		url: "/imgs/fw/picture_44.avif"
	}, {
		id: "fw_45",
		url: "/imgs/fw/picture_45.avif"
	}, {
		id: "fw_46",
		url: "/imgs/fw/picture_46.avif"
	}, {
		id: "fw_47",
		url: "/imgs/fw/picture_47.avif"
	}, {
		id: "fw_48",
		url: "/imgs/fw/picture_48.avif"
	}, {
		id: "fw_49",
		url: "/imgs/fw/picture_49.avif"
	}, {
		id: "fw_50",
		url: "/imgs/fw/picture_50.avif"
	}, {
		id: "fw_51",
		url: "/imgs/fw/picture_51.avif"
	}, {
		id: "fw_52",
		url: "/imgs/fw/picture_52.avif"
	}, {
		id: "fw_53",
		url: "/imgs/fw/picture_53.avif"
	}, {
		id: "fw_54",
		url: "/imgs/fw/picture_54.avif"
	}],
	Ia = [{
		id: "ISB_104",
		url: "/imgs/archive/unfolding-grace.webm",
		placeholder: "/imgs/archive/posters/unfolding-grace_poster.avif"
	}, {
		id: "ISB_128",
		url: "/imgs/archive/the-shape-of-flow.webm",
		placeholder: "/imgs/archive/posters/the-shape-of-flow_poster.avif"
	}, {
		id: "ISB_142",
		url: "/imgs/archive/endless-in-color.webm",
		placeholder: "/imgs/archive/posters/endless-in-color_poster.avif"
	}, {
		id: "ISB_157",
		url: "/imgs/archive/tg-7th-flow-of-sound.webm",
		placeholder: "/imgs/archive/posters/tg-7th-flow-of-sound_poster.avif"
	}, {
		id: "ISB_163",
		url: "/imgs/archive/adut-akech-for-vogue-us.webm",
		placeholder: "/imgs/archive/posters/adut-akech-for-vogue-us_poster.avif"
	}, {
		id: "ISB_174",
		url: "/imgs/archive/transforming-spaces.webm",
		placeholder: "/imgs/archive/posters/transforming-spaces_poster.avif"
	}, {
		id: "ISB_189",
		url: "/imgs/archive/sixfold-portraits.webm",
		placeholder: "/imgs/archive/posters/sixfold-portraits_poster.avif"
	}, {
		id: "ISB_193",
		url: "/imgs/archive/about-blank-twist-of-sight.webm",
		placeholder: "/imgs/archive/posters/about-blank-twist-of-sight_poster.avif"
	}, {
		id: "ISB_205",
		url: "/imgs/archive/arket-a-chain-of-fashion.webm",
		placeholder: "/imgs/archive/posters/arket-a-chain-of-fashion_poster.avif"
	}, {
		id: "ISB_217",
		url: "/imgs/archive/about-blank-distorted-looks.webm",
		placeholder: "/imgs/archive/posters/about-blank-distorted-looks_poster.avif"
	}, {
		id: "ISB_224",
		url: "/imgs/archive/vogue-china-waves-of-fashion.webm",
		placeholder: "/imgs/archive/posters/vogue-china-waves-of-fashion_poster.avif"
	}, {
		id: "ISB_238",
		url: "/imgs/archive/mls-curated-collection.webm",
		placeholder: "/imgs/archive/posters/mls-curated-collection_poster.avif"
	}, {
		id: "ISB_249",
		url: "/imgs/archive/curved-perspectives.webm",
		placeholder: "/imgs/archive/posters/curved-perspectives_poster.avif"
	}, {
		id: "ISB_256",
		url: "/imgs/archive/ysl-fw25-flowing-looks.webm",
		placeholder: "/imgs/archive/posters/ysl-fw25-flowing-looks_poster.avif"
	}, {
		id: "ISB_263",
		url: "/imgs/archive/spinning-triptych.webm",
		placeholder: "/imgs/archive/posters/spinning-triptych_poster.avif"
	}, {
		id: "ISB_275",
		url: "/imgs/archive/gucci-pf25-a-moving-lookbook.webm",
		placeholder: "/imgs/archive/posters/gucci-pf25-a-moving-lookbook_poster.avif"
	}, {
		id: "ISB_284",
		url: "/imgs/archive/jellyfish-in-motion.webm",
		placeholder: "/imgs/archive/posters/jellyfish-in-motion_poster.avif"
	}, {
		id: "ISB_296",
		url: "/imgs/archive/the-cylindrical-edit.webm",
		placeholder: "/imgs/archive/posters/the-cylindrical-edit_poster.avif"
	}, {
		id: "ISB_302",
		url: "/imgs/archive/flow-of-portraits.webm",
		placeholder: "/imgs/archive/posters/flow-of-portraits_poster.avif"
	}, {
		id: "ISB_314",
		url: "/imgs/archive/endless-ribbon.webm",
		placeholder: "/imgs/archive/posters/endless-ribbon_poster.avif"
	}, {
		id: "ISB_327",
		url: "/imgs/archive/twisted-portraits.webm",
		placeholder: "/imgs/archive/posters/twisted-portraits_poster.avif"
	}, {
		id: "ISB_339",
		url: "/imgs/archive/spiral-of-sight.webm",
		placeholder: "/imgs/archive/posters/spiral-of-sight_poster.avif"
	}, {
		id: "ISB_348",
		url: "/imgs/archive/wraped-image-stack.webm",
		placeholder: "/imgs/archive/posters/wraped-image-stack_poster.avif"
	}, {
		id: "ISB_352",
		url: "/imgs/archive/through-the-frames.webm",
		placeholder: "/imgs/archive/posters/through-the-frames_poster.avif"
	}, {
		id: "ISB_367",
		url: "/imgs/archive/in-refraction.webm",
		placeholder: "/imgs/archive/posters/in-refraction_poster.avif"
	}, {
		id: "ISB_389",
		url: "/imgs/archive/poster-series-issue-no01.webm",
		placeholder: "/imgs/archive/posters/poster-series-issue-no01_poster.avif"
	}, {
		id: "ISB_392",
		url: "/imgs/archive/poster-series-issue-no02.webm",
		placeholder: "/imgs/archive/posters/poster-series-issue-no02_poster.avif"
	}, {
		id: "ISB_407",
		url: "/imgs/archive/poster-series-issue-no03.webm",
		placeholder: "/imgs/archive/posters/poster-series-issue-no03_poster.avif"
	}, {
		id: "ISB_418",
		url: "/imgs/archive/poster-series-issue-no04.webm",
		placeholder: "/imgs/archive/posters/poster-series-issue-no04_poster.avif"
	}, {
		id: "ISB_429",
		url: "/imgs/archive/poster-series-issue-no05.webm",
		placeholder: "/imgs/archive/posters/poster-series-issue-no05_poster.avif"
	}, {
		id: "ISB_436",
		url: "/imgs/archive/poster-series-issue-no06.webm",
		placeholder: "/imgs/archive/posters/poster-series-issue-no06_poster.avif"
	}, {
		id: "ISB_447",
		url: "/imgs/archive/poster-series-issue-no07.webm",
		placeholder: "/imgs/archive/posters/poster-series-issue-no07_poster.avif"
	}, {
		id: "ISB_452",
		url: "/imgs/archive/poster-series-issue-no08.webm",
		placeholder: "/imgs/archive/posters/poster-series-issue-no08_poster.avif"
	}, {
		id: "ISB_468",
		url: "/imgs/archive/poster-series-issue-no09.webm",
		placeholder: "/imgs/archive/posters/poster-series-issue-no09_poster.avif"
	}, {
		id: "ISB_479",
		url: "/imgs/archive/poster-series-issue-no10.webm",
		placeholder: "/imgs/archive/posters/poster-series-issue-no10_poster.avif"
	}, {
		id: "ISB_483",
		url: "/imgs/archive/whispers-of-a-geisha.webm",
		placeholder: "/imgs/archive/posters/whispers-of-a-geisha_poster.avif"
	}, {
		id: "ISB_495",
		url: "/imgs/archive/echoes-of-koons.webm",
		placeholder: "/imgs/archive/posters/echoes-of-koons_poster.avif"
	}, {
		id: "ISB_502",
		url: "/imgs/archive/temporary-website.webm",
		placeholder: "/imgs/archive/posters/temporary-website_poster.avif"
	}, {
		id: "ISB_517",
		url: "/imgs/archive/portfolio-no01.webm",
		placeholder: "/imgs/archive/posters/portfolio-no01_poster.avif"
	}],
	Oa = {
		"moving-portraits": [{
			id: "moving-portraits_1",
			url: "/imgs/work/moving-portraits/moving-portraits_1.webm",
			placeholder: "/imgs/work/moving-portraits/posters/moving-portraits_1_poster.avif"
		}, {
			id: "moving-portraits_2",
			url: "/imgs/work/moving-portraits/moving-portraits_2.avif"
		}, {
			id: "moving-portraits_3",
			url: "/imgs/work/moving-portraits/moving-portraits_3.webm",
			placeholder: "/imgs/work/moving-portraits/posters/moving-portraits_3_poster.avif"
		}, {
			id: "moving-portraits_4",
			url: "/imgs/work/moving-portraits/moving-portraits_4.avif"
		}, {
			id: "moving-portraits_5",
			url: "/imgs/work/moving-portraits/moving-portraits_5.webm",
			placeholder: "/imgs/work/moving-portraits/posters/moving-portraits_5_poster.avif"
		}, {
			id: "moving-portraits_6",
			url: "/imgs/work/moving-portraits/moving-portraits_6.avif"
		}, {
			id: "moving-portraits_7",
			url: "/imgs/work/moving-portraits/moving-portraits_7.webm",
			placeholder: "/imgs/work/moving-portraits/posters/moving-portraits_7_poster.avif"
		}],
		"issey-miyake-ss25": [{
			id: "issey-miyake-ss25_1",
			url: "/imgs/work/issey-miyake-ss25/issey-miyake-ss25_1.webm",
			placeholder: "/imgs/work/issey-miyake-ss25/posters/issey-miyake-ss25_1_poster.avif"
		}, {
			id: "issey-miyake-ss25_2",
			url: "/imgs/work/issey-miyake-ss25/issey-miyake-ss25_2.avif"
		}, {
			id: "issey-miyake-ss25_3",
			url: "/imgs/work/issey-miyake-ss25/issey-miyake-ss25_3.webm",
			placeholder: "/imgs/work/issey-miyake-ss25/posters/issey-miyake-ss25_3_poster.avif"
		}, {
			id: "issey-miyake-ss25_4",
			url: "/imgs/work/issey-miyake-ss25/issey-miyake-ss25_4.avif"
		}, {
			id: "issey-miyake-ss25_5",
			url: "/imgs/work/issey-miyake-ss25/issey-miyake-ss25_5.webm",
			placeholder: "/imgs/work/issey-miyake-ss25/posters/issey-miyake-ss25_5_poster.avif"
		}],
		"ruby-campbell": [{
			id: "ruby-campbell_1",
			url: "/imgs/work/ruby-campbell/ruby-campbell_1.webm",
			placeholder: "/imgs/work/ruby-campbell/posters/ruby-campbell_1_poster.avif"
		}, {
			id: "ruby-campbell_2",
			url: "/imgs/work/ruby-campbell/ruby-campbell_2.avif"
		}, {
			id: "ruby-campbell_3",
			url: "/imgs/work/ruby-campbell/ruby-campbell_3.webm",
			placeholder: "/imgs/work/ruby-campbell/posters/ruby-campbell_3_poster.avif"
		}, {
			id: "ruby-campbell_4",
			url: "/imgs/work/ruby-campbell/ruby-campbell_4.avif"
		}, {
			id: "ruby-campbell_5",
			url: "/imgs/work/ruby-campbell/ruby-campbell_5.avif"
		}],
		"echoes-in-light": [{
			id: "echoes-in-light_1",
			url: "/imgs/work/echoes-in-light/echoes-in-light_1.webm",
			placeholder: "/imgs/work/echoes-in-light/posters/echoes-in-light_1_poster.avif"
		}, {
			id: "echoes-in-light_2",
			url: "/imgs/work/echoes-in-light/echoes-in-light_2.avif"
		}, {
			id: "echoes-in-light_3",
			url: "/imgs/work/echoes-in-light/echoes-in-light_3.webm",
			placeholder: "/imgs/work/echoes-in-light/posters/echoes-in-light_3_poster.avif"
		}, {
			id: "echoes-in-light_4",
			url: "/imgs/work/echoes-in-light/echoes-in-light_4.webm",
			placeholder: "/imgs/work/echoes-in-light/posters/echoes-in-light_4_poster.avif"
		}, {
			id: "echoes-in-light_5",
			url: "/imgs/work/echoes-in-light/echoes-in-light_5.avif"
		}, {
			id: "echoes-in-light_6",
			url: "/imgs/work/echoes-in-light/echoes-in-light_6.webm",
			placeholder: "/imgs/work/echoes-in-light/posters/echoes-in-light_6_poster.avif"
		}],
		"studies-in-motion": [{
			id: "studies-in-motion_1",
			url: "/imgs/work/studies-in-motion/studies-in-motion_1.webm",
			placeholder: "/imgs/work/studies-in-motion/posters/studies-in-motion_1_poster.avif"
		}, {
			id: "studies-in-motion_2",
			url: "/imgs/work/studies-in-motion/studies-in-motion_2.avif"
		}, {
			id: "studies-in-motion_3",
			url: "/imgs/work/studies-in-motion/studies-in-motion_3.webm",
			placeholder: "/imgs/work/studies-in-motion/posters/studies-in-motion_3_poster.avif"
		}, {
			id: "studies-in-motion_4",
			url: "/imgs/work/studies-in-motion/studies-in-motion_4.webm",
			placeholder: "/imgs/work/studies-in-motion/posters/studies-in-motion_4_poster.avif"
		}, {
			id: "studies-in-motion_5",
			url: "/imgs/work/studies-in-motion/studies-in-motion_5.webm",
			placeholder: "/imgs/work/studies-in-motion/posters/studies-in-motion_5_poster.avif"
		}, {
			id: "studies-in-motion_6",
			url: "/imgs/work/studies-in-motion/studies-in-motion_6.webm",
			placeholder: "/imgs/work/studies-in-motion/posters/studies-in-motion_6_poster.avif"
		}, {
			id: "studies-in-motion_7",
			url: "/imgs/work/studies-in-motion/studies-in-motion_7.webm",
			placeholder: "/imgs/work/studies-in-motion/posters/studies-in-motion_7_poster.avif"
		}, {
			id: "studies-in-motion_8",
			url: "/imgs/work/studies-in-motion/studies-in-motion_8.webm",
			placeholder: "/imgs/work/studies-in-motion/posters/studies-in-motion_8_poster.avif"
		}, {
			id: "studies-in-motion_9",
			url: "/imgs/work/studies-in-motion/studies-in-motion_9.webm",
			placeholder: "/imgs/work/studies-in-motion/posters/studies-in-motion_9_poster.avif"
		}, {
			id: "studies-in-motion_10",
			url: "/imgs/work/studies-in-motion/studies-in-motion_10.webm",
			placeholder: "/imgs/work/studies-in-motion/posters/studies-in-motion_10_poster.avif"
		}],
		"shaped-by-earth": [{
			id: "shaped-by-earth_1",
			url: "/imgs/work/shaped-by-earth/shaped-by-earth_1.avif"
		}, {
			id: "shaped-by-earth_2",
			url: "/imgs/work/shaped-by-earth/shaped-by-earth_2.avif"
		}, {
			id: "shaped-by-earth_3",
			url: "/imgs/work/shaped-by-earth/shaped-by-earth_3.webm",
			placeholder: "/imgs/work/shaped-by-earth/posters/shaped-by-earth_3_poster.avif"
		}, {
			id: "shaped-by-earth_4",
			url: "/imgs/work/shaped-by-earth/shaped-by-earth_4.avif"
		}, {
			id: "shaped-by-earth_5",
			url: "/imgs/work/shaped-by-earth/shaped-by-earth_5.avif"
		}]
	},
	Ra = {
		fw: Da,
		archive: Ia,
		works: Oa
	},
	Va = [".mp4", ".webm", ".ogg", ".mov"];

function co(r) {
	if (!r) return !1;
	const e = r.toLowerCase();
	return Va.some(t => e.endsWith(t))
}
class Xs extends Tn {
	constructor({
		canvas: e
	}) {
		super(), this.canvas = e, this.DOM = {
			element: document.querySelector(".preloader"),
			percentage: document.querySelector(".preloader__percentage")
		}, this.loadedAssets = 0, this.loadedVideos = 0, this.fontsLoaded = !1, setTimeout(() => {
			this.loadAssets()
		}, 1e3)
	}
	loadAssets() {
		this.loadFonts(), this.loadTextures()
	}
	flattenMediaData(e) {
		const t = [];
		return e.fw && Array.isArray(e.fw) && t.push(...e.fw), e.archive && Array.isArray(e.archive) && t.push(...e.archive), e.overview && Array.isArray(e.overview) && t.push(...e.overview), e.works && typeof e.works == "object" && Object.keys(e.works).forEach(i => {
			Array.isArray(e.works[i]) && t.push(...e.works[i])
		}), t
	}
	loadFonts() {
		const e = [new Pn("H")];
		Promise.all(e.map(t => t.load(null, 1e4))).then(() => {
			this.fontsLoaded = !0, this.checkAllAssetsLoaded()
		}).catch(t => {
			console.error("Error loading fonts:", t), this.fontsLoaded = !0, this.checkAllAssetsLoaded()
		})
	}
	loadTextures() {
		window.GL_TEXTURES = [], window.GL_TEXTURES_CACHE = {};
		const e = this.flattenMediaData(Ra),
			t = e.filter(a => co(a.url) && a.placeholder),
			i = e.filter(a => !co(a.url) || !a.placeholder),
			s = new Map;
		t.forEach(a => {
			s.has(a.placeholder) || s.set(a.placeholder, []), s.get(a.placeholder).push(a)
		});
		const o = i.length + s.size;
		this.totalMediaAssets = o, this.loadedMediaAssets = 0, this.loadingManager = new Rn, this.loadingManager.onProgress = (a, l, h) => {
			this.loadedMediaAssets = l, this.updateProgress()
		}, this.loadingManager.onLoad = () => {
			this.checkAllAssetsLoaded()
		};
		const n = new Vn(this.loadingManager);
		s.forEach((a, l) => {
			n.load(l, h => {
				h.needsUpdate = !0, a.forEach(f => {
					const d = {
						id: f.id,
						texture: h,
						type: "placeholder",
						videoUrl: f.url
					};
					window.GL_TEXTURES.push(d), window.GL_TEXTURES_CACHE[f.id] = d
				})
			}, void 0, h => {
				console.error(`Error loading placeholder: ${l}`, h)
			})
		}), i.forEach(a => {
			n.load(a.url, l => {
				l.needsUpdate = !0;
				const h = {
					id: a.id,
					texture: l,
					type: "image",
					videoUrl: null
				};
				window.GL_TEXTURES.push(h), window.GL_TEXTURES_CACHE[a.id] = h
			}, void 0, l => {
				console.error(`Error loading texture: ${a.url}`, l)
			})
		})
	}
	updateProgress() {
		const e = this.totalMediaAssets + 1,
			i = (this.loadedMediaAssets + (this.fontsLoaded ? 1 : 0)) / e;
		this.onProgress(i)
	}
	checkAllAssetsLoaded() {
		this.loadedMediaAssets >= this.totalMediaAssets && this.fontsLoaded && (this.updateProgress(), this.onLoaded())
	}
	static loadVideoLazy(e, t, i) {
		if (window.GL_TEXTURES_CACHE[`${t}_video`]) {
			i(window.GL_TEXTURES_CACHE[`${t}_video`]);
			return
		}
		const s = document.createElement("video");
		s.src = e, s.crossOrigin = "anonymous", s.loop = !0, s.muted = !0, s.playsInline = !0, s.preload = "auto";
		let o = !1;
		const n = () => {
				s.removeEventListener("canplay", l), s.removeEventListener("canplaythrough", l), s.removeEventListener("loadeddata", l), s.removeEventListener("error", h)
			},
			a = f => {
				o || (o = !0, n(), window.GL_TEXTURES_CACHE[`${t}_video`] = f, i(f))
			},
			l = () => {
				if (o) return;
				const f = new Gn(s);
				f.minFilter = Wr, f.magFilter = Wr, f.generateMipmaps = !1, f.format = zn;
				const d = {
					id: t,
					texture: f,
					video: s,
					type: "video"
				};
				s.currentTime === 0 && (s.currentTime = .001), s.play().then(() => {
					typeof s.requestVideoFrameCallback == "function" ? s.requestVideoFrameCallback(() => a(d)) : requestAnimationFrame(() => requestAnimationFrame(() => a(d)))
				}).catch(() => {
					a(d)
				})
			},
			h = f => {
				console.error(`Error loading video: ${e}`, f), n()
			};
		s.addEventListener("canplay", l), s.addEventListener("canplaythrough", l), s.addEventListener("loadeddata", l), s.addEventListener("error", h), s.load()
	}
	onProgress(e) {
		const t = Math.round(e * 100);
		this.DOM.percentage && (this.DOM.percentage.textContent = `${t}%`)
	}
	onLoaded() {
		return new Promise(e => {
			this.animateOut = k.timeline({
				delay: .5,
				defaults: {
					ease: "power3.out"
				}
			}), this.animateOut.to(this.DOM.percentage, {
				opacity: 0,
				duration: .5
			}, "<"), this.animateOut.call(() => {
				this.emit("completed"), this.destroy()
			}), e()
		})
	}
	destroy() {
		this.DOM.element && this.DOM.element.remove()
	}
}
var Ga = `precision highp float;

uniform vec2 uViewportSizes;
uniform float uVelocity;
 
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position;
  vec4 screenPos = modelViewMatrix * vec4(pos, 1.0);

  float dist = length(screenPos.xy);
  float hyperDist = cosh(dist * 0.45) * 0.45;
  float clampedVelocity = abs(uVelocity) / (1.0 + abs(uVelocity) * 0.03);
  float velocityFactor = clampedVelocity * 0.03;
  pos.z += hyperDist * velocityFactor;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,
	za = `precision highp float;

varying vec2 vUv;

uniform sampler2D tMap;
uniform float uVelocity;
uniform float uAlpha;

void main() {
  vec2 uv = vUv;

  
  vec4 color = texture2D(tMap, uv);
  color.a = uAlpha;

  gl_FragColor = color;
}`;
let $a = class {
	constructor({
		geometry: e,
		gl: t,
		index: i,
		item: s,
		length: o,
		renderer: n,
		scene: a,
		screen: l,
		texture: h,
		video: f,
		videoUrl: d,
		viewport: u
	}) {
		this.geometry = e, this.gl = t, this.index = i, this.item = s, this.length = o, this.renderer = n, this.scene = a, this.screen = l, this.texture = h, this.video = f, this.videoUrl = d, this.viewport = u, this.smoothedVelocity = 0, this.isActive = !1, this.isLoadingVideo = !1, this.hasTexture = h !== null, this.waitingForLowVelocity = !1, this.videoPlayTimeout = null, this.videoPlayDelay = 200, this.velocityThreshold = .3, this.texture && (this.texture.needsUpdate = !0), this.createProgram(), this.createMesh(), this.onResize()
	}
	loadRealVideo() {
		this.isLoadingVideo || !this.videoUrl || this.video || (this.isLoadingVideo = !0, Xs.loadVideoLazy(this.videoUrl, this.item.dataset.id, e => {
			this.setTexture(e.texture, e.video), this.isLoadingVideo = !1, this.isActive && this.video && Math.abs(this.smoothedVelocity) < this.velocityThreshold && (this.videoPlayTimeout = setTimeout(() => {
				this.isActive && this.playVideo()
			}, this.videoPlayDelay))
		}))
	}
	playVideo() {
		if (!this.video || !this.isActive || !this.video.src || this.video.error) return;
		this.video.loop = !0, this.video.muted = !0, this.video.playsInline = !0;
		const e = () => {
			if (!this.isActive) return;
			this.video.currentTime === 0 && (this.video.currentTime = .001);
			const t = this.video.play();
			t !== void 0 && t.then(() => {
				this.isActive && this.texture && (this.texture.needsUpdate = !0)
			}).catch(i => {
				i.name !== "NotSupportedError" && console.warn("Autoplay vidéo bloqué:", i)
			})
		};
		if (this.video.readyState < 2) {
			const t = () => {
				this.video.removeEventListener("canplay", t), this.isActive && e()
			};
			this.video.addEventListener("canplay", t, {
				once: !0
			}), setTimeout(() => {
				this.video.removeEventListener("canplay", t), this.isActive && this.video.readyState >= 1 && e()
			}, 150)
		} else e()
	}
	pauseVideo() {
		this.video && this.video.pause()
	}
	resetVideo() {
		this.video && (this.video.pause(), this.video.currentTime = 0)
	}
	setTexture(e, t = null) {
		this.texture = e, this.video = t, this.hasTexture = e !== null, this.material && (this.material.uniforms.tMap.value = e, this.material.uniforms.uHasTexture.value = this.hasTexture ? 1 : 0), this.isActive && this.video && this.playVideo()
	}
	setActive(e) {
		this.isActive = e, this.videoPlayTimeout && (clearTimeout(this.videoPlayTimeout), this.videoPlayTimeout = null), e ? (this.videoUrl && !this.video && this.loadRealVideo(), this.video && Math.abs(this.smoothedVelocity) < this.velocityThreshold ? this.videoPlayTimeout = setTimeout(() => {
			this.isActive && this.playVideo()
		}, this.videoPlayDelay) : this.video && (this.waitingForLowVelocity = !0)) : (this.waitingForLowVelocity = !1, this.video && this.resetVideo())
	}
	createProgram() {
		this.material = new ns({
			vertexShader: Ga,
			fragmentShader: za,
			uniforms: {
				tMap: {
					value: this.texture
				},
				uAlpha: {
					value: 0
				},
				uVelocity: {
					value: 0
				},
				uHasTexture: {
					value: this.hasTexture ? 1 : 0
				},
				uViewportSizes: {
					value: new Ns(this.viewport.width, this.viewport.height)
				}
			},
			transparent: !0
		})
	}
	createMesh() {
		this.mesh = new as(this.geometry, this.material), this.scene.add(this.mesh)
	}
	show({
		delay: e = 0
	} = {}) {}
	hide(e) {
		const t = k.timeline({
			delay: e,
			defaults: Ei
		});
		return t.to(this.material.uniforms.uAlpha, {
			value: 0
		}, 0), t
	}
	onResize({
		screen: e,
		viewport: t,
		isResize: i = !1
	} = {}) {
		e && (this.screen = e), t && (this.viewport = t), this.createBounds(i)
	}
	createBounds(e = !1) {
		const {
			top: t,
			left: i,
			width: s,
			height: o
		} = this.item.getBoundingClientRect();
		(this.initialBounds === void 0 || e) && (this.initialBounds = {
			top: t,
			left: i,
			width: s,
			height: o
		}), this.bounds = {
			top: this.initialBounds.top,
			left: this.initialBounds.left,
			width: s,
			height: o
		}, this.updateScale(), this.updateX(), this.updateY()
	}
	updateScale() {
		this.height = this.bounds.height / window.innerHeight, this.width = this.bounds.width / window.innerWidth, this.mesh.scale.x = this.viewport.width * this.width, this.mesh.scale.y = this.viewport.height * this.height
	}
	updateX(e = 0) {
		this.x = (this.bounds.left + e) / window.innerWidth, this.mesh.position.x = -this.viewport.width / 2 + this.mesh.scale.x / 2 + this.x * this.viewport.width
	}
	updateY(e = 0) {
		this.y = (this.bounds.top - e) / window.innerHeight, this.mesh.position.y = this.viewport.height / 2 - this.mesh.scale.y / 2 - this.y * this.viewport.height
	}
	update(e) {
		if (e) {
			this.updateY(e.current);
			const t = e.velocity;
			this.smoothedVelocity = Gr(this.smoothedVelocity, t, .1), this.material.uniforms.uVelocity.value = this.smoothedVelocity
		}
		this.waitingForLowVelocity && this.isActive && this.video && Math.abs(this.smoothedVelocity) < this.velocityThreshold && (this.waitingForLowVelocity = !1, this.videoPlayTimeout = setTimeout(() => {
			this.isActive && this.playVideo()
		}, this.videoPlayDelay))
	}
	destroy() {
		this.videoPlayTimeout && (clearTimeout(this.videoPlayTimeout), this.videoPlayTimeout = null), this.video && this.video.pause(), this.material && this.material.dispose(), this.waitingForLowVelocity = !1, this.texture = null, this.video = null
	}
};
const uo = r => r === 1 ? 1 : 1 - Math.pow(2, -10 * r),
	Ba = JSON.parse('[{"id":"ISB_104","title":"Unfolding Grace","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/unfolding-grace.webm","placeholder":"/imgs/archive/posters/unfolding-grace_poster.avif","title":"Video 1"}},{"id":"ISB_128","title":"The Shape of Flow","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/the-shape-of-flow.webm","placeholder":"/imgs/archive/posters/the-shape-of-flow_poster.avif","title":"Video 2"}},{"id":"ISB_142","title":"Endless in Color","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/endless-in-color.webm","placeholder":"/imgs/archive/posters/endless-in-color_poster.avif","title":"Video 3"}},{"id":"ISB_157","title":"TG 7th / Flow of Sound","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/tg-7th-flow-of-sound.webm","placeholder":"/imgs/archive/posters/tg-7th-flow-of-sound_poster.avif","title":"Video 4"}},{"id":"ISB_163","title":"Adut Akech for Vogue US","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/adut-akech-for-vogue-us.webm","placeholder":"/imgs/archive/posters/adut-akech-for-vogue-us_poster.avif","title":"Video 5"}},{"id":"ISB_174","title":"Transforming Spaces","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/transforming-spaces.webm","placeholder":"/imgs/archive/posters/transforming-spaces_poster.avif","title":"Video 6"}},{"id":"ISB_189","title":"Sixfold Portraits","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/sixfold-portraits.webm","placeholder":"/imgs/archive/posters/sixfold-portraits_poster.avif","title":"Video 7"}},{"id":"ISB_193","title":"About:Blank / Twist of Sight","focus":"WebGL · Motion","year":"2025","media":{"type":"video","url":"/imgs/archive/about-blank-twist-of-sight.webm","placeholder":"/imgs/archive/posters/about-blank-twist-of-sight_poster.avif","title":"Video 8"}},{"id":"ISB_205","title":"ARKET: A Chain of Fashion","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/arket-a-chain-of-fashion.webm","placeholder":"/imgs/archive/posters/arket-a-chain-of-fashion_poster.avif","title":"Video 9"}},{"id":"ISB_217","title":"About:Blank / Distorted Looks","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/about-blank-distorted-looks.webm","placeholder":"/imgs/archive/posters/about-blank-distorted-looks_poster.avif","title":"Video 10"}},{"id":"ISB_224","title":"Vogue China / Waves of Fashion","focus":"WebGL · Motion · Shaders","year":"2025","media":{"type":"video","url":"/imgs/archive/vogue-china-waves-of-fashion.webm","placeholder":"/imgs/archive/posters/vogue-china-waves-of-fashion_poster.avif","title":"Video 11"}},{"id":"ISB_238","title":"ML’s Curated Collection ","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/mls-curated-collection.webm","placeholder":"/imgs/archive/posters/mls-curated-collection_poster.avif","title":"Video 12"}},{"id":"ISB_249","title":"Curved Perspectives","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/curved-perspectives.webm","placeholder":"/imgs/archive/posters/curved-perspectives_poster.avif","title":"Video 13"}},{"id":"ISB_256","title":"YSL FW25 / Flowing Looks","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/ysl-fw25-flowing-looks.webm","placeholder":"/imgs/archive/posters/ysl-fw25-flowing-looks_poster.avif","title":"Video 14"}},{"id":"ISB_263","title":"Spinning Triptych","focus":"WebGL · Motion · Interaction","year":"2025","media":{"type":"video","url":"/imgs/archive/spinning-triptych.webm","placeholder":"/imgs/archive/posters/spinning-triptych_poster.avif","title":"Video 15"}},{"id":"ISB_275","title":"Gucci PF25 / A Moving Lookbook","focus":"WebGL · Motion · Shaders","year":"2025","media":{"type":"video","url":"/imgs/archive/gucci-pf25-a-moving-lookbook.webm","placeholder":"/imgs/archive/posters/gucci-pf25-a-moving-lookbook_poster.avif","title":"Video 16"}},{"id":"ISB_284","title":"Jellyfish in Motion","focus":"Kinetic Typography · Motion","year":"2025","media":{"type":"video","url":"/imgs/archive/jellyfish-in-motion.webm","placeholder":"/imgs/archive/posters/jellyfish-in-motion_poster.avif","title":"Video 17"}},{"id":"ISB_296","title":"The Cylindrical Edit","focus":"WebGL · Motion · Interaction","year":"2024","media":{"type":"video","url":"/imgs/archive/the-cylindrical-edit.webm","placeholder":"/imgs/archive/posters/the-cylindrical-edit_poster.avif","title":"Video 18"}},{"id":"ISB_302","title":"Flow of Portraits","focus":"WebGL · Motion · Interaction","year":"2024","media":{"type":"video","url":"/imgs/archive/flow-of-portraits.webm","placeholder":"/imgs/archive/posters/flow-of-portraits_poster.avif","title":"Video 18"}},{"id":"ISB_314","title":"Endless Ribbon","focus":"WebGL · Motion · Interaction","year":"2024","media":{"type":"video","url":"/imgs/archive/endless-ribbon.webm","placeholder":"/imgs/archive/posters/endless-ribbon_poster.avif","title":"Video 19"}},{"id":"ISB_327","title":"Twisted Portraits","focus":"WebGL · Motion · Interaction","year":"2024","media":{"type":"video","url":"/imgs/archive/twisted-portraits.webm","placeholder":"/imgs/archive/posters/twisted-portraits_poster.avif","title":"Video 20"}},{"id":"ISB_339","title":"Spiral of Sight","focus":"WebGL · Motion · Interaction","year":"2024","media":{"type":"video","url":"/imgs/archive/spiral-of-sight.webm","placeholder":"/imgs/archive/posters/spiral-of-sight_poster.avif","title":"Video 20"}},{"id":"ISB_348","title":"Wraped Video Stack","focus":"WebGL · Motion · Interaction","year":"2024","media":{"type":"video","url":"/imgs/archive/wraped-image-stack.webm","placeholder":"/imgs/archive/posters/wraped-image-stack_poster.avif","title":"Video 21"}},{"id":"ISB_352","title":"Through the Frames","focus":"WebGL · Motion · Interaction","year":"2024","media":{"type":"video","url":"/imgs/archive/through-the-frames.webm","placeholder":"/imgs/archive/posters/through-the-frames_poster.avif","title":"Video 22"}},{"id":"ISB_367","title":"In Refraction","focus":"WebGL · Shaders","year":"2024","media":{"type":"video","url":"/imgs/archive/in-refraction.webm","placeholder":"/imgs/archive/posters/in-refraction_poster.avif","title":"Video 23"}},{"id":"ISB_389","title":"Poster Series: Issue No.01","focus":"Generative Visuals · Motion","year":"2024","media":{"type":"video","url":"/imgs/archive/poster-series-issue-no01.webm","placeholder":"/imgs/archive/posters/poster-series-issue-no01_poster.avif","title":"Video 25"}},{"id":"ISB_392","title":"Poster Series: Issue No.02","focus":"Generative Visuals · Motion","year":"2024","media":{"type":"video","url":"/imgs/archive/poster-series-issue-no02.webm","placeholder":"/imgs/archive/posters/poster-series-issue-no02_poster.avif","title":"Video 26"}},{"id":"ISB_407","title":"Poster Series: Issue No.03","focus":"Generative Visuals · Motion","year":"2024","media":{"type":"video","url":"/imgs/archive/poster-series-issue-no03.webm","placeholder":"/imgs/archive/posters/poster-series-issue-no03_poster.avif","title":"Video 27"}},{"id":"ISB_418","title":"Poster Series: Issue No.04","focus":"Generative Visuals · Motion","year":"2024","media":{"type":"video","url":"/imgs/archive/poster-series-issue-no04.webm","placeholder":"/imgs/archive/posters/poster-series-issue-no04_poster.avif","title":"Video 28"}},{"id":"ISB_429","title":"Poster Series: Issue No.05","focus":"Generative Visuals · Motion","year":"2024","media":{"type":"video","url":"/imgs/archive/poster-series-issue-no05.webm","placeholder":"/imgs/archive/posters/poster-series-issue-no05_poster.avif","title":"Video 28"}},{"id":"ISB_436","title":"Poster Series: Issue No.06","focus":"Generative Visuals · Motion","year":"2024","media":{"type":"video","url":"/imgs/archive/poster-series-issue-no06.webm","placeholder":"/imgs/archive/posters/poster-series-issue-no06_poster.avif","title":"Video 29"}},{"id":"ISB_447","title":"Poster Series: Issue No.07","focus":"Generative Visuals · Motion","year":"2024","media":{"type":"video","url":"/imgs/archive/poster-series-issue-no07.webm","placeholder":"/imgs/archive/posters/poster-series-issue-no07_poster.avif","title":"Video 30"}},{"id":"ISB_452","title":"Poster Series: Issue No.08","focus":"Generative Visuals · Motion","year":"2024","media":{"type":"video","url":"/imgs/archive/poster-series-issue-no08.webm","placeholder":"/imgs/archive/posters/poster-series-issue-no08_poster.avif","title":"Video 31"}},{"id":"ISB_468","title":"Poster Series: Issue No.09","focus":"Generative Visuals · Motion","year":"2024","media":{"type":"video","url":"/imgs/archive/poster-series-issue-no09.webm","placeholder":"/imgs/archive/posters/poster-series-issue-no09_poster.avif","title":"Video 32"}},{"id":"ISB_479","title":"Poster Series: Issue No.10","focus":"Generative Visuals · Motion","year":"2024","media":{"type":"video","url":"/imgs/archive/poster-series-issue-no10.webm","placeholder":"/imgs/archive/posters/poster-series-issue-no10_poster.avif","title":"Video 33"}},{"id":"ISB_483","title":"Whispers of a Geisha","focus":"WebGL · 3D Model · Motion","year":"2023","media":{"type":"video","url":"/imgs/archive/whispers-of-a-geisha.webm","placeholder":"/imgs/archive/posters/whispers-of-a-geisha_poster.avif","title":"Video 34"}},{"id":"ISB_495","title":"Echoes of Koons","focus":"WebGL · 3D Model · Motion","year":"2023","media":{"type":"video","url":"/imgs/archive/echoes-of-koons.webm","placeholder":"/imgs/archive/posters/echoes-of-koons_poster.avif","title":"Video 35"}},{"id":"ISB_502","title":"Temporary Website®","focus":"Design · Motion · Interaction","year":"2022","media":{"type":"video","url":"/imgs/archive/temporary-website.webm","placeholder":"/imgs/archive/posters/temporary-website_poster.avif","title":"Video 36"}},{"id":"ISB_517","title":"Folio No.01","focus":"Design · Motion · Interaction","year":"2020","media":{"type":"video","url":"/imgs/archive/portfolio-no01.webm","placeholder":"/imgs/archive/posters/portfolio-no01_poster.avif","title":"Video 37"}}]'),
	xt = {
		archive_projects: Ba
	};
class Fa {
	constructor({
		gl: e,
		images: t,
		renderer: i,
		scene: s,
		screen: o,
		viewport: n,
		lenis: a
	}) {
		this.gl = e, this.images = t, this.renderer = i, this.scene = s, this.screen = o, this.viewport = n, this.group = new es, this.lenis = a, this.DOM = {
			previews: [...document.querySelectorAll(".archive-index__preview")]
		}, this.currentIndex = 0, this.targetIndex = 0, this.scroll = {
			current: 0,
			target: 0,
			velocity: 0,
			ease: .075
		}, this.createGeometry(), this.createMedias(), this.scene.add(this.group)
	}
	createGeometry() {
		this.geometry = new qs(1, 1, 10, 10)
	}
	createMedias() {
		!xt || !xt.archive_projects.length || (this.medias = xt.archive_projects.map((e, t) => {
			const s = window.GL_TEXTURES_CACHE?.[`${e.id}_video`] || window.GL_TEXTURES?.find(n => n.id === e.id);
			return new $a({
				geometry: this.geometry,
				gl: this.gl,
				index: t,
				item: this.DOM.previews[t],
				length: xt.archive_projects.length,
				renderer: this.renderer,
				scene: this.group,
				screen: this.screen,
				texture: s?.texture || null,
				video: s?.video || null,
				videoUrl: s?.videoUrl || null,
				viewport: this.viewport
			})
		}).filter(Boolean))
	}
	onMouseLeave(e) {
		e?.preventDefault(), this.medias && this.medias.forEach(t => {
			t.setActive(!1), k.to(t.material.uniforms.uAlpha, {
				value: 0,
				duration: .4,
				ease: uo,
				overwrite: !0
			})
		})
	}
	onMouseEnter(e) {
		e?.preventDefault();
		const t = e.currentTarget.dataset.id;
		this.scrollToItem(t)
	}
	setActiveMedia(e) {
		this.medias && (this.medias.forEach((t, i) => {
			const s = i === e,
				o = s ? 1 : .85;
			t.setActive(s), k.to(t.material.uniforms.uAlpha, {
				value: o,
				duration: .6,
				ease: "expo.out"
			})
		}), this.currentIndex = e)
	}
	scrollToItem(e) {
		if (!this.medias) return;
		let t = null,
			i = -1;
		if (typeof e == "number" ? (i = e, t = this.medias[e]) : (i = this.medias.findIndex(f => f.item.dataset.id === e), t = this.medias[i]), !t || !t.initialBounds) return;
		const s = window.innerHeight,
			o = t.initialBounds.top,
			n = t.initialBounds.height,
			a = o + n / 2,
			l = s / 2,
			h = a - l;
		k.to(this.scroll, {
			target: h,
			duration: 1,
			ease: uo,
			onUpdate: () => {
				this.scroll.velocity = (this.scroll.target - this.scroll.current) * .1
			}
		}), this.setActiveMedia(i)
	}
	show({
		delay: e = 0
	} = {}) {
		this.medias?.forEach((t, i) => {
			t.show()
		})
	}
	hide() {
		this.medias?.forEach((e, t) => {
			e.hide(t * .01)
		})
	}
	onTouchDown(e) {}
	onTouchMove(e) {}
	onTouchUm(e) {}
	onWheel(e) {}
	onResize({
		screen: e,
		viewport: t
	}) {
		this.scroll.current = 0, this.scroll.target = 0, this.scroll.velocity = 0, this.medias?.forEach(i => {
			i.onResize({
				screen: e,
				viewport: t,
				isResize: !0
			})
		})
	}
	update(e) {
		const t = this.scroll.current;
		this.scroll.current += (this.scroll.target - this.scroll.current) * this.scroll.ease, this.scroll.velocity = this.scroll.current - t, this.medias?.forEach(i => i.update(this.scroll))
	}
	destroy() {
		this.medias?.forEach(e => {
			this.group.remove(e.mesh), e.destroy()
		}), this.scene.remove(this.group), this.geometry?.dispose()
	}
}
var dn = `precision highp float;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
	Wa = `precision highp float;

varying vec2 vUv;

uniform sampler2D tMap;
uniform float uAlpha;

void main() {
  vec2 uv = vUv;

  vec4 color = texture2D(tMap, uv);
  color.a = uAlpha;

  gl_FragColor = color;
}`;
let Ha = class {
	constructor({
		geometry: e,
		gl: t,
		index: i,
		item: s,
		length: o,
		mediaId: n,
		renderer: a,
		scene: l,
		screen: h,
		texture: f,
		viewport: d
	}) {
		this.geometry = e, this.gl = t, this.index = i, this.item = s, this.length = o, this.mediaId = n, this.renderer = a, this.scene = l, this.screen = h, this.texture = f, this.viewport = d, this.smoothedVelocity = 0, this.isAnimationFinished = !1, this.showTimeline = null, this._activeState = "default", this.createProgram(), this.createMesh(), this.onResize()
	}
	createProgram() {
		this.texture && (this.texture.needsUpdate = !0), this.material = new ns({
			vertexShader: dn,
			fragmentShader: Wa,
			uniforms: {
				tMap: {
					value: this.texture
				},
				uAlpha: {
					value: 0
				},
				uVelocity: {
					value: 0
				},
				uTime: {
					value: 0
				},
				uViewportSizes: {
					value: new Ns(this.viewport.width, this.viewport.height)
				},
				uModulo: {
					value: this.index % 2 === 0 ? -1 : 1
				}
			},
			transparent: !0,
			side: Hs
		})
	}
	createMesh() {
		this.mesh = new as(this.geometry, this.material), this.scene.add(this.mesh)
	}
	setActive(e) {
		this._activeTl && this._activeTl.kill(), this._activeState = e, this._activeTl = k.timeline();
		const t = e === "dimmed";
		return this._activeTl.to(this.material.uniforms.uAlpha, {
			value: t ? .1 : 1,
			duration: .4,
			ease: "power2.out"
		}, 0), this._activeTl
	}
	show({
		delay: e = 0
	} = {}) {
		const t = k.timeline({
			delay: e,
			defaults: {
				ease: "expo.out",
				duration: .7
			},
			onComplete: i => {
				this.isAnimationFinished = !0
			}
		});
		return t.fromTo(this.material.uniforms.uAlpha, {
			value: 0
		}, {
			value: 1
		}, 0), t.from(this.mesh.position, {
			y: this.mesh.position.y - this.mesh.scale.y * 10
		}, 0), t
	}
	hide({
		delay: e = 0
	} = {}) {
		const t = k.timeline({
			delay: e,
			defaults: Ei
		});
		return t.to(this.material.uniforms.uAlpha, {
			value: 0
		}, 0), t
	}
	onResize({
		screen: e,
		viewport: t
	} = {}) {
		e && (this.screen = e), t && (this.viewport = t), this.createBounds()
	}
	createBounds() {
		const {
			top: e,
			left: t,
			width: i,
			height: s
		} = this.item.getBoundingClientRect();
		this.bounds = {
			top: e + window.pageYOffset,
			left: t,
			width: i,
			height: s
		}, this.updateScale(), this.updateX(), this.updateY()
	}
	updateScale() {
		this.height = this.bounds.height / window.innerHeight, this.width = this.bounds.width / window.innerWidth, this.mesh.scale.x = this.viewport.width * this.width, this.mesh.scale.y = this.viewport.height * this.height, this.finaleScaleX = this.viewport.width * this.width, this.finaleScaleY = this.viewport.height * this.height
	}
	updateX(e = 0) {
		const t = (this.bounds.left + this.bounds.width / 2 + e) / window.innerWidth;
		this.mesh.position.x = -this.viewport.width / 2 + t * this.viewport.width, this.finaleX = this.mesh.position.x
	}
	updateY(e = 0) {
		const t = (this.bounds.top + this.bounds.height / 2 - e) / window.innerHeight;
		this.mesh.position.y = this.viewport.height / 2 - t * this.viewport.height, this.finaleY = this.mesh.position.y
	}
	update(e, t) {
		if (e && (this.isAnimationFinished && this.updateY(e.scroll), ne.isDesktop)) {
			const i = e.velocity;
			this.smoothedVelocity = Gr(this.smoothedVelocity, i, .1), this.material.uniforms.uVelocity.value = this.smoothedVelocity
		}
		this.material.uniforms.uTime.value = t
	}
	destroy() {
		this.showTimeline && (this.showTimeline.kill(), this.showTimeline = null), this._activeTl && (this._activeTl.kill(), this._activeTl = null), this.material && this.material.dispose(), this._activeState = "default", this.texture = null
	}
};
var Na = `precision highp float;

varying vec2 vUv;

uniform sampler2D tMap;      
uniform sampler2D tMapNext;  
uniform float uMix;          
uniform float uAlpha;

void main() {
  vec2 uv = vUv;

  vec4 current = texture2D(tMap, uv);
  vec4 next = texture2D(tMapNext, uv);

  
  vec4 color = mix(current, next, uMix);
  color.a *= uAlpha;

  gl_FragColor = color;
}`;
class qa {
	constructor({
		geometry: e,
		gl: t,
		renderer: i,
		scene: s,
		screen: o,
		viewport: n
	}) {
		this.geometry = e, this.gl = t, this.renderer = i, this.scene = s, this.screen = o, this.viewport = n, this.item = document.querySelector(".overview-works__preview"), this.item && (this.currentVideo = null, this.nextVideo = null, this.currentTexture = null, this.nextTexture = null, this.isTransitioning = !1, this.currentProjectId = null, this.isActive = !1, this._crossfadeTween = null, this.emptyTexture = new $n(new Uint8Array([0, 0, 0, 0]), 1, 1, Bn), this.emptyTexture.needsUpdate = !0, this.createProgram(), this.createMesh(), this.onResize())
	}
	createProgram() {
		this.material = new ns({
			vertexShader: dn,
			fragmentShader: Na,
			uniforms: {
				tMap: {
					value: this.emptyTexture
				},
				tMapNext: {
					value: this.emptyTexture
				},
				uMix: {
					value: 0
				},
				uAlpha: {
					value: 0
				}
			},
			transparent: !0,
			side: Hs
		})
	}
	createMesh() {
		this.mesh = new as(this.geometry, this.material), this.mesh.position.z = .01, this.mesh.renderOrder = 1, this.scene.add(this.mesh)
	}
	setProject(e, {
		onComplete: t
	} = {}) {
		if (!e || !this.item || this.currentProjectId === e.id && this.isActive) return;
		this.currentProjectId = e.id;
		const i = e.media.url;
		if (!i) return;
		this.isTransitioning && this._crossfadeTween && this._crossfadeTween.progress(1);
		const s = window.GL_TEXTURES_CACHE?.[e.id];
		s?.texture && !this.isActive ? (this.material.uniforms.tMap.value = s.texture, this.material.uniforms.uMix.value = 0, this.currentTexture = s.texture, this.isActive = !0, this._showMesh()) : s?.texture && this.isActive && (this.material.uniforms.tMapNext.value = s.texture, this.material.uniforms.uMix.value = 0, k.to(this.material.uniforms.uMix, {
			value: 1,
			duration: .3,
			ease: "power2.out",
			onComplete: () => {
				this.currentTexture = s.texture, this.material.uniforms.tMap.value = this.currentTexture, this.material.uniforms.uMix.value = 0
			}
		})), this.isTransitioning = !0, Xs.loadVideoLazy(i, e.id, o => {
			if (this.currentProjectId !== e.id) return;
			const n = o.texture,
				a = o.video;
			n.needsUpdate = !0, this.currentVideo && this.currentVideo !== a && this._pauseVideo(this.currentVideo), this.material.uniforms.tMapNext.value = n, this.material.uniforms.uMix.value = 0, this.nextTexture = n, this.nextVideo = a, this._playVideo(a), this._crossfadeTween = k.to(this.material.uniforms.uMix, {
				value: 1,
				duration: .4,
				ease: "expo.out",
				onComplete: () => {
					this.currentTexture = this.nextTexture, this.currentVideo = this.nextVideo, this.material.uniforms.tMap.value = this.currentTexture, this.material.uniforms.uMix.value = 0, this.nextTexture = null, this.nextVideo = null, this.isTransitioning = !1, this._crossfadeTween = null, t?.()
				}
			})
		})
	}
	_playVideo(e) {
		if (!e) return;
		e.loop = !0, e.muted = !0, e.playsInline = !0, e.currentTime = 0;
		const t = e.play();
		t !== void 0 && t.catch(i => {
			console.warn("[Preview] Autoplay bloqué:", i)
		})
	}
	_pauseVideo(e) {
		e && e.pause()
	}
	_pauseAll() {
		this._pauseVideo(this.currentVideo), this._pauseVideo(this.nextVideo)
	}
	_showMesh() {
		k.to(this.material.uniforms.uAlpha, {
			value: 1,
			duration: .4,
			ease: "power2.out"
		})
	}
	show() {}
	hide() {
		this._pauseAll();
		const e = k.timeline({
			defaults: Ei,
			onComplete: () => {
				this.isActive = !1, this.currentProjectId = null
			}
		});
		return e.to(this.material.uniforms.uAlpha, {
			value: 0
		}, 0), e
	}
	onResize({
		screen: e,
		viewport: t
	} = {}) {
		e && (this.screen = e), t && (this.viewport = t), this.item && this.createBounds()
	}
	createBounds() {
		const {
			top: e,
			left: t,
			width: i,
			height: s
		} = this.item.getBoundingClientRect();
		this.bounds = {
			top: e,
			left: t,
			width: i,
			height: s
		}, this.updateScale(), this.updateX(), this.updateY()
	}
	updateScale() {
		this.height = this.bounds.height / window.innerHeight, this.width = this.bounds.width / window.innerWidth, this.mesh.scale.x = this.viewport.width * this.width, this.mesh.scale.y = this.viewport.height * this.height
	}
	updateX() {
		this.x = this.bounds.left / window.innerWidth, this.mesh.position.x = -this.viewport.width / 2 + this.mesh.scale.x / 2 + this.x * this.viewport.width
	}
	updateY() {
		this.y = this.bounds.top / window.innerHeight, this.mesh.position.y = this.viewport.height / 2 - this.mesh.scale.y / 2 - this.y * this.viewport.height
	}
	update() {
		this.currentTexture?.image && (this.currentTexture.needsUpdate = !0), this.nextTexture?.image && (this.nextTexture.needsUpdate = !0)
	}
	destroy() {
		this._crossfadeTween && (this._crossfadeTween.kill(), this._crossfadeTween = null), this._pauseAll(), this.material && this.material.dispose(), this.emptyTexture && this.emptyTexture.dispose(), this.currentTexture = null, this.nextTexture = null, this.currentVideo = null, this.nextVideo = null
	}
}
class Ya {
	constructor({
		gl: e,
		renderer: t,
		scene: i,
		screen: s,
		viewport: o
	}) {
		this.gl = e, this.renderer = t, this.scene = i, this.screen = s, this.viewport = o, this.group = new es, this.currentIndex = -1, this.createGeometry(), this.createMedias(), this.createPreview(), this.scene.add(this.group)
	}
	createGeometry() {
		this.geometry = new qs(1, 1, 10, 10)
	}
	createMedias() {
		if (!xt || !xt.archive_projects.length) return;
		const e = document.querySelectorAll(".overview-works__item");
		e.length && (this.medias = xt.archive_projects.map((t, i) => {
			const s = e[i];
			if (!s) return null;
			const o = window.GL_TEXTURES_CACHE?.[t.id] || window.GL_TEXTURES?.find(n => n.id === t.id);
			return o ? this.createMedia(t, o, i, s) : (console.warn(`[OverviewGallery] Texture not found: ${t.id}`), null)
		}).filter(Boolean))
	}
	createMedia(e, t, i, s) {
		const o = s.querySelector(".overview-works__item-preview");
		return o ? new Ha({
			geometry: this.geometry,
			gl: this.gl,
			index: i,
			item: o,
			length: xt.archive_projects.length,
			mediaId: e.id,
			renderer: this.renderer,
			scene: this.group,
			screen: this.screen,
			texture: t.texture,
			viewport: this.viewport
		}) : void 0
	}
	createPreview() {
		this.preview = new qa({
			geometry: this.geometry,
			gl: this.gl,
			renderer: this.renderer,
			scene: this.group,
			screen: this.screen,
			viewport: this.viewport
		})
	}
	selectProject(e, {
		onComplete: t
	} = {}) {
		if (!xt?.archive_projects[e]) return;
		if (e === this.currentIndex) {
			this.currentIndex = -1, this.medias?.forEach(s => s.setActive("default")), this.preview?.hide(), t?.();
			return
		}
		this.currentIndex = e, this.medias?.forEach((s, o) => {
			s.setActive(o === e ? "selected" : "dimmed")
		});
		const i = xt.archive_projects[e];
		this.preview?.setProject(i, {
			onComplete: t
		})
	}
	show() {
		this.medias?.forEach((e, t) => {
			e.show({
				delay: .25 + t * .065
			})
		})
	}
	hide() {
		this.preview?.hide(), this.medias?.forEach((e, t) => {
			e.hide(t * .01)
		})
	}
	onTouchDown(e) {}
	onTouchMove(e) {}
	onTouchUp(e) {}
	onWheel(e) {}
	onResize({
		screen: e,
		viewport: t
	}) {
		this.medias?.forEach(i => i.onResize({
			screen: e,
			viewport: t
		})), this.preview?.onResize({
			screen: e,
			viewport: t
		})
	}
	update(e, t) {
		this.medias?.forEach(i => i.update(e, t)), this.preview?.update(e, t)
	}
	destroy() {
		this.medias?.forEach(e => {
			this.group.remove(e.mesh), e.destroy()
		}), this.preview?.mesh && (this.group.remove(this.preview.mesh), this.preview.destroy()), this.scene.remove(this.group), this.geometry?.dispose()
	}
}
var Xa = `varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,
	Ua = `precision highp float;

uniform sampler2D tMap;
uniform float uAlpha;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  
  vec4 color = texture2D(tMap, uv);
  color.a = uAlpha;
  
  gl_FragColor = color;
}`;
k.registerPlugin(O);
class ja {
	constructor({
		geometry: e,
		gl: t,
		index: i,
		item: s,
		length: o,
		renderer: n,
		scene: a,
		screen: l,
		texture: h,
		video: f,
		videoUrl: d,
		viewport: u
	}) {
		this.geometry = e, this.gl = t, this.index = i, this.item = s, this.length = o, this.renderer = n, this.scene = a, this.screen = l, this.texture = h, this.video = f, this.videoUrl = d, this.viewport = u, this.smoothedVelocity = 0, this.isActive = !0, this.isAnimationFinished = !1, this.isLoadingVideo = !1, this.isInViewport = !1, this.scrollTrigger = null, this.createProgram(), this.createMesh(), this.onResize(), this.setupScrollTrigger(), this.videoUrl && !this.video && this.loadRealVideo()
	}
	loadRealVideo() {
		this.isLoadingVideo || !this.videoUrl || (this.isLoadingVideo = !0, Xs.loadVideoLazy(this.videoUrl, this.item.dataset.id, e => {
			this.texture = e.texture, this.video = e.video, this.material && this.material.uniforms.tMap && (this.material.uniforms.tMap.value = this.texture), this.isInViewport ? this.playVideo() : this.pauseVideo(), this.isLoadingVideo = !1
		}))
	}
	setTexture(e, t = null) {
		this.texture = e, this.video = t, this.material && this.material.uniforms.tMap && (this.material.uniforms.tMap.value = e), t && this.isInViewport && this.playVideo()
	}
	playVideo() {
		this.video && (this.video.loop = !0, this.video.muted = !0, this.video.playsInline = !0, this.video.currentTime === 0 && (this.video.currentTime = .001), this.video.play().catch(e => {
			console.warn("Autoplay vidéo bloqué:", e)
		}))
	}
	pauseVideo() {
		this.video && this.video.pause()
	}
	createProgram() {
		this.material = new ns({
			vertexShader: Xa,
			fragmentShader: Ua,
			uniforms: {
				tMap: {
					value: this.texture
				},
				uAlpha: {
					value: 0
				},
				uVelocity: {
					value: 0
				},
				uTime: {
					value: 0
				},
				uViewportSizes: {
					value: new Ns(this.viewport.width, this.viewport.height)
				}
			},
			transparent: !0,
			side: Hs
		})
	}
	createMesh() {
		this.mesh = new as(this.geometry, this.material), this.scene.add(this.mesh)
	}
	show({
		delay: e = 0
	} = {}) {
		const t = k.timeline({
			delay: e,
			defaults: {
				ease: "expo.out",
				duration: 1
			},
			onComplete: i => {
				this.isAnimationFinished = !0
			}
		});
		return t.fromTo(this.material.uniforms.uAlpha, {
			value: 0
		}, {
			value: 1
		}, 0), t.from(this.mesh.position, {
			y: this.mesh.position.y - this.mesh.scale.y * .25
		}, 0), t
	}
	hide({
		delay: e = 0
	} = {}) {
		const t = k.timeline({
			delay: e,
			defaults: Ei
		});
		return t.to(this.material.uniforms.uAlpha, {
			value: 0
		}, 0), t
	}
	onResize({
		screen: e,
		viewport: t
	} = {}) {
		e && (this.screen = e), t && (this.viewport = t), this.createBounds()
	}
	createBounds() {
		const {
			top: e,
			left: t,
			width: i,
			height: s
		} = this.item.getBoundingClientRect();
		this.bounds = {
			top: e + window.pageYOffset,
			left: t,
			width: i,
			height: s
		}, this.updateScale(), this.updateX(), this.updateY()
	}
	updateScale() {
		this.height = this.bounds.height / window.innerHeight, this.width = this.bounds.width / window.innerWidth, this.mesh.scale.x = this.viewport.width * this.width, this.mesh.scale.y = this.viewport.height * this.height
	}
	updateX(e = 0) {
		this.x = (this.bounds.left + e) / window.innerWidth, this.mesh.position.x = -this.viewport.width / 2 + this.mesh.scale.x / 2 + this.x * this.viewport.width
	}
	updateY(e = 0) {
		this.y = (this.bounds.top - e) / window.innerHeight, this.mesh.position.y = this.viewport.height / 2 - this.mesh.scale.y / 2 - this.y * this.viewport.height
	}
	updateZ(e = 0) {
		this.z = Math.sin(1 + this.index), this.mesh.position.z = this.z
	}
	setupScrollTrigger() {
		this.item && (this.scrollTrigger = O.create({
			trigger: this.item,
			start: "0% 100%",
			end: "100% 0%",
			onEnter: () => this.onEnterViewport(),
			onEnterBack: () => this.onEnterViewport(),
			onLeave: () => this.onLeaveViewport(),
			onLeaveBack: () => this.onLeaveViewport()
		}))
	}
	onEnterViewport() {
		this.isInViewport = !0, this.playVideo()
	}
	onLeaveViewport() {
		this.isInViewport = !1, this.pauseVideo()
	}
	update(e, t) {
		if (e) {
			this.isAnimationFinished && this.updateY(e.scroll);
			const i = e.velocity;
			this.smoothedVelocity = Gr(this.smoothedVelocity, i, .1), this.material.uniforms.uVelocity.value = this.smoothedVelocity
		}
		this.material.uniforms.uTime.value = t
	}
	destroy() {
		k.killTweensOf(this.material?.uniforms?.uAlpha), k.killTweensOf(this.mesh?.position), this.mesh && (this.scene.remove(this.mesh), this.mesh = null), this.material && (this.material.uniforms?.tMap && (this.material.uniforms.tMap.value = null), this.material.dispose(), this.material = null), this.texture = null, this.scrollTrigger && (this.scrollTrigger.kill(), this.scrollTrigger = null), this.video && (this.video.pause(), this.video = null), this.item = null
	}
}
class Ka {
	constructor({
		gl: e,
		images: t,
		renderer: i,
		scene: s,
		screen: o,
		viewport: n,
		lenis: a
	}) {
		this.gl = e, this.images = t, this.renderer = i, this.scene = s, this.screen = o, this.viewport = n, this.group = new es, this.lenis = a, this.DOM = {
			element: document.querySelector(".work"),
			items: [...document.querySelectorAll(".work-case__gallery-preview")]
		}, this.createGeometry(), this.createMedias(), this.scene.add(this.group)
	}
	createGeometry() {
		this.geometry = new qs(1, 1, 1, 1)
	}
	createMedias() {
		!window.GL_TEXTURES || !window.GL_TEXTURES.length || !ho || !ho.works.length || (this.medias = this.DOM.items?.map((e, t) => {
			const i = e.dataset.id,
				s = window.GL_TEXTURES.find(o => o.id === i);
			return s ? new ja({
				geometry: this.geometry,
				gl: this.gl,
				index: t,
				item: e,
				length: this.DOM.items.length,
				renderer: this.renderer,
				scene: this.group,
				screen: this.screen,
				texture: s.texture,
				video: s.video || null,
				videoUrl: s.videoUrl || null,
				viewport: this.viewport
			}) : (console.warn(`Texture not found for item ${i}`), null)
		}))
	}
	show() {
		this.medias?.forEach((e, t) => {
			e.show({
				delay: .75 + t * .15
			})
		})
	}
	hide() {
		this.medias?.forEach((e, t) => {
			e.hide({
				delay: t * .01
			})
		})
	}
	onTouchDown(e) {}
	onTouchMove(e) {}
	onTouchUm(e) {}
	onWheel(e) {}
	onResize({
		screen: e,
		viewport: t
	}) {
		this.medias?.forEach(i => {
			i.onResize({
				screen: e,
				viewport: t
			})
		})
	}
	update(e, t) {
		this.medias?.forEach(i => i.update(e, t))
	}
	destroy() {
		this.medias?.forEach(e => {
			e?.destroy()
		}), this.medias = null, this.scene.remove(this.group), this.geometry && (this.geometry.dispose(), this.geometry = null), this.group = null
	}
}
class Za {
	constructor({
		template: e
	}) {
		this.template = e, this.clock = new Fn, this.createRenderer(), this.createCamera(), this.createScene(), this.onResize()
	}
	createRenderer() {
		this.renderer = new Wn({
			alpha: !0,
			antialias: !0
		}), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.setSize(window.innerWidth, window.innerHeight), this.gl = this.renderer.getContext(), document.body.appendChild(this.renderer.domElement)
	}
	createCamera() {
		this.camera = new Hn(45, window.innerWidth / window.innerHeight, .1, 1e3), this.camera.position.z = 20
	}
	createScene() {
		this.scene = new Nn
	}
	createIndexGallery() {
		this.indexGallery || (this.indexGallery = new Pa({
			gl: this.gl,
			renderer: this.renderer,
			scene: this.scene,
			screen: this.screen,
			viewport: this.viewport
		}), this.indexGallery.show())
	}
	destroyIndexGallery() {
		this.indexGallery && (this.indexGallery.destroy(), this.indexGallery = null)
	}
	createArchiveGallery() {
		this.archiveGallery || !ne.shouldEnableWebGL || (this.archiveGallery = new Fa({
			gl: this.gl,
			renderer: this.renderer,
			scene: this.scene,
			screen: this.screen,
			viewport: this.viewport
		}), this.archiveGallery.show())
	}
	destroyArchiveGallery() {
		!this.archiveGallery || !ne.shouldEnableWebGL || (this.archiveGallery.destroy(), this.archiveGallery = null)
	}
	createOverviewGallery() {
		this.overviewGallery || !ne.shouldEnableWebGL || (this.overviewGallery = new Ya({
			gl: this.gl,
			renderer: this.renderer,
			scene: this.scene,
			screen: this.screen,
			viewport: this.viewport
		}), this.overviewGallery.show())
	}
	destroyOverviewGallery() {
		!this.overviewGallery || !ne.shouldEnableWebGL || (this.overviewGallery.destroy(), this.overviewGallery = null)
	}
	createWorkGallery() {
		this.workGallery || !ne.shouldEnableWebGL || (this.workGallery = new Ka({
			gl: this.gl,
			renderer: this.renderer,
			scene: this.scene,
			screen: this.screen,
			viewport: this.viewport
		}), this.workGallery.show())
	}
	destroyWorkGallery() {
		!this.workGallery || !ne.shouldEnableWebGL || (this.workGallery.destroy(), this.workGallery = null)
	}
	onPreloaded() {
		this.onChangeEnd(this.template)
	}
	onChangeStart(e) {
		this.galleries.forEach(t => t?.hide())
	}
	onChangeEnd(e) {
		e === "index" || e === "fw" ? this.createIndexGallery() : this.destroyIndexGallery(), e === "archive" ? this.createArchiveGallery() : this.destroyArchiveGallery(), e === "work" || e === "project" ? (this.destroyWorkGallery(), this.createWorkGallery()) : this.destroyWorkGallery(), e === "overview" ? this.createOverviewGallery() : this.destroyOverviewGallery(), this.template = e
	}
	onTouchDown(e) {
		this.galleries.forEach(t => t?.onTouchDown(e))
	}
	onTouchMove(e) {
		this.galleries.forEach(t => t?.onTouchMove(e))
	}
	onTouchUp(e) {
		this.galleries.forEach(t => t?.onTouchUp(e))
	}
	onWheel(e) {
		this.galleries.forEach(t => t?.onWheel(e))
	}
	onResize() {
		this.screen = {
			height: window.innerHeight,
			width: window.innerWidth
		}, this.renderer.setSize(window.innerWidth, window.innerHeight), this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.updateProjectionMatrix();
		const e = this.camera.fov * (Math.PI / 180),
			t = 2 * Math.tan(e / 2) * this.camera.position.z,
			i = t * this.camera.aspect;
		this.viewport = {
			height: t,
			width: i
		}, this.galleries.forEach(s => s?.onResize({
			screen: this.screen,
			viewport: this.viewport
		}))
	}
	update(e) {
		const t = this.clock.getElapsedTime();
		this.galleries.forEach(i => i?.update(e, t)), this.renderer.render(this.scene, this.camera)
	}
	get galleries() {
		return [this.indexGallery, this.archiveGallery, this.workGallery, this.overviewGallery]
	}
	destroy() {
		this.destroyIndexGallery(), this.destroyArchiveGallery(), this.destroyOverviewGallery(), this.destroyWorkGallery(), this.renderer && (this.renderer.dispose(), this.renderer.forceContextLoss(), this.renderer.domElement.remove(), this.renderer = null), this.scene && (this.scene.traverse(e => {
			e.geometry && e.geometry.dispose(), e.material && (Array.isArray(e.material) ? e.material.forEach(t => t.dispose()) : e.material.dispose())
		}), this.scene = null), this.camera = null, this.clock = null, this.gl = null
	}
}
class Ja {
	constructor({
		template: e
	}) {
		this.DOM = {
			header: document.querySelector(".header"),
			headerNavigationLinks: [...document.querySelectorAll(".header-navigation__link")],
			dimensions: document.querySelector(".dimensions__text"),
			availability: document.querySelector(".availability"),
			availabilityIcon: document.querySelector(".availability__icon"),
			availabilityInfos: document.querySelector(".availability__infos-label"),
			cross: document.querySelector(".cross")
		}, this.DOM.headerNavigationLinks.length && (this.activeLinkClass = "header-navigation__link--active", this.template = e, this.onChange(e))
	}
	onChange(e) {
		this.template = e, this.DOM.headerNavigationLinks.forEach(t => {
			const i = t.getAttribute("href");
			t.classList.remove(this.activeLinkClass), i === "/" && (e === "index" || e === "fw") ? t.classList.add(this.activeLinkClass) : i === "/about" && e === "about" ? t.classList.add(this.activeLinkClass) : i === "/archive" && e === "archive" && t.classList.add(this.activeLinkClass), i && i.includes("/work/") && e.startsWith("work") && t.classList.add(this.activeLinkClass)
		})
	}
}
class Qa {
	constructor() {
		this.DOM = {
			el: document.querySelector(".dimensions"),
			text: document.querySelector(".dimensions__text")
		}, this.DOM.el && this.onResize()
	}
	onResize() {
		this.width = window.innerWidth, this.height = window.innerHeight, this.DOM.text.innerHTML = `${this.width}px × ${this.height}px`
	}
}
class el {
	constructor() {
		this.DOM = {
			availability: document.querySelector(".availability"),
			availabilityEmail: document.querySelector(".availability__email"),
			availabilityEmailText: document.querySelector(".availability__email-text"),
			availabilityEmailCopied: document.querySelector(".availability__email-copied")
		}, this.DOM.availability && (this.quickX = k.quickTo(this.DOM.availabilityEmail, "x", {
			duration: .5,
			ease: "power3.out"
		}), this.quickY = k.quickTo(this.DOM.availabilityEmail, "y", {
			duration: .5,
			ease: "power3.out"
		}), this.emailAddress = "hi@corentinbernadou.com", this.emailCopied = !1, this.addEventListeners())
	}
	showEmailElement(e) {
		ne.isMobile || (e?.preventDefault(), k.to(this.DOM.availabilityEmail, {
			opacity: 1,
			duration: .3,
			ease: "power2.out"
		}))
	}
	hideEmailElement(e) {
		ne.isMobile || (e?.preventDefault(), k.to(this.DOM.availabilityEmail, {
			opacity: 0,
			duration: .3,
			ease: "power2.out"
		}))
	}
	moveEmailElement(e) {
		if (!ne.isMobile && (e?.preventDefault(), this.DOM.availability && this.quickX && this.quickY)) {
			const t = this.DOM.availability.getBoundingClientRect(),
				i = e.clientX - t.right,
				s = e.clientY - t.top;
			this.quickX(i), this.quickY(s)
		}
	}
	async copyEmail(e) {
		if (!ne.isMobile) {
			e?.preventDefault();
			try {
				if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(this.emailAddress);
				else {
					const t = document.createElement("textarea");
					t.value = this.emailAddress, t.style.position = "absolute", t.style.left = "-999999px", t.style.top = "-999999px", document.body.appendChild(t), t.focus(), t.select();
					try {
						document.execCommand("copy")
					} catch (i) {
						console.error("Error during copy:", i)
					} finally {
						document.body.removeChild(t)
					}
				}
				this.emailCopied = !0, this.DOM.availabilityEmailText.style.display = "none", this.DOM.availabilityEmailCopied.style.display = "block", setTimeout(() => {
					this.emailCopied = !1, this.DOM.availabilityEmailText.style.display = "block", this.DOM.availabilityEmailCopied.style.display = "none"
				}, 2e3)
			} catch (t) {
				return console.error("Error during copy:", t)
			}
		}
	}
	addEventListeners() {
		this.copyEmail = this.copyEmail.bind(this), this.showEmailElement = this.showEmailElement.bind(this), this.hideEmailElement = this.hideEmailElement.bind(this), this.moveEmailElement = this.moveEmailElement.bind(this), this.DOM.availability.addEventListener("click", this.copyEmail), this.DOM.availability.addEventListener("mouseenter", this.showEmailElement), this.DOM.availability.addEventListener("mouseleave", this.hideEmailElement), this.DOM.availability.addEventListener("mousemove", this.moveEmailElement)
	}
	removeEventListeners() {
		this.DOM.availability.removeEventListener("click", this.copyEmail), this.DOM.availability.removeEventListener("mouseenter", this.showEmailElement), this.DOM.availability.removeEventListener("mouseleave", this.hideEmailElement), this.DOM.availability.removeEventListener("mousemove", this.moveEmailElement)
	}
	destroy() {
		this.removeEventListeners()
	}
}
class tl {
	constructor() {
		this.DOM = {
			element: document.querySelector(".grid-helper"),
			dimensions: document.querySelector(".dimensions")
		}, this.showGrid = !1, this.addEventListeners()
	}
	addEventListeners() {
		this.onDimensionsClick = this.onDimensionsClick.bind(this), this.DOM.dimensions.addEventListener("click", this.onDimensionsClick)
	}
	onKeyDown(e) {
		e.altKey && e.code === "KeyG" && (e?.preventDefault(), this.handleToggleGrid())
	}
	onDimensionsClick(e) {
		e?.preventDefault(), this.handleToggleGrid()
	}
	handleToggleGrid() {
		this.showGrid = !this.showGrid, this.showGrid ? this.DOM.element.style.opacity = 1 : this.DOM.element.style.opacity = 0
	}
}
class Wt {
	static CONFIG = Object.freeze({
		RULER_SIZE: 18,
		UNIT: 100,
		get RULER_CENTER() {
			return this.RULER_SIZE / 2
		},
		get RULER_HEIGHT() {
			return this.RULER_SIZE
		},
		get RULER_WIDTH() {
			return this.RULER_SIZE
		}
	});
	constructor() {
		this.DOM = {
			el: document.querySelector(".grid-rules"),
			horizontal: document.querySelector(".grid-rules__horizontal"),
			vertical: document.querySelector(".grid-rules__vertical"),
			dimensions: document.querySelector(".grid-rules__dimensions"),
			guides: document.querySelector(".grid-rules__guides")
		}, this.DOM.el && (this.guides = [], this.currentDraggingGuide = null, this.isDragging = !1, this.dragStartPosition = null, this.dragRect = null, this.proxyElements = [], this.rafId = null, this.pendingPosition = null, this.init())
	}
	init() {
		this.update()
	}
	createProxy(e) {
		const t = document.createElement("div"),
			i = e === "horizontal";
		return Object.assign(t.style, {
			position: "absolute",
			top: "0",
			left: "0",
			width: i ? "100%" : `${Wt.CONFIG.RULER_WIDTH}px`,
			height: i ? `${Wt.CONFIG.RULER_HEIGHT}px` : "100%",
			cursor: i ? "ns-resize" : "ew-resize",
			zIndex: "10",
			pointerEvents: "auto",
			backgroundColor: "transparent",
			willChange: "transform"
		}), t.dataset.type = e, this.handleProxyMouseDown = this.handleProxyMouseDown.bind(this), t.addEventListener("mousedown", this.handleProxyMouseDown), t.addEventListener("touchstart", this.handleProxyMouseDown, {
			passive: !1
		}), t
	}
	setupDraggables() {
		this.cleanupProxies();
		const e = this.createProxy("horizontal"),
			t = this.createProxy("vertical");
		this.DOM.el.appendChild(e), this.DOM.el.appendChild(t), this.proxyElements = [e, t]
	}
	cleanupProxies() {
		this.proxyElements.forEach(e => {
			e?.parentNode && (e.removeEventListener("mousedown", this.handleProxyMouseDown), e.removeEventListener("touchstart", this.handleProxyMouseDown), e.parentNode.removeChild(e))
		}), this.proxyElements = []
	}
	getEventCoordinates(e) {
		return e.touches && e.touches.length > 0 ? {
			x: e.touches[0].clientX,
			y: e.touches[0].clientY
		} : {
			x: e.clientX,
			y: e.clientY
		}
	}
	handleProxyMouseDown(e) {
		e.preventDefault(), e.stopPropagation();
		const t = e.target.dataset.type,
			i = this.getEventCoordinates(e);
		this.dragRect = this.DOM.el.getBoundingClientRect(), this.isDragging = !0, this.dragStartPosition = t === "horizontal" ? i.y - this.dragRect.top : i.x - this.dragRect.left;
		const s = Math.max(Wt.CONFIG.RULER_CENTER, this.dragStartPosition);
		this.currentDraggingGuide = this.createGuide(t, s, !0), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("touchmove", this.handleMouseMove, {
			passive: !1
		}), document.addEventListener("touchend", this.handleMouseUp), document.body.style.userSelect = "none", document.body.style.pointerEvents = "none"
	}
	clampPosition(e, t) {
		const i = t === "horizontal" ? window.innerHeight : window.innerWidth;
		return Math.max(0, Math.min(e, i))
	}
	getGuidePosition(e, t) {
		const i = e.style.transform || "",
			s = t === "horizontal" ? i.match(/translateY\(([^)]+)\)/) : i.match(/translateX\(([^)]+)\)/);
		return s ? parseFloat(s[1]) || 0 : parseFloat(e.dataset.position) || 0
	}
	updateGuidePosition(e, t, i) {
		i === "horizontal" ? e.style.transform = `translateY(${t}px)` : e.style.transform = `translateX(${t}px)`, e.dataset.position = t
	}
	handleMouseMove = e => {
		if (!this.isDragging || !this.currentDraggingGuide) return;
		e.preventDefault();
		const t = this.currentDraggingGuide.dataset.type,
			i = this.getEventCoordinates(e),
			s = t === "horizontal" ? i.y - this.dragRect.top : i.x - this.dragRect.left,
			o = this.clampPosition(s, t);
		this.pendingPosition = o, this.rafId || (this.rafId = requestAnimationFrame(() => {
			this.pendingPosition !== null && this.currentDraggingGuide && this.updateGuidePosition(this.currentDraggingGuide, this.pendingPosition, t), this.rafId = null, this.pendingPosition = null
		}))
	};
	isValidPosition(e, t) {
		const i = t === "horizontal" ? window.innerHeight : window.innerWidth;
		return e >= 0 && e <= i
	}
	finalizeGuide(e, t, i) {
		if (!this.isValidPosition(t, i)) {
			this.removeGuide(e);
			return
		}
		const s = this.guides.findIndex(o => o.element === e);
		s !== -1 && (this.guides[s].position = t, e.classList.remove("grid-rules__guide--temp"), this.makeGuideDraggable(e))
	}
	handleMouseUp = e => {
		if (this.isDragging) {
			if (e.preventDefault(), this.isDragging = !1, this.pendingPosition !== null && this.currentDraggingGuide) {
				this.rafId && cancelAnimationFrame(this.rafId);
				const t = this.currentDraggingGuide.dataset.type;
				this.updateGuidePosition(this.currentDraggingGuide, this.pendingPosition, t)
			}
			if (document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("touchmove", this.handleMouseMove), document.removeEventListener("touchend", this.handleMouseUp), document.body.style.userSelect = "", document.body.style.pointerEvents = "", this.dragRect = null, this.rafId = null, this.pendingPosition = null, this.currentDraggingGuide) {
				const t = parseFloat(this.currentDraggingGuide.dataset.position),
					i = this.currentDraggingGuide.dataset.type;
				this.finalizeGuide(this.currentDraggingGuide, t, i), this.currentDraggingGuide = null
			}
		}
	};
	generateRulerSVG(e, t, i) {
		const s = Wt.CONFIG.UNIT,
			o = i === "horizontal";
		let n = "<defs></defs>";
		n += `<rect width="${e}" height="${t}" fill="none" class="grid-rules-drag-area" data-type="${i}"/>`;
		const a = o ? e : t;
		for (let l = 0; l <= a; l += s) {
			const h = l % s === 0,
				f = h ? 7 : 4;
			o ? (n += `<line x1="${l}" y1="0" x2="${l}" y2="${f}" class="grid-rules-line"/>`, h && (n += `<text x="${l===0?10:l}" y="16" text-anchor="middle" class="grid-rules-text">${l}</text>`)) : (n += `<line x1="0" y1="${l}" x2="${f}" y2="${l}" class="grid-rules-line"/>`, h && l > 0 && (n += `<text x="20" y="${l+4}" text-anchor="middle" class="grid-rules-text" transform="rotate(-90 16 ${l+4})">${l}</text>`))
		}
		for (let l = 0; l <= a; l += 10)
			if (l % s !== 0) {
				const h = l % (s / 2) === 0 ? 5 : 2;
				o ? n += `<line x1="${l}" y1="0" x2="${l}" y2="${h}" class="grid-rules-line" opacity="0.5"/>` : n += `<line x1="0" y1="${l}" x2="${h}" y2="${l}" class="grid-rules-line" opacity="0.5"/>`
			} return n
	}
	createHorizontalRuler() {
		const e = window.innerWidth,
			t = Wt.CONFIG.RULER_HEIGHT,
			i = this.generateRulerSVG(e, t, "horizontal");
		this.DOM.horizontal.setAttribute("viewBox", `0 0 ${e} ${t}`), this.DOM.horizontal.innerHTML = i, this.DOM.horizontal.style.pointerEvents = "none"
	}
	createVerticalRuler() {
		const e = window.innerHeight,
			t = Wt.CONFIG.RULER_WIDTH,
			i = this.generateRulerSVG(t, e, "vertical");
		this.DOM.vertical.setAttribute("viewBox", `0 0 ${t} ${e}`), this.DOM.vertical.innerHTML = i, this.DOM.vertical.style.pointerEvents = "none"
	}
	createGuide(e, t, i = !1) {
		const s = document.createElement("div");
		s.className = `grid-rules__guide grid-rules__guide--${e}`, i && s.classList.add("grid-rules__guide--temp"), s.dataset.type = e, s.dataset.position = t, s.style.willChange = "transform";
		const o = document.createElement("div");
		return o.className = "grid-rules__guide__inner", s.appendChild(o), this.updateGuidePosition(s, t, e), s.addEventListener("dblclick", n => {
			n.stopPropagation(), this.removeGuide(s)
		}), this.DOM.guides.appendChild(s), this.guides.push({
			element: s,
			type: e,
			position: t
		}), i || this.makeGuideDraggable(s), s
	}
	makeGuideDraggable(e) {
		const t = this.guides.find(c => c.element === e);
		if (!t) return;
		let i = !1,
			s = 0,
			o = 0,
			n = null,
			a = null,
			l = null;
		const h = c => {
				c.preventDefault(), c.stopPropagation(), i = !0;
				const g = t.type,
					v = this.getEventCoordinates(c);
				n = this.DOM.el.getBoundingClientRect(), g === "horizontal" ? (s = this.getGuidePosition(e, g), o = v.y - n.top) : (s = this.getGuidePosition(e, g), o = v.x - n.left), document.body.style.userSelect = "none", document.body.style.pointerEvents = "none", document.addEventListener("mousemove", d), document.addEventListener("mouseup", u), document.addEventListener("touchmove", d, {
					passive: !1
				}), document.addEventListener("touchend", u)
			},
			f = () => {
				if (l === null) return;
				const c = t.type,
					g = l;
				l = null, this.updateGuidePosition(e, g, c), t.position = g, a = null
			},
			d = c => {
				if (!i) return;
				c.preventDefault();
				const g = t.type,
					v = this.getEventCoordinates(c);
				let w;
				if (g === "horizontal") {
					const y = v.y - n.top;
					w = s + (y - o)
				} else {
					const y = v.x - n.left;
					w = s + (y - o)
				}
				l = this.clampPosition(w, g), a || (a = requestAnimationFrame(f))
			},
			u = c => {
				i && (c.preventDefault(), i = !1, l !== null && (a && cancelAnimationFrame(a), f()), document.body.style.userSelect = "", document.body.style.pointerEvents = "", document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", u), document.removeEventListener("touchmove", d), document.removeEventListener("touchend", u), n = null, a = null, l = null)
			};
		e.addEventListener("mousedown", h), t.mouseHandlers = {
			down: h,
			move: d,
			up: u
		}
	}
	removeGuide(e) {
		const t = this.guides.findIndex(i => i.element === e);
		if (t !== -1) {
			const i = this.guides[t];
			i.mouseHandlers && (e.removeEventListener("mousedown", i.mouseHandlers.down), document.removeEventListener("mousemove", i.mouseHandlers.move), document.removeEventListener("mouseup", i.mouseHandlers.up), document.removeEventListener("touchmove", i.mouseHandlers.move), document.removeEventListener("touchend", i.mouseHandlers.up)), e.remove(), this.guides.splice(t, 1)
		}
	}
	update() {
		this.cleanupProxies(), this.createHorizontalRuler(), this.createVerticalRuler(), this.updateGuides(), this.setupDraggables()
	}
	updateGuides() {
		this.guides.forEach(e => {
			this.updateGuidePosition(e.element, e.position, e.type)
		})
	}
	onResize() {
		this.guides = this.guides.filter(e => e.type === "horizontal" && e.position > window.innerHeight || e.type === "vertical" && e.position > window.innerWidth ? (e.element.remove(), !1) : !0), this.update()
	}
	destroy() {
		this.isDragging && (document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("touchmove", this.handleMouseMove), document.removeEventListener("touchend", this.handleMouseUp), this.rafId && cancelAnimationFrame(this.rafId)), this.cleanupProxies(), this.guides.forEach(e => {
			e.mouseHandlers && (e.element.removeEventListener("mousedown", e.mouseHandlers.down), document.removeEventListener("mousemove", e.mouseHandlers.move), document.removeEventListener("mouseup", e.mouseHandlers.up), document.removeEventListener("touchmove", e.mouseHandlers.move), document.removeEventListener("touchend", e.mouseHandlers.up)), e.element.remove()
		}), this.guides = []
	}
}
k.registerPlugin(Dn);
class il {
	constructor({
		gridRules: e
	}) {
		this.DOM = {
			cross: document.querySelector(".cross"),
			circle: document.querySelector(".cross circle")
		}, !(!this.DOM.cross || !e) && (this.gridRules = e, this.isActive = !1, k.set(this.DOM.circle, {
			drawSVG: "0% 0%",
			transformOrigin: "50% 50%",
			rotate: -90
		}), this.init())
	}
	init() {
		this.addEventListeners()
	}
	isElementFixed(e) {
		let t = e;
		for (; t && t !== document.body;) {
			if (window.getComputedStyle(t).position === "fixed") return !0;
			t = t.parentElement
		}
		return !1
	}
	createRulesForElements(e = !0) {
		const t = document.querySelectorAll("[data-rules]");
		if (!t.length) return;
		const i = [];
		t.forEach(s => {
			const o = s.getBoundingClientRect(),
				n = this.isElementFixed(s),
				a = n ? 0 : window.scrollY || window.pageYOffset,
				l = n ? 0 : window.scrollX || window.pageXOffset,
				h = parseFloat(getComputedStyle(document.documentElement).fontSize) * .5,
				f = o.top + a - h,
				d = o.bottom + a - h,
				u = o.left + l - h,
				c = o.right + l - h;
			i.push(this.gridRules.createGuide("horizontal", f, !1)), i.push(this.gridRules.createGuide("horizontal", d, !1)), i.push(this.gridRules.createGuide("vertical", u, !1)), i.push(this.gridRules.createGuide("vertical", c, !1))
		}), e && this.animateRules(i)
	}
	animateRules(e) {
		e.forEach((t, i) => {
			const s = t.dataset.type,
				o = t.querySelector(".grid-rules__guide__inner");
			o && (s === "horizontal" ? (k.set(o, {
				transformOrigin: "left center"
			}), k.fromTo(o, {
				scaleX: 0
			}, {
				scaleX: 1,
				duration: .6,
				ease: "power3.out",
				delay: i * .08
			})) : s === "vertical" && (k.set(o, {
				transformOrigin: "center top"
			}), k.fromTo(o, {
				scaleY: 0
			}, {
				scaleY: 1,
				duration: .6,
				ease: "power3.out",
				delay: i * .08
			})))
		})
	}
	animateRulesOut(e) {
		return new Promise(t => {
			const i = [];
			e.forEach((s, o) => {
				const n = s.type,
					a = s.element.querySelector(".grid-rules__guide__inner");
				if (a) {
					if (n === "horizontal") {
						const l = k.to(a, {
							scaleX: 0,
							duration: .6,
							ease: "power3.out",
							delay: o * .08,
							transformOrigin: "bottom right"
						});
						i.push(l)
					} else if (n === "vertical") {
						const l = k.to(a, {
							scaleY: 0,
							duration: .6,
							ease: "power3.out",
							delay: o * .08,
							transformOrigin: "bottom left"
						});
						i.push(l)
					}
				}
			}), i.length > 0 ? Promise.all(i.map(s => s.then())).then(t) : t()
		})
	}
	async toggleRules() {
		this.isActive ? this.hideRules() : this.showRules()
	}
	async showRules() {
		this.animateCircleOUT(), this.createRulesForElements(), this.isActive = !0
	}
	async hideRules() {
		const e = [...this.gridRules.guides];
		this.animateCircleIN(), await this.animateRulesOut(e), e.forEach(t => {
			this.gridRules.removeGuide(t.element)
		}), this.isActive = !1
	}
	handleClick = e => {
		e.preventDefault(), this.toggleRules()
	};
	animateCircleOUT() {
		const e = k.timeline({
			defaults: {
				ease: "power3.out",
				duration: .5
			}
		});
		return e.to(this.DOM.cross, {
			scale: .75
		}, 0), e.fromTo(this.DOM.circle, {
			drawSVG: "0% 0%"
		}, {
			drawSVG: "0% 100%"
		}, 0), e
	}
	animateCircleIN() {
		const e = k.timeline({
			defaults: {
				ease: "power3.out",
				duration: .5
			}
		});
		return e.to(this.DOM.cross, {
			scale: 1
		}, 0), e.to(this.DOM.circle, {
			drawSVG: "100% 100%"
		}, 0), e
	}
	clearRules() {
		this.gridRules.guides.length > 0 && ([...this.gridRules.guides].forEach(t => {
			this.gridRules.removeGuide(t.element)
		}), this.isActive = !1, this.animateCircleIN())
	}
	onResize() {
		if (!this.isActive || this.gridRules.guides.length === 0) return;
		[...this.gridRules.guides].forEach(t => {
			this.gridRules.removeGuide(t.element)
		}), this.createRulesForElements(!1)
	}
	addEventListeners() {
		this.DOM.cross.addEventListener("click", this.handleClick)
	}
	destroy() {
		this.DOM.cross && this.DOM.cross.removeEventListener("click", this.handleClick), this.clearRules()
	}
}

function hs(r, {
	slug: e,
	lenis: t,
	onComplete: i
} = {}) {
	return new Promise(s => {
		if (!r) {
			i?.(), s();
			return
		}
		const o = k.timeline({
			onStart: n => {
				da(t)
			},
			defaults: Ei
		});
		return o.to(r, {
			opacity: 0
		}, 0), o.add(n => {
			i?.(), s()
		}, .4), o
	})
}

function cs(r, {
	slug: e
} = {}) {
	return new Promise(t => {
		const i = k.timeline({
			onStart: s => {
				ua(e), window.scrollTo(0, 0)
			},
			onComplete: s => {
				t()
			}
		});
		return i.set(r, {
			opacity: 1,
			clearProps: "opacity"
		}, 0), document.documentElement.style.backgroundColor !== _r[e] && i.to(document.documentElement, {
			"--document-background-color": _r[e]
		}, 0), i.to(".cross", {
			opacity: () => e === "fw" || e === "work" ? 0 : 1,
			color: () => e === "fw" || e === "work" ? "#CACACA" : un[e],
			ease: "expo.out",
			duration: .35
		}, 0), i
	})
}
k.registerPlugin(O);

function sl(r, {
	slug: e,
	lenis: t
}) {
	return new Promise(i => {
		if (!r) {
			i();
			return
		}
		const s = k.timeline({
			defaults: {
				ease: "power2.inOut",
				duration: .6
			},
			onComplete: () => {
				ls(t), i()
			}
		});
		return s.add(o => cs(r.element, {
			slug: e
		}), 0), s.set(r.fwTitleVector, {
			opacity: 1,
			clearProps: "opacity"
		}, 0), s.fromTo(r.fwTitleVector, {
			opacity: 0
		}, {
			opacity: 1,
			duration: .75,
			ease: "power4.inOut",
			clearProps: "opacity"
		}, 0), s.to(r.fwTitlesItems0, {
			y: 0,
			stagger: .075,
			duration: .5,
			ease: "expo.out",
			clearProps: "y"
		}, .5), s.to(r.fwTitlesItems1, {
			y: 0,
			stagger: .075,
			duration: .5,
			ease: "expo.out",
			clearProps: "y"
		}, .6), window.innerWidth < 1024 ? (s.set(r.fwWorks, {
			x: 0,
			scale: 1
		}, 0), s.fromTo(r.fwWorksLinksChildren.slice(0, 5), {
			yPercent: 100
		}, {
			yPercent: 0,
			stagger: .085,
			duration: .75,
			ease: "expo.out",
			clearProps: "yPercent"
		}, 0)) : s.to(r.fwWorks, {
			x: 0,
			scale: 1,
			transformOrigin: "top right",
			opacity: 1,
			stagger: .015,
			duration: 1.5,
			ease: "expo.inOut",
			clearProps: "x,opacity"
		}, 0), s
	})
}
class po {
	constructor({
		lenis: e,
		canvas: t
	}) {
		this.id = "fw", this.selector = ".fw", this.lenis = e, this.canvas = t, this.ww = window.innerWidth, this.wh = window.innerHeight, this.handleMouseEnter = this.handleMouseEnter.bind(this), this.handleMouseLeave = this.handleMouseLeave.bind(this), this.handleContainerMouseLeave = this.handleContainerMouseLeave.bind(this)
	}
	create() {
		this.DOM = {
			element: document.querySelector(this.selector),
			fwTitleVector: document.querySelector(".fw-title"),
			fwTitlesItems0: [...document.querySelectorAll(".fw-titles__item:nth-child(1) span")],
			fwTitlesItems1: [...document.querySelectorAll(".fw-titles__item:nth-child(2) span")],
			fwTitlesVectors: [...document.querySelectorAll(".fw-titles__vector")],
			fwWorksContainer: document.querySelector(".fw-works"),
			fwWorks: [...document.querySelectorAll(".fw-works__items:nth-child(1) .fw-work")],
			fwWorksLinks: [...document.querySelectorAll(".fw-work__link")],
			fwWorksLinksChildren: [...document.querySelectorAll(".fw-work__link span")]
		}, this.DOM.element && this.addEventListeners()
	}
	show() {
		return sl(this.DOM, {
			slug: this.id,
			lenis: this.lenis
		})
	}
	hide() {
		return hs(this.DOM.element, {
			slug: this.id,
			lenis: this.lenis,
			onComplete: () => this.destroy()
		})
	}
	onResize() {
		this.ww = window.innerWidth, this.wh = window.innerHeight, this.ww >= 768 && (this.lenis.options.infinite = !0, this.lenis.options.syncTouch = !0)
	}
	handleMouseEnter(e) {
		if (ne.isMobile) return;
		e?.preventDefault();
		const t = e.currentTarget.dataset.slug;
		this.canvas?.indexGallery?.onMouseEnter(t), this.ww >= 1024 && k.to(e.currentTarget.children[0], {
			xPercent: 10,
			ease: "power2.out",
			duration: .4
		})
	}
	handleMouseLeave(e) {
		ne.isMobile || (e?.preventDefault(), this.ww >= 1024 && k.to(e.currentTarget.children[0], {
			xPercent: 0,
			ease: "power2.out",
			duration: .4
		}))
	}
	handleContainerMouseLeave(e) {
		ne.isMobile || (e?.preventDefault(), this.canvas?.indexGallery?.onMouseLeave())
	}
	addEventListeners() {
		!this.DOM.fwWorksLinks.length || !this.DOM.fwWorksContainer || (this.DOM.fwWorksLinks.forEach(e => {
			e.addEventListener("mouseenter", this.handleMouseEnter), e.addEventListener("mouseleave", this.handleMouseLeave)
		}), this.DOM.fwWorksContainer.addEventListener("mouseleave", this.handleContainerMouseLeave))
	}
	removeEventListeners() {
		!this.DOM.fwWorksLinks.length || !this.DOM.fwWorksContainer || (this.DOM.fwWorksLinks.forEach(e => {
			e.removeEventListener("mouseenter", this.handleMouseEnter), e.removeEventListener("mouseleave", this.handleMouseLeave)
		}), this.DOM.fwWorksContainer.removeEventListener("mouseleave", this.handleContainerMouseLeave))
	}
	update() {}
	destroy() {
		this.removeEventListeners(), this.lenis.options.infinite = !1, this.lenis.options.syncTouch = !1
	}
}
let Oi, mi, fo = typeof Symbol == "function" ? Symbol() : "_split",
	xr, rl = () => xr || rt.register(window.gsap),
	mo = typeof Intl < "u" && "Segmenter" in Intl ? new Intl.Segmenter : 0,
	rs = r => typeof r == "string" ? rs(document.querySelectorAll(r)) : "length" in r ? Array.from(r).reduce((e, t) => (typeof t == "string" ? e.push(...rs(t)) : e.push(t), e), []) : [r],
	go = r => rs(r).filter(e => e instanceof HTMLElement),
	kr = [],
	nr = function () {},
	ol = {
		add: r => r()
	},
	nl = /\s+/g,
	vo = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"),
	Bs = {
		left: 0,
		top: 0,
		width: 0,
		height: 0
	},
	al = (r, e) => {
		for (; ++e < r.length && r[e] === Bs;);
		return r[e] || Bs
	},
	wo = ({
		element: r,
		html: e,
		ariaL: t,
		ariaH: i
	}) => {
		r.innerHTML = e, t ? r.setAttribute("aria-label", t) : r.removeAttribute("aria-label"), i ? r.setAttribute("aria-hidden", i) : r.removeAttribute("aria-hidden")
	},
	yo = (r, e) => {
		if (e) {
			let t = new Set(r.join("").match(e) || kr),
				i = r.length,
				s, o, n, a;
			if (t.size)
				for (; --i > -1;) {
					o = r[i];
					for (n of t)
						if (n.startsWith(o) && n.length > o.length) {
							for (s = 0, a = o; n.startsWith(a += r[i + ++s]) && a.length < n.length;);
							if (s && a.length === n.length) {
								r[i] = n, r.splice(i + 1, s);
								break
							}
						}
				}
		}
		return r
	},
	_o = r => window.getComputedStyle(r).display === "inline" && (r.style.display = "inline-block"),
	gi = (r, e, t) => e.insertBefore(typeof r == "string" ? document.createTextNode(r) : r, t),
	Mr = (r, e, t) => {
		let i = e[r + "sClass"] || "",
			{
				tag: s = "div",
				aria: o = "auto",
				propIndex: n = !1
			} = e,
			a = r === "line" ? "block" : "inline-block",
			l = i.indexOf("++") > -1,
			h = f => {
				let d = document.createElement(s),
					u = t.length + 1;
				return i && (d.className = i + (l ? " " + i + u : "")), n && d.style.setProperty("--" + r, u + ""), o !== "none" && d.setAttribute("aria-hidden", "true"), s !== "span" && (d.style.position = "relative", d.style.display = a), d.textContent = f, t.push(d), d
			};
		return l && (i = i.replace("++", "")), h.collection = t, h
	},
	ll = (r, e, t, i) => {
		let s = Mr("line", t, i),
			o = window.getComputedStyle(r).textAlign || "left";
		return (n, a) => {
			let l = s("");
			for (l.style.textAlign = o, r.insertBefore(l, e[n]); n < a; n++) l.appendChild(e[n]);
			l.normalize()
		}
	},
	pn = (r, e, t, i, s, o, n, a, l, h) => {
		var f;
		let d = Array.from(r.childNodes),
			u = 0,
			{
				wordDelimiter: c,
				reduceWhiteSpace: g = !0,
				prepareText: v
			} = e,
			w = r.getBoundingClientRect(),
			p = w,
			y = !g && window.getComputedStyle(r).whiteSpace.substring(0, 3) === "pre",
			x = 0,
			b = t.collection,
			A, E, S, C, P, M, G, L, I, H, j, K, z, J, W, m, X, he;
		for (typeof c == "object" ? (S = c.delimiter || c, E = c.replaceWith || "") : E = c === "" ? "" : c || " ", A = E !== " "; u < d.length; u++)
			if (C = d[u], C.nodeType === 3) {
				for (W = C.textContent || "", g ? W = W.replace(nl, " ") : y && (W = W.replace(/\n/g, E + `
`)), v && (W = v(W, r)), C.textContent = W, P = E || S ? W.split(S || E) : W.match(a) || kr, X = P[P.length - 1], L = A ? X.slice(-1) === " " : !X, X || P.pop(), p = w, G = A ? P[0].charAt(0) === " " : !P[0], G && gi(" ", r, C), P[0] || P.shift(), yo(P, l), o && h || (C.textContent = ""), I = 1; I <= P.length; I++)
					if (m = P[I - 1], !g && y && m.charAt(0) === `
` && ((f = C.previousSibling) == null || f.remove(), gi(document.createElement("br"), r, C), m = m.slice(1)), !g && m === "") gi(E, r, C);
					else if (m === " ") r.insertBefore(document.createTextNode(" "), C);
				else {
					if (A && m.charAt(0) === " " && gi(" ", r, C), x && I === 1 && !G && b.indexOf(x.parentNode) > -1 ? (M = b[b.length - 1], M.appendChild(document.createTextNode(i ? "" : m))) : (M = t(i ? "" : m), gi(M, r, C), x && I === 1 && !G && M.insertBefore(x, M.firstChild)), i)
						for (j = mo ? yo([...mo.segment(m)].map(re => re.segment), l) : m.match(a) || kr, he = 0; he < j.length; he++) M.appendChild(j[he] === " " ? document.createTextNode(" ") : i(j[he]));
					if (o && h) {
						if (W = C.textContent = W.substring(m.length + 1, W.length), H = M.getBoundingClientRect(), H.top > p.top && H.left <= p.left) {
							for (K = r.cloneNode(), z = r.childNodes[0]; z && z !== M;) J = z, z = z.nextSibling, K.appendChild(J);
							r.parentNode.insertBefore(K, r), s && _o(K)
						}
						p = H
					}(I < P.length || L) && gi(I >= P.length ? " " : A && m.slice(-1) === " " ? " " + E : E, r, C)
				}
				r.removeChild(C), x = 0
			} else C.nodeType === 1 && (n && n.indexOf(C) > -1 ? (b.indexOf(C.previousSibling) > -1 && b[b.length - 1].appendChild(C), x = C) : (pn(C, e, t, i, s, o, n, a, l, !0), x = 0), s && _o(C))
	};
const fn = class mn {
	constructor(e, t) {
		this.isSplit = !1, rl(), this.elements = go(e), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = t, this.elements.forEach(n => {
			var a;
			t.overwrite !== !1 && ((a = n[fo]) == null || a._data.orig.filter(({
				element: l
			}) => l === n).forEach(wo)), n[fo] = this
		}), this._split = () => this.isSplit && this.split(this.vars);
		let i = [],
			s, o = () => {
				let n = i.length,
					a;
				for (; n--;) {
					a = i[n];
					let l = a.element.offsetWidth;
					if (l !== a.width) {
						a.width = l, this._split();
						return
					}
				}
			};
		this._data = {
			orig: i,
			obs: typeof ResizeObserver < "u" && new ResizeObserver(() => {
				clearTimeout(s), s = setTimeout(o, 200)
			})
		}, nr(this), this.split(t)
	}
	split(e) {
		return (this._ctx || ol).add(() => {
			this.isSplit && this.revert(), this.vars = e = e || this.vars || {};
			let {
				type: t = "chars,words,lines",
				aria: i = "auto",
				deepSlice: s = !0,
				smartWrap: o,
				onSplit: n,
				autoSplit: a = !1,
				specialChars: l,
				mask: h
			} = this.vars, f = t.indexOf("lines") > -1, d = t.indexOf("chars") > -1, u = t.indexOf("words") > -1, c = d && !u && !f, g = l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l), v = g ? new RegExp(g.source + "|" + vo.source, "gu") : vo, w = !!e.ignore && go(e.ignore), {
				orig: p,
				animTime: y,
				obs: x
			} = this._data, b;
			(d || u || f) && (this.elements.forEach((A, E) => {
				p[E] = {
					element: A,
					html: A.innerHTML,
					ariaL: A.getAttribute("aria-label"),
					ariaH: A.getAttribute("aria-hidden")
				}, i === "auto" ? A.setAttribute("aria-label", (A.textContent || "").trim()) : i === "hidden" && A.setAttribute("aria-hidden", "true");
				let S = [],
					C = [],
					P = [],
					M = d ? Mr("char", e, S) : null,
					G = Mr("word", e, C),
					L, I, H, j;
				if (pn(A, e, G, M, c, s && (f || c), w, v, g, !1), f) {
					let K = rs(A.childNodes),
						z = ll(A, K, e, P),
						J, W = [],
						m = 0,
						X = K.map(ae => ae.nodeType === 1 ? ae.getBoundingClientRect() : Bs),
						he = Bs,
						re;
					for (L = 0; L < K.length; L++) J = K[L], J.nodeType === 1 && (J.nodeName === "BR" ? ((!L || K[L - 1].nodeName !== "BR") && (W.push(J), z(m, L + 1)), m = L + 1, he = al(X, L)) : (re = X[L], L && re.top > he.top && re.left < he.left + he.width - 1 && (z(m, L), m = L), he = re));
					m < L && z(m, L), W.forEach(ae => {
						var Te;
						return (Te = ae.parentNode) == null ? void 0 : Te.removeChild(ae)
					})
				}
				if (!u) {
					for (L = 0; L < C.length; L++)
						if (I = C[L], d || !I.nextSibling || I.nextSibling.nodeType !== 3)
							if (o && !f) {
								for (H = document.createElement("span"), H.style.whiteSpace = "nowrap"; I.firstChild;) H.appendChild(I.firstChild);
								I.replaceWith(H)
							} else I.replaceWith(...I.childNodes);
					else j = I.nextSibling, j && j.nodeType === 3 && (j.textContent = (I.textContent || "") + (j.textContent || ""), I.remove());
					C.length = 0, A.normalize()
				}
				this.lines.push(...P), this.words.push(...C), this.chars.push(...S)
			}), h && this[h] && this.masks.push(...this[h].map(A => {
				let E = A.cloneNode();
				return A.replaceWith(E), E.appendChild(A), A.className && (E.className = A.className.trim() + "-mask"), E.style.overflow = "clip", E
			}))), this.isSplit = !0, mi && f && (a ? mi.addEventListener("loadingdone", this._split) : mi.status === "loading" && console.warn("SplitText called before fonts loaded")), (b = n && n(this)) && b.totalTime && (this._data.anim = y ? b.totalTime(y) : b), f && a && this.elements.forEach((A, E) => {
				p[E].width = A.offsetWidth, x && x.observe(A)
			})
		}), this
	}
	kill() {
		let {
			obs: e
		} = this._data;
		e && e.disconnect(), mi?.removeEventListener("loadingdone", this._split)
	}
	revert() {
		var e, t;
		if (this.isSplit) {
			let {
				orig: i,
				anim: s
			} = this._data;
			this.kill(), i.forEach(wo), this.chars.length = this.words.length = this.lines.length = i.length = this.masks.length = 0, this.isSplit = !1, s && (this._data.animTime = s.totalTime(), s.revert()), (t = (e = this.vars).onRevert) == null || t.call(e, this)
		}
		return this
	}
	static create(e, t) {
		return new mn(e, t)
	}
	static register(e) {
		Oi = Oi || e || window.gsap, Oi && (rs = Oi.utils.toArray, nr = Oi.core.context || nr), !xr && window.innerWidth > 0 && (mi = document.fonts, xr = !0)
	}
};
fn.version = "3.14.2";
let rt = fn;
k.registerPlugin(rt, O);

function hl(r, {
	slug: e,
	lenis: t
}) {
	return new Promise(i => {
		if (!r.element) {
			i();
			return
		}
		const s = [];
		r.biographyParagraphs && r.biographyParagraphs.length && r.biographyParagraphs.forEach(a => {
			const l = new rt(a, {
					type: "lines",
					linesClass: "o-hidden",
					reduceWhiteSpace: !1,
					aria: !1
				}),
				h = new rt(l.lines, {
					type: "lines",
					linesClass: "content-block__up",
					reduceWhiteSpace: !1,
					aria: !1
				});
			s.push({
				parent: l,
				child: h
			})
		});
		const o = r.element.querySelectorAll(".content-block__up"),
			n = k.timeline({
				defaults: {
					ease: "power3.out"
				},
				onComplete: () => {
					ls(t), s.forEach(a => {
						a.child.revert(), a.parent.revert()
					}), i()
				}
			});
		return n.add(a => cs(r.element, {
			slug: e
		}), 0), n.fromTo(r.title, {
			opacity: 0
		}, {
			opacity: 1,
			duration: .7,
			ease: "power3.inOut",
			clearProps: "opacity"
		}, 0), n.fromTo(o, {
			yPercent: 100
		}, {
			yPercent: 0,
			stagger: .03,
			duration: 1,
			ease: "expo.out",
			clearProps: "yPercent"
		}, 0), n
	})
}
class cl {
	constructor() {
		this.DOM = {
			display: document.querySelector(".locale-time__display span.content-block__up")
		}, this.intervalId = null, this.start()
	}
	updateLocaleTime() {
		const e = new Date,
			t = new Intl.DateTimeFormat("fr-FR", {
				timeZone: "Europe/Paris",
				hour: "2-digit",
				minute: "2-digit",
				hour12: !1
			});
		this.DOM.display.innerHTML = t.format(e)
	}
	start() {
		this.intervalId === null && (this.updateLocaleTime(), this.intervalId = setInterval(() => this.updateLocaleTime(), 500))
	}
	stop() {
		this.intervalId !== null && (clearInterval(this.intervalId), this.intervalId = null)
	}
	destroy() {
		this.stop()
	}
}
class ul {
	constructor({
		lenis: e,
		canvas: t
	}) {
		this.id = "about", this.selector = ".about", this.lenis = e, this.canvas = t
	}
	create() {
		this.DOM = {
			element: document.querySelector(this.selector),
			title: document.querySelector(".about-title"),
			biographyParagraphs: [...document.querySelectorAll(".content-block--biography p")],
			blocks: [...document.querySelectorAll(".content-block")]
		}, this.DOM.element && this.createLocaleTime()
	}
	show() {
		return hl(this.DOM, {
			slug: this.id,
			lenis: this.lenis
		})
	}
	hide() {
		return hs(this.DOM.element, {
			slug: this.id,
			lenis: this.lenis,
			onComplete: () => this.destroy()
		})
	}
	createLocaleTime() {
		this.localeTime = new cl
	}
	onResize() {}
	addEventListeners() {}
	removeEventListeners() {}
	update() {}
	destroy() {
		this.localeTime?.destroy(), this.localeTime = null, this.DOM = null
	}
}
k.registerPlugin(rt, O);

function dl(r, {
	slug: e,
	lenis: t
}) {
	return new Promise(i => {
		if (!r.element) {
			i();
			return
		}
		const s = [];
		if (r.archiveHeaderDescription) {
			const a = new rt(r.archiveHeaderDescription, {
					type: "lines",
					linesClass: "o-hidden",
					reduceWhiteSpace: !1,
					aria: !1
				}),
				l = new rt(a.lines, {
					type: "lines",
					linesClass: "archive-header__description__up",
					reduceWhiteSpace: !1,
					aria: !1
				});
			s.push({
				parent: a,
				child: l
			})
		}
		const o = [...r.element.querySelectorAll(".archive-header__description__up")],
			n = k.timeline({
				defaults: {
					ease: "power3.out"
				},
				onComplete: () => {
					ls(t), s.forEach(a => {
						a.child.revert(), a.parent.revert()
					}), i()
				}
			});
		return n.add(a => cs(r.element, {
			slug: e
		}), 0), n.fromTo(r.archiveHeaderTitle, {
			opacity: 0
		}, {
			opacity: 1,
			duration: .7,
			ease: "power3.inOut",
			clearProps: "opacity"
		}, 0), n.fromTo(o, {
			yPercent: 100
		}, {
			yPercent: 0,
			stagger: .075,
			duration: 1,
			ease: "expo.out",
			clearProps: "yPercent"
		}, 0), n.to(r.archiveIndexNavItems, {
			y: 0,
			stagger: .1,
			ease: "expo.out",
			clearProps: "y"
		}, 0), n.to(r.archiveIndexNavLine, {
			scaleX: 1,
			ease: "expo.inOut",
			duration: 1.5
		}, 0), n.to(r.archiveIndexListItems, {
			y: 0,
			stagger: .03,
			duration: 1,
			ease: "expo.out",
			clearProps: "all"
		}, .15), n.fromTo(r.viewSwitcher, {
			opacity: 0,
			y: 20
		}, {
			opacity: 1,
			y: 0,
			duration: 1,
			ease: "power4.inOut",
			clearProps: "opacity,y"
		}, .5), n
	})
}
class pl {
	constructor(e, {
		lenis: t
	}) {
		this.lenis = t, this.DOM = {
			archiveIndex: e?.querySelector(".archive-index"),
			archiveIndexListContainer: e?.querySelector(".archive-index__list-container"),
			archiveIndexListIcon: e?.querySelector(".archive-index__list-icon")
		}, !(!this.DOM.archiveIndex || !this.DOM.archiveIndexListContainer || !this.DOM.archiveIndexListIcon) && (this.currentHoveredItem = null, this.init(), this.addEventListeners())
	}
	init() {
		this.ctx = k.context(() => {
			this.quickToIconY = k.quickTo(this.DOM.archiveIndexListIcon, "y", {
				duration: .4,
				ease: "power2.out"
			}), this.quickToIconOpacity = k.quickTo(this.DOM.archiveIndexListIcon, "opacity", {
				duration: .3,
				ease: "power2.out"
			})
		}, this.DOM.archiveIndex)
	}
	updateIconPosition(e) {
		if (!this.quickToIconY || !this.DOM.archiveIndexListIcon) return;
		const {
			offsetTop: t,
			offsetHeight: i
		} = e, s = this.DOM.archiveIndexListIcon.offsetHeight, o = t + i / 2 - s / 2;
		this.quickToIconY(o)
	}
	handleItemMouseEnter(e) {
		this.updateIconPosition(e), this.quickToIconOpacity && this.quickToIconOpacity(1);
		const t = e.querySelector(".archive-index__list-item-id");
		t && k.to(t, {
			xPercent: 20,
			duration: .4,
			ease: "power2.out"
		}), k.to(".cross", {
			opacity: 0
		}), this.currentHoveredItem = e
	}
	handleItemMouseLeave(e) {
		const t = e.querySelector(".archive-index__list-item-id");
		t && k.to(t, {
			xPercent: 0,
			duration: .4,
			ease: "power2.out"
		}), k.to(".cross", {
			opacity: 1
		}), this.currentHoveredItem === e && (this.currentHoveredItem = null)
	}
	handleContainerMouseOver(e) {
		const t = e.target.closest(".archive-index__list-item");
		t && t !== this.currentHoveredItem && (this.currentHoveredItem && this.handleItemMouseLeave(this.currentHoveredItem), this.handleItemMouseEnter(t))
	}
	handleContainerMouseLeave() {
		this.quickToIconOpacity && this.quickToIconOpacity(0), this.currentHoveredItem && this.handleItemMouseLeave(this.currentHoveredItem), this.currentHoveredItem = null
	}
	addEventListeners() {
		this.boundHandleContainerMouseOver = this.handleContainerMouseOver.bind(this), this.boundHandleContainerMouseLeave = this.handleContainerMouseLeave.bind(this), this.DOM.archiveIndexListContainer && (this.DOM.archiveIndexListContainer.addEventListener("mouseover", this.boundHandleContainerMouseOver), this.DOM.archiveIndexListContainer.addEventListener("mouseleave", this.boundHandleContainerMouseLeave))
	}
	removeEventListeners() {
		this.DOM.archiveIndexListContainer && (this.DOM.archiveIndexListContainer.removeEventListener("mouseover", this.boundHandleContainerMouseOver), this.DOM.archiveIndexListContainer.removeEventListener("mouseleave", this.boundHandleContainerMouseLeave))
	}
	destroy() {
		this.ctx?.revert(), this.removeEventListeners(), this.quickToIconY = null, this.quickToIconOpacity = null, this.currentHoveredItem = null, this.DOM = null, this.lenis = null
	}
}
class gn {
	constructor(e, {
		slug: t,
		lenis: i
	} = {}) {
		e instanceof HTMLElement && (this.DOM = {
			page: e,
			viewSwitcher: e.querySelector(".view-switcher"),
			viewSwitcherLinks: [...e.querySelectorAll(".view-switcher__link")],
			viewSwitcherMask: e.querySelector(".view-switcher__mask")
		}, !(!this.DOM.viewSwitcher || !this.DOM.viewSwitcherLinks.length) && (this.slug = t, this.activeItem = this.DOM.viewSwitcherLinks.find(s => s.getAttribute("href") === `/${this.slug}`), this.activeItemClassName = "view-switcher__link--active", this.init()))
	}
	init() {
		this.ctx = k.context(() => {
			this.DOM.viewSwitcherLinks.forEach(e => {
				e.classList.remove(this.activeItemClassName)
			}), this.activeItem && (this.activeItem.classList.add(this.activeItemClassName), this.updateMaskPosition(this.activeItem, 0), k.to(this.DOM.viewSwitcherMask, {
				opacity: 1,
				duration: .3
			}))
		}, this.DOM.viewSwitcher), this.addEventListeners()
	}
	updateMaskPosition(e, t = 0) {
		const i = this.DOM.viewSwitcherMask.parentElement,
			s = e.getBoundingClientRect(),
			o = i.getBoundingClientRect(),
			n = s.left - o.left,
			a = s.top - o.top;
		k.to(this.DOM.viewSwitcherMask, {
			x: n,
			y: a,
			width: s.width,
			height: s.height,
			duration: t,
			ease: "power3.out"
		})
	}
	handleMouseEnter(e) {
		e?.preventDefault();
		const t = e.currentTarget;
		this.updateMaskPosition(t, .3)
	}
	handleMouseLeave(e) {
		e?.preventDefault(), this.activeItem && this.updateMaskPosition(this.activeItem, .3)
	}
	handleResize(e) {
		this.activeItem && this.updateMaskPosition(this.activeItem, 0)
	}
	addEventListeners() {
		this.handleMouseEnter = this.handleMouseEnter.bind(this), this.handleMouseLeave = this.handleMouseLeave.bind(this), this.DOM.viewSwitcherLinks.forEach(e => {
			e.addEventListener("mouseenter", this.handleMouseEnter), e.addEventListener("mouseleave", this.handleMouseLeave)
		})
	}
	removeEventListeners() {
		this.DOM?.viewSwitcherLinks && this.DOM.viewSwitcherLinks.forEach(e => {
			e.removeEventListener("mouseenter", this.handleMouseEnter), e.removeEventListener("mouseleave", this.handleMouseLeave)
		})
	}
	destroy() {
		this.ctx?.revert(), this.removeEventListeners(), this.activeItem && this.activeItem.classList.remove(this.activeItemClassName), this.activeItem = null, this.DOM = null
	}
}
class fl {
	constructor({
		lenis: e,
		canvas: t
	}) {
		this.id = "archive", this.selector = ".archive", this.lenis = e, this.canvas = t, this.archiveIndex = null, this.viewSwitcher = null, this.mouseEnterTimeout = null, this.hoverDelay = 0, this.handleMouseEnter = this.handleMouseEnter.bind(this), this.handleMouseLeave = this.handleMouseLeave.bind(this)
	}
	create() {
		this.DOM = {
			element: document.querySelector(this.selector),
			archiveHeader: document.querySelector(".archive-header"),
			archiveHeaderTitle: document.querySelector(".archive-header__title"),
			archiveHeaderDescription: document.querySelector(".archive-header__description"),
			archiveIndex: document.querySelector(".archive-index"),
			archiveIndexNavItems: [...document.querySelectorAll(".archive-index__nav-item span")],
			archiveIndexNavLine: document.querySelector(".archive-index__nav-line"),
			archiveIndexList: document.querySelector(".archive-index__list"),
			archiveIndexListItems: [...document.querySelectorAll(".archive-index__list-item-inner")],
			archiveIndexListItemLinks: [...document.querySelectorAll(".archive-index__list-item-link")],
			archiveIndexPreviews: [...document.querySelectorAll(".archive-index__preview")],
			viewSwitcher: document.querySelector(".view-switcher")
		}, this.DOM.element && (this.createArchiveIndex(), this.createViewSwitcher(), this.addEventListeners())
	}
	show() {
		return dl(this.DOM, {
			slug: this.id,
			lenis: this.lenis
		})
	}
	hide() {
		return hs(this.DOM.element, {
			slug: this.id,
			lenis: this.lenis,
			onComplete: () => this.destroy()
		})
	}
	createArchiveIndex() {
		ne.isMobile || (this.archiveIndex = new pl(this.DOM.element, {
			lenis: this.lenis
		}))
	}
	createViewSwitcher() {
		this.viewSwitcher = new gn(this.DOM.element, {
			slug: this.id,
			lenis: this.lenis
		})
	}
	onResize() {
		this.viewSwitcher?.handleResize()
	}
	handleMouseEnter(e) {
		e?.preventDefault();
		const t = e.currentTarget;
		t?.dataset?.id, this.mouseEnterTimeout && clearTimeout(this.mouseEnterTimeout), this.mouseEnterTimeout = setTimeout(() => {
			const i = {
				preventDefault: () => {},
				currentTarget: t
			};
			this.canvas?.archiveGallery?.onMouseEnter(i)
		}, this.hoverDelay)
	}
	handleMouseLeave(e) {
		e?.preventDefault(), this.mouseEnterTimeout && (clearTimeout(this.mouseEnterTimeout), this.mouseEnterTimeout = null), this.canvas?.archiveGallery?.onMouseLeave(e)
	}
	addEventListeners() {
		!this.DOM.archiveIndexListItemLinks.length || !this.DOM.archiveIndexList || (this.DOM.archiveIndexListItemLinks?.forEach(e => {
			e.addEventListener("mouseenter", this.handleMouseEnter)
		}), this.DOM.archiveIndexList?.addEventListener("mouseleave", this.handleMouseLeave))
	}
	removeEventListeners() {
		!this.DOM.archiveIndexListItemLinks.length || !this.DOM.archiveIndexList || (this.DOM.archiveIndexListItemLinks?.forEach(e => {
			e.removeEventListener("mouseenter", this.handleMouseEnter), e.removeEventListener("click", this.handleClick)
		}), this.DOM.archiveIndexList?.removeEventListener("mouseleave", this.handleMouseLeave))
	}
	update() {}
	destroy() {
		this.mouseEnterTimeout && (clearTimeout(this.mouseEnterTimeout), this.mouseEnterTimeout = null), this.archiveIndex?.destroy(), this.viewSwitcher?.destroy(), this.removeEventListeners(), this.archiveIndex = null, this.viewSwitcher = null, this.DOM = null
	}
}
k.registerPlugin(rt, O);

function ml(r, {
	slug: e,
	lenis: t,
	onComplete: i
} = {}) {
	return new Promise(s => {
		if (!r.element) {
			s();
			return
		}
		const o = [];
		if (r.overviewHeaderDescription) {
			const l = new rt(r.overviewHeaderDescription, {
					type: "lines",
					linesClass: "o-hidden",
					reduceWhiteSpace: !1,
					aria: !1
				}),
				h = new rt(l.lines, {
					type: "lines",
					linesClass: "archive-header__description__up",
					reduceWhiteSpace: !1,
					aria: !1
				});
			o.push({
				parent: l,
				child: h
			})
		}
		const n = [...r.element.querySelectorAll(".archive-header__description__up")],
			a = k.timeline({
				defaults: {
					ease: "power3.out"
				},
				onComplete: () => {
					ls(t), o.forEach(l => {
						l.child.revert(), l.parent.revert()
					}), s()
				}
			});
		return a.add(l => cs(r.element, {
			slug: e
		}), 0), a.fromTo(r.overviewHeaderTitle, {
			opacity: 0
		}, {
			opacity: 1,
			duration: .7,
			ease: "power3.inOut",
			clearProps: "opacity"
		}, 0), a.fromTo(n, {
			yPercent: 100
		}, {
			yPercent: 0,
			stagger: .075,
			duration: 1,
			ease: "expo.out",
			clearProps: "yPercent"
		}, 0), a.fromTo(r.viewSwitcher, {
			opacity: 0,
			y: 20
		}, {
			opacity: 1,
			y: 0,
			duration: 1,
			ease: "power4.inOut",
			clearProps: "opacity,y"
		}, .5), ne.shouldEnableWebGL || a.fromTo(r.overviewItemsPreviews, {
			opacity: 0,
			y: 20
		}, {
			opacity: 1,
			y: 0,
			stagger: .05,
			duration: 1,
			ease: "expo.out"
		}, .25), a
	})
}
class vn {
	constructor(e = {}) {
		this.observers = [], this.items = [], this.options = {
			rootMargin: e.rootMargin || "50%"
		}
	}
	setup(e) {
		e.forEach(t => {
			const i = t.querySelector("img.poster"),
				s = t.querySelector("video"),
				o = t.querySelector("img:not(.poster)");
			s ? this.manageVideo(t, i, s) : o && this.lazyloadImage(t, o)
		})
	}
	manageVideo(e, t, i) {
		const s = i.querySelectorAll("source[data-src]");
		if (!s.length) return;
		const o = [...s].map(c => ({
				element: c,
				url: c.getAttribute("data-src")
			})),
			n = t?.getAttribute("data-src");
		let a = !1,
			l = !1;
		const h = () => {
				if (i.hasAttribute("controls")) {
					n && (i.poster = n), t && (t.style.display = "none"), l = !0;
					return
				}
				if (!t || !n || l) {
					t && l && t.classList.add("is-loaded");
					return
				}
				const g = new Image;
				g.onload = () => {
					t.src = n, t.removeAttribute("data-src"), t.classList.add("is-loaded"), l = !0
				}, g.src = n
			},
			f = () => {
				if (a) return;
				a = !0, i.hasAttribute("controls") ? i.classList.add("is-loaded") : i.addEventListener("loadeddata", () => {
					i.classList.add("is-loaded"), t && t.classList.remove("is-loaded")
				}, {
					once: !0
				}), o.forEach(({
					element: g,
					url: v
				}) => {
					g.src = v, g.removeAttribute("data-src")
				}), i.load()
			},
			d = () => {
				if (!a || !i.paused) return;
				a = !1, i.pause(), o.forEach(({
					element: g,
					url: v
				}) => {
					g.removeAttribute("src"), g.setAttribute("data-src", v)
				}), i.removeAttribute("src"), i.load(), i.classList.remove("is-loaded"), !i.hasAttribute("controls") && t && l && t.classList.add("is-loaded")
			},
			u = new IntersectionObserver(c => {
				c.forEach(g => {
					g.isIntersecting ? (h(), f()) : d()
				})
			}, {
				rootMargin: this.options.rootMargin
			});
		u.observe(e), this.observers.push(u), this.items.push({
			video: i,
			unload: d
		})
	}
	lazyloadImage(e, t) {
		const i = t.getAttribute("data-src");
		if (!i) return;
		const s = new IntersectionObserver(o => {
			o.forEach(n => {
				n.isIntersecting && (t.addEventListener("load", () => {
					t.classList.add("is-loaded")
				}, {
					once: !0
				}), t.src = i, t.removeAttribute("data-src"), s.disconnect())
			})
		}, {
			rootMargin: this.options.rootMargin
		});
		s.observe(e), this.observers.push(s)
	}
	destroy() {
		this.items.forEach(({
			unload: e
		}) => e()), this.items = [], this.observers.forEach(e => e.disconnect()), this.observers = []
	}
}
class gl {
	static setup(e, t = "video") {
		if (!ne.isMobile) return;
		e.querySelectorAll(t).forEach(s => {
			s.setAttribute("controls", ""), s.classList.add("has-controls")
		})
	}
}
k.registerPlugin(O);
class wn {
	constructor() {
		this.triggers = []
	}
	setup(e, t = "video") {
		if (!ne.isMobile || !e) return;
		e.querySelectorAll(t).forEach(s => {
			s.readyState < 2 ? s.addEventListener("loadeddata", () => this.observeVideo(s), {
				once: !0
			}) : this.observeVideo(s)
		})
	}
	observeVideo(e) {
		const t = () => {
				const s = e.play();
				s && typeof s.catch == "function" && s.catch(() => {
					e.muted = !0, e.play()
				})
			},
			i = O.create({
				trigger: e,
				start: "top bottom",
				end: "bottom top",
				onEnter: t,
				onLeave: () => e.pause(),
				onEnterBack: t,
				onLeaveBack: () => e.pause()
			});
		this.triggers.push(i)
	}
	destroy() {
		this.triggers.forEach(e => e.kill()), this.triggers = []
	}
}
k.registerPlugin(O);
class vl {
	constructor({
		lenis: e,
		canvas: t,
		gridRules: i,
		cross: s
	}) {
		this.id = "overview", this.selector = ".overview", this.lenis = e, this.canvas = t, this.gridRules = i, this.cross = s, this.lazyLoader = null, this.videoViewportAutoplay = null, this.activeThumbIndex = -1, this.isAnimating = !1, this.handleClick = this.handleClick.bind(this)
	}
	create() {
		this.DOM = {
			element: document.querySelector(this.selector),
			overviewTitle: document.querySelector(".overview-title"),
			overviewItemsContainer: document.querySelector(".overview-works__items"),
			overviewItems: [...document.querySelectorAll(".overview-works__item")],
			overviewItemsPreviews: [...document.querySelectorAll(".overview-works__item")],
			overviewHeaderTitle: document.querySelector(".overview-header__title"),
			overviewHeaderDescription: document.querySelector(".overview-header__description"),
			viewSwitcher: document.querySelector(".view-switcher"),
			rulesLines: [...document.querySelectorAll(".overview-works__rule-item-line")],
			rulesHorizontals: [...document.querySelectorAll(".overview-works__rule-item-line--horizontal")],
			rulesVerticals: [...document.querySelectorAll(".overview-works__rule-item-line--vertical")]
		}, this.DOM.element && (this.createViewSwitcher(), this.addEventListeners(), ne.shouldEnableWebGL ? this.createRules() : (this.setupLazyload(), this.setupVideoControls(), this.videoViewportAutoplay = new wn, this.videoViewportAutoplay.setup(this.DOM.element, ".overview-video")))
	}
	createRules() {
		this.DOM.rulesLines.length && (this._isTransitioning = !1, this.quickToRuleTop = k.quickTo(this.DOM.rulesHorizontals[0], "y", {
			duration: .4,
			ease: "power2.out"
		}), this.quickToRuleBottom = k.quickTo(this.DOM.rulesHorizontals[1], "y", {
			duration: .4,
			ease: "power2.out"
		}), this.quickToRuleLeft = k.quickTo(this.DOM.rulesVerticals[0], "x", {
			duration: .4,
			ease: "power2.out"
		}), this.quickToRuleRight = k.quickTo(this.DOM.rulesVerticals[1], "x", {
			duration: .4,
			ease: "power2.out"
		}), this.quickToRulesOpacity = this.DOM.rulesLines.map(e => k.quickTo(e, "opacity", {
			duration: .3,
			ease: "power2.out"
		})), this.setRulesFromPreview(this.DOM.overviewItemsPreviews[0]))
	}
	setRulesFromPreview(e) {
		if (!e) return;
		const t = e.getBoundingClientRect();
		k.set(this.DOM.rulesHorizontals[0], {
			y: t.top
		}), k.set(this.DOM.rulesHorizontals[1], {
			y: t.bottom
		}), k.set(this.DOM.rulesVerticals[0], {
			x: t.left
		}), k.set(this.DOM.rulesVerticals[1], {
			x: t.right
		})
	}
	handleThumbClick(e) {
		if (e === this.activeThumbIndex) {
			this.activeThumbIndex = -1, this.quickToRulesOpacity.forEach(s => s(0)), this.DOM.overviewItems.forEach(s => s.classList.remove("overview-works__item-preview--active"));
			return
		}
		this.activeThumbIndex = e, this.quickToRulesOpacity.forEach(s => s(1)), this.cross?.hideRules(), this.DOM.overviewItems.forEach((s, o) => {
			o === e ? s.classList.add("overview-works__item-preview--active") : s.classList.remove("overview-works__item-preview--active")
		});
		const t = this.DOM.overviewItemsPreviews[e];
		if (!t) return;
		const i = t.getBoundingClientRect();
		this._isTransitioning = !0, this.quickToRuleTop(i.top), this.quickToRuleBottom(i.bottom), this.quickToRuleLeft(i.left), this.quickToRuleRight(i.right), this._transitionCall && this._transitionCall.kill(), this._transitionCall = k.delayedCall(.4, () => {
			this._isTransitioning = !1
		})
	}
	show() {
		return ml(this.DOM, {
			slug: this.id,
			lenis: this.lenis
		})
	}
	hide() {
		return hs(this.DOM.element, {
			slug: this.id,
			lenis: this.lenis,
			onComplete: () => this.destroy()
		})
	}
	handleClick(e) {
		const t = e.target.closest(".overview-works__item");
		if (!t || (e.preventDefault(), this.isAnimating)) return;
		const i = this.DOM.overviewItems.indexOf(t);
		if (i === -1) return;
		i === this.activeThumbIndex || (this.isAnimating = !0), this.handleThumbClick(i), this.canvas?.overviewGallery?.selectProject(i, {
			onComplete: () => {
				this.isAnimating = !1
			}
		})
	}
	addEventListeners() {
		this.DOM.overviewItemsContainer && this.DOM.overviewItemsContainer.addEventListener("click", this.handleClick)
	}
	removeEventListeners() {
		this.DOM.overviewItemsContainer && this.DOM.overviewItemsContainer.removeEventListener("click", this.handleClick)
	}
	createViewSwitcher() {
		this.viewSwitcher = new gn(this.DOM.element, {
			slug: this.id,
			lenis: this.lenis
		})
	}
	setupLazyload() {
		this.lazyLoader = new vn({
			rootMargin: "75%"
		}), this.lazyLoader.setup(this.DOM.overviewItemsPreviews)
	}
	setupVideoControls() {}
	onResize() {
		this.viewSwitcher?.handleResize(), this.activeThumbIndex !== -1 && this.setRulesFromPreview(this.DOM.overviewItemsPreviews[this.activeThumbIndex])
	}
	update() {
		this.activeThumbIndex !== -1 && !this._isTransitioning && this.setRulesFromPreview(this.DOM.overviewItemsPreviews[this.activeThumbIndex])
	}
	destroy() {
		this.viewSwitcher?.destroy(), this.lazyLoader?.destroy(), this.videoViewportAutoplay?.destroy(), this.removeEventListeners(), this._transitionCall && this._transitionCall.kill(), this._transitionCall = null, this._isTransitioning = !1, this.DOM?.overviewItems?.forEach(e => e.classList.remove("overview-works__item-preview--active")), this.quickToRuleTop = null, this.quickToRuleBottom = null, this.quickToRuleLeft = null, this.quickToRuleRight = null, this.quickToRulesOpacity = null, this.activeThumbIndex = -1, this.isAnimating = !1, this.viewSwitcher = null, this.lazyLoader = null, this.videoViewportAutoplay = null, this.DOM = null
	}
}
k.registerPlugin(rt, O);

function wl(r, {
	slug: e,
	lenis: t
}) {
	return new Promise(i => {
		if (!r.element) {
			i();
			return
		}
		const s = [];
		if (r.description) {
			const a = new rt(r.description, {
					type: "lines",
					linesClass: "o-hidden",
					reduceWhiteSpace: !1,
					aria: !1
				}),
				l = new rt(a.lines, {
					type: "lines",
					linesClass: "content-block__up",
					reduceWhiteSpace: !1,
					aria: !1
				});
			s.push({
				parent: a,
				child: l
			})
		}
		const o = [...r.element.querySelectorAll(".content-block__up")],
			n = k.timeline({
				onComplete: () => {
					ls(t), s.forEach(a => {
						a.child.revert(), a.parent.revert()
					}), i()
				}
			});
		return n.add(a => cs(r.element, {
			slug: e
		}), 0), n.to(r.element, {
			opacity: 1
		}, 0), n.to(".cross", {
			opacity: 0,
			ease: "power2.out",
			duration: .7
		}, 0), n.fromTo(o, {
			yPercent: 100
		}, {
			yPercent: 0,
			stagger: .045,
			duration: 1,
			ease: "expo.out",
			clearProps: "all"
		}, .3), n.to(r.scrollIndicatorBarPercentage, {
			y: 0,
			duration: 1,
			ease: "power4.inOut",
			clearProps: "y"
		}, .5), n.fromTo(r.scrollIndicatorBar, {
			clipPath: "inset(0% 100% 0% 0%)"
		}, {
			clipPath: "inset(0% 0% 0% 0%)",
			duration: 1.5,
			ease: "expo.inOut",
			clearProps: "clipPath"
		}, .75), n.to(r.galleryIndexNumbers, {
			y: 0,
			stagger: .025,
			duration: .7,
			ease: "expo.out",
			clearProps: "all"
		}, 1), ne.shouldEnableWebGL || n.fromTo(r.galleryPreviews, {
			opacity: 0,
			y: 20
		}, {
			opacity: 1,
			y: 0,
			stagger: .05,
			duration: 1,
			ease: "expo.out"
		}, .85), n
	})
}
k.registerPlugin(O);
class yl {
	constructor(e, {
		lenis: t
	}) {
		e.length && (this.DOM = {
			previews: e
		}, this.playPromises = new WeakMap, ne.isDesktop && this.init())
	}
	init() {
		this.ctx = k.context(() => {
			this.DOM.previews.forEach(e => {
				const t = e.querySelector("video");
				t && O.create({
					trigger: e,
					start: "0% 100%",
					end: "100% 0%",
					onEnter: () => this.playVideo(t),
					onLeave: () => this.pauseVideo(t),
					onEnterBack: () => this.playVideo(t),
					onLeaveBack: () => this.pauseVideo(t)
				})
			})
		})
	}
	playVideo(e) {
		const t = e.play();
		t !== void 0 && (this.playPromises.set(e, t), t.catch(() => {}))
	}
	pauseVideo(e) {
		const t = this.playPromises.get(e);
		t !== void 0 ? t.then(() => e.pause()).catch(() => {}) : e.pause()
	}
	destroy() {
		this.ctx?.revert(), this.playPromises = null
	}
}
class _l {
	constructor(e, {
		lenis: t
	}) {
		this.lenis = t, this.DOM = {
			scrollIndicator: e?.querySelector(".scroll-indicator"),
			percentageContainer: e?.querySelector(".scroll-indicator__percentage-container"),
			percentage: e?.querySelector(".scroll-indicator__percentage"),
			bar: e?.querySelector(".scroll-indicator__bar"),
			current: e?.querySelector(".scroll-indicator__bar-current"),
			caret: e?.querySelector(".scroll-indicator__bar-caret"),
			workCase: e?.querySelector(".work-case")
		}, !(!this.DOM.scrollIndicator || !this.lenis) && this.init()
	}
	init() {
		this.ctx = k.context(() => {}, this.DOM.scrollIndicator), this.handleScroll = this.handleScroll.bind(this), this.updatePercentagePosition(0), this.lenis.on("scroll", this.handleScroll)
	}
	updatePercentagePosition(e) {
		if (!this.DOM.bar || !this.DOM.percentageContainer) return;
		const t = this.DOM.bar.offsetWidth,
			i = this.DOM.percentageContainer.offsetWidth,
			s = e * (t - i);
		this.DOM.percentageContainer.style.transform = `translateX(${s}px)`
	}
	handleScroll(e) {
		if (!this.DOM.workCase) return;
		const i = this.DOM.workCase.getBoundingClientRect().top + e.scroll,
			s = this.DOM.workCase.offsetHeight,
			o = window.innerHeight,
			n = i,
			l = i + s - o - n;
		let h = 0;
		l > 0 && (h = Math.max(0, Math.min((e.scroll - n) / l * 100, 100)));
		const f = h / 100;
		this.DOM.percentage && (this.DOM.percentage.textContent = `${Math.round(h)}%`), this.DOM.current && (this.DOM.current.style.transform = `scaleX(${f})`), this.updatePercentagePosition(f)
	}
	destroy() {
		this.ctx?.revert(), this.lenis && this.handleScroll && this.lenis.off("scroll", this.handleScroll), this.DOM = null, this.lenis = null, this.handleScroll = null
	}
}
k.registerPlugin(O);
class bl {
	constructor(e, {
		lenis: t
	}) {
		this.page = e, this.lenis = t, this.DOM = {
			element: e?.querySelector(".next-work"),
			inner: e?.querySelector(".next-work__inner")
		}, !(!this.DOM.element || !this.DOM.inner) && (this.activeElementClassName = "next-work--active", this.init())
	}
	init() {
		this.ctx = k.context(() => {
			const e = k.from(this.DOM.inner, {
				yPercent: -100,
				ease: "none"
			});
			O.create({
				trigger: this.DOM.element,
				start: "0% 100%",
				end: "100% 100%",
				scrub: !0,
				animation: e,
				invalidateOnRefresh: !0,
				onEnter: () => {
					this.DOM.element.classList.add(this.activeElementClassName)
				},
				onLeaveBack: () => {
					this.DOM.element.classList.remove(this.activeElementClassName)
				}
			})
		}, this.DOM.element)
	}
	destroy() {
		this.ctx?.revert(), this.DOM = null, this.lenis = null, this.page = null
	}
}
k.registerPlugin(O);
class bo {
	constructor({
		lenis: e,
		canvas: t
	}) {
		this.id = "work", this.selector = ".work", this.lenis = e, this.canvas = t, this.lazyLoader = null, this.videoViewportAutoplay = null
	}
	create() {
		this.DOM = {
			element: document.querySelector(this.selector),
			description: document.querySelector(".content-block--description .content-block__contents-content"),
			previews: [...document.querySelectorAll(".work-case__gallery-preview")],
			galleryItems: [...document.querySelectorAll(".work-case__gallery-item")],
			galleryPreviews: [...document.querySelectorAll(".work-case__gallery-preview")],
			galleryIndexNumbers: [...document.querySelectorAll(".work-case__gallery-index-number")],
			scrollIndicator: document.querySelector(".scroll-indicator"),
			scrollIndicatorBar: document.querySelector(".scroll-indicator__bar"),
			scrollIndicatorBarPercentage: document.querySelector(".scroll-indicator__percentage")
		}, this.DOM.element && (this.createWorkCase(), this.createScrollIndicator(), this.createNextWork(), ne.shouldEnableWebGL || (this.setupLazyload(), this.videoViewportAutoplay = new wn, this.videoViewportAutoplay.setup(this.DOM.element, ".work-video")))
	}
	show() {
		return wl(this.DOM, {
			slug: this.id,
			lenis: this.lenis
		})
	}
	hide() {
		return hs(this.DOM.element, {
			slug: this.id,
			lenis: this.lenis,
			onComplete: () => this.destroy()
		})
	}
	createWorkCase() {
		this.workCase = new yl(this.DOM.previews, {
			lenis: this.lenis
		})
	}
	createScrollIndicator() {
		this.scrollIndicator = new _l(this.DOM.element, {
			lenis: this.lenis
		})
	}
	createNextWork() {
		this.nextWork = new bl(this.DOM.element, {
			lenis: this.lenis
		})
	}
	setupLazyload() {
		this.lazyLoader = new vn({
			rootMargin: "50%"
		}), this.lazyLoader.setup(this.DOM.previews)
	}
	setupVideoControls() {
		gl.setup(this.DOM.element, ".work-video")
	}
	onResize() {}
	addEventListeners() {}
	removeEventListeners() {}
	update() {}
	destroy() {
		this.workCase?.destroy(), this.scrollIndicator?.destroy(), this.nextWork?.destroy(), this.lazyLoader?.destroy(), this.videoViewportAutoplay?.destroy(), this.removeEventListeners(), this.workCase = null, this.scrollIndicator = null, this.nextWork = null, this.lazyLoader = null, this.videoViewportAutoplay = null, this.DOM = null
	}
}
var xl = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
	kl = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
	Ml = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
	Sl = /(^[#\.][a-z]|[a-y][a-z])/i,
	El = Math.PI / 180,
	Es = Math.sin,
	As = Math.cos,
	gt = Math.abs,
	Dt = Math.sqrt,
	Cs = Math.atan2,
	xo = 1e8,
	ko = function (e) {
		return typeof e == "string"
	},
	yn = function (e) {
		return typeof e == "number"
	},
	Mo = 1e5,
	_e = function (e) {
		return Math.round(e * Mo) / Mo || 0
	},
	So = function (e) {
		return e.closed = Math.abs(e[0] - e[e.length - 2]) < .001 && Math.abs(e[1] - e[e.length - 1]) < .001
	},
	Al = function (e, t, i) {
		var s = e.length,
			o = ~~(i * s);
		if (e[o] > t) {
			for (; --o && e[o] > t;);
			o < 0 && (o = 0)
		} else
			for (; e[++o] < t && o < s;);
		return o < s ? o : s - 1
	};

function Cl(r) {
	r = ko(r) && Sl.test(r) && document.querySelector(r) || r;
	var e = r.getAttribute ? r : 0,
		t;
	return e && (r = r.getAttribute("d")) ? (e._gsPath || (e._gsPath = {}), t = e._gsPath[r], t && !t._dirty ? t : e._gsPath[r] = Ot(r)) : r ? ko(r) ? Ot(r) : yn(r[0]) ? [r] : r : console.warn("Expecting a <path> element or an SVG path data string")
}

function Bi(r) {
	var e = 0,
		t;
	for (r.reverse(); e < r.length; e += 2) t = r[e], r[e] = r[e + 1], r[e + 1] = t;
	r.reversed = !r.reversed
}
var Ll = function (e, t) {
		var i = document.createElementNS("http://www.w3.org/2000/svg", "path"),
			s = [].slice.call(e.attributes),
			o = s.length,
			n;
		for (t = "," + t + ","; --o > -1;) n = s[o].nodeName.toLowerCase(), t.indexOf("," + n + ",") < 0 && i.setAttributeNS(null, n, s[o].nodeValue);
		return i
	},
	Tl = {
		rect: "rx,ry,x,y,width,height",
		circle: "r,cx,cy",
		ellipse: "rx,ry,cx,cy",
		line: "x1,x2,y1,y2"
	},
	Pl = function (e, t) {
		for (var i = t ? t.split(",") : [], s = {}, o = i.length; --o > -1;) s[i[o]] = +e.getAttribute(i[o]) || 0;
		return s
	};

function _n(r, e) {
	var t = r.tagName.toLowerCase(),
		i = .552284749831,
		s, o, n, a, l, h, f, d, u, c, g, v, w, p, y, x, b, A, E, S, C, P;
	return t === "path" || !r.getBBox ? r : (h = Ll(r, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), P = Pl(r, Tl[t]), t === "rect" ? (a = P.rx, l = P.ry || a, o = P.x, n = P.y, c = P.width - a * 2, g = P.height - l * 2, a || l ? (v = o + a * (1 - i), w = o + a, p = w + c, y = p + a * i, x = p + a, b = n + l * (1 - i), A = n + l, E = A + g, S = E + l * i, C = E + l, s = "M" + x + "," + A + " V" + E + " C" + [x, S, y, C, p, C, p - (p - w) / 3, C, w + (p - w) / 3, C, w, C, v, C, o, S, o, E, o, E - (E - A) / 3, o, A + (E - A) / 3, o, A, o, b, v, n, w, n, w + (p - w) / 3, n, p - (p - w) / 3, n, p, n, y, n, x, b, x, A].join(",") + "z") : s = "M" + (o + c) + "," + n + " v" + g + " h" + -c + " v" + -g + " h" + c + "z") : t === "circle" || t === "ellipse" ? (t === "circle" ? (a = l = P.r, d = a * i) : (a = P.rx, l = P.ry, d = l * i), o = P.cx, n = P.cy, f = a * i, s = "M" + (o + a) + "," + n + " C" + [o + a, n + d, o + f, n + l, o, n + l, o - f, n + l, o - a, n + d, o - a, n, o - a, n - d, o - f, n - l, o, n - l, o + f, n - l, o + a, n - d, o + a, n].join(",") + "z") : t === "line" ? s = "M" + P.x1 + "," + P.y1 + " L" + P.x2 + "," + P.y2 : (t === "polyline" || t === "polygon") && (u = (r.getAttribute("points") + "").match(kl) || [], o = u.shift(), n = u.shift(), s = "M" + o + "," + n + " L" + u.join(","), t === "polygon" && (s += "," + o + "," + n + "z")), h.setAttribute("d", ii(h._gsRawPath = Ot(s))), e && r.parentNode && (r.parentNode.insertBefore(h, r), r.parentNode.removeChild(r)), h)
}

function bn(r, e, t) {
	e = e || 0, r.samples || (r.samples = [], r.lookup = []);
	var i = ~~r.resolution || 12,
		s = 1 / i,
		o = r.length,
		n = r[e],
		a = r[e + 1],
		l = e ? e / 6 * i : 0,
		h = r.samples,
		f = r.lookup,
		d = (e ? r.minLength : xo) || xo,
		u = h[l + t * i - 1],
		c = e ? h[l - 1] : 0,
		g, v, w, p, y, x, b, A, E, S, C, P, M, G, L, I, H;
	for (h.length = f.length = 0, v = e + 2; v < o; v += 6) {
		if (w = r[v + 4] - n, p = r[v + 2] - n, y = r[v] - n, A = r[v + 5] - a, E = r[v + 3] - a, S = r[v + 1] - a, x = b = C = P = 0, gt(w) < .01 && gt(A) < .01 && gt(y) + gt(S) < .01) r.length > 8 && (r.splice(v, 6), v -= 6, o -= 6);
		else
			for (g = 1; g <= i; g++) G = s * g, M = 1 - G, x = b - (b = (G * G * w + 3 * M * (G * p + M * y)) * G), C = P - (P = (G * G * A + 3 * M * (G * E + M * S)) * G), I = Dt(C * C + x * x), I < d && (d = I), c += I, h[l++] = c;
		n += w, a += A
	}
	if (u)
		for (u -= c; l < h.length; l++) h[l] += u;
	if (h.length && d) {
		if (r.totalLength = H = h[h.length - 1] || 0, r.minLength = d, H / d < 9999)
			for (I = L = 0, g = 0; g < H; g += d) f[I++] = h[L] < g ? ++L : L
	} else r.totalLength = h[0] = 0;
	return e ? c - h[e / 2 - 1] : c
}

function xn(r, e) {
	var t, i, s;
	for (s = t = i = 0; s < r.length; s++) r[s].resolution = 12, t += bn(r[s]), i += r[s].length;
	return r.totalPoints = i, r.totalLength = t, r
}

function Dl(r, e, t, i, s, o, n, a, l) {
	if (!(r === a && e === l)) {
		t = gt(t), i = gt(i);
		var h = s % 360 * El,
			f = As(h),
			d = Es(h),
			u = Math.PI,
			c = u * 2,
			g = (r - a) / 2,
			v = (e - l) / 2,
			w = f * g + d * v,
			p = -d * g + f * v,
			y = w * w,
			x = p * p,
			b = y / (t * t) + x / (i * i);
		b > 1 && (t = Dt(b) * t, i = Dt(b) * i);
		var A = t * t,
			E = i * i,
			S = (A * E - A * x - E * y) / (A * x + E * y);
		S < 0 && (S = 0);
		var C = (o === n ? -1 : 1) * Dt(S),
			P = C * (t * p / i),
			M = C * -(i * w / t),
			G = (r + a) / 2,
			L = (e + l) / 2,
			I = G + (f * P - d * M),
			H = L + (d * P + f * M),
			j = (w - P) / t,
			K = (p - M) / i,
			z = (-w - P) / t,
			J = (-p - M) / i,
			W = j * j + K * K,
			m = (K < 0 ? -1 : 1) * Math.acos(j / Dt(W)),
			X = (j * J - K * z < 0 ? -1 : 1) * Math.acos((j * z + K * J) / Dt(W * (z * z + J * J)));
		isNaN(X) && (X = u), !n && X > 0 ? X -= c : n && X < 0 && (X += c), m %= c, X %= c;
		var he = Math.ceil(gt(X) / (c / 4)),
			re = [],
			ae = X / he,
			Te = 4 / 3 * Es(ae / 2) / (1 + As(ae / 2)),
			Me = f * t,
			ce = d * t,
			Pe = d * -i,
			Se = f * i,
			ue;
		for (ue = 0; ue < he; ue++) s = m + ue * ae, w = As(s), p = Es(s), j = As(s += ae), K = Es(s), re.push(w - Te * p, p + Te * w, j + Te * K, K - Te * j, j, K);
		for (ue = 0; ue < re.length; ue += 2) w = re[ue], p = re[ue + 1], re[ue] = w * Me + p * Pe + I, re[ue + 1] = w * ce + p * Se + H;
		return re[ue - 2] = a, re[ue - 1] = l, re
	}
}

function Ot(r) {
	var e = (r + "").replace(Ml, function (P) {
			var M = +P;
			return M < 1e-4 && M > -1e-4 ? 0 : M
		}).match(xl) || [],
		t = [],
		i = 0,
		s = 0,
		o = 2 / 3,
		n = e.length,
		a = 0,
		l = "ERROR: malformed path: " + r,
		h, f, d, u, c, g, v, w, p, y, x, b, A, E, S, C = function (M, G, L, I) {
			y = (L - M) / 3, x = (I - G) / 3, v.push(M + y, G + x, L - y, I - x, L, I)
		};
	if (!r || !isNaN(e[0]) || isNaN(e[1])) return console.log(l), t;
	for (h = 0; h < n; h++)
		if (A = c, isNaN(e[h]) ? (c = e[h].toUpperCase(), g = c !== e[h]) : h--, d = +e[h + 1], u = +e[h + 2], g && (d += i, u += s), h || (w = d, p = u), c === "M") v && (v.length < 8 ? t.length -= 1 : a += v.length, So(v)), i = w = d, s = p = u, v = [d, u], t.push(v), h += 2, c = "L";
		else if (c === "C") v || (v = [0, 0]), g || (i = s = 0), v.push(d, u, i + e[h + 3] * 1, s + e[h + 4] * 1, i += e[h + 5] * 1, s += e[h + 6] * 1), h += 6;
	else if (c === "S") y = i, x = s, (A === "C" || A === "S") && (y += i - v[v.length - 4], x += s - v[v.length - 3]), g || (i = s = 0), v.push(y, x, d, u, i += e[h + 3] * 1, s += e[h + 4] * 1), h += 4;
	else if (c === "Q") y = i + (d - i) * o, x = s + (u - s) * o, g || (i = s = 0), i += e[h + 3] * 1, s += e[h + 4] * 1, v.push(y, x, i + (d - i) * o, s + (u - s) * o, i, s), h += 4;
	else if (c === "T") y = i - v[v.length - 4], x = s - v[v.length - 3], v.push(i + y, s + x, d + (i + y * 1.5 - d) * o, u + (s + x * 1.5 - u) * o, i = d, s = u), h += 2;
	else if (c === "H") C(i, s, i = d, s), h += 1;
	else if (c === "V") C(i, s, i, s = d + (g ? s - i : 0)), h += 1;
	else if (c === "L" || c === "Z") c === "Z" && (d = w, u = p, v.closed = !0), (c === "L" || gt(i - d) > .5 || gt(s - u) > .5) && (C(i, s, d, u), c === "L" && (h += 2)), i = d, s = u;
	else if (c === "A") {
		if (E = e[h + 4], S = e[h + 5], y = e[h + 6], x = e[h + 7], f = 7, E.length > 1 && (E.length < 3 ? (x = y, y = S, f--) : (x = S, y = E.substr(2), f -= 2), S = E.charAt(1), E = E.charAt(0)), b = Dl(i, s, +e[h + 1], +e[h + 2], +e[h + 3], +E, +S, (g ? i : 0) + y * 1, (g ? s : 0) + x * 1), h += f, b)
			for (f = 0; f < b.length; f++) v.push(b[f]);
		i = v[v.length - 2], s = v[v.length - 1]
	} else console.log(l);
	return h = v.length, h < 6 ? (t.pop(), h = 0) : So(v), t.totalPoints = a + h, t
}

function Il(r, e) {
	r.samples || bn(r);
	for (var t = r.samples, i = r.lookup, s = r.resolution, o = r.totalLength, n = r.slice(0, 2), a = [], l = r.length - 4, h = 6, f = .2, d = 0, u = 0, c, g, v, w, p, y, x, b, A, E, S, C, P, M; h < l; h += 6) Math.abs(Cs(r[h + 1] - r[h - 1], r[h] - r[h - 2]) - Cs(r[h + 3] - r[h + 1], r[h + 2] - r[h])) > f && a.push(h);
	if (a.push(r.length - 2), l = a.length, n.nonSmooth = C = [1], e > l)
		for (e -= l, p = 0; p < l; p++) {
			for (P = a[p], M = Math.round(P / 6 * s), A = t[M - 1] - d, g = Math.round(t[M - 1] / o * e) - u, u += g, y = 1 / (g + 1), x = 1; x <= g; x++) E = d + A * x * y, h = i.length ? i[E < o ? ~~(E / r.minLength) : i.length - 1] || 0 : Al(t, E, E / o), v = h ? t[h - 1] : 0, w = t[h], w < E && (v = w, w = t[++h]), c = 1 / s * ((E - v) / (w - v) + h % s) || 0, b = 1 - c, h = ~~(h / s) * 6, S = r[h], n.push(_e((c * c * (r[h + 6] - S) + 3 * b * (c * (r[h + 4] - S) + b * (r[h + 2] - S))) * c + S), _e((c * c * (r[h + 7] - (S = r[h + 1])) + 3 * b * (c * (r[h + 5] - S) + b * (r[h + 3] - S))) * c + S));
			C[n.length] = 1, n.push(r[P], r[P + 1]), d += A
		}
	return h = r.length - 2, r.closed && Math.abs(Cs(r[h + 1] - r[h - 1], r[h] - r[h - 2]) - Cs(r[3] - r[1], r[2] - r[0])) <= f && (C[0] = C[C.length - 1] = 0), n
}

function Ol(r, e) {
	gt(r[0] - r[2]) < 1e-4 && gt(r[1] - r[3]) < 1e-4 && (r = r.slice(2));
	var t = r.length - 2,
		i = +r[0],
		s = +r[1],
		o = +r[2],
		n = +r[3],
		a = [i, s, i, s],
		l = o - i,
		h = n - s,
		f = r.nonSmooth || [],
		d = Math.abs(r[t] - i) < .001 && Math.abs(r[t + 1] - s) < .001,
		u, c, g, v, w, p, y, x, b, A, E, S, C, P, M;
	if (!t) return [i, s, i, s, i, s, i, s];
	for (d && (r.push(o, n), o = i, n = s, i = r[t - 2], s = r[t - 1], r.unshift(i, s), t += 4, f = [0, 0].concat(f)), e = e || e === 0 ? +e : 1, g = 2; g < t; g += 2)
		if (u = i, c = s, i = o, s = n, o = +r[g + 2], n = +r[g + 3], !(i === o && s === n)) {
			if (v = l, w = h, l = o - i, h = n - s, f[g]) {
				a.push(i - (i - u) / 4, s - (s - c) / 4, i, s, i + (o - i) / 4, s + (n - s) / 4);
				continue
			}
			p = Dt(v * v + w * w), y = Dt(l * l + h * h), x = Dt(Math.pow(l / y + v / p, 2) + Math.pow(h / y + w / p, 2)), b = (p + y) * e * .25 / x, A = i - (i - u) * (p ? b / p : 0), E = i + (o - i) * (y ? b / y : 0), S = i - (A + ((E - A) * (p * 3 / (p + y) + .5) / 4 || 0)), C = s - (s - c) * (p ? b / p : 0), P = s + (n - s) * (y ? b / y : 0), M = s - (C + ((P - C) * (p * 3 / (p + y) + .5) / 4 || 0)), a.push(_e(A + S), _e(C + M), _e(i), _e(s), _e(E + S), _e(P + M))
		} return i !== o || s !== n || a.length < 4 ? a.push(_e(o), _e(n), _e(o), _e(n)) : a.length -= 2, a.length === 2 ? a.push(i, s, i, s, i, s) : d && (a.splice(0, 6), a.length -= 6), a.closed = d, a
}

function ii(r) {
	yn(r[0]) && (r = [r]);
	var e = "",
		t = r.length,
		i, s, o, n;
	for (s = 0; s < t; s++) {
		for (n = r[s], e += "M" + _e(n[0]) + "," + _e(n[1]) + " C", i = n.length, o = 2; o < i; o++) e += _e(n[o++]) + "," + _e(n[o++]) + " " + _e(n[o++]) + "," + _e(n[o++]) + " " + _e(n[o++]) + "," + _e(n[o]) + " ";
		n.closed && (e += "z")
	}
	return e
}

function Fs() {
	return Fs = Object.assign || function (r) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i])
		}
		return r
	}, Fs.apply(this, arguments)
}
var lt, zr, Fi, kn, Wi, Mn, Sn = function () {
		return lt || typeof window < "u" && (lt = window.gsap) && lt.registerPlugin && lt
	},
	ar = function (e) {
		return typeof e == "function"
	},
	Ws = Math.atan2,
	Eo = Math.cos,
	Ao = Math.sin,
	hi = Math.sqrt,
	Us = Math.PI,
	Co = Us * 2,
	Rl = Us * .3,
	Vl = Us * .7,
	$r = 1e20,
	os = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
	Gl = /(^[#.][a-z]|[a-y][a-z])/i,
	zl = /[achlmqstvz]/i,
	qt = function (e) {
		return console && console.warn(e)
	},
	_t = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0
	},
	Lo = function (e) {
		var t = e.length,
			i = 0,
			s = 0,
			o;
		for (o = 0; o < t; o++) i += e[o++], s += e[o];
		return [i / (t / 2), s / (t / 2)]
	},
	Mi = function (e) {
		var t = e.length,
			i = e[0],
			s = i,
			o = e[1],
			n = o,
			a, l, h;
		for (h = 6; h < t; h += 6) a = e[h], l = e[h + 1], a > i ? i = a : a < s && (s = a), l > o ? o = l : l < n && (n = l);
		return e.centerX = (i + s) / 2, e.centerY = (o + n) / 2, e.size = (i - s) * (o - n)
	},
	Qi = function (e, t) {
		t === void 0 && (t = 3);
		for (var i = e.length, s = e[0][0], o = s, n = e[0][1], a = n, l = 1 / t, h, f, d, u, c, g, v, w, p, y, x, b, A, E, S, C; --i > -1;)
			for (c = e[i], h = c.length, u = 6; u < h; u += 6)
				for (p = c[u], y = c[u + 1], x = c[u + 2] - p, E = c[u + 3] - y, b = c[u + 4] - p, S = c[u + 5] - y, A = c[u + 6] - p, C = c[u + 7] - y, g = t; --g > -1;) v = l * g, w = 1 - v, f = (v * v * A + 3 * w * (v * b + w * x)) * v + p, d = (v * v * C + 3 * w * (v * S + w * E)) * v + y, f > s ? s = f : f < o && (o = f), d > n ? n = d : d < a && (a = d);
		return e.centerX = (s + o) / 2, e.centerY = (n + a) / 2, e.left = o, e.width = s - o, e.top = a, e.height = n - a, e.size = (s - o) * (n - a)
	},
	En = function (e, t) {
		return t.length - e.length
	},
	To = function (e, t) {
		var i = e.size || Mi(e),
			s = t.size || Mi(t);
		return Math.abs(s - i) < (i + s) / 20 ? t.centerX - e.centerX || t.centerY - e.centerY : s - i
	},
	Po = function (e, t) {
		var i = e.slice(0),
			s = e.length,
			o = s - 2,
			n, a;
		for (t = t | 0, n = 0; n < s; n++) a = (n + t) % o, e[n++] = i[a], e[n] = i[a + 1]
	},
	lr = function (e, t, i, s, o) {
		var n = e.length,
			a = 0,
			l = n - 2,
			h, f, d, u;
		for (i *= 6, f = 0; f < n; f += 6) h = (f + i) % l, u = e[h] - (t[f] - s), d = e[h + 1] - (t[f + 1] - o), a += hi(d * d + u * u);
		return a
	},
	$l = function (e, t, i) {
		var s = e.length,
			o = Lo(e),
			n = Lo(t),
			a = n[0] - o[0],
			l = n[1] - o[1],
			h = lr(e, t, 0, a, l),
			f = 0,
			d, u, c;
		for (c = 6; c < s; c += 6) u = lr(e, t, c / 6, a, l), u < h && (h = u, f = c);
		if (i)
			for (d = e.slice(0), Bi(d), c = 6; c < s; c += 6) u = lr(d, t, c / 6, a, l), u < h && (h = u, f = -c);
		return f / 6
	},
	Bl = function (e, t, i) {
		for (var s = e.length, o = $r, n = 0, a = 0, l, h, f, d, u, c; --s > -1;)
			for (l = e[s], c = l.length, u = 0; u < c; u += 6) h = l[u] - t, f = l[u + 1] - i, d = hi(h * h + f * f), d < o && (o = d, n = l[u], a = l[u + 1]);
		return [n, a]
	},
	Fl = function (e, t, i, s, o, n) {
		var a = t.length,
			l = 0,
			h = Math.min(e.size || Mi(e), t[i].size || Mi(t[i])) * s,
			f = $r,
			d = e.centerX + o,
			u = e.centerY + n,
			c, g, v, w, p;
		for (g = i; g < a && (c = t[g].size || Mi(t[g]), !(c < h)); g++) v = t[g].centerX - d, w = t[g].centerY - u, p = hi(v * v + w * w), p < f && (l = g, f = p);
		return p = t[l], t.splice(l, 1), p
	},
	Wl = function (e, t, i) {
		i === void 0 && (i = 1);
		for (var s = e[t], o = e[t + 1], n = e[t + 2], a = e[t + 3], l = e[t + 4], h = e[t + 5], f = e[t + 6], d = e[t + 7], u, c, g, v, w, p, y, x, b; i-- > 0;) u = 1 - 1 / (i + 2), c = s + (n - s) * u, g = n + (l - n) * u, v = o + (a - o) * u, w = a + (h - a) * u, p = c + (g - c) * u, y = v + (w - v) * u, x = l + (f - l) * u, b = h + (d - h) * u, g += (x - g) * u, w += (b - w) * u, e.splice(t + 2, 4, n = _t(c), a = _t(v), l = _t(p), h = _t(y), f = _t(p + (g - p) * u), d = _t(y + (w - y) * u), _t(g), _t(w), _t(x), _t(b))
	},
	Hl = function (e) {
		for (var t = e.length, i = -$r, s; t--;) e[t] > i && (i = e[t], s = t);
		return s
	},
	Rs = function (e, t) {
		for (var i = [], s = [], o = e.length - 2, n = 0; n < o; n += 6) i.push(Math.pow(e[n] - e[n + 6], 2) + Math.pow(e[n + 1] - e[n + 7], 2));
		for (; t--;) n = Hl(i), s[n] = o = (s[n] || 0) + 1, i[n] *= o / (o + 1);
		for (n = i.length; n--;) s[n] && Wl(e, n * 6, s[n])
	},
	Sr = function (e, t) {
		return t || xn(e), Math.max(4, Math.round(e.totalLength / 4))
	},
	Do = function (e) {
		return e.slice(0).sort(En)
	},
	An = function (e) {
		for (var t = e[0], i = e[1], s = 2; s < e.length; s += 2)
			if (Math.abs(e[s] - t) > .01 || Math.abs(e[s + 1] - i) > .01) return !1;
		return !0
	},
	hr = function (e, t) {
		t = t || {};
		var i = t,
			s = i.redraw,
			o = i.points,
			n = i.maxSegments,
			a = n === void 0 ? 999 : n,
			l = 0,
			h = e,
			f = Array.isArray(o) ? o : 0,
			d, u, c, g, v;
		if (s = s !== !1, s) xn(e);
		else
			for (e.totalPoints = 0, u = e.length; u--;) e.totalPoints += e[u].length;
		for (f ? (h = Do(e), f = Do(f), v = f[0].totalLength / Math.round(f[0].length / 6)) : ((!o || o === "auto") && (o = Sr(e, s), s || (o -= Math.round(e.totalPoints / 6))), o = Math.max(s ? 10 : 4, Math.min(999, o))), u = 0; u < h.length; u++) {
			if (c = h[u], d = Math.max(s ? 10 : 4, f ? Math.round(f[u] ? f[u].length / 6 : h[u].totalLength / v || 0) : Math.round((l / o + (s ? c.totalLength / e.totalLength : c.length / e.totalPoints)) * o) - l), !(u >= a || f && (!f[u] || An(f[u]))))
				if (s) {
					var w;
					g = Ol(Il(c, d), t.curviness), c.length = 0, (w = c).push.apply(w, g)
				} else Rs(c, d);
			l += d
		}
		return e
	},
	Er = function (e, t, i, s, o) {
		var n = t.length - e.length,
			a = n > 0 ? t : e,
			l = n > 0 ? e : t,
			h = 0,
			f = s === "complexity" ? En : To,
			d = s === "position" ? 0 : typeof s == "number" ? s : .8,
			u = l.length,
			c = typeof i == "object" && i.push ? i.slice(0) : [i],
			g = c[0] === "reverse" || c[0] < 0,
			v = i === "log",
			w, p, y, x, b, A, E;
		if (l[0]) {
			if (a.length > 1 && (e.sort(f), t.sort(f), a.size || Qi(a), l.size || Qi(l), A = a.centerX - l.centerX, E = a.centerY - l.centerY, f === To))
				for (u = 0; u < l.length; u++) a.splice(u, 0, Fl(l[u], a, u, d, A, E));
			if (n)
				for (n < 0 && (n = -n), a[0].length > l[0].length && Rs(l[0], (a[0].length - l[0].length) / 6 | 0), u = l.length; h < n;) x = a[u].size || Mi(a[u]), y = Bl(l, a[u].centerX, a[u].centerY), x = y[0], b = y[1], l[u++] = [x, b, x, b, x, b, x, b], l.totalPoints += 8, h++;
			for (u = 0; u < e.length; u++) w = t[u], p = e[u], n = w.length - p.length, n < 0 ? Rs(w, -n / 6 | 0) : n > 0 && Rs(p, n / 6 | 0), g && o !== !1 && !p.reversed && Bi(p), i = c[u] || c[u] === 0 ? c[u] : "auto", i && (p.closed || Math.abs(p[0] - p[p.length - 2]) < .5 && Math.abs(p[1] - p[p.length - 1]) < .5 ? i === "auto" || i === "log" ? (c[u] = i = $l(p, w, !u || o === !1), i < 0 && (g = !0, Bi(p), i = -i), Po(p, i * 6)) : i !== "reverse" && (u && i < 0 && Bi(p), Po(p, (i < 0 ? -i : i) * 6)) : !g && (i === "auto" && Math.abs(w[0] - p[0]) + Math.abs(w[1] - p[1]) + Math.abs(w[w.length - 2] - p[p.length - 2]) + Math.abs(w[w.length - 1] - p[p.length - 1]) > Math.abs(w[0] - p[p.length - 2]) + Math.abs(w[1] - p[p.length - 1]) + Math.abs(w[w.length - 2] - p[0]) + Math.abs(w[w.length - 1] - p[1]) || i % 2) ? (Bi(p), c[u] = -1, g = !0) : i === "auto" ? c[u] = 0 : i === "reverse" && (c[u] = -1), p.closed !== w.closed && (p.closed = w.closed = !1));
			return v && qt("shapeIndex:[" + c.join(",") + "]"), e.shapeIndex = c, c
		}
	},
	Io = function (e, t, i, s, o) {
		var n = Ot(e[0]),
			a = Ot(e[1]);
		Er(n, a, t || t === 0 ? t : "auto", i, o) && (e[0] = ii(n), e[1] = ii(a), (s === "log" || s === !0) && qt('precompile:["' + e[0] + '","' + e[1] + '"]'))
	},
	Nl = function (e, t) {
		if (!t) return e;
		var i = e.match(os) || [],
			s = i.length,
			o = "",
			n, a, l;
		for (t === "reverse" ? (a = s - 1, n = -2) : (a = ((parseInt(t, 10) || 0) * 2 + 1 + s * 100) % s, n = 2), l = 0; l < s; l += 2) o += i[a - 1] + "," + i[a] + " ", a = (a + n) % s;
		return o
	},
	Oo = function (e, t) {
		var i = 0,
			s = parseFloat(e[0]),
			o = parseFloat(e[1]),
			n = s + "," + o + " ",
			a = .999999,
			l, h, f, d, u, c, g;
		for (f = e.length, l = t * .5 / (f * .5 - 1), h = 0; h < f - 2; h += 2) {
			if (i += l, c = parseFloat(e[h + 2]), g = parseFloat(e[h + 3]), i > a)
				for (u = 1 / (Math.floor(i) + 1), d = 1; i > a;) n += (s + (c - s) * u * d).toFixed(2) + "," + (o + (g - o) * u * d).toFixed(2) + " ", i--, d++;
			n += c + "," + g + " ", s = c, o = g
		}
		return n
	},
	Ar = function (e) {
		var t = e[0].match(os) || [],
			i = e[1].match(os) || [],
			s = i.length - t.length;
		s > 0 ? e[0] = Oo(t, s) : e[1] = Oo(i, -s)
	},
	ql = function (e) {
		return isNaN(e) ? Ar : function (t) {
			Ar(t), t[1] = Nl(t[1], parseInt(e, 10))
		}
	},
	Yl = function (e, t, i) {
		var s = typeof e == "string",
			o, n;
		return (!s || Gl.test(e) || (e.match(os) || []).length < 3) && (o = zr(e)[0], o ? (n = (o.nodeName + "").toUpperCase(), t && n !== "PATH" && (o = _n(o, !1), n = "PATH"), e = o.getAttribute(n === "PATH" ? "d" : "points") || "", o === i && (e = o.getAttributeNS(null, "data-original") || e)) : (qt("WARNING: invalid morph to: " + e), e = !1)), e
	},
	Ro = function (e) {
		for (var t = e.length, i, s, o, n, a, l, h, f; --t > -1;)
			for (i = e[t], f = i.cpData = i.cpData || [], f.length = 0, h = i.length - 2, l = 0; l < h; l += 6) s = i[l] - i[l + 2], o = i[l + 1] - i[l + 3], n = i[l + 6] - i[l + 4], a = i[l + 7] - i[l + 5], f[l + 2] = Ws(o, s), f[l + 3] = hi(s * s + o * o), f[l + 4] = Ws(a, n), f[l + 5] = hi(n * n + a * a);
		return e
	},
	Vo = function (e) {
		var t = e.trim().split(" "),
			i = ~e.indexOf("left") ? 0 : ~e.indexOf("right") ? 100 : isNaN(parseFloat(t[0])) ? 50 : parseFloat(t[0]),
			s = ~e.indexOf("top") ? 0 : ~e.indexOf("bottom") ? 100 : isNaN(parseFloat(t[1])) ? 50 : parseFloat(t[1]);
		return {
			x: i / 100,
			y: s / 100
		}
	},
	Cn = function (e) {
		return e !== e % Us ? e + (e < 0 ? Co : -Co) : e
	},
	Go = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
	Xl = function (e, t, i, s) {
		var o = this._origin,
			n = this._eOrigin,
			a = e[i] - o.x,
			l = e[i + 1] - o.y,
			h = hi(a * a + l * l),
			f = Ws(l, a),
			d, u;
		return a = t[i] - n.x, l = t[i + 1] - n.y, d = Ws(l, a) - f, u = Cn(d), !s && Fi && Math.abs(u + Fi.ca) < Rl && (s = Fi), this._anchorPT = Fi = {
			_next: this._anchorPT,
			t: e,
			sa: f,
			ca: s && u * s.ca < 0 && Math.abs(u) > Vl ? d : u,
			sl: h,
			cl: hi(a * a + l * l) - h,
			i
		}
	},
	zo = function (e) {
		lt = Sn(), Wi = Wi || lt && lt.plugins.morphSVG, lt && Wi ? (zr = lt.utils.toArray, Mn = lt.core.reverting || function () {}, Wi.prototype._tweenRotation = Xl, kn = 1) : e && qt("Please gsap.registerPlugin(MorphSVGPlugin)")
	},
	_i = {
		version: "3.14.2",
		name: "morphSVG",
		rawVars: 1,
		register: function (e, t) {
			lt = e, Wi = t, zo()
		},
		init: function (e, t, i, s, o) {
			if (kn || zo(1), !t) return qt("invalid shape"), !1;
			ar(t) && (t = t.call(i, s, e, o));
			var n, a, l, h, f, d, u, c, g, v, w, p, y, x, b, A, E, S, C, P;
			if (typeof t == "string" || t.getBBox || t[0]) t = {
				shape: t
			};
			else if (typeof t == "object") {
				n = {};
				for (a in t) n[a] = ar(t[a]) && a !== "render" ? t[a].call(i, s, e, o) : t[a];
				t = n
			}
			var M = e.nodeType ? window.getComputedStyle(e) : {},
				G = M.fill + "",
				L = !(G === "none" || (G.match(os) || [])[3] === "0" || M.fillRule === "evenodd"),
				I = t.smooth,
				H = (t.origin || "50 50").split(",");
			if (I === !0 || I === "auto" ? I = {} : typeof I == "number" && (I = {
					points: I
				}), n = (e.nodeName + "").toUpperCase(), f = n === "POLYLINE" || n === "POLYGON", n !== "PATH" && !f && !t.prop) return qt("Cannot morph a <" + n + "> element. " + Go), !1;
			if (a = n === "PATH" ? "d" : "points", !t.prop && !ar(e.setAttribute)) return !1;
			if (h = Yl(t.shape || t.d || t.points || "", a === "d", e), f && zl.test(h)) return qt("A <" + n + "> cannot accept path data. " + Go), !1;
			if (d = t.shapeIndex || t.shapeIndex === 0 ? t.shapeIndex : "auto", u = t.map || _i.defaultMap, this._prop = t.prop, this._render = t.render || _i.defaultRender, this._apply = "updateTarget" in t ? t.updateTarget : _i.defaultUpdateTarget, this._rnd = Math.pow(10, isNaN(t.precision) ? 2 : +t.precision), this._tween = i, h) {
				if (this._target = e, E = typeof t.precompile == "object", v = this._original = this._prop ? e[this._prop] : e.getAttribute(a), !this._prop && !e.getAttributeNS(null, "data-original") && e.setAttributeNS(null, "data-original", v), a === "d" || this._prop) {
					if (v = Ot(E ? t.precompile[0] : v), w = Ot(E ? t.precompile[1] : h), I) {
						for (y = v.length; --y;) An(v[y]) && v.splice(y, 1);
						hr(v, Fs({}, I, {
							points: +I.points || Math.max(Sr(v), Sr(w)),
							maxSegments: w.length
						})), hr(w, I.redraw === !1 ? I : Fs({}, I, {
							points: v
						}))
					}
					if (!E && !Er(v, w, d, u, L)) return !1;
					for ((t.precompile === "log" || t.precompile === !0) && qt('precompile:["' + ii(v) + '","' + ii(w) + '"]'), C = (t.type || _i.defaultType) !== "linear", P = t.curveMode || C, Ro(v), Ro(w), C && (v.size || Qi(v), w.size || Qi(w), S = Vo(H[0]), this._origin = v.origin = {
							x: v.left + S.x * v.width,
							y: v.top + S.y * v.height
						}, H[1] && (S = Vo(H[1])), this._eOrigin = {
							x: w.left + S.x * w.width,
							y: w.top + S.y * w.height
						}), this._rawPath = e._gsRawPath = v, y = v.length; --y > -1;) {
						for (b = v[y], A = w[y], c = b.cpData, g = A.cpData, x = b.length, Fi = 0, p = 0; p < x; p += 6)(A[p] !== b[p] || A[p + 1] !== b[p + 1]) && (C ? l = this._tweenRotation(b, A, p) : (l = this.add(b, p, b[p], A[p], 0, 0, 0, 0, 0, 1), l = this.add(b, p + 1, b[p + 1], A[p + 1], 0, 0, 0, 0, 0, 1) || l));
						for (p = 0; p < x; p += 2) P && (c[p] !== g[p] || c[p + 1] !== g[p + 1]) && c[p + 1] && g[p + 1] ? this._controlPT = {
							_next: this._controlPT,
							i: p,
							j: y,
							ai: p % 6 > 3 ? p + 2 : p - 2,
							sa: c[p],
							ca: Cn(g[p] - c[p]),
							sl: c[p + 1],
							cl: g[p + 1] - c[p + 1]
						} : (A[p] !== b[p] && (l = this.add(b, p, b[p], A[p], 0, 0, 0, 0, 0, 1)), A[p + 1] !== b[p + 1] && (l = this.add(b, p + 1, b[p + 1], A[p + 1], 0, 0, 0, 0, 0, 1) || l))
					}
				} else l = this.add(e, "setAttribute", e.getAttribute(a) + "", h + "", s, o, 0, ql(d), a);
				C && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x, 0, 0, 0, 0, 0, 1), l = this.add(this._origin, "y", this._origin.y, this._eOrigin.y, 0, 0, 0, 0, 0, 1)), l && (this._props.push("morphSVG"), l.end = I && I.persist !== !1 ? ii(w) : h, l.endProp = a)
			}
			return 1
		},
		render: function (e, t) {
			for (var i = t._rawPath, s = t._controlPT, o = t._anchorPT, n = t._rnd, a = t._target, l = t._pt, h, f, d, u, c, g, v, w, p; l;) l.r(e, l.d), l = l._next;
			if (e === 1 && t._apply)
				for (l = t._pt; l;) l.end && (t._prop ? a[t._prop] = l.end : a.setAttribute(l.endProp, l.end)), l = l._next;
			else if (i) {
				for (; o;) c = o.sa + e * o.ca, u = o.sl + e * o.cl, o.t[o.i] = t._origin.x + Eo(c) * u, o.t[o.i + 1] = t._origin.y + Ao(c) * u, o = o._next;
				for (; s;) d = i[s.j], g = s.i, c = s.sa + e * s.ca, w = Ao(c), p = Eo(c), u = s.sl + e * s.cl, d[g] = d[s.ai] - p * u, d[g + 1] = d[s.ai + 1] - w * u, s = s._next;
				if (!e && Mn() && (i = Ot(t._original)), a._gsRawPath = i, t._apply) {
					for (h = "", f = " ", v = 0; v < i.length; v++) {
						for (d = i[v], u = d.length, h += "M" + (d[0] * n | 0) / n + f + (d[1] * n | 0) / n + " C", g = 2; g < u; g++) h += (d[g] * n | 0) / n + f;
						d.closed && (h += "z")
					}
					t._prop ? a[t._prop] = h : a.setAttribute("d", h)
				}
			}
			t._render && i && t._render.call(t._tween, i, a)
		},
		kill: function (e) {
			this._pt = this._rawPath = 0
		},
		getRawPath: Cl,
		stringToRawPath: Ot,
		rawPathToString: ii,
		smoothRawPath: hr,
		normalizeStrings: function (e, t, i) {
			var s = i.shapeIndex,
				o = i.map,
				n = [e, t];
			return Io(n, s, o), n
		},
		pathFilter: Io,
		pointsFilter: Ar,
		getTotalSize: Qi,
		equalizeSegmentQuantity: Er,
		convertToPath: function (e, t) {
			return zr(e).map(function (i) {
				return _n(i, t !== !1)
			})
		},
		defaultType: "linear",
		defaultUpdateTarget: !0,
		defaultMap: "size"
	};
Sn() && lt.registerPlugin(_i);
k.registerPlugin(_i);
async function Ul(r) {
	return new Promise(e => {
		if (!r?.header) {
			e();
			return
		}
		const t = k.timeline({
			onComplete: e
		});
		return t.to([r.dimensions, r.headerNavigationLinks, r.availabilityInfos], {
			y: 0,
			stagger: .075,
			ease: "expo.out"
		}, 0), r.availabilityIcon && t.to(r.availabilityIcon, {
			opacity: 1,
			ease: "expo.out",
			duration: 1.5
		}, 0), t
	})
}

function jl(r) {
	return new Promise(e => {
		if (!r?.el) {
			e();
			return
		}
		const t = k.timeline({
			defaults: {
				ease: "expo.inOut",
				duration: 1.5
			},
			onComplete: e
		});
		return t.to(r.horizontal, {
			y: 0
		}, 0), t.to(r.vertical, {
			x: 0
		}, 0), t
	})
}
k.registerPlugin(O);
class Kl {
	constructor() {
		this.isMobile = ne.isMobile, this.isDesktop = ne.isDesktop, this.isMobile ? document.documentElement.classList.add("m") : document.documentElement.classList.add("d"), this.DOM = {
			app: document.querySelector("#app"),
			fwOverlay: document.querySelector(".fw__overlay")
		};
		const e = this.DOM.app?.children[0]?.className.split(" ")[0];
		k.set(document.documentElement, {
			"--document-background-color": _r[e],
			"--cross-color": un[e]
		}), this.isIntroComplete = !1, this.onResize = In(this.onResize.bind(this), 200), this.onKeyDown = this.onKeyDown.bind(this), this.boundUpdate = this.update.bind(this), this.init()
	}
	init() {
		this.getTemplate(), this.workSlug = this.router?.getWorkSlugFromCurrentUrl() || null, this.createRouter(), this.createLenis(), this.createCanvas(), this.createPreloader(), this.createNavigation(), this.createDimensions(), this.createGridRules(), this.createCross(), this.createPages(), this.createAvailability(), this.createGridHelper(), this.onResize(), this.addEventListeners(), this.update()
	}
	getTemplate() {
		const e = this.DOM.app?.children[0];
		this.template = e ? e.className.split(" ")[0] : "index"
	}
	createRouter() {
		this.router = new pa({
			onNavigate: e => this.onChange(e)
		}), this.workSlug = this.router.getWorkSlugFromCurrentUrl()
	}
	createLenis() {
		this.lenis = new Ln({
			duration: 1,
			smoothWheel: !0,
			easing: e => e === 1 ? 1 : 1 - Math.pow(2, -10 * e)
		}), setTimeout(() => {
			window.scrollTo(0, 0)
		}, 250), this.lenis.on("scroll", O.update), k.ticker.add(e => {
			this.lenis.raf(e * 1e3)
		}), k.ticker.lagSmoothing(0), this.lenis.stop()
	}
	createCanvas() {
		this.canvas = new Za({
			template: this.template
		})
	}
	createPreloader() {
		this.preloader = new Xs({
			canvas: this.canvas
		}), this.preloader.once("completed", () => {
			this.onPreloaded()
		})
	}
	createNavigation() {
		this.navigation = new Ja({
			template: this.template
		})
	}
	createDimensions() {
		this.dimensions = new Qa
	}
	createPages() {
		this.pages = {
			index: new po({
				lenis: this.lenis,
				canvas: this.canvas
			}),
			fw: new po({
				lenis: this.lenis,
				canvas: this.canvas,
				ww: this.ww,
				wh: this.wh
			}),
			about: new ul({
				lenis: this.lenis,
				canvas: this.canvas
			}),
			archive: new fl({
				lenis: this.lenis,
				canvas: this.canvas
			}),
			overview: new vl({
				lenis: this.lenis,
				canvas: this.canvas,
				gridRules: this.gridRules,
				cross: this.cross
			}),
			work: new bo({
				lenis: this.lenis,
				canvas: this.canvas
			}),
			project: new bo({
				lenis: this.lenis,
				canvas: this.canvas
			}),
			404: new Fr({
				lenis: this.lenis,
				canvas: this.canvas
			}),
			"not-found": new Fr({
				lenis: this.lenis,
				canvas: this.canvas
			})
		}, this.page = this.pages[this.template] || this.pages.index, this.page.create()
	}
	createStats() {
		this.canvas
	}
	createAvailability() {
		this.availability = new el
	}
	createGridHelper() {
		this.gridHelper = new tl
	}
	createGridRules() {
		this.gridRules = new Wt
	}
	createCross() {
		this.cross = new il({
			gridRules: this.gridRules
		})
	}
	async onPreloaded() {
		return this.isIntroComplete = !0, this.lenis.scrollTo(0, {
			immediate: !0
		}), this.onResize(), k.timeline().add(t => this.page?.show(), 0).add(t => Ul(this.navigation.DOM), .7).add(t => jl(this.gridRules.DOM), .5).add(t => this.canvas?.onPreloaded(), 0)
	}
	async onChange({
		url: e,
		push: t = !0
	}) {
		try {
			const {
				template: i
			} = this.router.parseRoute(e);
			this.navigation.onChange(i), this.cross?.clearRules(), this.canvas?.onChangeStart(this.template), await this.page?.hide();
			const {
				element: s,
				title: o
			} = await this.router.fetch(e);
			document.title = o, t && history.pushState({}, "", e), this.DOM.app.innerHTML = s.innerHTML;
			const n = this.DOM.app.children[0];
			this.template = n?.className.split(" ")[0] || "index", this.workSlug = this.router.getWorkSlugFromCurrentUrl(), this.page = this.pages[this.template] || this.pages.index, this.page.create(), this.onResize(), this.canvas?.onChangeEnd(this.template), await this.page?.show()
		} catch (i) {
			console.error("Navigation error:", i)
		}
	}
	onResize() {
		const e = window.innerWidth,
			t = window.innerHeight;
		this.ww = e, this.wh = t, On(), this.dimensions?.onResize(), this.page?.onResize(), this.canvas?.onResize(), this.gridRules?.onResize(), this.cross?.onResize(), this.lastWidth !== e && (this.lastWidth = e, O.refresh())
	}
	onKeyDown(e) {
		this.gridHelper?.onKeyDown(e)
	}
	update() {
		this.stats?.begin(), this.page?.update(), this.canvas?.update(this.lenis), this.stats?.end(), this.stats?.update(), requestAnimationFrame(this.boundUpdate)
	}
	addEventListeners() {
		window.addEventListener("resize", this.onResize), window.addEventListener("keydown", this.onKeyDown)
	}
	removeEventListeners() {
		window.removeEventListener("resize", this.onResize), window.removeEventListener("keydown", this.onKeyDown)
	}
}
new Kl;
