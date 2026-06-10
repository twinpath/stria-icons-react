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
var Films_exports = {};
__export(Films_exports, {
  default: () => Films_default
});
module.exports = __toCommonJS(Films_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilmsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 448H96C60.654 448 32 419.346 32 384V112C32 103.164 24.836 96 16 96S0 103.164 0 112V384C0 437.02 42.98 480 96 480H464C472.836 480 480 472.836 480 464S472.836 448 464 448ZM512 32H160C124.654 32 96 60.654 96 96V320C96 355.346 124.654 384 160 384H512C547.348 384 576 355.346 576 320V96C576 60.654 547.348 32 512 32ZM192 352H160C142.355 352 128 337.645 128 320V288H192V352ZM192 256H128V160H192V256ZM192 128H128V96C128 78.355 142.355 64 160 64H192V128ZM448 352H224V224H448V352ZM448 192H224V64H448V192ZM544 320C544 337.645 529.645 352 512 352H480V288H544V320ZM544 256H480V160H544V256ZM544 128H480V64H512C529.645 64 544 78.355 544 96V128Z" })
  }
));
FilmsLight.displayName = "FilmsLight";
var Films_default = FilmsLight;
