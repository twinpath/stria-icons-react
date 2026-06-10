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
var SquareStar_exports = {};
__export(SquareStar_exports, {
  default: () => SquareStar_default
});
module.exports = __toCommonJS(SquareStar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareStarRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM359.299 200.463L276.971 188.484L240.166 114.016C236.863 107.357 230.41 103.998 223.961 104C217.551 104 211.143 107.318 207.834 114.016L171.029 188.484L88.701 200.463C73.926 202.598 68.01 220.764 78.717 231.168L138.291 289.1L124.203 370.934C122.199 382.631 131.523 392 141.982 392C144.756 392 147.611 391.34 150.354 389.891L224 351.248L297.646 389.891C300.383 391.326 303.229 391.979 305.998 391.979C316.463 391.979 325.803 382.639 323.797 370.934L309.709 289.1L369.283 231.168C379.99 220.764 374.074 202.598 359.299 200.463ZM264.159 266.441C260.376 270.12 258.65 275.427 259.546 280.626L266.182 319.174L231.434 300.942C226.779 298.499 221.221 298.499 216.566 300.942L181.82 319.174L188.456 280.626C189.352 275.427 187.626 270.12 183.843 266.441L155.83 239.201L194.574 233.564C199.781 232.806 204.283 229.537 206.614 224.819L224 189.641L241.386 224.819C243.717 229.537 248.219 232.806 253.426 233.564L292.172 239.201L264.159 266.441Z" })
  }
));
SquareStarRegular.displayName = "SquareStarRegular";
var SquareStar_default = SquareStarRegular;
