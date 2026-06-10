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
var DrumSteelpan_exports = {};
__export(DrumSteelpan_exports, {
  default: () => DrumSteelpan_default
});
module.exports = __toCommonJS(DrumSteelpan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrumSteelpanRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 32C129 32 0 89.25 0 160V352C0 422.75 129 480 288 480S576 422.75 576 352V160C576 89.25 447 32 288 32ZM288 80C312.25 80 335.75 81.25 357.875 83.5L346.375 128.125C341.875 145.75 315.625 160 288 160S234.125 145.75 229.625 128.125L218.125 83.5C240.25 81.25 263.75 80 288 80ZM229.625 175.5C245.999 185.875 266.625 192 288 192C309 192 329.5 186.125 345.625 176C348.5 197.75 357.125 218 370.375 235C344.625 238.25 317 240 288 240C258.625 240 230.75 238.125 204.75 235C217.875 217.625 226.75 197.375 229.625 175.5ZM174.5 89.5L187.5 135.625C197.375 170.375 184.125 206.125 157.25 227C91.5 212.75 48 188.125 48 160C48 129.5 99.25 103 174.5 89.5ZM528 352C528 379.5 434.5 432 288 432S48 379.5 48 352V230.75C99.625 265.25 187.75 288 288 288S476.375 265.25 528 230.75V352ZM418.125 227.125C409.75 221 402.5 213.25 396.875 204.25C385.125 185.375 381.375 163.125 386.5 141.5L398.625 89C475.5 102.375 528 129.125 528 160C528 188.125 484.25 212.875 418.125 227.125Z" })
  }
));
DrumSteelpanRegular.displayName = "DrumSteelpanRegular";
var DrumSteelpan_default = DrumSteelpanRegular;
