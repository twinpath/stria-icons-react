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
var BookFont_exports = {};
__export(BookFont_exports, {
  default: () => BookFont_default
});
module.exports = __toCommonJS(BookFont_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookFontLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 368V48C448 21.49 426.51 0 400 0H80C35.816 0 0 35.816 0 80V448C0 483.346 28.654 512 64 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.053C434.584 406.426 448 388.832 448 368ZM384 480H64C46.359 480 32 465.641 32 448S46.359 416 64 416H384V480ZM400 384H64C52.291 384 41.451 387.389 32 392.9V80C32 53.49 53.49 32 80 32H400C408.836 32 416 39.164 416 48V368C416 376.836 408.836 384 400 384ZM238.312 104.844C232.875 94 215.125 94 209.688 104.844L113.688 296.844C109.734 304.75 112.938 314.359 120.844 318.312C128.75 322.219 138.359 319.062 142.312 311.156L169.891 256H278.109L305.687 311.156C308.5 316.766 314.141 320 320.016 320C322.422 320 324.859 319.453 327.156 318.312C335.062 314.359 338.266 304.75 334.312 296.844L238.312 104.844ZM185.891 224L224 147.781L262.109 224H185.891Z" })
  }
));
BookFontLight.displayName = "BookFontLight";
var BookFont_default = BookFontLight;
