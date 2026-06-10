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
var VideoArrowDownLeft_exports = {};
__export(VideoArrowDownLeft_exports, {
  default: () => VideoArrowDownLeft_default
});
module.exports = __toCommonJS(VideoArrowDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VideoArrowDownLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H320C355.346 448 384 419.346 384 384V128C384 92.654 355.346 64 320 64ZM352 384C352 401.645 337.645 416 320 416H64C46.355 416 32 401.645 32 384V128C32 110.355 46.355 96 64 96H320C337.645 96 352 110.355 352 128V384ZM558.766 99.641C548.172 94.156 535.438 94.953 525.656 101.812L422.828 173.781C415.578 178.844 413.828 188.828 418.891 196.062C423.953 203.312 433.906 205.047 441.172 200L544 128.031V383.969L441.172 312C433.906 306.953 423.953 308.688 418.891 315.938C413.828 323.172 415.578 333.156 422.828 338.219L525.641 410.188C531.141 414.031 537.547 415.984 543.984 415.984C549.031 415.984 554.109 414.781 558.766 412.359C569.406 406.828 576 395.953 576 383.969V128.031C576 116.047 569.406 105.172 558.766 99.641ZM260.688 164.688L128 297.375V224C128 215.156 120.844 208 112 208S96 215.156 96 224V336C96 344.844 103.156 352 112 352H224C232.844 352 240 344.844 240 336S232.844 320 224 320H150.625L283.312 187.312C289.562 181.062 289.562 170.937 283.312 164.688S266.938 158.438 260.688 164.688Z" })
  }
));
VideoArrowDownLeftLight.displayName = "VideoArrowDownLeftLight";
var VideoArrowDownLeft_default = VideoArrowDownLeftLight;
