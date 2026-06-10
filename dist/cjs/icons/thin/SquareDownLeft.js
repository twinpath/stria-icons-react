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
var SquareDownLeft_exports = {};
__export(SquareDownLeft_exports, {
  default: () => SquareDownLeft_default
});
module.exports = __toCommonJS(SquareDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDownLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M325.988 221.895C335.361 212.523 335.359 197.328 325.988 187.953L292.047 154.012C282.676 144.641 267.479 144.641 258.105 154.012L184.566 227.551L152.971 195.953C137.852 180.836 112 191.547 112 212.926V344C112.002 350.629 114.686 356.625 119.029 360.969S129.373 368 136 368H267.074C288.457 368 299.166 342.148 284.045 327.031L252.449 295.434L325.988 221.895ZM314.674 210.578L229.822 295.434L272.732 338.344C276.143 341.754 275.082 345.578 274.467 347.062C273.85 348.547 271.9 352 267.074 352H136C133.117 352 131.219 350.531 130.344 349.656C129.467 348.781 128.002 346.883 128.002 344V212.926C128.002 208.102 131.453 206.148 132.937 205.531C134.424 204.918 138.246 203.859 141.656 207.27L184.566 250.18L269.42 165.328C272.539 162.207 277.613 162.207 280.732 165.328L314.674 199.266C317.795 202.387 317.795 207.461 314.674 210.578ZM448 416V96C448 60.652 419.348 32 384 32H64C28.652 32 0 60.652 0 96V416C0 451.344 28.652 480 64 480H384C419.348 480 448 451.344 448 416ZM432 416C432 442.469 410.469 464 384 464H64C37.531 464 16 442.469 16 416V96C16 69.531 37.531 48 64 48H384C410.469 48 432 69.531 432 96V416Z" })
  }
));
SquareDownLeftThin.displayName = "SquareDownLeftThin";
var SquareDownLeft_default = SquareDownLeftThin;
