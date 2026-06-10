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
var AudioDescriptionSlash_exports = {};
__export(AudioDescriptionSlash_exports, {
  default: () => AudioDescriptionSlash_default
});
module.exports = __toCommonJS(AudioDescriptionSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AudioDescriptionSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M306.719 349.469C303.281 351.188 299.625 352 296.031 352C287.219 352 278.75 347.141 274.531 338.734L265.164 320H182.836L173.469 338.734C167.562 350.594 153.156 355.438 141.281 349.469C129.406 343.531 124.594 329.125 130.531 317.266L173.018 232.293L32 121.768V416C32 451.346 60.654 480 96 480H489.061L314.486 343.172C312.406 345.709 309.846 347.904 306.719 349.469ZM202.836 280H233.885L211.578 262.516L202.836 280ZM544 32H96C89.355 32 83.043 33.176 77.043 35.072L336 238.037V184C336 170.75 346.75 160 360 160H416C468.938 160 512 203.062 512 256C512 291.287 492.654 321.848 464.217 338.529L600.08 445.016C604.701 436.232 608 426.648 608 416V96C608 60.652 579.346 32 544 32ZM464 256C464 229.531 442.469 208 416 208H384V275.658L419.686 303.627C444.408 301.707 464 281.207 464 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.811 469.102L38.814 5.11C34.407 1.672 29.189 0.001 24.032 0.001C16.907 0.001 9.845 3.157 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102Z" })
    ]
  }
));
AudioDescriptionSlashDuotone.displayName = "AudioDescriptionSlashDuotone";
var AudioDescriptionSlash_default = AudioDescriptionSlashDuotone;
