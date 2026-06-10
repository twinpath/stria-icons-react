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
var PenLine_exports = {};
__export(PenLine_exports, {
  default: () => PenLine_default
});
module.exports = __toCommonJS(PenLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.938 74.158L437.848 14.062C428.473 4.688 416.176 0 403.881 0C391.584 0 379.287 4.688 369.912 14.062L31.037 352.955C28.805 355.189 27.282 358.033 26.664 361.131L0.321 492.852C-1.707 502.967 6.161 512 15.95 512C16.996 512 18.067 511.896 19.149 511.68L150.858 485.334C153.955 484.715 156.797 483.193 159.032 480.961L497.938 142.084C516.688 123.316 516.688 92.91 497.938 74.158ZM147.721 469.645L16.008 495.99L42.35 364.27L309.647 96.957L415.036 202.354L147.721 469.645ZM486.627 130.768L426.348 191.041L320.963 85.645L381.225 25.375C387.272 19.33 395.319 16 403.881 16C412.442 16 420.489 19.33 426.536 25.375L486.627 85.471C499.106 97.957 499.106 118.277 486.627 130.768ZM568 496H232C227.582 496 224 499.58 224 504C224 508.418 227.582 512 232 512H568C572.418 512 576 508.418 576 504C576 499.58 572.418 496 568 496Z" })
  }
));
PenLineThin.displayName = "PenLineThin";
var PenLine_default = PenLineThin;
