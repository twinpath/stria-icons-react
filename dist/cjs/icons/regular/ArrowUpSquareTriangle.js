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
var ArrowUpSquareTriangle_exports = {};
__export(ArrowUpSquareTriangle_exports, {
  default: () => ArrowUpSquareTriangle_default
});
module.exports = __toCommonJS(ArrowUpSquareTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpSquareTriangleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.003 224H448.005C465.679 224 480.005 209.672 480.005 192V64C480.005 46.328 465.679 32 448.005 32H320.003C302.329 32 288.003 46.328 288.003 64V192C288.003 209.672 302.329 224 320.003 224ZM336.003 80H432.005V176H336.003V80ZM492.132 438.875L409.005 301.75C403.63 293.125 394.13 288 384.005 288C373.878 288 364.503 293.125 359.128 301.75L275.876 438.875C264.876 457.125 278.626 480 300.878 480H467.13C489.382 480 503.132 457.125 492.132 438.875ZM336.253 432L384.005 353.125L431.755 432H336.253ZM145.624 39.367C136.562 29.547 119.437 29.547 110.374 39.367L14.378 143.449C5.378 153.207 5.972 168.406 15.722 177.383C25.501 186.453 40.689 185.797 49.626 176.039L103.999 117.086V455.98C103.999 469.242 114.749 480 127.999 480S151.999 469.242 151.999 455.98V117.086L206.372 176.039C211.091 181.164 217.529 183.762 223.997 183.762C229.81 183.762 235.654 181.664 240.277 177.383C250.027 168.406 250.62 153.207 241.62 143.449L145.624 39.367Z" })
  }
));
ArrowUpSquareTriangleRegular.displayName = "ArrowUpSquareTriangleRegular";
var ArrowUpSquareTriangle_default = ArrowUpSquareTriangleRegular;
