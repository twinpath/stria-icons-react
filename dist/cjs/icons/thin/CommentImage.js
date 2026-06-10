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
var CommentImage_exports = {};
__export(CommentImage_exports, {
  default: () => CommentImage_default
});
module.exports = __toCommonJS(CommentImage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentImageThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C114.594 32 0 125.094 0 240C0 289.594 21.406 335 57 370.703C44.5 421.094 2.688 466 2.188 466.5C0 468.797 -0.594 472.203 0.688 475.203C1.999 478.203 4.812 480 8 480C74.312 480 124 448.203 148.594 428.594C181.312 440.906 217.594 448 256 448C397.406 448 512 354.906 512 240S397.406 32 256 32ZM256 432C220.879 432 186.641 425.816 154.23 413.619L145.723 410.418L138.617 416.084C118.418 432.189 78.477 458.119 25.957 463.143C40.395 444.848 63.375 411.461 72.531 374.555L74.703 365.797L68.332 359.406C34.098 325.066 16 283.775 16 240C16 134.131 123.664 48 256 48S496 134.131 496 240S388.336 432 256 432ZM160 200C182.062 200 200 182.062 200 160S182.062 120 160 120S120 137.938 120 160S137.938 200 160 200ZM160 136C173.219 136 184 146.766 184 160S173.219 184 160 184S136 173.234 136 160S146.781 136 160 136ZM312.594 153.688C303.5 141.531 283.125 141.531 274.031 153.719L202.219 250.656L186.062 232.219C176.938 221.781 159.062 221.812 149.938 232.187L93.969 296.187C87.75 303.219 86.25 313.344 90.156 321.937C94.062 330.469 102.625 336 112 336H400C409.125 336 417.312 330.938 421.406 322.812C425.531 314.656 424.719 305.031 419.281 297.719L312.594 153.688ZM407.156 315.562L407.125 315.594C405.781 318.312 403.031 320 400 320H112C108.875 320 106.031 318.156 104.719 315.312C103.438 312.469 103.906 309.094 105.999 306.75L161.999 242.719C163.5 241 165.688 240 168 240S172.5 241 173.999 242.75L203.281 276.156L286.875 163.25C289.969 159.188 296.719 159.156 299.75 163.219L406.438 307.25C408.25 309.688 408.5 312.875 407.156 315.562Z" })
  }
));
CommentImageThin.displayName = "CommentImageThin";
var CommentImage_default = CommentImageThin;
