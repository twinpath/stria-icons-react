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
var ArrowDownArrowUp_exports = {};
__export(ArrowDownArrowUp_exports, {
  default: () => ArrowDownArrowUp_default
});
module.exports = __toCommonJS(ArrowDownArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownArrowUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M206.372 335.961L151.999 394.914V56.023C151.999 42.758 141.249 32 127.999 32S103.999 42.758 103.999 56.023V394.914L49.626 335.961C44.907 330.836 38.47 328.242 32.001 328.242C26.189 328.242 20.345 330.336 15.722 334.617C5.972 343.594 5.378 358.797 14.378 368.555L110.374 472.633C119.437 482.453 136.562 482.453 145.624 472.633L241.62 368.555C250.62 358.797 250.027 343.594 240.277 334.617C230.497 325.547 215.31 326.203 206.372 335.961ZM433.62 143.445L337.624 39.367C328.562 29.547 311.437 29.547 302.374 39.367L206.378 143.445C197.378 153.203 197.972 168.406 207.722 177.383C212.345 181.664 218.189 183.758 224.001 183.758C230.47 183.758 236.907 181.164 241.626 176.039L295.999 117.086V455.977C295.999 469.242 306.749 480 319.999 480S343.999 469.242 343.999 455.977V117.086L398.372 176.039C407.31 185.797 422.497 186.453 432.277 177.383C442.027 168.406 442.62 153.203 433.62 143.445Z" })
  }
));
ArrowDownArrowUpRegular.displayName = "ArrowDownArrowUpRegular";
var ArrowDownArrowUp_default = ArrowDownArrowUpRegular;
