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
var BookCircleArrowUp_exports = {};
__export(BookCircleArrowUp_exports, {
  default: () => BookCircleArrowUp_default
});
module.exports = __toCommonJS(BookCircleArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookCircleArrowUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 480H65.812C49.867 480 35.047 469.148 32.445 453.414C29.141 433.395 44.586 416 64 416H304C312.836 416 320 408.836 320 400C320 391.162 312.836 384 304 384H64C52.289 384 41.453 387.389 32 392.9V80C32 53.49 53.492 32 80 32H400C408.836 32 416 39.162 416 48V176C416 184.836 423.164 192 432 192S448 184.836 448 176V48C448 21.49 426.508 0 400 0H80C35.816 0 0 35.816 0 80V448C0 483.346 28.656 512 64 512H336C344.836 512 352 504.836 352 496C352 487.162 344.836 480 336 480ZM496 224C416.461 224 352 288.463 352 367.998C352 447.537 416.461 512 496 512S640 447.537 640 367.998C640 288.463 575.539 224 496 224ZM496 480C434.242 480 384 429.756 384 367.998C384 306.242 434.242 256 496 256S608 306.242 608 367.998C608 429.756 557.758 480 496 480ZM507.312 292.688C501.062 286.438 490.937 286.438 484.688 292.688L428.688 348.688C422.438 354.938 422.438 365.063 428.688 371.312S445.063 377.562 451.312 371.312L480 342.625V432C480 440.836 487.164 448 496 448S512 440.836 512 432V342.625L540.688 371.312C546.938 377.562 557.063 377.562 563.312 371.312C566.438 368.188 568 364.094 568 360S566.438 351.812 563.312 348.688L507.312 292.688Z" })
  }
));
BookCircleArrowUpLight.displayName = "BookCircleArrowUpLight";
var BookCircleArrowUp_default = BookCircleArrowUpLight;
