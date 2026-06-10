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
const AudioDescriptionSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.872 311.711C505.171 295.967 511.999 276.816 511.999 256C511.999 203.062 468.937 160 415.999 160H351.999C343.155 160 335.999 167.156 335.999 176V187.07L367.999 212.334V192H415.999C451.296 192 479.999 220.703 479.999 256C479.999 269.336 475.88 281.715 468.878 291.977L493.872 311.711ZM543.999 64C561.644 64 575.999 78.355 575.999 96V376.549L607.999 401.812V96C607.999 60.652 579.345 32 543.999 32H139.583L180.114 64H543.999ZM180.431 227.354L129.687 328.844C125.734 336.75 128.937 346.359 136.843 350.312C144.765 354.219 154.343 351.047 158.312 343.156L177.89 304H270.109L289.687 343.156C292.499 348.766 298.14 352 304.015 352C306.421 352 308.859 351.453 311.155 350.312C316.335 347.723 319.22 342.66 319.673 337.285L236.982 272H193.89L206.085 247.607L180.431 227.354ZM95.999 448C78.355 448 63.999 433.645 63.999 416V135.432L31.999 110.166V416C31.999 451.346 60.653 480 95.999 480H500.439L459.907 448H95.999ZM633.921 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.077 508.562C617.015 510.875 620.515 512 623.984 512C628.718 512 633.405 509.906 636.562 505.922C642.03 498.984 640.843 488.92 633.921 483.436Z" })
  }
));
AudioDescriptionSlashLight.displayName = "AudioDescriptionSlashLight";
var AudioDescriptionSlash_default = AudioDescriptionSlashLight;
