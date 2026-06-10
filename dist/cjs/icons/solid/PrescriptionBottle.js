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
var PrescriptionBottle_exports = {};
__export(PrescriptionBottle_exports, {
  default: () => PrescriptionBottle_default
});
module.exports = __toCommonJS(PrescriptionBottle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PrescriptionBottleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 192H144C152.801 192 160 199.199 160 208C160 216.799 152.801 224 144 224H32V288H144C152.801 288 160 295.199 160 304C160 312.799 152.801 320 144 320H32V384H144C152.801 384 160 391.199 160 400C160 408.799 152.801 416 144 416H32V448C32 483.199 60.801 512 96 512H288C323.199 512 352 483.199 352 448V128H32V192ZM360 0H24C10.75 0 0 10.75 0 24V72C0 85.25 10.75 96 24 96H360C373.25 96 384 85.25 384 72V24C384 10.75 373.25 0 360 0Z" })
  }
));
PrescriptionBottleSolid.displayName = "PrescriptionBottleSolid";
var PrescriptionBottle_default = PrescriptionBottleSolid;
