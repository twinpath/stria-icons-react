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
var Road_exports = {};
__export(Road_exports, {
  default: () => Road_default
});
module.exports = __toCommonJS(Road_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RoadRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M565.838 394.475L451.551 74.475C442.453 49.002 418.326 32 391.279 32H185.34C158.293 32 134.166 49.002 125.068 74.475L10.783 394.475C-4.104 436.154 26.797 480 71.055 480H505.566C549.824 480 580.722 436.154 565.838 394.475ZM518.644 425.217C516.859 427.75 512.787 432 505.566 432H312.308V408C312.308 394.75 301.558 384 288.308 384S264.308 394.75 264.308 408V432H71.055C63.834 432 59.76 427.75 57.974 425.217S53.558 417.418 55.986 410.619L170.271 90.619C172.541 84.268 178.596 80 185.34 80H264.308V104C264.308 117.25 275.058 128 288.308 128S312.308 117.25 312.308 104V80H391.279C398.023 80 404.08 84.268 406.347 90.619L520.635 410.619C523.062 417.418 520.43 422.684 518.644 425.217ZM288.308 192C275.058 192 264.308 202.75 264.308 216V296C264.308 309.25 275.058 320 288.308 320S312.308 309.25 312.308 296V216C312.308 202.75 301.558 192 288.308 192Z" })
  }
));
RoadRegular.displayName = "RoadRegular";
var Road_default = RoadRegular;
