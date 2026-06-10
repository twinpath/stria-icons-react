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
var ListMusic_exports = {};
__export(ListMusic_exports, {
  default: () => ListMusic_default
});
module.exports = __toCommonJS(ListMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListMusicLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 223.992H272C280.801 223.992 288 216.791 288 207.992C288 199.191 280.801 191.99 272 191.99H16C7.201 191.99 0 199.191 0 207.992C0 216.791 7.201 223.992 16 223.992ZM16 95.988H272C280.801 95.988 288 88.787 288 79.988C288 71.188 280.801 63.988 272 63.988H16C7.201 63.988 0 71.188 0 79.988C0 88.787 7.201 95.988 16 95.988ZM144 319.994H16C7.201 319.994 0 327.195 0 335.994C0 344.795 7.201 351.996 16 351.996H144C152.801 351.996 160 344.795 160 335.994C160 327.195 152.801 319.994 144 319.994ZM498.75 6.111C493.188 2.125 486.633 0.016 480 0C476.646 -0.008 473.273 0.52 470 1.611L373.375 33.486C360.75 37.736 352 49.986 352 63.988V376.121C331.625 361.246 303.375 351.996 272 351.996C210.125 351.996 160 387.871 160 431.998C160 476.123 210.125 512 272 512S384 476.123 384 431.998V191.99L490.125 156.615C503.125 152.24 512 139.99 512 126.238V31.986C512 21.736 507 12.111 498.75 6.111ZM272 479.998C224.875 479.998 192 454.748 192 431.998C192 409.246 224.875 383.996 272 383.996S352 409.246 352 431.998C352 454.748 319.125 479.998 272 479.998ZM480 126.238L384 158.24V63.988H383.5V63.863L480 31.986V126.238Z" })
  }
));
ListMusicLight.displayName = "ListMusicLight";
var ListMusic_default = ListMusicLight;
