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
var DropletDegree_exports = {};
__export(DropletDegree_exports, {
  default: () => DropletDegree_default
});
module.exports = __toCommonJS(DropletDegree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DropletDegreeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368.002 32C323.939 32 288.002 67.938 288.002 112S323.939 192 368.002 192S448 156.062 448 112S412.064 32 368.002 32ZM368.002 144C350.357 144 336.002 129.645 336.002 112S350.357 80 368.002 80S400 94.355 400 112S385.646 144 368.002 144ZM159.99 32C148.74 32 137.457 38.32 133.438 51.361C90.938 189.281 0 226.906 0 324.141C0 410.219 71.562 480 160 480S320 410.219 320 324.141C320 226.359 229.271 190.047 186.562 51.361C182.932 38.596 171.479 32 159.99 32ZM272 324.141C272 383.613 221.758 432 160 432S48 383.613 48 324.141C48 290.197 63.762 266.875 93.967 225.211C114.818 196.451 139.463 162.457 159.984 116.799C180.592 162.73 205.311 196.717 226.219 225.459C256.301 266.82 272 289.994 272 324.141Z" })
  }
));
DropletDegreeRegular.displayName = "DropletDegreeRegular";
var DropletDegree_default = DropletDegreeRegular;
