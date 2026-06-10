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
var LaptopCode_exports = {};
__export(LaptopCode_exports, {
  default: () => LaptopCode_default
});
module.exports = __toCommonJS(LaptopCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopCodeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 352H24C10.75 352 0 362.75 0 376V392C0 440.531 39.469 480 88 480H552C600.531 480 640 440.531 640 392V376C640 362.75 629.25 352 616 352ZM552 432H88C68.688 432 52.516 418.234 48.797 400H591.203C587.484 418.234 571.312 432 552 432ZM112 88C112 83.594 115.594 80 120 80H520C524.406 80 528 83.594 528 88V320H576V88C576 57.125 550.875 32 520 32H120C89.125 32 64 57.125 64 88V320H112V88ZM365.859 262.164C369.766 266.07 374.875 268.008 380 268.008S390.234 266.07 394.141 262.164L442.141 214.164C449.953 206.352 449.953 193.664 442.141 185.852L394.141 137.852C386.328 130.039 373.672 130.039 365.859 137.852S358.047 158.352 365.859 166.164L399.719 200.008L365.859 233.852C358.047 241.664 358.047 254.352 365.859 262.164ZM274.141 137.852C266.328 130.039 253.672 130.039 245.859 137.852L197.859 185.852C190.047 193.664 190.047 206.352 197.859 214.164L245.859 262.164C249.766 266.07 254.875 268.008 260 268.008S270.234 266.07 274.141 262.164C281.953 254.352 281.953 241.664 274.141 233.852L240.281 200.008L274.141 166.164C281.953 158.352 281.953 145.664 274.141 137.852Z" })
  }
));
LaptopCodeRegular.displayName = "LaptopCodeRegular";
var LaptopCode_default = LaptopCodeRegular;
