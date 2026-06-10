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
var ArrowTurnUp_exports = {};
__export(ArrowTurnUp_exports, {
  default: () => ArrowTurnUp_default
});
module.exports = __toCommonJS(ArrowTurnUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowTurnUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232 132.047V472C232 494.094 214.094 512 192 512H40C17.906 512 0 494.094 0 472S17.906 432 40 432H152V132.055L192.002 94.711L232 132.047Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M341.251 179.28C333.361 187.718 322.689 192 311.985 192C302.22 192 292.423 188.437 284.704 181.249L192 94.711L99.296 181.249C83.108 196.313 57.827 195.438 42.749 179.28C27.686 163.154 28.561 137.839 44.702 122.744L164.703 10.735C180.078 -3.578 203.922 -3.578 219.297 10.735L339.298 122.744C355.439 137.839 356.314 163.154 341.251 179.28Z" })
    ]
  }
));
ArrowTurnUpDuotone.displayName = "ArrowTurnUpDuotone";
var ArrowTurnUp_default = ArrowTurnUpDuotone;
