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
var SquareS_exports = {};
__export(SquareS_exports, {
  default: () => SquareS_default
});
module.exports = __toCommonJS(SquareS_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareSThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM226.031 248.328C170.781 233.875 137.781 222.328 145 184.109C147.156 172.625 153.875 162.953 164.406 156.125C180.719 145.547 214.906 136.547 284.969 153.406C289.25 154.391 293.594 151.797 294.625 147.5S293 138.875 288.719 137.844C228.062 123.25 183.375 124.891 155.719 142.688C141.406 151.953 132.281 165.234 129.25 181.141C118.75 236.781 173.594 251.141 221.969 263.812C277.219 278.281 310.219 289.812 303 328.047C300.406 341.781 293.406 351.703 281.562 358.406C248.031 377.312 185.844 365.406 138.781 347.984C134.75 346.453 130.031 348.562 128.5 352.703S129.062 361.453 133.219 362.984C150 369.203 194.5 384.047 236.344 384.047C255.594 384.047 274.281 380.906 289.437 372.344C305.406 363.297 315.25 349.406 318.75 331.016C329.25 275.359 274.406 261 226.031 248.328Z" })
  }
));
SquareSThin.displayName = "SquareSThin";
var SquareS_default = SquareSThin;
