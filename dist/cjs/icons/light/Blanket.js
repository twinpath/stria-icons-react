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
var Blanket_exports = {};
__export(Blanket_exports, {
  default: () => Blanket_default
});
module.exports = __toCommonJS(Blanket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlanketLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M392 368H96C87.156 368 80 375.156 80 384S87.156 400 96 400H392C422.875 400 448 374.875 448 344V112C448 67.891 412.125 32 368 32H80C35.875 32 0 67.891 0 112V384C0 436.938 43.062 480 96 480H432C440.844 480 448 472.844 448 464S440.844 448 432 448H96C60.719 448 32 419.297 32 384S60.719 320 96 320H392C405.219 320 416 330.766 416 344S405.219 368 392 368ZM392 288H96C71.324 288 49.023 297.617 32 312.969V112C32 85.531 53.531 64 80 64H368C394.469 64 416 85.531 416 112V293.617C408.697 290.121 400.621 288 392 288Z" })
  }
));
BlanketLight.displayName = "BlanketLight";
var Blanket_default = BlanketLight;
