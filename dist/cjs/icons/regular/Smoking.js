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
var Smoking_exports = {};
__export(Smoking_exports, {
  default: () => Smoking_default
});
module.exports = __toCommonJS(Smoking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SmokingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M503.75 141.625C479.75 125 464 99.25 464 70.25V24C464 10.8 453.2 0 440 0H440C426.8 0 416 10.8 416 24V74.375C416 118.125 440.625 156 476.25 181.125C498.75 196.75 512 222.25 512 249.75V264C512 277.2 522.8 288 536 288L536 288C549.2 288 560 277.2 560 264V249.75C560 206.375 539 166.25 503.75 141.625ZM553.25 87.125C547.625 83.25 544 77.125 544 70.25V24C544 10.8 533.2 0 520 0L520 0C506.8 0 496 10.8 496 24V70.25C496 92.25 506.25 113.75 524.625 125.75C566.75 153 592 199.5 592 249.75V264C592 277.2 602.8 288 616 288L616 288C629.2 288 640 277.2 640 264V249.75C640 184.25 607.625 123.5 553.25 87.125ZM616 352L616 352C602.8 352 592 362.8 592 376V488C592 501.2 602.8 512 616 512L616 512C629.2 512 640 501.2 640 488V376C640 362.8 629.2 352 616 352ZM536 352L536 352C522.8 352 512 362.8 512 376V488C512 501.2 522.8 512 536 512L536 512C549.2 512 560 501.2 560 488V376C560 362.8 549.2 352 536 352ZM456 352H48C21.5 352 0 373.5 0 400V464C0 490.5 21.5 512 48 512H456C469.25 512 480 501.25 480 488V376C480 362.75 469.25 352 456 352ZM432 464H224V400H432V464Z" })
  }
));
SmokingRegular.displayName = "SmokingRegular";
var Smoking_default = SmokingRegular;
