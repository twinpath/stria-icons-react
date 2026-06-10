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
var RectangleAd_exports = {};
__export(RectangleAd_exports, {
  default: () => RectangleAd_default
});
module.exports = __toCommonJS(RectangleAd_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RectangleAdSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 280C416 293.234 405.234 304 392 304C378.768 304 368 293.234 368 280S378.768 256 392 256C405.234 256 416 266.766 416 280ZM186.836 280H229.164L208 237.672L186.836 280ZM576 96V416C576 451.346 547.346 480 512 480H64C28.654 480 0 451.346 0 416V96C0 60.652 28.654 32 64 32H512C547.346 32 576 60.652 576 96ZM301.469 317.266L229.469 173.266C221.344 157.016 194.656 157.016 186.531 173.266L114.531 317.266C108.594 329.125 113.406 343.531 125.281 349.469C137.156 355.438 151.562 350.594 157.469 338.734L166.836 320H249.164L258.531 338.734C262.75 347.141 271.219 352 280.031 352C283.625 352 287.281 351.188 290.719 349.469C302.594 343.531 307.406 329.125 301.469 317.266ZM464 184C464 170.75 453.25 160 440 160S416 170.75 416 184V212.408C408.459 209.727 400.461 208 392 208C352.236 208 320 240.236 320 280S352.236 352 392 352C403.111 352 413.508 349.273 422.904 344.779C427.26 349.219 433.293 352 440 352C453.25 352 464 341.25 464 328V184Z" })
  }
));
RectangleAdSolid.displayName = "RectangleAdSolid";
var RectangleAd_default = RectangleAdSolid;
