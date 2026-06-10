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
var HighlighterLine_exports = {};
__export(HighlighterLine_exports, {
  default: () => HighlighterLine_default
});
module.exports = __toCommonJS(HighlighterLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HighlighterLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M282.236 433.75L530.849 147.875C549.224 127 548.224 95.5 528.599 75.875L468.103 15.375C457.853 5.125 444.478 0 430.978 0C418.105 0 405.855 4.625 396.23 13.125L110.619 261.75C100.246 270.875 96.246 285.125 100.246 298.25L112.744 339.25L76.246 375.875C69.496 382.625 69.496 393.5 76.246 400.25L77.256 401.26L6.404 474.848C-7.276 488.557 2.412 512 21.756 512H94.295C98.527 512 102.588 510.314 105.582 507.312L143.234 467.365L143.867 468C150.617 474.75 161.617 474.75 168.367 468L204.74 431.5L245.738 444.125C263.738 449.625 277.111 439.5 282.236 433.75ZM417.355 37.125C421.855 33.125 434.978 27.5 445.478 38L505.974 98.5C513.599 106.25 513.974 118.5 506.726 126.875L318.359 343.375L200.74 225.75L417.355 37.125ZM87.367 480H45.865L94.271 429.725L99.754 423.801L120.523 444.611L87.367 480ZM195.74 395.25L156.117 435L109.244 388.125L148.992 348.375L143.367 330L130.869 289C130.494 287.875 130.869 286.625 131.619 286L176.617 246.75L297.361 367.625L258.238 412.5C257.613 413.25 256.738 413.5 255.863 413.5H254.988L214.115 400.875L195.74 395.25ZM560 480H240C231.164 480 224 487.162 224 496C224 504.836 231.164 512 240 512H560C568.836 512 576 504.836 576 496C576 487.162 568.836 480 560 480Z" })
  }
));
HighlighterLineLight.displayName = "HighlighterLineLight";
var HighlighterLine_default = HighlighterLineLight;
