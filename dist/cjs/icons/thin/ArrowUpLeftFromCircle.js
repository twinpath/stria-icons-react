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
const ArrowUpLeftFromCircleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M349.656 349.656C352.785 346.531 352.773 341.461 349.656 338.344L27.312 16H216C220.422 16 224 12.418 224 8C224 5.789 223.117 3.801 221.656 2.344C220.199 0.883 218.211 0 216 0H8C3.578 0 0 3.578 0 8V216C0 220.422 3.578 224 8 224C12.418 224 16 220.422 16 216V27.312L338.344 349.656C341.461 352.773 346.531 352.785 349.656 349.656ZM288 64C265.406 64 243.062 67.344 221.625 73.969C217.406 75.281 215.062 79.781 216.344 84C217.656 88.219 222.031 90.469 226.375 89.281C246.25 83.125 267 80 288 80C402.688 80 496 173.312 496 288S402.688 496 288 496S80 402.688 80 288C80 267 83.125 246.25 89.281 226.375C90.562 222.156 88.219 217.656 84 216.344C79.625 215.219 75.281 217.438 73.969 221.625C67.344 243.062 64 265.406 64 288C64 411.5 164.5 512 288 512S512 411.5 512 288S411.5 64 288 64Z" })
  }
));
ArrowUpLeftFromCircleThin.displayName = "ArrowUpLeftFromCircleThin";
var ArrowUpLeftFromCircle_default = ArrowUpLeftFromCircleThin;
