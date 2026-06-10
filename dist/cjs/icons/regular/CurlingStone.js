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
var CurlingStone_exports = {};
__export(CurlingStone_exports, {
  default: () => CurlingStone_default
});
module.exports = __toCommonJS(CurlingStone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CurlingStoneRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 224C480 188.652 451.346 160 416 160H224V120C224 97.938 241.938 80 264 80H392C405.25 80 416 69.25 416 56S405.25 32 392 32H264C215.469 32 176 71.469 176 120V160H160C124.654 160 96 188.652 96 224C42.98 224 0 266.98 0 320V384C0 437.02 42.98 480 96 480H480C533.02 480 576 437.02 576 384V320C576 266.98 533.02 224 480 224ZM96 272H480C506.467 272 528 293.531 528 320V328H48V320C48 293.531 69.533 272 96 272ZM480 432H96C69.533 432 48 410.469 48 384V376H528V384C528 410.469 506.467 432 480 432Z" })
  }
));
CurlingStoneRegular.displayName = "CurlingStoneRegular";
var CurlingStone_default = CurlingStoneRegular;
