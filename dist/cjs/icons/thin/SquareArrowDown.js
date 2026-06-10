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
var SquareArrowDown_exports = {};
__export(SquareArrowDown_exports, {
  default: () => SquareArrowDown_default
});
module.exports = __toCommonJS(SquareArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M218.344 381.656C221.469 384.781 226.531 384.781 229.656 381.656L349.656 261.656C351.219 260.094 352 258.062 352 256S351.219 251.906 349.656 250.344C346.531 247.219 341.469 247.219 338.344 250.344L232 356.688V136C232 131.594 228.422 128 224 128S216 131.594 216 136V356.688L109.656 250.344C106.531 247.219 101.469 247.219 98.344 250.344S95.219 258.531 98.344 261.656L218.344 381.656ZM64 480H384C419.348 480 448 451.348 448 416V96C448 60.654 419.348 32 384 32H64C28.652 32 0 60.654 0 96V416C0 451.348 28.652 480 64 480ZM16 96C16 69.533 37.531 48 64 48H384C410.469 48 432 69.533 432 96V416C432 442.467 410.469 464 384 464H64C37.531 464 16 442.467 16 416V96Z" })
  }
));
SquareArrowDownThin.displayName = "SquareArrowDownThin";
var SquareArrowDown_default = SquareArrowDownThin;
