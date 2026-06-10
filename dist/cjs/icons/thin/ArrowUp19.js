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
var ArrowUp19_exports = {};
__export(ArrowUp19_exports, {
  default: () => ArrowUp19_default
});
module.exports = __toCommonJS(ArrowUp19_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUp19Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 208C347.578 208 344 211.594 344 216S347.578 224 352 224H416C420.422 224 424 220.406 424 216S420.422 208 416 208H392V40C392 37.219 390.562 34.656 388.203 33.188C385.844 31.75 382.891 31.594 380.422 32.844L348.422 48.844C344.469 50.812 342.875 55.625 344.844 59.562C346.828 63.531 351.594 65.094 355.578 63.156L376 52.938V208H352ZM133.906 34.484C130.844 31.172 125.156 31.172 122.094 34.484L34.09 130.508C31.121 133.76 31.34 138.822 34.59 141.824C37.84 144.824 42.902 144.605 45.902 141.324L120 60.471V471.998C120 476.406 123.594 480 128 480S136 476.406 136 471.998V60.471L210.096 141.324C211.691 143.043 213.848 143.918 216.004 143.918C217.941 143.918 219.879 143.23 221.41 141.824C224.66 138.822 224.879 133.76 221.91 130.508L133.906 34.484ZM376 264C336.297 264 304 296.312 304 336S336.297 408 376 408C398.734 408 418.795 397.197 432 380.689V408C432 438.875 406.875 464 376 464H352C347.578 464 344 467.594 344 472S347.578 480 352 480H376C415.703 480 448 447.688 448 408V336C448 296.312 415.703 264 376 264ZM376 392C345.125 392 320 366.875 320 336S345.125 280 376 280S432 305.125 432 336S406.875 392 376 392Z" })
  }
));
ArrowUp19Thin.displayName = "ArrowUp19Thin";
var ArrowUp19_default = ArrowUp19Thin;
