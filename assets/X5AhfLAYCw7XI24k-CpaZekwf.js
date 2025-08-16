const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DVlUwMKbCU2kSgcS-CM-9wp2M.js","./preload-helper-D9Z9MdNV.js","./index-D6FgJs_E.js","./index-awv0QDyE.js","./index-Xhm29a53.js","./iframe-CaYotimM.js","./index-cworlLnn.js","./client-CzTnkZmB.js","./index-BXTp2-po.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./preload-helper-D9Z9MdNV.js";let u=class{constructor(t){this._worker=null,this._nextId=1,this._pendingRequests=new Map,this._workerFactory=t}start(){if(typeof Worker>"u")throw new Error("Web Workers are not supported in this environment.");return this._worker||(this._worker=this._workerFactory(),this._worker.onmessage=t=>{const{id:e,result:r,error:n}=t.data,o=this._pendingRequests.get(e);if(o)if(this._pendingRequests.delete(e),n){const i=new Error(n.message);i.stack=n.stack,n.cause&&(i.cause=n.cause),o.reject(i)}else o.resolve(r)},this._worker.onerror=t=>{console.error("Worker error:",t),this._pendingRequests.forEach(e=>{e.reject(new Error(`Worker failed: ${t.message}`))}),this._pendingRequests.clear(),this._worker=null}),Promise.resolve()}execute(t){if(!this._worker)throw new Error("Worker is not initialized. Call start() first.");const e=this._nextId++;return new Promise((r,n)=>{this._pendingRequests.set(e,{resolve:r,reject:n}),this._worker.postMessage({id:e,params:t})})}terminate(){this._worker&&(this._worker.terminate(),this._worker=null)}};class d{constructor(e){this._onExecute=e}execute(e){return this._onExecute(e)}start(){return Promise.resolve()}terminate(){}}const s=`/**
 * @license @sheetxl/primitives - Primitives - Base types for SheetXL functions. - v0.4.22
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */
const W = { Number: "n", String: "s", Boolean: "b", Error: "e", Null: "z" };
var Re, ae, d;
(ae = Re || (Re = {})).Orientation = { Column: "column", Row: "row" }, ae.Orientations = { ...ae.Orientation, Both: "both" }, ae.Direction = { Up: "up", Down: "down", Left: "left", Right: "right" }, ((e) => {
  e.Code = { Parse: 0, Null: 1, Div0: 2, Value: 3, Ref: 4, Name: 5, Num: 6, NA: 7, GettingData: 8, Spill: 9, Connect: 10, Blocked: 11, Unknown: 12, Field: 13, Calc: 14, Busy: 16, Python: 19, Timeout: 20 }, e.Label = { Parse: "#PARSE!", Null: "#NULL!", Div0: "#DIV/0!", Value: "#VALUE!", Ref: "#REF!", Name: "#NAME?", Num: "#NUM!", NA: "#N/A", GettingData: "#GETTING_DATA", Spill: "#SPILL!", Connect: "#CONNECT!", Blocked: "#BLOCKED!", Unknown: "#UNKNOWN!", Field: "#FIELD!", Calc: "#CALC!", Busy: "#BUSY!", Python: "#PYTHON!", Timeout: "#TIMEOUT!" };
  class t extends Error {
    constructor(c, m, fe, B) {
      super(fe, B), this._label = m, this._code = c, this.details = B;
    }
    static {
      this.code = e.Code.Unknown;
    }
    get isFormulaError() {
      return !0;
    }
    getLabel() {
      return this._label;
    }
    getCode() {
      return this._code;
    }
    equals(c) {
      return !!c && (this._code === c._code || this._code === c.code);
    }
    get [Symbol.toStringTag]() {
      return "[FormulaError]";
    }
    toString() {
      return this.message || this._label;
    }
  }
  e.Known = t;
  class r extends t {
    constructor(c, m) {
      super(e.Code.Parse, e.Label.Parse, c, m);
    }
    static {
      this.code = e.Code.Parse;
    }
    getDetails() {
      const c = this.details;
      return { line: c?.line ?? 1, column: c?.column ?? 1, offset: c?.offset ?? 0, length: c?.length ?? 0 };
    }
  }
  e.Parse = r;
  class n extends t {
    constructor(c, m) {
      super(e.Code.Null, e.Label.Null, c, m);
    }
    static {
      this.code = e.Code.Null;
    }
  }
  e.Null = n;
  class o extends t {
    constructor(c, m) {
      super(e.Code.Div0, e.Label.Div0, c, m);
    }
    static {
      this.code = e.Code.Div0;
    }
  }
  e.Div0 = o;
  class i extends t {
    constructor(c, m) {
      super(e.Code.Value, e.Label.Value, c, m);
    }
    static {
      this.code = e.Code.Value;
    }
  }
  e.Value = i;
  class a extends t {
    constructor(c, m) {
      super(e.Code.Ref, e.Label.Ref, c, m);
    }
    static {
      this.code = e.Code.Ref;
    }
  }
  e.Ref = a;
  class l extends t {
    constructor(c, m) {
      super(e.Code.Name, e.Label.Name, c, m);
    }
    static {
      this.code = e.Code.Name;
    }
  }
  e.Name = l;
  class u extends t {
    constructor(c, m) {
      super(e.Code.Num, e.Label.Num, c, m);
    }
    static {
      this.code = e.Code.Num;
    }
  }
  e.Num = u;
  class f extends t {
    constructor(c, m) {
      super(e.Code.NA, e.Label.NA, c, m);
    }
    static {
      this.code = e.Code.NA;
    }
  }
  e.NA = f;
  class h extends t {
    constructor(c, m) {
      super(e.Code.GettingData, e.Label.GettingData, c, m);
    }
    static {
      this.code = e.Code.GettingData;
    }
  }
  e.GettingData = h;
  class g extends t {
    constructor(c, m) {
      super(e.Code.Spill, e.Label.Spill, c, m);
    }
    static {
      this.code = e.Code.Spill;
    }
  }
  e.Spill = g;
  class p extends t {
    constructor(c, m) {
      super(e.Code.Connect, e.Label.Connect, c, m);
    }
    static {
      this.code = e.Code.Connect;
    }
  }
  e.Connect = p;
  class y extends t {
    constructor(c, m) {
      super(e.Code.Blocked, e.Label.Blocked, c, m);
    }
    static {
      this.code = e.Code.Blocked;
    }
  }
  e.Blocked = y;
  class T extends t {
    constructor(c, m) {
      super(e.Code.Unknown, e.Label.Unknown, c, m);
    }
    static {
      this.code = e.Code.Unknown;
    }
  }
  e.Unknown = T;
  class A extends t {
    constructor(c, m) {
      super(e.Code.Field, e.Label.Field, c, m);
    }
    static {
      this.code = e.Code.Field;
    }
  }
  e.Field = A;
  class D extends t {
    constructor(c, m) {
      super(e.Code.Calc, e.Label.Calc, c, m);
    }
    static {
      this.code = e.Code.Calc;
    }
  }
  e.Calc = D;
  class U extends t {
    constructor(c, m) {
      super(e.Code.Busy, e.Label.Busy, c, m);
    }
    static {
      this.code = e.Code.Busy;
    }
  }
  e.Busy = U;
  class I extends t {
    constructor(c, m) {
      super(e.Code.Python, e.Label.Python, c, m);
    }
    static {
      this.code = e.Code.Python;
    }
  }
  e.Python = I;
  class J extends t {
    constructor(c, m) {
      super(e.Code.Timeout, e.Label.Timeout, c, m);
    }
    static {
      this.code = e.Code.Timeout;
    }
  }
  e.Timeout = J;
})(d || (d = {}));
const _ = {};
_[d.Code.Parse] = d.Parse, _[d.Code.Null] = d.Null, _[d.Code.Div0] = d.Div0, _[d.Code.Value] = d.Value, _[d.Code.Ref] = d.Ref, _[d.Code.Name] = d.Name, _[d.Code.Num] = d.Num, _[d.Code.NA] = d.NA, _[d.Code.GettingData] = d.GettingData, _[d.Code.Spill] = d.Spill, _[d.Code.Connect] = d.Connect, _[d.Code.Blocked] = d.Blocked, _[d.Code.Unknown] = d.Unknown, _[d.Code.Field] = d.Field, _[d.Code.Calc] = d.Calc, _[d.Code.Busy] = d.Busy, _[d.Code.Python] = d.Python, _[d.Code.Timeout] = d.Timeout;
const et = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), ke = Object.keys(_);
for (let e = 0; e < ke.length; e++) {
  const t = ke[e], r = _[t];
  tt.set(d.Label[t], r), rt.set(d.Code[t], r);
  const n = new r();
  et.set(n.getLabel(), n), Te.set(n.getCode(), n);
}
const Et = Te.get(d.Code.Unknown);
var v;
(v = d || (d = {})).BuiltIn = { Parse: new v.Parse(), Null: new v.Null(), Div0: new v.Div0(), Value: new v.Value(), Ref: new v.Ref(), Name: new v.Name(), Num: new v.Num(), NA: new v.NA(), GettingData: new v.GettingData(), Spill: new v.Spill(), Connect: new v.Connect(), Blocked: new v.Blocked(), Unknown: new v.Unknown(), Field: new v.Field(), Calc: new v.Calc(), Busy: new v.Busy(), Python: new v.Python(), Timeout: new v.Timeout() }, v.getBuiltInByLabel = (e) => et.get(e), v.newTypedError = (e, t, r) => {
  let n;
  return n = typeof e == "string" ? tt.get(e) : rt.get(e), n || (n = v.Unknown), new n(t, r);
}, v.getBuiltInById = (e) => Te.get(e) || Et;
/**
 * @license @sheetxl/utils - Utils - Utilities used by most SheetXL components. - v0.4.22
 *
 * (C) 2025-present SheetXL Inc. & Michael T. Ford
 * License: The license can be found at https://www.sheetxl.com/license.
 */
const S = { html: "text/html", plain: "text/plain", png: "image/png" }, St = Object.freeze({ left: 0, top: 0 }), xt = Object.freeze({ left: 0, top: 0, bottom: 0, right: 0 }), Ct = Object.freeze({ x: 0, y: 0, width: 0, height: 0 });
Object.freeze(Object.defineProperty({ __proto__: null, EmptyBounds: Ct, EmptyRect: xt, EmptyTopLeft: St }, Symbol.toStringTag, { value: "Module" }));
const j = { Column: "column", Row: "row" }, vt = Object.freeze({ colIndex: 0, rowIndex: 0 }), Tt = Object.freeze({ colStart: 0, rowStart: 0, colEnd: 0, rowEnd: 0 }), nt = (e, t) => e.colStart === t.colStart ? e.rowStart - t.rowStart : e.colStart - t.colStart, ot = (e, t) => e.rowStart === t.rowStart ? e.colStart - t.colStart : e.rowStart - t.rowStart, _t = (e, t) => e.rowEnd === t.rowEnd ? t.colEnd - e.colEnd : t.rowEnd - e.rowEnd, Ot = (e, t) => e.colEnd === t.colEnd ? t.rowEnd - e.rowEnd : t.colEnd - e.colEnd, Le = (e, t) => e.colIndex === t.colIndex ? e.rowIndex - t.rowIndex : e.colIndex - t.colIndex, Ae = (e, t) => e.rowIndex === t.rowIndex ? e.colIndex - t.colIndex : e.rowIndex - t.rowIndex, it = (e = j.Row, t = !1) => t ? e !== j.Column ? _t : Ot : e !== j.Column ? ot : nt, Me = (e, t) => e === t || !(!e || !t) && e.rowIndex === t.rowIndex && e.colIndex === t.colIndex, Se = (e, t) => e === t || !(!e || !t) && e.rowStart === t.rowStart && e.rowEnd === t.rowEnd && e.colStart === t.colStart && e.colEnd === t.colEnd, xe = (e, t) => !(!e || !t) && !(e.colStart > t.colEnd || t.colStart > e.colEnd) && !(e.rowStart > t.rowEnd || t.rowStart > e.rowEnd), je = (e, t) => {
  if (e === t) return !0;
  if (!e || !t || e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) if (!Se(e[r], t[r])) return !1;
  return !0;
}, he = (e, t, r) => {
  if (!e && !t) return null;
  if (!e) return r ? t : { ...t };
  if (!t) return r ? e : { ...e };
  const n = Math.min(e.colStart, t.colStart), o = Math.min(e.rowStart, t.rowStart), i = Math.max(e.colEnd, t.colEnd), a = Math.max(e.rowEnd, t.rowEnd);
  let l = r;
  return l ? (l.colStart = n, l.rowStart = o, l.colEnd = i, l.rowEnd = a) : l = { colStart: n, rowStart: o, colEnd: i, rowEnd: a }, l;
}, Pe = (e, t) => {
  if (!t || t.length === 0) return e;
  const r = { ...e };
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    xe(r, o) && (r.rowStart = Math.min(r.rowStart, o.rowStart), r.colStart = Math.min(r.colStart, o.colStart), r.rowEnd = Math.max(r.rowEnd, o.rowEnd), r.colEnd = Math.max(r.colEnd, o.colEnd));
  }
  return r;
}, It = [null, null], Nt = (e, t, r) => {
  if (e[0].value === e[1].value) return t;
};
function Fe(e, t = 2, r, n = j.Row, o) {
  let i = [...e];
  if (t <= 0 || e.length <= 1) return i;
  let a = n === j.Column, l = 0, u = !1;
  do {
    const f = i.sort(it(a ? j.Row : j.Column));
    i = [], i.push(f[0]);
    const h = f.length;
    let g = 0, p = f[0], y = p.colStart, T = p.rowStart, A = p.colEnd, D = p.rowEnd;
    for (let U = 1; U < h; U++) {
      const I = f[U];
      let J = !1;
      if (J = a ? p && T === I.rowStart && D === I.rowEnd && A + 1 === I.colStart : p && y === I.colStart && A === I.colEnd && D + 1 === I.rowStart, J) {
        let E = { colStart: y, rowStart: T, colEnd: a ? I.colEnd : A, rowEnd: a ? D : I.rowEnd };
        if (p.value !== void 0 && (E.value = p.value), r) {
          const c = o ?? [null, null];
          c[0] = p, c[1] = I, E = r(c, E, n);
        }
        if (E) {
          i[g] = E, u = !0, p = E, y = p.colStart, T = p.rowStart, A = p.colEnd, D = p.rowEnd;
          continue;
        }
      }
      i[++g] = I, p = I, y = p.colStart, T = p.rowStart, A = p.colEnd, D = p.rowEnd;
    }
    l++, a = !a, l === 1 && (u = !0);
  } while (l < t && u && i.length > 1);
  return i;
}
Object.freeze(Object.defineProperty({ __proto__: null, EmptyCell: vt, EmptyRange: Tt, cellToRange: (e, t) => {
  if (!e) return null;
  let r = t;
  return r || (r = { ...e }, delete r.colIndex, delete r.rowIndex), r.colStart = e.colIndex ?? 0, r.rowStart = e.rowIndex ?? 0, r.colEnd = e.colIndex ?? 0, r.rowEnd = e.rowIndex ?? 0, r;
}, columnFirstCellComparator: Le, columnFirstRangeComparator: nt, createCellComparator: (e = j.Row, t = !1) => t ? e !== j.Column ? (r, n) => r.rowIndex === n.rowIndex ? n.colIndex - r.colIndex : n.rowIndex - r.rowIndex : (r, n) => r.colIndex === n.colIndex ? n.rowIndex - r.rowIndex : n.colIndex - r.colIndex : e !== j.Column ? Ae : Le, createConflatingRanges: (e, t = !1) => {
  const r = [];
  let n, o, i = Number.MIN_SAFE_INTEGER, a = Number.MIN_SAFE_INTEGER;
  return { append: (l, u, f) => {
    let h = !0;
    const g = f !== void 0;
    if (g) {
      const T = e ? e(o, f, t) : o === f ? f : void 0;
      T === void 0 ? h = !1 : f = T;
    }
    if (h && u === a + 1 && l === i) return t ? n.rowEnd = u : n.colEnd = u, a = u, void (o = f);
    n && r.push(n);
    const p = t ? l : u, y = t ? u : l;
    n = { colStart: p, rowStart: y, colEnd: p, rowEnd: y }, g && (n.value = f), i = l, a = u, o = f;
  }, done: (l) => (n && (r.push(n), n = null), l ? Fe(r, 3, l === !0 ? Nt : l, t ? j.Column : j.Row, It) : r) };
}, createRangeComparator: it, defaultRange: (e, t, r) => e ? r ? (r.colStart = e.colStart ?? t.colStart, r.rowStart = e.rowStart ?? t.rowStart, r.colEnd = e.colEnd ?? t.colEnd, r.rowEnd = e.rowEnd ?? t.rowEnd, r) : { colStart: e.colStart ?? t.colStart, rowStart: e.rowStart ?? t.rowStart, colEnd: e.colEnd ?? t.colEnd, rowEnd: e.rowEnd ?? t.rowEnd } : t, extendRangeToIntersectingRanges: Pe, extendRangeToUnionRanges: (e, t) => {
  if (!t || t.length === 0) return e;
  let r = e, n = null;
  for (; !Se(r, n); ) n = r, r = Pe(n, t);
  return r;
}, indexOfCoords: (e, t) => {
  const r = { colStart: e.colIndex, rowStart: e.rowIndex, colEnd: e.colIndex, rowEnd: e.rowIndex };
  for (let n = t.length - 1; n >= 0; n--) if (xe(r, t[n])) return n;
  return -1;
}, intersectRanges: (e, t, r) => {
  if (!e) return r ? t : { ...t };
  if (!t) return r ? e : { ...e };
  if (!e && !t || e.rowStart > t.rowEnd || e.rowEnd < t.rowStart || e.colStart > t.colEnd || e.colEnd < t.colStart) return null;
  const n = Math.max(e.colStart, t.colStart), o = Math.max(e.rowStart, t.rowStart), i = Math.min(e.colEnd, t.colEnd), a = Math.min(e.rowEnd, t.rowEnd);
  let l = r;
  return l ? (l.colStart = n, l.rowStart = o, l.colEnd = i, l.rowEnd = a) : l = { colStart: n, rowStart: o, colEnd: i, rowEnd: a }, l;
}, isCellWithinRange: (e, t) => !(!e || !t) && !(e.rowIndex < t.rowStart || e.rowIndex > t.rowEnd) && !(e.colIndex < t.colStart || e.colIndex > t.colEnd), isEqualCells: Me, isEqualRanges: Se, isEqualRangesArrays: je, isEqualSelectionCoords: (e, t) => e === t || !(!e || !t) && e.rangeIndex === t.rangeIndex && !!Me(e.cell, t.cell) && je(e.ranges, t.ranges), isRangeWithinRange: (e, t) => !(e.rowStart < t.rowStart || e.rowEnd > t.rowEnd) && !(e.colStart < t.colStart || e.colEnd > t.colEnd), isRangesIntersect: xe, isSingleCell: (e) => !!e && e.rowEnd === e.rowStart && e.colStart === e.colEnd, isValidRange: (e) => !!e && !(typeof e.colStart != "number" || e.colStart < 0) && !(typeof e.colEnd != "number" || e.colEnd < e.colStart) && !(typeof e.rowStart != "number" || e.rowStart < 0) && !(typeof e.rowEnd != "number" || e.rowEnd < e.rowStart), mergeRangedValues: Fe, rowFirstCellComparator: Ae, rowFirstRangeComparator: ot, sanitizeRange: (e) => e ? { colStart: e.colIndex ?? e.colStart ?? 0, rowStart: e.rowIndex ?? e.rowStart ?? 0, colEnd: e.colIndex ?? e.colEnd ?? 0, rowEnd: e.rowIndex ?? e.rowEnd ?? 0 } : null, translateRange: (e, t = -e.rowStart, r = -e.colStart, n) => n ? (n.colStart = e.colStart + r, n.rowStart = e.rowStart + t, n.colEnd = e.colEnd + r, n.rowEnd = e.rowEnd + t, n) : { colStart: e.colStart + r, rowStart: e.rowStart + t, colEnd: e.colEnd + r, rowEnd: e.rowEnd + t }, unionRanges: he, unionRangesArrays: (e, t, r) => {
  if (!e || e.length === 0) return null;
  if (e.length === 1 && !t) return e[0];
  let n = e[0];
  for (let o = 1; o < e.length; o++) n = he(n, e[o], r);
  return t && (n = he(n, t, r)), n;
} }, Symbol.toStringTag, { value: "Module" }));
function Rt(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || function(r) {
    return r.$$typeof === kt;
  }(e);
}
const kt = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Lt(e) {
  return /* @__PURE__ */ function(t) {
    return !!t && typeof t == "object";
  }(e) && !Rt(e);
}
function ne(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Y((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
  var r;
}
function At(e, t, r) {
  return e.concat(t).map(function(n) {
    return ne(n, r);
  });
}
function De(e) {
  return Object.keys(e).concat(function(t) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(r) {
      return Object.propertyIsEnumerable.call(t, r);
    }) : [];
  }(e));
}
function Ue(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Mt(e, t, r) {
  const n = {};
  return r.isMergeableObject(e) && De(e).forEach(function(o) {
    n[o] = ne(e[o], r);
  }), De(t).forEach(function(o) {
    (function(i, a) {
      return Ue(i, a) && !(Object.hasOwnProperty.call(i, a) && Object.propertyIsEnumerable.call(i, a));
    })(e, o) || (Ue(e, o) && r.isMergeableObject(t[o]) ? n[o] = function(i, a) {
      if (!a.customMerge) return Y;
      const l = a.customMerge(i);
      return typeof l == "function" ? l : Y;
    }(o, r)(e[o], t[o], r) : n[o] = ne(t[o], r));
  }), n;
}
function Y(e, t, r) {
  (r = r || {}).arrayMerge = r.arrayMerge || At, r.isMergeableObject = r.isMergeableObject || Lt, r.cloneUnlessOtherwiseSpecified = ne;
  const n = Array.isArray(t);
  return n === Array.isArray(e) ? n ? r.arrayMerge(e, t, r) : Mt(e, t, r) : ne(t, r);
}
Y.all = function(e, t) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function(r, n) {
    return Y(r, n, t);
  }, {});
};
const jt = Object.freeze([]), Pt = Object.freeze({}), Be = (e) => e, de = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
  let t = 16 * Math.random() | 0;
  return (e === "x" ? t : 3 & t | 8).toString(16);
}), Ft = (e) => 1 * e, at = (e, t) => e === t || !(!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) && e.every((r, n) => r === t[n]), re = (e) => typeof e == "object" && !Array.isArray(e) && e !== null, lt = (e) => typeof e != "object" || Array.isArray(e) || e === null ? e : (Object.keys(e).forEach(function(t) {
  e[t] && typeof e[t] == "object" ? lt(e[t]) : e[t] !== null && e[t] !== void 0 || delete e[t], typeof e[t] == "object" && Object.keys(e[t]).length === 0 && delete e[t];
}), Object.keys(e).length === 0 ? null : e), Dt = (e, t) => !(e !== t && !at(e, t)) || !!e.isEqual?.(t), st = (e, t, r = Dt) => {
  if (e == null || e === t) return null;
  if (!e || typeof e != "object" || Array.isArray(e) || e.isImmutable?.()) return r(e, t) ? null : e;
  const n = Object.keys(e);
  if (n.length === 0) return null;
  let o = !1;
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    st(e[a], t?.[a], r) === null && (o = !0, delete e[a]);
  }
  return o && Object.keys(e).length === 0 ? null : void 0;
}, $e = typeof performance == "object" && typeof performance.now == "function" ? () => performance.now() : () => Date.now(), ze = (e) => e == null, Ke = (e, t) => !(t.left > e.right || t.right < e.left || t.top > e.bottom || t.bottom < e.top), Ve = !(typeof window > "u" || !window.document || !window.document.createElement), k = { Windows: "windows", MacOS: "macos", IOS: "ios", Linux: "linux", Android: "android", Safari: "safari", Firefox: "firefox", Node: "node", Unknown: "unknown" }, oe = () => {
  if (ct()) return k.Node;
  const e = globalThis.navigator !== void 0 && globalThis.navigator.userAgent ? globalThis.navigator.userAgent.toLowerCase() : "";
  return e ? /(win32|win64|windows|wince)/i.test(e) ? k.Windows : /(macintosh|macintel|macppc|mac68k|macos)/i.test(e) ? k.MacOS : /(iphone|ipad|ipod)/i.test(e) ? k.IOS : /android/.test(e) ? k.Android : /linux/.test(e) ? k.Linux : /^((?!chrome|android|).)*safari/i.test(e) ? k.Safari : /^((?!chrome|android|Seamonkey).)*firefox/i.test(e) ? k.Firefox : k.Unknown : k.Unknown;
};
function ct() {
  return typeof process < "u" && process.release?.name === "node" || (typeof process < "u" && process.browser, !1);
}
const qe = (e, t = !1) => (document.hasFocus() || t) && (e === document.activeElement || e?.contains(document.activeElement)), Ut = Object.freeze(Object.defineProperty({ __proto__: null, EmptyArray: jt, EmptyObject: Pt, OSType: k, arrayMove: function(e, t, r) {
  const n = e.slice();
  return n.splice(r < 0 ? n.length + r : r, 0, n.splice(t, 1)[0]), n;
}, asNumber: (e) => {
  const t = Ft(e);
  return Number.isFinite(t) ? t : 0;
}, camelToPrettyCase: (e) => e.length === 1 ? e.toUpperCase() : e.replace(/([A-Z])/g, " $1").replace(/^./, function(t) {
  return t.toUpperCase();
}).trim(), canUseDOM: Ve, cancelTimeout: (e) => {
  cancelAnimationFrame(e.id);
}, castToString: (e) => e == null || e === void 0 ? "" : typeof e != "string" ? "" + e : e, cloneObject: (e) => ze(e) ? e : JSON.parse(JSON.stringify(e)), consoleWithNoSource: (...e) => new Promise((t) => {
  setTimeout(() => {
    Function("console.log.apply(console, arguments)").apply(null, e), t();
  });
}), debounce: function(e, t = 300, r = !1) {
  let n, o, i, a, l = 0;
  function u() {
    let h = Date.now() - l;
    h < t && h >= 0 ? n = setTimeout(u, t - h) : (n = null, r || (a = e.apply(i, o), i = o = null));
  }
  t == null && (t = 100);
  const f = function() {
    i = globalThis, o = arguments, l = Date.now();
    var h = r && !n;
    return n || (n = setTimeout(u, t)), h && (a = e.apply(i, o), i = o = null), a;
  };
  return f.clear = function() {
    n && (clearTimeout(n), n = null);
  }, f.flush = function() {
    n && (a = e.apply(i, o), i = o = null, clearTimeout(n), n = null);
  }, f;
}, deepEqual: function e(t, r) {
  if (t === r) return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor) return !1;
    let n, o, i;
    if (Array.isArray(t)) {
      if (n = t.length, n != r.length) return !1;
      for (o = n; o-- !== 0; ) if (!e(t[o], r[o])) return !1;
      return !0;
    }
    if (t instanceof Map && r instanceof Map) {
      if (t.size !== r.size) return !1;
      for (o of t.entries()) if (!r.has(o[0])) return !1;
      for (o of t.entries()) if (!e(o[1], r.get(o[0]))) return !1;
      return !0;
    }
    if (t instanceof Set && r instanceof Set) {
      if (t.size !== r.size) return !1;
      for (o of t.entries()) if (!r.has(o[0])) return !1;
      return !0;
    }
    if (ArrayBuffer.isView(t) && ArrayBuffer.isView(r)) {
      if (n = t.length, n != r.length) return !1;
      for (o = n; o-- !== 0; ) if (t[o] !== r[o]) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
    if (i = Object.keys(t), n = i.length, n !== Object.keys(r).length) return !1;
    for (o = n; o-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r, i[o])) return !1;
    for (o = n; o-- !== 0; ) {
      let a = i[o];
      if ((a !== "_owner" || !t.$$typeof) && !e(t[a], r[a])) return !1;
    }
    return !0;
  }
  return t != t && r != r;
}, deepFreeze: function e(t) {
  return Object.freeze(t), Object.keys(t).forEach((r) => {
    typeof t[r] != "object" || t[r] === null || Object.isFrozen(t[r]) || e(t[r]);
  }), t;
}, deepMerge: Y, diffValues: (e, t) => {
  const r = {}, n = Object.keys(t), o = n.length;
  for (let i = 0; i < o; i++) {
    const a = n[i];
    e[a] !== t[a] && (e[a] === void 0 ? r[a] = t[a] : r[a] = e[a]);
  }
  return Object.keys(r).length === 0 ? null : r;
}, findEqualOrGreater: function(e, t, r = Be) {
  let n = 0, o = e.length - 1;
  for (; n <= o; ) {
    let i = Math.floor((n + o) / 2), a = r(e[i]);
    if (a === t) return i;
    a < t ? n = i + 1 : o = i - 1;
  }
  return n;
}, findEqualOrLesser: function(e, t, r = Be) {
  let n = e.length - 1, o = 0;
  for (; n >= o; ) {
    let i = Math.floor((n + o) / 2), a = r(e[i]);
    if (a === t) return i;
    a > t ? n = i - 1 : o = i + 1;
  }
  return n;
}, findNextStep: (e, t = !0, r = 15, n = 10, o = 400) => {
  const i = Math.max(e - n, 0) + (t ? 1 : -1);
  return Math.min(o, Math[t ? "ceil" : "floor"](i / r) * r + n);
}, getDPI: () => {
  let e = 1;
  return typeof window == "object" && (e = window.devicePixelRatio || 1), e;
}, getFromPath: (e, t) => {
  const r = t.split(".");
  let n = e;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (!n) return null;
    let a = n[i];
    if (typeof a == "function" && (a = a.bind(n)()), !a || !re(a)) return a;
    n = a;
  }
  return n ?? null;
}, getOS: oe, hasFocus: qe, isDefined: (e) => e != null, isEmpty: (e) => e == null || e === "", isEqualArrays: at, isEqualBounds: (e, t) => e === t || !(e && !t || t && !e) && e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height, isEqualObjectKeys: (e, t) => {
  if (e === t) return !0;
  if (e && !t || t && !e) return !1;
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !1;
  for (let n = 0; n < r.length; n++) if (e[r[n]] !== t[r[n]]) return !1;
  return !0;
}, isNode: ct, isNullOrUndefined: ze, isNumeric: (e) => {
  const t = 1 * e;
  return Number.isFinite(t) && typeof t == "number";
}, isObject: re, isPromiseLike: (e) => !!e && typeof e.then == "function", isRectInsideRect: (e, t) => e.top >= t.top && e.bottom <= t.bottom && e.left >= t.left && e.right <= t.right, isRectIntersect: Ke, mergeContentful: (...e) => {
  const t = e.length;
  if (t > 0 && e[t - 1] !== void 0 && !re(e[t - 1])) return e[t - 1];
  let r = e[0] || {};
  for (let n = 1; n < t; n++) r = Y(r, e[n] || {}, { arrayMerge: (o, i) => [...i] });
  return r;
}, nextTick: (e) => {
  typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(() => {
    e();
  }) : (typeof setImmediate == "function" ? setImmediate : setTimeout)(() => {
    e();
  });
}, openFileDialog: (e = "*.*") => new Promise((t, r) => {
  if (!Ve) return void r("Unable to open dialog with no dom.");
  const n = document.createElement("input");
  n.type = "file", n.accept = e;
  let o = null, i = !1;
  globalThis.addEventListener?.("focus", () => {
    setTimeout(() => {
      o || i || (i = !0, t(null));
    }, 1e3);
  }, { once: !0, passive: !0 }), n.onchange = () => {
    if (o = n.files[0], o) {
      if (i) return void console.warn("File open detected after faux cancel.", o);
      t(o);
    }
  }, n.autofocus = !0, n.click();
}), rafThrottle: (e) => {
  let t, r = !1, n = function() {
    r = !1, e(t);
  };
  return function(o) {
    t = o, t && t.persist && t.persist(), r || (r = !0, requestAnimationFrame(n));
  };
}, removeEmptyProperties: lt, removeEqualValues: st, removeListenerAll: (e) => {
  if (!e) return [];
  for (let t = 0; t < e.length; t++) e[t] && e[t]();
  return [];
}, requestTimeout: (e, t) => {
  const r = $e(), n = { id: requestAnimationFrame(function o() {
    $e() - r >= t ? e.call(null) : n.id = requestAnimationFrame(o);
  }) };
  return n;
}, roundAccurately: (e, t = 0) => {
  if (e == null || !isFinite(e)) return null;
  const r = 10 ** t;
  return Number(Math.round(e * r) / r);
}, setToPath: (e, t, r) => {
  const n = t.split(".");
  let o = e;
  if (!o) throw new Error("Can not set path to a null path.");
  for (let i = 0; o && i < n.length - 1; i++) {
    const a = n[i];
    let l = o[a];
    if (l == null && (l = {}, o[a] = l), !re(l)) throw new Error("Can not set path to a non object path.");
    o = l;
  }
  if (typeof r != "number" && typeof r != "boolean" && typeof r != "string" && !re(r)) throw new Error(\`Can not set path to \${r} that is not a a supported primitive.\`);
  return o[n[n.length - 1]] = r, e;
}, splitNumber: (e) => {
  let t = Math.abs(e);
  if (isNaN(t) || !isFinite(e)) return null;
  let r = 0 | t, n = t - r, o = 0, i = 0, a = 1;
  if (n > 5e-8) for (; i < 8 && Math.abs(o / a - n) > 5e-8; ) i++, a *= 10, o = Math.round(n * a);
  return { ip: Math.trunc(e), fp: o, ipLength: Math.ceil(Math.log10(r + 1)), fpLength: i };
}, subtractRect: (e, t, r = !1) => {
  if (!t) return [e];
  if (!Ke(e, t)) return [];
  const n = [];
  let o = e;
  const i = () => {
    t.top > o.top && t.top < o.bottom && (n.push({ ...o, bottom: t.top }), o = { ...o, top: t.top });
  }, a = () => {
    t.bottom > o.top && t.bottom < o.bottom && (n.push({ ...o, top: t.bottom }), o = { ...o, bottom: t.bottom });
  }, l = () => {
    t.right > o.left && t.right < o.right && (n.push({ ...o, left: t.right }), o = { ...o, right: t.right });
  }, u = () => {
    t.left > o.left && t.left < o.right && (n.push({ ...o, right: t.left }), o = { ...o, left: t.left });
  };
  return r ? (u(), l(), i(), a()) : (i(), a(), l(), u()), n;
}, textToKey: (e) => e.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(), throttle: function(e, t) {
  let r = null;
  return (...n) => {
    const o = Date.now();
    (!r || o - r >= t) && (r = o, e(...n));
  };
}, toSafeJSON: function e(t) {
  if (t === null || typeof t != "object") return t;
  if (typeof t.toJSON == "function") return t.toJSON();
  if (Array.isArray(t)) return t.map((n) => e(n));
  if (typeof t.toString == "function" && t.toString !== Object.prototype.toString) return t.toString();
  const r = {};
  for (const n in t) t.hasOwnProperty(n) && (r[n] = e(t[n]));
  return r;
}, transpose: (e) => {
  if (!e) return e;
  const t = e.length, r = e[0].length, n = [];
  for (let o = 0; o < r; o++) n[o] = Array(t);
  for (let o = 0; o < t; o++) for (let i = 0; i < r; i++) n[i][o] = e[o][i];
  return n;
}, uuidV4: de, validEnumValue: (e, t) => {
  if (!Object.values(e).includes(t)) throw new Error(\`Invalid type: \${t ?? "null"}. Must be one of: \${Object.values(t).join(", ")}.\`);
}, whenFocus: async (e, t = !1) => new Promise((r) => {
  qe(e, t) ? r(!0) : e.addEventListener("focusin", () => {
    r(!0);
  }, { once: !0 }), e.focus();
}) }, Symbol.toStringTag, { value: "Module" }));
Object.freeze(Object.defineProperty({ __proto__: null, MESSAGE_ERROR_INVALID_ARG: (e) => \`Invalid argument: '\${e}'.\` }, Symbol.toStringTag, { value: "Module" }));
const ut = (e) => {
  const t = new Uint8Array(e), r = t.byteLength;
  let n = "";
  for (let o = 0; o < r; o++) n += String.fromCharCode(t[o]);
  if (typeof window < "u" && typeof globalThis.btoa == "function") return globalThis.btoa(n);
  if (typeof Buffer < "u") return Buffer.from(n, "binary").toString("base64");
  throw new Error("Unsupported environment");
}, Ce = (e) => new Promise((t, r) => {
  if (e) if (typeof FileReader < "u") {
    const n = new FileReader();
    n.onload = () => {
      t(n.result);
    }, n.onerror = () => {
      r(n.error);
    }, n.readAsText(e);
  } else if (typeof Buffer < "u") {
    const n = (o) => Buffer.from(o).toString("utf-8");
    e.arrayBuffer().then((o) => {
      t(n(o));
    }).catch((o) => {
      r(o);
    });
  } else r(new Error("Unsupported environment"));
  else t("");
});
Object.freeze(Object.defineProperty({ __proto__: null, DEFAULT_MIME_TYPE: "*/*", arrayBufferToBase64: ut, base64ToArrayBuffer: (e) => {
  const t = typeof window < "u" && typeof globalThis.atob == "function" ? globalThis.atob(e) : Buffer.from(e, "base64").toString("binary"), r = t.length, n = new Uint8Array(r);
  for (let o = 0; o < r; o++) n[o] = t.charCodeAt(o);
  return n.buffer;
}, blobToString: Ce }, Symbol.toStringTag, { value: "Module" }));
const dt = "data:image/png;base64,", ft = "Unable to resolve image.", Ge = (e) => new Promise(async (t, r) => {
  let n = null;
  try {
    n = new Image(), n.src = e, n.addEventListener("load", function() {
      t({ width: n.naturalWidth, height: n.naturalHeight });
    }, { once: !0 }), n.addEventListener("error", function() {
      URL.revokeObjectURL(e), r("Invalid Image");
    }, { once: !0 }), await n.decode("sync");
  } catch {
    n?.src && URL.revokeObjectURL(n.src);
  }
  n || r(ft);
}), we = "image/svg+xml";
Object.freeze(Object.defineProperty({ __proto__: null, DATA_URL_PNG_PREFIX: dt, getImageDataUrl: (e, t = 1) => new Promise(async (r, n) => {
  let o = null;
  try {
    o = new Image(), o.src = e, o.addEventListener("load", function() {
      try {
        const i = document.createElement("canvas");
        i.width = o.naturalWidth, i.height = o.naturalHeight, i.getContext("2d").drawImage(o, 0, 0);
        const a = i.toDataURL("image/png", t);
        r({ elemImg: o, dataUrl: a });
      } catch (i) {
        URL.revokeObjectURL(e), n(i);
      }
    }, { once: !0 }), o.addEventListener("error", function() {
      URL.revokeObjectURL(e), n("Invalid Image");
    }, { once: !0 }), await o.decode("sync");
  } catch {
    o?.src && URL.revokeObjectURL(o.src);
  }
  o || n(ft);
}), loadImageDetails: async (e, t = null) => {
  let r = null;
  const n = async () => {
    try {
      const i = t ?? "image/*", a = URL.createObjectURL(new Blob([e], { type: i })), l = await Ge(a);
      r = { mimeType: i, naturalDimensions: l, asUrl: a };
    } catch {
    }
  }, o = async () => {
    try {
      const i = new TextDecoder().decode(e), a = URL.createObjectURL(new Blob([i], { type: we })), l = await Ge(a);
      r = { mimeType: t ?? we, naturalDimensions: l, asUrl: a, asSVGText: i };
    } catch {
    }
  };
  if (t === we ? await o() : t.startsWith("image/") ? await n() : (await n(), r || await o()), !r) throw new Error("Failed to load image");
  return r;
} }, Symbol.toStringTag, { value: "Module" }));
var We, Ye;
(Ye = We || (We = {})).resolveTypedUpdates = (e, t, r, n) => {
  if (e === null) return e;
  if (e === void 0) return n;
  let o = e;
  if (t?.shorthand) {
    const u = t?.shorthand(e, r);
    u !== void 0 && (o = u);
  }
  if (o !== null && t?.getSubType) {
    const u = t.getSubType(o);
    u && (t = u);
  }
  const i = t?.properties, a = t?.arrayType ?? !1;
  let l = o;
  if (t && t.merge && l && n) l = t.merge(l, n, r);
  else if (!a && i) {
    const u = Object.keys({ ...o, ...n });
    l = null;
    for (let f = 0; f < u.length; f++) {
      const h = u[f];
      let g, p = o[h];
      if (p !== void 0) {
        const y = i[h];
        g = y ? (0, Ye.resolveTypedUpdates)(p, y, r, n?.[h]) : p;
      } else g = n?.[h];
      g != null && (l = l ?? {}, l[h] = g);
    }
  }
  return l;
};
const Je = \`The Safari browser does not support advanced copy and paste.
Copy and paste will be limited to within the browser tab.

Please use Chrome or Edge if external copy and paste is required.\`, ye = \`You do not have permissions to access the clipboard.
All copy and paste operations will be limited to the browser tab.\`, pt = { Safari: \`The Safari browser does not support advanced copy and paste.
Copy and paste will be limited to within the browser tab.

Please use Chrome or Edge if external copy and paste is required.\`, Perms: ye, PermsWrite: oe() === k.Safari ? Je : ye, PermsRead: oe() === k.Safari ? Je : ye }, ge = async () => new Promise((e) => {
  document.hasFocus() ? e() : globalThis.addEventListener?.("focus", () => {
    e();
  }, { once: !0 }), document.activeElement.focus?.();
}), be = async (e, t, r) => {
  if (oe() === k.Safari) return await r(new Error(pt.Safari));
  try {
    const n = async (a) => {
      try {
        return await a();
      } catch (l) {
        if (l.message?.includes("Document is not focused")) return !1;
        throw l;
      }
    }, o = await globalThis?.navigator?.permissions?.query({ name: e, allowWithoutGesture: !0, allowWithoutSanitization: !0 });
    let i = !1;
    if (o.state === "prompt" && (i = await n(t)), i || o.state !== "granted" || (i = await t()), !i) return await r(new Error(o.state));
  } catch (n) {
    return n.message === "No valid data on clipboard" || n.name === "DataError" ? void 0 : await r(n);
  }
}, mt = async (e) => {
  try {
    return await e.read({ unsanitized: [S.html] });
  } catch {
  }
  return await e.read();
}, Bt = async (e, t) => {
  if (!e) return null;
  const r = await mt(e);
  let n = !1;
  for (let o = 0; !n && r && o < r.length; o++) if (n = r[o].types.includes(t), n)
    return await r[o].getType(t);
  return n ? void 0 : null;
};
if (!globalThis.ClipboardItem) {
  const e = (r, n) => new Blob([n], { type: r });
  class t {
    constructor(n, o) {
      this._items = {}, this._types = Object.keys(n);
      const i = {}, a = Object.keys(n);
      for (let l = 0; l < a.length; l++) {
        const u = a[l];
        let f = n[u];
        i[u] = typeof f == "string" ? e(u, f) : f;
      }
      this._items = i, this._presentationStyle = o?.presentationStyle ?? "unspecified";
    }
    get types() {
      return this._types;
    }
    getType(n) {
      return Promise.resolve(this._items[n]);
    }
    supports(n) {
      return !0;
    }
  }
  globalThis.ClipboardItem = t;
}
const ve = async (e, t = S.html) => new Promise(async (r, n) => {
  try {
    const o = await Bt(e, t);
    if (o) {
      const i = new FileReader();
      i.onload = () => {
        r(i.result);
      }, i.onerror = () => {
        r("");
      }, i.readAsText(o);
    } else r("");
  } catch (o) {
    n(o);
  }
}), He = async (e, t = S.html) => {
  const r = await ve(e, t);
  if (!r) return null;
  let n = null;
  try {
    n = new DOMParser().parseFromString(r, S.html);
  } catch {
    console.warn("Can't parse html from clipboard.");
  }
  return n;
}, $t = async (e) => {
  e && await e.writeText("");
}, ie = "clipboard-uuid", Q = "web text/uuid", Xe = (e) => \`<div style="display:none" \${ie}="\${e}"/>\`, zt = (e, t) => {
  let r = null;
  try {
    const n = new DOMParser().parseFromString(t, S.html);
    n.body.firstElementChild.setAttribute(ie, e), r = n.getElementsByTagName("body")[0].innerHTML;
  } catch (n) {
    console.warn("Can't embed uuid.", n);
  }
  return r;
}, Ze = (e, t) => {
  if (!t || !e) return !1;
  try {
    const r = t.querySelectorAll(\`[\${ie}="\${e}"]\`);
    if (r && r.length === 1) return !0;
    if (t.querySelector("parsererror")) throw new Error("We are unable to parse node");
    return !1;
  } catch {
    return !1;
  }
};
class Qe {
  constructor(t) {
    if (t?.nativeClipboard === void 0 || t?.nativeClipboard === !0) try {
      this._nativeClipboard = globalThis?.navigator.clipboard;
    } catch {
      t?.nativeClipboard === !0 && console.warn("NativeClipboard option set to true but no native clipboard available.");
    }
    else this._nativeClipboard = t?.nativeClipboard === !1 ? null : t?.nativeClipboard;
    this._disableCheckOnFocus = t?.disableCheckOnFocus ?? !1, this._init();
  }
  async _checkForChanges() {
    this._nativeClipboard && this._state && !this._disableCheckOnFocus && await be("clipboard-read", async () => {
      await ge();
      const t = await ve(this._nativeClipboard, Q);
      if (!this._state || t && t === this._state.uuid) return !0;
      const r = await He(this._nativeClipboard, S.html);
      return !this._state || (Ze(this._state.uuid, r) || this.clear(), !0);
    }, async (t) => {
      t?.message === "denied" || t.message?.includes("Document is not focused") || oe() === k.Safari || console.warn("Unable to detect clipboard changes: ", t);
    });
  }
  _init() {
    const t = this;
    this._listeners = /* @__PURE__ */ new Map(), this._listenersCapture = /* @__PURE__ */ new Map(), this._state = null, this._nativeClipboard && (this._onFocus = () => {
      t._checkForChanges();
    }, this._onBlur = () => {
      globalThis.addEventListener?.("focus", t._onFocus, { once: !0 });
    }, globalThis.addEventListener?.("blur", this._onBlur), this._nativeClipboard.addEventListener("clipboardchange", (r) => {
      t._checkForChanges();
    }));
  }
  async read() {
    if (!this._nativeClipboard) return this._state?.items ?? null;
    const t = this;
    return await be("clipboard-read", async () => {
      if (await ge(), this._state?.uuid) {
        const r = await ve(this._nativeClipboard, Q);
        if (r && r === t._state.uuid) return !0;
        const n = await He(this._nativeClipboard, S.html);
        if (Ze(t._state?.uuid, n)) return !0;
      }
      return t._state = { items: await mt(this._nativeClipboard), uuid: null, ref: null }, this.dispatchEvent(new Event("clipboardread")), !0;
    }, async (r) => {
      this.dispatchEvent(new Event("clipboarderrorread"));
    }), this._state?.items ?? [];
  }
  async write(t) {
    return this._write({ uuid: de(), items: t, ref: null });
  }
  async _write(t) {
    if (!this._nativeClipboard) return this._state = t, this.dispatchEvent(new Event("clipboardwrite")), this.dispatchEvent(new Event("clipboardchange")), null;
    const r = this, n = [], o = t.uuid;
    let i = t.items ?? [];
    const a = () => {
      r._state = { uuid: o, ref: t.ref, items: n }, r.dispatchEvent(new Event("clipboardwrite")), r.dispatchEvent(new Event("clipboardchange"));
    };
    await be("clipboard-write", async () => {
      await ge(), o && i.length === 0 && (i.push(new ClipboardItem({ [Q]: new Blob([o], { type: Q }) })), i.push(new ClipboardItem({ [S.html]: new Blob([Xe(o)], { type: S.html }) })));
      for (let l = 0; l < Math.min(1, i.length); l++) {
        const u = i[l];
        let f = u.types.indexOf(S.html), h = null;
        if (f !== -1) {
          const y = await u.getType(S.html);
          h = await Ce(y), h && (h = zt(o, h));
        }
        if (!h && u.types.includes(S.plain)) {
          const y = await u.getType(S.plain);
          if (y) {
            let T = null;
            typeof y == "string" ? (console.warn("text as string", y), T = y) : T = await Ce(y), T && (h = \`<div \${ie}="\${o}">\${T}</div>\`);
          }
        }
        if (!h && u.types.includes(S.png)) {
          const y = await u.getType(S.png), T = ut(await y.arrayBuffer());
          h = \`<div \${ie}="\${o}"><img src="\${dt + T}"/></div>\`;
        }
        !h && o && (h = Xe(o));
        const g = new Blob([h ?? ""], { type: S.html }), p = {};
        for (let y = 0; y < u.types.length; y++) {
          const T = u.types[y];
          p[T] = y === f ? g : u.getType(T);
        }
        h && f === -1 && (p[S.html] = g), o && (p[Q] = new Blob([o], { type: Q })), n.push(new ClipboardItem(p));
      }
      try {
        n && n.length !== 0 ? await this._nativeClipboard.write(n) : await $t(this._nativeClipboard);
      } catch (l) {
        l.message?.includes("Document is not focused") || console.warn("Unable to write to native clipboard: ", l);
      }
      return a(), !0;
    }, async (l) => {
      this.dispatchEvent(new Event("clipboarderrorwrite")), a();
    });
  }
  async writeReference(t) {
    if (!t) return void this.clear();
    let r = null;
    const n = {};
    try {
      const i = await t.toText?.() ?? null;
      i && (n[S.plain] = new Blob([i ?? ""], { type: S.plain }));
    } catch (i) {
      r = i;
    }
    try {
      const i = await t.toHtml?.() ?? null;
      i && (n[S.html] = new Blob([i], { type: S.html }));
    } catch (i) {
      r = i, console.warn("export to html", i);
    }
    try {
      const i = await t.toImage?.() ?? null;
      i && (n[S.png] = i);
    } catch (i) {
      r = i, console.warn("export to png", i);
    }
    const o = this._write({ uuid: de(), ref: t, items: Object.keys(n).length > 0 ? [new ClipboardItem(n)] : null });
    if (r) throw r;
    return o;
  }
  clear(t = !1) {
    this._state && (this._state = null, t && this._write({ uuid: null, ref: null, items: null }), this.dispatchEvent(new Event("clipboardwrite")), this.dispatchEvent(new Event("clipboardchange")));
  }
  async readReference() {
    return await this.read(), this._state?.ref ?? null;
  }
  readText() {
    return new Promise(async (t, r) => {
      const n = await this.read();
      let o = null;
      for (let a = 0; !o && n && a < n.length; a++) n[a].types.includes(S.plain) && (o = await n[a].getType(S.plain));
      if (!o) return void t("");
      const i = new FileReader();
      i.onload = () => {
        t(i.result);
      }, i.readAsText(o), i.onerror = (a) => {
        r(a);
      };
    });
  }
  async writeText(t) {
    const r = [new ClipboardItem({ [S.plain]: new Blob([t], { type: S.plain }) })];
    return this._write({ uuid: de(), items: r, ref: null });
  }
  addEventListener(t, r, n = {}) {
    const o = n?.capture ? this._listenersCapture : this._listeners;
    let i = o.get(t);
    i || (i = /* @__PURE__ */ new Map(), o.set(t, i)), i.set(r, typeof n == "boolean" ? {} : n);
  }
  dispatchEvent(t) {
    if (!t) return;
    const r = (n) => {
      const o = n.get(t.type);
      o && o.forEach((i, a) => {
        try {
          typeof a == "function" ? a(t) : a.handleEvent && a.handleEvent(t), i.once && o.delete(a);
        } catch (l) {
          console.warn(l);
        }
      });
    };
    return r(this._listenersCapture), r(this._listeners), !0;
  }
  removeEventListener(t, r, n) {
    const o = n?.capture ? this._listenersCapture : this._listeners, i = o.get(t);
    i && (i.delete(r), i.size === 0 && o.delete(t));
  }
  close() {
    globalThis.removeEventListener?.("focus", this._onFocus), globalThis.removeEventListener?.("blur", this._onBlur);
  }
}
var Ee;
(Ee = Qe || (Qe = {})).ErrorMessages = pt, Ee.Global = new Ee();
const Kt = "__SHEETXL";
let ee = null, le = null;
async function Vt() {
  if (ee)
    return ee;
  if (le) {
    if (await le, !ee)
      throw new Error("ESBuild initialization promise resolved, but instance is not available.");
    return ee;
  }
  let e, t;
  le = new Promise((r, n) => {
    e = r, t = n;
  });
  try {
    const { initialize: r } = await Promise.resolve().then(function() {
      return rr;
    });
    return ee = await r(), e(), ee;
  } catch (r) {
    throw console.error("Failed to import or initialize esbuild:", r), le = null, t(r), r;
  }
}
const qt = {
  // ESBuild.TsconfigRaw =
  compilerOptions: {
    target: "esnext"
  }
};
async function Gt(e, t, r = "/script.js", n = Kt) {
  try {
    const o = await Vt(), i = "@sheetxl/primitives", a = \`
      export const FormulaContext = globalThis.\${n}?.FormulaContext;
      export const ScalarType = globalThis.\${n}?.ScalarType;
      export const Observable = globalThis.\${n}?.Observable;
      export const IRange = globalThis.\${n}?.IRange;
      export const FormulaError = globalThis.\${n}?.FormulaError;
      // Add more exports as needed
    \`, l = {
      // ESBuild.Plugin = {
      name: "sheetxl-esbuild-in-memory",
      setup(f) {
        const h = "sheetxl-" + (/* @__PURE__ */ new Date()).getTime();
        f.onResolve({ filter: new RegExp(\`^(\${r.replace("/", "\\\\/")}|\${i})$\`) }, (g) => ({
          path: g.path,
          namespace: h
        })), f.onResolve({ filter: /.*/ }, (g) => {
          if (g.namespace !== h)
            return console.warn(\`esbuild: Treating import "\${g.path}" as external.\`), { path: g.path, external: !0 };
        }), f.onLoad({ filter: /.*/, namespace: h }, (g) => {
          let p;
          if (g.path === r)
            p = t;
          else if (g.path === i)
            p = a;
          else
            return {
              errors: [{ text: \`Cannot load unknown path in \${h}: \${g.path}\` }]
            };
          return {
            contents: p,
            loader: "ts"
            // leave this as 'ts' so esbuild generates proper sourcemaps
          };
        });
      }
    }, u = await o.build({
      entryPoints: [r],
      // Use the virtual entry point
      bundle: !0,
      // IMPORTANT: Enable bundling
      write: !1,
      // IMPORTANT: Return result in memory
      format: "esm",
      // Output format
      plugins: [l],
      // TODO - later change to external and prepend when executing from ui
      sourcemap: "inline",
      // Generate separate source map string
      tsconfigRaw: qt,
      // Pass the mapped options
      minify: !0,
      // sourcemap: 'external', // Generate separate source map string
      // Or use 'inline' if you prefer data URLs embedded in the code
      // To suppress warnings about dynamic import() if esbuild complains:
      // supported: { 'dynamic-import': true },
      platform: "neutral"
      // not really needed
    });
    if (u.outputFiles && u.outputFiles.length > 0)
      return u.outputFiles[0].text;
    throw u.errors && u.errors.length > 0 ? new Error(\`esbuild bundling failed: \${u.errors.map((f) => f.text).join(\`
\`)}\`) : new Error("esbuild did not produce an output file.");
  } catch (o) {
    throw console.error("esbuild bundling process failed:", o), o;
  }
}
const Wt = \`
/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
\`, Yt = \`
  interface FirstTest {
    isTrue?: boolean;
  }
\`, Jt = async () => Yt, ht = /* @__PURE__ */ new Map([
  ["IReferenceRange", "r"],
  ["IRange", "l"]
]), wt = /* @__PURE__ */ new Map([
  ["IWorkbook", "workbook"],
  ["ISheet", "sheet"],
  ["ICellRanges", "ranges"],
  ["ICellRange", "range"],
  ["IFormulaContext", "context"]
]), _e = (e, t) => {
  Array.from(t.keys()).forEach((n) => {
    const o = t.get(n);
    t.set(\`\${e}.\${n}\`, o);
  });
}, Ht = /* @__PURE__ */ new Map([
  ["Scalar", "*"],
  ["FormulaError.Known", W.Error],
  ["Date", "Date"],
  ["JSON", "JSON"]
]), Xt = /* @__PURE__ */ new Map([
  // Repeating
]), Oe = "SheetXL";
_e(Oe, ht);
_e(Oe, wt);
_e(Oe, Xt);
const Zt = /* @__PURE__ */ new Map([
  ["Promise", () => ({ async: !0 })],
  // ['PromiseLike', (): Partial<IFunction.ReturnTypeJSON> => {
  //   return { async: true };
  // }],
  ["Observable", () => ({ stream: !0 })]
]);
let se = null;
async function Qt() {
  if (se)
    return se;
  try {
    return await (await Promise.resolve().then(function() {
      return or;
    })).initialize();
  } catch (e) {
    throw se = null, e;
  } finally {
    se = null;
  }
}
async function er(e) {
  const t = e?.source ?? null;
  if (!t) return null;
  const r = (e.disableBundle || e.declarationsOnly) ?? !1, n = [
    Jt(),
    //import('typescript'), // when bundled, but node check causes issues. We could bundle replace isNode but felt hacky
    Qt()
  ], o = await Promise.all(n), i = o[0], a = o[1];
  let l = "", u = null;
  const f = [], h = {
    allowJs: !0,
    declaration: !1,
    sourceMap: !1,
    // was true but now bundler will do this
    inlineSourceMap: !1,
    inlineSources: !1,
    isolatedModules: !0,
    preserveConstEnums: !1,
    // types: ['WebWorker'],
    module: 99,
    //"esNext",
    noResolve: !0,
    emitDeclarationOnly: !1,
    target: a.ScriptTarget.ES2020
    // lib: ['webworker', 'es2020', 'esnext.asynciterable'], // Use the webworker lib instead of dom
  }, g = "script", p = \`\${g}.ts\`, y = "lib.d.ts", T = "global.d.ts", A = {
    [p]: t,
    [y]: Wt,
    [T]: i
  }, D = {
    getSourceFile: (s, w, L, P) => a.createSourceFile(s, A[s], a.ScriptTarget.Latest, !0),
    fileExists: (s) => A[s] !== void 0,
    readFile: (s) => A[s],
    writeFile: (s, w) => {
      A[s] = w;
    },
    // not used
    getCurrentDirectory: () => "./",
    getCanonicalFileName: (s) => s,
    useCaseSensitiveFileNames: () => !0,
    getDefaultLibFileName: (s) => y,
    getNewLine: () => \`
\`
  }, U = a.createProgram([p, T], h, D), I = U.getTypeChecker(), J = U.getSourceFile(p), E = U.emit();
  E.diagnostics.length > 0 && console.warn(E.diagnostics), l = A[\`\${g}.js\`];
  const c = (s, w, L, P) => {
    if (!s) {
      $(s, new Error(\`Type is not defined for '\${w?.name ?? "return"}'.\`));
      return;
    }
    if (s.kind === a.SyntaxKind.NumberKeyword)
      w.scalar = W.Number;
    else if (s.kind === a.SyntaxKind.StringKeyword)
      w.scalar = W.String;
    else if (s.kind === a.SyntaxKind.BooleanKeyword)
      w.scalar = W.Boolean;
    else if (s.kind === a.SyntaxKind.UndefinedKeyword || s.kind === a.SyntaxKind.NullKeyword || s.kind === a.SyntaxKind.VoidKeyword) {
      if (P) {
        $(s, new Error(\`'undefined' is not a valid type for input: '\${s?.parent?.name?.escapedText}'.\`));
        return;
      }
      w.scalar = W.Null;
    } else if (s.kind === a.SyntaxKind.BigIntKeyword)
      w.scalar = W.Number;
    else if (s.kind === a.SyntaxKind.AnyKeyword)
      w.scalar = W.Null;
    else if (s.kind === a.SyntaxKind.ArrayType) {
      const M = s.elementType;
      if (!M) {
        $(s, new Error(\`'Array' must be typed: '\${s?.parent?.name?.escapedText}'.\`));
        return;
      }
      w.arrayDepth = (w.arrayDepth ?? 0) + 1, c(M, w, L, P);
    } else if (s.kind !== a.SyntaxKind.TupleType) {
      if (s.kind === a.SyntaxKind.TypeReference) {
        const M = s.typeName?.getText?.() ?? null, K = ht.get(M);
        let V = !1;
        K && (w.range = K, V = !0);
        const q = Ht.get(M);
        if (q && (w.scalar = q), q !== void 0 && (V = !0), P) {
          const R = wt.get(M);
          if (R)
            return R;
        } else {
          const R = Zt.get(M);
          if (R) {
            const b = { ...w, ...R() };
            let N = 0;
            if (b.async && N++, b.stream && N++, N > 1) {
              $(s, new Error(\`'\${M}' cannot have multiple modifiers: '\${s?.parent?.name?.escapedText}'.\`));
              return;
            }
            w = b, V = !0;
          }
        }
        if (!V) {
          $("node", new Error(\`'\${M}' is not a valid type: '\${s?.parent?.name?.escapedText}'.\`));
          return;
        }
        const H = s.typeArguments;
        if (H) {
          if (H.length !== 1) {
            $(s, new Error(\`'\${M}' must be typed with exactly 1 type: '\${s?.parent?.name?.escapedText}'.\`));
            return;
          }
          c(H[0], w, L, P);
        }
      }
    }
  }, m = (s) => (a.getCombinedModifierFlags(s) & a.ModifierFlags.Export) !== 0, fe = (s) => (a.getCombinedModifierFlags(s) & a.ModifierFlags.Default) !== 0, B = [], $ = (s, w) => {
    B.push(w);
  };
  if (a.forEachChild(J, (s) => {
    if (m(s) && a.isFunctionDeclaration(s)) {
      const w = {}, L = {
        parameters: {}
      }, P = s?.name?.getText();
      try {
        w.name = P;
        const K = I.getSymbolAtLocation(s.name).getDocumentationComment(I);
        if (K && K.length > 0 && K[0].text) {
          let R = K[0].text;
          R = R.replace(/[\\r\\n]+/g, "\\\\n").trim(), L.summary = R;
        }
        const V = {};
        c(s.type, V, w, !1), w.returnType = V;
        const q = {};
        fe(s) && (q.default = !0, u = P), Object.keys(q).length > 0 && (w.behavior = q), w.parameters = [];
        const H = /* @__PURE__ */ new Map();
        for (let R = 0; R < s.parameters.length; R++) {
          const b = s.parameters[R], N = {};
          N.name = b.name?.getText();
          const X = c(b.type, N, w, !0);
          if (X) {
            if (w.parameters.length !== 0) {
              const F = s?.parent?.name?.getText();
              $(s, new Error(\`'\${w.name}' contexts must be the first parameter: '\${F}'.\`));
              return;
            }
            w.context = X;
            continue;
          }
          const z = !((b.initializer === void 0 || b.initializer === null) && (b.questionToken === void 0 || b.questionToken === null));
          let C;
          if (z && (N.optional = !0, b.initializer))
            try {
              b.initializer.kind === a.SyntaxKind.StringLiteral ? C = b.initializer.text : b.initializer.kind === a.SyntaxKind.NumericLiteral ? C = parseFloat(b.initializer.text) : b.initializer.kind === a.SyntaxKind.TrueKeyword || b.initializer.kind === a.SyntaxKind.FalseKeyword ? C = b.initializer.kind === a.SyntaxKind.TrueKeyword : b.initializer.kind === a.SyntaxKind.NullKeyword ? C = null : b.initializer.kind === a.SyntaxKind.ObjectLiteralExpression || b.initializer.kind === a.SyntaxKind.ArrayLiteralExpression ? C = b.initializer.getText() : C = b.initializer.getText?.();
            } catch (O) {
              console.warn(\`Couldn't extract default value for parameter '\${N.name}'\`, O);
            }
          b.dotDotDotToken && (N.rest = !0), w.parameters.push(N);
          const x = { description: "" };
          L.parameters[N.name] = x;
          const G = I.getSymbolAtLocation(b.name).getDocumentationComment(I);
          G && G.length > 0 && G[0].text && (x.description = G[0].text), C !== void 0 && (x.defaultValue = C), H.set(N.name, N);
        }
        if (s.jsDoc && s.jsDoc.length > 0) {
          const R = s.jsDoc;
          for (let b = 0; b < R.length; b++) {
            const N = R[b]?.tags;
            if (N)
              for (let X = 0; X < N.length; X++) {
                const z = N[X];
                let C = z?.tagName?.text;
                if (!C) continue;
                C = C.toLowerCase();
                let x = z.comment;
                const G = C === "hidden";
                if (!(typeof x != "string" && !G) && (typeof x == "string" && (x = x.replace(/[\\r\\n]+/g, "\\\\n").trim()), !(!G && x && (x = x.split(/\\\\n/)[0], !x || x.length === 0)))) {
                  if (x && typeof x == "string") {
                    const O = /\\{@link(code|plain)?\\s+([^}|]+)(?:\\s*\\|\\s*([^}]+))?\\}/g;
                    let F, Z = x, te = [];
                    for (; (F = O.exec(x)) !== null; ) {
                      const [pe, me, gt, Ne] = F, bt = [gt.trim()];
                      Ne && bt.push(Ne.trim());
                    }
                    x = Z, te.length > 0 && C === "see" && (L.links || (L.links = []), L.links.push(...te));
                  }
                  if (C === "name") {
                    const O = x;
                    O !== P && (L.name = O);
                  } else if (C === "description") {
                    const O = x;
                  } else if (C === "summary") {
                    const O = x;
                    O && (L.summary = O);
                  } else if (C === "param") {
                    const O = z.name?.text, F = H.get(O);
                    if (!F) {
                      B.push(new Error(\`Parameter '\${O}' not found in function '\${P}'.\`));
                      continue;
                    }
                    if (z.typeExpression && z.typeExpression.type)
                      try {
                        const Z = z.typeExpression.type;
                        if (Z.kind === a.SyntaxKind.UnionType) {
                          const te = [];
                          F.enums = te, Z.types.forEach((pe) => {
                            if (pe.kind === a.SyntaxKind.LiteralType) {
                              const me = pe.literal.text;
                              me && te.push(me);
                            }
                          });
                        }
                      } catch (Z) {
                        console.warn("Error parsing JSDoc type expression:", Z);
                      }
                  } else if (C === "returns" || C === "return")
                    w.returnType.description = x;
                  else if (C === "category")
                    L.category = x;
                  else if (C === "hidden") {
                    let O = !0;
                    const F = x?.toLowerCase();
                    F === "false" ? O = !1 : F !== "true" && (O = x), O !== !1 && (L.hidden = O ?? !0);
                  }
                }
              }
          }
        }
        Object.keys(w.returnType).length === 0 && delete w.returnType, f.push([w, L]);
      } catch (M) {
        $(s, new Error(\`'\${P}': \${M.message}\`));
      }
    }
  }), B.length > 0)
    throw console.warn(B), new Error("There were compilation errors.", { cause: B });
  if (f.length === 0)
    throw new Error("No exported functions.");
  const yt = \`\${Ut.uuidV4()}-script\`;
  try {
    !r && B.length === 0 && (l = await Gt(a, l, g));
  } catch {
    console.warn("Error bundling script");
  }
  const Ie = {
    functions: f,
    commitId: yt,
    source: t,
    name: "Script",
    language: "typescript",
    // default
    compiled: l
  };
  return u && (Ie.autoRun = u), Ie;
}
self.addEventListener("message", async (e) => {
  const { id: t, params: r } = e.data;
  try {
    const n = await er(r);
    self.postMessage({ id: t, result: n, error: null });
  } catch (n) {
    self.postMessage({
      id: t,
      result: null,
      error: {
        message: n.message,
        stack: n.stack,
        cause: n.cause
      }
    });
  }
});
let ce = null;
async function tr() {
  return ce || (ce = new Promise(async (e, t) => {
    try {
      const r = "0.20.2", n = \`https://esm.sh/esbuild-wasm@\${r}\`, o = \`https://esm.sh/esbuild-wasm@\${r}/esbuild.wasm\`, a = (await import(
        /* webpackIgnore: true */
        /* @vite-ignore */
        n
      )).default;
      await a.initialize({
        wasmURL: o,
        // Provide the specific WASM URL
        worker: !1
        // Keep processing on the current thread
      }), e(a);
    } catch (r) {
      console.error("Error initializing esbuild:", r), t(r);
    }
  }), ce);
}
var rr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  initialize: tr
});
let ue = null;
async function nr() {
  return ue || (ue = new Promise(async (e, t) => {
    let r = null;
    try {
      r = await import("https://esm.sh/typescript@5.7.2");
    } catch (n) {
      console.error("Error initializing Browser TypeScript module:", n);
    }
    r || console.log("use script fallback"), e(r);
  }), ue);
}
var or = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  initialize: nr
});
`,a=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",s],{type:"text/javascript;charset=utf-8"});function p(t){let e;try{if(e=a&&(self.URL||self.webkitURL).createObjectURL(a),!e)throw"";const r=new Worker(e,{type:"module",name:t?.name});return r.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),r}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(s),{type:"module",name:t?.name})}}async function h(){if(typeof process<"u"&&process.versions?.node&&typeof Worker>"u")return await l();if(typeof Worker<"u"){const t=new u(()=>new p);try{return await t.start(),t}catch(e){console.error("Failed to start TypescriptCompiler worker reverting to fallback:",e)}}return await l()}const l=async()=>{const{compileModule:t}=await c(async()=>{const{compileModule:r}=await import("./DVlUwMKbCU2kSgcS-CM-9wp2M.js");return{compileModule:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),e=new d(r=>t(r));return await e.start(),e};export{h as createCompilerWorker};
