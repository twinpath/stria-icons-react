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
var ChartUser_exports = {};
__export(ChartUser_exports, {
  default: () => ChartUser_default
});
module.exports = __toCommonJS(ChartUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartUserSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M329 167C319.625 157.625 304.375 157.625 295 167L280.25 181.75C285 195.125 288 209.125 288 224C288 230.875 287 237.375 286 244L312 218L367 273C376.375 282.375 391.625 282.375 401 273L473 201L497.25 225.25C508.625 236.625 528 228.625 528 212.5V124C528 117.375 522.625 112 516 112H427.5C411.375 112 403.375 131.375 414.75 142.75L439 167L384 222L329 167ZM160 320C213.02 320 256 277.016 256 224C256 170.98 213.02 128 160 128C106.982 128 64 170.98 64 224C64 277.016 106.982 320 160 320ZM592.002 0H208.002C181.502 0 160.002 22.25 160.002 49.625V96C183.42 96 205.098 102.781 224.002 113.805V64H576.002V352H287.314C309.389 368.484 326.85 390.496 338.074 416H592.002C618.5 416 640 393.75 640 366.375V49.625C640 22.25 618.5 0 592.002 0ZM192 352H128C57.307 352 0 409.305 0 480C0 497.672 14.326 512 32 512H288C305.674 512 320 497.672 320 480C320 409.305 262.693 352 192 352Z" })
  }
));
ChartUserSolid.displayName = "ChartUserSolid";
var ChartUser_default = ChartUserSolid;
