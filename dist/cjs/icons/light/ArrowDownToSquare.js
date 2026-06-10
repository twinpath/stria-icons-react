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
var ArrowDownToSquare_exports = {};
__export(ArrowDownToSquare_exports, {
  default: () => ArrowDownToSquare_default
});
module.exports = __toCommonJS(ArrowDownToSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownToSquareLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 128H336C327.156 128 320 135.156 320 144S327.156 160 336 160H400C408.812 160 416 167.188 416 176V464C416 472.812 408.812 480 400 480H48C39.188 480 32 472.812 32 464V176C32 167.188 39.188 160 48 160H112C120.844 160 128 152.844 128 144S120.844 128 112 128H48C21.531 128 0 149.531 0 176V464C0 490.469 21.531 512 48 512H400C426.469 512 448 490.469 448 464V176C448 149.531 426.469 128 400 128ZM116.688 260.688C110.438 266.938 110.438 277.063 116.688 283.312L212.688 379.312C215.812 382.438 219.906 384 224 384S232.188 382.438 235.312 379.312L331.312 283.312C337.562 277.062 337.562 266.937 331.312 260.688S314.937 254.438 308.688 260.688L240 329.375V16C240 7.156 232.844 0 224 0S208 7.156 208 16V329.375L139.312 260.688C133.062 254.438 122.938 254.438 116.688 260.688Z" })
  }
));
ArrowDownToSquareLight.displayName = "ArrowDownToSquareLight";
var ArrowDownToSquare_default = ArrowDownToSquareLight;
