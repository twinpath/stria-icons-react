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
const PrescriptionBottleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 160C327.164 160 320 167.162 320 176V448C320 465.672 305.674 480 288 480H96C78.326 480 64 465.672 64 448V416H144C152.801 416 160 408.799 160 400C160 391.199 152.801 384 144 384H64V320H144C152.801 320 160 312.799 160 304C160 295.199 152.801 288 144 288H64V224H144C152.801 224 160 216.799 160 208C160 199.199 152.801 192 144 192H64V176C64 167.162 56.836 160 48 160S32 167.162 32 176V448C32 483.199 60.801 512 96 512H288C323.199 512 352 483.199 352 448V176C352 167.162 344.836 160 336 160ZM352 0H32C14.326 0 0 14.326 0 32V96C0 113.672 14.326 128 32 128H352C369.674 128 384 113.672 384 96V32C384 14.326 369.674 0 352 0ZM352 96H32V32H352V96Z" })
  }
));
PrescriptionBottleLight.displayName = "PrescriptionBottleLight";
var PrescriptionBottle_default = PrescriptionBottleLight;
