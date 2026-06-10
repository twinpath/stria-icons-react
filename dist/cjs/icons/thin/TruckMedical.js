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
var TruckMedical_exports = {};
__export(TruckMedical_exports, {
  default: () => TruckMedical_default
});
module.exports = __toCommonJS(TruckMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckMedicalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632 400H608V237.25C608 226.562 603.844 216.531 596.281 208.969L495.031 107.719C487.594 100.266 477.281 96 466.75 96H416V48C416 21.49 394.508 0 368 0H48C21.492 0 0 21.49 0 48V368C0 394.51 21.492 416 48 416H72.805C72.562 418.676 72 421.26 72 424C72 472.602 111.398 512 160 512S248 472.602 248 424C248 421.26 247.438 418.676 247.195 416H392.805C392.562 418.676 392 421.26 392 424C392 472.602 431.398 512 480 512S568 472.602 568 424C568 421.26 567.473 418.67 567.191 416H632C636.406 416 640 412.422 640 408S636.406 400 632 400ZM160 496C120.301 496 88 463.701 88 424S120.301 352 160 352S232 384.299 232 424S199.699 496 160 496ZM400 387.75C398.219 391.668 396.93 395.801 395.734 400H244.266C233.766 363.146 200.223 336 160 336S86.234 363.146 75.734 400H48C30.355 400 16 385.645 16 368V48C16 30.355 30.355 16 48 16H368C385.645 16 400 30.355 400 48V387.75ZM416 112H466.75C473.062 112 479.25 114.562 483.719 119.031L584.969 220.281C586.035 221.348 586.605 222.76 587.445 224H416V112ZM480 496C440.301 496 408 463.701 408 424S440.301 352 480 352S552 384.299 552 424S519.699 496 480 496ZM592 400H564.203C553.703 363.156 520.211 336 480 336C454.695 336 432.055 346.826 416 363.926V240H592V400ZM296 152H248V104C248 95.172 240.828 88 232 88H184C175.172 88 168 95.172 168 104V152H120C111.172 152 104 159.172 104 168V216C104 224.828 111.172 232 120 232H168V280C168 288.828 175.172 296 184 296H232C240.828 296 248 288.828 248 280V232H296C304.828 232 312 224.828 312 216V168C312 159.172 304.828 152 296 152ZM296 216H232V280H184V216H120V168H184V104H232V168H296V216Z" })
  }
));
TruckMedicalThin.displayName = "TruckMedicalThin";
var TruckMedical_default = TruckMedicalThin;
