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
const CowbellCirclePlusSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 368C256 282.648 316.77 211.529 397.389 195.445L384.258 122.375C381.508 107.125 368.133 96 352.631 96H336.629V48C336.629 21.5 315.004 0 288.502 0H160.242C133.74 0 112.238 21.5 112.238 48V96H95.363C79.862 96 66.487 107.125 63.735 122.375L0.481 474.375C-2.849 493.33 11.49 512 32.108 512H331.002C285.692 480.158 256 427.586 256 368ZM160.008 48H288.018V96H160.008V48ZM432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM496 384H448V432C448 440.836 440.836 448 432 448S416 440.836 416 432V384H368C359.164 384 352 376.836 352 368S359.164 352 368 352H416V304C416 295.164 423.164 288 432 288S448 295.164 448 304V352H496C504.836 352 512 359.164 512 368S504.836 384 496 384Z" })
  }
));
CowbellCirclePlusSolid.displayName = "CowbellCirclePlusSolid";
var CowbellCirclePlus_default = CowbellCirclePlusSolid;
