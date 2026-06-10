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
var InputNumeric_exports = {};
__export(InputNumeric_exports, {
  default: () => InputNumeric_default
});
module.exports = __toCommonJS(InputNumeric_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InputNumericDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576.002 64H63.998C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 63.998 448H576.002C611.346 448 640 419.348 640 384V128C640 92.654 611.346 64 576.002 64ZM576.002 384H63.998V128H576.002V384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 352H200C213.254 352 224 341.254 224 328C224 314.744 213.254 304 200 304H184V176C184 167.162 176.836 160 168 160H131.445C123.195 160 115.523 164.238 111.131 171.223C101.078 187.205 112.566 208 131.445 208H136V304H120C106.746 304 96 314.744 96 328C96 341.254 106.746 352 120 352ZM252.906 237.281C264.641 243.391 279.156 238.875 285.281 227.094L290.219 217.641C293.312 211.688 298.141 208 302.844 208C313.453 208 317.859 215.547 319.25 218.797C320.656 222.047 323.125 230.437 315.828 238.156L246.547 311.531C239.969 318.5 238.172 328.688 241.953 337.5C245.75 346.312 254.422 352 264 352H352C365.25 352 376 341.25 376 328S365.25 304 352 304H319.672L350.734 271.109C369.094 251.672 373.906 224.328 363.312 199.781C352.75 175.25 329.562 160 302.844 160C280.172 160 259.016 173.594 247.641 195.469L242.719 204.906C236.594 216.656 241.156 231.156 252.906 237.281Z" })
    ]
  }
));
InputNumericDuotone.displayName = "InputNumericDuotone";
var InputNumeric_default = InputNumericDuotone;
