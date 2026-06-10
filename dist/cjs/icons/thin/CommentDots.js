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
var CommentDots_exports = {};
__export(CommentDots_exports, {
  default: () => CommentDots_default
});
module.exports = __toCommonJS(CommentDots_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentDotsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 31.999C114.594 31.999 0 125.093 0 239.999C0 289.593 21.406 334.999 57 370.702C44.5 421.093 2.687 465.999 2.187 466.499C0 468.796 -0.594 472.202 0.687 475.202C1.999 478.202 4.812 479.999 8 479.999C74.313 479.999 124 448.202 148.594 428.593C181.312 440.905 217.594 447.999 256 447.999C397.406 447.999 512 354.905 512 239.999S397.406 31.999 256 31.999ZM256 431.999C220.879 431.999 186.641 425.815 154.23 413.618L145.723 410.417L138.617 416.083C118.418 432.188 78.477 458.118 25.957 463.141C40.395 444.846 63.375 411.46 72.531 374.553L74.703 365.796L68.332 359.405C34.098 325.065 16 283.774 16 239.999C16 134.13 123.664 47.999 256 47.999S496 134.13 496 239.999S388.336 431.999 256 431.999ZM256 207.999C238.328 207.999 224 222.325 224 239.999S238.328 271.999 256 271.999S288 257.673 288 239.999S273.672 207.999 256 207.999ZM256 255.999C247.176 255.999 240 248.821 240 239.999S247.176 223.999 256 223.999S272 231.177 272 239.999S264.824 255.999 256 255.999ZM384 207.999C366.328 207.999 352 222.325 352 239.999S366.328 271.999 384 271.999S416 257.673 416 239.999S401.672 207.999 384 207.999ZM384 255.999C375.176 255.999 368 248.821 368 239.999S375.176 223.999 384 223.999S400 231.177 400 239.999S392.824 255.999 384 255.999ZM128 207.999C110.328 207.999 96 222.325 96 239.999S110.328 271.999 128 271.999S160 257.673 160 239.999S145.672 207.999 128 207.999ZM128 255.999C119.176 255.999 112 248.821 112 239.999S119.176 223.999 128 223.999S144 231.177 144 239.999S136.824 255.999 128 255.999Z" })
  }
));
CommentDotsThin.displayName = "CommentDotsThin";
var CommentDots_default = CommentDotsThin;
