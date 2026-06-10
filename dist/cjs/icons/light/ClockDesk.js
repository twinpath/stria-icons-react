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
var ClockDesk_exports = {};
__export(ClockDesk_exports, {
  default: () => ClockDesk_default
});
module.exports = __toCommonJS(ClockDesk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClockDeskLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 0C100.289 0 0 100.289 0 224V432C0 476.125 35.875 512 80 512H368C412.125 512 448 476.125 448 432V224C448 100.289 347.713 0 224 0ZM416 432C416 458.469 394.469 480 368 480H80C53.531 480 32 458.469 32 432V338.945C71.15 404.191 142.369 448 224 448S376.85 404.191 416 338.945V432ZM224 416C118.131 416 32 329.867 32 224S118.131 32 224 32S416 118.133 416 224S329.869 416 224 416ZM240 232V112C240 103.156 232.844 96 224 96S208 103.156 208 112V240C208 245.031 210.375 249.781 214.406 252.812L278.406 300.812C281.281 302.969 284.641 304 287.984 304C292.859 304 297.656 301.781 300.797 297.594C306.109 290.531 304.672 280.5 297.594 275.188L240 232Z" })
  }
));
ClockDeskLight.displayName = "ClockDeskLight";
var ClockDesk_default = ClockDeskLight;
