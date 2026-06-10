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
var CircleRight_exports = {};
__export(CircleRight_exports, {
  default: () => CircleRight_default
});
module.exports = __toCommonJS(CircleRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 256C496 123.42 388.58 16 256 16S16 123.42 16 256C16 388.582 123.42 496 256 496S496 388.582 496 256ZM265.875 382.781C259.891 380.312 256 374.469 256 368V304H160C142.327 304 128 289.673 128 272V240C128 222.327 142.327 208 160 208H256V144C256 137.531 259.891 131.688 265.875 129.219C271.859 126.734 278.734 128.109 283.313 132.687L395.313 244.687C401.56 250.935 401.56 261.065 395.313 267.312L283.313 379.312C278.734 383.891 271.859 385.266 265.875 382.781Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M265.875 382.781C259.891 380.312 256 374.469 256 368V304H160C142.327 304 128 289.673 128 272V240C128 222.327 142.327 208 160 208H256V144C256 137.531 259.891 131.688 265.875 129.219C271.859 126.734 278.734 128.109 283.313 132.687L395.313 244.687C401.56 250.935 401.56 261.065 395.313 267.312L283.313 379.312C278.734 383.891 271.859 385.266 265.875 382.781Z" })
    ]
  }
));
CircleRightDuotone.displayName = "CircleRightDuotone";
var CircleRight_default = CircleRightDuotone;
