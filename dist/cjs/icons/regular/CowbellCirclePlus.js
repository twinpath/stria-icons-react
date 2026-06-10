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
var CowbellCirclePlus_exports = {};
__export(CowbellCirclePlus_exports, {
  default: () => CowbellCirclePlus_default
});
module.exports = __toCommonJS(CowbellCirclePlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CowbellCirclePlusRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M284.6 464H51.106L108.606 144H339.356L351.504 211.605C365.783 204.24 381.141 198.688 397.362 195.449L386.592 135.51C382.483 112.643 362.582 96 339.348 96H320.59V48C320.59 21.49 299.1 0 272.59 0H176.215C149.705 0 128.215 21.49 128.215 48V96H108.614C85.379 96 65.481 112.643 61.371 135.51L0.481 474.375C-2.849 493.33 11.489 512 32.106 512H331.002C312.645 499.1 296.879 482.814 284.6 464ZM175.965 48H271.965V96H175.965V48ZM432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM496 384H448V432C448 440.836 440.836 448 432 448S416 440.836 416 432V384H368C359.164 384 352 376.836 352 368S359.164 352 368 352H416V304C416 295.164 423.164 288 432 288S448 295.164 448 304V352H496C504.836 352 512 359.164 512 368S504.836 384 496 384Z" })
  }
));
CowbellCirclePlusRegular.displayName = "CowbellCirclePlusRegular";
var CowbellCirclePlus_default = CowbellCirclePlusRegular;
