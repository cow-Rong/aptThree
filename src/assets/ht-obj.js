!function(J, B, n) {
    "use strict";
    function V() {
        var H = []
          , j = [];
        return function() {
            return 0 === arguments.length ? j.join("") + x.apply(String, H) : (H.length + arguments.length > 1024 && (j.push(x.apply(String, H)),
            H.length = 0),
            Array.prototype.push.apply(H, arguments),
            void 0)
        }
    }
    function C(u, G, d, q, B) {
        var W, H, o = 8 * B - q - 1, w = (1 << o) - 1, R = w >> 1, A = -7, s = d ? B - 1 : 0, n = d ? -1 : 1, S = u[G + s];
        for (s += n,
        W = S & (1 << -A) - 1,
        S >>= -A,
        A += o; A > 0; W = 256 * W + u[G + s],
        s += n,
        A -= 8)
            ;
        for (H = W & (1 << -A) - 1,
        W >>= -A,
        A += q; A > 0; H = 256 * H + u[G + s],
        s += n,
        A -= 8)
            ;
        if (0 === W)
            W = 1 - R;
        else {
            if (W === w)
                return H ? 0 / 0 : 1 / 0 * (S ? -1 : 1);
            H += Math.pow(2, q),
            W -= R
        }
        return (S ? -1 : 1) * H * Math.pow(2, W - q)
    }
    var w = "ht"
      , i = J[w]
      , g = null
      , _ = Math
      , p = _.abs
      , T = _.max
      , k = Number.MAX_VALUE
      , $ = i.Default
      , s = $.getInternal()
      , K = $.clone
      , N = s.vec3TransformMat4
      , O = [0, 0]
      , f = s.appendArray
      , e = function() {
        function x(G, g, _, N) {
            if (G) {
                var Z = G[N];
                if (Z) {
                    _.ignoreColor || (g.color = Z.kd),
                    !_.ignoreTransparent && Z.d > 0 && Z.d < 1 && (g.transparent = !0,
                    g.opacity = Z.d);
                    var i;
                    if (!_.ignoreImage && (i = Z.map_kd)) {
                        i = i.split(" ");
                        for (var m = -1, c = 0; c < i.length; c++)
                            "-o" === i[c] ? (g.uvOffset = [parseFloat(i[c + 1]), parseFloat(i[c + 2])],
                            c += 3,
                            m = c) : "-s" === i[c] && (g.uvScale = [parseFloat(i[c + 1]), parseFloat(i[c + 2])],
                            c += 3,
                            m = c);
                        g.image = (_.prefix || "") + i.splice(m + 1).join(" ")
                    }
                }
            }
        }
        var z = /v( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)/
          , l = /vt( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)/
          , U = /vn( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)/
          , X = /^[og]\s*(.+)?/
          , P = function(S, E) {
            return E = parseInt(E),
            E >= 0 ? S[E - 1] : S[E + S.length]
        }
          , r = function(G, o, s, E, F) {
            if (G.lvs) {
                var m = P(o, E)
                  , M = P(o, F)
                  , a = s.matrix
                  , r = G.lvs;
                a ? (f(r, N(K(m), a)),
                f(r, N(K(M), a))) : (f(r, m),
                f(r, M))
            }
        }
          , G = function(U, O, T, i, L, H) {
            if (U.vs) {
                var S = P(O, i)
                  , b = P(O, L)
                  , A = P(O, H)
                  , o = T.matrix
                  , y = U.vs;
                if (T.flipFace) {
                    var h = b;
                    b = A,
                    A = h
                }
                o ? (f(y, N(K(S), o)),
                f(y, N(K(b), o)),
                f(y, N(K(A), o))) : (f(y, S),
                f(y, b),
                f(y, A))
            }
        }
          , I = function($, X, T, o, s, h) {
            if ($.vs) {
                var D = T.flipY
                  , i = o === n ? O : P(X, o)
                  , H = s === n ? O : P(X, s)
                  , d = h === n ? O : P(X, h);
                if (T.flipFace) {
                    var v = H;
                    H = d,
                    d = v
                }
                $.uv.push(i[0], D ? 1 - i[1] : i[1], H[0], D ? 1 - H[1] : H[1], d[0], D ? 1 - d[1] : d[1])
            }
        }
          , d = function(i, G, z, L, Q, d) {
            if (i.vs) {
                var J = P(G, L)
                  , _ = P(G, Q)
                  , C = P(G, d)
                  , k = z.normalMatrix
                  , X = i.ns;
                if (z.flipFace) {
                    var h = _;
                    _ = C,
                    C = h
                }
                k ? (f(X, N(K(J), k)),
                f(X, N(K(_), k)),
                f(X, N(K(C), k))) : (f(X, J),
                f(X, _),
                f(X, C))
            }
        }
          , q = function(C, F, Z, u) {
            for (var J = u.length - 1, K = 0; J > K; ++K)
                r(C, F, Z, u[K], u[K + 1]);
            r(C, F, Z, u[J], u[0])
        }
          , j = function(S, c, e, K, l, E, k, g) {
            var b = K && K.length && g;
            E[3] === n ? (G(S, c, l, E[0], E[1], E[2]),
            k ? I(S, e, l, k[0], k[1], k[2]) : S.uv && S.uv.length && I(S, e, l),
            b && d(S, K, l, g[0], g[1], g[2])) : (G(S, c, l, E[0], E[1], E[3]),
            G(S, c, l, E[1], E[2], E[3]),
            k ? (I(S, e, l, k[0], k[1], k[3]),
            I(S, e, l, k[1], k[2], k[3])) : S.uv && S.uv.length && (I(S, e, l),
            I(S, e, l)),
            b && (d(S, K, l, g[0], g[1], g[3]),
            d(S, K, l, g[1], g[2], g[3])))
        }
          , R = function(P, z, a, J) {
            var t, u, F, Z, c, W, A, w, b = k, E = k, g = k, o = -k, s = -k, y = -k;
            for (t in P)
                for (W = P[t].vs,
                w = W.length,
                u = 0; w > u; u += 3)
                    F = W[u + 0],
                    Z = W[u + 1],
                    c = W[u + 2],
                    b > F && (b = F),
                    E > Z && (E = Z),
                    g > c && (g = c),
                    F > o && (o = F),
                    Z > s && (s = Z),
                    c > y && (y = c);
            var f;
            if (a) {
                var B = b + (o - b) / 2
                  , n = E + (s - E) / 2
                  , K = g + (y - g) / 2;
                for (t in P) {
                    for (W = P[t].vs,
                    w = W.length,
                    u = 0; w > u; u += 3)
                        W[u + 0] -= B,
                        W[u + 1] -= n,
                        W[u + 2] -= K;
                    if (A = P[t].lvs)
                        for (w = A.length,
                        u = 0; w > u; u += 3)
                            A[u + 0] -= B,
                            A[u + 1] -= n,
                            A[u + 2] -= K
                }
                f = [B, n, K]
            }
            var S, N, O;
            a ? (S = o - b,
            N = s - E,
            O = y - g) : (S = 2 * T(p(b), p(o)),
            N = 2 * T(p(E), p(s)),
            O = 2 * T(p(g), p(y))),
            0 === S && (S = Math.min(N, O) / 1e3 || .001),
            0 === N && (N = Math.min(S, O) / 1e3 || .001),
            0 === O && (O = Math.min(S, N) / 1e3 || .001),
            J.rawS3 = [S, N, O];
            for (t in P) {
                if (W = P[t].vs,
                A = P[t].lvs,
                z) {
                    for (w = W.length,
                    u = 0; w > u; u += 3)
                        S && (W[u + 0] /= S),
                        N && (W[u + 1] /= N),
                        O && (W[u + 2] /= O);
                    if (A)
                        for (w = A.length,
                        u = 0; w > u; u += 3)
                            S && (A[u + 0] /= S),
                            N && (A[u + 1] /= N),
                            O && (A[u + 2] /= O);
                    var M = P[t].ns;
                    if (M) {
                        w = M.length;
                        var L = new i.Math.Vector3;
                        for (u = 0; w > u; u += 3)
                            L.set(M[u + 0] * S, M[u + 1] * N, M[u + 2] * O).normalize(),
                            M[u + 0] = L.x,
                            M[u + 1] = L.y,
                            M[u + 2] = L.z
                    }
                }
                P[t].rawS3 = J.rawS3,
                f && (P[t].center = f)
            }
        };
        return function(h, v, e) {
            if (!h)
                return g;
            (s.isString(v) || v instanceof ArrayBuffer) && (v = m(v)),
            e || (e = {}),
            e.flipY == g && (e.flipY = !0),
            (e.s3 || e.r3 || e.t3 || e.mat) && (e.matrix = s.createWorldMatrix(e.mat, e.s3, e.r3, e.rotationMode, e.t3));
            var n, T, D, c, I = i.Style["wf.loadQuadWireframe"], f = [], a = [], F = e.ignoreNormal ? g : [], B = e.reverseFlipMtls, w = {
                vs: [],
                uv: [],
                ns: F ? [] : g
            }, u = {
                htdefault: w
            }, k = new b(h), V = "", r = "";
            for (F && e.matrix && (e.normalMatrix = s.createNormalMatrix(e.matrix)); null != (T = k.stepNext()); )
                if (T = T.trim(),
                0 !== T.length && "#" !== T.charAt(0))
                    if (T.indexOf("\\") !== T.length - 1) {
                        if (V && (T = V + T,
                        V = ""),
                        T.indexOf("#QNAN0") >= 0 && (T = T.replace(/#QNAN0/gi, "0")),
                        D = z.exec(T))
                            f.push([parseFloat(D[1]), parseFloat(D[2]), parseFloat(D[3])]);
                        else if (D = l.exec(T))
                            a.push([parseFloat(D[1]), parseFloat(D[2])]);
                        else if (F && (D = U.exec(T)))
                            e.flipFace ? F.push([parseFloat(-D[1]), parseFloat(-D[2]), parseFloat(-D[3])]) : F.push([parseFloat(D[1]), parseFloat(D[2]), parseFloat(D[3])]);
                        else if ("f" === T[0]) {
                            var H = T.split(/\s+/);
                            if (H.length < 4)
                                continue;
                            var E, n, K, P = [], p = [], Z = [];
                            for (n = 1,
                            K = H.length; K > n; n++)
                                E = H[n].split("/"),
                                P.push(parseInt(E[0], 10)),
                                E.length > 1 && E[1].length > 0 && Z.push(parseInt(E[1], 10)),
                                E.length > 2 && E[2].length > 0 && p.push(parseInt(E[2], 10));
                            for (n = 0,
                            K = P.length - 2; K > n; n++)
                                j(w, f, a, F, e, [P[0], P[n + 1], P[n + 2]], Z.length ? [Z[0], Z[n + 1], Z[n + 2]] : g, p.length ? [p[0], p[n + 1], p[n + 2]] : g);
                            I && q(w, f, e, P)
                        } else if (e.part && null !== (D = X.exec(T)))
                            r = (" " + D[0].substr(1).trim()).substr(1);
                        else if (/^usemtl /.test(T)) {
                            var t = T.substring(7).trim();
                            t.split(" ").forEach(function(D) {
                                var V = e.part ? r + "_" + D : D;
                                (w = u[V]) || (w = u[V] = {
                                    name: V,
                                    vs: [],
                                    uv: [],
                                    ns: F ? [] : g,
                                    lvs: I ? [] : g
                                },
                                e.ignoreMtls && e.ignoreMtls.indexOf(D) >= 0 && delete w.vs,
                                (e.reverseFlip || "*" === B || B && B.indexOf(D) >= 0) && (w.reverseFlip = !0),
                                x(v, w, e, D))
                            })
                        }
                    } else
                        V += T.substring(0, T.length - 1);
            var J = [];
            for (var A in u) {
                var O = u[A].vs;
                if (O && 0 !== O.length) {
                    var Q = u[A].uv;
                    if (Q)
                        for (var L = 2 * O.length / 3 - Q.length; L-- > 0; )
                            Q.push(0)
                } else
                    J.push(A)
            }
            J.forEach(function(L) {
                delete u[L]
            }),
            R(u, e.cube, e.center, e);
            var S = e.shape3d;
            if (S) {
                var Y = [];
                for (var c in u) {
                    var w = u[c];
                    Y.rawS3 = w.rawS3,
                    w.center && (Y.center = w.center),
                    Y.push(w)
                }
                $.setShape3dModel(S, Y)
            }
            return u
        }
    }()
      , m = function(I) {
        var u = {};
        if (I)
            for (var q, f, P, J, S, E, V = new b(I), o = /\s+/; null != (f = V.stepNext()); )
                f = f.trim(),
                0 !== f.length && "#" !== f.charAt(0) && (P = f.indexOf(" "),
                J = (P ? f.substring(0, P) : f).toLowerCase(),
                S = (P ? f.substring(P + 1) : "").trim(),
                "newmtl" === J ? u[S] = q = {
                    name: S
                } : q && ("ka" === J || "kd" === J || "ks" === J ? (E = S.split(o, 3),
                q[J] = [parseFloat(E[0]), parseFloat(E[1]), parseFloat(E[2]), 1]) : q[J] = "ns" === J || "d" === J ? parseFloat(S) : S));
        return u
    }
      , b = function(V) {
        var z = this;
        if (V instanceof ArrayBuffer) {
            z.isBuffer = !0;
            var d = 0
              , C = new Uint8Array(V)
              , c = C.length
              , S = C.length;
            z.stepNext = function() {
                for (var B, s, q = d; c > d; )
                    if (B = C[d],
                    s = B >> 4,
                    12 === s || 13 == s)
                        d += 2;
                    else if (14 === s)
                        d += 3;
                    else if (d++,
                    10 === B)
                        return String.fromCharCode.apply(null, C.subarray(q, d));
                return d > q ? String.fromCharCode.apply(null, C.subarray(q, d)) : null
            }
        } else {
            z.isBuffer = !1;
            var K = V.split("\n")
              , a = 0
              , S = K.length;
            z.stepNext = function() {
                return S > a ? K[a++] : null
            }
        }
    };
    b.prototype = {},
    b.prototype.constructor = b,
    s.addMethod($, {
        loadObj: function(I, j, t) {
            t = t || {};
            var d = !1;
            /(MSIE |Trident\/|Edge\/)/.test(J.navigator.userAgent) && (d = !0);
            var o = function(R) {
                var j, d = t.finishFunc, o = t.shape3d, C = R ? e(R[0], R[1], t) : null;
                if (C) {
                    if (o)
                        j = $.getShape3dModel(o);
                    else {
                        j = [];
                        for (var z in C) {
                            var G = C[z];
                            j.rawS3 = G.rawS3,
                            j.push(G)
                        }
                    }
                    d && d(C, j, j.rawS3)
                } else
                    d && d(null)
            };
            if (d) {
                t.responseType = "arraybuffer";
                var U = function(E) {
                    $.xhrLoad(I, function(i) {
                        o([i, E])
                    }, t)
                };
                j ? $.xhrLoad(j, function(x) {
                    U(x)
                }, t) : U()
            } else
                $.xhrLoad(j ? [I, j] : [I], o, t)
        },
        parseObj: function(Z, x, r) {
            return e(Z, x, r)
        }
    });
    var W = i.ByteBuffer = function($, o, k) {
        if ("undefined" == typeof $ && ($ = W.DEFAULT_CAPACITY),
        "undefined" == typeof o && (o = W.DEFAULT_ENDIAN),
        "undefined" == typeof k && (k = W.DEFAULT_NOASSERT),
        !k) {
            if ($ = 0 | $,
            0 > $)
                throw RangeError("Illegal capacity");
            o = !!o,
            k = !!k
        }
        this.buffer = 0 === $ ? v : new ArrayBuffer($),
        this.view = 0 === $ ? null : new Uint8Array(this.buffer),
        this.offset = 0,
        this.markedOffset = -1,
        this.limit = $,
        this.littleEndian = o,
        this.noAssert = k
    }
      , v = new ArrayBuffer(0);
    W.LITTLE_ENDIAN = !0,
    W.BIG_ENDIAN = !1,
    W.DEFAULT_CAPACITY = 16,
    W.DEFAULT_ENDIAN = W.BIG_ENDIAN,
    W.DEFAULT_NOASSERT = !1,
    W.METRICS_BYTES = "b";
    var x = String.fromCharCode
      , u = W.prototype;
    u.readUint8 = function(H) {
        var G = "undefined" == typeof H;
        if (G && (H = this.offset),
        !this.noAssert) {
            if ("number" != typeof H || 0 !== H % 1)
                throw TypeError("Illegal offset: " + H + " (not an integer)");
            if (H >>>= 0,
            0 > H || H + 1 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + H + " (+" + 1 + ") <= " + this.buffer.byteLength)
        }
        var J = this.view[H];
        return G && (this.offset += 1),
        J
    }
    ,
    u.readUint16 = function(f) {
        var M = "undefined" == typeof f;
        if (M && (f = this.offset),
        !this.noAssert) {
            if ("number" != typeof f || 0 !== f % 1)
                throw TypeError("Illegal offset: " + f + " (not an integer)");
            if (f >>>= 0,
            0 > f || f + 2 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + f + " (+" + 2 + ") <= " + this.buffer.byteLength)
        }
        var D = 0;
        return this.littleEndian ? (D = this.view[f],
        D |= this.view[f + 1] << 8) : (D = this.view[f] << 8,
        D |= this.view[f + 1]),
        M && (this.offset += 2),
        D
    }
    ,
    u.readUint24 = function(_) {
        var P = "undefined" == typeof _;
        if (P && (_ = this.offset),
        !this.noAssert) {
            if ("number" != typeof _ || 0 !== _ % 1)
                throw TypeError("Illegal offset: " + _ + " (not an integer)");
            if (_ >>>= 0,
            0 > _ || _ + 4 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + _ + " (+" + 4 + ") <= " + this.buffer.byteLength)
        }
        var Z = 0;
        return this.littleEndian ? (Z = this.view[_ + 2] << 16,
        Z |= this.view[_ + 1] << 8,
        Z |= this.view[_]) : (Z = this.view[_ + 1] << 8,
        Z |= this.view[_ + 2],
        Z += this.view[_] << 16 >>> 0),
        Z |= 0,
        P && (this.offset += 3),
        Z
    }
    ,
    u.readUint32 = function(c) {
        var $ = "undefined" == typeof c;
        if ($ && (c = this.offset),
        !this.noAssert) {
            if ("number" != typeof c || 0 !== c % 1)
                throw TypeError("Illegal offset: " + c + " (not an integer)");
            if (c >>>= 0,
            0 > c || c + 4 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + c + " (+" + 4 + ") <= " + this.buffer.byteLength)
        }
        var m = 0;
        return this.littleEndian ? (m = this.view[c + 2] << 16,
        m |= this.view[c + 1] << 8,
        m |= this.view[c],
        m += this.view[c + 3] << 24 >>> 0) : (m = this.view[c + 1] << 16,
        m |= this.view[c + 2] << 8,
        m |= this.view[c + 3],
        m += this.view[c] << 24 >>> 0),
        $ && (this.offset += 4),
        m
    }
    ,
    u.readFloat32 = function(N) {
        var r = "undefined" == typeof N;
        if (r && (N = this.offset),
        !this.noAssert) {
            if ("number" != typeof N || 0 !== N % 1)
                throw TypeError("Illegal offset: " + N + " (not an integer)");
            if (N >>>= 0,
            0 > N || N + 4 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + N + " (+" + 4 + ") <= " + this.buffer.byteLength)
        }
        var S = C(this.view, N, this.littleEndian, 23, 4);
        return r && (this.offset += 4),
        S
    }
    ;
    var Z = function() {
        var H = {};
        return H.MAX_CODEPOINT = 1114111,
        H.decodeUTF8 = function(N, j) {
            for (var i, $, a, F, y = function(g) {
                g = g.slice(0, g.indexOf(null));
                var k = Error(g.toString());
                throw k.name = "TruncatedError",
                k.bytes = g,
                k
            }; null !== (i = N()); )
                if (0 === (128 & i))
                    j(i);
                else if (192 === (224 & i))
                    null === ($ = N()) && y([i, $]),
                    j((31 & i) << 6 | 63 & $);
                else if (224 === (240 & i))
                    (null === ($ = N()) || null === (a = N())) && y([i, $, a]),
                    j((15 & i) << 12 | (63 & $) << 6 | 63 & a);
                else {
                    if (240 !== (248 & i))
                        throw RangeError("Illegal starting byte: " + i);
                    (null === ($ = N()) || null === (a = N()) || null === (F = N())) && y([i, $, a, F]),
                    j((7 & i) << 18 | (63 & $) << 12 | (63 & a) << 6 | 63 & F)
                }
        }
        ,
        H.UTF16toUTF8 = function(p, J) {
            for (var O, W = null; ; ) {
                if (null === (O = null !== W ? W : p()))
                    break;
                O >= 55296 && 57343 >= O && null !== (W = p()) && W >= 56320 && 57343 >= W ? (J(1024 * (O - 55296) + W - 56320 + 65536),
                W = null) : J(O)
            }
            null !== W && J(W)
        }
        ,
        H.UTF8toUTF16 = function(i, D) {
            var $ = null;
            for ("number" == typeof i && ($ = i,
            i = function() {
                return null
            }
            ); null !== $ || null !== ($ = i()); )
                65535 >= $ ? D($) : ($ -= 65536,
                D(($ >> 10) + 55296),
                D($ % 1024 + 56320)),
                $ = null
        }
        ,
        H.decodeUTF8toUTF16 = function(Z, p) {
            H.decodeUTF8(Z, function(f) {
                H.UTF8toUTF16(f, p)
            })
        }
        ,
        H.calculateCodePoint = function(S) {
            return 128 > S ? 1 : 2048 > S ? 2 : 65536 > S ? 3 : 4
        }
        ,
        H.calculateUTF8 = function(h) {
            for (var B, m = 0; null !== (B = h()); )
                m += 128 > B ? 1 : 2048 > B ? 2 : 65536 > B ? 3 : 4;
            return m
        }
        ,
        H.calculateUTF16asUTF8 = function(Q) {
            var U = 0
              , G = 0;
            return H.UTF16toUTF8(Q, function(H) {
                ++U,
                G += 128 > H ? 1 : 2048 > H ? 2 : 65536 > H ? 3 : 4
            }),
            [U, G]
        }
        ,
        H
    }();
    u.readString = function(S, N, g) {
        "number" == typeof N && (g = N,
        N = n);
        var j = "undefined" == typeof g;
        if (j && (g = this.offset),
        "undefined" == typeof N && (N = W.METRICS_CHARS),
        !this.noAssert) {
            if ("number" != typeof S || 0 !== S % 1)
                throw TypeError("Illegal length: " + S + " (not an integer)");
            if (S |= 0,
            "number" != typeof g || 0 !== g % 1)
                throw TypeError("Illegal offset: " + g + " (not an integer)");
            if (g >>>= 0,
            0 > g || g + 0 > this.buffer.byteLength)
                throw RangeError("Illegal offset: 0 <= " + g + " (+" + 0 + ") <= " + this.buffer.byteLength)
        }
        var I, U = 0, l = g;
        if (N === W.METRICS_CHARS) {
            if (I = V(),
            Z.decodeUTF8(function() {
                return S > U && g < this.limit ? this.view[g++] : null
            }
            .bind(this), function(Y) {
                ++U,
                Z.UTF8toUTF16(Y, I)
            }),
            U !== S)
                throw RangeError("Illegal range: Truncated data, " + U + " == " + S);
            return j ? (this.offset = g,
            I()) : {
                string: I(),
                length: g - l
            }
        }
        if (N === W.METRICS_BYTES) {
            if (!this.noAssert) {
                if ("number" != typeof g || 0 !== g % 1)
                    throw TypeError("Illegal offset: " + g + " (not an integer)");
                if (g >>>= 0,
                0 > g || g + S > this.buffer.byteLength)
                    throw RangeError("Illegal offset: 0 <= " + g + " (+" + S + ") <= " + this.buffer.byteLength)
            }
            var B = g + S;
            if (Z.decodeUTF8toUTF16(function() {
                return B > g ? this.view[g++] : null
            }
            .bind(this), I = V(), this.noAssert),
            g !== B)
                throw RangeError("Illegal range: Truncated data, " + g + " == " + B);
            return j ? (this.offset = g,
            I()) : {
                string: I(),
                length: g - l
            }
        }
        throw TypeError("Unsupported metrics: " + N)
    }
    ;
    var U = function(L) {
        if (L) {
            var A = new W(0);
            A.buffer = L,
            A.limit = L.byteLength,
            A.view = L.byteLength > 0 ? new Uint8Array(L) : null;
            var g = [];
            return r(g, A),
            l(g, A),
            I(g, A),
            g
        }
    }
      , r = function(A, J) {
        J.offset += 19
    }
      , l = function(e, c) {
        var K = c.readUint8();
        1 & K && (e.center = Y(c)),
        2 & K && (e.rawS3 = Y(c))
    }
      , L = function(g) {
        return [g.readFloat32(), g.readFloat32()]
    }
      , Y = function(h) {
        return [h.readFloat32(), h.readFloat32(), h.readFloat32()]
    }
      , P = function(Q) {
        var A = Q.readUint32();
        return Q.readString(A, W.METRICS_BYTES)
    }
      , I = function(Q, k) {
        for (var R = k.readUint8(), L = 0; R > L; L++)
            Q.push(D(k))
    }
      , D = function(M) {
        var b = {}
          , I = M.readUint32()
          , c = 0
          , i = I & 1 << c++
          , U = I & 1 << c++
          , y = I & 1 << c++
          , v = I & 1 << c++
          , p = I & 1 << c++
          , Q = I & 1 << c++
          , s = I & 1 << c++
          , A = I & 1 << c++
          , d = I & 1 << c++
          , m = I & 1 << c++
          , _ = I & 1 << c++
          , T = I & 1 << c++;
        return (i || U) && X(b, M, 3, "vs", "lvs"),
        y && X(b, M, 2, "uv"),
        v && X(b, M, 3, "ns"),
        p && (b.name = P(M)),
        Q && (b.color = Y(M)),
        s && (b.transparent = !!M.readUint8()),
        A && (b.opacity = M.readFloat32()),
        d && (b.uvoffset = L(M)),
        m && (b.uvScale = Y(M)),
        _ && (b.image = P(M)),
        T && (b.reverseFlip = !!M.readUint8()),
        b
    }
      , A = 16383
      , q = function(N) {
        var V = N.readUint16()
          , z = 16384 & V
          , D = 32768 & V
          , c = (V & A) / A
          , l = 0;
        return D && (l = N.readUint16()),
        (z ? 1 : -1) * (l + c)
    }
      , c = function(v) {
        var i = v.readUint32()
          , C = i & 1 << 30
          , y = i & 1 << 29
          , m = i & 1 << 28
          , O = 16383
          , h = (16383 & i >> 14) / O
          , d = (16383 & i) / O
          , M = Math.sqrt(1 - h * h - d * d) || 0;
        return [h * (C ? 1 : -1), d * (y ? 1 : -1), M * (m ? 1 : -1)]
    }
      , X = function(p, F, d, V, i) {
        var Q = F.readUint32();
        F.readUint8();
        var J, b, o, S = F.readUint32(), R = F.readUint32(), h = [];
        if ("uv" === V)
            for (J = 0; Q > J; J++)
                b = q(F),
                o = q(F),
                h.push([b, o]);
        else if ("ns" === V)
            for (J = 0; Q > J; J++)
                h.push(c(F));
        else
            for (var J = 0; Q > J; J++)
                h.push(Y(F));
        var W;
        W = 256 > Q ? "readUint8" : 65536 > Q ? "readUint16" : 16777216 > Q ? "readUint24" : "readUint32";
        var r, K, g;
        if (S)
            for (r = p[V] = [],
            J = 0; S > J; J++)
                K = F[W](),
                g = h[K],
                "uv" === V ? r.push(g[0], g[1]) : r.push(g[0], g[1], g[2]);
        if (R)
            for (r = p[i] = [],
            J = 0; R > J; J++)
                K = F[W](),
                g = h[K],
                r.push(g[0], g[1], g[2])
    };
    $.getInternal().addMethod($, {
        loadBin: function(r, Y) {
            Y = Y || {};
            var I = function(D) {
                var R, Z = Y.finishFunc, S = Y.shape3d, u = D ? U(D) : null;
                if (u) {
                    if (S)
                        R = $.getShape3dModel(S);
                    else {
                        R = [];
                        for (var V in u) {
                            var g = u[V];
                            R.rawS3 = g.rawS3,
                            R.push(g)
                        }
                    }
                    Z && Z(u, R, R.rawS3)
                } else
                    Z && Z(null)
            };
            Y.responseType = "arraybuffer",
            $.xhrLoad(r, function(H) {
                I(H)
            }, Y)
        },
        parseBin: function(R) {
            return U(R)
        }
    })
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : (0,
eval)("this"), Object);
