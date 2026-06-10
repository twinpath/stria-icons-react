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
var ColonSign_exports = {};
__export(ColonSign_exports, {
  default: () => ColonSign_default
});
module.exports = __toCommonJS(ColonSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ColonSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M310.972 352.188C293.542 369.712 272.029 381.362 248.742 387.311L305.008 154.885C306.94 156.619 309.126 157.959 310.972 159.815C320.35 169.221 335.541 169.221 344.934 159.877C354.327 150.533 354.358 135.346 345.012 125.94C336.502 117.397 327.271 109.848 317.509 103.243L335.322 29.659C338.432 16.753 330.524 3.784 317.63 0.691C304.736 -2.466 291.78 5.503 288.654 18.347L273.201 82.178C263.793 79.032 254.253 76.43 244.362 74.852L255.303 29.659C258.413 16.753 250.504 3.784 237.611 0.691C224.748 -2.466 211.745 5.503 208.635 18.347L195.169 73.977C153.856 78.516 115.407 96.01 85.605 125.94C14.134 197.658 14.134 314.345 85.589 386.063C94.359 394.866 103.881 402.632 113.975 409.376L96.311 482.344C93.2 495.25 101.109 508.219 114.002 511.312C115.894 511.781 117.8 512 119.66 512C130.491 512 140.321 504.625 142.978 493.656L158.359 430.118C167.783 433.211 177.348 435.727 187.247 437.25L176.33 482.344C173.22 495.25 181.128 508.219 194.022 511.312C195.913 511.781 197.82 512 199.68 512C210.51 512 220.341 504.625 222.998 493.656L236.489 437.922C277.404 433.186 315.452 415.735 345.012 386.063C354.358 376.657 354.327 361.47 344.934 352.126C335.541 342.782 320.35 342.782 310.972 352.188ZM119.613 352.188C66.772 299.158 66.772 212.846 119.629 159.815C137.344 142.006 159.252 130.19 182.974 124.35L126.451 357.835C124.224 355.868 121.729 354.315 119.613 352.188ZM169.623 383.593L233.012 121.739C242.962 123.045 252.642 125.272 261.939 128.703L198.597 390.362C188.634 389.128 178.948 386.956 169.623 383.593Z" })
  }
));
ColonSignRegular.displayName = "ColonSignRegular";
var ColonSign_default = ColonSignRegular;
