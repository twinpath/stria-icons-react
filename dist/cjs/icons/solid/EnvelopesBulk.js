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
var EnvelopesBulk_exports = {};
__export(EnvelopesBulk_exports, {
  default: () => EnvelopesBulk_default
});
module.exports = __toCommonJS(EnvelopesBulk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopesBulkSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.891 448.641C182.125 448.641 172.406 445.672 164.109 439.75L32 340.238V480C32 497.625 46.375 512 64 512H320C337.625 512 352 497.625 352 480V340.238L220.219 439.5C211.672 445.609 201.75 448.641 191.891 448.641ZM192 192C192 156.75 220.75 128 256 128H480V32C480 14.375 465.625 0 448 0H128C110.375 0 96 14.375 96 32V224H192V192ZM320 256H64C46.375 256 32 270.375 32 288V300.176L183.031 413.938C188.281 417.656 195.734 417.672 201.297 413.688L352 300.176V288C352 270.375 337.625 256 320 256ZM576 160H256C238.375 160 224 174.375 224 192V224H320C353.25 224 380.625 249.375 383.75 281.875L384 281.625V416H576C593.625 416 608 401.625 608 384V192C608 174.375 593.625 160 576 160ZM544 288H480V224H544V288Z" })
  }
));
EnvelopesBulkSolid.displayName = "EnvelopesBulkSolid";
var EnvelopesBulk_default = EnvelopesBulkSolid;
