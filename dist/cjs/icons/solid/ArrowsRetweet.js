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
const ArrowsRetweetSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M166.623 352C157.786 352 150.623 344.837 150.623 336L150.625 173.25L192 214.625C204.5 227.125 224.75 227.125 237.25 214.625S249.75 181.875 237.25 169.375L141.25 73.375C135 67.125 126.812 64 118.625 64S102.25 67.125 96 73.375L0 169.375C-12.5 181.875 -12.5 202.125 0 214.625S32.75 227.125 45.25 214.625L86.625 173.25L86.623 351.999C86.623 387.346 115.277 416 150.623 416H297.203C325.574 416 339.913 381.815 320.031 361.576L320.031 361.576C314.014 355.45 305.788 352 297.202 352H166.623ZM621.25 297.375C608.75 284.875 588.5 284.875 576 297.375L534.625 338.75L534.627 160.001C534.627 124.654 505.973 96 470.627 96H324.047C295.676 96 281.337 130.185 301.219 150.424L301.219 150.424C307.236 156.55 315.462 160 324.048 160H454.627C463.464 160 470.627 167.163 470.627 176L470.625 338.75L429.25 297.375C416.75 284.875 396.5 284.875 384 297.375S371.5 330.125 384 342.625L480 438.625C486.25 444.875 494.437 448 502.625 448S519 444.875 525.25 438.625L621.25 342.625C633.75 330.125 633.75 309.875 621.25 297.375Z" })
  }
));
ArrowsRetweetSolid.displayName = "ArrowsRetweetSolid";
var ArrowsRetweet_default = ArrowsRetweetSolid;
