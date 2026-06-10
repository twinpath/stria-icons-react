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
var PersonSkating_exports = {};
__export(PersonSkating_exports, {
  default: () => PersonSkating_default
});
module.exports = __toCommonJS(PersonSkating_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSkatingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M399.994 448C391.242 448 383.99 455.25 383.99 464S376.74 480 367.988 480H271.975C263.225 480 255.973 487.25 255.973 496S263.225 512 271.975 512H367.988C394.492 512 415.996 490.5 415.996 464C415.996 455.25 408.744 448 399.994 448ZM117.703 456.625C111.578 462.75 101.326 462.875 95.201 456.625L27.191 388.75C21.064 382.5 10.814 382.5 4.688 388.75C-1.563 394.875 -1.563 405.125 4.688 411.25L72.572 479.25C81.949 488.625 94.201 493.25 106.578 493.25C118.828 493.25 131.205 488.5 140.457 479.25C146.707 473 146.707 462.75 140.457 456.625C134.207 450.375 124.08 450.25 117.703 456.625ZM399.994 0C373.49 0 351.986 21.5 351.986 48S373.49 96 399.994 96C426.496 96 448 74.5 448 48S426.496 0 399.994 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M174.013 276.75L80.376 370.5C67.875 383 67.875 403.25 80.376 415.75C86.501 421.875 94.753 425.125 102.878 425.125C111.13 425.125 119.382 422 125.507 415.75L217.396 323.75L187.265 293.625C182.265 288.625 177.89 282.875 174.013 276.75ZM332.787 96H128.132C110.38 96 96.128 110.25 96.128 128S110.38 160 128.132 160H233.648L213.519 177.25C200.017 188.75 191.892 205.625 191.267 223.25C190.517 241.125 197.392 258.5 209.894 271L288.156 349.25V432C288.156 449.75 302.408 464 320.16 464S352.164 449.75 352.164 432V342.625C352.164 330 347.039 317.625 338.037 308.75L277.029 247.75C277.529 247.25 278.279 247.125 278.779 246.625L361.041 164.25C372.542 152.75 375.917 135.75 369.791 120.75C363.541 105.75 349.039 96 332.787 96Z" })
    ]
  }
));
PersonSkatingDuotone.displayName = "PersonSkatingDuotone";
var PersonSkating_default = PersonSkatingDuotone;
