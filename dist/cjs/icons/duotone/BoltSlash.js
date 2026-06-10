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
var BoltSlash_exports = {};
__export(BoltSlash_exports, {
  default: () => BoltSlash_default
});
module.exports = __toCommonJS(BoltSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoltSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M194.599 467.393C188.693 481.125 193.099 497.109 205.193 505.891C210.818 509.984 217.41 512 224.003 512C231.535 512 239.066 509.344 245.066 504.078L374.869 390.5L264.593 304.068L194.599 467.393ZM154.826 218.035L138.945 231.932C128.915 240.713 125.353 254.789 130.04 267.258C134.728 279.742 146.663 288.008 160.007 288.008H244.103L154.826 218.035ZM509.958 244.76C505.273 232.275 493.335 224.01 479.992 224.01H368.523L445.4 44.625C451.306 30.891 446.9 14.908 434.806 6.127C422.745 -2.654 406.183 -1.951 394.933 7.939L228.372 153.682L448.415 326.145L501.054 280.086C511.083 271.305 514.646 257.227 509.958 244.76Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M634.872 502.805C626.747 513.211 611.685 515.086 601.185 506.883L9.189 42.889C-1.249 34.717 -3.061 19.625 5.126 9.188C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.81 469.102C641.247 477.273 643.06 492.367 634.872 502.805Z" })
    ]
  }
));
BoltSlashDuotone.displayName = "BoltSlashDuotone";
var BoltSlash_default = BoltSlashDuotone;
