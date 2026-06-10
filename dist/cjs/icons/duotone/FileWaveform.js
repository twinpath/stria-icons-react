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
const FileWaveformDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 128V464C448 490.508 426.508 512 400 512H112C85.492 512 64 490.508 64 464V304H129.156L170.531 386.719C174.625 394.875 182.938 400 192 400C192.312 400 192.656 400 193 399.969C202.438 399.594 210.781 393.687 214.281 384.906L258.438 274.531L266.531 290.719C270.594 298.875 278.906 304 288 304H352C360.836 304 368 296.836 368 288V272C368 263.164 360.836 256 352 256H302.844L277.469 205.281C273.25 196.844 265.312 191.563 255 192.031C245.562 192.406 237.219 198.313 233.719 207.094L189.562 317.469L165.469 269.281C161.398 261.141 153.078 256 143.977 256H64V48C64 21.492 85.492 0 112 0H320V128H448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0V128H448L320 0ZM352 256H302.844L277.469 205.281C273.25 196.844 265.312 191.563 255 192.031C245.562 192.406 237.219 198.313 233.719 207.094L189.562 317.469L165.469 269.281C161.398 261.141 153.078 256 143.977 256H16C7.164 256 0 263.164 0 272V288C0 296.836 7.164 304 16 304H129.156L170.531 386.719C174.625 394.875 182.938 400 192 400C192.312 400 192.656 400 193 399.969C202.438 399.594 210.781 393.687 214.281 384.906L258.438 274.531L266.531 290.719C270.594 298.875 278.906 304 288 304H352C360.836 304 368 296.836 368 288V272C368 263.164 360.836 256 352 256Z" })
    ]
  }
));
FileWaveformDuotone.displayName = "FileWaveformDuotone";
var FileWaveform_default = FileWaveformDuotone;
