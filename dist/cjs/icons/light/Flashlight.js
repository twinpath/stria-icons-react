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
var Flashlight_exports = {};
__export(Flashlight_exports, {
  default: () => Flashlight_default
});
module.exports = __toCommonJS(Flashlight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlashlightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 208H256C229.5 208 208 229.5 208 256S229.5 304 256 304H288C314.5 304 336 282.5 336 256S314.5 208 288 208ZM288 272H256C247.125 272 240 264.875 240 256C240 247.125 247.125 240 256 240H288C296.875 240 304 247.125 304 256C304 264.875 296.875 272 288 272ZM608 96H576C517 96 459.5 113 409.375 144H64C28.625 144 0 172.625 0 208V304C0 339.375 28.625 368 64 368H409.375C459.5 399 517 416 576 416H608C625.625 416 640 401.625 640 384V128C640 110.375 625.625 96 608 96ZM512 376.5C481.625 369.25 452.75 357.25 426.25 340.75L418.5 336H64C46.375 336 32 321.625 32 304V208C32 190.375 46.375 176 64 176H418.5L426.25 171.25C452.75 154.75 481.625 142.75 512 135.5V376.5ZM608 384H576C565.25 384 554.625 383.375 544 382.125V129.875C554.625 128.625 565.25 128 576 128H608V384Z" })
  }
));
FlashlightLight.displayName = "FlashlightLight";
var Flashlight_default = FlashlightLight;
