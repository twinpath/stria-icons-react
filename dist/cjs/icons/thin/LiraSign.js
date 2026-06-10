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
var LiraSign_exports = {};
__export(LiraSign_exports, {
  default: () => LiraSign_default
});
module.exports = __toCommonJS(LiraSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LiraSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 472C320 476.406 316.407 480 312 480H8C4.844 480 1.969 478.125 0.688 475.25C-0.593 472.344 -0.062 468.969 2.094 466.625C39.825 425.09 64.825 374.346 74.93 320H8C3.594 320 0 316.406 0 312S3.594 304 8 304H77.164C78.846 291.143 80 278.182 80 265.062V224H8C3.594 224 0 220.406 0 216S3.594 208 8 208H80V129.469C80 75.719 123.719 32 177.469 32C187.938 32 198.313 33.688 208.313 37L290.532 64.406C294.719 65.812 297 70.344 295.594 74.531C294.188 78.75 289.688 81 285.469 79.594L203.25 52.187C194.907 49.406 186.219 48 177.469 48C132.563 48 96 84.562 96 129.469V208H248C252.407 208 256 211.594 256 216S252.407 224 248 224H96V265.062C96 278.172 94.912 291.137 93.319 304H248C252.407 304 256 307.594 256 312S252.407 320 248 320H91.162C81.891 372.621 59.42 422.141 25.407 464H312C316.407 464 320 467.594 320 472Z" })
  }
));
LiraSignThin.displayName = "LiraSignThin";
var LiraSign_default = LiraSignThin;
