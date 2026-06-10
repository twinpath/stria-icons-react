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
const SwatchbookDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M434.625 167.75L344.5 77.375C332.125 64.875 312 64.875 299.5 77.25L299.375 77.375L224 152.875V424L434.625 212.875C447.125 200.375 447.125 180.25 434.625 167.75ZM480 320H373.125L186.625 506.5C184.625 508.625 182.125 510.125 180 512H480C497.625 512 512 497.625 512 480V352C512 334.375 497.625 320 480 320ZM64 256H128V192H64V256ZM64 128H128V64H64V128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 32.001C192 14.376 177.625 0.001 160 0.001H32C14.375 0.001 0 14.376 0 32.001V416.001C0 469.001 43 512.001 96 512.001S192 469.001 192 416.001V32.001ZM96 440.001C82.75 440.001 72 429.251 72 416.001S82.75 392.001 96 392.001S120 402.751 120 416.001S109.25 440.001 96 440.001ZM128 256.001H64V192.001H128V256.001ZM128 128.001H64V64.001H128V128.001Z" })
    ]
  }
));
SwatchbookDuotone.displayName = "SwatchbookDuotone";
var Swatchbook_default = SwatchbookDuotone;
