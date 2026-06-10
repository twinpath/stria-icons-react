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
var Tape_exports = {};
__export(Tape_exports, {
  default: () => Tape_default
});
module.exports = __toCommonJS(Tape_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TapeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 480H256C132.5 480 32 379.516 32 256S132.5 32 256 32S480 132.484 480 256C480 317.875 455.312 375.484 410.469 418.203C407.281 421.25 407.156 426.328 410.219 429.516C413.219 432.703 418.281 432.828 421.531 429.797C469.562 384.016 496 322.297 496 256C496 123.656 388.344 16 256 16S16 123.656 16 256S123.656 496 256 496H616C620.406 496 624 492.422 624 488S620.406 480 616 480ZM152 256C152 313.344 198.656 360 256 360S360 313.344 360 256S313.344 152 256 152S152 198.656 152 256ZM344 256C344 304.531 304.531 344 256 344S168 304.531 168 256S207.469 168 256 168S344 207.469 344 256Z" })
  }
));
TapeThin.displayName = "TapeThin";
var Tape_default = TapeThin;
