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
var Hurricane_exports = {};
__export(Hurricane_exports, {
  default: () => Hurricane_default
});
module.exports = __toCommonJS(Hurricane_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HurricaneRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 96C210.75 96 200 106.75 200 120S210.75 144 224 144C312.219 144 384 215.781 384 304S312.219 464 224 464C210.75 464 200 474.75 200 488S210.75 512 224 512C338.688 512 432 418.688 432 304S338.688 96 224 96ZM264 392C264 378.75 253.25 368 240 368C151.781 368 80 296.219 80 208S151.781 48 240 48C253.25 48 264 37.25 264 24S253.25 0 240 0C125.312 0 32 93.312 32 208S125.312 416 240 416C253.25 416 264 405.25 264 392ZM256 256C256 238.326 241.674 224 224 224S192 238.326 192 256C192 273.672 206.326 288 224 288S256 273.672 256 256Z" })
  }
));
HurricaneRegular.displayName = "HurricaneRegular";
var Hurricane_default = HurricaneRegular;
