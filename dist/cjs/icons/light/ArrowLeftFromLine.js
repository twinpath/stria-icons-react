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
var ArrowLeftFromLine_exports = {};
__export(ArrowLeftFromLine_exports, {
  default: () => ArrowLeftFromLine_default
});
module.exports = __toCommonJS(ArrowLeftFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowLeftFromLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 240H54.625L171.312 123.312C177.562 117.062 177.562 106.937 171.312 100.688S154.937 94.438 148.688 100.688L4.688 244.688C1.562 247.812 0 251.906 0 256S1.562 264.188 4.688 267.312L148.688 411.312C154.938 417.562 165.063 417.562 171.312 411.312S177.562 394.937 171.312 388.688L54.625 272H352C360.844 272 368 264.844 368 256S360.844 240 352 240ZM432 64C423.156 64 416 71.156 416 80V432C416 440.844 423.156 448 432 448S448 440.844 448 432V80C448 71.156 440.844 64 432 64Z" })
  }
));
ArrowLeftFromLineLight.displayName = "ArrowLeftFromLineLight";
var ArrowLeftFromLine_default = ArrowLeftFromLineLight;
