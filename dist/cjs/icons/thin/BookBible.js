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
var BookBible_exports = {};
__export(BookBible_exports, {
  default: () => BookBible_default
});
module.exports = __toCommonJS(BookBible_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookBibleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 128.012H280V88.012C280 74.781 269.219 64.016 256 64.016H224C210.781 64.016 200 74.781 200 88.012V128.012H160C146.781 128.012 136 138.777 136 152.008V184.008C136 197.242 146.781 208.008 160 208.008H200V312.008C200 325.242 210.781 336.004 224 336.004H256C269.219 336.004 280 325.242 280 312.008V208.008H320C333.219 208.008 344 197.242 344 184.008V152.008C344 138.777 333.219 128.012 320 128.012ZM328 184.008C328 188.492 324.5 192.008 320 192.008H264V312.008C264 316.492 260.5 320.008 256 320.008H224C219.5 320.008 216 316.492 216 312.008V192.008H160C155.5 192.008 152 188.492 152 184.008V152.008C152 147.523 155.5 144.008 160 144.008H216V88.012C216 83.527 219.5 80.012 224 80.012H256C260.5 80.012 264 83.527 264 88.012V144.008H320C324.5 144.008 328 147.523 328 152.008V184.008ZM448 384V32C448 14.328 433.674 0 416 0H64C28.654 0 0 28.652 0 64V455.984C0 486.91 25.07 511.984 55.998 511.984L439.994 511.992C444.416 511.996 448 508.41 448 503.992C448 499.57 444.416 495.984 439.994 495.984H416V416C433.674 416 448 401.672 448 384ZM400 495.984H56C32.623 495.984 13.877 475.844 16.193 452C18.213 431.219 36.889 415.984 57.77 415.984L400 416V495.984ZM56 399.988C40.324 399.988 26.176 406.504 16 416.922V64C16 37.531 37.533 16 64 16H416C424.836 16 432 23.164 432 32V384C432 392.824 424.822 400 416 400L56 399.988Z" })
  }
));
BookBibleThin.displayName = "BookBibleThin";
var BookBible_default = BookBibleThin;
