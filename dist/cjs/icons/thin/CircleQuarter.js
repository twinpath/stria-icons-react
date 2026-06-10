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
var CircleQuarter_exports = {};
__export(CircleQuarter_exports, {
  default: () => CircleQuarter_default
});
module.exports = __toCommonJS(CircleQuarter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleQuarterThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.918 18.381C222.383 18.381 220.825 18.498 219.254 18.736C115.821 34.457 34.075 116.201 18.354 219.637C15.442 238.799 30.887 256 50.268 256H223.618C241.292 256 255.618 241.672 255.618 224V50.648C255.618 32.855 241.122 18.381 223.918 18.381ZM239.618 224C239.618 232.822 232.44 240 223.618 240H50.268C45.487 240 40.936 237.896 37.786 234.23C36.051 232.213 33.276 227.945 34.172 222.041C48.737 126.215 125.834 49.119 221.659 34.555C222.42 34.439 223.174 34.381 223.918 34.381C232.428 34.381 239.618 41.83 239.618 50.648V224Z" })
  }
));
CircleQuarterThin.displayName = "CircleQuarterThin";
var CircleQuarter_default = CircleQuarterThin;
