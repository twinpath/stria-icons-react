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
var HeadSideGoggles_exports = {};
__export(HeadSideGoggles_exports, {
  default: () => HeadSideGoggles_default
});
module.exports = __toCommonJS(HeadSideGoggles_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideGogglesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 64H383.5C345 24 291.625 0 234.125 0H200C127.625 0 61.875 38.75 26.875 97C11.75 99.625 0 112.125 0 128V192C0 209.625 14.375 224 32 224H216C216.75 224 217.125 223.375 217.875 223.25C236.875 243.375 264.125 256 293.375 256H480C497.625 256 512 241.625 512 224V96C512 78.375 497.625 64 480 64ZM32 192V128H197.625C193.5 139.5 191.5 152 192.125 165.125C192.625 174.625 195 183.5 198.25 192H32ZM216.625 96.25C216.375 96.25 216.25 96 216 96H67.125C97.875 57.375 146.125 32 200 32H234.125C270.375 32 304.875 43.75 333.875 64H288C259.5 64 234.125 76.5 216.625 96.25ZM384 224H288C252.75 224 224 195.25 224 160S252.75 96 288 96H384V224ZM480 224H416V96H480V224ZM35.993 256H35.993C24.033 256 15.868 268.657 21.317 279.303C32.089 300.352 46.584 319.21 64 334.875V496C64 504.8 71.2 512 80 512H80C88.8 512 96 504.8 96 496V320.5L85.375 311C70.747 297.856 59.265 282.285 50.624 265.278C47.787 259.693 42.258 256 35.993 256ZM384 304V384C384 401.6 369.6 416 352 416H304C295.163 416 288 423.163 288 432V496C288 504.8 295.2 512 304 512H304C312.8 512 320 504.8 320 496V448H352C387.346 448 416 419.346 416 384V320H463.875C472.76 320 479.943 312.76 479.874 303.875V303.875C479.805 295.087 472.662 288 463.875 288H400C391.163 288 384 295.163 384 304Z" })
  }
));
HeadSideGogglesLight.displayName = "HeadSideGogglesLight";
var HeadSideGoggles_default = HeadSideGogglesLight;
