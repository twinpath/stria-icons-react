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
var FireFlameSimple_exports = {};
__export(FireFlameSimple_exports, {
  default: () => FireFlameSimple_default
});
module.exports = __toCommonJS(FireFlameSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireFlameSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C86.25 93.5 0 214.375 0 298.125C0 424 79 512 192 512S384 424 384 298.125C384 214.125 296.75 92.5 192 0ZM192 65.25C243.375 116.25 336 223.75 336 298.125C336 327.625 330.375 353.75 320.875 376.5C317.375 301.75 237.25 218.625 192 167.75C146.25 219.25 66.625 301.5 63.125 376.5C53.75 353.75 48 327.5 48 298.125C48 223.875 140.625 116.375 192 65.25ZM173.875 462.25C135.75 454.75 110.5 423.5 110.5 381.125C110.5 360.5 124 316.5 192 240C260 316.5 273.5 360.5 273.5 381.125C273.5 423.5 248.25 454.75 210.125 462.25C189.25 464.625 194.75 464.625 173.875 462.25Z" })
  }
));
FireFlameSimpleRegular.displayName = "FireFlameSimpleRegular";
var FireFlameSimple_default = FireFlameSimpleRegular;
