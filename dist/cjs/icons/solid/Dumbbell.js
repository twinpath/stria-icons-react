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
var Dumbbell_exports = {};
__export(Dumbbell_exports, {
  default: () => Dumbbell_default
});
module.exports = __toCommonJS(Dumbbell_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DumbbellSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M104 96H56C42.75 96 32 106.75 32 120V224C14.328 224 0 238.326 0 256C0 273.672 14.328 288 32 288V392C32 405.25 42.75 416 56 416H104C117.25 416 128 405.25 128 392V120C128 106.75 117.25 96 104 96ZM456 32H408C394.75 32 384 42.75 384 56V224H256V56C256 42.75 245.25 32 232 32H184C170.75 32 160 42.75 160 56V456C160 469.25 170.75 480 184 480H232C245.25 480 256 469.25 256 456V288H384V456C384 469.25 394.75 480 408 480H456C469.25 480 480 469.25 480 456V56C480 42.75 469.25 32 456 32ZM608 224V120C608 106.75 597.25 96 584 96H536C522.75 96 512 106.75 512 120V392C512 405.25 522.75 416 536 416H584C597.25 416 608 405.25 608 392V288C625.672 288 640 273.672 640 256C640 238.326 625.672 224 608 224Z" })
  }
));
DumbbellSolid.displayName = "DumbbellSolid";
var Dumbbell_default = DumbbellSolid;
