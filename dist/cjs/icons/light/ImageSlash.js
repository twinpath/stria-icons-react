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
var ImageSlash_exports = {};
__export(ImageSlash_exports, {
  default: () => ImageSlash_default
});
module.exports = __toCommonJS(ImageSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImageSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M633.923 483.436L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.079 508.562C617.017 510.875 620.517 512 623.985 512C628.72 512 633.407 509.906 636.564 505.922C642.032 498.984 640.845 488.92 633.923 483.436ZM512.001 64C529.646 64 544.001 78.355 544.001 96V351.279L576.001 376.543V96C576.001 60.654 547.347 32 512.001 32H139.593L180.124 64H512.001ZM337.704 157.781L324.394 177.9L348.427 196.873L362.235 175.469L406.997 243.115L487.345 306.549L388.939 157.844C377.564 140.469 349.048 140.531 337.704 157.781ZM200.245 242.99L133.845 335.031C127.048 344.437 126.095 356.75 131.298 367.031C136.532 377.5 147.048 384 158.751 384H378.853L360.114 369.207L338.319 352H159.798L224.157 261.869L200.245 242.99ZM459.915 448H128.001C110.357 448 96.001 433.645 96.001 416V160.689L64.001 135.426V416C64.001 451.346 92.655 480 128.001 480H500.448L496.675 477.021L459.915 448Z" })
  }
));
ImageSlashLight.displayName = "ImageSlashLight";
var ImageSlash_default = ImageSlashLight;
