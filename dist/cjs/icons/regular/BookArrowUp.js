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
var BookArrowUp_exports = {};
__export(BookArrowUp_exports, {
  default: () => BookArrowUp_default
});
module.exports = __toCommonJS(BookArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookArrowUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.969 248.969C346.344 239.594 346.344 224.406 336.969 215.031L256.969 135.031C247.594 125.656 232.406 125.656 223.031 135.031L143.031 215.031C133.656 224.406 133.656 239.594 143.031 248.969S167.594 258.344 176.969 248.969L216 209.938V488C216 501.25 226.75 512 240 512S264 501.25 264 488V209.938L303.031 248.969C307.719 253.656 313.844 256 320 256S332.281 253.656 336.969 248.969ZM424 400C437.25 400 448 389.25 448 376V24C448 10.744 437.254 0 424 0H80C35.816 0 0 35.816 0 80V432C0 476.182 35.816 512 80 512H152C165.254 512 176 501.254 176 488C176 474.744 165.254 464 152 464H80C62.359 464 48 449.656 48 432S62.359 400 80 400H152C165.254 400 176 389.254 176 376C176 362.744 165.254 352 152 352H80C68.625 352 57.797 354.375 48 358.688V80C48 62.326 62.328 48 80 48H400V352H328C314.746 352 304 362.744 304 376C304 389.254 314.746 400 328 400H368V464H328C314.746 464 304 474.744 304 488C304 501.254 314.746 512 328 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464H416V400H424Z" })
  }
));
BookArrowUpRegular.displayName = "BookArrowUpRegular";
var BookArrowUp_default = BookArrowUpRegular;
