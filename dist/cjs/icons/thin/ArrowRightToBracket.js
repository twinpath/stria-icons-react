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
var ArrowRightToBracket_exports = {};
__export(ArrowRightToBracket_exports, {
  default: () => ArrowRightToBracket_default
});
module.exports = __toCommonJS(ArrowRightToBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightToBracketThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 32H392C387.578 32 384 35.578 384 40S387.578 48 392 48H472C485.234 48 496 58.766 496 72V440C496 453.234 485.234 464 472 464H392C387.578 464 384 467.578 384 472S387.578 480 392 480H472C494.062 480 512 462.062 512 440V72C512 49.938 494.062 32 472 32ZM381.656 250.344L197.656 66.344C196.094 64.781 194.062 64 192 64S187.906 64.781 186.344 66.344C183.219 69.469 183.219 74.531 186.344 77.656L356.688 248H8C3.594 248 0 251.578 0 256S3.594 264 8 264H356.688L186.344 434.344C183.219 437.469 183.219 442.531 186.344 445.656C187.906 447.219 189.938 448 192 448S196.094 447.219 197.656 445.656L381.656 261.656C383.219 260.094 384 258.047 384 256S383.219 251.906 381.656 250.344Z" })
  }
));
ArrowRightToBracketThin.displayName = "ArrowRightToBracketThin";
var ArrowRightToBracket_default = ArrowRightToBracketThin;
