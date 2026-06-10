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
var PaintRoller_exports = {};
__export(PaintRoller_exports, {
  default: () => PaintRoller_default
});
module.exports = __toCommonJS(PaintRoller_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaintRollerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 112V48C416 21.49 394.508 0 368 0H48C21.492 0 0 21.49 0 48V112C0 138.51 21.492 160 48 160H368C394.508 160 416 138.51 416 112ZM16 112V48C16 30.355 30.355 16 48 16H368C385.645 16 400 30.355 400 48V112C400 129.645 385.645 144 368 144H48C30.355 144 16 129.645 16 112ZM456 64C451.594 64 448 67.594 448 72S451.594 80 456 80C478.062 80 496 97.938 496 120V200C496 222.062 478.062 240 456 240H256C233.938 240 216 257.938 216 280V320H192C174.328 320 160 334.326 160 352V480C160 497.674 174.328 512 192 512H256C273.672 512 288 497.674 288 480V352C288 334.326 273.672 320 256 320H232V280C232 266.781 242.781 256 256 256H456C486.875 256 512 230.875 512 200V120C512 89.125 486.875 64 456 64ZM256 336C264.824 336 272 343.178 272 352V480C272 488.822 264.824 496 256 496H192C183.176 496 176 488.822 176 480V352C176 343.178 183.176 336 192 336H256Z" })
  }
));
PaintRollerThin.displayName = "PaintRollerThin";
var PaintRoller_default = PaintRollerThin;
