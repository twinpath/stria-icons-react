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
var Compress_exports = {};
__export(Compress_exports, {
  default: () => Compress_default
});
module.exports = __toCommonJS(Compress_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompressDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 320H32C14.312 320 0 334.312 0 352S14.312 384 32 384H96V448C96 465.688 110.312 480 128 480S160 465.688 160 448V352C160 334.312 145.688 320 128 320ZM416 128H352V64C352 46.312 337.688 32 320 32S288 46.312 288 64V160C288 177.688 302.312 192 320 192H416C433.688 192 448 177.688 448 160S433.688 128 416 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 320H320C302.312 320 288 334.312 288 352V448C288 465.688 302.312 480 320 480S352 465.688 352 448V384H416C433.688 384 448 369.688 448 352S433.688 320 416 320ZM128 32C110.312 32 96 46.312 96 64V128H32C14.312 128 0 142.312 0 160S14.312 192 32 192H128C145.688 192 160 177.688 160 160V64C160 46.312 145.688 32 128 32Z" })
    ]
  }
));
CompressDuotone.displayName = "CompressDuotone";
var Compress_default = CompressDuotone;
