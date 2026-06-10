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
var Asterisk_exports = {};
__export(Asterisk_exports, {
  default: () => Asterisk_default
});
module.exports = __toCommonJS(Asterisk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AsteriskRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M418.217 368C413.78 375.688 405.717 380 397.405 380C393.342 380 389.217 378.969 385.436 376.781L248.217 297.564V456C248.217 469.25 237.467 480 224.217 480S200.217 469.25 200.217 456V297.564L62.998 376.781C59.217 378.969 55.092 380 51.03 380C42.717 380 34.655 375.688 30.217 368C23.592 356.531 27.53 341.844 38.998 335.219L176.221 256L38.998 176.781C27.53 170.156 23.592 155.469 30.217 144C36.811 132.562 51.498 128.531 62.998 135.219L200.217 214.436V56C200.217 42.75 210.967 32 224.217 32S248.217 42.75 248.217 56V214.436L385.436 135.219C396.967 128.531 411.592 132.562 418.217 144C424.842 155.469 420.905 170.156 409.436 176.781L272.213 256L409.436 335.219C420.905 341.844 424.842 356.531 418.217 368Z" })
  }
));
AsteriskRegular.displayName = "AsteriskRegular";
var Asterisk_default = AsteriskRegular;
