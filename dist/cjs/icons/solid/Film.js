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
const FilmSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 32H48C21.49 32 0 53.49 0 80V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V80C512 53.49 490.51 32 464 32ZM112 408C112 412.418 108.418 416 104 416H56C51.582 416 48 412.418 48 408V360C48 355.582 51.582 352 56 352H104C108.418 352 112 355.582 112 360V408ZM112 280C112 284.418 108.418 288 104 288H56C51.582 288 48 284.418 48 280V232C48 227.582 51.582 224 56 224H104C108.418 224 112 227.582 112 232V280ZM112 152C112 156.418 108.418 160 104 160H56C51.582 160 48 156.418 48 152V104C48 99.582 51.582 96 56 96H104C108.418 96 112 99.582 112 104V152ZM352 400C352 408.836 344.836 416 336 416H176C167.164 416 160 408.836 160 400V304C160 295.162 167.164 288 176 288H336C344.836 288 352 295.162 352 304V400ZM352 208C352 216.836 344.836 224 336 224H176C167.164 224 160 216.836 160 208V112C160 103.162 167.164 96 176 96H336C344.836 96 352 103.162 352 112V208ZM464 408C464 412.418 460.418 416 456 416H408C403.582 416 400 412.418 400 408V360C400 355.582 403.582 352 408 352H456C460.418 352 464 355.582 464 360V408ZM464 280C464 284.418 460.418 288 456 288H408C403.582 288 400 284.418 400 280V232C400 227.582 403.582 224 408 224H456C460.418 224 464 227.582 464 232V280ZM464 152C464 156.418 460.418 160 456 160H408C403.582 160 400 156.418 400 152V104C400 99.582 403.582 96 408 96H456C460.418 96 464 99.582 464 104V152Z" })
  }
));
FilmSolid.displayName = "FilmSolid";
var Film_default = FilmSolid;
