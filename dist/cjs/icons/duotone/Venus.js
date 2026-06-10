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
var Venus_exports = {};
__export(Venus_exports, {
  default: () => Venus_default
});
module.exports = __toCommonJS(Venus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VenusDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 176C256 211.346 227.346 240 192 240S128 211.346 128 176S156.654 112 192 112S256 140.654 256 176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 176.001C368 78.797 289.203 0.001 192 0.001C94.799 0.001 16 78.797 16 176.001C16 262.258 78.1 333.887 160 348.954V384.001H112C103.164 384.001 96 391.163 96 400.001V432.001C96 440.837 103.164 448.001 112 448.001H160V496.001C160 504.837 167.164 512.001 176 512.001H208C216.838 512.001 224 504.837 224 496.001V448.001H272C280.838 448.001 288 440.837 288 432.001V400.001C288 391.163 280.838 384.001 272 384.001H224V348.954C305.902 333.887 368 262.258 368 176.001ZM192 272.001C139.066 272.001 96 228.934 96 176.001C96 123.065 139.066 80.001 192 80.001C244.936 80.001 288 123.065 288 176.001C288 228.934 244.936 272.001 192 272.001Z" })
    ]
  }
));
VenusDuotone.displayName = "VenusDuotone";
var Venus_default = VenusDuotone;
