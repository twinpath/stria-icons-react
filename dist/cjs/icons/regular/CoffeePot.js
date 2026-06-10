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
var CoffeePot_exports = {};
__export(CoffeePot_exports, {
  default: () => CoffeePot_default
});
module.exports = __toCommonJS(CoffeePot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoffeePotRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M428 175L480 32H88C39.399 32 0 71.399 0 120V200C0 213.255 10.745 224 24 224H24C37.255 224 48 213.255 48 200V120C48 97.909 65.909 80 88 80H113.5L148.25 175.5C96.875 215.25 64 276.125 64 344.625C64 396.125 82.625 429.375 113.625 462.375C124.5 473.625 139.5 480 155.125 480L420.875 480C436.406 480 451.452 473.812 462.114 462.519C493.195 429.597 512 396.2 512 344.625C512 276.875 480 215.125 428 175ZM411.5 80L382.375 160H193.625L164.5 80H411.5ZM114.125 320C121.25 273.75 148.25 234.125 186.25 208H392.125C429.375 234.125 455.125 274.25 461.875 320H114.125Z" })
  }
));
CoffeePotRegular.displayName = "CoffeePotRegular";
var CoffeePot_default = CoffeePotRegular;
