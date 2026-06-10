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
var LaptopMedical_exports = {};
__export(LaptopMedical_exports, {
  default: () => LaptopMedical_default
});
module.exports = __toCommonJS(LaptopMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopMedicalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72 352C76.418 352 80 348.418 80 344V80C80 62.328 94.328 48 112 48H528C545.672 48 560 62.328 560 80V344C560 348.418 563.582 352 568 352S576 348.418 576 344V80C576 53.602 554.398 32 528 32H112C85.602 32 64 53.602 64 80V344C64 348.418 67.582 352 72 352ZM624 384H16C7.188 384 0 391.203 0 400V416C0 451.203 28.812 480 64 480H576C611.188 480 640 451.203 640 416V400C640 391.203 632.812 384 624 384ZM624 416C624 442.469 602.469 464 576 464H64C37.531 464 16 442.469 16 416V400H624V416ZM304 312H336C349.234 312 360 301.234 360 288V248H400C413.234 248 424 237.234 424 224V192C424 178.766 413.234 168 400 168H360V128C360 114.766 349.234 104 336 104H304C290.766 104 280 114.766 280 128V168H240C226.766 168 216 178.766 216 192V224C216 237.234 226.766 248 240 248H280V288C280 301.234 290.766 312 304 312ZM240 232C235.594 232 232 228.406 232 224V192C232 187.594 235.594 184 240 184H296V128C296 123.594 299.594 120 304 120H336C340.406 120 344 123.594 344 128V184H400C404.406 184 408 187.594 408 192V224C408 228.406 404.406 232 400 232H344V288C344 292.406 340.406 296 336 296H304C299.594 296 296 292.406 296 288V232H240Z" })
  }
));
LaptopMedicalThin.displayName = "LaptopMedicalThin";
var LaptopMedical_default = LaptopMedicalThin;
