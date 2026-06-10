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
var FilmSlash_exports = {};
__export(FilmSlash_exports, {
  default: () => FilmSlash_default
});
module.exports = __toCommonJS(FilmSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilmSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M463.999 464V462.443L447.999 449.727V464H191.999V264H214.349L194.22 248H191.999V246.234L175.999 233.518V296H79.999V216H153.962L133.833 200H79.999V157.207L63.999 144.49V432C63.999 458.51 85.492 480 111.999 480H486.085L465.956 464H463.999ZM175.999 464H111.999C94.355 464 79.999 449.645 79.999 432V408H175.999V464ZM175.999 392H79.999V312H175.999V392ZM175.999 48V49.551L191.999 62.27V48H447.999V248H425.658L445.786 264H447.999V265.76L463.999 278.479V216H559.999V296H486.042L506.171 312H559.999V354.787L575.999 367.506V80C575.999 53.49 554.507 32 527.999 32H153.919L174.048 48H175.999ZM463.999 48H527.999C545.644 48 559.999 62.355 559.999 80V104H463.999V48ZM463.999 120H559.999V200H463.999V120ZM636.98 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.027 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.495 511.438 630.245 512 631.995 512C634.339 512 636.683 510.969 638.261 508.984C641.011 505.516 640.433 500.484 636.98 497.734Z" })
  }
));
FilmSlashThin.displayName = "FilmSlashThin";
var FilmSlash_default = FilmSlashThin;
