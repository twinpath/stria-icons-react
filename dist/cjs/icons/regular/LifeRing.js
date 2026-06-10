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
var LifeRing_exports = {};
__export(LifeRing_exports, {
  default: () => LifeRing_default
});
module.exports = __toCommonJS(LifeRing_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LifeRingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M441.797 407.859C475.652 366.486 496 313.629 496 256S475.652 145.514 441.797 104.141L448.969 96.969C458.344 87.594 458.344 72.406 448.969 63.031S424.406 53.656 415.031 63.031L407.859 70.203C366.486 36.348 313.629 16 256 16S145.514 36.348 104.141 70.203L96.969 63.031C87.594 53.656 72.406 53.656 63.031 63.031S53.656 87.594 63.031 96.969L70.203 104.141C36.348 145.514 16 198.371 16 256S36.348 366.486 70.203 407.859L63.031 415.031C53.656 424.406 53.656 439.594 63.031 448.969C67.719 453.656 73.859 456 80 456S92.281 453.656 96.969 448.969L104.141 441.797C145.514 475.652 198.371 496 256 496S366.486 475.652 407.859 441.797L415.031 448.969C419.719 453.656 425.859 456 432 456S444.281 453.656 448.969 448.969C458.344 439.594 458.344 424.406 448.969 415.031L441.797 407.859ZM448 256C448 300.297 432.775 341.021 407.48 373.543L338.422 304.484C346.84 290.209 352 273.773 352 256S346.84 221.791 338.422 207.516L407.48 138.457C432.775 170.979 448 211.703 448 256ZM208 256C208 229.533 229.533 208 256 208S304 229.533 304 256S282.467 304 256 304S208 282.467 208 256ZM256 64C300.297 64 341.021 79.225 373.543 104.52L304.484 173.578C290.209 165.16 273.773 160 256 160S221.791 165.16 207.516 173.578L138.457 104.52C170.979 79.225 211.703 64 256 64ZM64 256C64 211.703 79.225 170.979 104.52 138.457L173.578 207.516C165.16 221.791 160 238.227 160 256S165.16 290.209 173.578 304.484L104.52 373.543C79.225 341.021 64 300.297 64 256ZM256 448C211.703 448 170.979 432.775 138.457 407.48L207.516 338.422C221.791 346.84 238.227 352 256 352S290.209 346.84 304.484 338.422L373.543 407.48C341.021 432.775 300.297 448 256 448Z" })
  }
));
LifeRingRegular.displayName = "LifeRingRegular";
var LifeRing_default = LifeRingRegular;
