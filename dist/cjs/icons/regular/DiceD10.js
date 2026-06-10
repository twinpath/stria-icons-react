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
var DiceD10_exports = {};
__export(DiceD10_exports, {
  default: () => DiceD10_default
});
module.exports = __toCommonJS(DiceD10_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD10Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 282.595C512 275.005 509.32 267.379 503.885 261.25L279.774 10.625C273.524 3.5 264.775 0 256.025 0S238.526 3.5 232.276 10.625L8.165 261.25C2.685 267.365 0 274.971 0 282.544C0 291.381 3.655 300.173 10.79 306.5L234.901 504C240.901 509.375 248.526 512 256.025 512C263.525 512 271.149 509.375 277.149 504L501.26 306.5C508.381 300.185 512 291.414 512 282.595ZM256.025 287.875L189.904 243.75L256.025 89.625L322.146 243.75L256.025 287.875ZM142.657 232.25L85.785 246.5L183.279 137.375L142.657 232.25ZM155.531 278.5L232.027 329.5V437.5L74.661 298.75L155.531 278.5ZM280.024 329.5L356.519 278.5L437.389 298.75L280.024 437.5V329.5ZM369.393 232.25L328.771 137.375L426.265 246.5L369.393 232.25Z " })
  }
));
DiceD10Regular.displayName = "DiceD10Regular";
var DiceD10_default = DiceD10Regular;
