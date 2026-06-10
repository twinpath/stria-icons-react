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
var GlassesRound_exports = {};
__export(GlassesRound_exports, {
  default: () => GlassesRound_default
});
module.exports = __toCommonJS(GlassesRound_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GlassesRoundSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560.5 225.875L528.75 98.625C522 71.75 495 32 443.375 32C427.75 32 420.25 35 400.25 41.625C391.875 44.375 387.375 53.5 390.25 61.875L395.25 77C397.5 83.75 403.75 88 410.375 88C414 88 415.25 87.25 428.625 82.75C454.75 74.125 476.875 88.875 482.25 110.25L511.875 229C491 215.875 466.5 208 440 208C384.875 208 337.75 240.875 316.375 288H259.625C238.25 240.875 191.125 208 136 208C109.5 208 85 215.875 64.125 229L93.75 110.25C99.125 88.875 121.25 74 147.375 82.75C160.75 87.25 162 88 165.625 88C172.25 88 178.5 83.75 180.75 77L185.75 61.875C188.625 53.5 184.125 44.375 175.75 41.625C155.75 35 148.25 32 132.625 32C81 32 54 71.75 47.25 98.625L15.5 225.875C2.125 279.375 0 300.125 0 344C0 419.125 60.875 480 136 480C208.375 480 267 423.25 271.25 352H304.75C309 423.25 367.625 480 440 480C515.125 480 576 419.125 576 344C576 300.125 573.875 279.375 560.5 225.875ZM136 416C96.25 416 64 383.75 64 344S96.25 272 136 272S208 304.25 208 344S175.75 416 136 416ZM440 416C400.25 416 368 383.75 368 344S400.25 272 440 272S512 304.25 512 344S479.75 416 440 416Z" })
  }
));
GlassesRoundSolid.displayName = "GlassesRoundSolid";
var GlassesRound_default = GlassesRoundSolid;
