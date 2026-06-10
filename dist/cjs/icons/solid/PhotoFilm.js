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
var PhotoFilm_exports = {};
__export(PhotoFilm_exports, {
  default: () => PhotoFilm_default
});
module.exports = __toCommonJS(PhotoFilm_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhotoFilmSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.008 432C352.008 440.836 344.843 448 336.007 448H176.004C167.166 448 160.003 440.836 160.003 432V128H48.001C21.491 128 0 149.49 0 176V464C0 490.51 21.491 512 48.001 512H464.01C490.518 512 512.011 490.51 512.011 464V384H352.007V432ZM104.002 439C104.002 443.969 99.971 448 95.002 448H65.001C60.033 448 56.001 443.969 56.001 439V409C56.001 404.031 60.033 400 65.001 400H95.002C99.971 400 104.002 404.031 104.002 409V439ZM104.002 335C104.002 339.969 99.971 344 95.002 344H65.001C60.033 344 56.001 339.969 56.001 335V305C56.001 300.031 60.033 296 65.001 296H95.002C99.971 296 104.002 300.031 104.002 305V335ZM104.002 231C104.002 235.969 99.971 240 95.002 240H65.001C60.033 240 56.001 235.969 56.001 231V201C56.001 196.031 60.033 192 65.001 192H95.002C99.971 192 104.002 196.031 104.002 201V231ZM408.009 409C408.009 404.031 412.04 400 417.009 400H447.01C451.978 400 456.01 404.031 456.01 409V439C456.01 443.969 451.978 448 447.01 448H417.009C412.04 448 408.009 443.969 408.009 439V409ZM591.999 0H239.991C213.481 0 191.99 21.49 191.99 48V304C191.99 330.51 213.481 352 239.991 352H591.999C618.507 352 640 330.51 640 304V48C640 21.49 618.507 0 591.999 0ZM303.983 64C321.659 64 335.984 78.328 335.984 96S321.659 128 303.983 128C286.311 128 271.982 113.672 271.982 96S286.311 64 303.983 64ZM574.114 279.551C571.325 284.754 565.903 288 560.004 288H271.998C265.974 288 260.466 284.621 257.736 279.25C255.005 273.883 255.521 267.438 259.068 262.574L329.07 166.574C332.085 162.441 336.89 160 341.999 160C347.109 160 351.914 162.441 354.929 166.574L377.281 197.234L440.025 103.125C442.99 98.672 447.986 96 453.338 96C458.686 96 463.682 98.672 466.651 103.125L573.317 263.125C576.59 268.035 576.895 274.348 574.114 279.551Z" })
  }
));
PhotoFilmSolid.displayName = "PhotoFilmSolid";
var PhotoFilm_default = PhotoFilmSolid;
