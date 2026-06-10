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
var Film_exports = {};
__export(Film_exports, {
  default: () => Film_default
});
module.exports = __toCommonJS(Film_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilmThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 32H48C21.492 32 0 53.49 0 80V432C0 458.51 21.492 480 48 480H464C490.508 480 512 458.51 512 432V80C512 53.49 490.508 32 464 32ZM112 464H48C30.355 464 16 449.645 16 432V408H112V464ZM112 392H16V312H112V392ZM112 296H16V216H112V296ZM112 200H16V120H112V200ZM112 104H16V80C16 62.355 30.355 48 48 48H112V104ZM384 464H128V264H384V464ZM384 248H128V48H384V248ZM496 432C496 449.645 481.645 464 464 464H400V408H496V432ZM496 392H400V312H496V392ZM496 296H400V216H496V296ZM496 200H400V120H496V200ZM496 104H400V48H464C481.645 48 496 62.355 496 80V104Z" })
  }
));
FilmThin.displayName = "FilmThin";
var Film_default = FilmThin;
