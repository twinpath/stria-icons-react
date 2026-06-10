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
var TextWidth_exports = {};
__export(TextWidth_exports, {
  default: () => TextWidth_default
});
module.exports = __toCommonJS(TextWidth_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextWidthLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 32H16C7.156 32 0 39.156 0 48V128C0 136.844 7.156 144 16 144S32 136.844 32 128V64H208V256H160C151.156 256 144 263.156 144 272S151.156 288 160 288H288C296.844 288 304 280.844 304 272S296.844 256 288 256H240V64H416V128C416 136.844 423.156 144 432 144S448 136.844 448 128V48C448 39.156 440.844 32 432 32ZM363.312 292.688C357.062 286.438 346.937 286.438 340.688 292.688S334.438 309.063 340.688 315.312L393.375 368H54.625L107.312 315.312C113.562 309.062 113.562 298.937 107.312 292.688S90.937 286.438 84.688 292.688L4.688 372.688C-1.562 378.938 -1.562 389.063 4.688 395.312L84.688 475.312C87.812 478.438 91.906 480 96 480S104.188 478.438 107.312 475.312C113.562 469.062 113.562 458.937 107.312 452.688L54.625 400H393.375L340.687 452.688C334.437 458.938 334.437 469.063 340.687 475.312C343.812 478.438 347.906 480 352 480S360.188 478.438 363.312 475.312L443.312 395.312C449.562 389.062 449.562 378.937 443.312 372.688L363.312 292.688Z" })
  }
));
TextWidthLight.displayName = "TextWidthLight";
var TextWidth_default = TextWidthLight;
