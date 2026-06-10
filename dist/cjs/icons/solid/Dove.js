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
var Dove_exports = {};
__export(Dove_exports, {
  default: () => Dove_default
});
module.exports = __toCommonJS(Dove_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DoveSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.001 167.206V139.079C259.751 102.701 240.876 59.697 233.876 13.818C231.751 0.317 214.876 -4.933 206.126 5.568C185.001 30.445 168.376 59.697 157.251 92.075C191.376 130.328 237.251 156.705 288.001 167.206ZM400.001 63.948C355.751 63.948 320.001 99.826 320.001 144.079V203.459C215.626 197.209 127.001 132.953 87.001 41.696C81.501 29.195 63.751 28.57 58.001 40.821C41.376 75.949 32.001 115.202 32.001 156.58C32.001 227.336 66.126 293.467 117.126 342.471C130.251 355.222 143.251 365.723 156.001 375.224L12.126 411.227C1.376 413.977 -3.374 426.353 2.626 435.729C20.001 462.606 63.001 508.235 155.751 511.985C163.751 512.235 171.751 509.36 177.876 504.109L243.126 447.98H320.001C408.376 447.98 480.001 376.474 480.001 288.091V127.953L512.001 63.948H400.001ZM400.001 160.081C391.251 160.081 384.001 152.83 384.001 144.079C384.001 135.204 391.251 128.078 400.001 128.078S416.001 135.204 416.001 144.079C416.001 152.83 408.751 160.081 400.001 160.081Z" })
  }
));
DoveSolid.displayName = "DoveSolid";
var Dove_default = DoveSolid;
