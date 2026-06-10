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
var BookBible_exports = {};
__export(BookBible_exports, {
  default: () => BookBible_default
});
module.exports = __toCommonJS(BookBible_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookBibleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 360V24C448 10.744 437.254 0 424 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H424C437.254 512 448 501.254 448 488V472C448 461.582 441.275 452.936 432 449.615V382.385C441.275 379.064 448 370.416 448 360ZM144 144C144 135.125 151.125 128 160 128H208V80C208 71.125 215.125 64 224 64H256C264.875 64 272 71.125 272 80V128H320C328.875 128 336 135.125 336 144V176C336 184.875 328.875 192 320 192H272V304C272 312.875 264.875 320 256 320H224C215.125 320 208 312.875 208 304V192H160C151.125 192 144 184.875 144 176V144ZM384 448H96C78.326 448 64 433.672 64 416C64 398.326 78.326 384 96 384H384V448Z" })
  }
));
BookBibleSolid.displayName = "BookBibleSolid";
var BookBible_default = BookBibleSolid;
