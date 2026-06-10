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
var BookMedical_exports = {};
__export(BookMedical_exports, {
  default: () => BookMedical_default
});
module.exports = __toCommonJS(BookMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookMedicalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 368V48C448 21.492 426.51 0 400 0H80C35.816 0 0 35.816 0 80V448C0 483.344 28.654 512 64 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.055C434.584 406.426 448 388.832 448 368ZM384 480H64C46.359 480 32 465.641 32 448S46.359 416 64 416H384V480ZM400 384H64C52.291 384 41.451 387.391 32 392.898V80C32 53.492 53.49 32 80 32H400C408.836 32 416 39.164 416 48V368C416 376.836 408.836 384 400 384ZM320 160H272V112C272 103.164 264.836 96 256 96H224C215.164 96 208 103.164 208 112V160H160C151.164 160 144 167.164 144 176V208C144 216.836 151.164 224 160 224H208V272C208 280.836 215.164 288 224 288H256C264.836 288 272 280.836 272 272V224H320C328.836 224 336 216.836 336 208V176C336 167.164 328.836 160 320 160Z" })
  }
));
BookMedicalLight.displayName = "BookMedicalLight";
var BookMedical_default = BookMedicalLight;
