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
var StarOfLife_exports = {};
__export(StarOfLife_exports, {
  default: () => StarOfLife_default
});
module.exports = __toCommonJS(StarOfLife_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarOfLifeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M477.851 384C474.88 389.125 469.501 392 463.966 392C461.246 392 458.494 391.312 455.977 389.844L272.011 283.701V496C272.011 504.844 264.85 512 256 512S239.989 504.844 239.989 496V283.701L56.023 389.844C53.506 391.312 50.754 392 48.034 392C42.499 392 37.12 389.125 34.149 384C29.725 376.344 32.351 366.562 40.013 362.156L224 256L40.013 149.844C32.351 145.438 29.725 135.656 34.149 128C38.574 120.344 48.378 117.688 56.023 122.156L239.989 228.299V16C239.989 7.156 247.15 0 256 0S272.011 7.156 272.011 16V228.299L455.977 122.156C463.607 117.688 473.41 120.344 477.851 128C482.276 135.656 479.649 145.438 471.987 149.844L288 256L471.987 362.156C479.649 366.562 482.276 376.344 477.851 384Z" })
  }
));
StarOfLifeLight.displayName = "StarOfLifeLight";
var StarOfLife_default = StarOfLifeLight;
