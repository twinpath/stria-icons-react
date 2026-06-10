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
var CableCar_exports = {};
__export(CableCar_exports, {
  default: () => CableCar_default
});
module.exports = __toCommonJS(CableCar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CableCarDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.462 51.875C509.212 43.25 500.462 38.25 491.837 40.625L11.832 168.625C3.332 170.875 -1.793 179.625 0.582 188.25C2.457 195.25 8.832 200 15.957 200C17.332 200 18.707 199.75 20.082 199.5L500.087 71.5C508.712 69.25 513.712 60.375 511.462 51.875ZM80 384H176.001V288H80V384ZM208.002 384H304.003V288H208.002V384ZM336.003 384H432.004V288H336.003V384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416.004 224H272.002V132.25L240.002 140.75V224H96.001C60.655 224 32 252.652 32 288V448C32 483.346 60.655 512 96.001 512H416.004C451.35 512 480.005 483.346 480.005 448V288C480.005 252.652 451.35 224 416.004 224ZM176.001 384H80V288H176.001V384ZM304.003 384H208.002V288H304.003V384ZM432.004 384H336.003V288H432.004V384ZM191.959 96C209.709 96 223.959 81.75 223.959 64S209.709 32 191.959 32S159.958 46.25 159.958 64S174.208 96 191.959 96ZM287.96 64C305.71 64 319.96 49.75 319.96 32S305.71 0 287.96 0S255.959 14.25 255.959 32S270.21 64 287.96 64Z" })
    ]
  }
));
CableCarDuotone.displayName = "CableCarDuotone";
var CableCar_default = CableCarDuotone;
