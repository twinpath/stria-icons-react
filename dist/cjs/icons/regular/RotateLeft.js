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
var RotateLeft_exports = {};
__export(RotateLeft_exports, {
  default: () => RotateLeft_default
});
module.exports = __toCommonJS(RotateLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RotateLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M30.812 49.812C39.781 46.156 50.094 48.156 56.969 55.031L98.965 97.027C140.033 56.652 195.969 32 256 32C379.5 32 480 132.5 480 256S379.5 480 256 480C203.688 480 152.781 461.562 112.625 428.125C102.437 419.625 101.062 404.5 109.562 394.312C118.094 384.094 133.187 382.75 143.375 391.25C174.906 417.531 214.906 432 256 432C353.031 432 432 353.031 432 256S353.031 80 256 80C208.924 80 165.074 99.289 132.824 130.887L184.969 183.031C191.844 189.906 193.875 200.219 190.187 209.188C186.469 218.156 177.719 224 168 224H40C26.75 224 16 213.25 16 200V72C16 62.281 21.844 53.531 30.812 49.812Z" })
  }
));
RotateLeftRegular.displayName = "RotateLeftRegular";
var RotateLeft_default = RotateLeftRegular;
