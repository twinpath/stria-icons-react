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
var StarOfDavid_exports = {};
__export(StarOfDavid_exports, {
  default: () => StarOfDavid_default
});
module.exports = __toCommonJS(StarOfDavid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarOfDavidThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.981 256.004L489.454 177.25C497.86 163.875 498.313 147.594 490.657 133.75C483.125 120.125 469.407 112 453.954 112H349.508L291.532 19.719C283.782 7.375 270.516 0 256.047 0S228.313 7.375 220.563 19.719C220.547 19.719 220.547 19.719 220.547 19.719L162.575 112H58.141C42.688 112 28.969 120.125 21.438 133.75C13.782 147.594 14.235 163.875 22.641 177.25L72.114 255.996L22.641 334.75C14.235 348.125 13.782 364.406 21.438 378.25C28.969 391.875 42.688 400 58.141 400H162.586L220.563 492.281C228.313 504.625 241.579 512 256.047 512S283.782 504.625 291.532 492.281C291.547 492.281 291.547 492.281 291.547 492.281L349.52 400H453.954C469.407 400 483.125 391.875 490.657 378.25C498.313 364.406 497.86 348.125 489.454 334.75L439.981 256.004ZM453.954 128C463.485 128 471.969 133.031 476.657 141.5C481.438 150.156 481.157 160.344 475.891 168.75L430.528 240.959L359.561 128H453.954ZM421.08 256L340.668 384H171.426L91.014 256L171.426 128H340.668L421.08 256ZM234.11 28.219C243.704 12.906 268.391 12.906 277.985 28.219L330.618 112H181.477L234.11 28.219ZM36.204 168.75C30.938 160.344 30.657 150.156 35.438 141.5C40.125 133.031 48.61 128 58.141 128H152.524L81.563 240.955L36.204 168.75ZM58.141 384C48.61 384 40.125 378.969 35.438 370.5C30.657 361.844 30.938 351.656 36.204 343.25L81.567 271.041L152.534 384H58.141ZM277.985 483.781C268.391 499.094 243.704 499.094 234.11 483.781L181.477 400H330.618L277.985 483.781ZM476.657 370.5C471.969 378.969 463.485 384 453.954 384H359.571L430.532 271.045L475.891 343.25C481.157 351.656 481.438 361.844 476.657 370.5Z" })
  }
));
StarOfDavidThin.displayName = "StarOfDavidThin";
var StarOfDavid_default = StarOfDavidThin;
