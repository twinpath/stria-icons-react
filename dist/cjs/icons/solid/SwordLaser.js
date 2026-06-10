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
var SwordLaser_exports = {};
__export(SwordLaser_exports, {
  default: () => SwordLaser_default
});
module.exports = __toCommonJS(SwordLaser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SwordLaserSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.375 412.129C-3.125 424.627 -3.125 444.877 9.375 457.377L54.623 502.625C67.123 515.125 87.371 515.125 99.871 502.625L178.992 423.502L88.496 333.006L9.375 412.129ZM105.496 327.256L184.742 406.504L207.367 383.879L128.119 304.633L105.496 327.256ZM195.992 236.76C192.867 233.635 187.867 233.635 184.742 236.76L173.369 248.135C170.244 251.26 170.244 256.26 173.369 259.385L252.615 338.631C255.74 341.756 260.74 341.756 263.865 338.631L275.24 327.256C278.365 324.131 278.365 319.133 275.24 316.008L195.992 236.76ZM139.494 293.383L218.617 372.504L241.24 349.881L162.119 270.76L139.494 293.383ZM504.98 7.02C495.855 -2.105 481.107 -2.355 471.732 6.395L225.617 232.385L279.615 286.383L505.605 40.268C514.355 30.893 514.105 16.143 504.98 7.02Z" })
  }
));
SwordLaserSolid.displayName = "SwordLaserSolid";
var SwordLaser_default = SwordLaserSolid;
