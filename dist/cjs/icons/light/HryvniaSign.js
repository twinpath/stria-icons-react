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
var HryvniaSign_exports = {};
__export(HryvniaSign_exports, {
  default: () => HryvniaSign_default
});
module.exports = __toCommonJS(HryvniaSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HryvniaSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 304C384 312.844 376.844 320 368 320H112.605C92.314 333.369 80 354.1 80 376.969C80 416.141 115.328 448 158.75 448H205.219C236.656 448 267.375 436.359 289.484 416.047C295.969 410.047 306.078 410.469 312.094 417C318.078 423.516 317.641 433.641 311.141 439.609C282.766 465.656 245.156 480 205.219 480H158.75C97.688 480 48 433.781 48 376.969C48 356.449 54.896 336.701 66.828 320H16C7.156 320 0 312.844 0 304S7.156 288 16 288H102.877L216.109 224H16C7.156 224 0 216.844 0 208S7.156 192 16 192H271.393C291.684 178.631 304 157.9 304 135.031C304 95.859 268.672 64 225.25 64H178.781C147.344 64 116.625 75.641 94.516 95.953C87.984 101.906 77.875 101.5 71.906 95C65.922 88.484 66.359 78.359 72.859 72.391C101.234 46.344 138.844 32 178.781 32H225.25C286.312 32 336 78.219 336 135.031C336 155.551 329.104 175.299 317.172 192H368C376.844 192 384 199.156 384 208S376.844 224 368 224H281.123L167.891 288H368C376.844 288 384 295.156 384 304Z" })
  }
));
HryvniaSignLight.displayName = "HryvniaSignLight";
var HryvniaSign_default = HryvniaSignLight;
