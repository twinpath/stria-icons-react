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
var StarChristmas_exports = {};
__export(StarChristmas_exports, {
  default: () => StarChristmas_default
});
module.exports = __toCommonJS(StarChristmas_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarChristmasRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M487.75 224.82L365.875 194.328L426.625 118.971C434.375 109.223 433.75 95.727 424.875 86.979C416.125 78.231 402.75 77.606 392.875 85.229L317.375 145.714L287.125 24.244C283.5 9.998 270.75 0 256 0H255.875C241.125 0 228.375 9.998 224.875 24.244L194.375 146.214L119 85.479C109.25 77.731 95.75 78.356 87 87.229C78.25 95.977 77.5 109.348 85.25 119.221L145.75 194.702L24.25 224.82C9.999 228.444 0 241.191 0 255.938C0 270.684 9.999 283.431 24.25 287.055L146.125 317.547L85.375 392.904C77.625 402.652 78.25 416.148 87.125 424.896C91.75 429.645 97.875 432.02 103.875 432.02C109.25 432.02 114.5 430.145 119 426.646L194.5 366.161L224.875 487.631C228.375 502.003 241.25 512 255.875 512H256C270.75 512 283.5 502.003 287.125 487.631L317.625 365.911L393 426.646C397.5 430.145 402.75 432.02 408.125 432.02C414.25 432.02 420.25 429.645 424.875 424.896C433.75 416.148 434.375 402.652 426.625 392.904L366.25 317.423L487.75 287.055C501.999 283.431 512 270.684 512 255.938C512 241.191 501.999 228.444 487.75 224.82ZM287.625 287.555L256 414.024L224.375 287.555L97.875 255.938L224.375 224.32L256 97.851L287.625 224.32L414.125 255.938L287.625 287.555Z" })
  }
));
StarChristmasRegular.displayName = "StarChristmasRegular";
var StarChristmas_default = StarChristmasRegular;
