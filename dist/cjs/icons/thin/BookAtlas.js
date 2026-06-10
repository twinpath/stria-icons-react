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
var BookAtlas_exports = {};
__export(BookAtlas_exports, {
  default: () => BookAtlas_default
});
module.exports = __toCommonJS(BookAtlas_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookAtlasThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 72C165 72 104 133.012 104 207.992C104 282.977 165 343.988 240 343.988S376 282.977 376 207.992C376 133.012 315 72 240 72ZM240 87.996C261.826 87.996 285.779 133.711 287.645 199.992H192.355C194.221 133.711 218.174 87.996 240 87.996ZM204.938 93.836C188.422 116.492 177.568 154.992 176.369 199.992H120.809C124.199 149.688 158.438 108.176 204.938 93.836ZM120.809 215.992H176.369C177.568 260.992 188.422 299.496 204.938 322.152C158.438 307.812 124.199 266.297 120.809 215.992ZM240 327.992C218.174 327.992 194.221 282.273 192.355 215.992H287.645C285.779 282.273 261.826 327.992 240 327.992ZM275.062 322.152C291.578 299.496 302.432 260.992 303.631 215.992H359.191C355.801 266.297 321.562 307.812 275.062 322.152ZM303.631 199.992C302.432 154.992 291.578 116.492 275.063 93.836C321.563 108.176 355.801 149.688 359.191 199.992H303.631ZM448 384V32C448 14.328 433.674 0 416 0H64C28.654 0 0 28.652 0 64V455.984C0 486.91 25.07 511.984 55.998 511.984L439.994 511.992C444.416 511.996 448 508.41 448 503.992C448 499.57 444.416 495.984 439.994 495.984H416V416C433.674 416 448 401.672 448 384ZM400 495.984H56C32.623 495.984 13.877 475.844 16.193 452C18.213 431.219 36.889 415.984 57.77 415.984L400 416V495.984ZM56 399.988C40.324 399.988 26.176 406.504 16 416.922V64C16 37.531 37.533 16 64 16H416C424.836 16 432 23.164 432 32V384C432 392.824 424.822 400 416 400L56 399.988Z" })
  }
));
BookAtlasThin.displayName = "BookAtlasThin";
var BookAtlas_default = BookAtlasThin;
