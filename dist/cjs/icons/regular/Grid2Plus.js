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
const Grid2PlusRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 288H48C21.49 288 0 309.49 0 336V464C0 490.51 21.49 512 48 512H176C202.51 512 224 490.51 224 464V336C224 309.49 202.51 288 176 288ZM176 464H48V336H176V464ZM464 0H336C309.49 0 288 21.49 288 48V176C288 202.51 309.49 224 336 224H464C490.51 224 512 202.51 512 176V48C512 21.49 490.51 0 464 0ZM464 176H336V48H464V176ZM176 0H48C21.49 0 0 21.49 0 48V176C0 202.51 21.49 224 48 224H176C202.51 224 224 202.51 224 176V48C224 21.49 202.51 0 176 0ZM176 176H48V48H176V176ZM488 376H424V312C424 298.75 413.25 288 400 288S376 298.75 376 312V376H312C298.75 376 288 386.75 288 400S298.75 424 312 424H376V488C376 501.25 386.75 512 400 512S424 501.25 424 488V424H488C501.25 424 512 413.25 512 400S501.25 376 488 376Z" })
  }
));
Grid2PlusRegular.displayName = "Grid2PlusRegular";
var Grid2Plus_default = Grid2PlusRegular;
