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
var Monkey_exports = {};
__export(Monkey_exports, {
  default: () => Monkey_default
});
module.exports = __toCommonJS(Monkey_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MonkeyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 120C640 80.25 607.75 48 568 48H555.75C535.5 19 501.999 0 464 0C425.999 0 392.5 19 372.25 48H360C320.25 48 288 80.25 288 120C288 158.75 318.75 190.125 357.125 191.75C357.875 194.375 358.625 197 359.5 199.5C263.25 224.625 192 311.875 192 416V464H184C161.999 464 144 446 144 424V168C144 128.25 111.75 96 72 96S0 128.25 0 168V232C0 245.25 10.75 256 24 256S48 245.25 48 232V168C48 154.75 58.75 144 72 144S96 154.75 96 168V424C96 472.5 135.5 512 184 512H432C440.875 512 448 504.875 448 496C448 478.375 433.625 464 416 464H384L467.375 401.5L480 451.375V480C480 497.625 494.375 512 512 512H576C593.625 512 608 497.625 608 480V463.75C608 453.25 606.75 442.875 604.125 432.75L552.875 227.5C561 216.875 567 204.75 570.875 191.75C609.25 190.125 640 158.75 640 120ZM592 120C592 130.375 585.25 139 576 142.375V112C576 107 575.125 102.125 574.5 97.375C584.5 100.25 592 109.125 592 120ZM352 112V142.375C342.75 139 336 130.375 336 120C336 109.125 343.5 100.25 353.5 97.375C352.875 102.125 352 107 352 112ZM400 112C400 76.75 428.75 48 464 48S528 76.75 528 112V160C528 195.25 499.25 224 464 224S400 195.25 400 160V112ZM557.625 444.375C559.25 450.75 560 457.25 560 463.75V464H528V445.375L526.5 439.625L496.25 319.75L304 464H240V416C240 328.25 304.625 255.625 388.75 242.375C408.625 260.625 434.875 272 464 272C481.125 272 497.25 267.875 511.75 261L557.625 444.375ZM496 136C504.875 136 512 128.875 512 120S504.875 104 496 104S480 111.125 480 120S487.125 136 496 136ZM432 136C440.875 136 448 128.875 448 120S440.875 104 432 104S416 111.125 416 120S423.125 136 432 136Z" })
  }
));
MonkeyRegular.displayName = "MonkeyRegular";
var Monkey_default = MonkeyRegular;
