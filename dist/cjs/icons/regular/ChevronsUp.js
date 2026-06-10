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
var ChevronsUp_exports = {};
__export(ChevronsUp_exports, {
  default: () => ChevronsUp_default
});
module.exports = __toCommonJS(ChevronsUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M56.59 265.344L224 105.219L391.41 265.344C396.067 269.781 402.037 272 408.006 272C414.318 272 420.631 269.531 425.35 264.594C434.506 255 434.162 239.812 424.6 230.656L240.594 54.656C231.281 45.781 216.719 45.781 207.406 54.656L23.401 230.656C13.838 239.812 13.494 255 22.651 264.594S46.996 274.469 56.59 265.344ZM240.594 246.656C231.281 237.781 216.719 237.781 207.406 246.656L23.401 422.656C13.838 431.812 13.494 447 22.651 456.594S46.996 466.469 56.59 457.344L224 297.219L391.41 457.344C396.067 461.781 402.037 464 408.006 464C414.318 464 420.631 461.531 425.35 456.594C434.506 447 434.162 431.812 424.6 422.656L240.594 246.656Z" })
  }
));
ChevronsUpRegular.displayName = "ChevronsUpRegular";
var ChevronsUp_default = ChevronsUpRegular;
