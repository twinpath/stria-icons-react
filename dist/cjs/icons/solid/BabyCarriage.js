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
var BabyCarriage_exports = {};
__export(BabyCarriage_exports, {
  default: () => BabyCarriage_default
});
module.exports = __toCommonJS(BabyCarriage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BabyCarriageSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144.75 16.974C133.5 -0.777 107.625 -5.777 90.75 7.599C35.25 51.851 0 117.996 0 192H256L144.75 16.974ZM496 95.978H448C412.75 95.978 384 124.73 384 159.982V224H0C0 274.628 23 320.365 60.25 354.742C25.75 363.617 0 394.744 0 431.996C0 476.248 35.75 512 80 512S160 476.248 160 431.996C160 423.12 158.25 414.745 155.625 406.745C177.25 412.745 200.25 415.995 224 415.995S270.875 412.745 292.375 406.745C289.75 414.745 288 423.12 288 431.996C288 476.248 323.75 512 368 512S448 476.248 448 431.996C448 394.744 422.25 363.617 387.75 354.742C425 320.365 448 274.613 448 223.985V159.982H496C504.75 159.982 512 152.731 512 143.981V111.979C512 103.229 504.75 95.978 496 95.978ZM80 463.997C62.375 463.997 48 449.622 48 431.996S62.375 399.994 80 399.994S112 414.37 112 431.996S97.625 463.997 80 463.997ZM400 431.996C400 449.622 385.625 463.997 368 463.997S336 449.622 336 431.996S350.375 399.994 368 399.994S400 414.37 400 431.996Z" })
  }
));
BabyCarriageSolid.displayName = "BabyCarriageSolid";
var BabyCarriage_default = BabyCarriageSolid;
