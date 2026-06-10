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
var HomeUser_exports = {};
__export(HomeUser_exports, {
  default: () => HomeUser_default
});
module.exports = __toCommonJS(HomeUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HomeUserThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 256.002C576 253.8 575.094 251.607 573.313 250.029L293.312 2.043C291.795 0.7 289.897 0.029 287.999 0.029C286.101 0.029 284.203 0.7 282.686 2.043L2.685 250.029C0.905 251.607 0 253.8 0 256.002C0 260.323 3.479 263.999 7.969 263.999C9.865 263.999 11.773 263.331 13.31 261.997L63.997 217.831V448.002C63.997 483.346 92.651 511.998 127.997 511.998H448.001C483.347 511.998 512.001 483.346 512.001 448.002V217.831L562.688 261.997C564.219 263.34 566.094 264.012 568.001 264.012C572.457 264.012 576 260.374 576 256.002ZM496.001 448.002C496.001 474.51 474.51 495.999 448.001 495.999H127.997C101.488 495.999 79.997 474.51 79.997 448.002V203.609L287.999 18.729L496.001 203.609V448.002ZM223.999 256.015C223.999 291.358 252.653 320.011 287.999 320.011S351.999 291.358 351.999 256.015S323.345 192.018 287.999 192.018S223.999 220.671 223.999 256.015ZM335.999 256.015C335.999 282.48 314.466 304.012 287.999 304.012C261.532 304.012 239.999 282.48 239.999 256.015C239.999 229.549 261.532 208.017 287.999 208.017C314.466 208.017 335.999 229.549 335.999 256.015ZM255.999 352.009C211.816 352.009 175.999 387.824 175.999 432.005C175.999 440.84 183.163 448.004 191.999 448.004H383.999C392.835 448.004 399.999 440.84 399.999 432.005C399.999 387.824 364.182 352.009 319.999 352.009H255.999ZM383.999 432.005H191.999C191.999 396.718 220.71 368.008 255.999 368.008H319.999C355.288 368.008 383.999 396.718 383.999 432.005Z " })
  }
));
HomeUserThin.displayName = "HomeUserThin";
var HomeUser_default = HomeUserThin;
