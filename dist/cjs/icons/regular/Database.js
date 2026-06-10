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
var Database_exports = {};
__export(Database_exports, {
  default: () => Database_default
});
module.exports = __toCommonJS(Database_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DatabaseRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 0C100.289 0 0 35.816 0 80V432C0 476.18 100.289 512 224 512S448 476.18 448 432V80C448 35.816 347.711 0 224 0ZM224 464C125.316 464 62.611 440.211 48 426.195V353.383C89.014 372 152.523 384 224 384S358.986 372 400 353.383V426.195C385.389 440.211 322.684 464 224 464ZM400 298.195C385.389 312.211 322.684 336 224 336S62.611 312.211 48 298.195V225.383C89.014 244 152.523 256 224 256S358.986 244 400 225.383V298.195ZM400 170.195C385.389 184.211 322.684 208 224 208S62.611 184.211 48 170.195V85.805C62.611 71.789 125.314 48 224 48S385.389 71.789 400 85.805V170.195Z" })
  }
));
DatabaseRegular.displayName = "DatabaseRegular";
var Database_default = DatabaseRegular;
