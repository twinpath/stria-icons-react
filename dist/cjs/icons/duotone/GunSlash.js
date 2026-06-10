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
var GunSlash_exports = {};
__export(GunSlash_exports, {
  default: () => GunSlash_default
});
module.exports = __toCommonJS(GunSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GunSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 196.828C32 220.672 51.328 240 75.172 240C96.432 240 111.781 260.348 105.941 280.789L65.25 439.211C59.41 459.648 74.76 480 96.02 480H199.863C214.15 480 226.705 470.531 230.629 456.793L258.361 352H325.748L32 121.766V196.828ZM576 64H560V56C560 42.742 549.254 32 536 32S512 42.742 512 56V64H113.951L195.607 128H512V160H236.436L338.506 240H380.021L371.422 265.797L411.553 297.25L430.643 240H466.746C475.232 240 483.371 236.629 489.373 230.625L512 208H576C593.674 208 608 193.672 608 176V96C608 78.328 593.674 64 576 64Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M634.872 502.805C626.747 513.211 611.685 515.086 601.185 506.883L9.189 42.891C-1.249 34.719 -3.061 19.625 5.126 9.187C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.81 469.102C641.247 477.273 643.06 492.367 634.872 502.805Z" })
    ]
  }
));
GunSlashDuotone.displayName = "GunSlashDuotone";
var GunSlash_default = GunSlashDuotone;
