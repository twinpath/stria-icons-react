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
var BookBookmark_exports = {};
__export(BookBookmark_exports, {
  default: () => BookBookmark_default
});
module.exports = __toCommonJS(BookBookmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookBookmarkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 384.006V32C448 14.328 433.672 0 416 0H64C28.656 0 0 28.652 0 64V455.99C0 486.918 25.07 511.992 56 511.992L439.992 512C444.414 512.004 448 508.418 448 504C448 499.578 444.414 495.992 439.992 495.992H416V416.006C433.672 416.006 448 401.678 448 384.006ZM176 16H336V231.125L261.062 169.812C259.594 168.609 257.781 168 256 168S252.406 168.609 250.938 169.812L176 231.125V16ZM400 495.992H56C32.625 495.992 13.875 475.85 16.195 452.006C18.211 431.225 36.891 415.99 57.77 415.99L400 416.006V495.992ZM56 399.994C40.324 399.994 26.176 406.51 16 416.928V64C16 37.531 37.531 16 64 16H160V248C160 251.094 161.781 253.906 164.562 255.234C167.375 256.578 170.656 256.141 173.062 254.188L256 186.344L338.938 254.188C340.406 255.391 342.188 256 344 256C345.156 256 346.344 255.75 347.438 255.234C350.219 253.906 352 251.094 352 248V16H416C424.836 16 432 23.164 432 32V384.006C432 392.83 424.82 400.006 416 400.006L56 399.994Z" })
  }
));
BookBookmarkThin.displayName = "BookBookmarkThin";
var BookBookmark_default = BookBookmarkThin;
