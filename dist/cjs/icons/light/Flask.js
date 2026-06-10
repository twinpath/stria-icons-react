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
var Flask_exports = {};
__export(Flask_exports, {
  default: () => Flask_default
});
module.exports = __toCommonJS(Flask_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlaskLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M437.232 403.5L319.992 215V79.996C319.992 71.162 312.83 64 303.996 64S288 71.162 288 79.996V144H287.992V215.002C287.992 220.975 289.664 226.828 292.818 231.9L347.613 320H100.387L155.18 231.902C158.336 226.828 160.008 220.975 160.008 215V144H160V79.996C160 71.162 152.838 64 144.004 64S128.008 71.162 128.008 79.996V215L10.767 403.5C-18.479 450.625 15.267 512 70.889 512H377.111C432.732 512 466.478 450.5 437.232 403.5ZM410.932 460C407.592 466.014 397.609 480 377.111 480H70.889C50.383 480 40.406 466.047 37.068 460.047C30.043 447.42 30.377 432.59 37.941 420.4L80.484 352H367.515L410.062 420.406C417.627 432.562 417.953 447.363 410.932 460ZM112 32H336C344.844 32 352 24.844 352 16S344.844 0 336 0H112C103.156 0 96 7.156 96 16S103.156 32 112 32Z" })
  }
));
FlaskLight.displayName = "FlaskLight";
var Flask_default = FlaskLight;
