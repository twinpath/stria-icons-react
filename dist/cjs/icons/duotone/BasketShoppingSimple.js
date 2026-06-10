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
var BasketShoppingSimple_exports = {};
__export(BasketShoppingSimple_exports, {
  default: () => BasketShoppingSimple_default
});
module.exports = __toCommonJS(BasketShoppingSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BasketShoppingSimpleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 192.01H458.41L469.297 212.947C475.406 224.696 470.828 239.196 459.078 245.289C455.531 247.133 451.75 248.008 448.016 248.008C439.344 248.008 430.984 243.289 426.703 235.071L404.311 192.01H171.689L149.297 235.071C145.016 243.289 136.641 248.008 127.984 248.008C124.25 248.008 120.469 247.133 116.922 245.289C105.172 239.196 100.594 224.696 106.703 212.947L117.59 192.01H16C7.164 192.01 0 199.174 0 208.009V240.008C0 248.844 7.164 256.008 16 256.008H39.111L84.863 461.884C91.371 491.167 117.342 512 147.34 512H428.662C458.658 512 484.631 491.167 491.137 461.884L536.889 256.008H560C568.838 256.008 576 248.844 576 240.008V208.009C576 199.174 568.838 192.01 560 192.01Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M243.083 2.734C231.317 -3.391 216.833 1.203 210.708 12.953L106.708 212.947C100.598 224.696 105.176 239.196 116.926 245.289C120.473 247.133 124.255 248.008 127.989 248.008C136.645 248.008 145.02 243.289 149.301 235.071L253.301 35.077C259.411 23.327 254.833 8.828 243.083 2.734ZM469.301 212.947L365.301 12.953C359.161 1.172 344.723 -3.422 332.926 2.734C321.176 8.828 316.598 23.327 322.708 35.077L426.708 235.071C430.989 243.289 439.348 248.008 448.02 248.008C451.755 248.008 455.536 247.133 459.083 245.289C470.833 239.196 475.411 224.696 469.301 212.947Z" })
    ]
  }
));
BasketShoppingSimpleDuotone.displayName = "BasketShoppingSimpleDuotone";
var BasketShoppingSimple_default = BasketShoppingSimpleDuotone;
