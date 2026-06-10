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
var VideoSlash_exports = {};
__export(VideoSlash_exports, {
  default: () => VideoSlash_default
});
module.exports = __toCommonJS(VideoSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VideoSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M473.173 200L576.001 128.031V376.551L604.157 398.779C606.523 394.275 608.001 389.277 608.001 383.969V128.031C608.001 116.047 601.407 105.172 590.767 99.641C580.173 94.156 567.439 94.953 557.657 101.813L454.829 173.781C447.579 178.844 445.829 188.828 450.892 196.063C455.954 203.312 465.907 205.047 473.173 200ZM352.001 96C369.646 96 384.001 110.355 384.001 128V224.967L416.001 250.23V128C416.001 92.654 387.347 64 352.001 64H180.116L220.648 96H352.001ZM633.923 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.079 508.562C617.017 510.875 620.517 512 623.985 512C628.72 512 633.407 509.906 636.564 505.922C642.032 498.984 640.845 488.92 633.923 483.436ZM352.001 416H96.001C78.357 416 64.001 401.645 64.001 384V135.432L34.276 111.965C32.939 117.117 32.001 122.428 32.001 128V384C32.001 419.346 60.655 448 96.001 448H352.001C378.382 448 401.005 432.02 410.8 409.229L383.29 387.51C381.46 403.428 368.401 416 352.001 416Z" })
  }
));
VideoSlashLight.displayName = "VideoSlashLight";
var VideoSlash_default = VideoSlashLight;
