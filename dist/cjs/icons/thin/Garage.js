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
var Garage_exports = {};
__export(Garage_exports, {
  default: () => Garage_default
});
module.exports = __toCommonJS(Garage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GarageThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376 416.513H264C259.594 416.513 256 420.107 256 424.513S259.594 432.513 264 432.513H376C380.406 432.513 384 428.919 384 424.513S380.406 416.513 376 416.513ZM614.375 113.16L322.875 1.031C321 0.344 319 0.344 317.125 1.031L25.625 113.16C10.312 119.066 0 134.067 0 150.473V504.515C0 508.922 3.594 512.516 8 512.516S16 508.922 16 504.515V150.473C16 140.629 22.188 131.629 31.375 128.098L320 17.063L608.625 128.098C617.812 131.629 624 140.629 624 150.473V504.515C624 508.922 627.594 512.516 632 512.516S640 508.922 640 504.515V150.473C640 134.067 629.687 119.066 614.375 113.16ZM520 192.506H120C106.781 192.506 96 203.287 96 216.507V504.515C96 508.922 99.594 512.516 104 512.516S112 508.922 112 504.515V336.51H528V504.515C528 508.922 531.594 512.516 536 512.516S544 508.922 544 504.515V216.507C544 203.287 533.219 192.506 520 192.506ZM528 320.51H112V216.507C112 212.1 115.594 208.506 120 208.506H520C524.406 208.506 528 212.1 528 216.507V320.51Z" })
  }
));
GarageThin.displayName = "GarageThin";
var Garage_default = GarageThin;
