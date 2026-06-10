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
var TrashCanArrowUp_exports = {};
__export(TrashCanArrowUp_exports, {
  default: () => TrashCanArrowUp_default
});
module.exports = __toCommonJS(TrashCanArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanArrowUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 80H349.625L315.625 23.25C306.984 8.826 291.406 0 274.592 0H173.408C156.594 0 141.016 8.826 132.375 23.25L98.375 80H24C10.746 80 0 90.744 0 104C0 117.254 10.746 128 24 128H32V448C32 483.346 60.654 512 96 512H352C387.346 512 416 483.346 416 448V128H424C437.254 128 448 117.254 448 104C448 90.744 437.254 80 424 80ZM171.875 50.875C172.875 49.125 174.875 48 177 48H271C273.125 48 275.125 49.125 276.125 50.875L293.625 80H154.375L171.875 50.875ZM368 448C368 456.836 360.836 464 352 464H96C87.164 464 80 456.836 80 448V128H368V448ZM166.312 299.625L200 265.938V379.938C200 393.188 210.75 403.938 224 403.938S248 393.188 248 379.938V265.938L281.688 299.625C286.375 304.313 292.5 306.656 298.656 306.656S310.938 304.313 315.625 299.625C325 290.25 325 275.063 315.625 265.688L240.969 191.031C231.594 181.656 216.406 181.656 207.031 191.031L132.375 265.688C123 275.063 123 290.25 132.375 299.625S156.938 309 166.312 299.625Z" })
  }
));
TrashCanArrowUpRegular.displayName = "TrashCanArrowUpRegular";
var TrashCanArrowUp_default = TrashCanArrowUpRegular;
