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
var BookArrowRight_exports = {};
__export(BookArrowRight_exports, {
  default: () => BookArrowRight_default
});
module.exports = __toCommonJS(BookArrowRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookArrowRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 272C423.164 272 416 279.162 416 288V368C416 376.836 408.836 384 400 384H64C52.289 384 41.453 387.389 32 392.9V80C32 53.49 53.492 32 80 32H400C408.836 32 416 39.162 416 48V128C416 136.836 423.164 144 432 144S448 136.836 448 128V48C448 21.49 426.508 0 400 0H80C35.816 0 0 35.816 0 80V448C0 483.346 28.656 512 64 512H431.164C439.133 512 446.512 506.545 447.781 498.678C449.406 488.646 441.719 480 432 480H416V413.053C434.586 406.426 448 388.832 448 368V288C448 279.162 440.836 272 432 272ZM384 480H64C46.359 480 32 465.641 32 448S46.359 416 64 416H384V480ZM635.312 196.688L539.312 100.688C533.062 94.438 522.937 94.438 516.688 100.688S510.438 117.063 516.688 123.312L585.375 192H272C263.156 192 256 199.156 256 208S263.156 224 272 224H585.375L516.688 292.688C510.438 298.938 510.438 309.063 516.688 315.312C519.812 318.438 523.906 320 528 320S536.188 318.438 539.312 315.312L635.312 219.312C641.562 213.062 641.562 202.938 635.312 196.688Z" })
  }
));
BookArrowRightLight.displayName = "BookArrowRightLight";
var BookArrowRight_default = BookArrowRightLight;
