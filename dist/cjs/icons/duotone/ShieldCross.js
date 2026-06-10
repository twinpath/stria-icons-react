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
var ShieldCross_exports = {};
__export(ShieldCross_exports, {
  default: () => ShieldCross_default
});
module.exports = __toCommonJS(ShieldCross_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShieldCrossDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 127.982C16 138.867 16.484 149.488 17.152 160H224V9.336L45.594 83.68C27.688 91.072 16 108.574 16 127.982ZM224 501.986V224H25.625C53.611 363.098 139.43 460.801 224 501.986ZM288 501.998C359.65 466.549 456.514 375.527 486.504 224H288V501.998ZM466.5 83.68L288 9.297V160H494.773C495.42 149.506 496 138.959 496 127.982C496 108.574 484.312 91.072 466.5 83.68Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M494.621 160C493.24 182.459 490.365 203.725 486.352 224H287.848V501.998C275.465 508.127 267.65 512 255.801 512C243.513 512 236.213 508.008 223.848 501.986V224H25.473C21.354 203.521 18.414 182.221 17 160H223.848V9.336L237.441 3.672C242.348 1.641 250.598 0 255.91 0C261.191 0 269.473 1.641 274.348 3.672L287.848 9.297V160H494.621Z " })
    ]
  }
));
ShieldCrossDuotone.displayName = "ShieldCrossDuotone";
var ShieldCross_default = ShieldCrossDuotone;
