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
var Rss_exports = {};
__export(Rss_exports, {
  default: () => Rss_default
});
module.exports = __toCommonJS(Rss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RssThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 32C3.594 32 0 35.594 0 40S3.594 48 8 48C241.781 48 432 238.219 432 472C432 476.406 435.594 480 440 480S448 476.406 448 472C448 229.375 250.625 32 8 32ZM8 176C3.594 176 0 179.594 0 184S3.594 192 8 192C162.406 192 288 317.594 288 472C288 476.406 291.594 480 296 480S304 476.406 304 472C304 308.781 171.219 176 8 176ZM64 352C28.654 352 0 380.654 0 416S28.654 480 64 480C99.348 480 128 451.346 128 416S99.348 352 64 352ZM64 464C37.533 464 16 442.467 16 416S37.533 368 64 368S112 389.533 112 416S90.467 464 64 464Z" })
  }
));
RssThin.displayName = "RssThin";
var Rss_default = RssThin;
