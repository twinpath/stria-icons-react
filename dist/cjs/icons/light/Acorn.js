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
var Acorn_exports = {};
__export(Acorn_exports, {
  default: () => Acorn_default
});
module.exports = __toCommonJS(Acorn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AcornLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 64.031H245.41C249.857 50.342 257.037 37.588 267.312 27.313C273.562 21.063 273.562 10.938 267.312 4.688S250.937 -1.562 244.688 4.688C228.373 21.002 217.232 41.758 211.947 64.031H96C43 64.031 0 107.031 0 160.031V176.031C0 193.656 14.375 208.031 32 208.031V224C32 322 87.375 411.75 175.125 455.5L224 480L272.875 455.5C360.625 411.75 416 322 416 224V208.031C433.625 208.031 448 193.656 448 176.031V160.031C448 107.031 405 64.031 352 64.031ZM384 224C384 310.5 336 388.25 258.625 426.875L224 444.25L189.375 426.875C112 388.25 64 310.5 64 224V208.031H384V224ZM416 176.031H32V160.031C32 124.781 60.75 96.031 96 96.031H352C387.25 96.031 416 124.781 416 160.031V176.031Z" })
  }
));
AcornLight.displayName = "AcornLight";
var Acorn_default = AcornLight;
