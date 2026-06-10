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
var BriefcaseClock_exports = {};
__export(BriefcaseClock_exports, {
  default: () => BriefcaseClock_default
});
module.exports = __toCommonJS(BriefcaseClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BriefcaseClockRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 224C416.471 224 352 288.469 352 368S416.471 512 496 512S640 447.531 640 368S575.529 224 496 224ZM544 384H496C487.156 384 480 376.844 480 368V304C480 295.156 487.156 288 496 288S512 295.156 512 304V352H544C552.844 352 560 359.156 560 368S552.844 384 544 384ZM64 432C55.199 432 48 424.799 48 416V304H192V320C192 337.672 206.326 352 224 352H288C305.674 352 320 337.672 320 320V304H332.182C339.031 286.484 348.453 270.262 360.232 256H48V160C48 151.199 55.199 144 64 144H448C456.801 144 464 151.199 464 160V195.047C474.391 193.135 485.057 192 496 192C501.402 192 506.723 192.33 512 192.807V160C512 124.652 483.346 96 448 96H384V64C384 28.652 355.346 0 320 0H192C156.654 0 128 28.652 128 64V96H64C28.654 96 0 124.652 0 160V416C0 451.346 28.654 480 64 480H360.234C348.455 465.736 339.031 449.516 332.182 432H64ZM176 64C176 55.162 183.164 48 192 48H320C328.836 48 336 55.162 336 64V96H176V64Z" })
  }
));
BriefcaseClockRegular.displayName = "BriefcaseClockRegular";
var BriefcaseClock_default = BriefcaseClockRegular;
