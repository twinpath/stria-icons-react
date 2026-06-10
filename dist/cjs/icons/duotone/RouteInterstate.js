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
var RouteInterstate_exports = {};
__export(RouteInterstate_exports, {
  default: () => RouteInterstate_default
});
module.exports = __toCommonJS(RouteInterstate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RouteInterstateDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17 192H494.781C486.232 307.73 426.361 441.764 255.891 512C85.42 441.764 25.549 307.73 17 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M494.891 192H17.109C13.29 140.279 19.667 92.189 31.095 55.125C34.721 43.5 46.097 36 57.35 39.125C75.603 44.25 95.104 47.125 115.482 47.125C164.614 47.125 209.119 31.125 241.623 5C245.874 1.625 250.874 0 256 0S266.126 1.625 270.377 5C303.006 31.125 347.386 47.125 396.518 47.125C416.896 47.125 436.397 44.25 454.65 39.25C465.903 36 477.279 43.5 480.905 55.125C492.333 92.189 498.71 140.279 494.891 192Z" })
    ]
  }
));
RouteInterstateDuotone.displayName = "RouteInterstateDuotone";
var RouteInterstate_default = RouteInterstateDuotone;
