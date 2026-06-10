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
var BookmarkSlash_exports = {};
__export(BookmarkSlash_exports, {
  default: () => BookmarkSlash_default
});
module.exports = __toCommonJS(BookmarkSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookmarkSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 32H448C465.656 32 480 46.359 480 64V300.77L512 326.033V64C512 28.703 483.281 0 448 0H192C169.021 0 148.992 12.283 137.703 30.527L163.152 50.617C168.25 39.697 179.166 32 192 32ZM320 368C317 368 314.031 368.828 311.406 370.5L160 466.859V211.209L128 185.945V496C128 501.844 131.187 507.219 136.312 510.031C141.437 512.813 147.656 512.594 152.594 509.5L320 402.969L487.406 509.5C490.031 511.156 493 512 496 512C498.656 512 501.281 511.344 503.687 510.031C508.812 507.219 512 501.844 512 496V492.123L328.594 370.5C325.969 368.828 323 368 320 368ZM633.908 483.436L25.904 3.418C18.998 -2.02 8.935 -0.848 3.435 6.059C-2.033 12.998 -0.846 23.061 6.092 28.545L614.096 508.563C617.033 510.875 620.533 512 624.002 512C628.721 512 633.408 509.906 636.564 505.922C642.033 498.984 640.846 488.922 633.908 483.436Z" })
  }
));
BookmarkSlashLight.displayName = "BookmarkSlashLight";
var BookmarkSlash_default = BookmarkSlashLight;
