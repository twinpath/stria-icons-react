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
var Prescription_exports = {};
__export(Prescription_exports, {
  default: () => Prescription_default
});
module.exports = __toCommonJS(Prescription_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PrescriptionThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M299.312 352L445.656 205.656C448.781 202.531 448.781 197.469 445.656 194.344S437.469 191.219 434.344 194.344L288 340.688L171.312 224H176C237.75 224 288 173.75 288 112S237.75 0 176 0H8C3.594 0 0 3.578 0 8V312C0 316.422 3.594 320 8 320S16 316.422 16 312V224H148.688L276.688 352L130.344 498.344C127.219 501.469 127.219 506.531 130.344 509.656C131.906 511.219 133.938 512 136 512S140.094 511.219 141.656 509.656L288 363.312L434.344 509.656C435.906 511.219 437.938 512 440 512S444.094 511.219 445.656 509.656C448.781 506.531 448.781 501.469 445.656 498.344L299.312 352ZM16 16H176C228.938 16 272 59.062 272 112S228.938 208 176 208H16V16Z" })
  }
));
PrescriptionThin.displayName = "PrescriptionThin";
var Prescription_default = PrescriptionThin;
