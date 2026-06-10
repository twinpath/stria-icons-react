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
var ToiletPaperUnderSlash_exports = {};
__export(ToiletPaperUnderSlash_exports, {
  default: () => ToiletPaperUnderSlash_default
});
module.exports = __toCommonJS(ToiletPaperUnderSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToiletPaperUnderSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M636.98 497.734L388.425 300.162C388.425 300.16 388.425 300.162 388.425 300.16L365.318 281.791C365.32 281.793 365.316 281.793 365.318 281.793L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.027 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.495 511.438 630.245 512 631.995 512C634.339 512 636.683 510.969 638.261 508.984C641.011 505.516 640.433 500.484 636.98 497.734ZM175.999 16H419.374C380.199 45.311 352.689 111.928 352.107 189.535L368.286 202.395C368.175 198.936 367.999 195.51 367.999 192C367.999 94.953 411.062 16 463.999 16S559.999 94.953 559.999 192C559.999 246.311 546.499 294.928 525.343 327.238L537.12 336.598C546.042 323.277 553.878 307.865 559.999 290.381V354.785L575.999 367.504V192C575.999 86.125 525.749 0 463.999 0H175.999C160.609 0 145.937 5.359 132.575 15.031L145.468 25.279C155.074 19.35 165.318 16 175.999 16ZM559.999 436.543L575.999 449.262V449.26L559.999 436.541V436.543ZM463.999 120C441.202 120 423.999 150.953 423.999 192S441.202 264 463.999 264S503.999 233.047 503.999 192S486.796 120 463.999 120ZM463.999 248C452.671 248 439.999 224.047 439.999 192S452.671 136 463.999 136S487.999 159.953 487.999 192S475.327 248 463.999 248ZM345.185 368H175.999C123.062 368 79.999 289.047 79.999 192C79.999 180.58 80.642 169.441 81.781 158.623L67.226 147.053C65.193 161.498 63.999 176.498 63.999 192C63.999 297.875 114.249 384 175.999 384H365.314L345.185 368ZM231.999 496C218.765 496 207.999 485.234 207.999 472V424C207.999 419.578 204.421 416 199.999 416S191.999 419.578 191.999 424V472C191.999 494.062 209.937 512 231.999 512H526.343L506.214 496H231.999ZM472.747 367.188L487.851 379.193L472.749 367.188C472.747 367.188 472.749 367.188 472.747 367.188ZM104.675 74.609L92.333 64.801L104.675 74.611V74.609Z" })
  }
));
ToiletPaperUnderSlashThin.displayName = "ToiletPaperUnderSlashThin";
var ToiletPaperUnderSlash_default = ToiletPaperUnderSlashThin;
