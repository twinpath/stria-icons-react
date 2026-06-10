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
var BoxHeart_exports = {};
__export(BoxHeart_exports, {
  default: () => BoxHeart_default
});
module.exports = __toCommonJS(BoxHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxHeartThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M441.244 146.486L392.844 49.689C387.424 38.848 376.344 32 364.223 32H83.777C71.656 32 60.576 38.848 55.156 49.689L6.756 146.486C2.312 155.373 0 165.172 0 175.107V448C0 465.672 14.326 480 32 480H416C433.674 480 448 465.672 448 448V175.107C448 165.172 445.688 155.373 441.244 146.486ZM232 48H364.223C370.322 48 375.805 51.389 378.533 56.844L426.934 153.641C427.943 155.66 428.52 157.857 429.234 160H232V48ZM21.066 153.643L69.467 56.844C72.195 51.389 77.678 48 83.777 48H216V160H18.768C19.48 157.857 20.057 155.662 21.066 153.643ZM432 448C432 456.822 424.822 464 416 464H32C23.178 464 16 456.822 16 448V176H432V448ZM211.375 402.891C215.344 406.734 220.406 408.656 225.469 408.656S235.625 406.719 239.563 402.859L312.219 331.453C323.938 319.813 330.188 303.766 329.375 287.422C328.563 270.891 320.938 255.938 307.906 245.328H307.875C284.875 226.578 249.375 228.875 227.188 250.625L225.469 252.344L223.688 250.562C201.469 228.812 166.062 226.5 143.031 245.328C130.125 255.844 122.25 271.297 121.5 287.703C120.719 304.016 127.031 319.969 138.75 331.484L211.375 402.891ZM153.156 257.719C160.719 251.562 170.125 248.531 179.688 248.531C191.438 248.531 203.406 253.078 212.438 261.937L225.469 274.969L238.438 262C254.906 245.875 280.938 244.062 297.813 257.734C307.281 265.453 312.813 276.281 313.406 288.219C313.999 300.031 309.469 311.656 301 320.078L228.375 391.422C226.719 393.047 224.156 392.984 222.563 391.453L149.938 320.078C141.469 311.75 136.938 300.219 137.469 288.438C138.031 276.406 143.594 265.5 153.156 257.719Z" })
  }
));
BoxHeartThin.displayName = "BoxHeartThin";
var BoxHeart_default = BoxHeartThin;
