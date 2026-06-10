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
var FileWaveform_exports = {};
__export(FileWaveform_exports, {
  default: () => FileWaveform_default
});
module.exports = __toCommonJS(FileWaveform_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileWaveformSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0V128H448L320 0ZM288 128V0H112C85.492 0 64 21.492 64 48V224H16C7.164 224 0 231.164 0 240V272C0 280.836 7.164 288 16 288H144C150.062 288 155.594 291.438 158.312 296.844L176 332.219L225.688 232.844C231.125 222.031 248.875 222.031 254.312 232.844L281.875 288H352C360.844 288 368 295.156 368 304S360.844 320 352 320H272C265.938 320 260.406 316.562 257.688 311.156L240 275.781L190.312 375.156C187.594 380.562 182.062 384 176 384S164.406 380.562 161.688 375.156L134.125 320H64V464C64 490.508 85.492 512 112 512H400C426.508 512 448 490.508 448 464V160H320C302.328 160 288 145.672 288 128Z" })
  }
));
FileWaveformSolid.displayName = "FileWaveformSolid";
var FileWaveform_default = FileWaveformSolid;
