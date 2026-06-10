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
var CookieBite_exports = {};
__export(CookieBite_exports, {
  default: () => CookieBite_default
});
module.exports = __toCommonJS(CookieBite_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CookieBiteDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M494.605 255.883C428.978 255.063 376.009 201.744 376.009 136.003C310.265 136.003 256.944 83.035 256.241 17.411C230.576 13.544 204.443 17.645 181.474 29.481L116.668 62.41C93.347 74.363 74.362 93.347 62.409 116.667L29.596 181.236C17.643 204.673 13.424 231.157 17.525 257.172L28.893 328.655C32.994 354.553 45.182 378.459 63.698 396.975L115.027 448.302C133.543 466.817 157.333 479.004 183.232 483.106L255.069 494.473C280.968 498.574 307.336 494.356 330.656 482.52L395.462 449.474C418.783 437.638 437.768 418.654 449.604 395.334L482.534 330.765C494.253 307.679 498.472 281.43 494.605 255.883ZM176.007 367.996C158.382 367.996 144.007 353.622 144.007 335.998S158.382 303.999 176.007 303.999S208.007 318.373 208.007 335.998S193.632 367.996 176.007 367.996ZM208.007 208.002C190.382 208.002 176.007 193.628 176.007 176.003S190.382 144.005 208.007 144.005S240.007 158.379 240.007 176.003S225.632 208.002 208.007 208.002ZM368.007 335.998C350.382 335.998 336.007 321.623 336.007 303.999S350.382 272 368.007 272S400.007 286.374 400.007 303.999S385.632 335.998 368.007 335.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 303.999C158.375 303.999 144 318.373 144 335.998S158.375 367.996 176 367.996S208 353.622 208 335.998S193.625 303.999 176 303.999ZM208 144.005C190.375 144.005 176 158.379 176 176.003S190.375 208.002 208 208.002S240 193.628 240 176.003S225.625 144.005 208 144.005ZM368 272C350.375 272 336 286.374 336 303.999S350.375 335.998 368 335.998S400 321.623 400 303.999S385.625 272 368 272Z" })
    ]
  }
));
CookieBiteDuotone.displayName = "CookieBiteDuotone";
var CookieBite_default = CookieBiteDuotone;
