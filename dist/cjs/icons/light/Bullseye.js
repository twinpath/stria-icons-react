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
var Bullseye_exports = {};
__export(Bullseye_exports, {
  default: () => Bullseye_default
});
module.exports = __toCommonJS(Bullseye_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BullseyeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 176C211.891 176 176 211.891 176 256S211.891 336 256 336S336 300.109 336 256S300.109 176 256 176ZM256 304C229.531 304 208 282.469 208 256S229.531 208 256 208S304 229.531 304 256S282.469 304 256 304ZM256 96C167.781 96 96 167.781 96 256S167.781 416 256 416S416 344.219 416 256S344.219 96 256 96ZM256 384C185.422 384 128 326.578 128 256S185.422 128 256 128S384 185.422 384 256S326.578 384 256 384ZM256 16C123.656 16 16 123.656 16 256S123.656 496 256 496S496 388.344 496 256S388.344 16 256 16ZM256 464C141.312 464 48 370.688 48 256S141.312 48 256 48S464 141.312 464 256S370.688 464 256 464Z" })
  }
));
BullseyeLight.displayName = "BullseyeLight";
var Bullseye_default = BullseyeLight;
