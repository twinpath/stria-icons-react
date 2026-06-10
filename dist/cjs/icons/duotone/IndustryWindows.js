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
var IndustryWindows_exports = {};
__export(IndustryWindows_exports, {
  default: () => IndustryWindows_default
});
module.exports = __toCommonJS(IndustryWindows_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IndustryWindowsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M404 384H364C357.375 384 352 378.625 352 372V332C352 325.375 357.375 320 364 320H404C410.625 320 416 325.375 416 332V372C416 378.625 410.625 384 404 384ZM276 384H236C229.375 384 224 378.625 224 372V332C224 325.375 229.375 320 236 320H276C282.625 320 288 325.375 288 332V372C288 378.625 282.625 384 276 384ZM148 384H108C101.375 384 96 378.625 96 372V332C96 325.375 101.375 320 108 320H148C154.625 320 160 325.375 160 332V372C160 378.625 154.625 384 148 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M475.125 131.763L336 224V152.013C336 133.138 315.125 121.638 299.125 131.763L160 224V64C160 46.327 145.673 32 128 32H32C14.327 32 0 46.327 0 64V448C0 465.673 14.327 480 32 480H480C497.673 480 512 465.673 512 448V152.013C512 133.138 491.125 121.638 475.125 131.763ZM404 384H364C357.375 384 352 378.625 352 372V332C352 325.375 357.375 320 364 320H404C410.625 320 416 325.375 416 332V372C416 378.625 410.625 384 404 384ZM276 384H236C229.375 384 224 378.625 224 372V332C224 325.375 229.375 320 236 320H276C282.625 320 288 325.375 288 332V372C288 378.625 282.625 384 276 384ZM148 384H108C101.375 384 96 378.625 96 372V332C96 325.375 101.375 320 108 320H148C154.625 320 160 325.375 160 332V372C160 378.625 154.625 384 148 384Z" })
    ]
  }
));
IndustryWindowsDuotone.displayName = "IndustryWindowsDuotone";
var IndustryWindows_default = IndustryWindowsDuotone;
