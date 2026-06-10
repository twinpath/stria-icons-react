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
var SquareShareNodes_exports = {};
__export(SquareShareNodes_exports, {
  default: () => SquareShareNodes_default
});
module.exports = __toCommonJS(SquareShareNodes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareShareNodesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM192 256C192 257.684 191.631 259.266 191.504 260.916L277.922 304.125C289.193 294.211 303.809 288 320 288C355.348 288 384 316.654 384 352S355.348 416 320 416C284.654 416 256 387.346 256 352C256 350.316 256.369 348.734 256.496 347.084L170.078 303.875C158.807 313.789 144.191 320 128 320C92.654 320 64 291.346 64 256S92.654 192 128 192C144.191 192 158.807 198.211 170.078 208.125L256.496 164.916C256.369 163.266 256 161.684 256 160C256 124.654 284.654 96 320 96C355.348 96 384 124.654 384 160S355.348 224 320 224C303.809 224 289.193 217.789 277.922 207.875L191.504 251.084C191.631 252.734 192 254.316 192 256Z" })
  }
));
SquareShareNodesSolid.displayName = "SquareShareNodesSolid";
var SquareShareNodes_default = SquareShareNodesSolid;
