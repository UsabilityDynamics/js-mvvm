/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['knockout.mapping.js']) {
  _$jscoverage['knockout.mapping.js'] = [];
  _$jscoverage['knockout.mapping.js'][12] = 0;
  _$jscoverage['knockout.mapping.js'][13] = 0;
  _$jscoverage['knockout.mapping.js'][14] = 0;
  _$jscoverage['knockout.mapping.js'][15] = 0;
  _$jscoverage['knockout.mapping.js'][16] = 0;
  _$jscoverage['knockout.mapping.js'][17] = 0;
  _$jscoverage['knockout.mapping.js'][18] = 0;
  _$jscoverage['knockout.mapping.js'][19] = 0;
  _$jscoverage['knockout.mapping.js'][20] = 0;
  _$jscoverage['knockout.mapping.js'][21] = 0;
  _$jscoverage['knockout.mapping.js'][22] = 0;
  _$jscoverage['knockout.mapping.js'][23] = 0;
  _$jscoverage['knockout.mapping.js'][24] = 0;
  _$jscoverage['knockout.mapping.js'][25] = 0;
  _$jscoverage['knockout.mapping.js'][26] = 0;
  _$jscoverage['knockout.mapping.js'][27] = 0;
  _$jscoverage['knockout.mapping.js'][28] = 0;
}
_$jscoverage['knockout.mapping.js'][12]++;
(function (d) {
  _$jscoverage['knockout.mapping.js'][12]++;
  "function" === typeof require && "object" === typeof exports && "object" === typeof module? d(require("knockout"), exports): "function" === typeof define && define.amd? define(["knockout", "exports"], d): d(ko, ko.mapping = {});
})((function (d, e) {
  _$jscoverage['knockout.mapping.js'][12]++;
  function w(b, c) {
    _$jscoverage['knockout.mapping.js'][12]++;
    for (var a in c) {
      _$jscoverage['knockout.mapping.js'][12]++;
      if (c.hasOwnProperty(a) && c[a]) {
        _$jscoverage['knockout.mapping.js'][12]++;
        if (a && b[a] && "array" !== e.getType(b[a])) {
          _$jscoverage['knockout.mapping.js'][12]++;
          w(b[a], c[a]);
        }
        else {
          _$jscoverage['knockout.mapping.js'][12]++;
          if ("array" === e.getType(b[a]) && "array" === e.getType(c[a])) {
            _$jscoverage['knockout.mapping.js'][12]++;
            for (var d = b, g = a, i = b[a], r = c[a], t = {}, h = i.length - 1; 0 <= h; --h) {
              _$jscoverage['knockout.mapping.js'][12]++;
              t[i[h]] = i[h];
}
            _$jscoverage['knockout.mapping.js'][12]++;
            for (h = r.length - 1; 0 <= h; --h) {
              _$jscoverage['knockout.mapping.js'][12]++;
              t[r[h]] = r[h];
}
            _$jscoverage['knockout.mapping.js'][13]++;
            i = [];
            _$jscoverage['knockout.mapping.js'][13]++;
            r = void 0;
            _$jscoverage['knockout.mapping.js'][13]++;
            for (r in t) {
              _$jscoverage['knockout.mapping.js'][13]++;
              i.push(t[r]);
}
            _$jscoverage['knockout.mapping.js'][13]++;
            d[g] = i;
          }
          else {
            _$jscoverage['knockout.mapping.js'][13]++;
            b[a] = c[a];
          }
        }
      }
}
}
  _$jscoverage['knockout.mapping.js'][13]++;
  function D(b, c) {
    _$jscoverage['knockout.mapping.js'][13]++;
    var a = {};
    _$jscoverage['knockout.mapping.js'][13]++;
    w(a, b);
    _$jscoverage['knockout.mapping.js'][13]++;
    w(a, c);
    _$jscoverage['knockout.mapping.js'][13]++;
    return a;
}
  _$jscoverage['knockout.mapping.js'][13]++;
  function A(b, c) {
    _$jscoverage['knockout.mapping.js'][13]++;
    for (var a = D({}, b), d = K.length - 1; 0 <= d; d--) {
      _$jscoverage['knockout.mapping.js'][13]++;
      var e = K[d];
      _$jscoverage['knockout.mapping.js'][13]++;
      a[e] && (a[""] instanceof Object || (a[""] = {}), a[""][e] = a[e], delete a[e]);
}
    _$jscoverage['knockout.mapping.js'][13]++;
    c && (a.ignore = p(c.ignore, a.ignore), a.include = p(c.include, a.include), a.copy = p(c.copy, a.copy));
    _$jscoverage['knockout.mapping.js'][13]++;
    a.ignore = p(a.ignore, j.ignore);
    _$jscoverage['knockout.mapping.js'][13]++;
    a.include = p(a.include, j.include);
    _$jscoverage['knockout.mapping.js'][13]++;
    a.copy = p(a.copy, j.copy);
    _$jscoverage['knockout.mapping.js'][13]++;
    a.mappedProperties = a.mappedProperties || {};
    _$jscoverage['knockout.mapping.js'][13]++;
    return a;
}
  _$jscoverage['knockout.mapping.js'][13]++;
  function p(b, c) {
    _$jscoverage['knockout.mapping.js'][13]++;
    "array" !== e.getType(b) && (b = "undefined" === e.getType(b)? []: [b]);
    _$jscoverage['knockout.mapping.js'][14]++;
    "array" !== e.getType(c) && (c = "undefined" === e.getType(c)? []: [c]);
    _$jscoverage['knockout.mapping.js'][14]++;
    return d.utils.arrayGetDistinctValues(b.concat(c));
}
  _$jscoverage['knockout.mapping.js'][14]++;
  function E(b, c, a, f, g, i, r) {
    _$jscoverage['knockout.mapping.js'][14]++;
    var t = "array" === e.getType(d.utils.unwrapObservable(c)), i = i || "";
    _$jscoverage['knockout.mapping.js'][14]++;
    if (e.isMapped(b)) {
      _$jscoverage['knockout.mapping.js'][14]++;
      var h = d.utils.unwrapObservable(b)[q], a = D(h, a);
    }
    _$jscoverage['knockout.mapping.js'][14]++;
    var m = (function () {
  _$jscoverage['knockout.mapping.js'][14]++;
  return a[f] && a[f].create instanceof Function;
}), j = (function (b) {
  _$jscoverage['knockout.mapping.js'][14]++;
  var e = F, h = d.dependentObservable;
  _$jscoverage['knockout.mapping.js'][14]++;
  d.dependentObservable = (function (a, b, c) {
  _$jscoverage['knockout.mapping.js'][14]++;
  c = c || {};
  _$jscoverage['knockout.mapping.js'][14]++;
  a && "object" == typeof a && (c = a);
  _$jscoverage['knockout.mapping.js'][15]++;
  var f = c.deferEvaluation, L = false;
  _$jscoverage['knockout.mapping.js'][15]++;
  c.deferEvaluation = true;
  _$jscoverage['knockout.mapping.js'][15]++;
  a = new G(a, b, c);
  _$jscoverage['knockout.mapping.js'][15]++;
  if (! f) {
    _$jscoverage['knockout.mapping.js'][15]++;
    var g = a, f = d.dependentObservable;
    _$jscoverage['knockout.mapping.js'][15]++;
    d.dependentObservable = G;
    _$jscoverage['knockout.mapping.js'][15]++;
    a = d.isWriteableObservable(g);
    _$jscoverage['knockout.mapping.js'][15]++;
    d.dependentObservable = f;
    _$jscoverage['knockout.mapping.js'][15]++;
    a = G({read: (function () {
  _$jscoverage['knockout.mapping.js'][15]++;
  L || (d.utils.arrayRemoveItem(e, g), L = true);
  _$jscoverage['knockout.mapping.js'][15]++;
  return g.apply(g, arguments);
}), write: a && (function (a) {
  _$jscoverage['knockout.mapping.js'][15]++;
  return g(a);
}), deferEvaluation: true});
    _$jscoverage['knockout.mapping.js'][15]++;
    e.push(a);
  }
  _$jscoverage['knockout.mapping.js'][15]++;
  return a;
});
  _$jscoverage['knockout.mapping.js'][15]++;
  d.dependentObservable.fn = G.fn;
  _$jscoverage['knockout.mapping.js'][15]++;
  d.computed = d.dependentObservable;
  _$jscoverage['knockout.mapping.js'][15]++;
  b = d.utils.unwrapObservable(g) instanceof Array? a[f].create({data: b || c, parent: r, skip: M}): a[f].create({data: b || c, parent: r});
  _$jscoverage['knockout.mapping.js'][16]++;
  d.dependentObservable = h;
  _$jscoverage['knockout.mapping.js'][16]++;
  d.computed = d.dependentObservable;
  _$jscoverage['knockout.mapping.js'][16]++;
  return b;
}), x = (function () {
  _$jscoverage['knockout.mapping.js'][16]++;
  return a[f] && a[f].update instanceof Function;
}), y = (function (b, e) {
  _$jscoverage['knockout.mapping.js'][16]++;
  var g = {data: e || c, parent: r, target: d.utils.unwrapObservable(b)};
  _$jscoverage['knockout.mapping.js'][16]++;
  d.isWriteableObservable(b) && (g.observable = b);
  _$jscoverage['knockout.mapping.js'][16]++;
  return a[f].update(g);
});
    _$jscoverage['knockout.mapping.js'][16]++;
    if (h = H.get(c)) {
      _$jscoverage['knockout.mapping.js'][16]++;
      return h;
    }
    _$jscoverage['knockout.mapping.js'][16]++;
    f = f || "";
    _$jscoverage['knockout.mapping.js'][16]++;
    if (t) {
      _$jscoverage['knockout.mapping.js'][16]++;
      var t = [], s = false, k = (function (a) {
  _$jscoverage['knockout.mapping.js'][16]++;
  return a;
});
      _$jscoverage['knockout.mapping.js'][16]++;
      a[f] && a[f].key && (k = a[f].key, s = true);
      _$jscoverage['knockout.mapping.js'][16]++;
      d.isObservable(b) || (b = d.observableArray([]), b.mappedRemove = (function (a) {
  _$jscoverage['knockout.mapping.js'][16]++;
  var c = typeof a == "function"? a: (function (b) {
  _$jscoverage['knockout.mapping.js'][16]++;
  return b === k(a);
});
  _$jscoverage['knockout.mapping.js'][17]++;
  return b.remove((function (a) {
  _$jscoverage['knockout.mapping.js'][17]++;
  return c(k(a));
}));
}), b.mappedRemoveAll = (function (a) {
  _$jscoverage['knockout.mapping.js'][17]++;
  var c = B(a, k);
  _$jscoverage['knockout.mapping.js'][17]++;
  return b.remove((function (a) {
  _$jscoverage['knockout.mapping.js'][17]++;
  return d.utils.arrayIndexOf(c, k(a)) != -1;
}));
}), b.mappedDestroy = (function (a) {
  _$jscoverage['knockout.mapping.js'][17]++;
  var c = typeof a == "function"? a: (function (b) {
  _$jscoverage['knockout.mapping.js'][17]++;
  return b === k(a);
});
  _$jscoverage['knockout.mapping.js'][17]++;
  return b.destroy((function (a) {
  _$jscoverage['knockout.mapping.js'][17]++;
  return c(k(a));
}));
}), b.mappedDestroyAll = (function (a) {
  _$jscoverage['knockout.mapping.js'][17]++;
  var c = B(a, k);
  _$jscoverage['knockout.mapping.js'][17]++;
  return b.destroy((function (a) {
  _$jscoverage['knockout.mapping.js'][17]++;
  return d.utils.arrayIndexOf(c, k(a)) != -1;
}));
}), b.mappedIndexOf = (function (a) {
  _$jscoverage['knockout.mapping.js'][17]++;
  var c = B(b(), k), a = k(a);
  _$jscoverage['knockout.mapping.js'][17]++;
  return d.utils.arrayIndexOf(c, a);
}), b.mappedCreate = (function (a) {
  _$jscoverage['knockout.mapping.js'][18]++;
  if (b.mappedIndexOf(a) !== -1) {
    _$jscoverage['knockout.mapping.js'][18]++;
    throw Error("There already is an object with the key that you specified.");
  }
  _$jscoverage['knockout.mapping.js'][18]++;
  var c = m()? j(a): a;
  _$jscoverage['knockout.mapping.js'][18]++;
  if (x()) {
    _$jscoverage['knockout.mapping.js'][18]++;
    a = y(c, a);
    _$jscoverage['knockout.mapping.js'][18]++;
    d.isWriteableObservable(c)? c(a): c = a;
  }
  _$jscoverage['knockout.mapping.js'][18]++;
  b.push(c);
  _$jscoverage['knockout.mapping.js'][18]++;
  return c;
}));
      _$jscoverage['knockout.mapping.js'][18]++;
      var h = B(d.utils.unwrapObservable(b), k).sort(), n = B(c, k);
      _$jscoverage['knockout.mapping.js'][18]++;
      s && n.sort();
      _$jscoverage['knockout.mapping.js'][18]++;
      var s = d.utils.compareArrays(h, n), h = {}, p, z = d.utils.unwrapObservable(c), v = {}, w = true, n = 0;
      _$jscoverage['knockout.mapping.js'][18]++;
      for (p = z.length; n < p; n++) {
        _$jscoverage['knockout.mapping.js'][18]++;
        var o = k(z[n]);
        _$jscoverage['knockout.mapping.js'][18]++;
        if (void 0 === o || o instanceof Object) {
          _$jscoverage['knockout.mapping.js'][18]++;
          w = false;
          _$jscoverage['knockout.mapping.js'][18]++;
          break;
        }
        _$jscoverage['knockout.mapping.js'][18]++;
        v[o] = z[n];
}
      _$jscoverage['knockout.mapping.js'][18]++;
      var z = [], A = 0, n = 0;
      _$jscoverage['knockout.mapping.js'][18]++;
      for (p = s.length; n < p; n++) {
        _$jscoverage['knockout.mapping.js'][18]++;
        var o = s[n], l, u = i + "[" + n + "]";
        _$jscoverage['knockout.mapping.js'][19]++;
        switch (o.status) {
        case "added":
          _$jscoverage['knockout.mapping.js'][19]++;
          var C = w? v[o.value]: I(d.utils.unwrapObservable(c), o.value, k);
          _$jscoverage['knockout.mapping.js'][19]++;
          l = E(void 0, C, a, f, b, u, g);
          _$jscoverage['knockout.mapping.js'][19]++;
          m() || (l = d.utils.unwrapObservable(l));
          _$jscoverage['knockout.mapping.js'][19]++;
          u = N(d.utils.unwrapObservable(c), C, h);
          _$jscoverage['knockout.mapping.js'][19]++;
          l === M? A++: z[u - A] = l;
          _$jscoverage['knockout.mapping.js'][19]++;
          h[u] = true;
          _$jscoverage['knockout.mapping.js'][19]++;
          break;
        case "retained":
          _$jscoverage['knockout.mapping.js'][19]++;
          C = w? v[o.value]: I(d.utils.unwrapObservable(c), o.value, k);
          _$jscoverage['knockout.mapping.js'][19]++;
          l = I(b, o.value, k);
          _$jscoverage['knockout.mapping.js'][19]++;
          E(l, C, a, f, b, u, g);
          _$jscoverage['knockout.mapping.js'][19]++;
          u = N(d.utils.unwrapObservable(c), C, h);
          _$jscoverage['knockout.mapping.js'][19]++;
          z[u] = l;
          _$jscoverage['knockout.mapping.js'][19]++;
          h[u] = true;
          _$jscoverage['knockout.mapping.js'][19]++;
          break;
        case "deleted":
          _$jscoverage['knockout.mapping.js'][19]++;
          l = I(b, o.value, k);
        }
        _$jscoverage['knockout.mapping.js'][19]++;
        t.push({event: o.status, item: l});
}
      _$jscoverage['knockout.mapping.js'][19]++;
      b(z);
      _$jscoverage['knockout.mapping.js'][19]++;
      a[f] && a[f].arrayChanged && d.utils.arrayForEach(t, (function (b) {
  _$jscoverage['knockout.mapping.js'][20]++;
  a[f].arrayChanged(b.event, b.item);
}));
    }
    else {
      _$jscoverage['knockout.mapping.js'][20]++;
      if (O(c)) {
        _$jscoverage['knockout.mapping.js'][20]++;
        b = d.utils.unwrapObservable(b);
        _$jscoverage['knockout.mapping.js'][20]++;
        if (! b) {
          _$jscoverage['knockout.mapping.js'][20]++;
          if (m()) {
            _$jscoverage['knockout.mapping.js'][20]++;
            return s = j(), x() && (s = y(s)), s;
          }
          _$jscoverage['knockout.mapping.js'][20]++;
          if (x()) {
            _$jscoverage['knockout.mapping.js'][20]++;
            return y(s);
          }
          _$jscoverage['knockout.mapping.js'][20]++;
          b = {};
        }
        _$jscoverage['knockout.mapping.js'][20]++;
        x() && (b = y(b));
        _$jscoverage['knockout.mapping.js'][20]++;
        H.save(c, b);
        _$jscoverage['knockout.mapping.js'][20]++;
        if (x()) {
          _$jscoverage['knockout.mapping.js'][20]++;
          return b;
        }
        _$jscoverage['knockout.mapping.js'][20]++;
        P(c, (function (f) {
  _$jscoverage['knockout.mapping.js'][20]++;
  var e = i.length? i + "." + f: f;
  _$jscoverage['knockout.mapping.js'][20]++;
  if (-1 == d.utils.arrayIndexOf(a.ignore, e)) {
    _$jscoverage['knockout.mapping.js'][20]++;
    if (-1 != d.utils.arrayIndexOf(a.copy, e)) {
      _$jscoverage['knockout.mapping.js'][20]++;
      b[f] = c[f];
    }
    else {
      _$jscoverage['knockout.mapping.js'][20]++;
      var g = H.get(c[f]), h = E(b[f], c[f], a, f, b, e, b), g = g || h;
      _$jscoverage['knockout.mapping.js'][20]++;
      if (d.isWriteableObservable(b[f])) {
        _$jscoverage['knockout.mapping.js'][20]++;
        b[f](d.utils.unwrapObservable(g));
      }
      else {
        _$jscoverage['knockout.mapping.js'][20]++;
        b[f] = g;
      }
      _$jscoverage['knockout.mapping.js'][20]++;
      a.mappedProperties[e] = true;
    }
  }
}));
      }
      else {
        _$jscoverage['knockout.mapping.js'][20]++;
        switch (e.getType(c)) {
        case "function":
          _$jscoverage['knockout.mapping.js'][20]++;
          x()? d.isWriteableObservable(c)? (c(y(c)), b = c): b = y(c): b = c;
          _$jscoverage['knockout.mapping.js'][21]++;
          break;
        default:
          _$jscoverage['knockout.mapping.js'][21]++;
          if (d.isWriteableObservable(b)) {
            _$jscoverage['knockout.mapping.js'][21]++;
            return l = x()? y(b): d.utils.unwrapObservable(c), b(l), l;
          }
          _$jscoverage['knockout.mapping.js'][21]++;
          b = m()? j(): d.observable(d.utils.unwrapObservable(c));
        }
      }
    }
    _$jscoverage['knockout.mapping.js'][21]++;
    return b;
}
  _$jscoverage['knockout.mapping.js'][21]++;
  function N(b, c, a) {
    _$jscoverage['knockout.mapping.js'][21]++;
    for (var d = 0, e = b.length; d < e; d++) {
      _$jscoverage['knockout.mapping.js'][21]++;
      if (true !== a[d] && b[d] === c) {
        _$jscoverage['knockout.mapping.js'][21]++;
        return d;
      }
}
    _$jscoverage['knockout.mapping.js'][21]++;
    return null;
}
  _$jscoverage['knockout.mapping.js'][21]++;
  function Q(b, c) {
    _$jscoverage['knockout.mapping.js'][21]++;
    var a;
    _$jscoverage['knockout.mapping.js'][21]++;
    c && (a = c(b));
    _$jscoverage['knockout.mapping.js'][21]++;
    "undefined" === e.getType(a) && (a = b);
    _$jscoverage['knockout.mapping.js'][21]++;
    return d.utils.unwrapObservable(a);
}
  _$jscoverage['knockout.mapping.js'][21]++;
  function I(b, c, a) {
    _$jscoverage['knockout.mapping.js'][21]++;
    for (var b = d.utils.unwrapObservable(b), f = 0, e = b.length; f < e; f++) {
      _$jscoverage['knockout.mapping.js'][21]++;
      var i = b[f];
      _$jscoverage['knockout.mapping.js'][21]++;
      if (Q(i, a) === c) {
        _$jscoverage['knockout.mapping.js'][22]++;
        return i;
      }
}
    _$jscoverage['knockout.mapping.js'][22]++;
    throw Error("When calling ko.update*, the key '" + c + "' was not found!");
}
  _$jscoverage['knockout.mapping.js'][22]++;
  function B(b, c) {
    _$jscoverage['knockout.mapping.js'][22]++;
    return d.utils.arrayMap(d.utils.unwrapObservable(b), (function (a) {
  _$jscoverage['knockout.mapping.js'][22]++;
  return c? Q(a, c): a;
}));
}
  _$jscoverage['knockout.mapping.js'][22]++;
  function P(b, c) {
    _$jscoverage['knockout.mapping.js'][22]++;
    if ("array" === e.getType(b)) {
      _$jscoverage['knockout.mapping.js'][22]++;
      for (var a = 0; a < b.length; a++) {
        _$jscoverage['knockout.mapping.js'][22]++;
        c(a);
}
    }
    else {
      _$jscoverage['knockout.mapping.js'][22]++;
      for (a in b) {
        _$jscoverage['knockout.mapping.js'][22]++;
        c(a);
}
    }
}
  _$jscoverage['knockout.mapping.js'][22]++;
  function O(b) {
    _$jscoverage['knockout.mapping.js'][22]++;
    var c = e.getType(b);
    _$jscoverage['knockout.mapping.js'][22]++;
    return ("object" === c || "array" === c) && null !== b;
}
  _$jscoverage['knockout.mapping.js'][22]++;
  function S() {
    _$jscoverage['knockout.mapping.js'][22]++;
    var b = [], c = [];
    _$jscoverage['knockout.mapping.js'][22]++;
    this.save = (function (a, f) {
  _$jscoverage['knockout.mapping.js'][22]++;
  var e = d.utils.arrayIndexOf(b, a);
  _$jscoverage['knockout.mapping.js'][22]++;
  0 <= e? c[e] = f: (b.push(a), c.push(f));
});
    _$jscoverage['knockout.mapping.js'][22]++;
    this.get = (function (a) {
  _$jscoverage['knockout.mapping.js'][22]++;
  a = d.utils.arrayIndexOf(b, a);
  _$jscoverage['knockout.mapping.js'][23]++;
  return 0 <= a? c[a]: void 0;
});
}
  _$jscoverage['knockout.mapping.js'][23]++;
  function R() {
    _$jscoverage['knockout.mapping.js'][23]++;
    var b = {}, c = (function (a) {
  _$jscoverage['knockout.mapping.js'][23]++;
  var c;
  _$jscoverage['knockout.mapping.js'][23]++;
  try {
    _$jscoverage['knockout.mapping.js'][23]++;
    c = a;
  }
  catch (d) {
    _$jscoverage['knockout.mapping.js'][23]++;
    c = "$$$";
  }
  _$jscoverage['knockout.mapping.js'][23]++;
  a = b[c];
  _$jscoverage['knockout.mapping.js'][23]++;
  void 0 === a && (a = new S(), b[c] = a);
  _$jscoverage['knockout.mapping.js'][23]++;
  return a;
});
    _$jscoverage['knockout.mapping.js'][23]++;
    this.save = (function (a, b) {
  _$jscoverage['knockout.mapping.js'][23]++;
  c(a).save(a, b);
});
    _$jscoverage['knockout.mapping.js'][23]++;
    this.get = (function (a) {
  _$jscoverage['knockout.mapping.js'][23]++;
  return c(a).get(a);
});
}
  _$jscoverage['knockout.mapping.js'][23]++;
  var q = "__ko_mapping__", G = d.dependentObservable, J = 0, F, H, K = ["create", "update", "key", "arrayChanged"], M = {}, v = {include: ["_destroy"], ignore: [], copy: []}, j = v;
  _$jscoverage['knockout.mapping.js'][23]++;
  e.isMapped = (function (b) {
  _$jscoverage['knockout.mapping.js'][23]++;
  return (b = d.utils.unwrapObservable(b)) && b[q];
});
  _$jscoverage['knockout.mapping.js'][23]++;
  e.fromJS = (function (b) {
  _$jscoverage['knockout.mapping.js'][23]++;
  if (0 == arguments.length) {
    _$jscoverage['knockout.mapping.js'][23]++;
    throw Error("When calling ko.fromJS, pass the object you want to convert.");
  }
  _$jscoverage['knockout.mapping.js'][24]++;
  window.setTimeout((function () {
  _$jscoverage['knockout.mapping.js'][24]++;
  J = 0;
}), 0);
  _$jscoverage['knockout.mapping.js'][24]++;
  J++ || (F = [], H = new R());
  _$jscoverage['knockout.mapping.js'][24]++;
  var c, a;
  _$jscoverage['knockout.mapping.js'][24]++;
  2 == arguments.length && (arguments[1][q]? a = arguments[1]: c = arguments[1]);
  _$jscoverage['knockout.mapping.js'][24]++;
  3 == arguments.length && (c = arguments[1], a = arguments[2]);
  _$jscoverage['knockout.mapping.js'][24]++;
  a && (c = D(c, a[q]));
  _$jscoverage['knockout.mapping.js'][24]++;
  c = A(c);
  _$jscoverage['knockout.mapping.js'][24]++;
  var d = E(a, b, c);
  _$jscoverage['knockout.mapping.js'][24]++;
  a && (d = a);
  _$jscoverage['knockout.mapping.js'][24]++;
  --J || window.setTimeout((function () {
  _$jscoverage['knockout.mapping.js'][24]++;
  for (; F.length;) {
    _$jscoverage['knockout.mapping.js'][24]++;
    var a = F.pop();
    _$jscoverage['knockout.mapping.js'][24]++;
    a && a();
}
}), 0);
  _$jscoverage['knockout.mapping.js'][24]++;
  d[q] = D(d[q], c);
  _$jscoverage['knockout.mapping.js'][24]++;
  return d;
});
  _$jscoverage['knockout.mapping.js'][24]++;
  e.fromJSON = (function (b) {
  _$jscoverage['knockout.mapping.js'][24]++;
  var c = d.utils.parseJson(b);
  _$jscoverage['knockout.mapping.js'][24]++;
  arguments[0] = c;
  _$jscoverage['knockout.mapping.js'][24]++;
  return e.fromJS.apply(this, arguments);
});
  _$jscoverage['knockout.mapping.js'][24]++;
  e.updateFromJS = (function () {
  _$jscoverage['knockout.mapping.js'][24]++;
  throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");
});
  _$jscoverage['knockout.mapping.js'][25]++;
  e.updateFromJSON = (function () {
  _$jscoverage['knockout.mapping.js'][25]++;
  throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");
});
  _$jscoverage['knockout.mapping.js'][25]++;
  e.toJS = (function (b, c) {
  _$jscoverage['knockout.mapping.js'][25]++;
  j || e.resetDefaultOptions();
  _$jscoverage['knockout.mapping.js'][25]++;
  if (0 == arguments.length) {
    _$jscoverage['knockout.mapping.js'][25]++;
    throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");
  }
  _$jscoverage['knockout.mapping.js'][25]++;
  if ("array" !== e.getType(j.ignore)) {
    _$jscoverage['knockout.mapping.js'][25]++;
    throw Error("ko.mapping.defaultOptions().ignore should be an array.");
  }
  _$jscoverage['knockout.mapping.js'][25]++;
  if ("array" !== e.getType(j.include)) {
    _$jscoverage['knockout.mapping.js'][25]++;
    throw Error("ko.mapping.defaultOptions().include should be an array.");
  }
  _$jscoverage['knockout.mapping.js'][26]++;
  if ("array" !== e.getType(j.copy)) {
    _$jscoverage['knockout.mapping.js'][26]++;
    throw Error("ko.mapping.defaultOptions().copy should be an array.");
  }
  _$jscoverage['knockout.mapping.js'][26]++;
  c = A(c, b[q]);
  _$jscoverage['knockout.mapping.js'][26]++;
  return e.visitModel(b, (function (a) {
  _$jscoverage['knockout.mapping.js'][26]++;
  return d.utils.unwrapObservable(a);
}), c);
});
  _$jscoverage['knockout.mapping.js'][26]++;
  e.toJSON = (function (b, c) {
  _$jscoverage['knockout.mapping.js'][26]++;
  var a = e.toJS(b, c);
  _$jscoverage['knockout.mapping.js'][26]++;
  return d.utils.stringifyJson(a);
});
  _$jscoverage['knockout.mapping.js'][26]++;
  e.defaultOptions = (function () {
  _$jscoverage['knockout.mapping.js'][26]++;
  if (0 < arguments.length) {
    _$jscoverage['knockout.mapping.js'][26]++;
    j = arguments[0];
  }
  else {
    _$jscoverage['knockout.mapping.js'][26]++;
    return j;
  }
});
  _$jscoverage['knockout.mapping.js'][26]++;
  e.resetDefaultOptions = (function () {
  _$jscoverage['knockout.mapping.js'][26]++;
  j = {include: v.include.slice(0), ignore: v.ignore.slice(0), copy: v.copy.slice(0)};
});
  _$jscoverage['knockout.mapping.js'][26]++;
  e.getType = (function (b) {
  _$jscoverage['knockout.mapping.js'][26]++;
  if (b && "object" === typeof b) {
    _$jscoverage['knockout.mapping.js'][26]++;
    if (b.constructor == (new Date()).constructor) {
      _$jscoverage['knockout.mapping.js'][27]++;
      return "date";
    }
    _$jscoverage['knockout.mapping.js'][27]++;
    if ("[object Array]" === Object.prototype.toString.call(b)) {
      _$jscoverage['knockout.mapping.js'][27]++;
      return "array";
    }
  }
  _$jscoverage['knockout.mapping.js'][27]++;
  return typeof b;
});
  _$jscoverage['knockout.mapping.js'][27]++;
  e.visitModel = (function (b, c, a) {
  _$jscoverage['knockout.mapping.js'][27]++;
  a = a || {};
  _$jscoverage['knockout.mapping.js'][27]++;
  a.visitedObjects = a.visitedObjects || new R();
  _$jscoverage['knockout.mapping.js'][27]++;
  var f, g = d.utils.unwrapObservable(b);
  _$jscoverage['knockout.mapping.js'][27]++;
  if (O(g)) {
    _$jscoverage['knockout.mapping.js'][27]++;
    a = A(a, g[q]), c(b, a.parentName), f = "array" === e.getType(g)? []: {};
  }
  else {
    _$jscoverage['knockout.mapping.js'][27]++;
    return c(b, a.parentName);
  }
  _$jscoverage['knockout.mapping.js'][27]++;
  a.visitedObjects.save(b, f);
  _$jscoverage['knockout.mapping.js'][27]++;
  var i = a.parentName;
  _$jscoverage['knockout.mapping.js'][27]++;
  P(g, (function (b) {
  _$jscoverage['knockout.mapping.js'][27]++;
  if (! (a.ignore && -1 != d.utils.arrayIndexOf(a.ignore, b))) {
    _$jscoverage['knockout.mapping.js'][27]++;
    var j = g[b], h = a, m = i || "";
    _$jscoverage['knockout.mapping.js'][27]++;
    "array" === e.getType(g)? i && (m += "[" + b + "]"): (i && (m += "."), m += b);
    _$jscoverage['knockout.mapping.js'][28]++;
    h.parentName = m;
    _$jscoverage['knockout.mapping.js'][28]++;
    if (! (-1 === d.utils.arrayIndexOf(a.copy, b) && -1 === d.utils.arrayIndexOf(a.include, b) && g[q] && g[q].mappedProperties && ! g[q].mappedProperties[b] && "array" !== e.getType(g))) {
      _$jscoverage['knockout.mapping.js'][28]++;
      switch (e.getType(d.utils.unwrapObservable(j))) {
      case "object":
      case "array":
      case "undefined":
        _$jscoverage['knockout.mapping.js'][28]++;
        h = a.visitedObjects.get(j);
        _$jscoverage['knockout.mapping.js'][28]++;
        f[b] = "undefined" !== e.getType(h)? h: e.visitModel(j, c, a);
        _$jscoverage['knockout.mapping.js'][28]++;
        break;
      default:
        _$jscoverage['knockout.mapping.js'][28]++;
        f[b] = c(j, a.parentName);
      }
    }
  }
}));
  _$jscoverage['knockout.mapping.js'][28]++;
  return f;
});
}));
_$jscoverage['knockout.mapping.js'].source = ["/**"," * Knockout Mapping plugin v2.3.2"," * (c) 2012 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/"," * License: MIT (http://www.opensource.org/licenses/mit-license.php)"," *"," * @version 2.3.2"," * @description Knockout Mapping plugin. http://knockoutjs.com/"," * @package Knockout"," * @author Steven Sanderson"," * @license MIT"," */","(function(d){\"function\"===typeof require&amp;&amp;\"object\"===typeof exports&amp;&amp;\"object\"===typeof module?d(require(\"knockout\"),exports):\"function\"===typeof define&amp;&amp;define.amd?define([\"knockout\",\"exports\"],d):d(ko,ko.mapping={})})(function(d,e){function w(b,c){for(var a in c)if(c.hasOwnProperty(a)&amp;&amp;c[a])if(a&amp;&amp;b[a]&amp;&amp;\"array\"!==e.getType(b[a]))w(b[a],c[a]);else if(\"array\"===e.getType(b[a])&amp;&amp;\"array\"===e.getType(c[a])){for(var d=b,g=a,i=b[a],r=c[a],t={},h=i.length-1;0&lt;=h;--h)t[i[h]]=i[h];for(h=r.length-1;0&lt;=h;--h)t[r[h]]=","r[h];i=[];r=void 0;for(r in t)i.push(t[r]);d[g]=i}else b[a]=c[a]}function D(b,c){var a={};w(a,b);w(a,c);return a}function A(b,c){for(var a=D({},b),d=K.length-1;0&lt;=d;d--){var e=K[d];a[e]&amp;&amp;(a[\"\"]instanceof Object||(a[\"\"]={}),a[\"\"][e]=a[e],delete a[e])}c&amp;&amp;(a.ignore=p(c.ignore,a.ignore),a.include=p(c.include,a.include),a.copy=p(c.copy,a.copy));a.ignore=p(a.ignore,j.ignore);a.include=p(a.include,j.include);a.copy=p(a.copy,j.copy);a.mappedProperties=a.mappedProperties||{};return a}function p(b,c){\"array\"!==","e.getType(b)&amp;&amp;(b=\"undefined\"===e.getType(b)?[]:[b]);\"array\"!==e.getType(c)&amp;&amp;(c=\"undefined\"===e.getType(c)?[]:[c]);return d.utils.arrayGetDistinctValues(b.concat(c))}function E(b,c,a,f,g,i,r){var t=\"array\"===e.getType(d.utils.unwrapObservable(c)),i=i||\"\";if(e.isMapped(b))var h=d.utils.unwrapObservable(b)[q],a=D(h,a);var m=function(){return a[f]&amp;&amp;a[f].create instanceof Function},j=function(b){var e=F,h=d.dependentObservable;d.dependentObservable=function(a,b,c){c=c||{};a&amp;&amp;\"object\"==typeof a&amp;&amp;(c=a);","var f=c.deferEvaluation,L=!1;c.deferEvaluation=!0;a=new G(a,b,c);if(!f){var g=a,f=d.dependentObservable;d.dependentObservable=G;a=d.isWriteableObservable(g);d.dependentObservable=f;a=G({read:function(){L||(d.utils.arrayRemoveItem(e,g),L=!0);return g.apply(g,arguments)},write:a&amp;&amp;function(a){return g(a)},deferEvaluation:!0});e.push(a)}return a};d.dependentObservable.fn=G.fn;d.computed=d.dependentObservable;b=d.utils.unwrapObservable(g)instanceof Array?a[f].create({data:b||c,parent:r,skip:M}):a[f].create({data:b||","c,parent:r});d.dependentObservable=h;d.computed=d.dependentObservable;return b},x=function(){return a[f]&amp;&amp;a[f].update instanceof Function},y=function(b,e){var g={data:e||c,parent:r,target:d.utils.unwrapObservable(b)};d.isWriteableObservable(b)&amp;&amp;(g.observable=b);return a[f].update(g)};if(h=H.get(c))return h;f=f||\"\";if(t){var t=[],s=!1,k=function(a){return a};a[f]&amp;&amp;a[f].key&amp;&amp;(k=a[f].key,s=!0);d.isObservable(b)||(b=d.observableArray([]),b.mappedRemove=function(a){var c=typeof a==\"function\"?a:function(b){return b===","k(a)};return b.remove(function(a){return c(k(a))})},b.mappedRemoveAll=function(a){var c=B(a,k);return b.remove(function(a){return d.utils.arrayIndexOf(c,k(a))!=-1})},b.mappedDestroy=function(a){var c=typeof a==\"function\"?a:function(b){return b===k(a)};return b.destroy(function(a){return c(k(a))})},b.mappedDestroyAll=function(a){var c=B(a,k);return b.destroy(function(a){return d.utils.arrayIndexOf(c,k(a))!=-1})},b.mappedIndexOf=function(a){var c=B(b(),k),a=k(a);return d.utils.arrayIndexOf(c,a)},b.mappedCreate=","function(a){if(b.mappedIndexOf(a)!==-1)throw Error(\"There already is an object with the key that you specified.\");var c=m()?j(a):a;if(x()){a=y(c,a);d.isWriteableObservable(c)?c(a):c=a}b.push(c);return c});var h=B(d.utils.unwrapObservable(b),k).sort(),n=B(c,k);s&amp;&amp;n.sort();var s=d.utils.compareArrays(h,n),h={},p,z=d.utils.unwrapObservable(c),v={},w=!0,n=0;for(p=z.length;n&lt;p;n++){var o=k(z[n]);if(void 0===o||o instanceof Object){w=!1;break}v[o]=z[n]}var z=[],A=0,n=0;for(p=s.length;n&lt;p;n++){var o=s[n],","l,u=i+\"[\"+n+\"]\";switch(o.status){case \"added\":var C=w?v[o.value]:I(d.utils.unwrapObservable(c),o.value,k);l=E(void 0,C,a,f,b,u,g);m()||(l=d.utils.unwrapObservable(l));u=N(d.utils.unwrapObservable(c),C,h);l===M?A++:z[u-A]=l;h[u]=!0;break;case \"retained\":C=w?v[o.value]:I(d.utils.unwrapObservable(c),o.value,k);l=I(b,o.value,k);E(l,C,a,f,b,u,g);u=N(d.utils.unwrapObservable(c),C,h);z[u]=l;h[u]=!0;break;case \"deleted\":l=I(b,o.value,k)}t.push({event:o.status,item:l})}b(z);a[f]&amp;&amp;a[f].arrayChanged&amp;&amp;d.utils.arrayForEach(t,","function(b){a[f].arrayChanged(b.event,b.item)})}else if(O(c)){b=d.utils.unwrapObservable(b);if(!b){if(m())return s=j(),x()&amp;&amp;(s=y(s)),s;if(x())return y(s);b={}}x()&amp;&amp;(b=y(b));H.save(c,b);if(x())return b;P(c,function(f){var e=i.length?i+\".\"+f:f;if(-1==d.utils.arrayIndexOf(a.ignore,e))if(-1!=d.utils.arrayIndexOf(a.copy,e))b[f]=c[f];else{var g=H.get(c[f]),h=E(b[f],c[f],a,f,b,e,b),g=g||h;if(d.isWriteableObservable(b[f]))b[f](d.utils.unwrapObservable(g));else b[f]=g;a.mappedProperties[e]=!0}})}else switch(e.getType(c)){case \"function\":x()?","d.isWriteableObservable(c)?(c(y(c)),b=c):b=y(c):b=c;break;default:if(d.isWriteableObservable(b))return l=x()?y(b):d.utils.unwrapObservable(c),b(l),l;b=m()?j():d.observable(d.utils.unwrapObservable(c))}return b}function N(b,c,a){for(var d=0,e=b.length;d&lt;e;d++)if(!0!==a[d]&amp;&amp;b[d]===c)return d;return null}function Q(b,c){var a;c&amp;&amp;(a=c(b));\"undefined\"===e.getType(a)&amp;&amp;(a=b);return d.utils.unwrapObservable(a)}function I(b,c,a){for(var b=d.utils.unwrapObservable(b),f=0,e=b.length;f&lt;e;f++){var i=b[f];if(Q(i,","a)===c)return i}throw Error(\"When calling ko.update*, the key '\"+c+\"' was not found!\");}function B(b,c){return d.utils.arrayMap(d.utils.unwrapObservable(b),function(a){return c?Q(a,c):a})}function P(b,c){if(\"array\"===e.getType(b))for(var a=0;a&lt;b.length;a++)c(a);else for(a in b)c(a)}function O(b){var c=e.getType(b);return(\"object\"===c||\"array\"===c)&amp;&amp;null!==b}function S(){var b=[],c=[];this.save=function(a,f){var e=d.utils.arrayIndexOf(b,a);0&lt;=e?c[e]=f:(b.push(a),c.push(f))};this.get=function(a){a=","d.utils.arrayIndexOf(b,a);return 0&lt;=a?c[a]:void 0}}function R(){var b={},c=function(a){var c;try{c=a}catch(d){c=\"$$$\"}a=b[c];void 0===a&amp;&amp;(a=new S,b[c]=a);return a};this.save=function(a,b){c(a).save(a,b)};this.get=function(a){return c(a).get(a)}}var q=\"__ko_mapping__\",G=d.dependentObservable,J=0,F,H,K=[\"create\",\"update\",\"key\",\"arrayChanged\"],M={},v={include:[\"_destroy\"],ignore:[],copy:[]},j=v;e.isMapped=function(b){return(b=d.utils.unwrapObservable(b))&amp;&amp;b[q]};e.fromJS=function(b){if(0==arguments.length)throw Error(\"When calling ko.fromJS, pass the object you want to convert.\");","window.setTimeout(function(){J=0},0);J++||(F=[],H=new R);var c,a;2==arguments.length&amp;&amp;(arguments[1][q]?a=arguments[1]:c=arguments[1]);3==arguments.length&amp;&amp;(c=arguments[1],a=arguments[2]);a&amp;&amp;(c=D(c,a[q]));c=A(c);var d=E(a,b,c);a&amp;&amp;(d=a);--J||window.setTimeout(function(){for(;F.length;){var a=F.pop();a&amp;&amp;a()}},0);d[q]=D(d[q],c);return d};e.fromJSON=function(b){var c=d.utils.parseJson(b);arguments[0]=c;return e.fromJS.apply(this,arguments)};e.updateFromJS=function(){throw Error(\"ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!\");","};e.updateFromJSON=function(){throw Error(\"ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!\");};e.toJS=function(b,c){j||e.resetDefaultOptions();if(0==arguments.length)throw Error(\"When calling ko.mapping.toJS, pass the object you want to convert.\");if(\"array\"!==e.getType(j.ignore))throw Error(\"ko.mapping.defaultOptions().ignore should be an array.\");if(\"array\"!==e.getType(j.include))throw Error(\"ko.mapping.defaultOptions().include should be an array.\");","if(\"array\"!==e.getType(j.copy))throw Error(\"ko.mapping.defaultOptions().copy should be an array.\");c=A(c,b[q]);return e.visitModel(b,function(a){return d.utils.unwrapObservable(a)},c)};e.toJSON=function(b,c){var a=e.toJS(b,c);return d.utils.stringifyJson(a)};e.defaultOptions=function(){if(0&lt;arguments.length)j=arguments[0];else return j};e.resetDefaultOptions=function(){j={include:v.include.slice(0),ignore:v.ignore.slice(0),copy:v.copy.slice(0)}};e.getType=function(b){if(b&amp;&amp;\"object\"===typeof b){if(b.constructor==","(new Date).constructor)return\"date\";if(\"[object Array]\"===Object.prototype.toString.call(b))return\"array\"}return typeof b};e.visitModel=function(b,c,a){a=a||{};a.visitedObjects=a.visitedObjects||new R;var f,g=d.utils.unwrapObservable(b);if(O(g))a=A(a,g[q]),c(b,a.parentName),f=\"array\"===e.getType(g)?[]:{};else return c(b,a.parentName);a.visitedObjects.save(b,f);var i=a.parentName;P(g,function(b){if(!(a.ignore&amp;&amp;-1!=d.utils.arrayIndexOf(a.ignore,b))){var j=g[b],h=a,m=i||\"\";\"array\"===e.getType(g)?i&amp;&amp;","(m+=\"[\"+b+\"]\"):(i&amp;&amp;(m+=\".\"),m+=b);h.parentName=m;if(!(-1===d.utils.arrayIndexOf(a.copy,b)&amp;&amp;-1===d.utils.arrayIndexOf(a.include,b)&amp;&amp;g[q]&amp;&amp;g[q].mappedProperties&amp;&amp;!g[q].mappedProperties[b]&amp;&amp;\"array\"!==e.getType(g)))switch(e.getType(d.utils.unwrapObservable(j))){case \"object\":case \"array\":case \"undefined\":h=a.visitedObjects.get(j);f[b]=\"undefined\"!==e.getType(h)?h:e.visitModel(j,c,a);break;default:f[b]=c(j,a.parentName)}}});return f}});"];
