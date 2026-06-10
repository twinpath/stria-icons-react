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
var RingsWedding_exports = {};
__export(RingsWedding_exports, {
  default: () => RingsWedding_default
});
module.exports = __toCommonJS(RingsWedding_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RingsWeddingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M371.921 147.75C382.046 166.25 389.672 186.125 394.297 206.75C435.424 228 463.925 270.5 463.925 320C463.925 390.75 406.673 448 335.919 448S207.913 390.75 207.913 320C207.913 265.375 242.414 218.875 290.792 200.5C299.292 217.75 303.792 236.75 303.917 256C303.917 293.375 287.542 326.75 261.915 350.125C268.166 365.375 279.041 378.25 292.917 387.125C337.669 347.375 359.045 287.5 349.67 228.375C340.294 169.125 301.417 118.875 246.54 94.875L287.917 28.625L232.414 -16H119.408L63.905 28.625L105.157 94.875C29.029 128.375 -13.348 210.625 3.777 292.125S92.657 431.875 175.911 432C183.536 431.875 191.162 431.375 198.787 430.125C247.29 490.625 329.794 512.25 401.797 483.25C473.676 454.375 518.178 381.625 511.303 304.375S447.8 163.5 371.921 147.75ZM127.909 39.375L136.409 32H215.413L223.913 39.375L198.412 81.625C183.536 79.5 168.286 79.5 153.41 81.625L127.909 39.375ZM47.905 256C48.03 185.375 105.282 128.125 175.911 128C208.913 128 238.789 140.875 261.54 161.5C201.662 189.5 159.91 249.5 159.91 320C159.91 341.75 164.035 363.375 171.911 383.625C103.282 381.5 47.905 325.25 47.905 256Z" })
  }
));
RingsWeddingRegular.displayName = "RingsWeddingRegular";
var RingsWedding_default = RingsWeddingRegular;
