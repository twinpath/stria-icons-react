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
const PersonSeatSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144.004 96C170.514 96 192.004 74.508 192.004 48S170.514 0 144.004 0S96.004 21.492 96.004 48S117.494 96 144.004 96ZM352 416H332.25L319.75 316.031C317.75 300.031 304.141 288 288 288H192V256H256C273.674 256 288 241.672 288 224C288 206.326 273.674 192 256 192H192V176C192 149.5 170.516 128 144 128S96 149.5 96 176V304C96 330.5 117.484 352 144 352C145.826 352 147.559 351.66 149.332 351.461C150.258 351.541 151.055 352 152 352H259.75L272.25 451.969C274.25 467.969 287.859 480 304 480H352C369.672 480 384 465.688 384 448S369.672 416 352 416ZM192 384H128C92.703 384 64 355.281 64 320V160C64 142.312 49.672 128 32 128S0 142.312 0 160V320C0 390.594 57.422 448 128 448H192C209.672 448 224 433.688 224 416S209.672 384 192 384Z" })
  }
));
PersonSeatSolid.displayName = "PersonSeatSolid";
var PersonSeat_default = PersonSeatSolid;
