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
var NetworkWired_exports = {};
__export(NetworkWired_exports, {
  default: () => NetworkWired_default
});
module.exports = __toCommonJS(NetworkWired_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NetworkWiredLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 320H528V272H624C632.844 272 640 264.844 640 256S632.844 240 624 240H336V192H416C433.674 192 448 177.672 448 160V32C448 14.328 433.674 0 416 0H224C206.328 0 192 14.328 192 32V160C192 177.672 206.328 192 224 192H304V240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H112V320H32C14.328 320 0 334.328 0 352V480C0 497.672 14.328 512 32 512H224C241.674 512 256 497.672 256 480V352C256 334.328 241.674 320 224 320H144V272H496V320H416C398.328 320 384 334.328 384 352V480C384 497.672 398.328 512 416 512H608C625.674 512 640 497.672 640 480V352C640 334.328 625.674 320 608 320ZM224 160V32H416V160H224ZM224 352V480H32V352H224ZM608 480H416V352H608V480Z" })
  }
));
NetworkWiredLight.displayName = "NetworkWiredLight";
var NetworkWired_default = NetworkWiredLight;
