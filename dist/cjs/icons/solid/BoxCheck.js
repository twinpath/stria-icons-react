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
var BoxCheck_exports = {};
__export(BoxCheck_exports, {
  default: () => BoxCheck_default
});
module.exports = __toCommonJS(BoxCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxCheckSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.625 158.75L391.25 53.875C386.875 40.75 374.75 32 360.875 32H240V160H446.75C447.125 159.5 447.25 159.25 447.625 158.75ZM0 192V432C0 458.51 21.49 480 48 480H400C426.51 480 448 458.51 448 432V192H0ZM312.969 296.969L216.969 392.969C212.281 397.656 206.141 400 200 400S187.719 397.656 183.031 392.969L135.031 344.969C125.656 335.594 125.656 320.406 135.031 311.031S159.594 301.656 168.969 311.031L200 342.062L279.031 263.031C288.406 253.656 303.594 253.656 312.969 263.031S322.344 287.594 312.969 296.969ZM208 160V32H87.125C73.25 32 61.125 40.75 56.75 53.875L0.375 158.75C0.75 159.25 0.875 159.5 1.25 160H208Z" })
  }
));
BoxCheckSolid.displayName = "BoxCheckSolid";
var BoxCheck_default = BoxCheckSolid;
