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
var WifiFair_exports = {};
__export(WifiFair_exports, {
  default: () => WifiFair_default
});
module.exports = __toCommonJS(WifiFair_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WifiFairLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.005 192C242.253 192 170.002 222.125 116.564 276.812C110.376 283.125 110.501 293.281 116.814 299.438C123.189 305.656 133.314 305.469 139.439 299.188C186.815 250.688 250.941 224 320.005 224S453.194 250.688 500.57 299.188C503.695 302.375 507.852 304 512.008 304C516.039 304 520.071 302.5 523.196 299.438C529.508 293.281 529.633 283.125 523.446 276.813C470.007 222.125 397.756 192 320.005 192ZM320.005 352C284.658 352 256.004 380.652 256.004 416S284.658 480 320.005 480S384.006 451.348 384.006 416S355.351 352 320.005 352ZM320.005 448C302.36 448 288.004 433.645 288.004 416S302.36 384 320.005 384S352.005 398.355 352.005 416S337.649 448 320.005 448Z" })
  }
));
WifiFairLight.displayName = "WifiFairLight";
var WifiFair_default = WifiFairLight;
