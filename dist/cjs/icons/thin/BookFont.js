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
var BookFont_exports = {};
__export(BookFont_exports, {
  default: () => BookFont_default
});
module.exports = __toCommonJS(BookFont_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookFontThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M231.156 100.422C228.438 95.016 219.562 95.016 216.844 100.422L112.844 308.422C110.875 312.375 112.469 317.172 116.422 319.156C120.438 321.188 125.172 319.516 127.156 315.578L156.945 256H291.055L320.844 315.578C322.25 318.375 325.078 320 328 320C329.203 320 330.422 319.734 331.578 319.156C335.531 317.172 337.125 312.375 335.156 308.422L231.156 100.422ZM164.945 240L224 121.891L283.055 240H164.945ZM448 384V32C448 14.328 433.674 0 416 0H64C28.654 0 0 28.652 0 64V455.984C0 486.91 25.07 511.984 55.998 511.984L439.994 511.992C444.416 511.996 448 508.41 448 503.992C448 499.57 444.416 495.984 439.994 495.984H416V416C433.674 416 448 401.672 448 384ZM400 495.984H56C32.623 495.984 13.877 475.844 16.193 452C18.213 431.219 36.889 415.984 57.77 415.984L400 416V495.984ZM56 399.988C40.324 399.988 26.176 406.504 16 416.922V64C16 37.531 37.533 16 64 16H416C424.836 16 432 23.164 432 32V384C432 392.824 424.822 400 416 400L56 399.988Z" })
  }
));
BookFontThin.displayName = "BookFontThin";
var BookFont_default = BookFontThin;
