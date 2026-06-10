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
var SquareUp_exports = {};
__export(SquareUp_exports, {
  default: () => SquareUp_default
});
module.exports = __toCommonJS(SquareUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 480H384C419.346 480 448 451.348 448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.348 28.654 480 64 480ZM16 96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96ZM131.316 256H176V360C176 373.256 186.746 384 200 384H248C261.254 384 272 373.256 272 360V256H316.684C338.066 256 348.773 230.148 333.654 215.029L240.971 122.346C236.283 117.66 230.143 115.316 224 115.316S211.717 117.66 207.029 122.346L114.346 215.029C99.227 230.148 109.934 256 131.316 256ZM125.66 226.344L218.344 133.66C220.383 131.621 222.762 131.316 224 131.316S227.617 131.621 229.656 133.66L322.34 226.344C325.752 229.756 324.689 233.576 324.076 235.062C323.461 236.547 321.508 240 316.684 240H256V360C256 364.412 252.412 368 248 368H200C195.588 368 192 364.412 192 360V240H131.316C126.492 240 124.539 236.547 123.924 235.062C123.311 233.576 122.248 229.756 125.66 226.344Z" })
  }
));
SquareUpThin.displayName = "SquareUpThin";
var SquareUp_default = SquareUpThin;
