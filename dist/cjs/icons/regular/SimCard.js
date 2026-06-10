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
var SimCard_exports = {};
__export(SimCard_exports, {
  default: () => SimCard_default
});
module.exports = __toCommonJS(SimCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SimCardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 240H122C98.812 240 80 258.812 80 282V320H144V240ZM80 390C80 413.188 98.812 432 122 432H208V352H80V390ZM176 320H304V282C304 258.812 285.188 240 262 240H176V320ZM374.627 118.627L265.373 9.373C259.371 3.371 251.232 0 242.746 0H64C28.801 0 0 28.799 0 64V448C0 483.199 28.801 512 64 512H320C355.199 512 384 483.199 384 448V141.254C384 132.768 380.629 124.629 374.627 118.627ZM336 448C336 456.75 328.75 464 320 464H64C55.25 464 48 456.75 48 448V64C48 55.25 55.25 48 64 48H236.125L336 147.875V448ZM240 432H262C285.188 432 304 413.188 304 390V352H240V432Z" })
  }
));
SimCardRegular.displayName = "SimCardRegular";
var SimCard_default = SimCardRegular;
