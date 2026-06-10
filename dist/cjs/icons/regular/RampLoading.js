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
var RampLoading_exports = {};
__export(RampLoading_exports, {
  default: () => RampLoading_default
});
module.exports = __toCommonJS(RampLoading_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RampLoadingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 352V32C384 14.25 369.75 0 352 0H32C14.25 0 0 14.25 0 32V352C0 369.75 14.25 384 32 384H38.875L3.25 467.375C-5.875 488.5 9.625 512 32.625 512H351.5C374.5 512 390 488.5 380.875 467.375L345.125 384H352C369.75 384 384 369.75 384 352ZM56.75 464L111.75 336H272.25L327.25 464H56.75ZM312.25 307.375C307.25 295.625 295.75 288 282.875 288H101.125C88.25 288 76.75 295.625 71.75 307.375L59.5 336H48V48H336V336H324.5L312.25 307.375Z" })
  }
));
RampLoadingRegular.displayName = "RampLoadingRegular";
var RampLoading_default = RampLoadingRegular;
