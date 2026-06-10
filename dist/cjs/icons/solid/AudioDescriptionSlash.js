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
const AudioDescriptionSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.811 469.103L600.078 445.015C604.701 436.232 608 426.648 608 416.002V96C608 60.653 579.346 32 544 32H95.999C89.355 32 83.042 33.176 77.042 35.072L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L562.867 476.849L601.186 506.883C611.686 515.086 626.748 513.211 634.873 502.805C643.061 492.369 641.248 477.275 630.811 469.103ZM464.217 338.531L419.685 303.628C444.408 301.708 464 281.208 464 256.001C464 229.532 442.469 208.001 416 208.001H384V275.659L336 238.038V184.001C336 170.751 346.75 160.001 360 160.001H416C468.937 160.001 512 203.063 512 256.001C512 291.288 492.654 321.849 464.217 338.531ZM306.718 349.47C303.281 351.189 299.625 352.001 296.031 352.001C287.218 352.001 278.75 347.142 274.531 338.736L265.164 320.001H182.835L173.468 338.736C167.562 350.595 153.156 355.439 141.281 349.47C129.406 343.533 124.593 329.126 130.531 317.267L173.017 232.294L31.999 121.768V416.002C31.999 451.347 60.654 480.002 95.999 480.002H489.06L314.486 343.173C312.406 345.71 309.845 347.906 306.718 349.47ZM202.835 280.001H233.884L211.578 262.517L202.835 280.001Z" })
  }
));
AudioDescriptionSlashSolid.displayName = "AudioDescriptionSlashSolid";
var AudioDescriptionSlash_default = AudioDescriptionSlashSolid;
