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
var SensorTriangleExclamation_exports = {};
__export(SensorTriangleExclamation_exports, {
  default: () => SensorTriangleExclamation_default
});
module.exports = __toCommonJS(SensorTriangleExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SensorTriangleExclamationRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.375 432H64C55.125 432 48 424.875 48 416V96C48 87.125 55.125 80 64 80H384C392.875 80 400 87.125 400 96V117.625C413.75 107.625 430.125 101.625 448 101.625V96C448 60.625 419.375 32 384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H242.5C240 476.875 237.25 474 235.25 470.5C228.5 458.75 224.75 445.5 224.375 432ZM176 152V264C176 277.25 186.75 288 200 288S224 277.25 224 264V152C224 138.75 213.25 128 200 128S176 138.75 176 152ZM96 152V264C96 277.25 106.75 288 120 288S144 277.25 144 264V152C144 138.75 133.25 128 120 128S96 138.75 96 152ZM633.125 403.375L492.25 159.25C472.625 125.125 423.375 125.125 403.75 159.25L262.875 403.375C243.25 437.375 267.875 480 307.125 480H588.875C628.125 480 652.75 437.375 633.125 403.375ZM448 432C434.75 432 424 421.25 424 408S434.75 384 448 384S472 394.75 472 408S461.25 432 448 432ZM472.018 336C472.018 349.25 461.268 360 448.018 360S424.018 349.25 424.018 336V256C424.018 242.75 434.768 232 448.018 232S472.018 242.75 472.018 256V336Z" })
  }
));
SensorTriangleExclamationRegular.displayName = "SensorTriangleExclamationRegular";
var SensorTriangleExclamation_default = SensorTriangleExclamationRegular;
