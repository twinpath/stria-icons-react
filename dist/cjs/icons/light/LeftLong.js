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
var LeftLong_exports = {};
__export(LeftLong_exports, {
  default: () => LeftLong_default
});
module.exports = __toCommonJS(LeftLong_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftLongLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 232.001V279.999C512 302.061 494.031 319.997 471.969 319.997L191.516 319.997V359.996C191.516 375.901 182.078 390.307 167.516 396.651C152.891 403.025 135.953 400.15 124.297 389.307L12.234 285.311C4.076 277.779 -0.002 266.893 0 256C0.002 245.112 4.08 234.218 12.234 226.658L124.297 122.693C135.953 111.85 152.891 108.975 167.516 115.35C182.078 121.693 191.516 136.099 191.516 152.004V192.003L471.969 192.003C494.031 192.003 512 209.939 512 232.001ZM31.422 256C31.422 257.312 31.766 259.781 33.984 261.844L146.047 365.871C151.156 370.571 159.516 367.013 159.516 359.996V287.999L471.969 287.999C476.406 287.999 480 284.405 480 279.999V232.001C480 227.595 476.406 224.001 471.969 224.001L159.516 224.001V152.004C159.516 144.982 151.152 141.433 146.047 146.13L33.984 250.125C31.766 252.219 31.422 254.688 31.422 256Z" })
  }
));
LeftLongLight.displayName = "LeftLongLight";
var LeftLong_default = LeftLongLight;
