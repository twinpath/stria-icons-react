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
var ArrowUpLeftFromCircle_exports = {};
__export(ArrowUpLeftFromCircle_exports, {
  default: () => ArrowUpLeftFromCircle_default
});
module.exports = __toCommonJS(ArrowUpLeftFromCircle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpLeftFromCircleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M333.258 336C345.756 323.5 345.756 303.234 333.258 290.738L109.25 63.992H192.002C209.672 63.992 223.996 49.664 223.996 31.996C223.996 14.324 209.672 0 192 0H32C23.156 0 15.16 3.578 9.371 9.367C3.578 15.156 0 23.156 0 31.996V192C0 209.672 14.324 223.996 31.994 223.996H31.996C49.666 223.996 63.992 209.672 63.992 192V109.246L288 336C300.498 348.492 320.76 348.496 333.258 336ZM288 64C270.312 64 256 78.312 256 96S270.312 128 288 128C376.219 128 448 199.781 448 288S376.219 448 288 448S128 376.219 128 288C128 270.312 113.688 256 96 256S64 270.312 64 288C64 411.5 164.5 512 288 512S512 411.5 512 288S411.5 64 288 64Z" })
  }
));
ArrowUpLeftFromCircleSolid.displayName = "ArrowUpLeftFromCircleSolid";
var ArrowUpLeftFromCircle_default = ArrowUpLeftFromCircleSolid;
