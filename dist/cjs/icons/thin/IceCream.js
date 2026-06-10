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
var IceCream_exports = {};
__export(IceCream_exports, {
  default: () => IceCream_default
});
module.exports = __toCommonJS(IceCream_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IceCreamThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M344.017 287.949C341.071 287.949 338.208 289.594 336.813 292.453L243.594 483.681C240.094 491.152 232.406 495.996 224 495.996S207.906 491.152 204.344 483.556L111.188 292.453C109.793 289.596 106.949 287.935 104.003 287.935C99.878 287.935 95.999 291.283 95.999 295.951C95.999 297.128 96.261 298.324 96.812 299.454L189.906 490.433C196.016 503.529 209.406 512 224 512S251.984 503.529 258.031 490.558L351.188 299.454C351.739 298.324 352.001 297.128 352.001 295.951C352.001 291.226 348.093 287.949 344.017 287.949ZM369.734 150.579C369.883 147.967 369.957 145.359 369.957 142.758C369.957 105.891 340.038 0 224 0C106.945 0 78.043 106.211 78.043 142.758C78.043 145.359 78.117 147.967 78.266 150.579C52.141 154.267 32 176.366 32 202.996C32 232.19 56.219 255.945 86 255.945H362C391.781 255.945 416 232.19 416 202.996C416 176.366 395.859 154.267 369.734 150.579ZM362 239.942H86C65.047 239.942 48 223.376 48 202.996S65.047 166.051 86.953 166.051H95.953L94.891 157.112C94.323 152.32 94.044 147.532 94.044 142.769C94.044 73.742 150.973 16.019 224 16.019C296.897 16.019 353.956 73.639 353.956 142.769C353.956 147.532 353.677 152.32 353.109 157.112L352.047 166.051H362C382.953 166.051 400 182.617 400 202.996S382.953 239.942 362 239.942Z " })
  }
));
IceCreamThin.displayName = "IceCreamThin";
var IceCream_default = IceCreamThin;
