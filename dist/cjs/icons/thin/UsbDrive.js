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
var UsbDrive_exports = {};
__export(UsbDrive_exports, {
  default: () => UsbDrive_default
});
module.exports = __toCommonJS(UsbDrive_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UsbDriveThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 96H64C28.654 96 0 124.652 0 160V352C0 387.346 28.654 416 64 416H416C433.674 416 448 401.672 448 384V128C448 110.326 433.674 96 416 96ZM432 384C432 392.822 424.822 400 416 400H64C37.533 400 16 378.467 16 352V160C16 133.533 37.533 112 64 112H416C424.822 112 432 119.178 432 128V384ZM600 128H488C483.578 128 480 131.594 480 136S483.578 144 488 144H600C613.234 144 624 154.781 624 168V344C624 357.219 613.234 368 600 368H488C483.578 368 480 371.594 480 376S483.578 384 488 384H600C622.062 384 640 366.062 640 344V168C640 145.938 622.062 128 600 128ZM544 240H576C584.836 240 592 232.836 592 224V192C592 183.162 584.836 176 576 176H544C535.164 176 528 183.162 528 192V224C528 232.836 535.164 240 544 240ZM544 192H576V224H544V192ZM528 320C528 328.836 535.164 336 544 336H576C584.836 336 592 328.836 592 320V288C592 279.162 584.836 272 576 272H544C535.164 272 528 279.162 528 288V320ZM544 288H576V320H544V288Z" })
  }
));
UsbDriveThin.displayName = "UsbDriveThin";
var UsbDrive_default = UsbDriveThin;
