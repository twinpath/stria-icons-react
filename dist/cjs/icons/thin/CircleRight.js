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
var CircleRight_exports = {};
__export(CircleRight_exports, {
  default: () => CircleRight_default
});
module.exports = __toCommonJS(CircleRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M389.654 272.971C394.34 268.283 396.684 262.143 396.684 256S394.34 243.717 389.654 239.029L296.971 146.346C281.852 131.227 256 141.934 256 163.316V208H152C138.744 208 128 218.746 128 232V280C128 293.254 138.744 304 152 304H256V348.684C256 370.066 281.852 380.773 296.971 365.654L389.654 272.971ZM276.938 356.076C275.453 355.461 272 353.508 272 348.684V288H152C147.588 288 144 284.412 144 280V232C144 227.588 147.588 224 152 224H272V163.316C272 158.492 275.453 156.539 276.938 155.924C278.424 155.311 282.244 154.248 285.656 157.66L378.34 250.344C380.379 252.383 380.684 254.762 380.684 256S380.379 259.617 378.34 261.656L285.656 354.34C282.244 357.752 278.424 356.689 276.938 356.076ZM496 256C496 123.451 388.549 16 256 16S16 123.451 16 256S123.451 496 256 496S496 388.549 496 256ZM32 256C32 132.486 132.486 32 256 32S480 132.486 480 256S379.514 480 256 480S32 379.514 32 256Z" })
  }
));
CircleRightThin.displayName = "CircleRightThin";
var CircleRight_default = CircleRightThin;
