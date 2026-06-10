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
var UserMusic_exports = {};
__export(UserMusic_exports, {
  default: () => UserMusic_default
});
module.exports = __toCommonJS(UserMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserMusicLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272.207 480H34.664C33.213 480 32 478.793 32 477.342C31.994 399.404 95.399 336 173.336 336H274.664C291.186 336 307.047 338.865 321.793 344.104C326.594 345.809 331.785 345.248 336.074 342.498C336.182 342.43 336.291 342.359 336.399 342.291C347.272 335.357 345.287 318.652 333.162 314.26C314.899 307.645 295.223 304 274.664 304H173.336C77.539 304 -0.115 381.715 0 477.543C0.024 496.574 15.633 512 34.664 512H272.207C280.93 512 288 504.93 288 496.207V495.793C288 487.07 280.93 480 272.207 480ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.313 0 96 57.309 96 128S153.313 256 224 256ZM224 32C276.936 32 320 75.064 320 128C320 180.934 276.936 224 224 224S128 180.934 128 128C128 75.064 171.065 32 224 32ZM621.531 138.217C609.781 129.045 594.781 125.811 580.375 129.483L516.375 145.483C494.969 150.827 480 169.983 480 192.045V372.762C462.988 359.992 440.699 352 416 352C362.981 352 320 387.816 320 432C320 476.182 362.981 512 416 512S512 476.182 512 432V291.561L603.625 268.639C625.031 263.295 640 244.139 640 222.077V176.045C640 161.155 633.281 147.374 621.531 138.217ZM416 480C381.309 480 352 458.018 352 432C352 405.98 381.309 384 416 384S480 405.98 480 432C480 458.018 450.692 480 416 480ZM608 222.077C608 229.436 603 235.811 595.875 237.608L512 258.561V192.045C512 184.686 517 178.311 524.125 176.514L588.125 160.514C589.438 160.202 590.75 160.03 592.031 160.03C595.563 160.03 599 161.202 601.844 163.436C605.75 166.483 608 171.077 608 176.045V222.077Z" })
  }
));
UserMusicLight.displayName = "UserMusicLight";
var UserMusic_default = UserMusicLight;
