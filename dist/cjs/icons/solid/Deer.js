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
var Deer_exports = {};
__export(Deer_exports, {
  default: () => Deer_default
});
module.exports = __toCommonJS(Deer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DeerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488.75 133.25L396.75 107.5L407.875 101.875C420.25 95.75 430.875 86.25 438.625 74.75L456.75 47.625C459.25 43.875 458.25 39 454.5 36.5L441.25 27.625C437.5 25.125 432.625 26.125 430.125 29.75L412.125 57C407.5 64 401.125 69.625 393.625 73.25L351 94.625L317.25 85.125L325.5 74.75C332.25 66.25 336 55.75 336 44.75V8C336 3.625 332.375 0 328 0H312C307.625 0 304 3.625 304 8V44.75C304 48.375 302.75 51.875 300.5 54.75L283.75 75.75L267.625 71.25C260.75 69.25 255.875 63 255.875 55.75V8C255.875 3.625 252.25 0 247.875 0H231.875C227.5 0 223.875 3.625 223.875 8V55.75C223.875 77.25 238.25 96.25 258.875 102L337.75 124.25L304 192H64C28.75 192 0 220.75 0 256V320L32 298.75V347.625L20.125 379.375C15.5 391.625 14.75 404.75 17.875 417.375L42.75 499.875C44.625 507 51 512 58.25 512H122.125C132.5 512 140.125 502.25 137.625 492.125L111.25 403.75L130.75 352H288V496C288 504.75 295.25 512 304 512H368C376.75 512 384 504.75 384 496V288L416 224H480C497.75 224 512 209.75 512 192V164.125C512 149.75 502.375 137.25 488.75 133.25ZM416 176C407.25 176 400 168.75 400 160S407.25 144 416 144S432 151.25 432 160S424.75 176 416 176Z" })
  }
));
DeerSolid.displayName = "DeerSolid";
var Deer_default = DeerSolid;
