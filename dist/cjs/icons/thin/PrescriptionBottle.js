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
const PrescriptionBottleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 0H32C14.326 0 0 14.326 0 32V96C0 113.674 14.326 128 32 128H352C369.674 128 384 113.674 384 96V32C384 14.326 369.674 0 352 0ZM368 96C368 104.822 360.822 112 352 112H32C23.178 112 16 104.822 16 96V32C16 23.178 23.178 16 32 16H352C360.822 16 368 23.178 368 32V96ZM344 152C339.594 152 336 155.578 336 160V440C336 470.875 310.875 496 280 496H104C73.125 496 48 470.875 48 440V416H160C164.406 416 168 412.422 168 408S164.406 400 160 400H48V320H160C164.406 320 168 316.422 168 312S164.406 304 160 304H48V224H160C164.406 224 168 220.422 168 216S164.406 208 160 208H48V160C48 155.578 44.406 152 40 152S32 155.578 32 160V440C32 479.703 64.312 512 104 512H280C319.688 512 352 479.703 352 440V160C352 155.578 348.406 152 344 152Z" })
  }
));
PrescriptionBottleThin.displayName = "PrescriptionBottleThin";
var PrescriptionBottle_default = PrescriptionBottleThin;
