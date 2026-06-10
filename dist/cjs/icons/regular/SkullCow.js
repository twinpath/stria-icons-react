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
var SkullCow_exports = {};
__export(SkullCow_exports, {
  default: () => SkullCow_default
});
module.exports = __toCommonJS(SkullCow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SkullCowRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 224.145C238.375 224.145 224 238.394 224 256.143C224 273.767 238.375 288.141 256 288.141S288 273.767 288 256.143C288 238.394 273.625 224.145 256 224.145ZM384 224.145C366.375 224.145 352 238.394 352 256.143C352 273.767 366.375 288.141 384 288.141S416 273.767 416 256.143C416 238.394 401.625 224.145 384 224.145ZM603.25 4.66C597.875 -0.714 589.625 -1.464 583.375 2.536C577 6.66 574.375 14.535 577 21.659C583.125 37.658 596.625 89.154 579.875 113.278C573.125 123.027 561.375 128.027 544 128.027L470.875 127.902C459.5 108.278 438.625 96.279 415.875 96.154H224C201.25 96.279 180.375 108.403 169 128.027H96C78.625 128.027 66.875 123.027 60.125 113.278C43.375 89.279 56.5 38.908 63 21.534C65.625 14.535 63 6.66 56.75 2.661C50.375 -1.464 42.125 -0.589 36.75 4.535C13 27.784 0 60.157 0 95.654C0 166.149 57.375 223.895 128 223.895H160V304.015C160.125 335.762 183.25 362.51 214.625 367.01L249.375 488.752C253.25 502.501 265.75 512 280.125 512H359.75C374.125 512 386.625 502.501 390.5 488.752L425.375 367.135C456.625 362.51 479.875 335.762 480 304.139V224.02L512 223.895C582.5 223.895 640 166.149 640 95.654C640 60.157 627 27.784 603.25 4.66ZM432 304.015C432 311.889 426.125 318.638 418.375 319.638L387.75 324.138L379.25 353.886L347.75 464.003H292.125L260.75 353.886L252.25 324.138L221.625 319.638C213.875 318.513 208 311.889 208 304.015V160.15C208 151.275 215.125 144.151 224 144.151H416C424.875 144.151 432 151.275 432 160.15V304.015Z" })
  }
));
SkullCowRegular.displayName = "SkullCowRegular";
var SkullCow_default = SkullCowRegular;
