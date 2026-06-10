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
var FaceSurprise_exports = {};
__export(FaceSurprise_exports, {
  default: () => FaceSurprise_default
});
module.exports = __toCommonJS(FaceSurprise_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceSurpriseSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.418 16 256C16 388.58 123.461 496 256 496S496 388.58 496 256C496 123.418 388.539 16 256 16ZM143.988 208C143.988 190.25 158.277 176 175.957 176C193.758 176 208.047 190.25 208.047 208S193.758 240 175.957 240C158.277 240 143.988 225.75 143.988 208ZM256 416C220.674 416 192 387.25 192 352S220.674 288 256 288S320 316.75 320 352S291.326 416 256 416ZM336.043 240C318.258 240 303.982 225.75 303.982 208S318.258 176 336.043 176C353.707 176 367.982 190.25 367.982 208S353.707 240 336.043 240Z" })
  }
));
FaceSurpriseSolid.displayName = "FaceSurpriseSolid";
var FaceSurprise_default = FaceSurpriseSolid;
