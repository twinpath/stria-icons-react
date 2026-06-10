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
var Image_exports = {};
__export(Image_exports, {
  default: () => Image_default
});
module.exports = __toCommonJS(Image_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImageDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 32H48C21.49 32 0 53.492 0 80V432C0 458.508 21.49 480 48 480H464C490.51 480 512 458.508 512 432V80C512 53.492 490.51 32 464 32ZM112 96C138.51 96 160 117.492 160 144S138.51 192 112 192S64 170.508 64 144S85.49 96 112 96ZM446.121 407.551C443.336 412.754 437.914 416 432.014 416H82.013C75.992 416 70.48 412.621 67.752 407.25C65.021 401.883 65.537 395.438 69.086 390.574L139.086 294.574C142.098 290.441 146.902 288 152.014 288S161.93 290.441 164.941 294.574L197.396 339.086L290.701 199.125C293.668 194.672 298.664 192 304.014 192S314.359 194.672 317.326 199.125L445.326 391.125C448.6 396.035 448.904 402.348 446.121 407.551Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M446.108 407.551C443.323 412.754 437.901 416 432 416H82C75.979 416 70.467 412.621 67.739 407.25C65.008 401.883 65.524 395.438 69.073 390.574L139.073 294.574C142.084 290.441 146.889 288 152 288S161.916 290.441 164.928 294.574L197.383 339.086L290.688 199.125C293.655 194.672 298.651 192 304 192S314.346 194.672 317.313 199.125L445.313 391.125C448.586 396.035 448.891 402.348 446.108 407.551Z" })
    ]
  }
));
ImageDuotone.displayName = "ImageDuotone";
var Image_default = ImageDuotone;
