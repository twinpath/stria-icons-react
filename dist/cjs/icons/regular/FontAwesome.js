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
var FontAwesome_exports = {};
__export(FontAwesome_exports, {
  default: () => FontAwesome_default
});
module.exports = __toCommonJS(FontAwesome_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FontAwesomeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 48V384C384.906 406.535 365.664 416 328.531 416C265.711 416 241.93 384 179.199 384C157.508 384 140.721 387.791 125.465 392.766C110.951 397.5 96 386.98 96 371.713V370.967C96 361.691 101.734 353.363 110.42 350.105C129.951 342.781 150.189 336 179.199 336C241.93 336 265.711 368 328.531 368C354.031 368 371.379 363.396 400 353.303V113.303C379.23 120.627 357.707 128 328.539 128C328.535 128 328.535 128 328.531 128C265.723 128 241.922 96 179.203 96C122.102 96 98.805 122.145 48 126.99V456C48 469.254 37.254 480 24 480S0 469.254 0 456V56C0 42.744 10.746 32 24 32S48 42.744 48 56V78.99C98.801 74.145 122.094 48 179.199 48H179.203C241.973 48 265.654 80 328.531 80C366.143 80 386.822 69.848 448 48Z" })
  }
));
FontAwesomeRegular.displayName = "FontAwesomeRegular";
var FontAwesome_default = FontAwesomeRegular;
