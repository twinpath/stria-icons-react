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
var ScalpelLineDashed_exports = {};
__export(ScalpelLineDashed_exports, {
  default: () => ScalpelLineDashed_default
});
module.exports = __toCommonJS(ScalpelLineDashed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScalpelLineDashedLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.859 123.945C507.64 107.82 514.048 86.412 511.421 65.223C508.796 43.941 497.765 25.377 480.328 12.971C468.08 4.221 453.679 0 439.146 0C417.08 0 394.703 9.725 379.045 28.096L182.23 249.123C176.168 256.217 174.824 265.875 178.699 274.312S190.761 288 200.043 288H327.859C339.234 288 350.046 283 357.546 274.281L493.859 123.945ZM327.859 256H218.955L403.4 48.852C412.394 38.301 425.755 32 439.146 32C447.5 32 455.308 34.424 461.777 39.045C471.941 46.277 478.127 56.684 479.666 69.158C481.187 81.447 477.496 93.84 470.154 102.449L333.289 253.412C331.875 255.057 329.894 256 327.859 256ZM288.002 336C288.002 327.156 280.845 320 272.002 320S256.002 327.156 256.002 336C256.002 441.25 126.095 469.594 57.425 477.219L187.314 347.312C193.564 341.062 193.564 330.937 187.314 324.688S170.939 318.438 164.689 324.688L4.691 484.688C0.113 489.25 -1.262 496.156 1.222 502.125C3.691 508.094 9.535 512 16.004 512C110.08 512 288.002 475.219 288.002 336ZM304 480H240C231.156 480 224 487.156 224 496S231.156 512 240 512H304C312.843 512 320 504.844 320 496S312.843 480 304 480ZM432 480H368C359.156 480 352 487.156 352 496S359.156 512 368 512H432C440.843 512 448 504.844 448 496S440.843 480 432 480ZM560 480H496C487.156 480 480 487.156 480 496S487.156 512 496 512H560C568.843 512 576 504.844 576 496S568.843 480 560 480Z" })
  }
));
ScalpelLineDashedLight.displayName = "ScalpelLineDashedLight";
var ScalpelLineDashed_default = ScalpelLineDashedLight;
