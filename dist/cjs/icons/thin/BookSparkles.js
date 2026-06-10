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
var BookSparkles_exports = {};
__export(BookSparkles_exports, {
  default: () => BookSparkles_default
});
module.exports = __toCommonJS(BookSparkles_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookSparklesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 119.996H168V87.996C168 83.574 164.406 80 160 80S152 83.574 152 87.996V119.996H120C115.594 119.996 112 123.574 112 127.996S115.594 135.996 120 135.996H152V167.992C152 172.414 155.594 175.992 160 175.992S168 172.414 168 167.992V135.996H200C204.406 135.996 208 132.418 208 127.996S204.406 119.996 200 119.996ZM344 247.992H296V199.992C296 195.57 292.406 191.992 288 191.992S280 195.57 280 199.992V247.992H232C227.594 247.992 224 251.57 224 255.992S227.594 263.992 232 263.992H280V311.992C280 316.414 283.594 319.992 288 319.992S296 316.414 296 311.992V263.992H344C348.406 263.992 352 260.414 352 255.992S348.406 247.992 344 247.992ZM448 384V32C448 14.328 433.674 0 416 0H64C28.654 0 0 28.652 0 64V455.984C0 486.91 25.07 511.984 55.998 511.984L439.994 511.992C444.416 511.996 448 508.41 448 503.992C448 499.57 444.416 495.984 439.994 495.984H416V416C433.674 416 448 401.672 448 384ZM400 495.984H56C32.623 495.984 13.877 475.844 16.193 452C18.213 431.219 36.889 415.984 57.77 415.984L400 416V495.984ZM56 399.988C40.324 399.988 26.176 406.504 16 416.922V64C16 37.531 37.533 16 64 16H416C424.836 16 432 23.164 432 32V384C432 392.824 424.822 400 416 400L56 399.988Z" })
  }
));
BookSparklesThin.displayName = "BookSparklesThin";
var BookSparkles_default = BookSparklesThin;
