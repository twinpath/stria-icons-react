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
var BookHeart_exports = {};
__export(BookHeart_exports, {
  default: () => BookHeart_default
});
module.exports = __toCommonJS(BookHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookHeartThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M301.359 95.996C282.617 95.996 263.688 103.668 249.848 117.961L240.004 128.121L230.16 117.961C216.316 103.664 197.391 95.996 178.645 95.996C163.574 95.996 148.617 100.961 136.52 111.43C105.449 138.32 103.902 186.25 131.91 215.234L228.488 315.086C231.648 318.355 235.812 319.992 239.98 319.992S248.313 318.355 251.473 315.086L348.047 215.234C376.105 186.25 374.559 138.32 343.484 111.426C331.387 100.957 316.434 95.996 301.359 95.996ZM336.547 204.113L239.988 303.965L143.418 204.117C124.551 184.594 120.152 146.758 146.988 123.523C174.055 100.109 206.953 116.996 218.668 129.09L240.004 151.117L261.34 129.09C272.785 117.27 305.932 100.078 333.012 123.523C359.748 146.656 355.74 184.289 336.547 204.113ZM448 384V32C448 14.328 433.674 0 416 0H64C28.654 0 0 28.652 0 64V455.984C0 486.91 25.07 511.984 55.998 511.984L439.994 511.992C444.416 511.996 448 508.41 448 503.992C448 499.57 444.416 495.984 439.994 495.984H416V416C433.674 416 448 401.672 448 384ZM400 495.984H56C32.623 495.984 13.877 475.844 16.193 452C18.213 431.219 36.889 415.984 57.77 415.984L400 416V495.984ZM56 399.988C40.324 399.988 26.176 406.504 16 416.922V64C16 37.531 37.533 16 64 16H416C424.836 16 432 23.164 432 32V384C432 392.824 424.822 400 416 400L56 399.988Z" })
  }
));
BookHeartThin.displayName = "BookHeartThin";
var BookHeart_default = BookHeartThin;
