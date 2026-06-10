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
const ArrowUpLeftFromCircleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M312 336C318.156 336 324.281 333.656 328.969 328.969C338.344 319.594 338.344 304.406 328.969 295.031L81.938 48H192C205.25 48 216 37.25 216 24S205.25 0 192 0H24C10.75 0 0 10.75 0 24V192C0 205.25 10.75 216 24 216S48 205.25 48 192V81.938L295.031 328.969C299.719 333.656 305.844 336 312 336ZM288 64C276.062 64 264.031 64.938 252.219 66.844C239.125 68.906 230.219 81.219 232.312 94.312C234.375 107.406 246.625 116.531 259.781 114.219C269.094 112.75 278.594 112 288 112C385.031 112 464 190.969 464 288S385.031 464 288 464S112 385.031 112 288C112 278.594 112.75 269.094 114.219 259.781C116.312 246.688 107.406 234.375 94.312 232.313C81.125 230.062 68.938 239.125 66.844 252.219C64.938 264.031 64 276.062 64 288C64 411.5 164.5 512 288 512S512 411.5 512 288S411.5 64 288 64Z" })
  }
));
ArrowUpLeftFromCircleRegular.displayName = "ArrowUpLeftFromCircleRegular";
var ArrowUpLeftFromCircle_default = ArrowUpLeftFromCircleRegular;
