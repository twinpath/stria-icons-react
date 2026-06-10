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
var BanSmoking_exports = {};
__export(BanSmoking_exports, {
  default: () => BanSmoking_default
});
module.exports = __toCommonJS(BanSmoking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BanSmokingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 224C103.25 224 96 231.25 96 240V304C96 312.75 103.25 320 112 320H229.5L133.5 224H112ZM400 224H269.125L301.125 256H384V288H333.125L365.125 320H400C408.75 320 416 312.75 416 304V240C416 231.25 408.75 224 400 224ZM319.445 160C335.07 160 348.07 171.25 350.82 185.875C351.57 189.5 354.82 192 358.57 192H374.695C379.695 192 383.445 187.5 382.695 182.625C378.07 151.75 351.57 128 319.445 128C303.82 128 290.82 116.75 288.07 102.125C287.32 98.5 284.07 96 280.32 96H264.07C259.07 96 255.445 100.5 256.07 105.375C260.695 136.25 287.32 160 319.445 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0C114.625 0 0 114.625 0 256S114.625 512 256 512S512 397.375 512 256S397.375 0 256 0ZM256 448C150.125 448 64 361.875 64 256C64 214.625 77.25 176.25 99.75 144.875L367.125 412.25C335.75 434.75 297.375 448 256 448ZM412.25 367.125L144.875 99.75C176.25 77.25 214.625 64 256 64C361.875 64 448 150.125 448 256C448 297.375 434.75 335.75 412.25 367.125Z" })
    ]
  }
));
BanSmokingDuotone.displayName = "BanSmokingDuotone";
var BanSmoking_default = BanSmokingDuotone;
