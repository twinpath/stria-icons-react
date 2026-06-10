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
const VrCardboardDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 64.001H64C28.801 64.001 0 92.797 0 128.001V384.001C0 419.2 28.801 448.001 64 448.001H192.25C217.432 448.001 240.275 433.235 250.615 410.274L278.375 348.626C286.25 331.126 302.375 320.001 320 320.001S353.75 331.126 361.625 348.626L389.375 410.251C399.721 433.227 422.578 448.001 447.775 448.001H576C611.199 448.001 640 419.2 640 384.001V128.001C640 92.797 611.199 64.001 576 64.001ZM160 304.001C124.625 304.001 96 275.376 96 240.001S124.625 176.001 160 176.001S224 204.626 224 240.001S195.375 304.001 160 304.001ZM480 304.001C444.625 304.001 416 275.376 416 240.001S444.625 176.001 480 176.001S544 204.626 544 240.001S515.375 304.001 480 304.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 304.001C124.625 304.001 96 275.376 96 240.001S124.625 176.001 160 176.001S224 204.626 224 240.001S195.375 304.001 160 304.001ZM480 304.001C444.625 304.001 416 275.376 416 240.001S444.625 176.001 480 176.001S544 204.626 544 240.001S515.375 304.001 480 304.001Z" })
    ]
  }
));
VrCardboardDuotone.displayName = "VrCardboardDuotone";
var VrCardboard_default = VrCardboardDuotone;
