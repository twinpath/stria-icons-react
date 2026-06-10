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
var ArrowUpAZ_exports = {};
__export(ArrowUpAZ_exports, {
  default: () => ArrowUpAZ_default
});
module.exports = __toCommonJS(ArrowUpAZ_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpAZThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M45.902 141.324L120 60.471V471.998C120 476.406 123.594 480 128 480S136 476.406 136 471.998V60.471L210.098 141.324C211.691 143.043 213.848 143.918 216.004 143.918C217.941 143.918 219.879 143.23 221.41 141.824C224.66 138.822 224.879 133.76 221.91 130.508L133.906 34.484C130.844 31.172 125.156 31.172 122.094 34.484L34.09 130.508C31.121 133.76 31.34 138.822 34.59 141.824C37.84 144.824 42.902 144.605 45.902 141.324ZM456 464H328.875L462.187 301.062C464.156 298.687 464.562 295.375 463.219 292.562C461.906 289.781 459.094 288 456 288H312C307.594 288 304 291.594 304 296S307.594 304 312 304H439.125L305.812 466.938C303.844 469.313 303.437 472.625 304.781 475.438C306.094 478.219 308.906 480 312 480H456C460.406 480 464 476.406 464 472S460.406 464 456 464ZM479.156 212.438L391.156 36.438C388.469 31 379.531 31 376.844 36.438L288.844 212.438C286.875 216.375 288.469 221.188 292.437 223.156C296.25 225.062 301.187 223.562 303.156 219.562L328.937 168H439.062L464.844 219.562C466.25 222.375 469.062 224 472 224C473.219 224 474.437 223.719 475.562 223.156C479.531 221.188 481.125 216.375 479.156 212.438ZM336.937 152L384 57.875L431.062 152H336.937Z" })
  }
));
ArrowUpAZThin.displayName = "ArrowUpAZThin";
var ArrowUpAZ_default = ArrowUpAZThin;
