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
var SunCloud_exports = {};
__export(SunCloud_exports, {
  default: () => SunCloud_default
});
module.exports = __toCommonJS(SunCloud_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SunCloudSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 223.969C564 223.969 552.875 227.469 543.25 233.219C539.75 192.219 505.875 159.968 464 159.968C425.25 159.968 392.875 187.594 385.625 224.219C385.125 224.219 384.625 223.969 384 223.969C348.75 223.969 320 252.719 320 287.969S348.75 351.969 384 351.969H576C611.25 351.969 640 323.219 640 287.969S611.25 223.969 576 223.969ZM325.299 363.37C305.301 376.303 281.588 384 256 384C185.306 384 128 326.692 128 256C128 185.306 185.306 128 256 128C302.037 128 342.064 152.519 364.617 188.996C379.898 159.244 407.885 137.705 440.867 130.685L390.429 121.57L370.728 12.562C368.754 1.63 356.135 -3.595 347.008 2.737L256 65.888L164.99 2.735C155.865 -3.597 143.246 1.628 141.269 12.56L121.57 121.57L12.562 141.267C1.633 143.244 -3.596 155.863 2.736 164.986L65.89 256L2.738 347.01C-3.594 356.135 1.633 368.752 12.562 370.727L121.57 390.426L141.269 499.436C143.244 510.366 155.863 515.595 164.99 509.261L256 446.108L347.01 509.261C356.137 515.595 368.756 510.368 370.73 499.438L392.203 383.969H384C361.793 383.969 341.582 376.079 325.299 363.37ZM336.881 204.678C319.847 177.892 290.092 160 256 160C202.98 160 160 202.98 160 256S202.98 352 256 352C273.209 352 289.131 347.104 303.097 339.174C293.662 324.319 288 306.832 288 287.969C288 252.205 307.804 221.193 336.881 204.678Z" })
  }
));
SunCloudSolid.displayName = "SunCloudSolid";
var SunCloud_default = SunCloudSolid;
