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
var Hammer_exports = {};
__export(Hammer_exports, {
  default: () => Hammer_default
});
module.exports = __toCommonJS(Hammer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HammerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568.982 196.283L546.357 173.658C541.824 169.125 535.799 166.629 529.389 166.629S516.953 169.125 512.418 173.658L506.764 179.314L486.643 159.193C491.238 135.729 483.99 111.291 467.172 94.459L421.92 49.205C390.182 17.475 347.986 0 303.111 0C258.234 0 216.049 17.475 184.324 49.207L176.479 57.055L272.482 105.057V118.863C272.482 137.811 280.17 156.365 293.574 169.77L342.732 218.912C356.172 232.363 374.123 239.773 393.273 239.773C398.031 239.773 402.785 239.309 407.457 238.387L427.574 258.504L421.92 264.158C412.563 273.516 412.563 288.74 421.918 298.098L444.543 320.723C449.078 325.256 455.105 327.754 461.514 327.754S473.949 325.256 478.482 320.723L569.014 230.225C578.346 220.844 578.324 205.627 568.982 196.283ZM270.947 192.396C267.102 188.551 263.75 184.283 260.578 179.904L21.094 389.094C-7.031 417.219 -7.031 462.781 21.094 490.906C35.156 504.969 53.562 512 72 512S108.844 504.969 122.906 490.906L331.994 251.539C327.854 248.479 323.811 245.25 320.107 241.543L270.947 192.396Z" })
  }
));
HammerSolid.displayName = "HammerSolid";
var Hammer_default = HammerSolid;
