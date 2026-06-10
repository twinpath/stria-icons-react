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
var MugTeaSaucer_exports = {};
__export(MugTeaSaucer_exports, {
  default: () => MugTeaSaucer_default
});
module.exports = __toCommonJS(MugTeaSaucer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugTeaSaucerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568 416C563.594 416 560 419.578 560 424C560 446.062 542.062 464 520 464H56C33.938 464 16 446.062 16 424C16 419.578 12.406 416 8 416S0 419.578 0 424C0 454.875 25.125 480 56 480H520C550.875 480 576 454.875 576 424C576 419.578 572.406 416 568 416ZM528 32H120C113.625 32 107.5 34.5 103 39S96 49.625 96 56V288C96 341 139 384 192 384H384C437 384 480 341 480 288V256H528C589.75 256 640 205.75 640 144S589.75 32 528 32ZM464 288C464 332.111 428.111 368 384 368H192C147.889 368 112 332.111 112 288V56C112 50.871 116.172 48 120 48H216V88L169.373 134.627C163.371 140.629 160 148.768 160 157.254V224C160 241.674 174.328 256 192 256H256C273.674 256 288 241.674 288 224V157.254C288 148.768 284.629 140.629 278.629 134.627L232 88V48H464V288ZM224 102.627L267.312 145.939C270.336 148.963 272 152.98 272 157.254V224C272 232.822 264.822 240 256 240H192C183.178 240 176 232.822 176 224V157.254C176 152.98 177.666 148.963 180.686 145.941L224 102.627ZM528 240H480V48H528C580.938 48 624 91.062 624 144S580.938 240 528 240Z" })
  }
));
MugTeaSaucerThin.displayName = "MugTeaSaucerThin";
var MugTeaSaucer_default = MugTeaSaucerThin;
