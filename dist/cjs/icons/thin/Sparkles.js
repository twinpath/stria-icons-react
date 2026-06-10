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
var Sparkles_exports = {};
__export(Sparkles_exports, {
  default: () => Sparkles_default
});
module.exports = __toCommonJS(Sparkles_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SparklesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 255.625C384 249.625 380.625 244 375.125 241.25L262.625 185L206.25 72.25C203.562 66.812 197.781 64.094 192 64.094S180.438 66.812 177.75 72.25L121.375 185L8.875 241.25C3.375 244 0 249.625 0 255.625C0 261.75 3.375 267.25 8.875 270L121.375 326.375L177.75 439C180.375 444.5 186 447.875 192 447.875C198 447.875 203.625 444.5 206.25 439L262.625 326.375L375.125 270C380.625 267.25 384 261.75 384 255.625ZM255.457 312.07L250.699 314.455L248.318 319.213L192.057 431.838L135.682 319.213L133.301 314.455L128.543 312.07L16.031 255.561L133.301 196.926L135.686 192.156L191.338 80.199C191.396 80.172 191.643 80.094 192 80.094L191.939 79.404L248.314 192.156L250.699 196.926L255.469 199.311L367.957 255.695L255.457 312.07ZM352 104H408V160C408 164.406 411.594 168 416 168S424 164.406 424 160V104H480C484.406 104 488 100.406 488 96S484.406 88 480 88H424V32C424 27.594 420.406 24 416 24S408 27.594 408 32V88H352C347.594 88 344 91.594 344 96S347.594 104 352 104ZM480 408H424V352C424 347.594 420.406 344 416 344S408 347.594 408 352V408H352C347.594 408 344 411.594 344 416S347.594 424 352 424H408V480C408 484.406 411.594 488 416 488S424 484.406 424 480V424H480C484.406 424 488 420.406 488 416S484.406 408 480 408Z" })
  }
));
SparklesThin.displayName = "SparklesThin";
var Sparkles_default = SparklesThin;
