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
var RectangleVerticalHistory_exports = {};
__export(RectangleVerticalHistory_exports, {
  default: () => RectangleVerticalHistory_default
});
module.exports = __toCommonJS(RectangleVerticalHistory_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RectangleVerticalHistoryLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 0H256C220.654 0 192 28.652 192 64V448C192 483.348 220.654 512 256 512H512C547.346 512 576 483.348 576 448V64C576 28.652 547.346 0 512 0ZM544 448C544 465.645 529.645 480 512 480H256C238.355 480 224 465.645 224 448V64C224 46.355 238.355 32 256 32H512C529.645 32 544 46.355 544 64V448ZM16 96C7.164 96 0 103.164 0 112V400C0 408.836 7.164 416 16 416S32 408.836 32 400V112C32 103.164 24.836 96 16 96ZM112 48C103.164 48 96 55.164 96 64V448C96 456.836 103.164 464 112 464S128 456.836 128 448V64C128 55.164 120.836 48 112 48Z" })
  }
));
RectangleVerticalHistoryLight.displayName = "RectangleVerticalHistoryLight";
var RectangleVerticalHistory_default = RectangleVerticalHistoryLight;
