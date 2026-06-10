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
var Shelves_exports = {};
__export(Shelves_exports, {
  default: () => Shelves_default
});
module.exports = __toCommonJS(Shelves_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShelvesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 0H608C590.4 0 576 14.4 576 32V160H64V32C64 14.4 49.6 0 32 0H32C14.4 0 0 14.4 0 32V512H64V480H576V512H640V32C640 14.4 625.6 0 608 0ZM576 416H64V224H576V416ZM368 128H464C472.75 128 480 120.75 480 112V16C480 7.25 472.75 0 464 0H368C359.25 0 352 7.25 352 16V112C352 120.75 359.25 128 368 128ZM112 384H208C216.75 384 224 376.75 224 368V272C224 263.25 216.75 256 208 256H112C103.25 256 96 263.25 96 272V368C96 376.75 103.25 384 112 384ZM272 384H368C376.75 384 384 376.75 384 368V272C384 263.25 376.75 256 368 256H272C263.25 256 256 263.25 256 272V368C256 376.75 263.25 384 272 384Z" })
  }
));
ShelvesSolid.displayName = "ShelvesSolid";
var Shelves_default = ShelvesSolid;
