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
var PersonSeat_exports = {};
__export(PersonSeat_exports, {
  default: () => PersonSeat_default
});
module.exports = __toCommonJS(PersonSeat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSeatRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 96C170.51 96 192 74.508 192 48S170.51 0 144 0S96 21.492 96 48S117.49 96 144 96ZM360 432H317.188L303.812 325.031C302.312 313 292.109 304 280 304H160V240H248C261.254 240 272 229.254 272 216C272 202.744 261.254 192 248 192H160V160C160 142.312 145.672 128 128 128S96 142.312 96 160V320C96 337.688 110.328 352 128 352C128.887 352 258.812 352 258.812 352L272.188 458.969C273.688 471 283.891 480 296 480H360C373.25 480 384 469.25 384 456S373.25 432 360 432ZM200 400H125.999C82.984 400 48 365 48 322V152C48 138.75 37.25 128 24 128S0 138.75 0 152V322C0 391.469 56.531 448 125.999 448H200C213.25 448 224 437.25 224 424S213.25 400 200 400Z" })
  }
));
PersonSeatRegular.displayName = "PersonSeatRegular";
var PersonSeat_default = PersonSeatRegular;
