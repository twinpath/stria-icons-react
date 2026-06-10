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
const MicrophoneLinesSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 464H344V430.219C364.602 427.395 383.986 420.828 401.691 411.508L358.428 377.594C343.764 382.246 328.148 384.773 311.748 383.738C245.664 379.57 192 317.145 192 250.93V247.152L144 209.531V248.156C144 337.812 207.969 417.719 296 429.844V464H256C238.328 464 224 478.328 224 496C224 504.836 231.164 512 240 512H400C408.838 512 416 504.836 416 496C416 478.328 401.674 464 384 464ZM407.514 294.082C412.748 282.398 416 269.664 416 256H358.928L407.514 294.082ZM472 192H472C458.745 192 448 202.745 448 216V256C448 277.117 442.418 296.75 433.207 314.219L471.449 344.195C486.816 318.258 496 288.305 496 256V216C496 202.745 485.255 192 472 192ZM336 96H416C416 42.969 373.031 0 320 0S224 42.969 224 96V150.246L324.477 229C327.391 225.945 331.445 224 336 224H416V192H336C327.164 192 320 184.836 320 176S327.164 160 336 160H416V128H336C327.164 128 320 120.836 320 112S327.164 96 336 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.813 469.102L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.188 506.883C611.688 515.086 626.75 513.211 634.875 502.805C643.063 492.367 641.25 477.274 630.813 469.102Z" })
    ]
  }
));
MicrophoneLinesSlashDuotone.displayName = "MicrophoneLinesSlashDuotone";
var MicrophoneLinesSlash_default = MicrophoneLinesSlashDuotone;
