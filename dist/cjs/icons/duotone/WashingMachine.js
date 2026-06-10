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
var WashingMachine_exports = {};
__export(WashingMachine_exports, {
  default: () => WashingMachine_default
});
module.exports = __toCommonJS(WashingMachine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WashingMachineDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M334.133 285.25C313.6 305.25 280.871 304.875 260.836 284.25V284.375C251.254 294.375 237.938 300 224 300S196.746 294.375 187.164 284.375C167.129 304.875 134.4 305.25 113.867 285.375C112.746 291.5 112.125 297.75 112 304C112 365.875 162.15 416 224 416S336 365.875 336 304C335.877 297.75 335.254 291.5 334.133 285.25ZM184 112C197.254 112 208 101.254 208 88C208 74.744 197.254 64 184 64S160 74.744 160 88C160 101.254 170.746 112 184 112Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384.035 0.001H63.965C28.623 0.001 0 28.626 0 64.001V480.001C0 497.626 14.311 512.001 31.982 512.001H416.018C433.689 512.001 448 497.626 448 480.001V64.001C448 28.626 419.379 0.001 384.035 0.001ZM184.062 64.001C197.277 64.001 208 74.751 208 88.001S197.277 112.001 184.062 112.001C170.723 112.001 160 101.251 160 88.001S170.723 64.001 184.062 64.001ZM64 88.001C64 74.751 74.818 64.001 88 64.001C101.307 64.001 112 74.751 112 88.001S101.307 112.001 88 112.001C74.818 112.001 64 101.251 64 88.001ZM224 448.001C144.48 448.001 80.018 383.501 80.018 304.001S144.48 160.001 224 160.001S367.982 224.501 367.982 304.001S303.52 448.001 224 448.001Z" })
    ]
  }
));
WashingMachineDuotone.displayName = "WashingMachineDuotone";
var WashingMachine_default = WashingMachineDuotone;
