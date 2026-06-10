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
var Microwave_exports = {};
__export(Microwave_exports, {
  default: () => Microwave_default
});
module.exports = __toCommonJS(Microwave_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrowaveLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V384C0 419.346 28.654 448 64 448V464C64 472.836 71.164 480 80 480C88.838 480 96 472.836 96 464V448H480V464C480 472.836 487.164 480 496 480C504.838 480 512 472.836 512 464V448C547.346 448 576 419.346 576 384V96C576 60.652 547.346 32 512 32ZM544 384C544 401.645 529.645 416 512 416H64C46.355 416 32 401.645 32 384V96C32 78.355 46.355 64 64 64H512C529.645 64 544 78.355 544 96V384ZM416 96H96C78.328 96 64 110.326 64 128V352C64 369.672 78.328 384 96 384H416C433.674 384 448 369.672 448 352V128C448 110.326 433.674 96 416 96ZM416 352H96V128H416V352ZM496 128C487.164 128 480 135.162 480 144C480 152.836 487.164 160 496 160C504.838 160 512 152.836 512 144C512 135.162 504.838 128 496 128ZM496 224C487.164 224 480 231.162 480 240C480 248.836 487.164 256 496 256C504.838 256 512 248.836 512 240C512 231.162 504.838 224 496 224Z" })
  }
));
MicrowaveLight.displayName = "MicrowaveLight";
var Microwave_default = MicrowaveLight;
