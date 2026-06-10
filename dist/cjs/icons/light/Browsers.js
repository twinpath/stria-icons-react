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
var Browsers_exports = {};
__export(Browsers_exports, {
  default: () => Browsers_default
});
module.exports = __toCommonJS(Browsers_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BrowsersLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 480H96C60.654 480 32 451.346 32 416V112C32 103.164 24.836 96 16 96S0 103.164 0 112V416C0 469.02 42.98 512 96 512H464C472.836 512 480 504.836 480 496S472.836 480 464 480ZM512 0H160C124.654 0 96 28.654 96 64V352C96 387.346 124.654 416 160 416H512C547.346 416 576 387.346 576 352V64C576 28.654 547.346 0 512 0ZM128 64C128 46.326 142.326 32 160 32H224V96H128V64ZM544 352C544 369.674 529.674 384 512 384H160C142.326 384 128 369.674 128 352V128H544V352ZM544 96H256V32H512C529.674 32 544 46.326 544 64V96Z" })
  }
));
BrowsersLight.displayName = "BrowsersLight";
var Browsers_default = BrowsersLight;
