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
var BookQuran_exports = {};
__export(BookQuran_exports, {
  default: () => BookQuran_default
});
module.exports = __toCommonJS(BookQuran_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookQuranRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M248.375 270.875L244.875 271C205.75 271 173.875 239.125 173.875 200S205.75 129 244.875 129L248.375 129.125C254.75 129.125 260.375 124.5 261.75 118.25C263 111.625 259.5 105.125 253.125 102.625C241.25 98.25 229 96 216.625 96C159.375 96 112.625 142.625 112.625 200S159.25 304 216.625 304C229 304 241.25 301.75 252.75 297.5C258.25 295.625 262 290.375 262 284.5C262 277 255.875 270.875 248.375 270.875ZM304.125 172L291.375 146.125C290 143.375 286 143.375 284.625 146.125L271.875 172L243.25 176.25C240.125 176.625 238.875 180.375 241.125 182.625L261.875 202.75L257 231.25C256.5 234.25 259.625 236.625 262.375 235.25L288 221.75L313.625 235.25C316.375 236.625 319.5 234.375 319 231.25L314.125 202.75L334.875 182.625C337.125 180.375 335.875 176.625 332.75 176.25L304.125 172ZM368 0H24C10.75 0 0 10.75 0 24V376C0 389.25 10.75 400 24 400H32V464H24C10.75 464 0 474.75 0 488S10.75 512 24 512H368C412.109 512 448 476.125 448 432V80C448 35.875 412.109 0 368 0ZM368 464H80V400H368C385.641 400 400 414.344 400 432S385.641 464 368 464ZM400 358.688C390.203 354.375 379.375 352 368 352H48V48H368C385.641 48 400 62.344 400 80V358.688Z" })
  }
));
BookQuranRegular.displayName = "BookQuranRegular";
var BookQuran_default = BookQuranRegular;
