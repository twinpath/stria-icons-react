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
var Compass_exports = {};
__export(Compass_exports, {
  default: () => Compass_default
});
module.exports = __toCommonJS(Compass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompassSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M233.375 233.375C220.875 245.875 220.875 266.125 233.375 278.625S266.125 291.125 278.625 278.625S291.125 245.859 278.625 233.375C266.125 220.875 245.875 220.875 233.375 233.375ZM256 16C123.449 16 16 123.449 16 256S123.449 496 256 496S496 388.551 496 256S388.551 16 256 16ZM382.125 156.047L316.156 300.406C313.438 306.375 306.375 313.438 300.406 316.172L156.062 382.141C139.406 389.75 122.25 372.594 129.875 355.937L195.844 211.594C198.562 205.609 205.625 198.547 211.625 195.812L355.937 129.844C372.594 122.25 389.75 139.406 382.125 156.047Z" })
  }
));
CompassSolid.displayName = "CompassSolid";
var Compass_default = CompassSolid;
