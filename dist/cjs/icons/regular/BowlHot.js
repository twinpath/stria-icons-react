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
var BowlHot_exports = {};
__export(BowlHot_exports, {
  default: () => BowlHot_default
});
module.exports = __toCommonJS(BowlHot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BowlHotRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 192.002H32C14.375 192.002 0 206.377 0 224.002C0 318.752 51.5 401.127 128 445.502V480.002C128 497.627 142.375 512.002 160 512.002H352C369.625 512.002 384 497.627 384 480.002V445.502C460.5 401.127 512 318.752 512 224.002C512 206.377 497.625 192.002 480 192.002ZM336 417.752V464.002H176V417.752C108.5 378.627 55.75 330.752 48.625 240.002H463.375C456.375 328.877 405.375 377.627 336 417.752ZM171.906 100.734C184.312 107.969 192 121.375 192 136C192 149.25 202.75 159.859 216 159.859S240 148.969 240 135.719C240 104.375 223.188 75.078 196.094 59.266C183.688 52.031 176 38.625 176 24.281V24C176 10.75 165.25 0.141 152 0.141S128 11.031 128 24.281C128 55.625 144.812 84.922 171.906 100.734ZM283.906 100.734C296.312 107.969 304 121.375 304 136C304 149.25 314.75 159.859 328 159.859S352 148.969 352 135.719C352 104.375 335.188 75.078 308.094 59.266C295.688 52.031 288 38.625 288 24.281V24C288 10.75 277.25 0.141 264 0.141S240 11.031 240 24.281C240 55.625 256.812 84.922 283.906 100.734Z" })
  }
));
BowlHotRegular.displayName = "BowlHotRegular";
var BowlHot_default = BowlHotRegular;
