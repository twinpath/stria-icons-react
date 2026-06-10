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
var EarDeaf_exports = {};
__export(EarDeaf_exports, {
  default: () => EarDeaf_default
});
module.exports = __toCommonJS(EarDeaf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EarDeafThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 255.996C364.422 255.996 368 252.418 368 247.996V231.996C368 165.824 314.172 111.996 248 111.996S128 165.824 128 231.996V247.996C128 252.418 131.578 255.996 136 255.996S144 252.418 144 247.996V231.996C144 174.652 190.656 127.996 248 127.996S352 174.652 352 231.996V247.996C352 252.418 355.578 255.996 360 255.996ZM248 47.996C146.547 47.996 64 130.543 64 231.996V247.996C64 252.418 67.578 255.996 72 255.996S80 252.418 80 247.996V231.996C80 139.355 155.359 63.996 248 63.996S416 139.355 416 231.996C416 289.418 393.813 343.527 353.531 384.387L351.578 386.355L351.281 389.121C344.625 450.059 293.344 495.996 232 495.996C227.578 495.996 224 499.574 224 503.996S227.578 511.996 232 511.996C300.578 511.996 358.078 461.309 366.859 393.637C408.891 350.012 432 292.715 432 231.996C432 130.543 349.453 47.996 248 47.996ZM184 320C181.953 320 179.906 320.781 178.344 322.344L2.344 498.344C0.781 499.906 0 501.953 0 504C0 506.906 2.281 512 8 512C10.063 512 12.094 511.219 13.656 509.656L189.656 333.656C191.219 332.094 192 330.047 192 328C192 323.737 188.567 320 184 320ZM512 8C512 3.737 508.567 0 504 0C501.953 0 499.906 0.781 498.344 2.344L418.344 82.344C416.781 83.906 416 85.953 416 88C416 90.906 418.281 96 424 96C426.063 96 428.094 95.219 429.656 93.656L509.656 13.656C511.219 12.094 512 10.047 512 8Z " })
  }
));
EarDeafThin.displayName = "EarDeafThin";
var EarDeaf_default = EarDeafThin;
