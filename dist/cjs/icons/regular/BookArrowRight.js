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
var BookArrowRight_exports = {};
__export(BookArrowRight_exports, {
  default: () => BookArrowRight_default
});
module.exports = __toCommonJS(BookArrowRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookArrowRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632.969 191.031L552.969 111.031C543.594 101.656 528.406 101.656 519.031 111.031S509.656 135.594 519.031 144.969L558.062 184H280C266.75 184 256 194.75 256 208S266.75 232 280 232H558.062L519.031 271.031C514.344 275.719 512 281.844 512 288S514.344 300.281 519.031 304.969C528.406 314.344 543.594 314.344 552.969 304.969L632.969 224.969C642.344 215.594 642.344 200.406 632.969 191.031ZM424 288C410.746 288 400 298.744 400 312V352H80C68.625 352 57.797 354.375 48 358.688V80C48 62.326 62.328 48 80 48H400V104C400 117.254 410.746 128 424 128S448 117.254 448 104V24C448 10.744 437.254 0 424 0H80C35.816 0 0 35.816 0 80V432C0 476.182 35.816 512 80 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464H416V400H424C437.25 400 448 389.25 448 376V312C448 298.744 437.254 288 424 288ZM368 464H80C62.359 464 48 449.656 48 432S62.359 400 80 400H368V464Z" })
  }
));
BookArrowRightRegular.displayName = "BookArrowRightRegular";
var BookArrowRight_default = BookArrowRightRegular;
