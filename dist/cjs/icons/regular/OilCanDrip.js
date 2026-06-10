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
var OilCanDrip_exports = {};
__export(OilCanDrip_exports, {
  default: () => OilCanDrip_default
});
module.exports = __toCommonJS(OilCanDrip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OilCanDripRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M637.875 168.031C634.969 162.975 629.619 160.016 623.943 160.016C622.812 160.016 621.67 160.133 620.531 160.375L450.828 197.984L400.859 167.547C392.781 162.609 383.25 160 373.328 160H288V112H328C341.256 112 352 101.254 352 88C352 74.744 341.256 64 328 64H184C170.746 64 160 74.744 160 88C160 101.254 170.746 112 184 112H224V160H48C21.49 160 0 181.49 0 208V272.324C0 291.387 11.285 308.641 28.75 316.281L96 345.699V374C96 397.156 117.531 416 144 416H400.766C414.656 416 427.844 410.797 437.359 401.25L635.75 186.859C640.5 181.734 641.359 174.109 637.875 168.031ZM96 293.301L48 272.297V208H96V293.301ZM403.227 367.463C402.908 367.654 402.094 368 400.766 368H144V208H373.328C374.566 208 375.447 208.27 375.889 208.539L425.857 238.977L442.355 249.027L461.215 244.848L531.006 229.379L403.227 367.463ZM598.842 299.396C597.301 296.77 594.65 295.455 592 295.455C589.352 295.455 586.701 296.77 585.16 299.396C571.902 321.988 544 372.203 544 394.719C544 424.094 565.396 448 592 448C618.605 448 640 424.094 640 394.719C640 372.203 612.1 321.988 598.842 299.396Z" })
  }
));
OilCanDripRegular.displayName = "OilCanDripRegular";
var OilCanDrip_default = OilCanDripRegular;
