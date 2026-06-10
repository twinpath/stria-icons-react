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
var Wind_exports = {};
__export(Wind_exports, {
  default: () => Wind_default
});
module.exports = __toCommonJS(Wind_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 192H368C412.125 192 448 156.125 448 112S412.125 32 368 32H336C327.156 32 320 39.156 320 48S327.156 64 336 64H368C394.469 64 416 85.531 416 112S394.469 160 368 160H16C7.156 160 0 167.156 0 176S7.156 192 16 192ZM176 320H16C7.156 320 0 327.156 0 336S7.156 352 16 352H176C202.469 352 224 373.531 224 400S202.469 448 176 448H144C135.156 448 128 455.156 128 464S135.156 480 144 480H176C220.125 480 256 444.125 256 400S220.125 320 176 320ZM424 240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H424C454.875 272 480 297.125 480 328S454.875 384 424 384H400C391.156 384 384 391.156 384 400S391.156 416 400 416H424C472.531 416 512 376.531 512 328S472.531 240 424 240Z" })
  }
));
WindLight.displayName = "WindLight";
var Wind_default = WindLight;
