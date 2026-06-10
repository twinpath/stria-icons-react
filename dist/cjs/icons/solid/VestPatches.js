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
var VestPatches_exports = {};
__export(VestPatches_exports, {
  default: () => VestPatches_default
});
module.exports = __toCommonJS(VestPatches_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VestPatchesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M437.252 239.877L384 160V32C384 14.326 369.674 0 352 0H320C315.25 0 310.625 1.406 306.688 4.031L281.688 20.688C246.656 44.063 201.406 44.063 166.312 20.688L141.312 4.031C137.375 1.406 132.75 0 128 0H96C78.326 0 64 14.326 64 32V160L10.748 239.877C3.74 250.389 0 262.742 0 275.377V480C0 497.672 14.326 512 32 512H192V288C192 284.561 192.555 281.145 193.643 277.881L207.135 237.404L150.186 66.559C173.205 79.428 198.537 86.25 224 86.25S274.795 79.426 297.814 66.559L224 288V512H416C433.674 512 448 497.672 448 480V275.377C448 262.742 444.26 250.389 437.252 239.877ZM63.5 272.5C58.844 267.812 58.844 260.188 63.5 255.5C68.188 250.812 75.812 250.812 80.5 255.5L96 271L111.5 255.5C116.188 250.812 123.812 250.812 128.5 255.5C133.156 260.188 133.156 267.812 128.5 272.5L113 288L128.5 303.5C133.156 308.188 133.156 315.812 128.5 320.5C126.156 322.844 123.062 324 120 324S113.844 322.844 111.5 320.5L96 305L80.5 320.5C78.156 322.844 75.062 324 72 324S65.844 322.844 63.5 320.5C58.844 315.812 58.844 308.188 63.5 303.5L79 288L63.5 272.5ZM96 456C73.908 456 56 438.092 56 416S73.908 376 96 376S136 393.908 136 416S118.092 456 96 456ZM359.227 335.785L310.697 336C306.992 336.016 303.984 333.006 304 329.297L304.215 280.723C304.359 266.32 316.75 254.791 331.43 256.102C344.219 257.264 353.559 268.721 353.486 281.521L353.449 286.578L358.5 286.541C371.326 286.506 382.736 295.816 383.898 308.617C385.207 323.311 373.652 335.676 359.227 335.785Z" })
  }
));
VestPatchesSolid.displayName = "VestPatchesSolid";
var VestPatches_default = VestPatchesSolid;
