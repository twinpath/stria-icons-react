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
var CircleArrowDown_exports = {};
__export(CircleArrowDown_exports, {
  default: () => CircleArrowDown_default
});
module.exports = __toCommonJS(CircleArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleArrowDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.422 16 256S123.42 496 256 496S496 388.578 496 256S388.58 16 256 16ZM382.625 302.625L278.646 406.602C270.664 414.602 260.9 416 256 416C251.119 416 241.346 414.609 233.354 406.602L129.375 302.625C116.875 290.125 116.875 269.875 129.375 257.375S162.125 244.875 174.625 257.375L224 306.75V128C224 110.312 238.328 96 256 96S288 110.312 288 128V306.75L337.375 257.375C349.875 244.875 370.125 244.875 382.625 257.375S395.125 290.125 382.625 302.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M382.625 302.625L278.646 406.602C270.664 414.602 260.9 416 256 416C251.119 416 241.346 414.609 233.354 406.602L129.375 302.625C116.875 290.125 116.875 269.875 129.375 257.375S162.125 244.875 174.625 257.375L224 306.75V128C224 110.312 238.328 96 256 96S288 110.312 288 128V306.75L337.375 257.375C349.875 244.875 370.125 244.875 382.625 257.375S395.125 290.125 382.625 302.625Z" })
    ]
  }
));
CircleArrowDownDuotone.displayName = "CircleArrowDownDuotone";
var CircleArrowDown_default = CircleArrowDownDuotone;
