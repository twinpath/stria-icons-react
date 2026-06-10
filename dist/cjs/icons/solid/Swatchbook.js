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
var Swatchbook_exports = {};
__export(Swatchbook_exports, {
  default: () => Swatchbook_default
});
module.exports = __toCommonJS(Swatchbook_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SwatchbookSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M434.625 167.75L344.5 77.375C332.125 64.875 312 64.875 299.5 77.25L299.375 77.375L224 152.875V424L434.625 212.875C447.125 200.375 447.125 180.25 434.625 167.75ZM480 320H373.125L186.625 506.5C184.625 508.625 182.125 510.125 180 512H480C497.625 512 512 497.625 512 480V352C512 334.375 497.625 320 480 320ZM192 32C192 14.375 177.625 0 160 0H32C14.375 0 0 14.375 0 32V416C0 469 43 512 96 512S192 469 192 416V32ZM96 440C82.75 440 72 429.25 72 416S82.75 392 96 392S120 402.75 120 416S109.25 440 96 440ZM128 256H64V192H128V256ZM128 128H64V64H128V128Z" })
  }
));
SwatchbookSolid.displayName = "SwatchbookSolid";
var Swatchbook_default = SwatchbookSolid;
