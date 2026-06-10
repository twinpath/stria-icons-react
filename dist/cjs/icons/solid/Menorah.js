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
var Menorah_exports = {};
__export(Menorah_exports, {
  default: () => Menorah_default
});
module.exports = __toCommonJS(Menorah_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MenorahSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 144C544 135.125 536.875 128 528 128H496C487.125 128 480 135.125 480 144V288H544V144ZM416 96C433.625 96 448 81.625 448 64S416 0 416 0S384 46.375 384 64S398.375 96 416 96ZM448 144C448 135.125 440.875 128 432 128H400C391.125 128 384 135.125 384 144V288H448V144ZM608 96C625.625 96 640 81.625 640 64S608 0 608 0S576 46.375 576 64S590.375 96 608 96ZM320 96C337.625 96 352 81.625 352 64S320 0 320 0S288 46.375 288 64S302.375 96 320 96ZM512 96C529.625 96 544 81.625 544 64S512 0 512 0S480 46.375 480 64S494.375 96 512 96ZM624 128H592C583.164 128 576 135.164 576 144V288C576 305.6 561.6 320 544 320H352V144C352 135.164 344.836 128 336 128H304C295.164 128 288 135.164 288 144V320H96C78.4 320 64 305.6 64 288V144C64 135.164 56.838 128 48 128H16C7.164 128 0 135.164 0 144V288C0 341.02 42.98 384 96 384H288V448H176C149.49 448 128 469.49 128 496C128 504.836 135.164 512 144 512H496C504.836 512 512 504.836 512 496C512 469.49 490.51 448 464 448H352V384H544C597.02 384 640 341.02 640 288V144C640 135.164 632.836 128 624 128ZM160 144C160 135.125 152.875 128 144 128H112C103.125 128 96 135.125 96 144V288H160V144ZM224 96C241.625 96 256 81.625 256 64S224 0 224 0S192 46.375 192 64S206.375 96 224 96ZM32 96C49.625 96 64 81.625 64 64S32 0 32 0S0 46.375 0 64S14.375 96 32 96ZM128 96C145.625 96 160 81.625 160 64S128 0 128 0S96 46.375 96 64S110.375 96 128 96ZM256 144C256 135.125 248.875 128 240 128H208C199.125 128 192 135.125 192 144V288H256V144Z" })
  }
));
MenorahSolid.displayName = "MenorahSolid";
var Menorah_default = MenorahSolid;
