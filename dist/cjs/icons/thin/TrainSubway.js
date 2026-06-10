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
var TrainSubway_exports = {};
__export(TrainSubway_exports, {
  default: () => TrainSubway_default
});
module.exports = __toCommonJS(TrainSubway_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrainSubwayThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M104 304C81.938 304 64 321.938 64 344S81.938 384 104 384S144 366.062 144 344S126.062 304 104 304ZM104 368C90.766 368 80 357.234 80 344S90.766 320 104 320S128 330.766 128 344S117.234 368 104 368ZM352 0H96C42.98 0 0 42.98 0 96V352C0 401.5 37.605 441.77 85.725 446.963L34.344 498.344C31.219 501.469 31.219 506.531 34.344 509.656C35.906 511.219 37.953 512 40 512S44.094 511.219 45.656 509.656L107.312 448H340.688L402.344 509.656C403.906 511.219 405.953 512 408 512S412.094 511.219 413.656 509.656C416.781 506.531 416.781 501.469 413.656 498.344L362.275 446.963C410.395 441.77 448 401.5 448 352V96C448 42.98 405.02 0 352 0ZM432 352C432 396.111 396.113 432 352 432H96C51.889 432 16 396.111 16 352V96C16 51.887 51.889 16 96 16H352C396.113 16 432 51.887 432 96V352ZM344 304C321.938 304 304 321.938 304 344S321.938 384 344 384S384 366.062 384 344S366.062 304 344 304ZM344 368C330.766 368 320 357.234 320 344S330.766 320 344 320S368 330.766 368 344S357.234 368 344 368ZM352 96H96C78.326 96 64 110.326 64 128V224C64 241.672 78.326 256 96 256H352C369.674 256 384 241.672 384 224V128C384 110.326 369.674 96 352 96ZM216 240H96C87.178 240 80 232.822 80 224V128C80 119.178 87.178 112 96 112H216V240ZM368 224C368 232.822 360.822 240 352 240H232V112H352C360.822 112 368 119.178 368 128V224Z" })
  }
));
TrainSubwayThin.displayName = "TrainSubwayThin";
var TrainSubway_default = TrainSubwayThin;
