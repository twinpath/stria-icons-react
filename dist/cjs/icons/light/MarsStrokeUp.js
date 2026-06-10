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
var MarsStrokeUp_exports = {};
__export(MarsStrokeUp_exports, {
  default: () => MarsStrokeUp_default
});
module.exports = __toCommonJS(MarsStrokeUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsStrokeUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M316.451 211.558C286.158 181.266 247.568 164.366 207.998 160.775V144.012H256C264.844 144.012 272 136.855 272 128.012S264.844 112.012 256 112.012H207.998V49.313L262 92.513C264.953 94.857 268.484 96.013 271.984 96.013C276.688 96.013 281.328 93.95 284.5 90.013C290.016 83.107 288.891 73.045 282 67.514L202 3.516C196.156 -1.172 187.844 -1.172 182 3.516L102 67.514C95.109 73.045 93.984 83.107 99.5 90.013C105.031 96.888 115.078 98.013 122 92.513L176.002 49.313V112.012H128C119.156 112.012 112 119.168 112 128.012S119.156 144.012 128 144.012H176.002V160.773C136.432 164.362 97.842 181.266 67.549 211.558C-1.184 280.289 -1.182 391.723 67.549 460.454C136.281 529.18 247.719 529.184 316.451 460.454C385.184 391.721 385.182 280.289 316.451 211.558ZM293.824 437.825C237.678 493.97 146.322 493.97 90.176 437.825C34.031 381.682 34.031 290.33 90.176 234.185C146.322 178.04 237.678 178.04 293.824 234.185C349.969 290.33 349.969 381.682 293.824 437.825Z" })
  }
));
MarsStrokeUpLight.displayName = "MarsStrokeUpLight";
var MarsStrokeUp_default = MarsStrokeUpLight;
