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
var DryerHeat_exports = {};
__export(DryerHeat_exports, {
  default: () => DryerHeat_default
});
module.exports = __toCommonJS(DryerHeat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DryerHeatRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 0H80C35.818 0 0 35.816 0 80V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V80C448 35.816 412.184 0 368 0ZM400 448C400 456.824 392.822 464 384 464H64C55.178 464 48 456.824 48 448V80C48 62.355 62.355 48 80 48H368C385.645 48 400 62.355 400 80V448ZM128.053 104C128.053 90.75 117.227 80 104.035 80C90.721 80 80.018 90.75 80.018 104S90.721 128 104.035 128C117.227 128 128.053 117.25 128.053 104ZM184.053 128C197.244 128 207.947 117.25 207.947 104S197.244 80 184.053 80C170.738 80 160.035 90.75 160.035 104S170.738 128 184.053 128ZM224 160C148.836 160 87.982 220.875 87.982 296S148.836 432 224 432S360.018 371.125 360.018 296S299.164 160 224 160ZM219.328 371.312C216.203 374.438 212.094 376 208 376S199.828 374.438 196.703 371.312L190 364.625C169.969 344.594 165.031 314.156 177.688 288.844C184.172 275.875 181.641 260.25 171.391 250L164.703 243.312C158.438 237.094 158.438 226.969 164.672 220.688C170.922 214.438 181.047 214.438 187.297 220.688L194 227.375C214.031 247.406 218.969 277.844 206.312 303.156C199.828 316.125 202.359 331.75 212.609 342L219.297 348.688C225.562 354.906 225.562 365.031 219.328 371.312ZM283.328 371.312C280.203 374.438 276.094 376 272 376S263.828 374.438 260.703 371.312L254 364.625C233.969 344.594 229.031 314.156 241.688 288.844C248.172 275.875 245.641 260.25 235.391 250L228.703 243.312C222.437 237.094 222.437 226.969 228.672 220.688C234.922 214.438 245.047 214.438 251.297 220.688L258 227.375C278.031 247.406 282.969 277.844 270.312 303.156C263.828 316.125 266.359 331.75 276.609 342L283.297 348.688C289.562 354.906 289.562 365.031 283.328 371.312Z" })
  }
));
DryerHeatRegular.displayName = "DryerHeatRegular";
var DryerHeat_default = DryerHeatRegular;
