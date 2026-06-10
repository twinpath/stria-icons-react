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
var Cubes_exports = {};
__export(Cubes_exports, {
  default: () => Cubes_default
});
module.exports = __toCommonJS(Cubes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CubesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M556.166 258.189L440 213.013V78.039C440 65.222 432.132 53.719 420.188 49.074L299.592 2.176C295.863 0.725 291.929 0 287.996 0C284.062 0 280.128 0.725 276.399 2.176L155.837 49.061C143.878 53.711 136 65.229 136 78.062V213.009L19.837 258.185C7.878 262.836 0 274.353 0 287.186V433.864C0 446.695 7.876 458.21 19.832 462.86L140.75 509.89C144.375 511.297 148.188 512 152 512S159.625 511.297 163.281 509.875L288 461.362L412.75 509.89C416.375 511.297 420.188 512 424 512S431.625 511.297 435.281 509.875L556.167 462.86C568.124 458.21 576 446.695 576 433.864V287.186C576 274.355 568.124 262.84 556.166 258.189ZM152 241.133L244.445 276.61L152 312.565L60.158 276.847L152 241.133ZM168 340.684L272 300.233V433.27L168 473.936V340.684ZM304 300.233L408 340.684V473.701L304 433.25V300.233ZM424 312.565L332.158 276.847L424 241.133L516.445 276.61L424 312.565ZM408.52 212.808L304 253.455V131.56L408.051 91.089L408.52 212.808ZM288 32.009L380.445 67.486L288 103.441L196.158 67.723L288 32.009ZM272 131.56V253.459L167.955 212.996L167.484 90.908L272 131.56ZM31.484 300.032L136 340.684V473.784L32 433.864L31.484 300.032ZM440 473.934V340.684L544.051 300.214L544.562 433.035L440 473.934Z " })
  }
));
CubesLight.displayName = "CubesLight";
var Cubes_default = CubesLight;
