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
var ParachuteBox_exports = {};
__export(ParachuteBox_exports, {
  default: () => ParachuteBox_default
});
module.exports = __toCommonJS(ParachuteBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ParachuteBoxSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.767 192H487.141L350.256 343.875C351.007 346.625 351.882 349.125 351.882 352V480C351.882 497.75 337.631 512 319.879 512H191.871C174.244 512 159.868 497.75 159.868 480V352C159.868 349.125 160.743 346.5 161.494 343.875L24.734 192H16.109C6.858 192 -1.018 184.125 0.107 175C9.233 99.5 78.488 42.75 158.368 16.25C121.991 55.75 95.989 116.875 95.989 192H67.862L184.495 321.5C186.995 320.875 189.245 320 191.996 320H239.999V192H127.991C127.991 76.75 196.871 0 256 0S384.009 76.75 384.009 192H272.001V320H320.004C322.755 320 325.005 320.875 327.505 321.5L444.138 192H416.011C416.011 116.875 390.009 55.75 353.632 16.25C433.512 42.625 502.767 99.375 511.893 175C513.018 184.25 505.142 192 495.767 192Z" })
  }
));
ParachuteBoxSolid.displayName = "ParachuteBoxSolid";
var ParachuteBox_default = ParachuteBoxSolid;
