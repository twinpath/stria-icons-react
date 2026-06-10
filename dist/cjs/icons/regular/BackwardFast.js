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
var BackwardFast_exports = {};
__export(BackwardFast_exports, {
  default: () => BackwardFast_default
});
module.exports = __toCommonJS(BackwardFast_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BackwardFastRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.787 64C472.787 64 465.645 66.307 459.5 71.406L288 227.879V96.027C288 76.809 272.289 64 255.787 64C248.787 64 241.645 66.307 235.5 71.406L64 227.879V88.031C64 74.777 53.256 64.031 40 64.031H39.998C26.744 64.031 16 74.775 16 88.029V423.967C16 437.223 26.746 447.967 40 447.967C53.256 447.967 64 437.223 64 423.967V285.244L235.5 440.594C241.645 445.693 248.785 448 255.787 448C272.287 448 288 435.189 288 415.973V285.244L459.5 440.594C465.645 445.693 472.785 448 479.787 448C496.287 448 512 435.189 512 415.973V96.027C512 76.809 496.289 64 479.787 64ZM240 379.904L103.807 256.537L240 132.277V379.904ZM464 379.904L327.807 256.537L464 132.277V379.904Z" })
  }
));
BackwardFastRegular.displayName = "BackwardFastRegular";
var BackwardFast_default = BackwardFastRegular;
