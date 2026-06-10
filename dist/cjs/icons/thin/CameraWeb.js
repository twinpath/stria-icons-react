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
var CameraWeb_exports = {};
__export(CameraWeb_exports, {
  default: () => CameraWeb_default
});
module.exports = __toCommonJS(CameraWeb_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraWebThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 232C164.406 232 168 228.406 168 224C168 193.125 193.125 168 224 168C228.406 168 232 164.406 232 160S228.406 152 224 152C184.312 152 152 184.312 152 224C152 228.406 155.594 232 160 232ZM366.062 442.781C363.25 439.469 358.187 439.031 354.781 441.938C351.437 444.813 351.062 449.844 353.937 453.219L390.594 496H57.406L94.062 453.219C96.938 449.844 96.562 444.812 93.219 441.937C89.844 439.031 84.812 439.469 81.937 442.781L33.937 498.781C31.906 501.156 31.437 504.5 32.719 507.344C34.031 510.188 36.875 512 40 512H408C411.125 512 413.969 510.188 415.281 507.344C416.563 504.5 416.094 501.156 414.063 498.781L366.062 442.781ZM224 368C303.402 368 368 303.402 368 224S303.402 80 224 80S80 144.598 80 224S144.598 368 224 368ZM224 96C294.693 96 352 153.307 352 224S294.693 352 224 352S96 294.693 96 224S153.307 96 224 96ZM224 448C347.5 448 448 347.5 448 224S347.5 0 224 0S0 100.5 0 224S100.5 448 224 448ZM224 16C338.688 16 432 109.312 432 224S338.688 432 224 432S16 338.688 16 224S109.312 16 224 16Z" })
  }
));
CameraWebThin.displayName = "CameraWebThin";
var CameraWeb_default = CameraWebThin;
