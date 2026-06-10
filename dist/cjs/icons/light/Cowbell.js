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
var Cowbell_exports = {};
__export(Cowbell_exports, {
  default: () => Cowbell_default
});
module.exports = __toCommonJS(Cowbell_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CowbellLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.33 456.125L393.988 136.125C390.129 112.875 370.225 96 346.647 96H320V48C320 21.531 298.469 0 272 0H176C149.531 0 128 21.531 128 48V96H101.35C77.773 96 57.867 112.875 54.008 136.125L0.666 456.125C-4.211 485.318 18.311 512 48.023 512H399.973C429.416 512 452.252 485.586 447.33 456.125ZM160 48C160 39.188 167.172 32 176 32H272C280.828 32 288 39.188 288 48V96H160V48ZM399.973 480H48.023C35.434 480 31.102 468.18 32.229 461.375L85.568 141.375C86.85 133.625 93.49 128 101.35 128H346.647C354.506 128 361.147 133.625 362.428 141.375L415.77 461.375C416.895 468.166 412.674 480 399.973 480Z" })
  }
));
CowbellLight.displayName = "CowbellLight";
var Cowbell_default = CowbellLight;
