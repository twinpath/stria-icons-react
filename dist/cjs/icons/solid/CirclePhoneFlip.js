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
const CirclePhoneFlipSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 256C16 388.549 123.451 496 256 496S496 388.549 496 256S388.549 16 256 16S16 123.451 16 256ZM137.451 303.627L191.695 280.377C198.086 277.611 205.594 279.471 209.938 284.861L231.961 311.768C266.586 294.768 294.734 266.627 311.727 232.018L284.812 209.969C279.437 205.578 277.602 198.141 280.32 191.75L303.586 137.469C306.633 130.516 314.172 126.703 321.516 128.406L371.893 140.031C379.018 141.656 384.002 147.922 384.002 155.25C384.002 281.393 281.383 384.002 155.258 384.002C147.922 384.002 141.654 379.018 140.021 371.893L128.396 321.502C126.709 314.205 130.498 306.627 137.451 303.627Z" })
  }
));
CirclePhoneFlipSolid.displayName = "CirclePhoneFlipSolid";
var CirclePhoneFlip_default = CirclePhoneFlipSolid;
