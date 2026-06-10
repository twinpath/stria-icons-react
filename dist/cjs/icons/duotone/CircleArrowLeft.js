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
var CircleArrowLeft_exports = {};
__export(CircleArrowLeft_exports, {
  default: () => CircleArrowLeft_default
});
module.exports = __toCommonJS(CircleArrowLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleArrowLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.422 16 16 123.422 16 256S123.422 496 256 496S496 388.578 496 256S388.578 16 256 16ZM384 288H205.25L254.625 337.375C267.125 349.875 267.125 370.125 254.625 382.625S221.875 395.125 209.375 382.625L105.398 278.648C97.4 270.664 96 260.898 96 256C96 251.117 97.391 241.344 105.398 233.352L209.375 129.375C221.875 116.875 242.125 116.875 254.625 129.375S267.125 162.125 254.625 174.625L205.25 224H384C401.688 224 416 238.328 416 256S401.688 288 384 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 288H205.25L254.625 337.375C267.125 349.875 267.125 370.125 254.625 382.625S221.875 395.125 209.375 382.625L105.398 278.648C97.4 270.664 96 260.898 96 256C96 251.117 97.391 241.344 105.398 233.352L209.375 129.375C221.875 116.875 242.125 116.875 254.625 129.375S267.125 162.125 254.625 174.625L205.25 224H384C401.688 224 416 238.328 416 256S401.688 288 384 288Z" })
    ]
  }
));
CircleArrowLeftDuotone.displayName = "CircleArrowLeftDuotone";
var CircleArrowLeft_default = CircleArrowLeftDuotone;
