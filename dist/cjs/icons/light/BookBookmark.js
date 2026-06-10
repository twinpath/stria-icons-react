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
var BookBookmark_exports = {};
__export(BookBookmark_exports, {
  default: () => BookBookmark_default
});
module.exports = __toCommonJS(BookBookmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookBookmarkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 368V48C448 21.49 426.508 0 400 0H80C35.816 0 0 35.816 0 80V448C0 483.346 28.656 512 64 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.053C434.586 406.426 448 388.832 448 368ZM320 32V206.703L266 163.5C263.062 161.172 259.531 160 256 160S248.938 161.172 246 163.5L192 206.703V32H320ZM384 480H64C46.359 480 32 465.641 32 448S46.359 416 64 416H384V480ZM400 384H64C52.289 384 41.453 387.389 32 392.9V80C32 53.49 53.492 32 80 32H160V240C160 246.156 163.531 251.75 169.062 254.422C174.625 257.094 181.156 256.312 186 252.5L256 196.484L326 252.5C328.906 254.812 332.438 256 336 256C338.344 256 340.719 255.484 342.938 254.422C348.469 251.75 352 246.156 352 240V32H400C408.836 32 416 39.164 416 48V368C416 376.836 408.836 384 400 384Z" })
  }
));
BookBookmarkLight.displayName = "BookBookmarkLight";
var BookBookmark_default = BookBookmarkLight;
