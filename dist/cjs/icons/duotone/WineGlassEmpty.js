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
var WineGlassEmpty_exports = {};
__export(WineGlassEmpty_exports, {
  default: () => WineGlassEmpty_default
});
module.exports = __toCommonJS(WineGlassEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WineGlassEmptyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232.015 464H192.007V346.75C260.521 330.875 310.032 266.875 303.405 192.625L287.527 14.5C286.777 6.25 279.901 0 271.774 0H48.226C40.1 0 33.223 6.25 32.473 14.5L16.595 192.625C9.968 266.875 59.479 330.875 127.993 346.875V464H87.985C65.855 464 47.976 481.875 47.976 504C47.976 508.375 51.602 512 55.978 512H264.022C268.398 512 272.024 508.375 272.024 504C272.024 481.875 254.145 464 232.015 464ZM180.391 300.17C166.746 303.33 152.555 303.318 138.913 300.133C91.88 289.15 60.106 245.232 64.394 197.135L77.688 48H242.312L255.62 197.277C259.898 245.289 228.134 289.111 181.167 299.99L180.391 300.17Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
WineGlassEmptyDuotone.displayName = "WineGlassEmptyDuotone";
var WineGlassEmpty_default = WineGlassEmptyDuotone;
