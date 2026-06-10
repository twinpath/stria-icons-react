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
var VrCardboard_exports = {};
__export(VrCardboard_exports, {
  default: () => VrCardboard_default
});
module.exports = __toCommonJS(VrCardboard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VrCardboardSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 64H64C28.801 64 0 92.797 0 128V384C0 419.199 28.801 448 64 448H192.25C217.432 448 240.275 433.234 250.615 410.273L278.375 348.625C286.25 331.125 302.375 320 320 320S353.75 331.125 361.625 348.625L389.375 410.25C399.721 433.227 422.578 448 447.775 448H576C611.199 448 640 419.199 640 384V128C640 92.797 611.199 64 576 64ZM160 304C124.625 304 96 275.375 96 240S124.625 176 160 176S224 204.625 224 240S195.375 304 160 304ZM480 304C444.625 304 416 275.375 416 240S444.625 176 480 176S544 204.625 544 240S515.375 304 480 304Z" })
  }
));
VrCardboardSolid.displayName = "VrCardboardSolid";
var VrCardboard_default = VrCardboardSolid;
