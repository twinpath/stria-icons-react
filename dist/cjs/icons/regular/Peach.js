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
var Peach_exports = {};
__export(Peach_exports, {
  default: () => Peach_default
});
module.exports = __toCommonJS(Peach_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PeachRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368.357 99.723C396.391 87.285 416.006 59.312 416.006 26.666V0H336.006C291.824 0 256.006 35.816 256.006 80C256.006 35.816 220.189 0 176.006 0H96.006V26.666C96.006 59.314 115.625 87.287 143.662 99.725C61.723 116.08 0 184.934 0 267.203C0 380.656 124.906 471.328 248.688 510.859C251.062 511.625 253.531 512 256 512S260.938 511.625 263.312 510.859C387.094 471.328 512 380.656 512 267.203C512 184.93 450.297 116.074 368.357 99.723ZM256 462.75C133.156 421.516 48 341.797 48 267.203C48 99.629 309.344 124.104 309.344 248C309.344 261.25 320.094 272 333.344 272S357.344 261.25 357.344 248C357.344 208.977 337.986 173.457 306.49 146.514C379.562 132.896 464 183.002 464 267.203C464 341.797 378.844 421.516 256 462.75Z" })
  }
));
PeachRegular.displayName = "PeachRegular";
var Peach_default = PeachRegular;
