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
var Gift_exports = {};
__export(Gift_exports, {
  default: () => Gift_default
});
module.exports = __toCommonJS(Gift_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GiftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 128H422.828C438.047 114.795 448 94.734 448 72C448 32.297 418.219 0 381.625 0C350.555 0 327.312 6.326 256 120.887C184.688 6.326 161.445 0 130.375 0C93.781 0 64 32.297 64 72C64 94.734 73.953 114.795 89.172 128H32C14.328 128 0 142.326 0 160V224C0 241.674 14.328 256 32 256V448C32 483.346 60.652 512 96 512H416C451.348 512 480 483.346 480 448V256C497.672 256 512 241.674 512 224V160C512 142.326 497.672 128 480 128ZM381.625 16C409.406 16 432 41.125 432 72S409.406 128 381.625 128H270.344C340.156 16 358.531 16 381.625 16ZM80 72C80 41.125 102.594 16 130.375 16C153.469 16 171.844 16 241.656 128H130.375C102.594 128 80 102.875 80 72ZM16 224V160C16 151.178 23.176 144 32 144H248V240H32C23.176 240 16 232.822 16 224ZM96 496C69.531 496 48 474.467 48 448V256H248V496H96ZM464 448C464 474.467 442.469 496 416 496H264V256H464V448ZM496 224C496 232.822 488.824 240 480 240H264V144H480C488.824 144 496 151.178 496 160V224Z" })
  }
));
GiftThin.displayName = "GiftThin";
var Gift_default = GiftThin;
