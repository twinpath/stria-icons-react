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
var CircleDivide_exports = {};
__export(CircleDivide_exports, {
  default: () => CircleDivide_default
});
module.exports = __toCommonJS(CircleDivide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDivideThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376.002 248H136.002C131.58 248 128.002 251.578 128.002 256S131.58 264 136.002 264H376.002C380.424 264 384.002 260.422 384.002 256S380.424 248 376.002 248ZM256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.486 480 32 379.516 32 256S132.486 32 256 32S480 132.484 480 256S379.514 480 256 480ZM256 192C273.674 192 288 177.674 288 160S273.674 128 256 128C238.328 128 224 142.326 224 160S238.328 192 256 192ZM256 144C264.822 144 272 151.178 272 160S264.822 176 256 176S240 168.822 240 160S247.178 144 256 144ZM256 320C238.328 320 224 334.326 224 352S238.328 384 256 384C273.674 384 288 369.674 288 352S273.674 320 256 320ZM256 368C247.178 368 240 360.822 240 352S247.178 336 256 336S272 343.178 272 352S264.822 368 256 368Z" })
  }
));
CircleDivideThin.displayName = "CircleDivideThin";
var CircleDivide_default = CircleDivideThin;
