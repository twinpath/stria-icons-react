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
var Stars_exports = {};
__export(Stars_exports, {
  default: () => Stars_default
});
module.exports = __toCommonJS(Stars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M259.758 86.005L309.381 106.632L330.006 156.26C331.131 158.635 333.506 160.01 336.006 160.01S340.88 158.635 342.005 156.26L362.63 106.632L412.253 86.005C414.628 84.88 416.003 82.505 416.003 80.005C416.003 77.505 414.628 75.13 412.253 74.005L362.63 53.378L342.005 3.75C340.88 1.375 338.506 0 336.006 0S331.131 1.375 330.006 3.75L309.381 53.378L259.758 74.005C257.383 75.13 256.008 77.505 256.008 80.005C256.008 82.505 257.383 84.88 259.758 86.005ZM364.255 267.267L259.508 252.016L212.635 156.76C204.26 139.759 179.886 139.634 171.386 156.76L124.512 252.016L19.766 267.267C0.891 270.017 -6.733 293.269 7.016 306.52L82.889 380.524L64.889 485.156C61.764 504.032 81.639 518.158 98.263 509.282L192.01 459.904L285.757 509.282C293.507 513.408 302.882 512.658 310.006 507.532C317.006 502.407 320.631 493.656 319.131 485.156L301.257 380.524L377.129 306.52C390.754 293.269 383.129 270.017 364.255 267.267ZM509 219.264L469.376 202.638L452.752 163.01C451.877 161.135 450.002 160.01 448.002 160.01C446.002 160.01 444.127 161.135 443.252 163.01L426.628 202.638L387.004 219.264C385.129 220.139 384.004 222.014 384.004 224.014C384.004 226.014 385.129 227.89 387.004 228.765L426.628 245.391L443.252 285.018C444.127 286.893 446.002 288.018 448.002 288.018C450.002 288.018 451.877 286.893 452.752 285.018L469.376 245.391L509 228.765C510.875 227.89 512 226.014 512 224.014C512 222.014 510.875 220.139 509 219.264Z" })
  }
));
StarsSolid.displayName = "StarsSolid";
var Stars_default = StarsSolid;
