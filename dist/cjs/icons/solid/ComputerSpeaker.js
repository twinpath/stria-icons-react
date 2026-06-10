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
var ComputerSpeaker_exports = {};
__export(ComputerSpeaker_exports, {
  default: () => ComputerSpeaker_default
});
module.exports = __toCommonJS(ComputerSpeaker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ComputerSpeakerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 416H128C110.375 416 96 430.375 96 448S110.375 480 128 480H304.375C293.875 466.25 288 449.375 288 432V416ZM0 80V336C0 362.5 21.5 384 48 384H288V320H64V96H288V80C288 62.625 293.875 45.75 304.375 32H48C21.5 32 0 53.5 0 80ZM592 32H368C341.5 32 320 53.5 320 80V432C320 458.5 341.5 480 368 480H592C618.5 480 640 458.5 640 432V80C640 53.5 618.5 32 592 32ZM480 96C497.625 96 512 110.375 512 128S497.625 160 480 160S448 145.625 448 128S462.375 96 480 96ZM480 416C427 416 384 373 384 320S427 224 480 224S576 267 576 320S533 416 480 416ZM480 256C444.625 256 416 284.625 416 320S444.625 384 480 384S544 355.375 544 320S515.375 256 480 256Z" })
  }
));
ComputerSpeakerSolid.displayName = "ComputerSpeakerSolid";
var ComputerSpeaker_default = ComputerSpeakerSolid;
