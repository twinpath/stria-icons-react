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
var SquareSliders_exports = {};
__export(SquareSliders_exports, {
  default: () => SquareSliders_default
});
module.exports = __toCommonJS(SquareSliders_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareSlidersDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM384 336C384 353.673 369.673 368 352 368H320V384C320 401.673 305.673 416 288 416H288C270.327 416 256 401.673 256 384V368H96C78.327 368 64 353.673 64 336V336C64 318.327 78.327 304 96 304H256V288C256 270.327 270.327 256 288 256H288C305.673 256 320 270.327 320 288V304H352C369.673 304 384 318.327 384 336V336ZM384 176C384 193.673 369.673 208 352 208H192V224C192 241.673 177.673 256 160 256H160C142.327 256 128 241.673 128 224V208H96C78.327 208 64 193.673 64 176V176C64 158.327 78.327 144 96 144H128V128C128 110.327 142.327 96 160 96H160C177.673 96 192 110.327 192 128V144H352C369.673 144 384 158.327 384 176V176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 96C142.328 96 128 110.326 128 128V224C128 241.674 142.328 256 160 256C177.674 256 192 241.674 192 224V128C192 110.326 177.674 96 160 96ZM288 256C270.328 256 256 270.326 256 288V384C256 401.674 270.328 416 288 416C305.674 416 320 401.674 320 384V288C320 270.326 305.674 256 288 256Z" })
    ]
  }
));
SquareSlidersDuotone.displayName = "SquareSlidersDuotone";
var SquareSliders_default = SquareSlidersDuotone;
