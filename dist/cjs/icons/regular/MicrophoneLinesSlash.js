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
var MicrophoneLinesSlash_exports = {};
__export(MicrophoneLinesSlash_exports, {
  default: () => MicrophoneLinesSlash_default
});
module.exports = __toCommonJS(MicrophoneLinesSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrophoneLinesSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.812 469.109L471.499 344.244C486.915 318.34 495.999 288.322 495.999 256V216C495.999 202.744 485.253 192 471.999 192S447.999 202.744 447.999 216V256C447.999 277.111 442.421 296.754 433.281 314.289L407.492 294.076C412.689 282.379 415.999 269.652 415.999 256V96C415.999 43 372.999 0 319.999 0S223.999 43 223.999 96V150.26L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM335.999 128H367.999V160H335.999C327.156 160 319.999 167.156 319.999 176S327.156 192 335.999 192H367.999V256C367.999 258.217 367.32 260.225 367.029 262.361L271.999 187.881V96C271.999 69.5 293.499 48 319.999 48S367.999 69.5 367.999 96H335.999C327.156 96 319.999 103.156 319.999 112S327.156 128 335.999 128ZM391.999 464H343.999V430.25C364.745 427.406 384.269 420.795 402.07 411.369L359.085 377.678C342.929 382.883 325.468 385.166 307.249 383.375C240.749 376.875 191.999 317.125 191.999 250.25V246.719L145.203 210.041C144.689 211.994 143.999 213.887 143.999 216V248.125C143.999 337.75 207.999 417.75 295.999 429.875V464H247.999C234.745 464 223.999 474.744 223.999 488C223.999 501.254 234.745 512 247.999 512H391.999C405.253 512 415.999 501.254 415.999 488C415.999 474.744 405.253 464 391.999 464Z" })
  }
));
MicrophoneLinesSlashRegular.displayName = "MicrophoneLinesSlashRegular";
var MicrophoneLinesSlash_default = MicrophoneLinesSlashRegular;
