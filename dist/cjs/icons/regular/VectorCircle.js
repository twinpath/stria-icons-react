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
var VectorCircle_exports = {};
__export(VectorCircle_exports, {
  default: () => VectorCircle_default
});
module.exports = __toCommonJS(VectorCircle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VectorCircleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 192H462.314C441.262 124.279 387.719 70.738 320 49.686V32C320 14.326 305.674 0 288 0H224C206.328 0 192 14.326 192 32V49.686C124.281 70.738 70.738 124.279 49.686 192H32C14.326 192 0 206.328 0 224V288C0 305.674 14.326 320 32 320H49.686C70.738 387.721 124.281 441.262 192 462.314V480C192 497.674 206.328 512 224 512H288C305.674 512 320 497.674 320 480V462.314C387.719 441.262 441.262 387.721 462.314 320H480C497.674 320 512 305.674 512 288V224C512 206.328 497.674 192 480 192ZM240 48H272V80H240V48ZM80 272H48V240H80V272ZM272 464H240V432H272V464ZM411.475 319.086C394.404 360.992 360.988 394.406 319.086 411.475C316.803 396.041 304.068 384 288 384H224C207.934 384 195.197 396.041 192.914 411.475C151.012 394.406 117.596 360.992 100.525 319.086C115.959 316.803 128 304.068 128 288V224C128 207.934 115.959 195.197 100.525 192.914C117.596 151.006 151.012 117.594 192.914 100.525C195.197 115.959 207.934 128 224 128H288C304.068 128 316.803 115.959 319.086 100.525C360.988 117.594 394.404 151.006 411.475 192.914C396.041 195.197 384 207.934 384 224V288C384 304.068 396.041 316.803 411.475 319.086ZM464 272H432V240H464V272Z" })
  }
));
VectorCircleRegular.displayName = "VectorCircleRegular";
var VectorCircle_default = VectorCircleRegular;
