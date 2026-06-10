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
var GiftCard_exports = {};
__export(GiftCard_exports, {
  default: () => GiftCard_default
});
module.exports = __toCommonJS(GiftCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GiftCardDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 464C0 490.51 21.49 512 48 512H528C554.51 512 576 490.51 576 464V416H0V464ZM528 128H462.842C446.898 147.943 421.125 160 392.701 160H337.938L392.969 215.031C402.344 224.406 402.344 239.594 392.969 248.969C388.281 253.656 382.156 256 376 256S363.719 253.656 359.031 248.969L288 177.938L216.969 248.969C212.281 253.656 206.156 256 200 256S187.719 253.656 183.031 248.969C173.656 239.594 173.656 224.406 183.031 215.031L238.062 160H183.299C154.875 160 129.102 147.943 113.158 128H48C21.49 128 0 149.49 0 176V320H576V176C576 149.49 554.51 128 528 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 320V416H576V320H0ZM183.299 160H238.062L183.031 215.031C173.656 224.406 173.656 239.594 183.031 248.969C187.719 253.656 193.844 256 200 256S212.281 253.656 216.969 248.969L288 177.938L359.031 248.969C363.719 253.656 369.844 256 376 256S388.281 253.656 392.969 248.969C402.344 239.594 402.344 224.406 392.969 215.031L337.938 160H392.701C422.377 160 449.467 147.121 465.166 125.557C474.871 112.227 480 96.59 480 80.334C480 41.391 449.516 0 393.021 0C342.199 0 306.68 43.35 288 73.512C269.32 43.35 233.801 0 182.979 0C126.484 0 96 41.391 96 80.334C96 96.59 101.129 112.227 110.834 125.557C126.533 147.121 153.623 160 183.299 160ZM393.021 48C421.699 48 432 67.334 432 80.334C432 94.85 419.859 112 392.701 112H321.125C335.465 84.5 362.93 48 393.021 48ZM182.979 48C213.07 48 240.535 84.5 254.875 112H183.299C156.141 112 144 94.85 144 80.334C144 67.334 154.301 48 182.979 48Z" })
    ]
  }
));
GiftCardDuotone.displayName = "GiftCardDuotone";
var GiftCard_default = GiftCardDuotone;
