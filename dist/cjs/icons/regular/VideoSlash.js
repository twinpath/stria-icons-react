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
var VideoSlash_exports = {};
__export(VideoSlash_exports, {
  default: () => VideoSlash_default
});
module.exports = __toCommonJS(VideoSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VideoSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.812 469.109L447.999 325.824V199.818L559.999 148.484V344C559.999 357.254 570.745 368 583.999 368S607.999 357.254 607.999 344V136.016C607.999 122.328 601.124 109.75 589.609 102.344C578.078 94.938 563.734 93.953 551.328 99.656L447.999 147.016V128C447.999 92.652 419.345 64 383.999 64H113.945L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM399.999 288.203L175.185 112H383.999C392.835 112 399.999 119.162 399.999 128V288.203ZM383.999 400H95.999C87.177 400 79.999 392.822 79.999 384V158.934L32.624 121.801C32.423 123.871 31.999 125.877 31.999 128V384C31.999 419.346 60.654 448 95.999 448H383.999C400.681 448 415.738 441.463 427.128 431.008L386.835 399.426C385.88 399.604 385.005 400 383.999 400Z" })
  }
));
VideoSlashRegular.displayName = "VideoSlashRegular";
var VideoSlash_default = VideoSlashRegular;
