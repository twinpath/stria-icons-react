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
var Transgender_exports = {};
__export(Transgender_exports, {
  default: () => Transgender_default
});
module.exports = __toCommonJS(Transgender_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TransgenderRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 0H376C362.75 0 352 10.75 352 24S362.75 48 376 48H414.062L371.053 91.01C340.188 64.283 300.033 48 256 48C158.799 48 80 126.799 80 224C80 313.039 146.182 386.443 232 398.176V424H208C194.75 424 184 434.75 184 448S194.75 472 208 472H232V488C232 501.25 242.75 512 256 512S280 501.25 280 488V472H304C317.25 472 328 461.25 328 448S317.25 424 304 424H280V398.176C365.818 386.443 432 313.039 432 224C432 188.174 421.232 154.891 402.848 127.09L448 81.938V120C448 133.25 458.75 144 472 144S496 133.25 496 120V24C496 10.75 485.25 0 472 0ZM256 352C185.42 352 128 294.58 128 224S185.42 96 256 96S384 153.42 384 224S326.58 352 256 352Z" })
  }
));
TransgenderRegular.displayName = "TransgenderRegular";
var Transgender_default = TransgenderRegular;
