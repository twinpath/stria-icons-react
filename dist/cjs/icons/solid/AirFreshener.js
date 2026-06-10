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
var AirFreshener_exports = {};
__export(AirFreshener_exports, {
  default: () => AirFreshener_default
});
module.exports = __toCommonJS(AirFreshener_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AirFreshenerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304.137 384.009H224.044V352.012H356.016C379.959 352.012 392.803 323.893 377.11 305.833L306.02 224.021H342.348C364.295 224.021 376.069 198.246 361.683 181.691L211.563 8.927C201.218 -2.977 182.716 -2.976 172.374 8.931L22.313 181.696C7.933 198.251 19.707 224.021 41.652 224.021H77.952L6.886 305.838C-8.801 323.899 4.044 352.012 27.983 352.012H159.969V384.009H79.876C53.335 384.009 31.82 405.498 31.82 432.006V464.004C31.82 490.511 53.335 512 79.876 512H304.137C330.678 512 352.193 490.511 352.193 464.004V432.006C352.193 405.498 330.678 384.009 304.137 384.009ZM192.007 56.033C205.276 56.033 216.035 66.779 216.035 80.032S205.276 104.03 192.007 104.03C178.737 104.03 167.979 93.284 167.979 80.032S178.737 56.033 192.007 56.033ZM304.137 464.004H79.876V432.006H304.137V464.004Z" })
  }
));
AirFreshenerSolid.displayName = "AirFreshenerSolid";
var AirFreshener_default = AirFreshenerSolid;
