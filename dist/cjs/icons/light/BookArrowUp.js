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
var BookArrowUp_exports = {};
__export(BookArrowUp_exports, {
  default: () => BookArrowUp_default
});
module.exports = __toCommonJS(BookArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookArrowUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M347.312 251.312C350.438 248.188 352 244.094 352 240S350.438 231.812 347.312 228.688L251.312 132.688C245.062 126.438 234.937 126.438 228.688 132.688L132.688 228.688C126.438 234.938 126.438 245.063 132.688 251.312S149.063 257.562 155.312 251.312L224 182.625V496C224 504.844 231.156 512 240 512S256 504.844 256 496V182.625L324.688 251.312C330.938 257.562 341.062 257.562 347.312 251.312ZM448 368V48C448 21.49 426.508 0 400 0H80C35.816 0 0 35.816 0 80V448C0 483.346 28.656 512 64 512H176C184.836 512 192 504.836 192 496C192 487.162 184.836 480 176 480H65.812C49.867 480 35.047 469.148 32.445 453.414C29.141 433.395 44.586 416 64 416H176C184.836 416 192 408.836 192 400C192 391.162 184.836 384 176 384H64C52.289 384 41.453 387.389 32 392.9V80C32 53.49 53.492 32 80 32H400C408.836 32 416 39.162 416 48V368C416 376.836 408.836 384 400 384H304C295.164 384 288 391.162 288 400C288 408.836 295.164 416 304 416H384V480H304C295.164 480 288 487.162 288 496C288 504.836 295.164 512 304 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.053C434.586 406.426 448 388.832 448 368Z" })
  }
));
BookArrowUpLight.displayName = "BookArrowUpLight";
var BookArrowUp_default = BookArrowUpLight;
