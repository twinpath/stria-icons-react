var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var MillSign_exports = {};
__export(MillSign_exports, {
  default: () => MillSign_default
});
module.exports = __toCommonJS(MillSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MillSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152.012 275.871L89.543 470.219C84.137 487.031 93.387 505.063 110.231 510.469C113.481 511.5 116.762 512 120.012 512C133.543 512 146.106 503.375 150.481 489.781L166.973 438.473C158.047 431.137 152.012 420.457 152.012 408V275.871ZM273.793 1.531C257.074 -3.75 238.981 5.375 233.543 22.219L203.115 116.881C221.674 104.027 243.764 96 268.012 96C271.01 96 273.826 96.66 276.768 96.885L294.481 41.781C299.887 24.969 290.637 6.938 273.793 1.531Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 212V408C384 430.094 366.094 448 344 448S304 430.094 304 408V212C304 192.156 287.844 176 268 176S232 192.156 232 212V408C232 430.094 214.094 448 192 448S152 430.094 152 408V212C152 192.156 135.844 176 116 176S80 192.156 80 212V408C80 430.094 62.094 448 40 448S0 430.094 0 408V136C0 113.906 17.906 96 40 96C50.629 96 60.16 100.305 67.324 107.066C82.176 100.145 98.561 96 116 96C145.195 96 171.59 107.203 192 125.068C212.41 107.203 238.805 96 268 96C331.969 96 384 148.031 384 212Z" })
    ]
  }
));
MillSignDuotone.displayName = "MillSignDuotone";
var MillSign_default = MillSignDuotone;
