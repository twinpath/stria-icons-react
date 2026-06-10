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
var PesoSign_exports = {};
__export(PesoSign_exports, {
  default: () => PesoSign_default
});
module.exports = __toCommonJS(PesoSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PesoSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 224H351.189C351.668 218.723 352 213.4 352 208S351.668 197.277 351.189 192H360C373.25 192 384 181.25 384 168S373.25 144 360 144H339.773C314.098 78.549 250.449 32 176 32H72C49.906 32 32 49.906 32 72V144H24C10.75 144 0 154.75 0 168S10.75 192 24 192H32V224H24C10.75 224 0 234.75 0 248S10.75 272 24 272H32V440C32 462.094 49.906 480 72 480S112 462.094 112 440V384H176C250.449 384 314.098 337.451 339.773 272H360C373.25 272 384 261.25 384 248S373.25 224 360 224ZM112 112H176C204.262 112 229.447 124.502 247.031 144H112V112ZM112 192H270.383C271.27 197.23 272 202.521 272 208S271.27 218.77 270.383 224H112V192ZM176 304H112V272H247.031C229.447 291.498 204.262 304 176 304Z" })
  }
));
PesoSignSolid.displayName = "PesoSignSolid";
var PesoSign_default = PesoSignSolid;
