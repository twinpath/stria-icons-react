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
var EnvelopeDot_exports = {};
__export(EnvelopeDot_exports, {
  default: () => EnvelopeDot_default
});
module.exports = __toCommonJS(EnvelopeDot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopeDotRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 0C476.654 0 448 28.652 448 64C448 99.346 476.654 128 512 128S576 99.346 576 64C576 28.652 547.346 0 512 0ZM488.197 156.666L329.25 289.141C306.062 308.422 269.906 308.406 246.781 289.156L80 150.162V128C80 119.178 87.178 112 96 112H429.314C421.068 97.83 416 81.576 416 64H96C60.654 64 32 92.654 32 128V384C32 419.346 60.654 448 96 448H480C515.348 448 544 419.346 544 384V154.121C533.945 157.695 523.281 160 512 160C503.734 160 495.852 158.631 488.197 156.666ZM496 384C496 392.822 488.822 400 480 400H96C87.178 400 80 392.822 80 384V212.662L216.062 326.047C236.25 342.828 261.781 352.078 288 352.078S339.75 342.828 359.969 326.031L496 212.664V384Z" })
  }
));
EnvelopeDotRegular.displayName = "EnvelopeDotRegular";
var EnvelopeDot_default = EnvelopeDotRegular;
