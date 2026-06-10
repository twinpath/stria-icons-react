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
var MugMarshmallows_exports = {};
__export(MugMarshmallows_exports, {
  default: () => MugMarshmallows_default
});
module.exports = __toCommonJS(MugMarshmallows_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugMarshmallowsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 160H32C14.25 160 0 174.25 0 192V384C0 437 43 480 96 480H288C341 480 384 437 384 384H400C461.75 384 512 333.75 512 272S461.75 160 400 160ZM336 384C336 410.5 314.5 432 288 432H96C69.5 432 48 410.5 48 384V208H103.367L104 256.312C104.172 269.469 114.891 280 128 280C128.094 280 128.203 280 128.312 280C141.562 279.828 152.172 268.938 152 255.688L151.375 208H336V384ZM400 336H384V208H400C435.25 208 464 236.75 464 272S435.25 336 400 336ZM200.723 89.375L249.223 41C261.721 28.5 281.973 28.5 294.473 41L342.973 89.375C353.473 99.875 354.598 115.75 347.473 128H196.473C189.223 115.75 190.348 99.875 200.723 89.375ZM162.125 128.25H32V64.375C32 46.75 46.25 32.375 64 32.375H176.25C186.375 32.375 195 37.5 200.875 44.75L178.5 67.25C161.875 83.75 156.625 107.25 162.125 128.25Z" })
  }
));
MugMarshmallowsRegular.displayName = "MugMarshmallowsRegular";
var MugMarshmallows_default = MugMarshmallowsRegular;
