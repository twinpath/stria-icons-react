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
var SquareSlidersVertical_exports = {};
__export(SquareSlidersVertical_exports, {
  default: () => SquareSlidersVertical_default
});
module.exports = __toCommonJS(SquareSlidersVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareSlidersVerticalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM384 80C392.838 80 400 87.164 400 96V416C400 424.836 392.838 432 384 432H64C55.164 432 48 424.836 48 416V96C48 87.164 55.164 80 64 80H384ZM144 112C130.75 112 120 122.75 120 136V160H104C90.75 160 80 170.75 80 184S90.75 208 104 208H120V376C120 389.254 130.746 400 144 400C157.256 400 168 389.254 168 376V208H184C197.25 208 208 197.25 208 184S197.25 160 184 160H168V136C168 122.75 157.25 112 144 112ZM304 112C290.75 112 280 122.75 280 136V288H264C250.75 288 240 298.75 240 312S250.75 336 264 336H280V376C280 389.254 290.746 400 304 400C317.256 400 328 389.254 328 376V336H344C357.25 336 368 325.25 368 312S357.25 288 344 288H328V136C328 122.75 317.25 112 304 112Z" })
  }
));
SquareSlidersVerticalRegular.displayName = "SquareSlidersVerticalRegular";
var SquareSlidersVertical_default = SquareSlidersVerticalRegular;
