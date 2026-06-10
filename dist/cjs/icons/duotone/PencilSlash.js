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
var PencilSlash_exports = {};
__export(PencilSlash_exports, {
  default: () => PencilSlash_default
});
module.exports = __toCommonJS(PencilSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PencilSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M265.335 182.65L408.861 295.143L482.75 221.258L354.75 93.232L265.335 182.65ZM561.939 74.158L501.847 14.062C483.097 -4.688 452.662 -4.688 433.914 14.062L377.384 70.611L505.378 198.633L561.939 142.084C580.687 123.316 580.687 92.91 561.939 74.158ZM95.037 352.955C92.802 355.189 91.281 358.033 90.66 361.131L64.32 492.854C62.296 502.967 70.156 512 79.945 512C80.994 512 82.062 511.896 83.144 511.68L214.855 485.336C217.953 484.717 220.796 483.195 223.031 480.963L340.464 363.535L196.941 251.047L95.037 352.955ZM195.945 440.168L120.8 455.197L135.828 380.047L160 355.875V416H220.115L195.945 440.168Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M634.874 502.805C626.749 513.211 611.687 515.086 601.187 506.883L9.189 42.891C-1.249 34.719 -3.061 19.625 5.126 9.187C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.812 469.102C641.249 477.273 643.062 492.367 634.874 502.805Z" })
    ]
  }
));
PencilSlashDuotone.displayName = "PencilSlashDuotone";
var PencilSlash_default = PencilSlashDuotone;
