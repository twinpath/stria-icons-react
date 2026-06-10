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
var ExpandWide_exports = {};
__export(ExpandWide_exports, {
  default: () => ExpandWide_default
});
module.exports = __toCommonJS(ExpandWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ExpandWideThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 64H8C3.594 64 0 67.594 0 72V184C0 188.406 3.594 192 8 192S16 188.406 16 184V80H120C124.406 80 128 76.406 128 72S124.406 64 120 64ZM504 64H392C387.594 64 384 67.594 384 72S387.594 80 392 80H496V184C496 188.406 499.594 192 504 192S512 188.406 512 184V72C512 67.594 508.406 64 504 64ZM504 320C499.594 320 496 323.594 496 328V432H392C387.594 432 384 435.594 384 440S387.594 448 392 448H504C508.406 448 512 444.406 512 440V328C512 323.594 508.406 320 504 320ZM120 432H16V328C16 323.594 12.406 320 8 320S0 323.594 0 328V440C0 444.406 3.594 448 8 448H120C124.406 448 128 444.406 128 440S124.406 432 120 432Z" })
  }
));
ExpandWideThin.displayName = "ExpandWideThin";
var ExpandWide_default = ExpandWideThin;
