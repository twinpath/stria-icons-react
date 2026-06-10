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
var ArrowUpTriangleSquare_exports = {};
__export(ArrowUpTriangleSquare_exports, {
  default: () => ArrowUpTriangleSquare_default
});
module.exports = __toCommonJS(ArrowUpTriangleSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpTriangleSquareLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M492.133 182.875L409.006 45.762C403.443 36.574 393.756 31.98 384.068 31.98S364.693 36.574 359.131 45.762L275.881 182.875C264.881 201.125 278.631 224 300.881 224H467.131C489.383 224 503.133 201.125 492.133 182.875ZM307.777 192L384.066 66.352L460.244 192H307.777ZM432.008 287.992H336.006C309.496 287.992 288.006 309.484 288.006 335.992V431.98C288.006 458.492 309.496 479.98 336.006 479.98H432.008C458.518 479.98 480.008 458.492 480.008 431.98V335.992C480.008 309.484 458.518 287.992 432.008 287.992ZM448.008 431.98C448.008 440.805 440.83 447.98 432.008 447.98H336.006C327.184 447.98 320.006 440.805 320.006 431.98V335.992C320.006 327.168 327.184 319.992 336.006 319.992H432.008C440.83 319.992 448.008 327.168 448.008 335.992V431.98ZM139.312 36.688C133.062 30.438 122.937 30.438 116.688 36.688L20.688 132.688C14.438 138.938 14.438 149.063 20.688 155.312S37.063 161.562 43.312 155.312L112 86.625V464C112 472.844 119.156 480 128 480S144 472.844 144 464V86.625L212.688 155.312C215.812 158.438 219.906 160 224 160S232.188 158.438 235.312 155.312C241.562 149.062 241.562 138.937 235.312 132.688L139.312 36.688Z" })
  }
));
ArrowUpTriangleSquareLight.displayName = "ArrowUpTriangleSquareLight";
var ArrowUpTriangleSquare_default = ArrowUpTriangleSquareLight;
