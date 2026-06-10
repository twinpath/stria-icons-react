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
var SpaceStationMoon_exports = {};
__export(SpaceStationMoon_exports, {
  default: () => SpaceStationMoon_default
});
module.exports = __toCommonJS(SpaceStationMoon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpaceStationMoonLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 152C194.75 152 184 162.75 184 176S194.75 200 208 200S232 189.25 232 176S221.25 152 208 152ZM208 88C159.375 88 120 127.375 120 176S159.375 264 208 264S296 224.625 296 176S256.625 88 208 88ZM208 232C177.125 232 152 206.875 152 176S177.125 120 208 120S264 145.125 264 176S238.875 232 208 232ZM256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 464C167.582 464 92.076 408.449 62.027 330.492C125.746 344.721 190.74 352 256 352S386.254 344.721 449.973 330.492C419.924 408.449 344.418 464 256 464ZM51.867 295.48C49.396 282.684 48 269.508 48 256C48 141.309 141.309 48 256 48S464 141.309 464 256C464 269.508 462.604 282.684 460.133 295.48C333.426 326.834 178.574 326.834 51.867 295.48Z" })
  }
));
SpaceStationMoonLight.displayName = "SpaceStationMoonLight";
var SpaceStationMoon_default = SpaceStationMoonLight;
