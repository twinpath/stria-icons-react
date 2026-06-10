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
var LightbulbSlash_exports = {};
__export(LightbulbSlash_exports, {
  default: () => LightbulbSlash_default
});
module.exports = __toCommonJS(LightbulbSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LightbulbSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.812 469.109L434.65 315.363C440.96 306.09 447.187 297.758 452.437 291.773C479.562 260.836 495.999 220.367 495.999 175.992C495.999 78.797 417.212 0.004 319.999 0C246.933 0.227 188.884 42.996 161.515 101.285L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM396.814 285.707L200.187 131.594C216.976 85.938 259.203 48.188 319.994 48C390.579 48.004 447.999 105.422 447.999 175.992C447.999 206.965 436.757 236.848 416.355 260.117C410.21 267.125 403.515 275.984 396.814 285.707ZM305.915 336.004H272.693C264.656 319.031 254.857 302.699 245.003 288.266L148.078 212.297C154.4 242.273 168.074 269.547 187.562 291.773C204.093 310.617 229.906 350.004 239.781 383.223C239.812 383.473 239.843 383.738 239.874 384.004H367.158L305.915 336.004ZM240.062 454.328C240.062 460.625 241.937 466.781 245.406 472.031L262.499 497.719C267.749 505.594 279.687 512 289.156 512H350.874C360.312 512 372.249 505.594 377.499 497.719L394.593 472.031C397.531 467.594 399.937 459.656 399.937 454.328L399.999 415.984H239.999L240.062 454.328Z" })
  }
));
LightbulbSlashRegular.displayName = "LightbulbSlashRegular";
var LightbulbSlash_default = LightbulbSlashRegular;
