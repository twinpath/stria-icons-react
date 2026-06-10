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
var Watch_exports = {};
__export(Watch_exports, {
  default: () => Watch_default
});
module.exports = __toCommonJS(Watch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WatchLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 113.18V64C320 28.719 291.281 0 256 0H128C92.719 0 64 28.719 64 64V113.18C24.805 148.328 0 199.207 0 256S24.805 363.668 64 398.82V448C64 483.281 92.719 512 128 512H256C291.281 512 320 483.281 320 448V398.82C359.195 363.672 384 312.797 384 256S359.195 148.328 320 113.18ZM96 64C96 46.344 110.344 32 128 32H256C273.656 32 288 46.344 288 64V89.898C259.736 73.523 227.014 64 192 64S124.264 73.523 96 89.898V64ZM288 448C288 465.656 273.656 480 256 480H128C110.344 480 96 465.656 96 448V422.102C124.264 438.477 156.986 448 192 448S259.736 438.477 288 422.102V448ZM192 416C103.775 416 32 344.223 32 256S103.775 96 192 96S352 167.777 352 256S280.225 416 192 416ZM208 247.438V176C208 167.156 200.844 160 192 160S176 167.156 176 176V256C176 261.344 178.688 266.344 183.125 269.312L231.125 301.312C233.844 303.125 236.938 304 240 304C245.156 304 250.219 301.5 253.312 296.875C258.219 289.531 256.219 279.594 248.875 274.688L208 247.438Z" })
  }
));
WatchLight.displayName = "WatchLight";
var Watch_default = WatchLight;
