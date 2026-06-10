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
var WonSign_exports = {};
__export(WonSign_exports, {
  default: () => WonSign_default
});
module.exports = __toCommonJS(WonSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WonSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480.009 256H456.079L510.165 84C516.79 62.922 505.087 40.469 484.009 33.844C462.915 27.234 440.478 38.906 433.853 60L372.222 256H347.614L294.603 61.484C289.853 44.078 274.056 32 256.009 32S222.165 44.078 217.415 61.484L164.404 256H139.796L78.165 60C71.525 38.906 49.087 27.25 28.009 33.844C6.931 40.469 -4.772 62.922 1.853 84L55.939 256H32.009C14.337 256 0.009 270.328 0.009 288S14.337 320 32.009 320H76.064L117.571 452C122.9 468.938 139.196 480.281 156.493 480C174.259 479.656 189.65 467.641 194.321 450.516L229.888 320H282.13L317.696 450.516C322.368 467.641 337.759 479.656 355.525 480H356.29C373.728 480 389.196 468.688 394.446 452L435.954 320H480.009C497.681 320 512.009 305.672 512.009 288S497.681 256 480.009 256ZM247.327 256L256.009 224.141L264.691 256H247.327Z" })
  }
));
WonSignSolid.displayName = "WonSignSolid";
var WonSign_default = WonSignSolid;
