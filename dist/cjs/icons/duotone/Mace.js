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
var Mace_exports = {};
__export(Mace_exports, {
  default: () => Mace_default
});
module.exports = __toCommonJS(Mace_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MaceDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216.251 340.593L54.609 502.603C42.117 515.13 21.855 515.13 9.359 502.615C-3.12 490.111 -3.12 469.655 9.359 457.155L171.021 295.227C182.359 313.731 197.792 329.217 216.251 340.593Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M500.123 209.438L419.369 183.816C405.776 138.783 370.244 103.725 325.022 91.049L297.699 10.688C295.514 4.172 291.83 1.049 288 0C284.17 1.049 280.487 4.172 278.301 10.688L250.979 91.049C205.756 103.725 170.225 138.783 156.631 183.816L75.877 209.438C60.131 214.428 59.996 227.91 75.742 233.166L155.824 260.541C168.475 305.845 203.469 341.443 248.422 355.062L273.994 435.963C276.903 445.179 282.631 448.396 288 446.909C293.369 448.396 299.098 445.179 302.006 435.963L327.578 355.062C372.531 341.443 407.526 305.845 420.176 260.541L500.258 233.166C516.004 227.91 515.869 214.428 500.123 209.438ZM288 255.52C270.375 255.52 256 241.118 256 223.46S270.375 191.401 288 191.401S320 205.802 320 223.46S305.625 255.52 288 255.52Z" })
    ]
  }
));
MaceDuotone.displayName = "MaceDuotone";
var Mace_default = MaceDuotone;
