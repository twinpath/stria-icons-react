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
var Smog_exports = {};
__export(Smog_exports, {
  default: () => Smog_default
});
module.exports = __toCommonJS(Smog_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SmogRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 368H88C74.8 368 64 378.8 64 392V392C64 405.2 74.8 416 88 416H616C629.2 416 640 405.2 640 392V392C640 378.8 629.2 368 616 368ZM136 464H24C10.8 464 0 474.8 0 488V488C0 501.2 10.8 512 24 512H136C149.2 512 160 501.2 160 488V488C160 474.8 149.2 464 136 464ZM552 464H232C218.8 464 208 474.8 208 488V488C208 501.2 218.8 512 232 512H552C565.2 512 576 501.2 576 488V488C576 474.8 565.2 464 552 464ZM144 288H257C285 309 317.75 320 352 320S419.125 309 447 288H512C582.625 288 640 230.625 640 160S582.625 32 512 32C494.25 32 476.625 35.75 460.25 43C430.75 15.5 392.25 0 352 0C311.875 0 274.25 14.875 245.125 41.5C218.375 15.25 182.25 0 144 0C64.625 0 0 64.625 0 144S64.625 288 144 288ZM144 48C169.375 48 193.25 57.75 211.25 75.75L243.75 107.75L277.375 77C297.875 58.25 324.375 48 352 48C379.875 48 406.75 58.75 427.625 78.125L450.75 99.75L479.75 86.875C490.125 82.25 500.875 80 512 80C556.125 80 592 115.875 592 160S556.125 240 512 240H431L418.25 249.625C398.375 264.5 376.125 272 352 272S305.625 264.5 285.75 249.625L273 240H144C91.125 240 48 196.875 48 144S91.125 48 144 48Z" })
  }
));
SmogRegular.displayName = "SmogRegular";
var Smog_default = SmogRegular;
