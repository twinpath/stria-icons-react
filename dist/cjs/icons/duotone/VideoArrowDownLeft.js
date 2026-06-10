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
var VideoArrowDownLeft_exports = {};
__export(VideoArrowDownLeft_exports, {
  default: () => VideoArrowDownLeft_default
});
module.exports = __toCommonJS(VideoArrowDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VideoArrowDownLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 64H48C21.49 64 0 85.49 0 112V400C0 426.51 21.49 448 48 448H336C362.51 448 384 426.51 384 400V112C384 85.49 362.51 64 336 64ZM296.969 184.969L161.938 320H216C229.25 320 240 330.75 240 344S229.25 368 216 368H104C90.75 368 80 357.25 80 344V232C80 218.75 90.75 208 104 208S128 218.75 128 232V286.062L263.031 151.031C267.719 146.344 273.844 144 280 144S292.281 146.344 296.969 151.031C306.344 160.406 306.344 175.594 296.969 184.969Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 144.035C273.844 144.035 267.719 146.379 263.031 151.066L128 286.107V232.041C128 218.789 117.25 208.039 104 208.039S80 218.789 80 232.041V344.047C80 357.299 90.75 368.049 104 368.049H216C229.25 368.049 240 357.299 240 344.047C240 330.797 229.25 320.047 216 320.047H161.938L296.969 185.006C306.344 175.631 306.344 160.443 296.969 151.066C292.281 146.379 286.156 144.035 280 144.035ZM525.594 101.736L416 177.334V334.75L525.594 410.254C546.812 424.85 576 409.957 576 384.457V127.535C576 102.127 546.906 87.125 525.594 101.736Z" })
    ]
  }
));
VideoArrowDownLeftDuotone.displayName = "VideoArrowDownLeftDuotone";
var VideoArrowDownLeft_default = VideoArrowDownLeftDuotone;
