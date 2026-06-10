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
var TurkishLiraSign_exports = {};
__export(TurkishLiraSign_exports, {
  default: () => TurkishLiraSign_default
});
module.exports = __toCommonJS(TurkishLiraSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TurkishLiraSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383.974 281.094C378.912 392.625 287.49 480 175.818 480H88.006C74.756 480 64.006 469.25 64.006 456V270.17L30.193 279.188C28.115 279.734 26.037 280 23.99 280C13.381 280 3.678 272.922 0.818 262.188C-2.604 249.375 5.021 236.219 17.818 232.812L64.006 220.496V174.17L30.193 183.188C28.115 183.734 26.037 184 23.99 184C13.381 184 3.678 176.922 0.818 166.188C-2.604 153.375 5.021 140.219 17.818 136.812L64.006 124.496V56C64.006 42.75 74.756 32 88.006 32S112.006 42.75 112.006 56V111.695L257.818 72.812C270.662 69.375 283.787 77.016 287.193 89.812C290.615 102.625 282.99 115.781 270.193 119.188L112.006 161.371V207.695L257.818 168.812C270.662 165.406 283.787 173 287.193 185.812C290.615 198.625 282.99 211.781 270.193 215.188L112.006 257.371V432H175.818C261.756 432 332.13 364.75 336.037 278.906C336.63 265.688 347.646 254.875 361.099 256.031C374.334 256.625 384.584 267.844 383.974 281.094Z" })
  }
));
TurkishLiraSignRegular.displayName = "TurkishLiraSignRegular";
var TurkishLiraSign_default = TurkishLiraSignRegular;
