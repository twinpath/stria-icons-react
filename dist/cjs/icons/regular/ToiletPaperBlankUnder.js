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
var ToiletPaperBlankUnder_exports = {};
__export(ToiletPaperBlankUnder_exports, {
  default: () => ToiletPaperBlankUnder_default
});
module.exports = __toCommonJS(ToiletPaperBlankUnder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToiletPaperBlankUnderRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M399.998 144C386.746 144 375.996 165.5 375.996 192S386.746 240 399.998 240C413.248 240 423.998 218.5 423.998 192S413.248 144 399.998 144ZM399.998 0H112.002C50.244 0 0 86.131 0 192S50.244 384 112.002 384H128V480C128 497.674 142.326 512 160 512H480C497.674 512 512 497.674 512 480V192C512 86.131 461.756 0 399.998 0ZM112.002 336C86.5 336 48 278.625 48 192S86.5 48 112.002 48H326.162C302.822 83.213 287.994 134.637 287.994 192S302.822 300.787 326.162 336H112.002ZM464 464H176V384H399.998C423.795 384 445.838 371.115 464 349.338V464ZM399.998 336C374.496 336 335.994 278.625 335.994 192S374.496 48 399.998 48C425.498 48 464 105.375 464 192S425.498 336 399.998 336Z" })
  }
));
ToiletPaperBlankUnderRegular.displayName = "ToiletPaperBlankUnderRegular";
var ToiletPaperBlankUnder_default = ToiletPaperBlankUnderRegular;
