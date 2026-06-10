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
var SquareFragile_exports = {};
__export(SquareFragile_exports, {
  default: () => SquareFragile_default
});
module.exports = __toCommonJS(SquareFragile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareFragileThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H384C419.344 480 448 451.346 448 416V96C448 60.654 419.344 32 384 32ZM432 416C432 442.467 410.469 464 384 464H64C37.531 464 16 442.467 16 416V96C16 69.533 37.531 48 64 48H384C410.469 48 432 69.533 432 96V416ZM288 96H160C142.326 96 128 110.326 128 128V224C128 274.389 166.955 315.25 216.322 319.227C216.289 319.52 216 319.697 216 320V400H168C163.594 400 160 403.578 160 408S163.594 416 168 416H280C284.406 416 288 412.422 288 408S284.406 400 280 400H232V320C232 319.697 231.711 319.52 231.678 319.227C281.045 315.25 320 274.389 320 224V128C320 110.326 305.674 96 288 96ZM304 224C304 268.111 268.111 304 224 304S144 268.111 144 224V128C144 119.178 151.178 112 160 112H220.15L243.188 140.781L196.844 160.641C194.406 161.688 192.656 163.875 192.156 166.484S192.469 171.781 194.344 173.656L250.344 229.656C251.906 231.219 253.938 232 256 232S260.094 231.219 261.656 229.656C264.781 226.531 264.781 221.469 261.656 218.344L213.999 170.703L259.156 151.359C261.438 150.375 263.156 148.375 263.75 145.938C264.375 143.516 263.812 140.953 262.25 139L240.65 112H288C296.822 112 304 119.178 304 128V224Z" })
  }
));
SquareFragileThin.displayName = "SquareFragileThin";
var SquareFragile_default = SquareFragileThin;
