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
var Desktop_exports = {};
__export(Desktop_exports, {
  default: () => Desktop_default
});
module.exports = __toCommonJS(Desktop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DesktopThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 288H512V64H64V288ZM80 80H496V272H80V80ZM528 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H228.91L202.242 496H136C131.594 496 128 499.578 128 504S131.594 512 136 512H440C444.406 512 448 508.422 448 504S444.406 496 440 496H373.785L347.117 416H528C554.5 416 576 394.5 576 368V48C576 21.5 554.5 0 528 0ZM356.91 496H219.117L245.785 416H330.242L356.91 496ZM560 368C560 385.645 545.645 400 528 400H48C30.355 400 16 385.645 16 368V48C16 30.355 30.355 16 48 16H528C545.645 16 560 30.355 560 48V368Z" })
  }
));
DesktopThin.displayName = "DesktopThin";
var Desktop_default = DesktopThin;
