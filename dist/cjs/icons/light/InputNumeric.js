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
var InputNumeric_exports = {};
__export(InputNumeric_exports, {
  default: () => InputNumeric_default
});
module.exports = __toCommonJS(InputNumeric_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InputNumericLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576.002 64H63.998C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 63.998 448H576.002C611.346 448 640 419.348 640 384V128C640 92.654 611.346 64 576.002 64ZM608 384C608 401.645 593.646 416 576.002 416H63.998C46.354 416 32 401.645 32 384V128C32 110.355 46.354 96 63.998 96H576.002C593.646 96 608 110.355 608 128V384ZM176 320H160V176C160 167.156 152.844 160 144 160H112C103.156 160 96 167.156 96 176S103.156 192 112 192H128V320H112C103.156 320 96 327.156 96 336S103.156 352 112 352H176C184.844 352 192 344.844 192 336S184.844 320 176 320ZM336 320H276.656L327.312 265.359C344.594 246.734 348.984 220.625 338.781 197.219C328.766 174.266 307.141 160 282.359 160C261.422 160 241.781 172.938 231.125 193.766C227.094 201.641 230.203 211.281 238.062 215.297C246 219.375 255.562 216.234 259.594 208.359C271.875 184.469 300.859 190.281 309.453 210.016C313.406 219.078 314 232.656 303.844 243.609L228.266 325.125C223.938 329.781 222.797 336.562 225.344 342.406C227.875 348.219 233.641 352 240 352H336C344.844 352 352 344.844 352 336S344.844 320 336 320Z" })
  }
));
InputNumericLight.displayName = "InputNumericLight";
var InputNumeric_default = InputNumericLight;
