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
var Car_exports = {};
__export(Car_exports, {
  default: () => Car_default
});
module.exports = __toCommonJS(Car_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M461.063 203.762L428.557 90C418.808 55.844 387.188 32 351.663 32H160.256C124.73 32 93.11 55.844 83.362 90L50.855 203.762C20.725 219.955 0 251.393 0 288V464C0 472.836 7.163 480 15.997 480S31.995 472.836 31.995 464V416H479.923V464C479.923 472.836 487.086 480 495.921 480C504.755 480 511.918 472.836 511.918 464V288C511.918 251.393 491.193 219.955 461.063 203.762ZM114.107 98.812C119.981 78.312 138.947 64 160.256 64H351.663C372.972 64 391.938 78.312 397.812 98.812L424.692 192.883C421.763 192.613 418.933 192 415.934 192H95.985C92.985 192 90.156 192.613 87.226 192.883L114.107 98.812ZM479.924 352C479.924 369.645 465.57 384 447.929 384H63.99C46.348 384 31.995 369.645 31.995 352V288C31.995 252.709 60.701 224 95.985 224H415.934C451.219 224 479.924 252.709 479.924 288V352ZM103.983 272C90.732 272 79.987 282.746 79.987 296S90.732 320 103.983 320C117.235 320 127.98 309.254 127.98 296S117.235 272 103.983 272ZM407.935 272C394.683 272 383.939 282.746 383.939 296S394.683 320 407.935 320C421.187 320 431.931 309.254 431.931 296S421.187 272 407.935 272Z" })
  }
));
CarLight.displayName = "CarLight";
var Car_default = CarLight;
