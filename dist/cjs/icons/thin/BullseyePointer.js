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
var BullseyePointer_exports = {};
__export(BullseyePointer_exports, {
  default: () => BullseyePointer_default
});
module.exports = __toCommonJS(BullseyePointer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BullseyePointerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M261.687 251.003C259.625 248.935 256.687 248.136 253.844 248.935L29.844 311.748C26.344 312.719 23.937 315.947 24 319.582C24.062 323.217 26.531 326.366 30.062 327.259L144.355 355.904L2.344 498.306C-0.781 501.44 -0.781 506.516 2.344 509.65C3.906 511.217 5.937 512 8 512S12.094 511.217 13.656 509.65L155.672 367.246L184.25 481.855C185.125 485.38 188.25 487.871 191.875 487.934H192C195.562 487.934 198.687 485.568 199.687 482.121L263.687 258.869C264.5 256.08 263.719 253.072 261.687 251.003ZM192.531 448.999L167.75 349.617C167.723 349.51 166.727 344.974 161.937 343.773L63.25 319.034L244.344 268.254L192.531 448.999ZM292.75 309.069C289.156 311.623 288.281 316.621 290.844 320.24C292.406 322.465 294.875 323.64 297.375 323.64C298.969 323.64 300.594 323.17 301.999 322.167C323.281 307.11 336 282.606 336 256.66C336 212.429 300.125 176.44 256 176.44C230.406 176.44 206.156 189.005 191.094 210.063C188.531 213.651 189.344 218.665 192.937 221.25C196.469 223.804 201.531 223.021 204.094 219.401C216.156 202.542 235.562 192.484 256 192.484C291.281 192.484 320 221.266 320 256.66C320 277.404 309.812 296.989 292.75 309.069ZM271 415.579C271.25 415.579 271.531 415.564 271.781 415.532C353.999 407.354 416 339.057 416 256.66C416 168.198 344.219 96.22 256 96.22C174.437 96.22 106.344 157.889 97.656 239.676C97.187 244.078 100.375 248.027 104.781 248.497C109.063 249.092 113.125 245.77 113.594 241.368C121.406 167.775 182.625 112.264 256 112.264C335.406 112.264 400 177.035 400 256.66C400 330.769 344.187 392.203 270.219 399.583C265.812 400.006 262.594 403.938 263.031 408.357C263.437 412.493 266.937 415.579 271 415.579ZM256 16C123.656 16 16 123.952 16 256.66C16 258.117 16.094 259.542 16.187 260.968L16.344 263.538C16.469 267.893 20.031 271.34 24.344 271.34H24.562C28.969 271.215 32.469 267.517 32.344 263.099L32.156 259.824C32.094 258.775 32 257.725 32 256.66C32 132.805 132.5 32.044 256 32.044S480 132.805 480 256.66S379.5 481.275 256 481.275C254.469 481.275 253 481.165 251.5 481.071L248 480.852C243.312 481.181 239.875 484.142 239.687 488.561C239.531 492.979 242.969 496.708 247.375 496.896L250.406 497.068C252.25 497.194 254.125 497.319 256 497.319C388.344 497.319 496 389.367 496 256.66S388.344 16 256 16Z" })
  }
));
BullseyePointerThin.displayName = "BullseyePointerThin";
var BullseyePointer_default = BullseyePointerThin;
