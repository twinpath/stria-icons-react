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
const CompassDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.449 16 16 123.449 16 256S123.449 496 256 496S496 388.551 496 256S388.551 16 256 16ZM382.125 156.047L316.156 300.406C313.438 306.375 306.375 313.438 300.406 316.172L156.062 382.141C139.406 389.75 122.25 372.594 129.875 355.937L195.844 211.594C198.562 205.609 205.625 198.547 211.625 195.812L355.937 129.844C372.594 122.25 389.75 139.406 382.125 156.047Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M233.365 233.375C220.865 245.875 220.865 266.125 233.365 278.625S266.115 291.125 278.615 278.625S291.115 245.859 278.615 233.375C266.115 220.875 245.865 220.875 233.365 233.375ZM382.115 156.047L316.146 300.406C313.427 306.375 306.365 313.438 300.396 316.172L156.052 382.141C139.396 389.75 122.24 372.594 129.865 355.937L195.833 211.594C198.552 205.609 205.615 198.547 211.615 195.812L355.927 129.844C372.583 122.25 389.74 139.406 382.115 156.047Z" })
    ]
  }
));
CompassDuotone.displayName = "CompassDuotone";
var Compass_default = CompassDuotone;
