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
var ArrowRotateForward_exports = {};
__export(ArrowRotateForward_exports, {
  default: () => ArrowRotateForward_default
});
module.exports = __toCommonJS(ArrowRotateForward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRotateForwardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 40V200C496 213.25 485.25 224 472 224H312C298.75 224 288 213.25 288 200S298.75 176 312 176H412.463C382.775 118.281 322.545 80 256 80C158.969 80 80 158.969 80 256S158.969 432 256 432C297.094 432 337.094 417.531 368.625 391.25C378.781 382.75 393.937 384.094 402.437 394.312C410.937 404.5 409.562 419.625 399.375 428.125C359.219 461.562 308.312 480 256 480C132.5 480 32 379.5 32 256S132.5 32 256 32C335.848 32 408.262 75.566 448 142.094V40C448 26.75 458.75 16 472 16S496 26.75 496 40Z" })
  }
));
ArrowRotateForwardRegular.displayName = "ArrowRotateForwardRegular";
var ArrowRotateForward_default = ArrowRotateForwardRegular;
