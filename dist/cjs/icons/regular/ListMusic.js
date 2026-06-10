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
const ListMusicRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 95.971H264C277.254 95.971 288 85.225 288 71.969S277.254 47.967 264 47.967H24C10.746 47.967 0 58.713 0 71.969S10.746 95.971 24 95.971ZM498.875 6.213C490.625 0.088 480.125 -1.537 470.375 1.463L358.375 36.842C345.125 41.092 336 53.342 336 67.344V366.488C317.875 357.363 295.875 351.988 272 351.988C210.125 351.988 160 387.865 160 431.994C160 476.121 210.125 512 272 512S384 476.121 384 431.994V195.352L489.625 161.975C503 157.725 512 145.473 512 131.473V31.965C512 21.715 507.125 12.215 498.875 6.213ZM272 463.996C232.25 463.996 208 443.244 208 431.994C208 420.742 232.25 399.992 272 399.992S336 420.742 336 431.994C336 443.244 311.75 463.996 272 463.996ZM464 119.723L384 144.973V79.094L464 53.842V119.723ZM24 223.979H264C277.254 223.979 288 213.232 288 199.977S277.254 175.977 264 175.977H24C10.746 175.977 0 186.721 0 199.977S10.746 223.979 24 223.979ZM136 303.984H24C10.746 303.984 0 314.73 0 327.986S10.746 351.988 24 351.988H136C149.254 351.988 160 341.242 160 327.986S149.254 303.984 136 303.984Z" })
  }
));
ListMusicRegular.displayName = "ListMusicRegular";
var ListMusic_default = ListMusicRegular;
