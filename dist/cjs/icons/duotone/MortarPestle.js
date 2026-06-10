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
var MortarPestle_exports = {};
__export(MortarPestle_exports, {
  default: () => MortarPestle_default
});
module.exports = __toCommonJS(MortarPestle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MortarPestleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M402.375 160H251L454.75 7.125C465.625 -1 480 -2.25 492.125 3.75C513.875 14.625 518.625 43.75 501.375 60.875L402.375 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 192H16C7.125 192 0 199.125 0 208V240C0 248.875 7.125 256 16 256H32C32 337 82.25 406.125 153.125 434.375C140.375 451.25 131.375 471.125 128.125 493C126.75 502.875 134.25 512 144.25 512H367.75C377.75 512 385.25 502.875 383.875 493C380.625 471.125 371.625 451.25 358.875 434.375C429.75 406.125 480 337 480 256H496C504.875 256 512 248.875 512 240V208C512 199.125 504.875 192 496 192Z" })
    ]
  }
));
MortarPestleDuotone.displayName = "MortarPestleDuotone";
var MortarPestle_default = MortarPestleDuotone;
