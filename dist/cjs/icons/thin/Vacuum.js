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
var Vacuum_exports = {};
__export(Vacuum_exports, {
  default: () => Vacuum_default
});
module.exports = __toCommonJS(Vacuum_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VacuumThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 352C323.818 352 288 387.816 288 432S323.818 512 368 512C412.184 512 448 476.184 448 432S412.184 352 368 352ZM368 496C332.711 496 304 467.289 304 432S332.711 368 368 368C403.291 368 432 396.711 432 432S403.291 496 368 496ZM640 112C640 50.25 589.75 0 528 0H334.672C270.438 0 215.844 43.781 201.906 106.469L129.576 432H56C25.125 432 0 457.125 0 488C0 501.219 10.766 512 24 512H176C189.234 512 200 501.219 200 488V456C200 442.781 189.234 432 176 432H145.979L217.531 109.969C229.828 54.625 278 16 334.672 16H528C580.938 16 624 59.062 624 112C624 156.807 592.584 195.705 549.104 205.512C519.189 159.027 467.27 128 408 128H392C369.938 128 352 145.938 352 168V320C352 324.406 355.578 328 360 328S368 324.406 368 320V168C368 154.781 378.766 144 392 144H408C491.812 144 560 212.188 560 296V472C560 485.219 549.234 496 536 496H448C443.578 496 440 499.594 440 504S443.578 512 448 512H536C558.062 512 576 494.062 576 472V296C576 268.447 568.697 242.809 556.889 219.838C605.342 206.844 640 162.773 640 112ZM176 448C180.406 448 184 451.594 184 456V488C184 492.406 180.406 496 176 496H24C19.594 496 16 492.406 16 488C16 465.938 33.938 448 56 448H176Z" })
  }
));
VacuumThin.displayName = "VacuumThin";
var Vacuum_default = VacuumThin;
