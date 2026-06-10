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
var FaceLaughWink_exports = {};
__export(FaceLaughWink_exports, {
  default: () => FaceLaughWink_default
});
module.exports = __toCommonJS(FaceLaughWink_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceLaughWinkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480ZM295.156 211.594C303.672 194.562 319.328 184 336 184S368.328 194.562 376.844 211.594C378.25 214.375 381.078 216 384 216C385.203 216 386.438 215.719 387.578 215.156C391.531 213.187 393.125 208.375 391.156 204.406C379.906 181.969 358.766 168 336 168S292.094 181.969 280.844 204.406C278.875 208.375 280.469 213.187 284.422 215.156C288.344 217.125 293.188 215.531 295.156 211.594ZM176 176C184.844 176 192 183.148 192 192S184.844 208 176 208S160 200.851 160 192S167.156 176 176 176ZM391.904 288H120.098C110.469 288 102.91 296.5 104.129 306C113.027 377 174.092 432 247.955 432H264.045C337.908 432 398.973 377 407.871 306C409.09 296.375 401.533 288 391.904 288ZM264.045 416H247.955C183.014 416 128.006 367.855 120.098 304H391.904L391.996 304.012C383.994 367.855 328.988 416 264.045 416Z" })
  }
));
FaceLaughWinkThin.displayName = "FaceLaughWinkThin";
var FaceLaughWink_default = FaceLaughWinkThin;
