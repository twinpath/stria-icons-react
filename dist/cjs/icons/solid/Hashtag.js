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
var Hashtag_exports = {};
__export(Hashtag_exports, {
  default: () => Hashtag_default
});
module.exports = __toCommonJS(Hashtag_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HashtagSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M408 120H371.455L378.697 78.964C383.02 54.464 364.173 32 339.295 32H339.291C319.877 32 303.264 45.938 299.89 65.057L290.193 120H211.455L218.697 78.964C223.02 54.464 204.173 32 179.295 32H179.291C159.877 32 143.264 45.938 139.89 65.057L130.193 120H72C49.909 120 32 137.909 32 160V160C32 182.091 49.909 200 72 200H116.076L96.311 312H40C17.909 312 0 329.909 0 352V352C0 374.091 17.909 392 40 392H82.193L74.952 433.035C70.628 457.536 89.476 480 114.355 480H114.355C133.77 480 150.383 466.062 153.757 446.943L163.453 392H242.193L234.952 433.036C230.628 457.536 249.475 480 274.354 480H274.355C293.77 480 310.383 466.062 313.757 446.943L323.453 392H376C398.091 392 416 374.091 416 352V352C416 329.909 398.091 312 376 312H337.57L357.336 200H408C430.091 200 448 182.091 448 160V160C448 137.909 430.091 120 408 120ZM256.311 312H177.57L197.336 200H276.076L256.311 312Z" })
  }
));
HashtagSolid.displayName = "HashtagSolid";
var Hashtag_default = HashtagSolid;
