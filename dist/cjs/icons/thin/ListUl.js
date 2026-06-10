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
var ListUl_exports = {};
__export(ListUl_exports, {
  default: () => ListUl_default
});
module.exports = __toCommonJS(ListUl_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListUlThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M168 104H504C508.406 104 512 100.406 512 96S508.406 88 504 88H168C163.594 88 160 91.594 160 96S163.594 104 168 104ZM504 248H168C163.594 248 160 251.594 160 256S163.594 264 168 264H504C508.406 264 512 260.406 512 256S508.406 248 504 248ZM504 408H168C163.594 408 160 411.594 160 416S163.594 424 168 424H504C508.406 424 512 420.406 512 416S508.406 408 504 408ZM48 48C21.492 48 0 69.492 0 96S21.492 144 48 144S96 122.508 96 96S74.508 48 48 48ZM48 128C30.355 128 16 113.645 16 96S30.355 64 48 64S80 78.355 80 96S65.645 128 48 128ZM48 368C21.492 368 0 389.492 0 416S21.492 464 48 464S96 442.508 96 416S74.508 368 48 368ZM48 448C30.355 448 16 433.645 16 416S30.355 384 48 384S80 398.355 80 416S65.645 448 48 448ZM48 208C21.492 208 0 229.492 0 256S21.492 304 48 304S96 282.508 96 256S74.508 208 48 208ZM48 288C30.355 288 16 273.645 16 256S30.355 224 48 224S80 238.355 80 256S65.645 288 48 288Z" })
  }
));
ListUlThin.displayName = "ListUlThin";
var ListUl_default = ListUlThin;
