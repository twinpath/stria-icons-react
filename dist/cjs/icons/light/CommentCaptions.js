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
var CommentCaptions_exports = {};
__export(CommentCaptions_exports, {
  default: () => CommentCaptions_default
});
module.exports = __toCommonJS(CommentCaptions_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentCaptionsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.034 32C114.678 32 0.067 125.125 0.067 240C0.067 287.625 19.94 331.25 52.936 366.25C38.063 405.75 7.067 439.125 6.567 439.5C-0.056 446.5 -1.806 456.75 1.942 465.5C5.817 474.25 14.315 480 23.94 480C85.432 480 133.924 454.25 163.045 433.75C192.041 442.75 223.287 448 256.034 448C397.389 448 512 354.875 512 240S397.389 32 256.034 32ZM256.034 416C227.787 416 199.791 411.75 172.795 403.25C163.278 400.182 152.871 401.789 144.725 407.588L144.674 407.625C121.676 423.875 86.182 442.875 42.061 447.25C54.061 432.125 71.809 406.75 82.807 377.625L82.936 377.285C87.219 366.014 84.725 353.287 76.506 344.463L76.307 344.25C47.311 313.75 32.063 277.625 32.063 240C32.063 143 132.549 64 256.034 64S480.004 143 480.004 240S379.518 416 256.034 416ZM224 240C224 231.156 216.844 224 208 224H80C71.157 224 64 231.156 64 240S71.157 256 80 256H208C216.844 256 224 248.844 224 240ZM304 288H208C199.157 288 192 295.156 192 304S199.157 320 208 320H304C312.844 320 320 312.844 320 304S312.844 288 304 288ZM144 288H112C103.157 288 96 295.156 96 304S103.157 320 112 320H144C152.844 320 160 312.844 160 304S152.844 288 144 288ZM400 288H368C359.157 288 352 295.156 352 304S359.157 320 368 320H400C408.844 320 416 312.844 416 304S408.844 288 400 288ZM432 224H272C263.157 224 256 231.156 256 240S263.157 256 272 256H432C440.844 256 448 248.844 448 240S440.844 224 432 224Z" })
  }
));
CommentCaptionsLight.displayName = "CommentCaptionsLight";
var CommentCaptions_default = CommentCaptionsLight;
