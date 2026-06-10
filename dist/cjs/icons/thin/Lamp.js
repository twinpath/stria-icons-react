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
var Lamp_exports = {};
__export(Lamp_exports, {
  default: () => Lamp_default
});
module.exports = __toCommonJS(Lamp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LampThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M445.484 211.375L367.982 19.375C363.232 7.625 352.355 0 340.355 0H120.597C109.222 0 98.722 6.75 93.597 17.75L3.218 209.75C-6.782 231 7.718 256 30.218 256H417.859C439.484 256 454.109 232.5 445.484 211.375ZM429.089 233.684C427.505 236.043 423.939 240 417.859 240H30.218C23.865 240 20.267 235.824 18.689 233.336C15.494 228.301 15.123 222.031 17.695 216.562L108.101 24.508C110.544 19.262 115.334 16 120.597 16H340.355C345.824 16 350.845 19.68 353.146 25.363L430.671 217.422C432.882 222.84 432.291 228.918 429.089 233.684ZM279.906 290.375C276.812 293.5 276.812 298.563 279.968 301.688C315.031 336.406 335.968 392.5 335.968 426.688C335.968 450.156 326.843 472.125 309.625 490.188C305.999 493.938 300.625 496 294.5 496H153.406C147.281 496 141.906 493.938 138.343 490.219C121.343 472.5 111.968 449.937 111.968 426.687C111.968 392.5 132.906 336.406 167.937 301.687C171.093 298.562 171.093 293.5 168 290.375C164.875 287.188 159.812 287.25 156.687 290.312C122.062 324.625 95.968 383.25 95.968 426.688C95.968 454.094 106.906 480.563 126.781 501.281C133.437 508.188 142.875 512 153.406 512H294.5C305 512 314.468 508.219 321.156 501.281C341.312 480.125 351.968 454.344 351.968 426.688C351.968 383.219 325.843 324.594 291.218 290.312C288.093 287.25 283.031 287.188 279.906 290.375Z" })
  }
));
LampThin.displayName = "LampThin";
var Lamp_default = LampThin;
