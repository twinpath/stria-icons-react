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
var TachographDigital_exports = {};
__export(TachographDigital_exports, {
  default: () => TachographDigital_default
});
module.exports = __toCommonJS(TachographDigital_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TachographDigitalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H576C611.348 448 640 419.346 640 384V128C640 92.654 611.348 64 576 64ZM592 384C592 392.822 584.822 400 576 400H64C55.178 400 48 392.822 48 384V128C48 119.178 55.178 112 64 112H576C584.822 112 592 119.178 592 128V384ZM336 144H112C94.326 144 80 158.326 80 176V208C80 225.672 94.326 240 112 240H336C353.674 240 368 225.672 368 208V176C368 158.326 353.674 144 336 144ZM352 336H96C87.156 336 80 343.156 80 352S87.156 368 96 368H352C360.844 368 368 360.844 368 352S360.844 336 352 336ZM544 336H416C407.156 336 400 343.156 400 352S407.156 368 416 368H544C552.844 368 560 360.844 560 352S552.844 336 544 336ZM88 304H104C108.418 304 112 300.418 112 296V280C112 275.582 108.418 272 104 272H88C83.582 272 80 275.582 80 280V296C80 300.418 83.582 304 88 304ZM168 304C172.418 304 176 300.418 176 296V280C176 275.582 172.418 272 168 272H152C147.582 272 144 275.582 144 280V296C144 300.418 147.582 304 152 304H168ZM232 304C236.418 304 240 300.418 240 296V280C240 275.582 236.418 272 232 272H216C211.582 272 208 275.582 208 280V296C208 300.418 211.582 304 216 304H232ZM296 304C300.418 304 304 300.418 304 296V280C304 275.582 300.418 272 296 272H280C275.582 272 272 275.582 272 280V296C272 300.418 275.582 304 280 304H296ZM360 272H344C339.582 272 336 275.582 336 280V296C336 300.418 339.582 304 344 304H360C364.418 304 368 300.418 368 296V280C368 275.582 364.418 272 360 272Z" })
  }
));
TachographDigitalRegular.displayName = "TachographDigitalRegular";
var TachographDigital_default = TachographDigitalRegular;
