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
var HammerWar_exports = {};
__export(HammerWar_exports, {
  default: () => HammerWar_default
});
module.exports = __toCommonJS(HammerWar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HammerWarThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.086 32.055C347.789 32.055 357.3 30.48 224 56V32C224 14.328 209.672 0 192 0S160 14.328 160 32V56C26.847 30.508 36.23 32.055 31.914 32.055C14.629 32.055 0 46.07 0 64V256C0 273.93 14.629 287.945 31.914 287.945C33.739 287.945 18.084 290.411 192 264C365.915 290.41 350.261 287.945 352.086 287.945C369.373 287.945 384 273.93 384 256V64C384 46.07 369.371 32.055 352.086 32.055ZM176 32C176 23.18 183.176 16 192 16S208 23.18 208 32V56H176V32ZM368 256C368 264.853 360.197 273.533 349.152 271.68L192 247.816L34.619 271.719C24.067 273.481 16 265.077 16 256V64C16 53.679 25.418 46.793 34.242 48.215L158.482 72H225.518L349.383 48.281C359.914 46.518 368 54.908 368 64V256ZM216 304C211.582 304 208 307.582 208 312V496H176V312C176 307.582 172.418 304 168 304S160 307.582 160 312V496C160 504.836 167.164 512 176 512H208C216.836 512 224 504.836 224 496V312C224 307.582 220.418 304 216 304Z" })
  }
));
HammerWarThin.displayName = "HammerWarThin";
var HammerWar_default = HammerWarThin;
