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
var Stamp_exports = {};
__export(Stamp_exports, {
  default: () => Stamp_default
});
module.exports = __toCommonJS(Stamp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StampThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 440C467.594 440 464 443.594 464 448V472C464 485.219 453.219 496 440 496H72C58.781 496 48 485.219 48 472V448C48 443.594 44.406 440 40 440S32 443.594 32 448V472C32 494.062 49.938 512 72 512H440C462.062 512 480 494.062 480 472V448C480 443.594 476.406 440 472 440ZM415.998 255.996H349.5C333.125 255.996 320 242.871 320 226.494V217.119C320.002 189.809 328.783 163.785 341.398 139.562C350.686 121.729 354.463 100.678 350.389 78.361C343.334 39.721 311.646 8.014 272.922 1.436C267.223 0.467 261.588 0 256.066 0C203.012 -0.004 160 42.988 160 95.992C160 110.117 163.125 123.492 168.75 135.619C182.1 164.586 192.15 195.203 191.998 227.215C191.92 243.172 178.459 255.996 162.5 255.996H96.002C42.982 255.996 0 298.977 0 351.998V383.998C0 401.672 14.328 415.998 32 415.998H480C497.674 415.998 512 401.672 512 383.998V351.998C512 298.977 469.02 255.996 415.998 255.996ZM496 383.998C496 392.82 488.822 399.998 480 399.998H32C23.178 399.998 16 392.82 16 383.998V351.998C16 307.885 51.889 271.996 96.002 271.996H162.5C187.469 271.996 207.879 251.941 207.998 227.291C208.143 197.084 200.289 165.826 183.266 128.885C178.445 118.494 176 107.428 176 95.992C176 74.633 184.328 54.547 199.447 39.436C214.572 24.322 234.68 15.998 256.066 16C260.754 16 265.523 16.406 270.242 17.209C302.275 22.65 328.76 48.979 334.648 81.234C337.889 98.986 335.316 116.602 327.207 132.174C311.592 162.158 304.002 189.943 304 217.119V226.494C304 251.584 324.412 271.996 349.5 271.996H415.998C460.111 271.996 496 307.885 496 351.998V383.998Z" })
  }
));
StampThin.displayName = "StampThin";
var Stamp_default = StampThin;
