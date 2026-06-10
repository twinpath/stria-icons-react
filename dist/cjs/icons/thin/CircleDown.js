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
var CircleDown_exports = {};
__export(CircleDown_exports, {
  default: () => CircleDown_default
});
module.exports = __toCommonJS(CircleDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M239.029 389.654C243.717 394.34 249.857 396.684 256 396.684S268.283 394.34 272.971 389.654L365.654 296.971C380.773 281.852 370.066 256 348.684 256H304V152C304 138.744 293.254 128 280 128H232C218.746 128 208 138.744 208 152V256H163.316C141.934 256 131.227 281.852 146.346 296.971L239.029 389.654ZM155.924 276.938C156.539 275.453 158.492 272 163.316 272H224V152C224 147.588 227.588 144 232 144H280C284.412 144 288 147.588 288 152V272H348.684C353.508 272 355.461 275.453 356.076 276.938C356.689 278.424 357.752 282.244 354.34 285.656L261.656 378.34C259.617 380.379 257.238 380.684 256 380.684S252.383 380.379 250.344 378.34L157.66 285.656C154.248 282.244 155.311 278.424 155.924 276.938ZM256 496C388.549 496 496 388.549 496 256S388.549 16 256 16S16 123.451 16 256S123.451 496 256 496ZM256 32C379.514 32 480 132.486 480 256S379.514 480 256 480S32 379.514 32 256S132.486 32 256 32Z" })
  }
));
CircleDownThin.displayName = "CircleDownThin";
var CircleDown_default = CircleDownThin;
