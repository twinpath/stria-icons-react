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
var HandPointUp_exports = {};
__export(HandPointUp_exports, {
  default: () => HandPointUp_default
});
module.exports = __toCommonJS(HandPointUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandPointUpSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 288C305.688 288 320 273.672 320 256V192C320 174.328 305.688 160 288 160S256 174.328 256 192V256C256 273.672 270.312 288 288 288ZM224 244.41V160C224 142.328 209.688 128 192 128S160 142.328 160 160V240H200C208.459 240 216.459 241.729 224 244.41ZM128 240V32C128 14.328 113.688 0 96 0S64 14.328 64 32V240.807C66.66 240.508 69.26 240 72 240H128ZM384 192C366.312 192 352 206.328 352 224V288C352 305.672 366.312 320 384 320S416 305.672 416 288V224C416 206.328 401.688 192 384 192ZM323.826 309.031C313.602 315.953 301.275 320 288 320C282.234 320 276.762 318.92 271.447 317.49C268.594 354.646 237.869 384 200 384H128C119.163 384 112 376.837 112 368V368C112 359.163 119.163 352 128 352L197.724 352C213.239 352 240 340.711 240 312C240 289.906 222.094 272 200 272H72C49.909 272 32 289.909 32 312V375.406C32 408.531 48 439.969 74.812 459.531L111.219 485.984C134.489 502.893 162.516 512 191.281 512H280C355.111 512 416 451.111 416 376V343.121C406.553 348.619 395.717 352 384 352C356.066 352 332.559 333.986 323.826 309.031Z" })
  }
));
HandPointUpSolid.displayName = "HandPointUpSolid";
var HandPointUp_default = HandPointUpSolid;
