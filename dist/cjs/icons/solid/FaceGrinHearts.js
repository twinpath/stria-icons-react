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
var FaceGrinHearts_exports = {};
__export(FaceGrinHearts_exports, {
  default: () => FaceGrinHearts_default
});
module.exports = __toCommonJS(FaceGrinHearts_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceGrinHeartsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM98.457 183.625C105.117 166 125.098 156.875 143.262 161.75L150.406 163.625L152.344 156.5C157.43 138.375 175.23 125.625 193.879 128.625C215.312 132 228.27 152.75 222.699 173.125L203.324 243C202.113 247.5 197.391 250.25 192.789 249L122.555 230.75C102.211 225.375 90.707 203.75 98.457 183.625ZM256 432C195.453 432 121.465 393.75 112.141 338.75C110.203 326.875 121.344 317.25 132.848 320.75C163.121 330.5 208.047 336 256 336S348.879 330.5 379.152 320.75C390.535 317.25 401.676 326.875 399.859 338.75C390.535 393.75 316.547 432 256 432ZM389.445 230.75L319.211 248.875C314.73 250.125 310.008 247.375 308.676 242.875L289.301 173C283.73 152.75 296.688 131.875 318.121 128.5C336.648 125.5 354.449 138.25 359.656 156.375L361.594 163.5L368.738 161.625C386.902 156.875 406.883 165.875 413.543 183.5C421.293 203.75 409.789 225.375 389.445 230.75Z" })
  }
));
FaceGrinHeartsSolid.displayName = "FaceGrinHeartsSolid";
var FaceGrinHearts_default = FaceGrinHeartsSolid;
