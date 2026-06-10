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
var PaletteBoxes_exports = {};
__export(PaletteBoxes_exports, {
  default: () => PaletteBoxes_default
});
module.exports = __toCommonJS(PaletteBoxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaletteBoxesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 288H304C319.223 288 333.016 282.465 344 273.59C354.984 282.465 368.777 288 384 288H480C515.346 288 544 259.346 544 224V128C544 92.652 515.346 64 480 64H384C378.441 64 373.143 64.932 368 66.264V64C368 28.652 339.346 0 304 0H160C124.654 0 96 28.652 96 64V224C96 259.346 124.654 288 160 288ZM368 128C368 119.178 375.178 112 384 112H480C488.822 112 496 119.178 496 128V224C496 232.822 488.822 240 480 240H384C375.178 240 368 232.822 368 224V128ZM144 64C144 55.178 151.178 48 160 48H304C312.822 48 320 55.178 320 64V224C320 232.822 312.822 240 304 240H160C151.178 240 144 232.822 144 224V64ZM616 464H568V368H616C629.25 368 640 357.25 640 344S629.25 320 616 320H24C10.75 320 0 330.75 0 344S10.75 368 24 368H72V464H24C10.75 464 0 474.75 0 488S10.75 512 24 512H616C629.25 512 640 501.25 640 488S629.25 464 616 464ZM296 464H120V368H296V464ZM520 464H344V368H520V464Z" })
  }
));
PaletteBoxesRegular.displayName = "PaletteBoxesRegular";
var PaletteBoxes_default = PaletteBoxesRegular;
