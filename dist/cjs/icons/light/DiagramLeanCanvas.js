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
var DiagramLeanCanvas_exports = {};
__export(DiagramLeanCanvas_exports, {
  default: () => DiagramLeanCanvas_default
});
module.exports = __toCommonJS(DiagramLeanCanvas_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramLeanCanvasLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H576C611.348 480 640 451.346 640 416V96C640 60.654 611.348 32 576 32ZM576 64C593.645 64 608 78.355 608 96V336H512V64H576ZM400 224H480V336H400V224ZM480 64V192H400V64H480ZM368 64V336H272V64H368ZM240 336H160V224H240V336ZM240 64V192H160V64H240ZM64 64H128V336H32V96C32 78.355 46.355 64 64 64ZM64 448C46.355 448 32 433.645 32 416V368H304V448H64ZM576 448H336V368H608V416C608 433.645 593.645 448 576 448Z" })
  }
));
DiagramLeanCanvasLight.displayName = "DiagramLeanCanvasLight";
var DiagramLeanCanvas_default = DiagramLeanCanvasLight;
