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
var ClosedCaptioning_exports = {};
__export(ClosedCaptioning_exports, {
  default: () => ClosedCaptioning_default
});
module.exports = __toCommonJS(ClosedCaptioning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClosedCaptioningThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.652 547.348 32 512 32ZM560 416C560 442.467 538.467 464 512 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H512C538.467 48 560 69.533 560 96V416ZM192 176C213.359 176 233.453 184.328 248.562 199.438C251.687 202.562 256.75 202.562 259.875 199.438S263 191.25 259.875 188.125C241.75 169.984 217.641 160 192 160S142.25 169.984 124.125 188.125C105.984 206.25 96 230.359 96 256S105.984 305.75 124.125 323.875C142.25 342.016 166.359 352 192 352S241.75 342.016 259.875 323.875C263 320.75 263 315.688 259.875 312.563S251.688 309.438 248.563 312.563C233.453 327.672 213.359 336 192 336S150.547 327.672 135.438 312.562S112 277.359 112 256S120.328 214.547 135.438 199.438S170.641 176 192 176ZM400 176C421.359 176 441.453 184.328 456.562 199.438C459.687 202.562 464.75 202.562 467.875 199.438S471 191.25 467.875 188.125C449.75 169.984 425.641 160 400 160S350.25 169.984 332.125 188.125C313.984 206.25 304 230.359 304 256S313.984 305.75 332.125 323.875C350.25 342.016 374.359 352 400 352S449.75 342.016 467.875 323.875C471 320.75 471 315.688 467.875 312.563S459.688 309.438 456.563 312.563C441.453 327.672 421.359 336 400 336S358.547 327.672 343.438 312.562S320 277.359 320 256S328.328 214.547 343.438 199.438S378.641 176 400 176Z" })
  }
));
ClosedCaptioningThin.displayName = "ClosedCaptioningThin";
var ClosedCaptioning_default = ClosedCaptioningThin;
