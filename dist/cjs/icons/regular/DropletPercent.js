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
var DropletPercent_exports = {};
__export(DropletPercent_exports, {
  default: () => DropletPercent_default
});
module.exports = __toCommonJS(DropletPercent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DropletPercentRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M186.562 51.361C182.932 38.596 171.479 32 159.99 32C148.74 32 137.457 38.32 133.438 51.361C90.938 189.283 0 226.908 0 324.141C0 410.219 71.562 480 160 480S320 410.219 320 324.141C320 226.361 229.273 190.049 186.562 51.361ZM160 432C98.242 432 48 383.615 48 324.141C48 290.197 63.762 266.877 93.967 225.213C114.816 196.453 139.463 162.457 159.986 116.799C180.592 162.73 205.313 196.717 226.219 225.461C256.301 266.822 272 289.994 272 324.141C272 383.615 221.758 432 160 432ZM120 304C133.312 304 144 293.312 144 280S133.312 256 120 256S96 266.688 96 280S106.688 304 120 304ZM196.688 260.688L100.688 356.688C94.438 362.938 94.438 373.063 100.688 379.312C103.812 382.438 107.906 384 112 384S120.188 382.438 123.312 379.312L219.312 283.312C225.562 277.062 225.562 266.937 219.312 260.688S202.938 254.438 196.688 260.688ZM200 336C186.688 336 176 346.688 176 360S186.688 384 200 384S224 373.312 224 360S213.312 336 200 336Z" })
  }
));
DropletPercentRegular.displayName = "DropletPercentRegular";
var DropletPercent_default = DropletPercentRegular;
