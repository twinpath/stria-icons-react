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
var ArrowRightFromLine_exports = {};
__export(ArrowRightFromLine_exports, {
  default: () => ArrowRightFromLine_default
});
module.exports = __toCommonJS(ArrowRightFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightFromLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48.032 424V88C48.032 74.75 37.275 64 24.016 64S0 74.75 0 88V424C0 437.25 10.757 448 24.016 448S48.032 437.25 48.032 424ZM271.743 145.469L363.718 232H120.08C106.821 232 96.064 242.75 96.064 256S106.821 280 120.08 280H363.718L271.743 366.531C266.708 371.25 264.175 377.625 264.175 384C264.175 389.906 266.333 395.812 270.711 400.438C279.779 410.094 294.977 410.562 304.639 401.469L440.73 273.469C450.423 264.406 450.423 247.594 440.73 238.531L304.639 110.531C294.977 101.438 279.779 101.906 270.711 111.563C261.611 121.188 262.049 136.375 271.743 145.469Z" })
  }
));
ArrowRightFromLineRegular.displayName = "ArrowRightFromLineRegular";
var ArrowRightFromLine_default = ArrowRightFromLineRegular;
