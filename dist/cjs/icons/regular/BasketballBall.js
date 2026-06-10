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
var BasketballBall_exports = {};
__export(BasketballBall_exports, {
  default: () => BasketballBall_default
});
module.exports = __toCommonJS(BasketballBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BasketballBallRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM271.15 64.768C309.57 67.789 344.775 82.145 373.543 104.52L256 222.062L222.305 188.367C250.02 154.021 267.674 111.361 271.15 64.768ZM188.066 154.129L138.457 104.52C162.684 85.676 191.475 72.549 222.924 67.055C219.402 99.572 206.883 129.357 188.066 154.129ZM222.062 256L104.52 373.543C82.145 344.775 67.789 309.57 64.768 271.15C111.359 267.674 154.02 250.02 188.367 222.305L222.062 256ZM256 289.938L289.695 323.633C261.98 357.979 244.326 400.639 240.85 447.232C202.43 444.211 167.225 429.855 138.457 407.48L256 289.938ZM323.934 357.871L373.543 407.48C349.316 426.324 320.525 439.451 289.076 444.945C292.598 412.428 305.117 382.643 323.934 357.871ZM289.938 256L407.48 138.457C429.855 167.225 444.211 202.43 447.232 240.85C400.641 244.326 357.98 261.98 323.633 289.695L289.938 256ZM104.52 138.457L154.127 188.064C129.352 206.883 99.568 219.402 67.055 222.924C72.549 191.475 85.676 162.684 104.52 138.457ZM407.48 373.543L357.873 323.936C382.648 305.117 412.432 292.598 444.945 289.076C439.451 320.525 426.324 349.316 407.48 373.543Z" })
  }
));
BasketballBallRegular.displayName = "BasketballBallRegular";
var BasketballBall_default = BasketballBallRegular;
