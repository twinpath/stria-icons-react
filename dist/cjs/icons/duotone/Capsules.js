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
var Capsules_exports = {};
__export(Capsules_exports, {
  default: () => Capsules_default
});
module.exports = __toCommonJS(Capsules_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CapsulesDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M111.872 32C51.141 32 0 83.125 0 143.835V255.67H223.743V143.835C223.743 83.125 172.602 32 111.872 32ZM425.112 111.882C389.952 60.758 316.437 47.976 265.295 83.125L265.295 83.125C262.099 86.32 258.903 89.515 255.706 92.71V271.646L303.651 338.747L492.235 207.741L425.112 111.882Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 367.505C0 428.215 51.141 479.34 111.872 479.34S223.743 428.215 223.743 367.505V255.67H0V367.505ZM556.161 300.404L492.235 207.741L303.651 338.747L367.578 431.41C402.738 482.535 476.253 495.316 527.394 460.168S591.321 351.528 556.161 300.404Z" })
    ]
  }
));
CapsulesDuotone.displayName = "CapsulesDuotone";
var Capsules_default = CapsulesDuotone;
