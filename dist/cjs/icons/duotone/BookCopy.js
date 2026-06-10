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
var BookCopy_exports = {};
__export(BookCopy_exports, {
  default: () => BookCopy_default
});
module.exports = __toCommonJS(BookCopy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookCopyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 448H97.711C81.77 448 66.996 437.106 64.438 421.372C61.178 401.323 76.566 384 96 384H177.805C166.781 365.096 160 343.416 160 320V96H96C42.98 96 0 138.98 0 192V416C0 469.02 42.98 512 96 512H360C373.254 512 384 501.255 384 488V472C384 458.745 373.254 448 360 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 264V24C576 10.744 565.254 0 552 0H288C234.98 0 192 42.98 192 96V320C192 373.02 234.98 416 288 416H552C565.254 416 576 405.254 576 392V376C576 365.582 569.273 356.936 560 353.615V286.385C569.273 283.064 576 274.416 576 264ZM512 352H288C270.328 352 256 337.672 256 320C256 302.326 270.328 288 288 288H512V352Z" })
    ]
  }
));
BookCopyDuotone.displayName = "BookCopyDuotone";
var BookCopy_default = BookCopyDuotone;
