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
var DisplayCode_exports = {};
__export(DisplayCode_exports, {
  default: () => DisplayCode_default
});
module.exports = __toCommonJS(DisplayCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DisplayCodeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M349.656 138.344C346.531 135.219 341.469 135.219 338.344 138.344S335.219 146.531 338.344 149.656L396.688 208L338.344 266.344C335.219 269.469 335.219 274.531 338.344 277.656C339.906 279.219 341.953 280 344 280S348.094 279.219 349.656 277.656L413.656 213.656C416.781 210.531 416.781 205.469 413.656 202.344L349.656 138.344ZM237.656 138.344C234.531 135.219 229.469 135.219 226.344 138.344L162.344 202.344C159.219 205.469 159.219 210.531 162.344 213.656L226.344 277.656C227.906 279.219 229.953 280 232 280S236.094 279.219 237.656 277.656C240.781 274.531 240.781 269.469 237.656 266.344L179.312 208L237.656 149.656C240.781 146.531 240.781 141.469 237.656 138.344ZM64 352H512V64H64V352ZM80 80H496V336H80V80ZM528 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H228.91L202.242 496H136C131.594 496 128 499.578 128 504S131.594 512 136 512H440C444.406 512 448 508.422 448 504S444.406 496 440 496H373.785L347.117 416H528C554.5 416 576 394.5 576 368V48C576 21.5 554.5 0 528 0ZM356.91 496H219.117L245.785 416H330.242L356.91 496ZM560 368C560 385.645 545.645 400 528 400H48C30.355 400 16 385.645 16 368V48C16 30.355 30.355 16 48 16H528C545.645 16 560 30.355 560 48V368Z" })
  }
));
DisplayCodeThin.displayName = "DisplayCodeThin";
var DisplayCode_default = DisplayCodeThin;
