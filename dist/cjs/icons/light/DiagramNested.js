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
var DiagramNested_exports = {};
__export(DiagramNested_exports, {
  default: () => DiagramNested_default
});
module.exports = __toCommonJS(DiagramNested_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramNestedLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 288H336C309.49 288 288 309.49 288 336V464C288 490.51 309.49 512 336 512H464C490.51 512 512 490.51 512 464V336C512 309.49 490.51 288 464 288ZM480 464C480 472.822 472.822 480 464 480H336C327.178 480 320 472.822 320 464V336C320 327.178 327.178 320 336 320H464C472.822 320 480 327.178 480 336V464ZM240 384H176C149.531 384 128 362.469 128 336V224H176C202.51 224 224 202.51 224 176V48C224 21.49 202.51 0 176 0H48C21.49 0 0 21.49 0 48V176C0 202.51 21.49 224 48 224H96V336C96 380.125 131.875 416 176 416H240C248.844 416 256 408.844 256 400S248.844 384 240 384ZM48 192C39.178 192 32 184.822 32 176V48C32 39.178 39.178 32 48 32H176C184.822 32 192 39.178 192 48V176C192 184.822 184.822 192 176 192H48Z" })
  }
));
DiagramNestedLight.displayName = "DiagramNestedLight";
var DiagramNested_default = DiagramNestedLight;
