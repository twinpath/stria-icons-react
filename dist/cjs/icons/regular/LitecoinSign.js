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
var LitecoinSign_exports = {};
__export(LitecoinSign_exports, {
  default: () => LitecoinSign_default
});
module.exports = __toCommonJS(LitecoinSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LitecoinSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 456C384 469.254 373.254 480 360 480H88.006C74.75 480 64.006 469.254 64.006 456V270.17L30.193 279.188C28.115 279.734 26.037 280 23.99 280C13.381 280 3.678 272.922 0.818 262.188C-2.604 249.375 5.021 236.219 17.818 232.812L64.006 220.496V56C64.006 42.75 74.756 32 88.006 32S112.006 42.75 112.006 56V207.695L257.818 168.812C270.662 165.406 283.787 173 287.193 185.812C290.615 198.625 282.99 211.781 270.193 215.188L112.006 257.371V432H360C373.254 432 384 442.744 384 456Z" })
  }
));
LitecoinSignRegular.displayName = "LitecoinSignRegular";
var LitecoinSign_default = LitecoinSignRegular;
