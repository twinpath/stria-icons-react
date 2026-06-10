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
var TowerControl_exports = {};
__export(TowerControl_exports, {
  default: () => TowerControl_default
});
module.exports = __toCommonJS(TowerControl_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TowerControlLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M438.361 147.188C429.205 135 415.222 128 399.973 128H319.994V96C319.994 78.326 305.669 64 287.996 64H239.999V32H271.997C280.834 32 287.996 24.836 287.996 16C287.996 7.162 280.834 0 271.997 0H176.003C167.168 0 160.004 7.162 160.004 16C160.004 24.836 167.168 32 176.003 32H208.001V64H160.004C142.333 64 128.006 78.326 128.006 96V128H48.027C32.778 128 18.795 135 9.639 147.188S-2.313 174.781 1.952 189.438L40.631 322.035C35.575 324.723 32.012 329.873 32.012 336C32.012 344.836 39.176 352 48.011 352H96.008V496C96.008 504.836 103.172 512 112.007 512C120.845 512 128.006 504.836 128.006 496V352H319.994V496C319.994 504.836 327.157 512 335.993 512C344.83 512 351.992 504.836 351.992 496V352H399.989C408.826 352 415.987 344.836 415.987 336C415.987 329.873 412.427 324.723 407.369 322.035L446.048 189.437C450.313 174.781 447.517 159.375 438.361 147.188ZM160.004 96H287.996V128H160.004V96ZM73.369 320L32.669 180.5C31.247 175.594 32.184 170.469 35.231 166.406S42.949 160 48.027 160H128.006V320H73.369ZM160.004 320V160H287.996V320H160.004ZM415.331 180.5L374.631 320H319.994V160H399.973C405.051 160 409.722 162.344 412.769 166.406C415.816 170.469 416.753 175.594 415.331 180.5Z" })
  }
));
TowerControlLight.displayName = "TowerControlLight";
var TowerControl_default = TowerControlLight;
