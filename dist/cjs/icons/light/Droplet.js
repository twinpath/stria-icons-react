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
var Droplet_exports = {};
__export(Droplet_exports, {
  default: () => Droplet_default
});
module.exports = __toCommonJS(Droplet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DropletLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 416C147.875 416 112 380.125 112 336C112 327.125 104.875 320 96 320S80 327.125 80 336C80 397.75 130.25 448 192 448C200.875 448 208 440.875 208 432S200.875 416 192 416ZM221.25 22.125C217.25 7.5 204.625 0 192 0C179.625 0 167.25 7.25 162.75 22.125C116 179.875 16 222.75 16 333.875C16 432.375 94.75 512 192 512S368 432.375 368 333.875C368 222.125 268.25 180.625 221.25 22.125ZM192 480C112.625 480 48 414.5 48 333.875C48 285.5 71 252.625 102.875 207C132 165.125 168.125 113.375 192 36C215.875 113.625 252.125 165.375 281.375 207.125C313 252.5 336 285.25 336 333.875C336 414.5 271.375 480 192 480Z" })
  }
));
DropletLight.displayName = "DropletLight";
var Droplet_default = DropletLight;
