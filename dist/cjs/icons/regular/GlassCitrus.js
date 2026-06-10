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
var GlassCitrus_exports = {};
__export(GlassCitrus_exports, {
  default: () => GlassCitrus_default
});
module.exports = __toCommonJS(GlassCitrus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GlassCitrusRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368.007 0C305.384 0 252.636 40.25 232.888 96H285.386C302.009 67.5 332.632 48 368.007 48C421.003 48 464.001 91 464.001 144C464.001 194.125 425.378 234.875 376.38 239.125L371.505 287.625C449.378 285.75 511.999 222.375 511.999 144C511.999 64.5 447.503 0 368.007 0ZM320.009 128H32.023C23.023 128 14.398 131.875 8.273 138.5C2.273 145.25 -0.725 154.125 0.15 163.125L29.271 454.367C32.542 487.084 60.071 512 92.95 512H259.077C291.956 512 319.487 487.084 322.759 454.367L351.882 163.125C352.757 154.125 349.757 145.25 343.757 138.5C337.632 131.875 329.007 128 320.009 128ZM274.997 449.592C274.175 457.805 267.331 464 259.077 464H92.95C84.696 464 77.853 457.805 77.032 449.592L62.474 304H289.556L274.997 449.592ZM294.355 256H57.675L49.675 176H302.355L294.355 256Z" })
  }
));
GlassCitrusRegular.displayName = "GlassCitrusRegular";
var GlassCitrus_default = GlassCitrusRegular;
