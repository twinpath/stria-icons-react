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
var Stopwatch20_exports = {};
__export(Stopwatch20_exports, {
  default: () => Stopwatch20_default
});
module.exports = __toCommonJS(Stopwatch20_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Stopwatch20Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M300.001 256V352C300.001 358.625 294.61 364 288.001 364S276.001 358.625 276.001 352V256C276.001 249.375 281.391 244 288.001 244S300.001 249.375 300.001 256ZM432.001 304C432.001 419.997 337.133 513.76 220.73 511.976C106.769 510.23 12.641 411.509 16.092 297.587C19.155 196.476 94.366 113.481 191.997 98.5V64H176.013C158.414 64 144.014 49.6 144.014 32.001V31.999C144.014 14.4 158.414 0 176.013 0H272.017C289.617 0 304.016 14.4 304.016 31.999V32.001C304.016 49.6 289.617 64 272.017 64H255.999V98.5C293.499 104.297 327.686 120.094 355.686 143.094L380.377 118.405C386.625 112.157 396.755 112.158 403.002 118.406L425.688 141.096C431.936 147.345 431.934 157.476 425.684 163.723L399.094 190.297L398.501 190.906C419.688 223.297 432.001 262.203 432.001 304ZM164.297 364C165.688 349.812 172.016 336.281 182.157 326.125C201.407 306.875 212.001 281.281 212.001 252C212.001 225.531 190.469 204 164.001 204S116.001 225.531 116.001 252C116.001 263.031 124.954 272 136.001 272S156.001 263.031 156.001 252C156.001 243.188 172.001 241.125 172.001 254.062C172.001 270.344 165.391 286.312 153.844 297.875C134.594 317.125 124.001 342.719 124.001 369.938V384C124.001 395.031 132.954 404 144.001 404H192.001C203.047 404 212.001 395.031 212.001 384S203.047 364 192.001 364H164.297ZM340.001 256C340.001 227.312 316.672 204 288.001 204S236.001 227.312 236.001 256V352C236.001 380.688 259.329 404 288.001 404S340.001 380.688 340.001 352V256Z" })
  }
));
Stopwatch20Solid.displayName = "Stopwatch20Solid";
var Stopwatch20_default = Stopwatch20Solid;
