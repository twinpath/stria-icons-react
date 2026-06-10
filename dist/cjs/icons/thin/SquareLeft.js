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
var SquareLeft_exports = {};
__export(SquareLeft_exports, {
  default: () => SquareLeft_default
});
module.exports = __toCommonJS(SquareLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 416V96C448 60.654 419.348 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416ZM64 464C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416C432 442.467 410.467 464 384 464H64ZM224 348.684V304H328C341.256 304 352 293.254 352 280V232C352 218.746 341.256 208 328 208H224V163.316C224 141.934 198.148 131.227 183.029 146.346L90.346 239.029C85.66 243.717 83.316 249.857 83.316 256S85.66 268.283 90.346 272.971L183.029 365.654C198.148 380.773 224 370.066 224 348.684ZM194.344 354.34L101.66 261.656C99.621 259.617 99.316 257.238 99.316 256S99.621 252.383 101.66 250.344L194.344 157.66C197.756 154.248 201.576 155.311 203.062 155.924C204.547 156.539 208 158.492 208 163.316V224H328C332.412 224 336 227.588 336 232V280C336 284.412 332.412 288 328 288H208V348.684C208 353.508 204.547 355.461 203.062 356.076C201.576 356.689 197.756 357.752 194.344 354.34Z" })
  }
));
SquareLeftThin.displayName = "SquareLeftThin";
var SquareLeft_default = SquareLeftThin;
