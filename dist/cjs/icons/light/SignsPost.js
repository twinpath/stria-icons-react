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
var SignsPost_exports = {};
__export(SignsPost_exports, {
  default: () => SignsPost_default
});
module.exports = __toCommonJS(SignsPost_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignsPostLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M441.312 192C449.812 192 457.937 187.75 463.937 180.25L507.187 126.125C513.437 118.375 513.437 105.625 507.187 97.875L463.937 43.75C457.937 36.25 449.812 32 441.312 32H271.937V16C271.937 7.2 264.738 0 255.937 0H255.937C247.137 0 239.937 7.2 239.937 16V32H55.937C42.688 32 31.937 45.375 31.937 62V162C31.937 178.625 42.688 192 55.937 192H239.937V224H70.562C62.062 224 53.937 228.25 47.937 235.75L4.688 289.875C-1.563 297.625 -1.563 310.375 4.688 318.125L47.937 372.25C53.937 379.75 62.062 384 70.562 384H239.937V496C239.937 504.8 247.137 512 255.937 512H255.937C264.738 512 271.937 504.8 271.937 496V384H455.937C469.187 384 479.937 370.625 479.937 354V254C479.937 237.375 469.187 224 455.937 224H271.937V192H441.312ZM447.688 352H72.688L34.312 304L72.688 256H447.938L447.688 352ZM64.187 64H439.187L477.563 112L439.187 160H63.937L64.187 64Z" })
  }
));
SignsPostLight.displayName = "SignsPostLight";
var SignsPost_default = SignsPostLight;
