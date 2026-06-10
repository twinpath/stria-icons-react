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
const CarSideSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M520 224L411.301 88.062C399.141 72.854 380.725 64 361.25 64H155.375C129.125 64 105.625 79.875 95.875 104.25L48 226.25C20.5 233.375 0 258.25 0 288V400C0 417.674 14.328 432 32 432H65.613C73.271 477.35 112.48 512 160 512S246.729 477.35 254.387 432H385.613C393.271 477.35 432.48 512 480 512S566.729 477.35 574.387 432H608C625.674 432 640 417.674 640 400V344C640 277.727 586.275 224 520 224ZM160 464C133.501 464 112 442.499 112 416S133.501 368 160 368C186.502 368 208 389.501 208 416S186.502 464 160 464ZM224 224H116.875L155.375 128H224V224ZM272 224V128H361.25L438 224H272ZM480 464C453.501 464 432 442.499 432 416S453.501 368 480 368C506.502 368 528 389.501 528 416S506.502 464 480 464Z" })
  }
));
CarSideSolid.displayName = "CarSideSolid";
var CarSide_default = CarSideSolid;
