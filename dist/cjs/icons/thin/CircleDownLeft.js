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
var CircleDownLeft_exports = {};
__export(CircleDownLeft_exports, {
  default: () => CircleDownLeft_default
});
module.exports = __toCommonJS(CircleDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDownLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 256C496 123.453 388.549 16 256 16S16 123.453 16 256S123.451 496 256 496S496 388.547 496 256ZM480 256C480 379.516 379.514 480 256 480S32 379.516 32 256S132.486 32 256 32S480 132.484 480 256ZM357.988 221.895C367.361 212.523 367.359 197.328 357.988 187.953L324.047 154.012C314.676 144.641 299.479 144.641 290.105 154.012L216.566 227.551L184.971 195.953C169.852 180.836 144 191.547 144 212.926V344C144.002 350.629 146.686 356.625 151.029 360.969S161.373 368 168 368H299.074C320.457 368 331.166 342.148 316.045 327.031L284.449 295.434L357.988 221.895ZM346.674 210.578L261.822 295.434L304.732 338.344C308.143 341.754 307.082 345.578 306.467 347.062C305.85 348.547 303.9 352 299.074 352H168C165.117 352 163.219 350.531 162.344 349.656C161.467 348.781 160.002 346.883 160.002 344V212.926C160.002 208.102 163.453 206.148 164.937 205.531C166.424 204.918 170.246 203.859 173.656 207.27L216.566 250.18L301.42 165.328C304.539 162.207 309.613 162.207 312.732 165.328L346.674 199.266C349.795 202.387 349.795 207.461 346.674 210.578Z" })
  }
));
CircleDownLeftThin.displayName = "CircleDownLeftThin";
var CircleDownLeft_default = CircleDownLeftThin;
