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
var ShareFromSquare_exports = {};
__export(ShareFromSquare_exports, {
  default: () => ShareFromSquare_default
});
module.exports = __toCommonJS(ShareFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareFromSquareThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.986 352C435.58 352 431.986 355.578 431.986 360V440C431.986 470.875 406.863 496 375.988 496H71.998C41.123 496 16 470.875 16 440V135.992C16 105.113 41.123 79.988 71.998 79.988H256C260.406 79.988 264 76.41 264 71.988S260.406 63.988 256 63.988H71.998C32.311 63.988 0 96.285 0 135.992V440C0 479.703 32.311 512 71.998 512H375.988C415.676 512 447.986 479.703 447.986 440V360C447.986 355.578 444.393 352 439.986 352ZM573.328 138.008L421.328 1.996C418.078 -0.879 413.031 -0.629 410.031 2.621C407.094 5.934 407.375 10.996 410.672 13.934L547.059 135.977H344C269.016 135.977 208 196.984 208 271.992V344C208 348.406 211.578 352 216 352S224 348.406 224 344V271.992C224 205.828 277.828 151.98 344 151.98H547.059L410.672 274.023C407.375 276.961 407.094 282.023 410.031 285.336C411.625 287.086 413.812 287.992 416 287.992C417.906 287.992 419.812 287.305 421.328 285.961L573.328 149.945C575.031 148.414 576 146.258 576 143.977S575.031 139.539 573.328 138.008Z" })
  }
));
ShareFromSquareThin.displayName = "ShareFromSquareThin";
var ShareFromSquare_default = ShareFromSquareThin;
