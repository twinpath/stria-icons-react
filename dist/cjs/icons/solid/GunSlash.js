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
const GunSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M31.999 196.828C31.999 220.672 51.327 240 75.171 240C96.431 240 111.78 260.348 105.941 280.789L65.249 439.211C59.409 459.648 74.759 480 96.019 480H199.863C214.15 480 226.704 470.531 230.628 456.793L258.361 352H325.747L31.999 121.766V196.828ZM630.81 469.102L411.552 297.25L430.642 240H466.745C475.232 240 483.37 236.629 489.372 230.625L511.999 208H575.999C593.673 208 607.999 193.672 607.999 176V96C607.999 78.328 593.673 64 575.999 64H559.999V56C559.999 42.742 549.253 32 535.999 32S511.999 42.742 511.999 56V64H113.95L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102ZM195.607 128H511.999V160H236.435L195.607 128ZM371.421 265.797L338.505 240H380.021L371.421 265.797Z" })
  }
));
GunSlashSolid.displayName = "GunSlashSolid";
var GunSlash_default = GunSlashSolid;
