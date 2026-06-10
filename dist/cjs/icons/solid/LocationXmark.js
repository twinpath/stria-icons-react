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
var LocationXmark_exports = {};
__export(LocationXmark_exports, {
  default: () => LocationXmark_default
});
module.exports = __toCommonJS(LocationXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationXmarkSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C86.375 0 0 86.369 0 191.988C0 268.734 25.625 291.232 172.75 502.344C182.375 515.219 201.625 515.219 211.25 502.344C358.375 291.232 384 268.734 384 191.988C384 86.369 297.625 0 192 0ZM272.969 239.029C282.344 248.404 282.344 263.592 272.969 272.967C263.588 282.348 248.404 282.34 239.031 272.967L192 225.936L144.969 272.967C135.588 282.348 120.404 282.34 111.031 272.967C101.656 263.592 101.656 248.404 111.031 239.029L158.062 191.998L111.031 144.969C101.656 135.594 101.656 120.406 111.031 111.031S135.594 101.656 144.969 111.031L192 158.062L239.031 111.031C248.406 101.656 263.594 101.656 272.969 111.031S282.344 135.594 272.969 144.969L225.938 191.998L272.969 239.029Z" })
  }
));
LocationXmarkSolid.displayName = "LocationXmarkSolid";
var LocationXmark_default = LocationXmarkSolid;
