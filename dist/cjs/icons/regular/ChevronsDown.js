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
var ChevronsDown_exports = {};
__export(ChevronsDown_exports, {
  default: () => ChevronsDown_default
});
module.exports = __toCommonJS(ChevronsDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsDownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M207.406 265.344C216.719 274.219 231.281 274.219 240.594 265.344L424.599 89.344C434.162 80.188 434.506 65 425.349 55.406C420.63 50.469 414.318 48 408.005 48C402.036 48 396.067 50.219 391.411 54.656L224 214.781L56.589 54.656C46.995 45.531 31.807 45.812 22.651 55.406S13.838 80.188 23.401 89.344L207.406 265.344ZM408.005 240C402.036 240 396.067 242.219 391.411 246.656L224 406.781L56.589 246.656C46.995 237.531 31.807 237.812 22.651 247.406S13.838 272.188 23.401 281.344L207.406 457.344C216.719 466.219 231.281 466.219 240.594 457.344L424.599 281.344C434.162 272.188 434.506 257 425.349 247.406C420.63 242.469 414.318 240 408.005 240Z" })
  }
));
ChevronsDownRegular.displayName = "ChevronsDownRegular";
var ChevronsDown_default = ChevronsDownRegular;
