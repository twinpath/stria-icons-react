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
var Gem_exports = {};
__export(Gem_exports, {
  default: () => Gem_default
});
module.exports = __toCommonJS(Gem_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GemLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.101 198.828L397.098 38.828C394.129 34.547 389.223 32 384.004 32H127.996C122.777 32 117.871 34.547 114.902 38.828L2.899 198.828C-1.445 205.031 -0.851 213.422 4.305 218.938L244.312 474.938C247.344 478.172 251.562 480 256 480S264.656 478.172 267.688 474.938L507.695 218.938C512.851 213.422 513.445 205.031 509.101 198.828ZM383.449 75.125L465.272 192H294.4L383.449 75.125ZM256 189.594L160.3 64H351.7L256 189.594ZM128.551 75.125L217.6 192H46.728L128.551 75.125ZM256 440.609L52.934 224H459.066L256 440.609Z" })
  }
));
GemLight.displayName = "GemLight";
var Gem_default = GemLight;
