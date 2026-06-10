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
var FolderBookmark_exports = {};
__export(FolderBookmark_exports, {
  default: () => FolderBookmark_default
});
module.exports = __toCommonJS(FolderBookmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderBookmarkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H272L217.373 41.375C211.371 35.371 203.232 32 194.746 32H48C21.49 32 0 53.492 0 80V432C0 458.508 21.49 480 48 480H464C490.51 480 512 458.508 512 432V144C512 117.492 490.51 96 464 96ZM424 112V327.359L357 273.75C354.062 271.406 349.938 271.406 347 273.75L280 327.359V112H424ZM496 432C496 449.672 481.674 464 464 464H48C30.326 464 16 449.672 16 432V80C16 62.328 30.326 48 48 48H188.117C196.604 48 204.742 51.371 210.744 57.371L264 110.629V344C264 347.078 265.75 349.875 268.531 351.203C271.25 352.516 274.594 352.172 277 350.25L352 290.25L427 350.25C428.438 351.406 430.219 352 432 352C433.188 352 434.375 351.734 435.469 351.203C438.25 349.875 440 347.078 440 344V112H464C481.674 112 496 126.328 496 144V432Z" })
  }
));
FolderBookmarkThin.displayName = "FolderBookmarkThin";
var FolderBookmark_default = FolderBookmarkThin;
