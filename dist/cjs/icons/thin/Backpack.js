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
var Backpack_exports = {};
__export(Backpack_exports, {
  default: () => Backpack_default
});
module.exports = __toCommonJS(Backpack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BackpackThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 80H304V40C304 17.938 286.062 0 264 0H184C161.938 0 144 17.938 144 40V80H128C57.309 80 0 137.307 0 208V448C0 483.346 28.654 512 64 512H384C419.348 512 448 483.346 448 448V208C448 137.307 390.693 80 320 80ZM160 40C160 26.766 170.766 16 184 16H264C277.234 16 288 26.766 288 40V80H160V40ZM352 496H96V392H352V496ZM352 376H96V352C96 325.533 117.533 304 144 304H304C330.467 304 352 325.533 352 352V376ZM432 448C432 474.467 410.467 496 384 496H368V352C368 316.654 339.348 288 304 288H144C108.654 288 80 316.654 80 352V496H64C37.533 496 16 474.467 16 448V208C16 146.242 66.244 96 128 96H320C381.758 96 432 146.242 432 208V448ZM312 184H136C131.578 184 128 187.578 128 192S131.578 200 136 200H312C316.422 200 320 196.422 320 192S316.422 184 312 184Z" })
  }
));
BackpackThin.displayName = "BackpackThin";
var Backpack_default = BackpackThin;
