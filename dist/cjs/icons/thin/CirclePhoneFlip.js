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
var CirclePhoneFlip_exports = {};
__export(CirclePhoneFlip_exports, {
  default: () => CirclePhoneFlip_default
});
module.exports = __toCommonJS(CirclePhoneFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CirclePhoneFlipThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM373.688 132.234L323.328 120.609C312.234 118.125 300.859 123.781 296.234 134.313L272.969 188.625C268.875 198.234 271.672 209.563 279.75 216.156L301.656 234.109C286.266 262.609 262.578 286.297 234.047 301.688L216.172 279.844C209.531 271.609 198.141 268.812 188.531 273.016L134.297 296.266L134.281 296.281C123.781 300.813 118.016 312.172 120.594 323.297L132.219 373.688C134.703 384.469 144.172 392 155.25 392C285.797 392 392 285.797 392 155.25C392 144.156 384.469 134.688 373.688 132.234ZM155.25 376C151.672 376 148.609 373.578 147.812 370.094L136.188 319.703C135.359 316.109 137.219 312.453 140.609 310.984L194.859 287.719C198.016 286.359 201.609 287.297 203.75 289.922L229.781 321.75L235.484 318.953C271.563 301.234 301.203 271.609 318.922 235.547L321.719 229.844L289.875 203.766C287.266 201.641 286.375 197.984 287.688 194.906L310.922 140.688C312.438 137.234 316.125 135.344 319.719 136.203L370.109 147.828C373.578 148.625 376 151.672 376 155.25C376 276.969 276.969 376 155.25 376Z" })
  }
));
CirclePhoneFlipThin.displayName = "CirclePhoneFlipThin";
var CirclePhoneFlip_default = CirclePhoneFlipThin;
