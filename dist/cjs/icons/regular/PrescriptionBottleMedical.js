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
const PrescriptionBottleMedicalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 0H32C14.326 0 0 14.326 0 32V96C0 113.674 14.326 128 32 128V456C32 486.875 57.125 512 88 512H296C326.875 512 352 486.875 352 456V128C369.674 128 384 113.674 384 96V32C384 14.326 369.674 0 352 0ZM304 456C304 460.406 300.406 464 296 464H88C83.594 464 80 460.406 80 456V128H304V456ZM336 80H48V48H336V80ZM112 320H160V368C160 376.836 167.164 384 176 384H208C216.836 384 224 376.836 224 368V320H272C280.836 320 288 312.836 288 304V272C288 263.162 280.836 256 272 256H224V208C224 199.162 216.836 192 208 192H176C167.164 192 160 199.162 160 208V256H112C103.164 256 96 263.162 96 272V304C96 312.836 103.164 320 112 320Z" })
  }
));
PrescriptionBottleMedicalRegular.displayName = "PrescriptionBottleMedicalRegular";
var PrescriptionBottleMedical_default = PrescriptionBottleMedicalRegular;
