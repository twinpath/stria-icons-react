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
var FaceSmilePlus_exports = {};
__export(FaceSmilePlus_exports, {
  default: () => FaceSmilePlus_default
});
module.exports = __toCommonJS(FaceSmilePlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceSmilePlusSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 72H568V24C568 10.745 557.255 0 544 0L544 0C530.745 0 520 10.745 520 24V72H472C458.745 72 448 82.745 448 96V96C448 109.255 458.745 120 472 120H520V168C520 181.255 530.745 192 544 192L544 192C557.255 192 568 181.255 568 168V120H616C629.255 120 640 109.255 640 96V96C640 82.745 629.255 72 616 72ZM224 64C100.289 64 0 164.289 0 288S100.289 512 224 512C347.713 512 448 411.711 448 288S347.713 64 224 64ZM144 208C161.645 208 176 222.355 176 240S161.645 272 144 272S112 257.645 112 240S126.355 208 144 208ZM332 367.25C304.672 398.219 265.312 416 224 416C182.703 416 143.328 398.219 115.984 367.25C110.141 360.625 110.766 350.5 117.391 344.656S134.125 339.469 139.984 346.062C161.25 370.188 191.875 384 224 384S286.75 370.188 308 346.062C313.844 339.469 324.016 338.812 330.578 344.656C337.203 350.5 337.844 360.625 332 367.25ZM304 272C286.355 272 272 257.645 272 240S286.355 208 304 208S336 222.355 336 240S321.645 272 304 272Z" })
  }
));
FaceSmilePlusSolid.displayName = "FaceSmilePlusSolid";
var FaceSmilePlus_default = FaceSmilePlusSolid;
