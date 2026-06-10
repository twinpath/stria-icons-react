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
var PersonPraying_exports = {};
__export(PersonPraying_exports, {
  default: () => PersonPraying_default
});
module.exports = __toCommonJS(PersonPraying_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonPrayingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.977 128C291.348 128 319.971 99.375 319.971 64S291.348 0 255.977 0S191.982 28.625 191.982 64S220.605 128 255.977 128ZM233.729 287.5C238.354 293.625 245.354 297.5 252.977 298.375C260.602 299.25 268.352 296.875 274.225 291.75L374.217 209.25C385.965 199.25 387.34 181.5 377.215 169.75C367.217 158 349.469 156.625 337.719 166.75L260.352 230L213.605 168.625C201.107 151.5 181.234 142.5 160.111 144.25C139.113 146.125 120.988 158.75 111.115 179.125L64.119 288.5C43.621 330.5 56.994 381.75 95.117 407.875L165.484 456H27.998C12.498 456 0 468.5 0 484S12.498 512 27.998 512H255.977C261.602 512 287.975 507.125 287.975 480C287.975 471.5 284.6 463 277.975 456.75L158.486 344.375L202.482 246.5L233.729 287.5Z" })
  }
));
PersonPrayingRegular.displayName = "PersonPrayingRegular";
var PersonPraying_default = PersonPrayingRegular;
