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
var DownRight_exports = {};
__export(DownRight_exports, {
  default: () => DownRight_default
});
module.exports = __toCommonJS(DownRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M25.373 202.508L151.734 328.875L89.816 390.793C80.234 400.371 77.365 414.793 82.549 427.312C87.744 439.844 99.951 448 113.513 448H350.488C359.746 448 368.123 444.25 374.187 438.188C380.25 432.121 384 423.746 384 414.492V177.516C384 163.949 375.842 151.742 363.31 146.551C359.166 144.836 354.814 144 350.498 144C341.775 144 333.201 147.406 326.791 153.816L264.873 215.734L138.51 89.375C132.26 83.125 124.07 80 115.881 80S99.502 83.125 93.254 89.375L25.373 157.258C12.877 169.75 12.875 190.016 25.373 202.508ZM115.883 112.004L242.246 238.363L264.873 260.988L287.5 238.363L349.418 176.445L351.062 176.113C351.64 176.355 352 176.891 352 177.516V414.492L350.488 416H113.513C112.888 416 112.349 415.641 112.115 415.07C111.883 414.512 112.013 413.852 112.443 413.422L174.361 351.504L196.988 328.875L174.361 306.25L48.002 179.887L115.883 112.004Z" })
  }
));
DownRightLight.displayName = "DownRightLight";
var DownRight_default = DownRightLight;
