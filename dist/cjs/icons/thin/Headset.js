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
var Headset_exports = {};
__export(Headset_exports, {
  default: () => Headset_default
});
module.exports = __toCommonJS(Headset_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadsetThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0C123.656 0 16 107.656 16 240V312C16 316.406 19.578 320 24 320S32 316.406 32 312V240C32 116.5 132.484 16 256 16S480 116.5 480 240V400C480 430.875 454.875 456 424 456H320C319.697 456 319.52 456.289 319.227 456.32C315.529 433.484 295.879 416 272 416H240C213.49 416 192 437.492 192 464S213.49 512 240 512H272C295.879 512 315.529 494.516 319.227 471.68C319.52 471.711 319.697 472 320 472H424C463.703 472 496 439.688 496 400V240C496 107.656 388.344 0 256 0ZM272 496H240C222.355 496 208 481.645 208 464S222.355 432 240 432H272C289.645 432 304 446.355 304 464S289.645 496 272 496ZM144 192H128C92.654 192 64 220.652 64 256V320C64 355.348 92.654 384 128 384H144C161.674 384 176 369.672 176 352V224C176 206.328 161.674 192 144 192ZM160 352C160 360.824 152.822 368 144 368H128C101.533 368 80 346.469 80 320V256C80 229.531 101.533 208 128 208H144C152.822 208 160 215.176 160 224V352ZM384 384C419.346 384 448 355.348 448 320V256C448 220.652 419.346 192 384 192H368C350.326 192 336 206.328 336 224V352C336 369.672 350.326 384 368 384H384ZM352 352V224C352 215.176 359.178 208 368 208H384C410.467 208 432 229.531 432 256V320C432 346.469 410.467 368 384 368H368C359.178 368 352 360.824 352 352Z" })
  }
));
HeadsetThin.displayName = "HeadsetThin";
var Headset_default = HeadsetThin;
