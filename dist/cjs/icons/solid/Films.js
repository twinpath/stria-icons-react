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
var Films_exports = {};
__export(Films_exports, {
  default: () => Films_default
});
module.exports = __toCommonJS(Films_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilmsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 400V96C21.49 96 0 117.492 0 144V416C0 451.344 28.654 480 64 480H432C458.51 480 480 458.508 480 432H80C62.326 432 48 417.672 48 400ZM528 32H144C117.49 32 96 53.49 96 80V336C96 362.51 117.49 384 144 384H528C554.51 384 576 362.51 576 336V80C576 53.49 554.51 32 528 32ZM200 327C200 331.969 195.969 336 191 336H161C156.031 336 152 331.969 152 327V297C152 292.031 156.031 288 161 288H191C195.969 288 200 292.031 200 297V327ZM200 223C200 227.969 195.969 232 191 232H161C156.031 232 152 227.969 152 223V193C152 188.031 156.031 184 161 184H191C195.969 184 200 188.031 200 193V223ZM200 119C200 123.969 195.969 128 191 128H161C156.031 128 152 123.969 152 119V89C152 84.031 156.031 80 161 80H191C195.969 80 200 84.031 200 89V119ZM416 320C416 328.836 408.836 336 400 336H272C263.164 336 256 328.836 256 320V240C256 231.162 263.164 224 272 224H400C408.836 224 416 231.162 416 240V320ZM416 176C416 184.836 408.836 192 400 192H272C263.164 192 256 184.836 256 176V96C256 87.162 263.164 80 272 80H400C408.836 80 416 87.162 416 96V176ZM520 327C520 331.969 515.969 336 511 336H481C476.031 336 472 331.969 472 327V297C472 292.031 476.031 288 481 288H511C515.969 288 520 292.031 520 297V327ZM520 223C520 227.969 515.969 232 511 232H481C476.031 232 472 227.969 472 223V193C472 188.031 476.031 184 481 184H511C515.969 184 520 188.031 520 193V223ZM520 119C520 123.969 515.969 128 511 128H481C476.031 128 472 123.969 472 119V89C472 84.031 476.031 80 481 80H511C515.969 80 520 84.031 520 89V119Z" })
  }
));
FilmsSolid.displayName = "FilmsSolid";
var Films_default = FilmsSolid;
