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
var CloudHail_exports = {};
__export(CloudHail_exports, {
  default: () => CloudHail_default
});
module.exports = __toCommonJS(CloudHail_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudHailSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 128C415.375 128 414.875 128.25 414.375 128.25C415.5 123 416 117.625 416 112C416 67.75 380.25 32 336 32C311.375 32 289.75 43.25 275 60.75C256.375 24.75 219.25 0 176 0C114.125 0 64 50.125 64 112C64 119.25 64.75 126.25 66.125 133.25C27.75 145.75 0 181.5 0 224C0 277 43 320 96 320H416C469 320 512 277 512 224S469 128 416 128ZM384 352C366.25 352 352 366.25 352 384S366.25 416 384 416S416 401.75 416 384S401.75 352 384 352ZM192 448C174.25 448 160 462.25 160 480S174.25 512 192 512S224 497.75 224 480S209.75 448 192 448ZM320 448C302.25 448 288 462.25 288 480S302.25 512 320 512S352 497.75 352 480S337.75 448 320 448ZM256 352C238.25 352 224 366.25 224 384S238.25 416 256 416S288 401.75 288 384S273.75 352 256 352ZM64 448C46.25 448 32 462.25 32 480S46.25 512 64 512S96 497.75 96 480S81.75 448 64 448ZM128 352C110.25 352 96 366.25 96 384S110.25 416 128 416S160 401.75 160 384S145.75 352 128 352Z" })
  }
));
CloudHailSolid.displayName = "CloudHailSolid";
var CloudHail_default = CloudHailSolid;
