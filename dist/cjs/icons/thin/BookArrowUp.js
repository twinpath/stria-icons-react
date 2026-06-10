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
var BookArrowUp_exports = {};
__export(BookArrowUp_exports, {
  default: () => BookArrowUp_default
});
module.exports = __toCommonJS(BookArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookArrowUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M353.07 248.484C356.195 245.359 356.195 240.297 353.07 237.172L246.242 130.344C243.117 127.219 238.055 127.219 234.93 130.344L126.93 238.344C125.367 239.906 124.586 241.938 124.586 244S125.367 248.094 126.93 249.656C130.055 252.781 135.117 252.781 138.242 249.656L232.586 155.312V504C232.586 508.406 236.164 512 240.586 512S248.586 508.406 248.586 504V155.312L341.758 248.484C344.883 251.609 349.945 251.609 353.07 248.484ZM448 384.006V32C448 14.326 433.672 0 416 0H64C28.656 0 0 28.652 0 64V455.99C0 486.918 25.07 511.992 56 511.992L184 511.994C188.418 511.994 192 508.412 192 503.994V503.99C192 499.572 188.418 495.992 184 495.992H56C32.625 495.992 13.875 475.848 16.195 452.002C18.219 431.219 36.898 415.988 57.781 415.99L184 415.996C188.418 415.996 192 412.414 192 407.996S188.418 399.998 184 399.998L56 399.994C40.324 399.994 26.176 406.51 16 416.928V64C16 37.49 37.492 16 64 16H416C424.836 16 432 23.162 432 32V384.006C432 392.842 424.836 400.006 416 400.006L296 400.002C291.582 400.002 288 403.582 288 408S291.578 416 296 416L400 416.006V495.992H296C291.582 495.992 288 499.572 288 503.99V503.996C288 508.414 291.582 511.996 296 511.996L439.992 512C444.414 512.004 448 508.418 448 504C448 499.578 444.414 495.992 439.992 495.992H416V416.006C433.672 416.006 448 401.678 448 384.006Z" })
  }
));
BookArrowUpThin.displayName = "BookArrowUpThin";
var BookArrowUp_default = BookArrowUpThin;
