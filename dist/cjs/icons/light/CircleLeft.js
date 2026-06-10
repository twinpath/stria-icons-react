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
var CircleLeft_exports = {};
__export(CircleLeft_exports, {
  default: () => CircleLeft_default
});
module.exports = __toCommonJS(CircleLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M123.719 227.719C108.594 242.844 108.391 268.969 123.922 284.469L219.719 376.969C231.203 388.437 248.312 391.844 263.312 385.656C278.312 379.438 288 364.938 288 348.688V320H360C382.062 320 400 302.062 400 280V232C400 209.938 382.062 192 360 192H288V163.312C288 147.062 278.312 132.562 263.312 126.344C248.359 120.156 231.312 123.531 219.828 134.906L123.719 227.719ZM256 163.312V224H360C364.406 224 368 227.594 368 232V280C368 284.406 364.406 288 360 288H256V348.688C256 355.102 247.953 359.943 242.141 354.156L146.344 261.656C142.139 257.494 144.547 252.123 146.141 250.531L242.141 157.844L242.344 157.656C247.195 152.805 256 155.879 256 163.312ZM16 256C16 388.549 123.451 496 256 496S496 388.549 496 256S388.549 16 256 16S16 123.451 16 256ZM464 256C464 370.691 370.691 464 256 464S48 370.691 48 256S141.309 48 256 48S464 141.309 464 256Z" })
  }
));
CircleLeftLight.displayName = "CircleLeftLight";
var CircleLeft_default = CircleLeftLight;
