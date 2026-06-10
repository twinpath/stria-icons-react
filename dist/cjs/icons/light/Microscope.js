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
var Microscope_exports = {};
__export(Microscope_exports, {
  default: () => Microscope_default
});
module.exports = __toCommonJS(Microscope_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicroscopeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 480H393.906C445.732 445.584 480 386.746 480 320C480 214.125 393.875 128 288 128V64C288 46.326 273.674 32 256 32V16C256 7.164 248.836 0 240 0H176C167.164 0 160 7.164 160 16V32C142.326 32 128 46.326 128 64V288C128 305.674 142.326 320 160 320H256C273.674 320 288 305.674 288 288V160C376.219 160 448 231.781 448 320S376.219 480 288 480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H496C504.844 512 512 504.844 512 496S504.844 480 496 480ZM256 288H160V64C177.674 64 192 49.674 192 32H224C224 49.674 238.328 64 256 64V288ZM240 384C248.844 384 256 376.844 256 368S248.844 352 240 352H176C167.156 352 160 359.156 160 368S167.156 384 176 384H240ZM112 448H304C312.844 448 320 440.844 320 432S312.844 416 304 416H112C103.156 416 96 423.156 96 432S103.156 448 112 448Z" })
  }
));
MicroscopeLight.displayName = "MicroscopeLight";
var Microscope_default = MicroscopeLight;
