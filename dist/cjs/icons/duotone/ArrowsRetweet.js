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
var ArrowsRetweet_exports = {};
__export(ArrowsRetweet_exports, {
  default: () => ArrowsRetweet_default
});
module.exports = __toCommonJS(ArrowsRetweet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsRetweetDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175.998 352C167.161 352 159.998 344.837 159.998 336L160 173.25L201.375 214.625C213.875 227.125 234.125 227.125 246.625 214.625S259.125 181.875 246.625 169.375L150.625 73.375C144.375 67.125 136.187 64 128 64S111.625 67.125 105.375 73.375L9.375 169.375C-3.125 181.875 -3.125 202.125 9.375 214.625S42.125 227.125 54.625 214.625L96 173.25L95.998 351.999C95.998 387.346 124.652 416 159.998 416H306.578C334.949 416 349.288 381.815 329.406 361.576L329.406 361.576C323.389 355.45 315.163 352 306.577 352H175.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.267 342.625L534.267 438.625C528.017 444.875 519.829 448 511.642 448S495.267 444.875 489.017 438.625L393.017 342.625C380.517 330.125 380.517 309.875 393.017 297.375S425.767 284.875 438.267 297.375L479.642 338.75L479.643 176C479.644 167.163 472.48 160 463.644 160H333.064C324.478 160 316.252 156.55 310.235 150.424L310.235 150.424C290.354 130.185 304.693 96 333.064 96H479.643C514.99 96 543.644 124.654 543.643 160.001L543.642 338.75L585.017 297.375C597.517 284.875 617.767 284.875 630.267 297.375S642.767 330.125 630.267 342.625Z" })
    ]
  }
));
ArrowsRetweetDuotone.displayName = "ArrowsRetweetDuotone";
var ArrowsRetweet_default = ArrowsRetweetDuotone;
