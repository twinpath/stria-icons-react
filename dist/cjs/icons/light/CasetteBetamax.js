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
var CasetteBetamax_exports = {};
__export(CasetteBetamax_exports, {
  default: () => CasetteBetamax_default
});
module.exports = __toCommonJS(CasetteBetamax_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CasetteBetamaxLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM544 416C544 433.645 529.645 448 512 448H64C46.355 448 32 433.645 32 416V160H544V416ZM544 128H32V96C32 78.355 46.355 64 64 64H512C529.645 64 544 78.355 544 96V128ZM352 384H448C465.674 384 480 369.672 480 352V256C480 238.326 465.674 224 448 224H352C334.328 224 320 238.326 320 256V352C320 369.672 334.328 384 352 384ZM352 256H448V352H352V256ZM176 400C229.02 400 272 357.02 272 304S229.02 208 176 208S80 250.98 80 304S122.98 400 176 400ZM176 240C211.289 240 240 268.709 240 304C240 339.289 211.289 368 176 368S112 339.289 112 304C112 268.709 140.711 240 176 240ZM176 328C189.256 328 200 317.254 200 304C200 290.744 189.256 280 176 280C162.746 280 152 290.744 152 304C152 317.254 162.746 328 176 328Z" })
  }
));
CasetteBetamaxLight.displayName = "CasetteBetamaxLight";
var CasetteBetamax_default = CasetteBetamaxLight;
