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
var LaptopCode_exports = {};
__export(LaptopCode_exports, {
  default: () => LaptopCode_default
});
module.exports = __toCommonJS(LaptopCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopCodeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 384H16C7.188 384 0 391.203 0 400V416C0 451.203 28.812 480 64 480H576C611.188 480 640 451.203 640 416V400C640 391.203 632.812 384 624 384ZM624 416C624 442.469 602.469 464 576 464H64C37.531 464 16 442.469 16 416V400H624V416ZM72 352C76.418 352 80 348.418 80 344V80C80 62.328 94.328 48 112 48H528C545.672 48 560 62.328 560 80V344C560 348.418 563.582 352 568 352S576 348.418 576 344V80C576 53.602 554.398 32 528 32H112C85.602 32 64 53.602 64 80V344C64 348.418 67.582 352 72 352ZM269.656 146.344C266.531 143.219 261.469 143.219 258.344 146.344L194.344 210.344C191.219 213.469 191.219 218.531 194.344 221.656L258.344 285.656C259.906 287.219 261.953 288 264 288S268.094 287.219 269.656 285.656C272.781 282.531 272.781 277.469 269.656 274.344L211.312 216L269.656 157.656C272.781 154.531 272.781 149.469 269.656 146.344ZM370.344 285.656C371.906 287.219 373.953 288 376 288S380.094 287.219 381.656 285.656L445.656 221.656C448.781 218.531 448.781 213.469 445.656 210.344L381.656 146.344C378.531 143.219 373.469 143.219 370.344 146.344S367.219 154.531 370.344 157.656L428.688 216L370.344 274.344C367.219 277.469 367.219 282.531 370.344 285.656Z" })
  }
));
LaptopCodeThin.displayName = "LaptopCodeThin";
var LaptopCode_default = LaptopCodeThin;
