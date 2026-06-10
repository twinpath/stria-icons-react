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
var Avocado_exports = {};
__export(Avocado_exports, {
  default: () => Avocado_default
});
module.exports = __toCommonJS(Avocado_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AvocadoRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 142.318C512 70.266 455.555 0 371.464 0C332.255 0 292.751 15.734 263.405 45.174L263.239 45.342C232.202 76.479 192.976 97.303 150.634 108.908C115.364 118.576 0 170.828 0 306.706C0 420.521 92.755 512 205.062 512C257.433 512 309.796 491.959 349.755 451.871C417.401 384.006 392.311 321.853 465.735 248.189L470.093 243.818C498.031 215.79 512 179.054 512 142.318ZM463.998 142.261C463.998 167.553 453.971 192 436.097 209.934L431.739 214.305C334.171 312.185 366.651 464 205.062 464C136.55 464 47.986 408.841 47.986 306.705C47.986 233.48 98.021 173.098 163.321 155.201C295.789 118.892 291.965 48 371.464 48C429.844 48 463.998 97.935 463.998 142.261ZM247 191.999C186.488 191.999 127.927 250.663 127.927 311.341C127.927 339.651 145.315 383.999 200.422 383.999C260.931 383.999 319.498 325.338 319.498 264.66C319.498 236.345 302.109 191.999 247 191.999Z" })
  }
));
AvocadoRegular.displayName = "AvocadoRegular";
var Avocado_default = AvocadoRegular;
