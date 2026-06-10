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
var SensorFire_exports = {};
__export(SensorFire_exports, {
  default: () => SensorFire_default
});
module.exports = __toCommonJS(SensorFire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SensorFireSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.875 315.375C288.875 254.375 342.625 162 419.5 90.875C425.375 85.375 433.25 82.25 441.375 82.25C443.625 82.25 445.75 83 448 83.5C442 53.5 415.625 32 385.125 32H64.125C28.75 32 0 60.625 0 96V416C0 451.375 28.75 480 64.125 480H376.5C321.625 443.25 288.75 381.5 288.875 315.375ZM96.25 272C96.25 280.875 89.125 288 80.25 288C71.375 288 64.125 280.875 64.125 272V112C64.125 103.125 71.375 96 80.25 96C89.125 96 96.25 103.125 96.25 112V272ZM160.5 272C160.5 280.875 153.25 288 144.375 288C135.5 288 128.375 280.875 128.375 272V112C128.375 103.125 135.5 96 144.375 96C153.25 96 160.5 103.125 160.5 112V272ZM224.625 272C224.625 280.875 217.5 288 208.625 288C199.75 288 192.5 280.875 192.5 272V112C192.5 103.125 199.75 96 208.625 96C217.5 96 224.625 103.125 224.625 112V272ZM551.125 150.875C536.75 164.25 523.375 178.5 511 193.75C490 165 466.125 138.375 440 114.25C369.75 179.375 320 264.25 320 315.375C320 406.375 391.625 480 480 480S640 406.375 640 315.375C640 277.375 602.875 198.875 551.125 150.875ZM540 397.875C523.125 409.75 502.875 416 482.125 416C428 416 384 380.25 384 322.125C384 293.125 402.25 267.625 438.625 224C443.75 230 512.75 318 512.75 318L556.75 267.875C559.875 273 562.625 278 565.125 282.875C585.625 322 577 372 540 397.875Z" })
  }
));
SensorFireSolid.displayName = "SensorFireSolid";
var SensorFire_default = SensorFireSolid;
