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
var DisplaySlash_exports = {};
__export(DisplaySlash_exports, {
  default: () => DisplaySlash_default
});
module.exports = __toCommonJS(DisplaySlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DisplaySlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M455.998 464H383.998L367.998 416H407.988L326.332 352H96V171.469L32 121.307V368C32 394.5 53.5 416 80 416H272L256 464H184C170.75 464 160 474.75 160 488S170.75 512 184 512H455.998C469.248 512 479.998 501.25 479.998 488S469.248 464 455.998 464ZM559.998 0H80C67.697 0 56.592 4.77 48.096 12.385L113.951 64H543.998V352H481.404L562.711 415.727C587.924 414.293 607.998 393.57 607.998 368V48C607.998 21.5 586.498 0 559.998 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M615.968 512C610.811 512 605.593 510.328 601.186 506.891L9.189 42.898C-1.249 34.726 -3.061 19.633 5.126 9.195C13.251 -1.211 28.282 -3.086 38.814 5.117L630.811 469.11C641.249 477.282 643.061 492.375 634.874 502.813C630.155 508.844 623.093 512 615.968 512Z" })
    ]
  }
));
DisplaySlashDuotone.displayName = "DisplaySlashDuotone";
var DisplaySlash_default = DisplaySlashDuotone;
