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
var ArrowRightArrowLeft_exports = {};
__export(ArrowRightArrowLeft_exports, {
  default: () => ArrowRightArrowLeft_default
});
module.exports = __toCommonJS(ArrowRightArrowLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightArrowLeftSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 176H402.75L345.375 233.375C332.875 245.875 332.875 266.125 345.375 278.625C351.625 284.875 359.812 288 368 288S384.375 284.875 390.625 278.625L502.625 166.625C515.125 154.125 515.125 133.875 502.625 121.375L390.625 9.375C378.125 -3.125 357.875 -3.125 345.375 9.375S332.875 42.125 345.375 54.625L402.75 112H32C14.312 112 0 126.312 0 144S14.312 176 32 176ZM480 336H109.25L166.625 278.625C179.125 266.125 179.125 245.875 166.625 233.375S133.875 220.875 121.375 233.375L9.375 345.375C-3.125 357.875 -3.125 378.125 9.375 390.625L121.375 502.625C127.625 508.875 135.812 512 144 512S160.375 508.875 166.625 502.625C179.125 490.125 179.125 469.875 166.625 457.375L109.25 400H480C497.688 400 512 385.688 512 368S497.688 336 480 336Z" })
  }
));
ArrowRightArrowLeftSolid.displayName = "ArrowRightArrowLeftSolid";
var ArrowRightArrowLeft_default = ArrowRightArrowLeftSolid;
