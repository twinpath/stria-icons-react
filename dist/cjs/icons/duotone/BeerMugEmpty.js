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
var BeerMugEmpty_exports = {};
__export(BeerMugEmpty_exports, {
  default: () => BeerMugEmpty_default
});
module.exports = __toCommonJS(BeerMugEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BeerMugEmptyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 96H384V64C384 46.326 369.674 32 352 32H64C46.326 32 32 46.326 32 64V416C32 451.346 60.654 480 96 480H320C355.346 480 384 451.346 384 416V384L464.658 347.984C493.455 335.127 512 306.537 512 275V176C512 131.816 476.184 96 432 96ZM160 368C160 376.875 152.875 384 144 384S128 376.875 128 368V144C128 135.125 135.125 128 144 128S160 135.125 160 144V368ZM224 368C224 376.875 216.875 384 208 384S192 376.875 192 368V144C192 135.125 199.125 128 208 128S224 135.125 224 144V368ZM288 368C288 376.875 280.875 384 272 384S256 376.875 256 368V144C256 135.125 263.125 128 272 128S288 135.125 288 144V368ZM448 275C448 281.25 444.25 287 438.5 289.625L384 313.875V160H432C440.875 160 448 167.125 448 176V275Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 128C135.125 128 128 135.125 128 144V368C128 376.875 135.125 384 144 384S160 376.875 160 368V144C160 135.125 152.875 128 144 128ZM208 128C199.125 128 192 135.125 192 144V368C192 376.875 199.125 384 208 384S224 376.875 224 368V144C224 135.125 216.875 128 208 128ZM272 128C263.125 128 256 135.125 256 144V368C256 376.875 263.125 384 272 384S288 376.875 288 368V144C288 135.125 280.875 128 272 128Z" })
    ]
  }
));
BeerMugEmptyDuotone.displayName = "BeerMugEmptyDuotone";
var BeerMugEmpty_default = BeerMugEmptyDuotone;
