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
var Spa_exports = {};
__export(Spa_exports, {
  default: () => Spa_default
});
module.exports = __toCommonJS(Spa_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpaRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568.25 192C546.875 192.125 483.75 195.625 420.5 228C393.875 149.75 351.25 81.5 298.75 35.75C295.875 33.25 291.875 32 288 32S280.25 33.25 277.25 35.75C224.75 81.5 182.125 149.75 155.5 228C92.25 195.625 29.125 192.125 7.75 192C3.375 192 0 195.375 0 199.875C0.25 227.75 7.125 326 88.75 399.125C171 479.125 252.375 480 285.875 480H290.375C323.875 480 405.125 479 487.25 399.125C568.875 326 575.75 227.75 576 199.875C576 195.375 572.625 192 568.25 192ZM122.25 364.75L121.5 364L120.75 363.375C78.375 325.375 60.625 279 53.125 244.125C92 250.75 145.125 267.5 188.125 309.375L188.875 310.125L189.625 310.75C213.125 331.875 230.75 357.125 243.625 388.25L261.375 431.25C227.625 428.625 175.75 416.875 122.25 364.75ZM288 369.875C275 338.25 254.75 304.625 221.625 275C213.625 267.25 205.375 260.75 197 254.375C217 190.5 248.75 133.625 288 92C327.25 133.625 359 190.5 379 254.375C370.625 260.75 362.375 267.25 354.375 275C321.25 304.625 301 338.25 288 369.875ZM455.25 363.375L454.5 364L453.75 364.75C400.125 417 348.25 428.625 314.5 431.25L332.375 388.25C345.25 357.125 362.875 331.875 386.375 310.75L387.125 310.125L387.875 309.375C430.875 267.5 484.125 250.75 522.875 244.125C515.375 279 497.625 325.375 455.25 363.375Z" })
  }
));
SpaRegular.displayName = "SpaRegular";
var Spa_default = SpaRegular;
