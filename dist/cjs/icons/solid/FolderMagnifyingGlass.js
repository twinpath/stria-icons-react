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
var FolderMagnifyingGlass_exports = {};
__export(FolderMagnifyingGlass_exports, {
  default: () => FolderMagnifyingGlass_default
});
module.exports = __toCommonJS(FolderMagnifyingGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderMagnifyingGlassSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M271.344 216.285C240.47 216.824 215.791 242.38 216.33 273.254C216.869 304.128 242.425 328.807 273.299 328.268S328.852 302.174 328.313 271.299C327.774 240.425 302.219 215.746 271.344 216.285ZM493.216 92.394L301.245 95.745L236.138 32.872L76.162 35.664C49.666 36.127 28.545 57.999 29.007 84.495L35.151 436.441C35.613 462.937 57.485 484.058 83.981 483.596L499.918 476.336C526.414 475.873 547.535 454.001 547.073 427.505L542.046 139.549C541.584 113.053 519.712 91.932 493.216 92.394ZM413.849 397.83L402.738 409.334C396.6 415.692 386.47 415.869 380.114 409.729L327.119 360.228C311.662 369.882 293.685 375.92 274.137 376.261C216.708 377.263 169.34 331.521 168.338 274.092S213.078 169.295 270.507 168.293C327.935 167.29 375.304 213.033 376.306 270.462C376.663 290.904 370.883 309.937 360.977 326.191L413.454 375.204C419.81 381.344 419.987 391.476 413.849 397.83Z" })
  }
));
FolderMagnifyingGlassSolid.displayName = "FolderMagnifyingGlassSolid";
var FolderMagnifyingGlass_default = FolderMagnifyingGlassSolid;
