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
var ArrowUpFromSquare_exports = {};
__export(ArrowUpFromSquare_exports, {
  default: () => ArrowUpFromSquare_default
});
module.exports = __toCommonJS(ArrowUpFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpFromSquareLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 160H368C359.156 160 352 167.156 352 176S359.156 192 368 192H400C408.812 192 416 199.188 416 208V464C416 472.812 408.812 480 400 480H48C39.188 480 32 472.812 32 464V208C32 199.188 39.188 192 48 192H80C88.844 192 96 184.844 96 176S88.844 160 80 160H48C21.531 160 0 181.531 0 208V464C0 490.469 21.531 512 48 512H400C426.469 512 448 490.469 448 464V208C448 181.531 426.469 160 400 160ZM128 128C132.094 128 136.188 126.438 139.312 123.312L208 54.625V336C208 344.844 215.156 352 224 352S240 344.844 240 336V54.625L308.688 123.312C311.812 126.438 315.906 128 320 128C329.139 128 336 120.527 336 112C336 107.906 334.438 103.812 331.312 100.688L235.312 4.688C232.188 1.562 228.094 0 224 0S215.812 1.562 212.688 4.688L116.688 100.688C113.562 103.812 112 107.906 112 112C112 120.527 118.865 128 128 128Z " })
  }
));
ArrowUpFromSquareLight.displayName = "ArrowUpFromSquareLight";
var ArrowUpFromSquare_default = ArrowUpFromSquareLight;
