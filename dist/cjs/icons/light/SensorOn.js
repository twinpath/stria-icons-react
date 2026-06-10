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
var SensorOn_exports = {};
__export(SensorOn_exports, {
  default: () => SensorOn_default
});
module.exports = __toCommonJS(SensorOn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SensorOnLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 128C103.125 128 96 135.125 96 144V272C96 280.875 103.125 288 112 288S128 280.875 128 272V144C128 135.125 120.875 128 112 128ZM176 128C167.125 128 160 135.125 160 144V272C160 280.875 167.125 288 176 288S192 280.875 192 272V144C192 135.125 184.875 128 176 128ZM240 128C231.125 128 224 135.125 224 144V272C224 280.875 231.125 288 240 288S256 280.875 256 272V144C256 135.125 248.875 128 240 128ZM384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM416 416C416 433.625 401.625 448 384 448H64C46.375 448 32 433.625 32 416V96C32 78.375 46.375 64 64 64H384C401.625 64 416 78.375 416 96V416ZM600.219 418.281L520.219 370.281C512.75 365.75 502.844 368.219 498.281 375.781S496.187 393.188 503.781 397.719L583.781 445.719C586.344 447.281 589.188 448 592 448C597.406 448 602.719 445.219 605.719 440.219C610.281 432.656 607.812 422.812 600.219 418.281ZM513.125 143C515.937 143 518.75 142.281 521.312 140.75L600.188 93.75C607.781 89.219 610.281 79.406 605.75 71.812C601.188 64.188 591.312 61.719 583.812 66.25L504.937 113.25C497.344 117.781 494.844 127.594 499.375 135.188C502.375 140.219 507.688 143 513.125 143ZM624 240H528C519.156 240 512 247.156 512 256S519.156 272 528 272H624C632.844 272 640 264.844 640 256S632.844 240 624 240Z" })
  }
));
SensorOnLight.displayName = "SensorOnLight";
var SensorOn_default = SensorOnLight;
