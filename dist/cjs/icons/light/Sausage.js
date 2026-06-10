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
var Sausage_exports = {};
__export(Sausage_exports, {
  default: () => Sausage_default
});
module.exports = __toCommonJS(Sausage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SausageLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 64C363.066 64 320 107.064 320 160C320 248.225 248.225 320 160 320C107.066 320 64 363.064 64 416C64 468.934 107.066 512 160 512C354.094 512 512 354.094 512 160C512 107.064 468.936 64 416 64ZM160 480C124.625 480 96 451.375 96 416S124.625 352 160 352C265.875 352 352 265.875 352 160C352 124.625 380.625 96 416 96S480 124.625 480 160C480 336.5 336.5 480 160 480ZM400 160C391.125 160 384 167.125 384 176C384 290.75 290.75 384 176 384C167.125 384 160 391.125 160 400S167.125 416 176 416C308.375 416 416 308.375 416 176C416 167.125 408.875 160 400 160ZM400 32H464C472.836 32 480 24.836 480 16C480 7.162 472.836 0 464 0H400C391.164 0 384 7.162 384 16C384 24.836 391.164 32 400 32ZM16 384C7.164 384 0 391.162 0 400V464C0 472.836 7.164 480 16 480S32 472.836 32 464V400C32 391.162 24.836 384 16 384Z" })
  }
));
SausageLight.displayName = "SausageLight";
var Sausage_default = SausageLight;
