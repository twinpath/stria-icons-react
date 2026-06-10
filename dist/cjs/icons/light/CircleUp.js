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
var CircleUp_exports = {};
__export(CircleUp_exports, {
  default: () => CircleUp_default
});
module.exports = __toCommonJS(CircleUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M284.281 123.719C269.156 108.594 243.031 108.391 227.531 123.922L135.031 219.719C123.562 231.203 120.156 248.312 126.344 263.312C132.562 278.312 147.062 288 163.312 288H192V360C192 382.062 209.938 400 232 400H280C302.062 400 320 382.062 320 360V288H348.688C364.938 288 379.438 278.312 385.656 263.312C391.844 248.359 388.469 231.312 377.094 219.828L284.281 123.719ZM348.688 256H288V360C288 364.406 284.406 368 280 368H232C227.594 368 224 364.406 224 360V256H163.312C156.898 256 152.057 247.953 157.844 242.141L250.344 146.344C254.506 142.139 259.877 144.547 261.469 146.141L354.156 242.141L354.344 242.344C359.195 247.195 356.121 256 348.688 256ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" })
  }
));
CircleUpLight.displayName = "CircleUpLight";
var CircleUp_default = CircleUpLight;
