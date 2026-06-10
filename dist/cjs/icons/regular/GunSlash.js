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
const GunSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.81 469.102L411.552 297.25L430.642 240H466.745C475.232 240 483.37 236.629 489.372 230.629L511.999 208H575.999C593.673 208 607.999 193.672 607.999 176V96C607.999 78.328 593.673 64 575.999 64H559.999V56C559.999 42.742 549.253 32 535.999 32S511.999 42.742 511.999 56V64H113.95L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L199.435 192L296.558 268.125L369.296 325.133L387.646 339.516L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102ZM371.421 265.797L338.505 240H380.021L371.421 265.797ZM277.263 192L175.193 112H559.999V160H492.116L460.118 192H277.263ZM203.548 432H116.657L152.095 293.977C157.304 275.746 155.933 256.836 148.527 240H182.849L121.607 192H79.999V159.391L31.999 121.766V196.828C31.999 220.672 51.327 240 75.171 240H75.173C96.433 240 111.782 260.348 105.941 280.793L65.251 439.207C59.409 459.652 74.759 480 96.019 480H215.863C230.15 480 242.704 470.531 246.63 456.793L274.361 352H325.747L242.068 286.414L203.548 432Z" })
  }
));
GunSlashRegular.displayName = "GunSlashRegular";
var GunSlash_default = GunSlashRegular;
