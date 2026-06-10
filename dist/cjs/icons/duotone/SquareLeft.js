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
var SquareLeft_exports = {};
__export(SquareLeft_exports, {
  default: () => SquareLeft_default
});
module.exports = __toCommonJS(SquareLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96ZM214.125 129.219C220.109 131.688 224 137.531 224 144V208H320C337.673 208 352 222.327 352 240V272C352 289.673 337.673 304 320 304H224V368C224 374.469 220.109 380.312 214.125 382.781C208.141 385.266 201.266 383.891 196.687 379.313L84.687 267.313C78.44 261.065 78.44 250.935 84.687 244.688L196.687 132.688C201.266 128.109 208.141 126.734 214.125 129.219Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M214.123 129.219C220.108 131.688 223.998 137.531 223.998 144V208H319.998C337.671 208 351.998 222.327 351.998 240V272C351.998 289.673 337.671 304 319.998 304H223.998V368C223.998 374.469 220.108 380.312 214.123 382.781C208.139 385.266 201.264 383.891 196.686 379.313L84.686 267.313C78.438 261.065 78.438 250.935 84.686 244.688L196.686 132.688C201.264 128.109 208.139 126.734 214.123 129.219Z" })
    ]
  }
));
SquareLeftDuotone.displayName = "SquareLeftDuotone";
var SquareLeft_default = SquareLeftDuotone;
