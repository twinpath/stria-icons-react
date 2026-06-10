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
var SuitcaseMedical_exports = {};
__export(SuitcaseMedical_exports, {
  default: () => SuitcaseMedical_default
});
module.exports = __toCommonJS(SuitcaseMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SuitcaseMedicalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H384V48C384 21.531 362.469 0 336 0H176C149.531 0 128 21.531 128 48V96H64C28.654 96 0 124.654 0 160V416C0 451.346 28.654 480 64 480H448C483.348 480 512 451.346 512 416V160C512 124.654 483.348 96 448 96ZM160 48C160 39.172 167.172 32 176 32H336C344.828 32 352 39.172 352 48V96H160V48ZM96 448H64C46.355 448 32 433.645 32 416V160C32 142.355 46.355 128 64 128H96V448ZM384 448H128V128H384V448ZM480 416C480 433.645 465.645 448 448 448H416V128H448C465.645 128 480 142.355 480 160V416ZM176 320H224V368C224 376.836 231.164 384 240 384H272C280.836 384 288 376.836 288 368V320H336C344.836 320 352 312.836 352 304V272C352 263.162 344.836 256 336 256H288V208C288 199.162 280.836 192 272 192H240C231.164 192 224 199.162 224 208V256H176C167.164 256 160 263.162 160 272V304C160 312.836 167.164 320 176 320Z" })
  }
));
SuitcaseMedicalLight.displayName = "SuitcaseMedicalLight";
var SuitcaseMedical_default = SuitcaseMedicalLight;
