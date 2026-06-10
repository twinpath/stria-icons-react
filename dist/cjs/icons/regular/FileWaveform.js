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
const FileWaveformRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M172.031 381.312C176.5 388 184 392 192 392C192.5 392 192.984 392 193.484 391.969C202.031 391.437 209.641 386.375 213.469 378.719L257.406 290.844L267.156 307.906C271.438 315.375 279.391 320 288 320H328C341.25 320 352 309.25 352 296S341.25 272 328 272H301.922L276.844 228.094C272.469 220.406 264.734 215.781 255.328 216C246.484 216.25 238.484 221.344 234.531 229.281L189.031 320.281L163.969 282.688C159.516 276 152.031 272 144 272H24C10.75 272 0 282.75 0 296S10.75 320 24 320H131.156L172.031 381.312ZM429.256 93.383L354.627 18.746C342.625 6.742 326.348 0 309.373 0H128C92.652 0 63.998 28.656 64 64L64.006 216C64.008 229.258 74.752 240 88.006 240H88.008C101.262 240 112.008 229.254 112.006 216L112 64.125C112 55.289 119.162 48.125 128 48.125H288.008V128C288.008 145.672 302.334 160 320.008 160H400.002V448C400.002 456.836 392.838 464 384.002 464H128.018C119.182 464 112.018 456.836 112.018 448L112.014 376C112.014 362.742 101.27 352 88.016 352S64.016 362.742 64.016 376L64.02 448C64.021 483.344 92.676 512 128.021 512H384C419.199 512 448 483.199 448 448V138.641C448 121.664 441.258 105.383 429.256 93.383Z" })
  }
));
FileWaveformRegular.displayName = "FileWaveformRegular";
var FileWaveform_default = FileWaveformRegular;
