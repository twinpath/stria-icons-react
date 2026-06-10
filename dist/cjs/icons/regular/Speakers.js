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
var Speakers_exports = {};
__export(Speakers_exports, {
  default: () => Speakers_default
});
module.exports = __toCommonJS(Speakers_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpeakersRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M456 160C478.092 160 496 142.092 496 120S478.092 80 456 80S416 97.908 416 120S433.908 160 456 160ZM576 0H336C300.654 0 272 28.652 272 64V448C272 483.346 300.654 512 336 512H576C611.346 512 640 483.346 640 448V64C640 28.652 611.346 0 576 0ZM592 448C592 456.822 584.822 464 576 464H336C327.178 464 320 456.822 320 448V64C320 55.178 327.178 48 336 48H576C584.822 48 592 55.178 592 64V448ZM456 224C398.562 224 352 270.562 352 328S398.562 432 456 432S560 385.438 560 328S513.438 224 456 224ZM456 384C425.121 384 400 358.877 400 328C400 297.121 425.121 272 456 272S512 297.121 512 328C512 358.877 486.879 384 456 384ZM184 80C161.908 80 144 97.908 144 120S161.908 160 184 160S224 142.092 224 120S206.092 80 184 80ZM184 272C199.676 272 213.824 278.512 224 288.928V232.346C211.674 227.115 198.24 224 184 224C126.562 224 80 270.562 80 328S126.562 432 184 432C198.24 432 211.674 428.885 224 423.654V367.07C213.824 377.486 199.676 384 184 384C153.121 384 128 358.877 128 328C128 297.121 153.121 272 184 272ZM264.969 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H264.969C253.025 498.756 244.721 482.326 241.617 464H64C55.178 464 48 456.822 48 448V64C48 55.178 55.178 48 64 48H241.617C244.721 29.674 253.025 13.244 264.969 0Z" })
  }
));
SpeakersRegular.displayName = "SpeakersRegular";
var Speakers_default = SpeakersRegular;
