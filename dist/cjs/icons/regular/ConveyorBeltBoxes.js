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
var ConveyorBeltBoxes_exports = {};
__export(ConveyorBeltBoxes_exports, {
  default: () => ConveyorBeltBoxes_default
});
module.exports = __toCommonJS(ConveyorBeltBoxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ConveyorBeltBoxesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 368C110.25 368 96 382.25 96 400S110.25 432 128 432S160 417.75 160 400S145.75 368 128 368ZM160 256H304C319.223 256 333.016 250.465 344 241.59C354.984 250.465 368.777 256 384 256H480C515.346 256 544 227.346 544 192V128C544 92.652 515.346 64 480 64H384C378.441 64 373.143 64.932 368 66.264V64C368 28.652 339.346 0 304 0H160C124.654 0 96 28.652 96 64V192C96 227.346 124.654 256 160 256ZM368 128C368 119.178 375.178 112 384 112H480C488.822 112 496 119.178 496 128V192C496 200.822 488.822 208 480 208H384C375.178 208 368 200.822 368 192V128ZM144 64C144 55.178 151.178 48 160 48H304C312.822 48 320 55.178 320 64V192C320 200.822 312.822 208 304 208H160C151.178 208 144 200.822 144 192V64ZM512 368C494.25 368 480 382.25 480 400S494.25 432 512 432S544 417.75 544 400S529.75 368 512 368ZM320 368C302.25 368 288 382.25 288 400S302.25 432 320 432S352 417.75 352 400S337.75 368 320 368ZM528 288H112C50.145 288 0 338.145 0 400S50.145 512 112 512H528C589.855 512 640 461.855 640 400S589.855 288 528 288ZM528 464H112C76.711 464 48 435.289 48 400C48 364.709 76.711 336 112 336H528C563.289 336 592 364.709 592 400C592 435.289 563.289 464 528 464Z" })
  }
));
ConveyorBeltBoxesRegular.displayName = "ConveyorBeltBoxesRegular";
var ConveyorBeltBoxes_default = ConveyorBeltBoxesRegular;
