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
var CommentMusic_exports = {};
__export(CommentMusic_exports, {
  default: () => CommentMusic_default
});
module.exports = __toCommonJS(CommentMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentMusicDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C114.594 32 0 125.094 0 240C0 289.594 21.406 335 57 370.703C44.5 421.094 2.688 466 2.188 466.5C0 468.797 -0.594 472.203 0.688 475.203C2 478.203 4.812 480 8 480C74.312 480 124 448.203 148.594 428.594C181.312 440.906 217.594 448 256 448C397.406 448 512 354.906 512 240S397.406 32 256 32ZM352 287.959C352 305.584 330.5 319.959 304 319.959S256 305.584 256 287.959S277.5 255.959 304 255.959C309.375 255.959 314.75 256.709 320 257.959V181.584L224 219.084V319.959C224 337.584 202.5 351.959 176 351.959S128 337.584 128 319.959S149.5 287.959 176 287.959C181.375 287.959 186.75 288.709 192 289.959V175.209C192 168.209 196.5 162.084 203.25 159.959L331.25 112.709C336 111.209 341.375 112.084 345.5 115.084S352 122.834 352 127.959V287.959Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 287.959C352 305.584 330.5 319.959 304 319.959S256 305.584 256 287.959S277.5 255.959 304 255.959C309.375 255.959 314.75 256.709 320 257.959V181.584L224 219.084V319.959C224 337.584 202.5 351.959 176 351.959S128 337.584 128 319.959S149.5 287.959 176 287.959C181.375 287.959 186.75 288.709 192 289.959V175.209C192 168.209 196.5 162.084 203.25 159.959L331.25 112.709C336 111.209 341.375 112.084 345.5 115.084S352 122.834 352 127.959V287.959Z" })
    ]
  }
));
CommentMusicDuotone.displayName = "CommentMusicDuotone";
var CommentMusic_default = CommentMusicDuotone;
