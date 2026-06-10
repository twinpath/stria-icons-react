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
var UpLong_exports = {};
__export(UpLong_exports, {
  default: () => UpLong_default
});
module.exports = __toCommonJS(UpLong_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpLongLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M183.999 512H136.001C113.94 512 96.003 494.031 96.003 471.969L96.003 191.516H56.004C40.099 191.516 25.693 182.078 19.349 167.516C12.975 152.891 15.85 135.953 26.693 124.297L130.689 12.234C138.221 4.076 149.107 -0.002 160 0C170.888 0.002 181.782 4.08 189.343 12.234L293.307 124.297C304.15 135.953 307.025 152.891 300.651 167.516C294.307 182.078 279.901 191.516 263.996 191.516H223.997L223.998 471.969C223.998 494.031 206.061 512 183.999 512ZM160 31.422C158.688 31.422 156.219 31.766 154.156 33.984L50.129 146.047C45.429 151.156 48.987 159.516 56.004 159.516H128.001L128.001 471.969C128.001 476.406 131.595 480 136.001 480H183.999C188.405 480 191.999 476.406 191.999 471.969L191.999 159.516H263.996C271.018 159.516 274.567 151.152 269.871 146.047L165.875 33.984C163.781 31.766 161.312 31.422 160 31.422Z" })
  }
));
UpLongLight.displayName = "UpLongLight";
var UpLong_default = UpLongLight;
