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
var CommentMinus_exports = {};
__export(CommentMinus_exports, {
  default: () => CommentMinus_default
});
module.exports = __toCommonJS(CommentMinus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentMinusLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.029 32C114.678 32 0.068 125.125 0.068 240C0.068 287.625 19.939 331.25 52.935 366.25C38.06 405.75 7.064 439.125 6.564 439.5C-0.057 446.5 -1.807 456.75 1.943 465.5C5.814 474.25 14.314 480 23.935 480C85.428 480 133.924 454.25 163.045 433.75C192.041 442.75 223.287 448 256.029 448C397.389 448 511.998 354.875 511.998 240S397.389 32 256.029 32ZM256.029 416C227.787 416 199.787 411.75 172.795 403.25C163.279 400.182 152.873 401.789 144.725 407.588L144.67 407.625C121.678 423.875 86.178 442.875 42.06 447.25C54.06 432.125 71.807 406.75 82.803 377.625L82.935 377.285C87.217 366.014 84.725 353.287 76.506 344.463L76.307 344.25C47.31 313.75 32.06 277.625 32.06 240C32.06 143 132.549 64 256.029 64C379.514 64 480.002 143 480.002 240S379.514 416 256.029 416ZM335.998 224.002H175.998C167.158 224.002 159.998 231.162 159.998 240C159.998 248.834 167.154 255.998 175.998 255.998H335.998C344.838 255.998 351.998 248.838 351.998 240S344.838 224.002 335.998 224.002Z" })
  }
));
CommentMinusLight.displayName = "CommentMinusLight";
var CommentMinus_default = CommentMinusLight;
