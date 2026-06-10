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
var WeightScale_exports = {};
__export(WeightScale_exports, {
  default: () => WeightScale_default
});
module.exports = __toCommonJS(WeightScale_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WeightScaleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 264C278.125 264 296 246.125 296 224C296 213.5 291.75 204 285 196.875L318.75 118.25C322.25 110.125 318.375 100.75 310.25 97.25C302.25 93.75 292.75 97.5 289.25 105.75L255.75 184C233.75 184.25 216 202 216 224C216 246.125 233.875 264 256 264ZM440 64H391.768C359.486 24.914 310.654 0 256 0C201.348 0 152.514 24.914 120.232 64H72C32.297 64 0 96.312 0 136V440C0 479.688 32.297 512 72 512H440C479.703 512 512 479.688 512 440V136C512 96.312 479.703 64 440 64ZM256 48C326.58 48 384 105.422 384 176S326.58 304 256 304S128 246.578 128 176S185.42 48 256 48ZM464 440C464 453.219 453.234 464 440 464H72C58.766 464 48 453.219 48 440V136C48 122.781 58.766 112 72 112H92.182C84.416 131.855 80 153.391 80 176C80 273.203 158.799 352 256 352C353.203 352 432 273.203 432 176C432 153.391 427.586 131.855 419.82 112H440C453.234 112 464 122.781 464 136V440Z" })
  }
));
WeightScaleRegular.displayName = "WeightScaleRegular";
var WeightScale_default = WeightScaleRegular;
