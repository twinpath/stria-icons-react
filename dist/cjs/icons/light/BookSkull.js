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
var BookSkull_exports = {};
__export(BookSkull_exports, {
  default: () => BookSkull_default
});
module.exports = __toCommonJS(BookSkull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookSkullLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M248 160C256.75 160 264 152.75 264 144S256.75 128 248 128S232 135.25 232 144S239.25 160 248 160ZM200 160C208.75 160 216 152.75 216 144S208.75 128 200 128S184 135.25 184 144S191.25 160 200 160ZM160 203.375V216C160 229.25 170.75 240 184 240H264C277.25 240 288 229.25 288 216V203.375C308.375 188.25 320 167 320 144C320 99.875 276.875 64 224 64S128 99.875 128 144C128 167 139.625 188.25 160 203.375ZM224 96C259.25 96 288 117.5 288 144C288 158.25 279.25 171.875 263.75 181.25L256 185.875V208H192V185.875L184.25 181.25C168.875 171.875 160 158.25 160 144C160 117.5 188.75 96 224 96ZM448 368V48C448 21.49 426.51 0 400 0H80C35.817 0 0 35.817 0 80V448C0 483.346 28.654 512 64 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.053C434.584 406.426 448 388.832 448 368ZM384 480H64C46.359 480 32 465.641 32 448S46.359 416 64 416H384V480ZM400 384H64C52.291 384 41.451 387.389 32 392.9V80C32 53.49 53.49 32 80 32H400C408.837 32 416 39.163 416 48V368C416 376.837 408.837 384 400 384ZM351.062 250.625C348.109 242.297 338.875 237.906 330.625 240.937L224 279.018L117.375 240.938C109.047 237.891 99.891 242.297 96.938 250.625C93.953 258.938 98.297 268.094 106.625 271.062L176.449 296L106.625 320.938C98.297 323.906 93.953 333.062 96.938 341.375C99.266 347.922 105.422 352 112 352C113.781 352 115.609 351.703 117.375 351.062L224 312.982L330.625 351.062C332.391 351.703 334.219 352 336 352C342.578 352 348.734 347.922 351.062 341.375C354.047 333.063 349.703 323.906 341.375 320.938L271.551 296L341.375 271.062C349.703 268.094 354.047 258.938 351.062 250.625Z" })
  }
));
BookSkullLight.displayName = "BookSkullLight";
var BookSkull_default = BookSkullLight;
