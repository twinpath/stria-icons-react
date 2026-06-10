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
var Tablets_exports = {};
__export(Tablets_exports, {
  default: () => Tablets_default
});
module.exports = __toCommonJS(Tablets_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TabletsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 192C71.635 192 0 263.635 0 352S71.635 512 160 512S320 440.365 320 352S248.365 192 160 192ZM160 496C83.338 496 21.055 435.617 16.809 360H303.191C298.945 435.617 236.662 496 160 496ZM16.809 344C21.055 268.383 83.338 208 160 208S298.945 268.383 303.191 344H16.809ZM593.137 46.861C530.654 -15.621 429.348 -15.621 366.863 46.861C304.379 109.346 304.379 210.652 366.863 273.137C429.348 335.619 530.654 335.619 593.137 273.137C655.621 210.652 655.621 109.346 593.137 46.861ZM378.178 261.822C323.969 207.615 322.625 120.877 373.092 64.404L575.596 266.908C519.123 317.375 432.385 316.031 378.178 261.822ZM586.908 255.594L384.406 53.092C440.877 2.623 527.615 3.967 581.824 58.176C636.031 112.385 637.375 199.123 586.908 255.594Z" })
  }
));
TabletsThin.displayName = "TabletsThin";
var Tablets_default = TabletsThin;
