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
var Paw_exports = {};
__export(Paw_exports, {
  default: () => Paw_default
});
module.exports = __toCommonJS(Paw_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PawSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 224.002C176.631 224.002 64.015 346.751 64.015 424.25C64.015 459.125 90.763 480 135.759 480C184.631 480 216.878 454.875 256 454.875C295.497 454.875 327.869 480 376.241 480C421.237 480 447.985 459.125 447.985 424.25C447.985 346.751 335.369 224.002 256 224.002ZM108.762 211.377C98.387 176.752 66.265 154.253 37.142 161.253C8.019 168.252 -7.104 202.003 3.27 236.627C13.644 271.252 45.766 293.751 74.889 286.752S119.136 246.002 108.762 211.377ZM193.505 190.627C224.378 182.502 239.876 140.628 228.002 97.253S181.506 25.254 150.508 33.379C119.636 41.503 104.137 83.378 116.011 126.753C127.885 170.127 162.507 198.752 193.505 190.627ZM474.858 161.253C445.735 154.253 413.613 176.752 403.238 211.377C392.864 246.002 407.988 279.752 437.111 286.752C466.233 293.751 498.231 271.252 508.73 236.627C519.104 202.003 503.981 168.252 474.858 161.253ZM318.495 190.627C349.493 198.752 384.115 170.127 395.989 126.753C407.863 83.378 392.364 41.503 361.492 33.379C330.494 25.254 295.872 53.878 283.998 97.253C272.124 140.628 287.623 182.502 318.495 190.627Z" })
  }
));
PawSolid.displayName = "PawSolid";
var Paw_default = PawSolid;
