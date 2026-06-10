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
var Sensor_exports = {};
__export(Sensor_exports, {
  default: () => Sensor_default
});
module.exports = __toCommonJS(Sensor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SensorDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM96 272C96 280.875 88.875 288 80 288S64 280.875 64 272V112C64 103.125 71.125 96 80 96S96 103.125 96 112V272ZM160 272C160 280.875 152.875 288 144 288S128 280.875 128 272V112C128 103.125 135.125 96 144 96S160 103.125 160 112V272ZM224 272C224 280.875 216.875 288 208 288S192 280.875 192 272V112C192 103.125 199.125 96 208 96S224 103.125 224 112V272Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 96C71.125 96 64 103.125 64 112V272C64 280.875 71.125 288 80 288S96 280.875 96 272V112C96 103.125 88.875 96 80 96ZM144 96C135.125 96 128 103.125 128 112V272C128 280.875 135.125 288 144 288S160 280.875 160 272V112C160 103.125 152.875 96 144 96ZM208 96C199.125 96 192 103.125 192 112V272C192 280.875 199.125 288 208 288S224 280.875 224 272V112C224 103.125 216.875 96 208 96Z" })
    ]
  }
));
SensorDuotone.displayName = "SensorDuotone";
var Sensor_default = SensorDuotone;
