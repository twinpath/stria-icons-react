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
var HeartHalf_exports = {};
__export(HeartHalf_exports, {
  default: () => HeartHalf_default
});
module.exports = __toCommonJS(HeartHalf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeartHalfRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.821 112.168C255.815 101.787 251.774 91.832 244.55 84.375L236.362 75.924C208.669 47.34 170.813 32 133.314 32C103.166 32 73.243 41.926 49.049 62.861C-13.106 116.653 -16.2 212.516 39.831 270.485L233.015 470.196C233.078 470.262 233.142 470.327 233.206 470.392C241.494 478.824 256.005 472.126 256 460.304C255.971 393.113 255.854 173.691 255.821 112.168ZM208.036 375.329L74.353 237.129C42.105 203.766 34.465 138.971 80.469 99.154C120.38 64.615 175.077 81.658 201.877 109.321C204.422 111.947 206.169 113.75 208.036 115.678V375.329Z" })
  }
));
HeartHalfRegular.displayName = "HeartHalfRegular";
var HeartHalf_default = HeartHalfRegular;
