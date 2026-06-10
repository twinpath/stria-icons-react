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
var Grid2Plus_exports = {};
__export(Grid2Plus_exports, {
  default: () => Grid2Plus_default
});
module.exports = __toCommonJS(Grid2Plus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Grid2PlusThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 288H48C21.49 288 0 309.49 0 336V464C0 490.51 21.49 512 48 512H176C202.51 512 224 490.51 224 464V336C224 309.49 202.51 288 176 288ZM208 464C208 481.645 193.645 496 176 496H48C30.355 496 16 481.645 16 464V336C16 318.355 30.355 304 48 304H176C193.645 304 208 318.355 208 336V464ZM464 0H336C309.49 0 288 21.49 288 48V176C288 202.51 309.49 224 336 224H464C490.51 224 512 202.51 512 176V48C512 21.49 490.51 0 464 0ZM496 176C496 193.645 481.645 208 464 208H336C318.355 208 304 193.645 304 176V48C304 30.355 318.355 16 336 16H464C481.645 16 496 30.355 496 48V176ZM176 0H48C21.49 0 0 21.49 0 48V176C0 202.51 21.49 224 48 224H176C202.51 224 224 202.51 224 176V48C224 21.49 202.51 0 176 0ZM208 176C208 193.645 193.645 208 176 208H48C30.355 208 16 193.645 16 176V48C16 30.355 30.355 16 48 16H176C193.645 16 208 30.355 208 48V176ZM504 392H408V296C408 291.578 404.406 288 400 288S392 291.578 392 296V392H296C291.594 392 288 395.578 288 400S291.594 408 296 408H392V504C392 508.422 395.594 512 400 512S408 508.422 408 504V408H504C508.406 408 512 404.422 512 400S508.406 392 504 392Z" })
  }
));
Grid2PlusThin.displayName = "Grid2PlusThin";
var Grid2Plus_default = Grid2PlusThin;
