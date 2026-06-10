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
var Turntable_exports = {};
__export(Turntable_exports, {
  default: () => Turntable_default
});
module.exports = __toCommonJS(Turntable_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TurntableDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H512C547.375 480 576 451.375 576 416V96C576 60.625 547.375 32 512 32ZM224 416C135.625 416 64 344.375 64 256S135.625 96 224 96S384 167.625 384 256S312.375 416 224 416ZM512 267.875C512 277.75 509.625 287.5 505.25 296.5L486.25 334.25C494.25 338.25 497.375 347.875 493.5 355.75L467.75 407.125C463.875 415 454.25 418.25 446.25 414.25L417.75 400C409.75 396 406.625 386.5 410.5 378.5L436.25 327.125C440.125 319.25 449.75 316 457.75 320L476.625 282.125C478.844 277.67 480 272.762 480 267.785V112C480 103.199 487.199 96 496 96S512 103.199 512 112V267.875Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 96C487.199 96 480 103.199 480 112V267.785C480 272.762 478.844 277.67 476.625 282.125L457.75 320C449.75 316 440.125 319.25 436.25 327.125L410.5 378.5C406.625 386.5 409.75 396 417.75 400L446.25 414.25C454.25 418.25 463.875 415 467.75 407.125L493.5 355.75C497.375 347.875 494.25 338.25 486.25 334.25L505.25 296.5C509.625 287.5 512 277.75 512 267.875V112C512 103.199 504.801 96 496 96ZM224 96C135.625 96 64 167.625 64 256S135.625 416 224 416S384 344.375 384 256S312.375 96 224 96ZM224 288C206.375 288 192 273.625 192 256S206.375 224 224 224S256 238.375 256 256S241.625 288 224 288Z" })
    ]
  }
));
TurntableDuotone.displayName = "TurntableDuotone";
var Turntable_default = TurntableDuotone;
