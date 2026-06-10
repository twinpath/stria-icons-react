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
var Timeline_exports = {};
__export(Timeline_exports, {
  default: () => Timeline_default
});
module.exports = __toCommonJS(Timeline_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TimelineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 240H528V125.736C555.555 118.6 576 93.785 576 64C576 28.656 547.348 0 512 0C476.654 0 448 28.656 448 64C448 93.785 468.443 118.6 496 125.736V240H144V125.736C171.555 118.6 192 93.785 192 64C192 28.656 163.348 0 128 0C92.654 0 64 28.656 64 64C64 93.785 84.443 118.6 112 125.736V240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H304V386.264C276.443 393.4 256 418.215 256 448C256 483.344 284.654 512 320 512C355.348 512 384 483.344 384 448C384 418.215 363.555 393.4 336 386.264V272H624C632.844 272 640 264.844 640 256S632.844 240 624 240ZM480 64C480 46.355 494.355 32 512 32S544 46.355 544 64S529.645 96 512 96S480 81.645 480 64ZM96 64C96 46.355 110.355 32 128 32S160 46.355 160 64S145.645 96 128 96S96 81.645 96 64ZM352 448C352 465.645 337.645 480 320 480S288 465.645 288 448S302.355 416 320 416S352 430.355 352 448Z" })
  }
));
TimelineLight.displayName = "TimelineLight";
var Timeline_default = TimelineLight;
