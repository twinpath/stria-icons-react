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
var Circle6_exports = {};
__export(Circle6_exports, {
  default: () => Circle6_default
});
module.exports = __toCommonJS(Circle6_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Circle6Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 496C388.549 496 496 388.549 496 256S388.549 16 256 16S16 123.451 16 256S123.451 496 256 496ZM256 48C370.691 48 464 141.309 464 256S370.691 464 256 464S48 370.691 48 256S141.309 48 256 48ZM256 384C308.938 384 352 340.938 352 288C352 238.283 313.877 197.756 265.404 192.951L313.594 156.812C320.656 151.5 322.094 141.469 316.812 134.406C313.656 130.219 308.844 128 304 128C300.656 128 297.281 129.031 294.406 131.188L204.812 198.406C163.184 229.604 160 277.652 160 288C160 340.938 203.062 384 256 384ZM256 224C291.346 224 320 252.654 320 288C320 323.348 291.346 352 256 352S192 323.348 192 288C192 252.654 220.654 224 256 224Z" })
  }
));
Circle6Light.displayName = "Circle6Light";
var Circle6_default = Circle6Light;
