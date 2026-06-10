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
var CircleUpRight_exports = {};
__export(CircleUpRight_exports, {
  default: () => CircleUpRight_default
});
module.exports = __toCommonJS(CircleUpRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleUpRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M159.834 306.91C150.465 316.281 150.465 331.484 159.834 340.852L171.146 352.164C180.516 361.535 195.719 361.535 205.088 352.164L269.658 287.594L311.031 328.969C315.625 333.562 321.766 336 328 336C331.094 336 334.219 335.406 337.188 334.188C346.156 330.469 352 321.719 352 312V184C352 170.75 341.25 160 328 160H200C190.297 160 181.547 165.844 177.828 174.812S176.172 194.094 183.031 200.969L224.404 242.344L159.834 306.91ZM16 256C16 388.547 123.451 496 256 496S496 388.547 496 256S388.549 16 256 16S16 123.453 16 256ZM64 256C64 150.133 150.131 64 256 64S448 150.133 448 256S361.869 448 256 448S64 361.867 64 256Z" })
  }
));
CircleUpRightRegular.displayName = "CircleUpRightRegular";
var CircleUpRight_default = CircleUpRightRegular;
