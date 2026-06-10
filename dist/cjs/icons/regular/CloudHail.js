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
const CloudHailRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 352C366.25 352 352 366.25 352 384S366.25 416 384 416S416 401.75 416 384S401.75 352 384 352ZM192 448C174.25 448 160 462.25 160 480S174.25 512 192 512S224 497.75 224 480S209.75 448 192 448ZM320 448C302.25 448 288 462.25 288 480S302.25 512 320 512S352 497.75 352 480S337.75 448 320 448ZM256 352C238.25 352 224 366.25 224 384S238.25 416 256 416S288 401.75 288 384S273.75 352 256 352ZM64 448C46.25 448 32 462.25 32 480S46.25 512 64 512S96 497.75 96 480S81.75 448 64 448ZM128 352C110.25 352 96 366.25 96 384S110.25 416 128 416S160 401.75 160 384S145.75 352 128 352ZM410.75 104.25C397.25 61.75 358 32 312 32C298.5 32 285.25 34.625 272.75 39.75C250.25 14.5 218.375 0 184 0C120 0 67.625 50.25 64.25 113.375C25.625 130.375 0 168.5 0 212C0 271.5 48.375 320 108 320H404C463.625 320 512 271.5 512 212C512 154.75 467.125 107.75 410.75 104.25ZM404 272H108C74.875 272 48 245.125 48 212C48 184 67.125 160 94.375 153.75L115.25 148.875L112.375 124C112.25 122.75 112 121.375 112 120C112 80.25 144.25 48 184 48C209.25 48 232.25 61.125 245.375 83.125L258.75 105.25L279.75 90.25C289.375 83.625 300.5 80 312 80C340.625 80 364.375 101.75 367.25 130.375L369.5 152H404C437.125 152 464 178.875 464 212S437.125 272 404 272Z" })
  }
));
CloudHailRegular.displayName = "CloudHailRegular";
var CloudHail_default = CloudHailRegular;
