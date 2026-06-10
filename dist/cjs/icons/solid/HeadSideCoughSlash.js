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
var HeadSideCoughSlash_exports = {};
__export(HeadSideCoughSlash_exports, {
  default: () => HeadSideCoughSlash_default
});
module.exports = __toCommonJS(HeadSideCoughSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideCoughSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M607.999 311.995C621.249 311.995 631.999 301.245 631.999 287.996C631.999 274.746 621.249 263.996 607.999 263.996C594.749 263.996 583.999 274.746 583.999 287.996C583.999 301.245 594.749 311.995 607.999 311.995ZM607.999 407.994C621.249 407.994 631.999 397.244 631.999 383.994C631.999 370.744 621.249 359.995 607.999 359.995C594.749 359.995 583.999 370.744 583.999 383.994C583.999 397.244 594.749 407.994 607.999 407.994ZM630.811 469.102L440.57 319.995H447.97C471.095 319.995 486.595 296.12 477.22 274.996C456.22 227.872 428.72 123.248 404.095 88.249C365.596 33.624 302.471 0 234.096 0H192C149.893 0 111.505 14.258 79.88 37.294L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102ZM320 415.994C302.326 415.994 288 401.668 288 383.994C288 366.321 302.326 351.995 320 351.995H325.758L18.165 110.91C6.632 135.574 0.001 162.984 0.001 191.997C0.001 248.746 24.751 299.62 64.001 334.87V511.992H287.971V479.993H351.971C385.217 479.993 412.181 454.616 415.345 422.21L407.414 415.994H320ZM543.999 359.995C557.249 359.995 567.999 349.245 567.999 335.995C567.999 322.745 557.249 311.995 543.999 311.995C530.749 311.995 519.999 322.745 519.999 335.995C519.999 349.245 530.749 359.995 543.999 359.995Z" })
  }
));
HeadSideCoughSlashSolid.displayName = "HeadSideCoughSlashSolid";
var HeadSideCoughSlash_default = HeadSideCoughSlashSolid;
