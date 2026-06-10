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
var CarSide_exports = {};
__export(CarSide_exports, {
  default: () => CarSide_default
});
module.exports = __toCommonJS(CarSide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarSideDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 352C451.816 352 416 387.816 416 432C416 476.182 451.816 512 496 512S576 476.182 576 432C576 387.816 540.184 352 496 352ZM144 352C99.816 352 64 387.816 64 432C64 476.182 99.816 512 144 512S224 476.182 224 432C224 387.816 188.184 352 144 352ZM116.875 224H224V128H155.375L116.875 224ZM361.25 128H272V224H438L361.25 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M520 224L411.301 88.062C399.141 72.854 380.725 64 361.25 64H155.375C129.125 64 105.625 79.875 95.875 104.25L48 226.25C20.5 233.375 0 258.25 0 288V400C0 417.674 14.328 432 32 432C32 370.242 82.242 320 144 320S256 370.242 256 432H384C384 370.242 434.242 320 496 320S608 370.242 608 432C625.674 432 640 417.674 640 400V344C640 277.727 586.275 224 520 224ZM224 224H116.875L155.375 128H224V224ZM272 224V128H361.25L438 224H272Z" })
    ]
  }
));
CarSideDuotone.displayName = "CarSideDuotone";
var CarSide_default = CarSideDuotone;
