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
var PersonSimple_exports = {};
__export(PersonSimple_exports, {
  default: () => PersonSimple_default
});
module.exports = __toCommonJS(PersonSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 160H96C60.654 160 32 188.652 32 224V320C32 337.672 46.326 352 64 352H56V480C56 497.641 70.344 512 88 512S120 497.641 120 480V352H136V480C136 497.641 150.344 512 168 512S200 497.641 200 480V352H192C209.674 352 224 337.672 224 320V224C224 188.652 195.346 160 160 160ZM104 480C104 488.828 96.812 496 88 496S72 488.828 72 480V352H104V480ZM184 480C184 488.828 176.812 496 168 496S152 488.828 152 480V352H184V480ZM208 320C208 328.822 200.822 336 192 336H64C55.178 336 48 328.822 48 320V224C48 197.533 69.533 176 96 176H160C186.467 176 208 197.533 208 224V320ZM128 128C163.375 128 192 99.375 192 64S163.375 0 128 0S64 28.625 64 64S92.625 128 128 128ZM128 16C154.467 16 176 37.533 176 64S154.467 112 128 112S80 90.467 80 64S101.533 16 128 16Z" })
  }
));
PersonSimpleThin.displayName = "PersonSimpleThin";
var PersonSimple_default = PersonSimpleThin;
