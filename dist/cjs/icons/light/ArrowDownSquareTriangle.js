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
var ArrowDownSquareTriangle_exports = {};
__export(ArrowDownSquareTriangle_exports, {
  default: () => ArrowDownSquareTriangle_default
});
module.exports = __toCommonJS(ArrowDownSquareTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownSquareTriangleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.006 223.988H432.008C458.518 223.988 480.008 202.5 480.008 175.988V80C480.008 53.492 458.518 32 432.008 32H336.006C309.496 32 288.006 53.492 288.006 80V175.988C288.006 202.5 309.496 223.988 336.006 223.988ZM320.006 80C320.006 71.176 327.184 64 336.006 64H432.008C440.83 64 448.008 71.176 448.008 80V175.988C448.008 184.812 440.83 191.988 432.008 191.988H336.006C327.184 191.988 320.006 184.812 320.006 175.988V80ZM492.133 438.883L409.006 301.77C403.443 292.582 393.756 287.988 384.068 287.988S364.693 292.582 359.131 301.77L275.881 438.883C264.881 457.133 278.631 480.008 300.881 480.008H467.131C489.383 480.008 503.133 457.133 492.133 438.883ZM307.777 448.008L384.066 322.359L460.244 448.008H307.777ZM224 352C219.906 352 215.812 353.562 212.687 356.688L144 425.375V48C144 39.156 136.844 32 128 32S112 39.156 112 48V425.375L43.312 356.688C37.062 350.438 26.937 350.438 20.687 356.688S14.437 373.063 20.687 379.312L116.687 475.312C122.937 481.562 133.063 481.562 139.312 475.312L235.312 379.312C241.562 373.062 241.562 362.937 235.312 356.688C232.187 353.562 228.094 352 224 352Z" })
  }
));
ArrowDownSquareTriangleLight.displayName = "ArrowDownSquareTriangleLight";
var ArrowDownSquareTriangle_default = ArrowDownSquareTriangleLight;
