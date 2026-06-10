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
var ArrowDownTriangleSquare_exports = {};
__export(ArrowDownTriangleSquare_exports, {
  default: () => ArrowDownTriangleSquare_default
});
module.exports = __toCommonJS(ArrowDownTriangleSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownTriangleSquareRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448.005 288H320.003C302.329 288 288.003 302.328 288.003 320V448C288.003 465.672 302.329 480 320.003 480H448.005C465.679 480 480.005 465.672 480.005 448V320C480.005 302.328 465.679 288 448.005 288ZM432.005 432H336.003V336H432.005V432ZM492.132 182.875L409.005 45.75C403.63 37.125 394.13 32 384.005 32C373.878 32 364.503 37.125 359.128 45.75L275.876 182.875C264.876 201.125 278.626 224 300.878 224H467.13C489.382 224 503.132 201.125 492.132 182.875ZM336.253 176L384.005 97.125L431.755 176H336.253ZM241.62 368.553C250.62 358.795 250.027 343.596 240.277 334.619C235.654 330.338 229.81 328.24 223.997 328.24C217.529 328.24 211.091 330.838 206.372 335.963L151.999 394.916V56.021C151.999 42.76 141.249 32.002 127.999 32.002S103.999 42.76 103.999 56.021V394.916L49.626 335.963C40.689 326.205 25.501 325.549 15.722 334.619C5.972 343.596 5.378 358.795 14.378 368.553L110.374 472.635C119.437 482.455 136.562 482.455 145.624 472.635L241.62 368.553Z" })
  }
));
ArrowDownTriangleSquareRegular.displayName = "ArrowDownTriangleSquareRegular";
var ArrowDownTriangleSquare_default = ArrowDownTriangleSquareRegular;
