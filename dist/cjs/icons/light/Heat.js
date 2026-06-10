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
var Heat_exports = {};
__export(Heat_exports, {
  default: () => Heat_default
});
module.exports = __toCommonJS(Heat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeatLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 153.625V48C192 39.125 184.875 32 176 32S160 39.125 160 48V152.25C160 201.5 177.875 249 210.25 286C238.5 318.25 256 358.375 256 401.25V464C256 472.875 263.125 480 272 480S288 472.875 288 464V402.375C288 353.25 270.125 305.75 237.75 268.75C209.5 236.5 192 196.375 192 153.625ZM64 132.375V112C64 103.125 56.875 96 48 96S32 103.125 32 112V128C32.125 182.875 49.75 236.25 82.25 280.375C110.625 318.625 128 364 128 411.625V464C128 472.875 135.125 480 144 480S160 472.875 160 464V416C159.875 361.125 142.25 307.75 109.75 263.625C81.375 225.375 64 180 64 132.375ZM365.75 263.625C337.375 225.375 320 180 320 132.375V112C320 103.125 312.875 96 304 96S288 103.125 288 112V128C288.125 182.875 305.75 236.25 338.25 280.375C366.625 318.625 384 364 384 411.625V464C384 472.875 391.125 480 400 480S416 472.875 416 464V416C415.875 361.125 398.25 307.75 365.75 263.625Z" })
  }
));
HeatLight.displayName = "HeatLight";
var Heat_default = HeatLight;
