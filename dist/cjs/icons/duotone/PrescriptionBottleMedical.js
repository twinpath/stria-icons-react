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
var PrescriptionBottleMedical_exports = {};
__export(PrescriptionBottleMedical_exports, {
  default: () => PrescriptionBottleMedical_default
});
module.exports = __toCommonJS(PrescriptionBottleMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PrescriptionBottleMedicalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 448C32 483.199 60.801 512 96 512H288C323.199 512 352 483.199 352 448V96H32V448ZM96 288C96 279.199 103.199 272 112 272H160V224C160 215.199 167.199 208 176 208H208C216.801 208 224 215.199 224 224V272H272C280.801 272 288 279.199 288 288V320C288 328.799 280.801 336 272 336H224V384C224 392.799 216.801 400 208 400H176C167.199 400 160 392.799 160 384V336H112C103.199 336 96 328.799 96 320V288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 272H224V224C224 215.199 216.801 208 208 208H176C167.199 208 160 215.199 160 224V272H112C103.199 272 96 279.199 96 288V320C96 328.799 103.199 336 112 336H160V384C160 392.799 167.199 400 176 400H208C216.801 400 224 392.799 224 384V336H272C280.801 336 288 328.799 288 320V288C288 279.199 280.801 272 272 272ZM360 0H24C10.75 0 0 10.75 0 24V72C0 85.25 10.75 96 24 96H360C373.25 96 384 85.25 384 72V24C384 10.75 373.25 0 360 0Z" })
    ]
  }
));
PrescriptionBottleMedicalDuotone.displayName = "PrescriptionBottleMedicalDuotone";
var PrescriptionBottleMedical_default = PrescriptionBottleMedicalDuotone;
