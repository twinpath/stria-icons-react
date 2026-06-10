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
var CommentCaptions_exports = {};
__export(CommentCaptions_exports, {
  default: () => CommentCaptions_default
});
module.exports = __toCommonJS(CommentCaptions_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentCaptionsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C2 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM119.984 224H215.971C229.219 224 239.969 234.75 239.969 248S229.219 272 215.971 272H119.984C106.736 272 95.986 261.25 95.986 248S106.736 224 119.984 224ZM135.982 352H119.984C106.736 352 95.986 341.25 95.986 328S106.736 304 119.984 304H135.982C149.23 304 159.979 314.75 159.979 328S149.23 352 135.982 352ZM295.961 352H215.971C202.723 352 191.975 341.25 191.975 328S202.723 304 215.971 304H295.961C309.209 304 319.957 314.75 319.957 328S309.209 352 295.961 352ZM391.947 352H375.949C362.701 352 351.953 341.25 351.953 328S362.701 304 375.949 304H391.947C405.195 304 415.945 314.75 415.945 328S405.195 352 391.947 352ZM391.947 272H295.961C282.713 272 271.963 261.25 271.963 248S282.713 224 295.961 224H391.947C405.195 224 415.945 234.75 415.945 248S405.195 272 391.947 272Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M119.998 272H215.984C229.232 272 239.982 261.25 239.982 248S229.232 224 215.984 224H119.998C106.75 224 96 234.75 96 248S106.75 272 119.998 272ZM295.975 304H215.984C202.736 304 191.988 314.75 191.988 328S202.736 352 215.984 352H295.975C309.223 352 319.971 341.25 319.971 328S309.223 304 295.975 304ZM135.996 304H119.998C106.75 304 96 314.75 96 328S106.75 352 119.998 352H135.996C149.244 352 159.992 341.25 159.992 328S149.244 304 135.996 304ZM391.961 304H375.963C362.715 304 351.967 314.75 351.967 328S362.715 352 375.963 352H391.961C405.209 352 415.959 341.25 415.959 328S405.209 304 391.961 304ZM295.975 272H391.961C405.209 272 415.959 261.25 415.959 248S405.209 224 391.961 224H295.975C282.727 224 271.977 234.75 271.977 248S282.727 272 295.975 272Z" })
    ]
  }
));
CommentCaptionsDuotone.displayName = "CommentCaptionsDuotone";
var CommentCaptions_default = CommentCaptionsDuotone;
