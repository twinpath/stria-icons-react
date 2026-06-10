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
var BookTanakh_exports = {};
__export(BookTanakh_exports, {
  default: () => BookTanakh_default
});
module.exports = __toCommonJS(BookTanakh_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookTanakhRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M306.625 200L334.25 153.625C337.999 147.5 337.999 139.75 334.5 133.5C331 127.25 324.25 123.375 317.125 123.375H260.75L233 77.125C229.5 71.125 223 67.5 216 67.5S202.375 71.125 198.75 77.25L171.125 123.5H114.875C107.625 123.375 101 127.25 97.375 133.625C93.75 139.75 93.875 147.5 97.625 153.625L125.375 200L97.75 246.375C93.999 252.5 93.999 260.25 97.5 266.5C101 272.75 107.75 276.625 114.875 276.625H171.25L199 322.875C202.5 328.875 209 332.5 216 332.5C223.125 332.5 229.625 328.75 233.25 322.75L260.875 276.5H317.125C324.375 276.625 331 272.75 334.625 266.375C338.25 260.25 338.125 252.5 334.375 246.375L306.625 200ZM309.999 147.375L292.625 176.625L275.125 147.5L309.999 147.375ZM216 95.375L232.75 123.5H199.125L216 95.375ZM121.999 147.5H156.875L139.375 176.625L121.999 147.5ZM121.999 252.5L139.5 223.375L157 252.5H121.999ZM216 304.625L199.25 276.5H232.75L216 304.625ZM247.125 252.5H184.875L153.375 200L184.875 147.5H247.125L278.625 200L247.125 252.5ZM275.125 252.5L292.625 223.375L309.999 252.5H275.125ZM368 0H24C10.75 0 0 10.75 0 24V376C0 389.25 10.75 400 24 400H32V464H24C10.75 464 0 474.75 0 488S10.75 512 24 512H368C412.109 512 448 476.125 448 432V80C448 35.875 412.109 0 368 0ZM368 464H80V400H368C385.641 400 400 414.344 400 432S385.641 464 368 464ZM400 358.688C390.203 354.375 379.375 352 368 352H48V48H368C385.641 48 400 62.344 400 80V358.688Z" })
  }
));
BookTanakhRegular.displayName = "BookTanakhRegular";
var BookTanakh_default = BookTanakhRegular;
