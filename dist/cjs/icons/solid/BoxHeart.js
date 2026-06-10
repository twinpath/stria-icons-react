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
var BoxHeart_exports = {};
__export(BoxHeart_exports, {
  default: () => BoxHeart_default
});
module.exports = __toCommonJS(BoxHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxHeartSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.625 158.75L391.25 53.875C386.875 40.75 374.75 32 360.875 32H240V160H446.75C447.125 159.5 447.25 159.25 447.625 158.75ZM208 160V32H87.125C73.25 32 61.125 40.75 56.75 53.875L0.375 158.75C0.75 159.25 0.875 159.5 1.25 160H208ZM0 192V432C0 458.51 21.49 480 48 480H400C426.51 480 448 458.51 448 432V192H0ZM305.125 341.25L232.5 412.625C227.75 417.25 220.25 417.25 215.5 412.625L142.875 341.25C121.75 320.5 123.125 286.125 146.625 267C167.125 250.25 197.75 253.25 216.625 271.75L224 279.125L231.375 271.75C250.25 253.25 280.75 250.25 301.375 267C324.875 286.125 326.125 320.375 305.125 341.25Z" })
  }
));
BoxHeartSolid.displayName = "BoxHeartSolid";
var BoxHeart_default = BoxHeartSolid;
